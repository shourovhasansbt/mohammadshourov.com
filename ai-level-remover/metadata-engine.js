/**
 * Lossless Binary Metadata Inspector & Stripper for JPEG, PNG, and WebP
 * Parses and strips EXIF, XMP, IPTC, C2PA/JUMBF, PNG text chunks, and Comments
 * without recompressing or altering image pixels.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.FootprintEngine = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const AI_PATTERNS = [
    { name: 'C2PA / Content Credentials', re: /c2pa|jumbf|jumb|c2ma|c2cl|contentcredentials|truepic/i },
    { name: 'AI Algorithmic Media Tag', re: /trainedAlgorithmicMedia|digitalCapture|compositeWithTrainedAlgorithmicMedia|iptcExt:DigitalSourceType/i },
    { name: 'OpenAI / ChatGPT / DALL·E', re: /\bopenai\b|dall[·\- ]?e|chatgpt|gpt-image/i },
    { name: 'Midjourney', re: /midjourney|--ar\s+\d+:\d+|--v\s+\d/i },
    { name: 'Stable Diffusion / ComfyUI', re: /stable\s*diffusion|automatic1111|comfyui|negative prompt:|cfg scale:|steps:\s*\d+/i },
    { name: 'Adobe Firefly / GenAI', re: /firefly|adobe\s*generative|generative\s*fill/i },
    { name: 'Google Imagen / Gemini / SynthID', re: /\bimagen\b|\bgemini\b|synthid|made with google ai/i },
    { name: 'Meta AI / Flux / Leonardo', re: /meta\s*ai|\bflux\b|leonardo\.ai|ideogram|runwayml/i }
  ];

  // CRC32 lookup for valid PNG chunk construction
  const CRC_TABLE = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      t[n] = c >>> 0;
    }
    return t;
  })();

  function crc32(bytes, start, end) {
    let c = 0xffffffff;
    for (let i = start; i < end; i++) {
      c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function readU16BE(b, o) {
    return (b[o] << 8) | b[o + 1];
  }
  function readU16LE(b, o) {
    return b[o] | (b[o + 1] << 8);
  }
  function readU32BE(b, o) {
    return ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0;
  }
  function readU32LE(b, o) {
    return (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0;
  }
  function writeU32BE(b, o, v) {
    b[o] = (v >>> 24) & 0xff;
    b[o + 1] = (v >>> 16) & 0xff;
    b[o + 2] = (v >>> 8) & 0xff;
    b[o + 3] = v & 0xff;
  }
  function writeU32LE(b, o, v) {
    b[o] = v & 0xff;
    b[o + 1] = (v >>> 8) & 0xff;
    b[o + 2] = (v >>> 16) & 0xff;
    b[o + 3] = (v >>> 24) & 0xff;
  }

  function ascii(b, start, end) {
    let s = '';
    for (let i = start; i < end; i++) {
      s += String.fromCharCode(b[i]);
    }
    return s;
  }

  function decodeUtf8(b, start, end) {
    try {
      return new TextDecoder('utf-8', { fatal: false }).decode(b.subarray(start, end));
    } catch (_) {
      return ascii(b, start, end);
    }
  }

  function encodeUtf8(str) {
    if (typeof TextEncoder !== 'undefined') {
      return new TextEncoder().encode(str);
    }
    return Uint8Array.from(Buffer.from(str, 'utf8'));
  }

  function concatUint8(arrays) {
    let total = 0;
    for (let i = 0; i < arrays.length; i++) total += arrays[i].length;
    const out = new Uint8Array(total);
    let pos = 0;
    for (let i = 0; i < arrays.length; i++) {
      out.set(arrays[i], pos);
      pos += arrays[i].length;
    }
    return out;
  }

  function detectFormat(bytes) {
    if (bytes.length >= 2 && bytes[0] === 0xff && bytes[1] === 0xd8) return 'jpeg';
    if (
      bytes.length >= 8 &&
      bytes[0] === 0x89 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x4e &&
      bytes[3] === 0x47 &&
      bytes[4] === 0x0d &&
      bytes[5] === 0x0a &&
      bytes[6] === 0x1a &&
      bytes[7] === 0x0a
    ) {
      return 'png';
    }
    if (
      bytes.length >= 12 &&
      ascii(bytes, 0, 4) === 'RIFF' &&
      ascii(bytes, 8, 12) === 'WEBP'
    ) {
      return 'webp';
    }
    return 'unknown';
  }

  function checkAiSignals(label, value, aiFindings) {
    const combined = `${label} ${value}`;
    for (let i = 0; i < AI_PATTERNS.length; i++) {
      if (AI_PATTERNS[i].re.test(combined)) {
        aiFindings.add(AI_PATTERNS[i].name);
        return true;
      }
    }
    return false;
  }

  // ---------- EXIF IFD Basic Tag Decoder ----------
  const EXIF_TAG_NAMES = {
    0x010e: 'ImageDescription',
    0x010f: 'Make',
    0x0110: 'Model',
    0x0112: 'Orientation',
    0x0131: 'Software',
    0x0132: 'DateTime',
    0x013b: 'Artist',
    0x8298: 'Copyright',
    0x8769: 'ExifIFDPointer',
    0x8825: 'GPSInfoIFDPointer',
    0x9003: 'DateTimeOriginal',
    0x9004: 'CreateDate',
    0x9286: 'UserComment',
    0xa430: 'CameraOwnerName',
    0xa431: 'BodySerialNumber',
    0xa434: 'LensModel'
  };

  function parseExifPayload(exifBytes, rows, aiFindings) {
    // Expect 'II' or 'MM' TIFF header
    if (exifBytes.length < 8) return;
    const endian = ascii(exifBytes, 0, 2);
    const le = endian === 'II';
    if (!le && endian !== 'MM') return;
    const u16 = (o) => (le ? readU16LE(exifBytes, o) : readU16BE(exifBytes, o));
    const u32 = (o) => (le ? readU32LE(exifBytes, o) : readU32BE(exifBytes, o));

    if (u16(2) !== 42) return;
    const ifd0Offset = u32(4);

    function walkIfd(offset, prefix, depth) {
      if (depth > 2 || offset <= 0 || offset + 2 > exifBytes.length) return;
      const count = u16(offset);
      if (count > 200) return;

      for (let i = 0; i < count; i++) {
        const entry = offset + 2 + i * 12;
        if (entry + 12 > exifBytes.length) break;
        const tag = u16(entry);
        const type = u16(entry + 2);
        const num = u32(entry + 4);
        const valOffField = u32(entry + 8);
        const tagName = EXIF_TAG_NAMES[tag] || `Tag_0x${tag.toString(16).toUpperCase()}`;

        if (tag === 0x8769 && valOffField < exifBytes.length) {
          walkIfd(valOffField, 'Exif', depth + 1);
          continue;
        }
        if (tag === 0x8825 && valOffField < exifBytes.length) {
          rows.push({
            label: 'GPS Coordinates / Info',
            value: `Present (IFD @ ${valOffField})`,
            isAi: false
          });
          continue;
        }

        let valueStr = '';
        if (type === 2 && num > 0 && num < 4096) {
          const dataPos = num <= 4 ? entry + 8 : valOffField;
          if (dataPos >= 0 && dataPos + num <= exifBytes.length) {
            valueStr = decodeUtf8(exifBytes, dataPos, dataPos + num).replace(/\0+$/, '').trim();
          }
        } else if ((type === 3 || type === 4) && num === 1) {
          valueStr = String(type === 3 ? u16(entry + 8) : valOffField);
        } else if (tag === 0x9286 && num > 8 && num < 4096) {
          const dataPos = valOffField;
          if (dataPos >= 0 && dataPos + num <= exifBytes.length) {
            valueStr = decodeUtf8(exifBytes, dataPos + 8, dataPos + num).replace(/\0+$/, '').trim();
          }
        }

        if (valueStr) {
          const label = prefix ? `${prefix}:${tagName}` : tagName;
          const isAi = checkAiSignals(label, valueStr, aiFindings);
          rows.push({ label, value: valueStr.slice(0, 320), isAi });
        }
      }
    }

    walkIfd(ifd0Offset, 'EXIF', 0);
  }

  // ---------- XMP XML Extractor ----------
  function parseXmpString(xmpText, rows, aiFindings) {
    // Extract key XML elements & attributes cleanly
    const interestingAttrs = [
      'xmp:CreatorTool',
      'dc:creator',
      'dc:description',
      'dc:rights',
      'photoshop:Credit',
      'photoshop:Source',
      'iptcExt:DigitalSourceType',
      'Iptc4xmpExt:DigitalSourceType',
      'tiff:Software',
      'tiff:Artist',
      'tiff:Copyright',
      'c2pa:manifest'
    ];

    // Match attributes: key="value"
    const attrRe = /([A-Za-z0-9_:-]+)="([^"]{1,300})"/g;
    let m;
    const seen = new Set();
    while ((m = attrRe.exec(xmpText)) !== null) {
      const k = m[1];
      const v = m[2].trim();
      if (!v || k.startsWith('xmlns') || k === 'rdf:about') continue;
      if (interestingAttrs.includes(k) || /ai|c2pa|digital|source|creator|software|credit|midjourney|openai|firefly/i.test(k + v)) {
        const key = `${k}=${v}`;
        if (!seen.has(key)) {
          seen.add(key);
          const isAi = checkAiSignals(k, v, aiFindings);
          rows.push({ label: k, value: v, isAi });
        }
      }
    }

    // Match element text: <tag>value</tag>
    const elemRe = /<([A-Za-z0-9_:-]+)>([^<]{1,400})<\/\1>/g;
    while ((m = elemRe.exec(xmpText)) !== null) {
      const k = m[1];
      const v = m[2].trim();
      if (!v || k === 'rdf:li') continue;
      const key = `${k}=${v}`;
      if (!seen.has(key)) {
        seen.add(key);
        const isAi = checkAiSignals(k, v, aiFindings);
        rows.push({ label: k, value: v, isAi });
      }
    }

    // Fallback check on full XMP body
    checkAiSignals('XMP', xmpText, aiFindings);
    if (rows.length === 0 && xmpText.trim().length > 0) {
      rows.push({
        label: 'XMP Block',
        value: `${xmpText.length} chars of Adobe XMP packet`,
        isAi: checkAiSignals('XMP', xmpText, aiFindings)
      });
    }
  }

  // ---------- JPEG Inspector & Lossless Stripper ----------
  function processJpeg(bytes, strip) {
    const sections = {
      EXIF: [],
      XMP: [],
      'C2PA / JUMBF': [],
      IPTC: [],
      Comments: []
    };
    const aiFindings = new Set();
    const keepChunks = strip ? [bytes.subarray(0, 2)] : null;

    let pos = 2;
    while (pos < bytes.length - 1) {
      if (bytes[pos] !== 0xff) {
        if (strip) keepChunks.push(bytes.subarray(pos));
        break;
      }
      while (pos < bytes.length && bytes[pos] === 0xff) pos++;
      if (pos >= bytes.length) break;
      const marker = bytes[pos];
      pos++;

      if (marker === 0x00 || marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd7)) {
        if (strip) keepChunks.push(new Uint8Array([0xff, marker]));
        continue;
      }
      if (marker === 0xd9) {
        if (strip) keepChunks.push(new Uint8Array([0xff, 0xd9]));
        break;
      }
      if (marker === 0xda) {
        // SOS: copy rest of scan data untouched
        if (strip) keepChunks.push(new Uint8Array([0xff, 0xda]), bytes.subarray(pos));
        break;
      }

      if (pos + 2 > bytes.length) break;
      const segLen = readU16BE(bytes, pos);
      if (segLen < 2) break;
      const segEnd = Math.min(bytes.length, pos + segLen);
      const payloadStart = pos + 2;
      const payload = bytes.subarray(payloadStart, segEnd);

      let shouldDrop = false;

      if (marker === 0xe1) {
        // APP1: EXIF or XMP
        shouldDrop = true;
        if (payload.length >= 6 && ascii(payload, 0, 6) === 'Exif\0\0') {
          parseExifPayload(payload.subarray(6), sections.EXIF, aiFindings);
        } else if (payload.length >= 29 && ascii(payload, 0, 28) === 'http://ns.adobe.com/xap/1.0/') {
          const xmpStr = decodeUtf8(payload, 29, payload.length);
          parseXmpString(xmpStr, sections.XMP, aiFindings);
        } else {
          const txt = decodeUtf8(payload, 0, Math.min(payload.length, 400));
          const isAi = checkAiSignals('APP1', txt, aiFindings);
          sections.XMP.push({ label: 'APP1 Segment', value: `${payload.length} bytes`, isAi });
        }
      } else if (marker === 0xeb) {
        // APP11: JUMBF / C2PA
        shouldDrop = true;
        const txt = decodeUtf8(payload, 0, Math.min(payload.length, 2000)).replace(/[^\x20-\x7E]+/g, ' ');
        const isAi = checkAiSignals('JUMBF/C2PA', txt, aiFindings) || /jumb|c2pa/i.test(txt);
        if (isAi) aiFindings.add('C2PA / Content Credentials');
        sections['C2PA / JUMBF'].push({
          label: 'JUMBF / C2PA Segment (APP11)',
          value: `${payload.length} bytes (${txt.trim().slice(0, 120) || 'Binary Manifest'})`,
          isAi: true
        });
      } else if (marker === 0xed) {
        // APP13: IPTC / Photoshop IRB
        shouldDrop = true;
        const txt = decodeUtf8(payload, 0, Math.min(payload.length, 800)).replace(/[^\x20-\x7E]+/g, ' ');
        const isAi = checkAiSignals('IPTC', txt, aiFindings);
        sections.IPTC.push({
          label: 'Photoshop / IPTC IRB (APP13)',
          value: `${payload.length} bytes`,
          isAi
        });
      } else if (marker === 0xfe) {
        // COM comment
        shouldDrop = true;
        const cmt = decodeUtf8(payload, 0, payload.length).replace(/\0+$/, '').trim();
        if (cmt) {
          const isAi = checkAiSignals('Comment', cmt, aiFindings);
          sections.Comments.push({ label: 'JPEG Comment', value: cmt.slice(0, 320), isAi });
        }
      } else if (marker === 0xec) {
        // APP12 Ducky / Picture info
        shouldDrop = true;
        sections.EXIF.push({ label: 'APP12 Segment', value: `${payload.length} bytes`, isAi: false });
      } else if (marker === 0xe2) {
        // APP2: preserve ICC_PROFILE for accurate colors, strip others (MPF, C2PA)
        const isIcc = payload.length >= 12 && ascii(payload, 0, 11) === 'ICC_PROFILE';
        if (!isIcc) {
          shouldDrop = true;
          const txt = decodeUtf8(payload, 0, Math.min(payload.length, 300)).replace(/[^\x20-\x7E]+/g, ' ');
          const isAi = checkAiSignals('APP2', txt, aiFindings);
          sections.EXIF.push({ label: 'APP2 Segment', value: `${payload.length} bytes`, isAi });
        }
      }

      if (strip && !shouldDrop) {
        keepChunks.push(new Uint8Array([0xff, marker]), bytes.subarray(pos, segEnd));
      }
      pos = segEnd;
    }

    return {
      format: 'JPEG',
      report: buildReport(sections, aiFindings),
      cleanBytes: strip ? concatUint8(keepChunks) : null
    };
  }

  // ---------- PNG Inspector & Lossless Stripper ----------
  const PNG_DROP_CHUNKS = new Set(['tEXt', 'iTXt', 'zTXt', 'eXIf', 'caBX', 'jUMb', 'tIME']);

  function processPng(bytes, strip) {
    const sections = {
      'PNG Text / AI Chunks': [],
      EXIF: [],
      XMP: [],
      'C2PA / JUMBF': []
    };
    const aiFindings = new Set();
    const keepChunks = strip ? [bytes.subarray(0, 8)] : null;

    let pos = 8;
    while (pos + 12 <= bytes.length) {
      const len = readU32BE(bytes, pos);
      const type = ascii(bytes, pos + 4, pos + 8);
      const totalChunkLen = 12 + len;
      if (pos + totalChunkLen > bytes.length) break;

      const dataStart = pos + 8;
      const dataEnd = dataStart + len;
      const data = bytes.subarray(dataStart, dataEnd);

      if (type === 'tEXt') {
        let nul = data.indexOf(0);
        const key = nul >= 0 ? decodeUtf8(data, 0, nul) : 'Text';
        const val = nul >= 0 ? decodeUtf8(data, nul + 1, data.length) : decodeUtf8(data, 0, data.length);
        if (key === 'XML:com.adobe.xmp' || val.includes('<x:xmpmeta')) {
          parseXmpString(val, sections.XMP, aiFindings);
        } else {
          const isAi = checkAiSignals(key, val, aiFindings);
          sections['PNG Text / AI Chunks'].push({ label: key, value: val.slice(0, 360), isAi });
        }
      } else if (type === 'iTXt') {
        let nul = data.indexOf(0);
        const key = nul >= 0 ? decodeUtf8(data, 0, nul) : 'iTXt';
        const rest = nul >= 0 ? decodeUtf8(data, nul + 1, data.length).replace(/\0+/g, ' ').trim() : '';
        if (key === 'XML:com.adobe.xmp' || rest.includes('<x:xmpmeta')) {
          parseXmpString(rest, sections.XMP, aiFindings);
        } else {
          const isAi = checkAiSignals(key, rest, aiFindings);
          sections['PNG Text / AI Chunks'].push({ label: key, value: rest.slice(0, 360), isAi });
        }
      } else if (type === 'zTXt') {
        let nul = data.indexOf(0);
        const key = nul >= 0 ? decodeUtf8(data, 0, nul) : 'CompressedText';
        const isAi = checkAiSignals(key, '', aiFindings);
        sections['PNG Text / AI Chunks'].push({
          label: `${key} (zTXt)`,
          value: `Compressed text chunk (${len} bytes)`,
          isAi
        });
      } else if (type === 'eXIf') {
        parseExifPayload(data, sections.EXIF, aiFindings);
      } else if (type === 'caBX' || type === 'jUMb') {
        aiFindings.add('C2PA / Content Credentials');
        sections['C2PA / JUMBF'].push({
          label: `PNG ${type} Chunk`,
          value: `C2PA Content Credentials manifest (${len} bytes)`,
          isAi: true
        });
      } else if (type === 'tIME') {
        if (data.length >= 7) {
          const yr = readU16BE(data, 0);
          const mo = String(data[2]).padStart(2, '0');
          const dy = String(data[3]).padStart(2, '0');
          const hr = String(data[4]).padStart(2, '0');
          const mn = String(data[5]).padStart(2, '0');
          sections.EXIF.push({ label: 'PNG tIME', value: `${yr}-${mo}-${dy} ${hr}:${mn}`, isAi: false });
        }
      }

      if (strip && !PNG_DROP_CHUNKS.has(type)) {
        keepChunks.push(bytes.subarray(pos, pos + totalChunkLen));
      }

      pos += totalChunkLen;
      if (type === 'IEND') break;
    }

    return {
      format: 'PNG',
      report: buildReport(sections, aiFindings),
      cleanBytes: strip ? concatUint8(keepChunks) : null
    };
  }

  // ---------- WebP Inspector & Lossless Stripper ----------
  const WEBP_DROP_CHUNKS = new Set(['EXIF', 'XMP ', 'C2PA', 'JUMB']);

  function processWebp(bytes, strip) {
    const sections = {
      EXIF: [],
      XMP: [],
      'C2PA / JUMBF': []
    };
    const aiFindings = new Set();
    const keepChunks = strip ? [new Uint8Array(bytes.subarray(0, 12))] : null;

    let pos = 12;
    while (pos + 8 <= bytes.length) {
      const fourcc = ascii(bytes, pos, pos + 4);
      const size = readU32LE(bytes, pos + 4);
      const paddedSize = size + (size % 2);
      const chunkEnd = Math.min(bytes.length, pos + 8 + paddedSize);
      if (chunkEnd <= pos) break;
      const payload = bytes.subarray(pos + 8, Math.min(bytes.length, pos + 8 + size));

      if (fourcc === 'EXIF') {
        const exifData = payload.length >= 6 && ascii(payload, 0, 6) === 'Exif\0\0' ? payload.subarray(6) : payload;
        parseExifPayload(exifData, sections.EXIF, aiFindings);
        if (sections.EXIF.length === 0) {
          sections.EXIF.push({ label: 'EXIF Chunk', value: `${size} bytes`, isAi: false });
        }
      } else if (fourcc === 'XMP ') {
        parseXmpString(decodeUtf8(payload, 0, payload.length), sections.XMP, aiFindings);
      } else if (fourcc === 'C2PA' || fourcc === 'JUMB') {
        aiFindings.add('C2PA / Content Credentials');
        sections['C2PA / JUMBF'].push({
          label: `WebP ${fourcc} Chunk`,
          value: `${size} bytes`,
          isAi: true
        });
      }

      if (strip && !WEBP_DROP_CHUNKS.has(fourcc)) {
        const copy = new Uint8Array(bytes.subarray(pos, chunkEnd));
        if (fourcc === 'VP8X' && copy.length >= 12) {
          // Clear EXIF (0x08) and XMP (0x04) feature flags in VP8X header
          copy[8] = copy[8] & ~0x0c;
        }
        keepChunks.push(copy);
      }
      pos = chunkEnd;
    }

    let cleanBytes = null;
    if (strip) {
      cleanBytes = concatUint8(keepChunks);
      writeU32LE(cleanBytes, 4, cleanBytes.length - 8);
    }

    return {
      format: 'WebP',
      report: buildReport(sections, aiFindings),
      cleanBytes
    };
  }

  function buildReport(rawSections, aiFindings) {
    const sections = {};
    let totalTags = 0;
    let aiTagsCount = 0;

    for (const [name, rows] of Object.entries(rawSections)) {
      if (rows && rows.length > 0) {
        sections[name] = rows;
        totalTags += rows.length;
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].isAi) aiTagsCount++;
        }
      }
    }

    const detectedGenerators = Array.from(aiFindings);
    return {
      totalTags,
      aiTagsCount,
      aiDetected: detectedGenerators.length > 0 || aiTagsCount > 0,
      detectedGenerators,
      sections
    };
  }

  function inspectBytes(uint8Array) {
    const bytes = uint8Array instanceof Uint8Array ? uint8Array : new Uint8Array(uint8Array);
    const fmt = detectFormat(bytes);
    if (fmt === 'jpeg') return processJpeg(bytes, false);
    if (fmt === 'png') return processPng(bytes, false);
    if (fmt === 'webp') return processWebp(bytes, false);

    // Generic fallback scan for TIFF/HEIC
    const sample = decodeUtf8(bytes, 0, Math.min(bytes.length, 65536)).replace(/[^\x20-\x7E]+/g, ' ');
    const aiFindings = new Set();
    checkAiSignals('File', sample, aiFindings);
    const sections = {};
    if (aiFindings.size > 0) {
      sections['Detected Signals'] = [{
        label: 'Embedded Container String',
        value: Array.from(aiFindings).join(', '),
        isAi: true
      }];
    }
    return {
      format: fmt.toUpperCase(),
      report: buildReport(sections, aiFindings),
      cleanBytes: null
    };
  }

  function stripBytes(uint8Array) {
    const bytes = uint8Array instanceof Uint8Array ? uint8Array : new Uint8Array(uint8Array);
    const fmt = detectFormat(bytes);
    let res;
    if (fmt === 'jpeg') res = processJpeg(bytes, true);
    else if (fmt === 'png') res = processPng(bytes, true);
    else if (fmt === 'webp') res = processWebp(bytes, true);
    else {
      return {
        format: fmt.toUpperCase(),
        beforeReport: inspectBytes(bytes).report,
        afterReport: buildReport({}, new Set()),
        cleanBytes: bytes,
        losslessSupported: false
      };
    }

    const after = inspectBytes(res.cleanBytes);
    return {
      format: res.format,
      beforeReport: res.report,
      afterReport: after.report,
      cleanBytes: res.cleanBytes,
      losslessSupported: true
    };
  }

  /**
   * Builds a valid PNG tEXt chunk (used for Edit Metadata and generating Sample AI Test Photos).
   */
  function makePngTextChunk(keyword, value) {
    const kBytes = encodeUtf8(keyword);
    const vBytes = encodeUtf8(value);
    const len = kBytes.length + 1 + vBytes.length;
    const chunk = new Uint8Array(12 + len);
    writeU32BE(chunk, 0, len);
    chunk.set([0x74, 0x45, 0x58, 0x74], 4); // tEXt
    chunk.set(kBytes, 8);
    chunk[8 + kBytes.length] = 0;
    chunk.set(vBytes, 8 + kBytes.length + 1);
    const crc = crc32(chunk, 4, 8 + len);
    writeU32BE(chunk, 8 + len, crc);
    return chunk;
  }

  /**
   * Strips existing metadata from a PNG and inserts custom tEXt fields (for Edit Metadata tool).
   */
  function writePngMetadata(uint8Array, fields) {
    const stripped = stripBytes(uint8Array);
    if (stripped.format !== 'PNG') {
      throw new Error('Metadata editing works directly on PNG exports.');
    }
    const clean = stripped.cleanBytes;
    // Insert custom tEXt chunks right before IEND (last 12 bytes)
    const iendPos = clean.length - 12;
    const parts = [clean.subarray(0, iendPos)];

    for (const [key, val] of Object.entries(fields)) {
      if (val && String(val).trim()) {
        parts.push(makePngTextChunk(key, String(val).trim()));
      }
    }
    parts.push(clean.subarray(iendPos));
    return concatUint8(parts);
  }

  return {
    detectFormat,
    inspectBytes,
    stripBytes,
    writePngMetadata
  };
});
