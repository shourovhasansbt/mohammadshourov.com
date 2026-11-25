/**
 * Smart Local Image Inpainting Engine (Multi-Scale Pyramid + Exemplar PatchMatch + Feather Blend)
 * Works 100% client-side in HTML5 Canvas with zero external servers or API keys.
 */
(function (global) {
  'use strict';

  function clamp(v, min, max) {
    return v < min ? min : v > max ? max : v;
  }

  function nextFrame() {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }

  /**
   * Extracts tight bounding box around non-zero mask pixels with generous context padding.
   */
  function getMaskBoundingBox(maskAlpha, width, height, padding) {
    let minX = width, minY = height, maxX = -1, maxY = -1;
    let count = 0;
    for (let y = 0; y < height; y++) {
      const row = y * width;
      for (let x = 0; x < width; x++) {
        if (maskAlpha[row + x] > 20) {
          count++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    if (count === 0) return null;

    const x0 = Math.max(0, minX - padding);
    const y0 = Math.max(0, minY - padding);
    const x1 = Math.min(width - 1, maxX + padding);
    const y1 = Math.min(height - 1, maxY + padding);
    return {
      x0,
      y0,
      w: x1 - x0 + 1,
      h: y1 - y0 + 1,
      maskMinX: minX,
      maskMaxX: maxX,
      maskMinY: minY,
      maskMaxY: maxY,
      count
    };
  }

  /**
   * Downsamples RGBA + binary mask by 2x for multi-scale coarse initialization.
   */
  function downsample2x(rgb, mask, w, h) {
    const nw = Math.max(1, Math.floor(w / 2));
    const nh = Math.max(1, Math.floor(h / 2));
    const nrgb = new Float32Array(nw * nh * 3);
    const nmask = new Uint8Array(nw * nh);

    for (let y = 0; y < nh; y++) {
      const sy = y * 2;
      for (let x = 0; x < nw; x++) {
        const sx = x * 2;
        let r = 0, g = 0, b = 0, validCount = 0, maskedCount = 0;

        for (let dy = 0; dy < 2; dy++) {
          const yy = Math.min(h - 1, sy + dy);
          for (let dx = 0; dx < 2; dx++) {
            const xx = Math.min(w - 1, sx + dx);
            const idx = yy * w + xx;
            if (mask[idx] === 0) {
              r += rgb[idx * 3];
              g += rgb[idx * 3 + 1];
              b += rgb[idx * 3 + 2];
              validCount++;
            } else {
              maskedCount++;
            }
          }
        }

        const nidx = y * nw + x;
        if (validCount > 0) {
          nrgb[nidx * 3] = r / validCount;
          nrgb[nidx * 3 + 1] = g / validCount;
          nrgb[nidx * 3 + 2] = b / validCount;
          nmask[nidx] = 0;
        } else {
          nmask[nidx] = 1;
        }
      }
    }
    return { rgb: nrgb, mask: nmask, w: nw, h: nh };
  }

  /**
   * Bilinearly upsamples coarse RGB values into masked pixels of finer level.
   */
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

  /**
   * Harmonic + directional neighbor diffusion for smooth gradient initialization.
   */
  function diffuseMask(rgb, mask, w, h, iterations) {
    // Initialize any completely unknown pixels with nearest-neighbor or average valid boundary color
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
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
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

    // Also include edge rows/cols if mask touches boundary
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (y === 0 || y === h - 1 || x === 0 || x === w - 1) {
          const idx = y * w + x;
          if (mask[idx] === 1) maskedIndices.push(idx);
        }
      }
    }

    const omega = 1.45; // SOR over-relaxation for faster convergence
    for (let it = 0; it < iterations; it++) {
      for (let k = 0; k < maskedIndices.length; k++) {
        const idx = maskedIndices[k];
        const x = idx % w;
        const y = (idx - x) / w;

        let sr = 0, sg = 0, sb = 0, wt = 0;
        const dirs = [
          [-1, 0, 1.0], [1, 0, 1.0], [0, -1, 1.0], [0, 1, 1.0],
          [-1, -1, 0.5], [1, -1, 0.5], [-1, 1, 0.5], [1, 1, 0.5]
        ];
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
          const nr = sr / wt;
          const ng = sg / wt;
          const nb = sb / wt;
          const base = idx * 3;
          rgb[base] = clamp(rgb[base] + omega * (nr - rgb[base]), 0, 255);
          rgb[base + 1] = clamp(rgb[base + 1] + omega * (ng - rgb[base + 1]), 0, 255);
          rgb[base + 2] = clamp(rgb[base + 2] + omega * (nb - rgb[base + 2]), 0, 255);
        }
      }
    }
  }

  /**
   * Builds multi-scale pyramid and performs coarse-to-fine diffusion initialization.
   */
  function multiScaleInitialize(rgb, mask, w, h, diffusionPasses) {
    const levels = [{ rgb, mask, w, h }];
    let cur = levels[0];

    while (cur.w > 24 && cur.h > 24 && levels.length < 6) {
      cur = downsample2x(cur.rgb, cur.mask, cur.w, cur.h);
      levels.push(cur);
      let hasMask = false;
      for (let i = 0; i < cur.mask.length; i++) {
        if (cur.mask[i] === 1) {
          hasMask = true;
          break;
        }
      }
      if (!hasMask) break;
    }

    // Solve coarsest first, then propagate upward
    for (let l = levels.length - 1; l >= 0; l--) {
      const lvl = levels[l];
      diffuseMask(lvl.rgb, lvl.mask, lvl.w, lvl.h, l === levels.length - 1 ? 60 : diffusionPasses);
      if (l > 0) {
        const finer = levels[l - 1];
        upsampleIntoMasked(lvl.rgb, lvl.w, lvl.h, finer.rgb, finer.mask, finer.w, finer.h);
      }
    }
  }

  /**
   * Priority-guided Exemplar Texture Synthesis (Criminisi-inspired + Local Search)
   * Copies real texture patches from unmasked context into the masked zone.
   */
  async function exemplarSynthesize(rgb, originalMask, w, h, options, onProgress) {
    const patchRadius = options.patchRadius || 4; // 9x9 patch
    const maxCandidates = options.maxCandidates || 360;
    const isHigh = options.mode === 'high';

    // Working copy of fill state: 0 = valid/filled, 1 = unfilled
    const unfilled = new Uint8Array(originalMask);
    const confidence = new Float32Array(w * h);
    for (let i = 0; i < w * h; i++) {
      confidence[i] = unfilled[i] === 0 ? 1.0 : 0.0;
    }

    // Collect valid exemplar center coordinates (patches completely inside unmasked source)
    const validSources = [];
    const stride = isHigh ? 2 : 3;
    for (let y = patchRadius; y < h - patchRadius; y += stride) {
      for (let x = patchRadius; x < w - patchRadius; x += stride) {
        let allValid = true;
        for (let dy = -patchRadius; dy <= patchRadius && allValid; dy += 2) {
          const row = (y + dy) * w;
          for (let dx = -patchRadius; dx <= patchRadius; dx += 2) {
            if (originalMask[row + x + dx] === 1) {
              allValid = false;
              break;
            }
          }
        }
        if (allValid) validSources.push(y * w + x);
      }
    }

    if (validSources.length === 0) return;

    // Count total pixels to fill
    let totalToFill = 0;
    for (let i = 0; i < unfilled.length; i++) {
      if (unfilled[i] === 1) totalToFill++;
    }
    let filledSoFar = 0;
    let stepCount = 0;

    // Preserve diffusion-initialized RGB as guidance!
    const guideRgb = new Float32Array(rgb);

    while (filledSoFar < totalToFill) {
      // Find frontier pixels (unfilled pixels with at least one 4-neighbor filled)
      let bestIdx = -1;
      let bestPriority = -1;

      for (let y = 0; y < h; y++) {
        const row = y * w;
        for (let x = 0; x < w; x++) {
          const idx = row + x;
          if (unfilled[idx] !== 1) continue;

          if (
            (x > 0 && unfilled[idx - 1] === 0) ||
            (x < w - 1 && unfilled[idx + 1] === 0) ||
            (y > 0 && unfilled[idx - w] === 0) ||
            (y < h - 1 && unfilled[idx + w] === 0)
          ) {
            // Confidence term
            let cSum = 0;
            let cCount = 0;
            for (let dy = -patchRadius; dy <= patchRadius; dy += 2) {
              const yy = y + dy;
              if (yy < 0 || yy >= h) continue;
              for (let dx = -patchRadius; dx <= patchRadius; dx += 2) {
                const xx = x + dx;
                if (xx < 0 || xx >= w) continue;
                cSum += confidence[yy * w + xx];
                cCount++;
              }
            }
            const conf = cCount ? cSum / cCount : 0;

            // Simple gradient / structure strength term from filled neighbors
            const lx = x > 0 ? idx - 1 : idx;
            const rx = x < w - 1 ? idx + 1 : idx;
            const uy = y > 0 ? idx - w : idx;
            const dyIdx = y < h - 1 ? idx + w : idx;
            const gx =
              (rgb[rx * 3] - rgb[lx * 3]) * 0.33 +
              (rgb[rx * 3 + 1] - rgb[lx * 3 + 1]) * 0.34 +
              (rgb[rx * 3 + 2] - rgb[lx * 3 + 2]) * 0.33;
            const gy =
              (rgb[dyIdx * 3] - rgb[uy * 3]) * 0.33 +
              (rgb[dyIdx * 3 + 1] - rgb[uy * 3 + 1]) * 0.34 +
              (rgb[dyIdx * 3 + 2] - rgb[uy * 3 + 2]) * 0.33;
            const dataTerm = 0.1 + Math.min(1.0, Math.hypot(gx, gy) / 140);

            const priority = conf * dataTerm;
            if (priority > bestPriority) {
              bestPriority = priority;
              bestIdx = idx;
            }
          }
        }
      }

      // Handle boundary rows if needed
      if (bestIdx === -1) {
        for (let i = 0; i < unfilled.length; i++) {
          if (unfilled[i] === 1) {
            bestIdx = i;
            break;
          }
        }
      }
      if (bestIdx === -1) break;

      const tx = bestIdx % w;
      const ty = (bestIdx - tx) / w;

      // Subsample candidate sources around target (preferring nearby context + sampled global)
      let bestSrc = validSources[0];
      let bestScore = Infinity;

      const step = Math.max(1, Math.floor(validSources.length / maxCandidates));
      for (let s = stepCount % step; s < validSources.length; s += step) {
        const sIdx = validSources[s];
        const sx = sIdx % w;
        const sy = (sIdx - sx) / w;

        let ssd = 0;
        let samples = 0;

        for (let dy = -patchRadius; dy <= patchRadius; dy += 2) {
          const py = ty + dy;
          const qy = sy + dy;
          if (py < 0 || py >= h || qy < 0 || qy >= h) continue;

          for (let dx = -patchRadius; dx <= patchRadius; dx += 2) {
            const px = tx + dx;
            const qx = sx + dx;
            if (px < 0 || px >= w || qx < 0 || qx >= w) continue;

            const pIdx = py * w + px;
            const qIdx = qy * w + qx;

            const dr = rgb[pIdx * 3] - rgb[qIdx * 3];
            const dg = rgb[pIdx * 3 + 1] - rgb[qIdx * 3 + 1];
            const db = rgb[pIdx * 3 + 2] - rgb[qIdx * 3 + 2];
            const diff = dr * dr + dg * dg + db * db;

            // Strong weight for real/already-filled pixels, light weight for smooth guide pixels
            const weight = unfilled[pIdx] === 0 ? 1.0 : 0.22;
            ssd += diff * weight;
            samples += weight;
          }
        }

        if (samples > 0) {
          // Slight spatial distance penalty keeps textures locally consistent
          const dist = Math.hypot(sx - tx, sy - ty);
          const score = ssd / samples + dist * 0.45;
          if (score < bestScore) {
            bestScore = score;
            bestSrc = sIdx;
          }
        }
      }

      // Copy best patch pixels into unfilled positions
      const bsx = bestSrc % w;
      const bsy = (bestSrc - bsx) / w;
      const avgConf = Math.max(0.15, bestPriority);

      for (let dy = -patchRadius; dy <= patchRadius; dy++) {
        const py = ty + dy;
        const qy = bsy + dy;
        if (py < 0 || py >= h || qy < 0 || qy >= h) continue;

        for (let dx = -patchRadius; dx <= patchRadius; dx++) {
          const px = tx + dx;
          const qx = bsx + dx;
          if (px < 0 || px >= w || qx < 0 || qx >= w) continue;

          const pIdx = py * w + px;
          if (unfilled[pIdx] === 1) {
            const qIdx = qy * w + qx;
            // Blend 80% exemplar texture + 20% multi-scale guide to prevent harsh color seams
            rgb[pIdx * 3] = rgb[qIdx * 3] * 0.82 + guideRgb[pIdx * 3] * 0.18;
            rgb[pIdx * 3 + 1] = rgb[qIdx * 3 + 1] * 0.82 + guideRgb[pIdx * 3 + 1] * 0.18;
            rgb[pIdx * 3 + 2] = rgb[qIdx * 3 + 2] * 0.82 + guideRgb[pIdx * 3 + 2] * 0.18;

            unfilled[pIdx] = 0;
            confidence[pIdx] = avgConf;
            filledSoFar++;
          }
        }
      }

      stepCount++;
      if (stepCount % 22 === 0) {
        if (onProgress) {
          onProgress(35 + Math.round((filledSoFar / totalToFill) * 55));
        }
        await nextFrame();
      }
    }
  }

  /**
   * Computes smooth edge feathering alpha inside the mask border for seamless integration.
   */
  function computeFeatherAlpha(maskBinary, w, h, featherRadius) {
    const dist = new Float32Array(w * h);
    const INF = 1e6;
    for (let i = 0; i < w * h; i++) {
      dist[i] = maskBinary[i] === 1 ? INF : 0;
    }

    // 2-pass Chamfer distance transform
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = y * w + x;
        if (dist[idx] === 0) continue;
        let d = dist[idx];
        if (x > 0) d = Math.min(d, dist[idx - 1] + 1);
        if (y > 0) d = Math.min(d, dist[idx - w] + 1);
        if (x > 0 && y > 0) d = Math.min(d, dist[idx - w - 1] + 1.414);
        if (x < w - 1 && y > 0) d = Math.min(d, dist[idx - w + 1] + 1.414);
        dist[idx] = d;
      }
    }
    for (let y = h - 1; y >= 0; y--) {
      for (let x = w - 1; x >= 0; x--) {
        const idx = y * w + x;
        if (dist[idx] === 0) continue;
        let d = dist[idx];
        if (x < w - 1) d = Math.min(d, dist[idx + 1] + 1);
        if (y < h - 1) d = Math.min(d, dist[idx + w] + 1);
        if (x < w - 1 && y < h - 1) d = Math.min(d, dist[idx + w + 1] + 1.414);
        if (x > 0 && y < h - 1) d = Math.min(d, dist[idx + w - 1] + 1.414);
        dist[idx] = d;
      }
    }

    const alpha = new Float32Array(w * h);
    for (let i = 0; i < w * h; i++) {
      if (maskBinary[i] === 0) {
        alpha[i] = 0;
      } else {
        alpha[i] = clamp(dist[i] / featherRadius, 0.25, 1.0);
      }
    }
    return alpha;
  }

  /**
   * Main entry point: runs inpainting on imageData using maskAlpha (0..255).
   * Returns a new ImageData at full original resolution.
   */
  async function inpaintImage(sourceImageData, maskAlpha, options = {}, onProgress = null) {
    const { width, height, data } = sourceImageData;
    const mode = options.mode || 'smart';

    const padding = mode === 'high' ? 88 : 68;
    const bbox = getMaskBoundingBox(maskAlpha, width, height, padding);
    if (!bbox) {
      throw new Error('No masked region selected');
    }

    if (onProgress) onProgress(5);
    await nextFrame();

    // Scale down very large working boxes (> 460px) to keep browser super responsive,
    // then composite smoothly back onto full-res image!
    const maxWorkDim = mode === 'high' ? 480 : 380;
    const scale = Math.min(1, maxWorkDim / Math.max(bbox.w, bbox.h));
    const ww = Math.max(16, Math.round(bbox.w * scale));
    const wh = Math.max(16, Math.round(bbox.h * scale));

    const rgb = new Float32Array(ww * wh * 3);
    const mask = new Uint8Array(ww * wh);

    for (let y = 0; y < wh; y++) {
      const sy = Math.min(height - 1, bbox.y0 + Math.floor(y / scale));
      for (let x = 0; x < ww; x++) {
        const sx = Math.min(width - 1, bbox.x0 + Math.floor(x / scale));
        const sIdx = sy * width + sx;
        const dIdx = y * ww + x;

        const isMasked = maskAlpha[sIdx] > 20 ? 1 : 0;
        mask[dIdx] = isMasked;
        if (!isMasked) {
          rgb[dIdx * 3] = data[sIdx * 4];
          rgb[dIdx * 3 + 1] = data[sIdx * 4 + 1];
          rgb[dIdx * 3 + 2] = data[sIdx * 4 + 2];
        }
      }
    }

    if (onProgress) onProgress(15);
    await nextFrame();

    // Stage 1: Multi-scale harmonic initialization
    multiScaleInitialize(rgb, mask, ww, wh, mode === 'fast' ? 42 : 24);
    if (onProgress) onProgress(35);
    await nextFrame();

    // Stage 2: Exemplar texture synthesis (for smart & high modes)
    if (mode !== 'fast') {
      await exemplarSynthesize(
        rgb,
        mask,
        ww,
        wh,
        {
          mode,
          patchRadius: mode === 'high' ? 5 : 4,
          maxCandidates: mode === 'high' ? 520 : 320
        },
        onProgress
      );
      // Light 2-pass smoothing inside filled mask to remove micro-seams
      diffuseMask(rgb, mask, ww, wh, 2);
    }

    if (onProgress) onProgress(92);
    await nextFrame();

    // Stage 3: Composite back into full-res output ImageData with feathered boundary
    const outData = new Uint8ClampedArray(data);
    const fullCropW = bbox.w;
    const fullCropH = bbox.h;
    const fullMaskBin = new Uint8Array(fullCropW * fullCropH);

    for (let y = 0; y < fullCropH; y++) {
      const sy = bbox.y0 + y;
      for (let x = 0; x < fullCropW; x++) {
        const sx = bbox.x0 + x;
        fullMaskBin[y * fullCropW + x] = maskAlpha[sy * width + sx] > 20 ? 1 : 0;
      }
    }

    const feather = computeFeatherAlpha(fullMaskBin, fullCropW, fullCropH, 3.2);

    for (let y = 0; y < fullCropH; y++) {
      const sy = bbox.y0 + y;
      const wy = Math.min(wh - 1, (y / fullCropH) * (wh - 1));
      const wy0 = Math.floor(wy);
      const wy1 = Math.min(wh - 1, wy0 + 1);
      const fy = wy - wy0;

      for (let x = 0; x < fullCropW; x++) {
        const a = feather[y * fullCropW + x];
        if (a <= 0) continue;

        const sx = bbox.x0 + x;
        const wx = Math.min(ww - 1, (x / fullCropW) * (ww - 1));
        const wx0 = Math.floor(wx);
        const wx1 = Math.min(ww - 1, wx0 + 1);
        const fx = wx - wx0;

        const i00 = (wy0 * ww + wx0) * 3;
        const i10 = (wy0 * ww + wx1) * 3;
        const i01 = (wy1 * ww + wx0) * 3;
        const i11 = (wy1 * ww + wx1) * 3;

        const pIdx = (sy * width + sx) * 4;
        for (let c = 0; c < 3; c++) {
          const top = rgb[i00 + c] * (1 - fx) + rgb[i10 + c] * fx;
          const bot = rgb[i01 + c] * (1 - fx) + rgb[i11 + c] * fx;
          const val = top * (1 - fy) + bot * fy;
          outData[pIdx + c] = clamp(Math.round(outData[pIdx + c] * (1 - a) + val * a), 0, 255);
        }
      }
    }

    if (onProgress) onProgress(100);
    return new ImageData(outData, width, height);
  }

  global.CleanPixelInpainter = {
    inpaintImage
  };
})(window);
