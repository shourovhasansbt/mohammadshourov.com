/**
 * Vercel Node.js Serverless Endpoint: POST /api/remove
 * Supports:
 * 1) Cloud AI Inpainting via Clipdrop API if process.env.CLIPDROP_API_KEY is configured
 * 2) Built-in Node.js Multi-Scale + Exemplar Inpainting fallback using pngjs
 *
 * Accepts JSON: { imageBase64: "data:image/png;base64,...", maskBase64: "data:image/png;base64,...", mode: "smart"|"high"|"fast" }
 */
const { PNG } = require('pngjs');

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function clamp(v, min, max) {
  return v < min ? min : v > max ? max : v;
}

function decodeBase64Png(input) {
  if (!input || typeof input !== 'string') {
    throw new Error('Missing base64 PNG data');
  }
  const clean = input.replace(/^data:image\/\w+;base64,/, '');
  const buf = Buffer.from(clean, 'base64');
  return PNG.sync.read(buf);
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  return JSON.parse(raw || '{}');
}

/**
 * Optional external Clipdrop API call when CLIPDROP_API_KEY env var is set in Vercel.
 */
async function callClipdropCleanup(imagePngBuffer, maskPngBuffer, apiKey) {
  const form = new FormData();
  form.append('image_file', new Blob([imagePngBuffer], { type: 'image/png' }), 'image.png');
  form.append('mask_file', new Blob([maskPngBuffer], { type: 'image/png' }), 'mask.png');

  const response = await fetch('https://clipdrop-api.co/cleanup/v1', {
    method: 'POST',
    headers: { 'x-api-key': apiKey },
    body: form
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Clipdrop API error (${response.status}): ${errText}`);
  }

  const arrBuf = await response.arrayBuffer();
  return Buffer.from(arrBuf);
}

function downsample2x(rgb, mask, w, h) {
  const nw = Math.max(1, Math.floor(w / 2));
  const nh = Math.max(1, Math.floor(h / 2));
  const nrgb = new Float32Array(nw * nh * 3);
  const nmask = new Uint8Array(nw * nh);

  for (let y = 0; y < nh; y++) {
    const sy = y * 2;
    for (let x = 0; x < nw; x++) {
      const sx = x * 2;
      let r = 0, g = 0, b = 0, valid = 0;
      for (let dy = 0; dy < 2; dy++) {
        const yy = Math.min(h - 1, sy + dy);
        for (let dx = 0; dx < 2; dx++) {
          const xx = Math.min(w - 1, sx + dx);
          const idx = yy * w + xx;
          if (mask[idx] === 0) {
            r += rgb[idx * 3];
            g += rgb[idx * 3 + 1];
            b += rgb[idx * 3 + 2];
            valid++;
          }
        }
      }
      const nidx = y * nw + x;
      if (valid > 0) {
        nrgb[nidx * 3] = r / valid;
        nrgb[nidx * 3 + 1] = g / valid;
        nrgb[nidx * 3 + 2] = b / valid;
        nmask[nidx] = 0;
      } else {
        nmask[nidx] = 1;
      }
    }
  }
  return { rgb: nrgb, mask: nmask, w: nw, h: nh };
}

function upsampleIntoMasked(coarseRgb, cw, ch, fineRgb, fineMask, fw, fh) {
  for (let y = 0; y < fh; y++) {
    const gy = (y / fh) * (ch - 1);
    const y0 = Math.floor(gy);
    const y1 = Math.min(ch - 1, y0 + 1);
    const fy = gy - y0;

    for (let x = 0; x < fw; x++) {
      const idx = y * fw + x;
      if (fineMask[idx] === 0) continue;

      const gx = (x / fw) * (cw - 1);
      const x0 = Math.floor(gx);
      const x1 = Math.min(cw - 1, x0 + 1);
      const fx = gx - x0;

      const i00 = (y0 * cw + x0) * 3;
      const i10 = (y0 * cw + x1) * 3;
      const i01 = (y1 * cw + x0) * 3;
      const i11 = (y1 * cw + x1) * 3;

      for (let c = 0; c < 3; c++) {
        const top = coarseRgb[i00 + c] * (1 - fx) + coarseRgb[i10 + c] * fx;
        const bot = coarseRgb[i01 + c] * (1 - fx) + coarseRgb[i11 + c] * fx;
        fineRgb[idx * 3 + c] = top * (1 - fy) + bot * fy;
      }
    }
  }
}

function diffuseMask(rgb, mask, w, h, iterations) {
  let sumR = 0, sumG = 0, sumB = 0, valid = 0;
  for (let i = 0; i < w * h; i++) {
    if (mask[i] === 0) {
      sumR += rgb[i * 3];
      sumG += rgb[i * 3 + 1];
      sumB += rgb[i * 3 + 2];
      valid++;
    }
  }
  const avgR = valid ? sumR / valid : 128;
  const avgG = valid ? sumG / valid : 128;
  const avgB = valid ? sumB / valid : 128;

  const maskedIndices = [];
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      if (mask[idx] === 1) {
        maskedIndices.push(idx);
        if (rgb[idx * 3] === 0 && rgb[idx * 3 + 1] === 0 && rgb[idx * 3 + 2] === 0) {
          rgb[idx * 3] = avgR;
          rgb[idx * 3 + 1] = avgG;
          rgb[idx * 3 + 2] = avgB;
        }
      }
    }
  }

  const omega = 1.45;
  const dirs = [
    [-1, 0, 1.0], [1, 0, 1.0], [0, -1, 1.0], [0, 1, 1.0],
    [-1, -1, 0.5], [1, -1, 0.5], [-1, 1, 0.5], [1, 1, 0.5]
  ];

  for (let it = 0; it < iterations; it++) {
    for (let k = 0; k < maskedIndices.length; k++) {
      const idx = maskedIndices[k];
      const x = idx % w;
      const y = (idx - x) / w;
      let sr = 0, sg = 0, sb = 0, wt = 0;

      for (let d = 0; d < dirs.length; d++) {
        const nx = x + dirs[d][0];
        const ny = y + dirs[d][1];
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
          const nidx = (ny * w + nx) * 3;
          const weight = dirs[d][2];
          sr += rgb[nidx] * weight;
          sg += rgb[nidx + 1] * weight;
          sb += rgb[nidx + 2] * weight;
          wt += weight;
        }
      }

      if (wt > 0) {
        const base = idx * 3;
        rgb[base] = clamp(rgb[base] + omega * (sr / wt - rgb[base]), 0, 255);
        rgb[base + 1] = clamp(rgb[base + 1] + omega * (sg / wt - rgb[base + 1]), 0, 255);
        rgb[base + 2] = clamp(rgb[base + 2] + omega * (sb / wt - rgb[base + 2]), 0, 255);
      }
    }
  }
}

function inpaintNodePng(imgPng, maskPng, mode) {
  const w = imgPng.width;
  const h = imgPng.height;
  if (maskPng.width !== w || maskPng.height !== h) {
    throw new Error('Image and mask dimensions must match');
  }

  const rgb = new Float32Array(w * h * 3);
  const mask = new Uint8Array(w * h);

  for (let i = 0; i < w * h; i++) {
    const p = i * 4;
    // Mask is white (>128) or alpha-present (>20) in masked region
    const isMasked = maskPng.data[p] > 128 || maskPng.data[p + 3] > 20 && (maskPng.data[p] + maskPng.data[p + 1] + maskPng.data[p + 2]) > 60;
    mask[i] = isMasked ? 1 : 0;
    if (!isMasked) {
      rgb[i * 3] = imgPng.data[p];
      rgb[i * 3 + 1] = imgPng.data[p + 1];
      rgb[i * 3 + 2] = imgPng.data[p + 2];
    }
  }

  // Multi-scale initialization
  const levels = [{ rgb, mask, w, h }];
  let cur = levels[0];
  while (cur.w > 24 && cur.h > 24 && levels.length < 6) {
    cur = downsample2x(cur.rgb, cur.mask, cur.w, cur.h);
    levels.push(cur);
  }
  for (let l = levels.length - 1; l >= 0; l--) {
    const lvl = levels[l];
    diffuseMask(lvl.rgb, lvl.mask, lvl.w, lvl.h, l === levels.length - 1 ? 55 : 24);
    if (l > 0) {
      const finer = levels[l - 1];
      upsampleIntoMasked(lvl.rgb, lvl.w, lvl.h, finer.rgb, finer.mask, finer.w, finer.h);
    }
  }

  // Exemplar synthesis on smart/high modes
  if (mode !== 'fast') {
    const patchRadius = mode === 'high' ? 5 : 4;
    const maxCandidates = mode === 'high' ? 460 : 300;
    const unfilled = new Uint8Array(mask);
    const confidence = new Float32Array(w * h);
    for (let i = 0; i < w * h; i++) confidence[i] = unfilled[i] === 0 ? 1.0 : 0.0;

    const validSources = [];
    const stride = mode === 'high' ? 2 : 3;
    for (let y = patchRadius; y < h - patchRadius; y += stride) {
      for (let x = patchRadius; x < w - patchRadius; x += stride) {
        let ok = true;
        for (let dy = -patchRadius; dy <= patchRadius && ok; dy += 2) {
          for (let dx = -patchRadius; dx <= patchRadius; dx += 2) {
            if (mask[(y + dy) * w + (x + dx)] === 1) {
              ok = false;
              break;
            }
          }
        }
        if (ok) validSources.push(y * w + x);
      }
    }

    if (validSources.length > 0) {
      let totalToFill = 0;
      for (let i = 0; i < unfilled.length; i++) if (unfilled[i] === 1) totalToFill++;
      let filled = 0;
      let stepCount = 0;
      const guideRgb = new Float32Array(rgb);

      while (filled < totalToFill) {
        let bestIdx = -1;
        let bestPriority = -1;

        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const idx = y * w + x;
            if (unfilled[idx] !== 1) continue;
            if (
              (x > 0 && unfilled[idx - 1] === 0) ||
              (x < w - 1 && unfilled[idx + 1] === 0) ||
              (y > 0 && unfilled[idx - w] === 0) ||
              (y < h - 1 && unfilled[idx + w] === 0)
            ) {
              let cSum = 0, cCnt = 0;
              for (let dy = -patchRadius; dy <= patchRadius; dy += 2) {
                const yy = y + dy;
                if (yy < 0 || yy >= h) continue;
                for (let dx = -patchRadius; dx <= patchRadius; dx += 2) {
                  const xx = x + dx;
                  if (xx < 0 || xx >= w) continue;
                  cSum += confidence[yy * w + xx];
                  cCnt++;
                }
              }
              const prio = (cCnt ? cSum / cCnt : 0.1) + 0.05;
              if (prio > bestPriority) {
                bestPriority = prio;
                bestIdx = idx;
              }
            }
          }
        }

        if (bestIdx === -1) {
          for (let i = 0; i < unfilled.length; i++) {
            if (unfilled[i] === 1) { bestIdx = i; break; }
          }
        }
        if (bestIdx === -1) break;

        const tx = bestIdx % w;
        const ty = (bestIdx - tx) / w;
        let bestSrc = validSources[0];
        let bestScore = Infinity;

        const step = Math.max(1, Math.floor(validSources.length / maxCandidates));
        for (let s = stepCount % step; s < validSources.length; s += step) {
          const sIdx = validSources[s];
          const sx = sIdx % w;
          const sy = (sIdx - sx) / w;
          let ssd = 0, samples = 0;

          for (let dy = -patchRadius; dy <= patchRadius; dy += 2) {
            const py = ty + dy, qy = sy + dy;
            if (py < 0 || py >= h || qy < 0 || qy >= h) continue;
            for (let dx = -patchRadius; dx <= patchRadius; dx += 2) {
              const px = tx + dx, qx = sx + dx;
              if (px < 0 || px >= w || qx < 0 || qx >= w) continue;
              const pIdx = py * w + px, qIdx = qy * w + qx;
              const dr = rgb[pIdx * 3] - rgb[qIdx * 3];
              const dg = rgb[pIdx * 3 + 1] - rgb[qIdx * 3 + 1];
              const db = rgb[pIdx * 3 + 2] - rgb[qIdx * 3 + 2];
              const wt = unfilled[pIdx] === 0 ? 1.0 : 0.22;
              ssd += (dr * dr + dg * dg + db * db) * wt;
              samples += wt;
            }
          }

          if (samples > 0) {
            const score = ssd / samples + Math.hypot(sx - tx, sy - ty) * 0.45;
            if (score < bestScore) {
              bestScore = score;
              bestSrc = sIdx;
            }
          }
        }

        const bsx = bestSrc % w;
        const bsy = (bestSrc - bsx) / w;
        for (let dy = -patchRadius; dy <= patchRadius; dy++) {
          const py = ty + dy, qy = bsy + dy;
          if (py < 0 || py >= h || qy < 0 || qy >= h) continue;
          for (let dx = -patchRadius; dx <= patchRadius; dx++) {
            const px = tx + dx, qx = bsx + dx;
            if (px < 0 || px >= w || qx < 0 || qx >= w) continue;
            const pIdx = py * w + px;
            if (unfilled[pIdx] === 1) {
              const qIdx = qy * w + qx;
              rgb[pIdx * 3] = rgb[qIdx * 3] * 0.82 + guideRgb[pIdx * 3] * 0.18;
              rgb[pIdx * 3 + 1] = rgb[qIdx * 3 + 1] * 0.82 + guideRgb[pIdx * 3 + 1] * 0.18;
              rgb[pIdx * 3 + 2] = rgb[qIdx * 3 + 2] * 0.82 + guideRgb[pIdx * 3 + 2] * 0.18;
              unfilled[pIdx] = 0;
              confidence[pIdx] = Math.max(0.15, bestPriority);
              filled++;
            }
          }
        }
        stepCount++;
      }
      diffuseMask(rgb, mask, w, h, 2);
    }
  }

  const outPng = new PNG({ width: w, height: h });
  for (let i = 0; i < w * h; i++) {
    const p = i * 4;
    if (mask[i] === 1) {
      outPng.data[p] = clamp(Math.round(rgb[i * 3]), 0, 255);
      outPng.data[p + 1] = clamp(Math.round(rgb[i * 3 + 1]), 0, 255);
      outPng.data[p + 2] = clamp(Math.round(rgb[i * 3 + 2]), 0, 255);
      outPng.data[p + 3] = 255;
    } else {
      outPng.data[p] = imgPng.data[p];
      outPng.data[p + 1] = imgPng.data[p + 1];
      outPng.data[p + 2] = imgPng.data[p + 2];
      outPng.data[p + 3] = imgPng.data[p + 3];
    }
  }
  return PNG.sync.write(outPng);
}

module.exports = async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    // Optional custom bearer token protection if API_SECRET is configured
    if (process.env.API_SECRET) {
      const auth = req.headers.authorization || '';
      if (auth !== `Bearer ${process.env.API_SECRET}`) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    }

    const body = await readJsonBody(req);
    const { imageBase64, maskBase64, mode = 'smart' } = body;

    if (!imageBase64 || !maskBase64) {
      return res.status(400).json({ error: 'imageBase64 and maskBase64 are required' });
    }

    const imgClean = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    const maskClean = maskBase64.replace(/^data:image\/\w+;base64,/, '');
    const imgBuf = Buffer.from(imgClean, 'base64');
    const maskBuf = Buffer.from(maskClean, 'base64');

    let outputPngBuffer;
    let engineUsed = 'vercel-nodejs';

    if (process.env.CLIPDROP_API_KEY) {
      outputPngBuffer = await callClipdropCleanup(imgBuf, maskBuf, process.env.CLIPDROP_API_KEY);
      engineUsed = 'clipdrop-cloud-ai';
    } else {
      const imgPng = decodeBase64Png(imageBase64);
      const maskPng = decodeBase64Png(maskBase64);
      outputPngBuffer = inpaintNodePng(imgPng, maskPng, mode);
    }

    return res.status(200).json({
      ok: true,
      engine: engineUsed,
      imageBase64: `data:image/png;base64,${outputPngBuffer.toString('base64')}`
    });
  } catch (err) {
    console.error('CleanPixel API error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
};
