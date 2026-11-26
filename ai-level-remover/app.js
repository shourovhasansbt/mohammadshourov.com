(function () {
  'use strict';

  const VERCEL_API_URL = window.location.hostname.endsWith('.vercel.app')
    ? `${window.location.origin}/api/remove`
    : 'https://mohammadshourovcom.vercel.app/api/remove';

  const el = {
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('[data-nav]'),

    heroTitle: document.getElementById('heroTitle'),
    heroSub: document.getElementById('heroSub'),

    metadataToolSection: document.getElementById('metadataToolSection'),
    visualCleanerSection: document.getElementById('visualCleanerSection'),

    uploadCard: document.getElementById('uploadCard'),
    uploadZone: document.getElementById('uploadZone'),
    uploadButton: document.getElementById('uploadButton'),
    fileInput: document.getElementById('fileInput'),
    samplePhotoBtn: document.getElementById('samplePhotoBtn'),

    batchList: document.getElementById('batchList'),
    editMetadataPanel: document.getElementById('editMetadataPanel'),
    editTitle: document.getElementById('editTitle'),
    editAuthor: document.getElementById('editAuthor'),
    editCopyright: document.getElementById('editCopyright'),
    editSoftware: document.getElementById('editSoftware'),

    primaryActionSection: document.getElementById('primaryActionSection'),
    removeMetadataBtn: document.getElementById('removeMetadataBtn'),
    primaryActionLabel: document.getElementById('primaryActionLabel'),
    downloadAllBtn: document.getElementById('downloadAllBtn'),

    metadataDisplayCard: document.getElementById('metadataDisplayCard'),
    reportFilename: document.getElementById('reportFilename'),
    reportTotalTags: document.getElementById('reportTotalTags'),
    reportAiTags: document.getElementById('reportAiTags'),
    reportAiBanner: document.getElementById('reportAiBanner'),
    reportSections: document.getElementById('reportSections'),
    closeReportBtn: document.getElementById('closeReportBtn'),

    toast: document.getElementById('toast'),

    // Visual AI Eraser
    cFileInput: document.getElementById('cFileInput'),
    cChooseBtn: document.getElementById('cChooseBtn'),
    cCornerBrBtn: document.getElementById('cCornerBrBtn'),
    cClearBtn: document.getElementById('cClearBtn'),
    cRemoveBtn: document.getElementById('cRemoveBtn'),
    cDownloadBtn: document.getElementById('cDownloadBtn'),
    cBrushSize: document.getElementById('cBrushSize'),
    cPlaceholder: document.getElementById('cPlaceholder'),
    cCanvasWrap: document.getElementById('cCanvasWrap'),
    cImageCanvas: document.getElementById('cImageCanvas'),
    cMaskCanvas: document.getElementById('cMaskCanvas'),
    cTools: document.querySelectorAll('.c-tool')
  };

  const state = {
    mode: 'remove',
    files: [],
    selectedId: null,
    showDetails: false,

    // Visual Eraser state
    cTool: 'brush',
    cDrawing: false,
    cLastPt: null,
    cRectStart: null,
    cImgData: null,
    cW: 0,
    cH: 0
  };

  let toastTimer = null;
  function showToast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.add('hidden'), 2800);
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  function bytesToBase64(bytes, mime) {
    let bin = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return `data:${mime || 'image/jpeg'};base64,${btoa(bin)}`;
  }

  function base64ToUint8(dataUrl) {
    const clean = dataUrl.replace(/^data:[^;]+;base64,/, '');
    const bin = atob(clean);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function getOutputMime(entry) {
    if (entry.format === 'PNG') return 'image/png';
    if (entry.format === 'WebP' || entry.format === 'WEBP') return 'image/webp';
    return 'image/jpeg';
  }

  function getOutputExt(entry) {
    if (entry.format === 'PNG') return 'png';
    if (entry.format === 'WebP' || entry.format === 'WEBP') return 'webp';
    return 'jpg';
  }

  // ---------- Navigation ----------
  function setNavMode(mode) {
    state.mode = mode;
    el.navMenu.classList.remove('open');

    document.querySelectorAll('.nav-menu .nav-link').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.nav === mode);
    });

    el.metadataToolSection.classList.add('hidden');
    el.visualCleanerSection.classList.add('hidden');
    el.editMetadataPanel.classList.add('hidden');
    el.primaryActionSection.classList.remove('hidden');

    if (mode === 'cleaner') {
      el.visualCleanerSection.classList.remove('hidden');
      el.heroTitle.innerHTML = 'Remove <span class="home-hero__tag">visible AI text</span><span class="home-hero__tail">from photos.</span>';
      el.heroSub.textContent = 'Drag your brush or box over any visible AI badge or watermark on the photo to erase it.';
      return;
    }

    el.metadataToolSection.classList.remove('hidden');

    if (mode === 'view') {
      state.showDetails = true;
      el.heroTitle.innerHTML = 'View <span class="home-hero__tag">photo metadata</span><span class="home-hero__tail">footprints.</span>';
      el.heroSub.textContent = 'See EXIF, XMP, C2PA, and AI tags stored inside any uploaded photo.';
      renderSelectedMetadata();
    } else if (mode === 'edit') {
      el.heroTitle.innerHTML = 'Edit <span class="home-hero__tag">photo metadata</span><span class="home-hero__tail">cleanly.</span>';
      el.heroSub.textContent = 'Strip hidden AI tags and add your own clean Title, Author, and Copyright metadata.';
      el.editMetadataPanel.classList.remove('hidden');
      el.primaryActionLabel.textContent = 'Apply & Clean Photo';
    } else {
      state.showDetails = false;
      el.heroTitle.innerHTML = 'Remove <span class="home-hero__tag">AI label metadata</span><span class="home-hero__tail">from photos.</span>';
      el.heroSub.textContent = 'Strip C2PA, XMP, EXIF & hidden AI label metadata from photos automatically without reducing pixel quality.';
      el.primaryActionLabel.textContent = 'Clean Photo';
      renderSelectedMetadata();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  el.navLinks.forEach((btn) => {
    btn.addEventListener('click', () => setNavMode(btn.dataset.nav));
  });
  el.menuToggle.addEventListener('click', () => el.navMenu.classList.toggle('open'));

  // ---------- Canvas Re-encode Fallback for non-JPEG/PNG/WebP (e.g. AVIF/BMP/GIF) ----------
  async function stripViaCanvasFallback(url) {
    const img = new Image();
    img.src = url;
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = () => reject(new Error('Could not decode photo'));
    });
    const c = document.createElement('canvas');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    c.getContext('2d').drawImage(img, 0, 0);
    const blob = await new Promise((resolve) => c.toBlob(resolve, 'image/jpeg', 0.95));
    return new Uint8Array(await blob.arrayBuffer());
  }

  async function ensurePngBytes(entry) {
    if (entry.format === 'PNG') return entry.cleanBytes || entry.bytes;
    const img = new Image();
    img.src = entry.cleanUrl || entry.url;
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = () => reject(new Error('Could not decode photo'));
    });
    const c = document.createElement('canvas');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    c.getContext('2d').drawImage(img, 0, 0);
    const blob = await new Promise((resolve) => c.toBlob(resolve, 'image/png'));
    return new Uint8Array(await blob.arrayBuffer());
  }

  // ---------- Lossless Clean Engine (Vercel Node.js API + Instant Local Stripper) ----------
  async function cleanEntry(entry) {
    if (state.mode === 'edit') {
      const pngBytes = await ensurePngBytes(entry);
      const editedBytes = window.FootprintEngine.writePngMetadata(pngBytes, {
        Title: el.editTitle.value,
        Author: el.editAuthor.value,
        Copyright: el.editCopyright.value,
        Software: el.editSoftware.value
      });
      const after = window.FootprintEngine.inspectBytes(editedBytes);
      if (entry.cleanUrl) URL.revokeObjectURL(entry.cleanUrl);
      entry.cleanBytes = editedBytes;
      entry.format = 'PNG';
      entry.mime = 'image/png';
      entry.afterReport = after.report;
      entry.cleaned = true;
      entry.cleanUrl = URL.createObjectURL(new Blob([editedBytes], { type: 'image/png' }));
      return;
    }

    // 1) Local lossless strip first (instant, works for ALL sizes & formats!)
    const stripped = window.FootprintEngine.stripBytes(entry.bytes);
    let cleanBytes = stripped.cleanBytes;
    let afterReport = stripped.afterReport;

    // For unsupported binary containers (e.g. AVIF/HEIC/TIFF/BMP), strip cleanly via JPEG canvas re-encode
    if (!stripped.losslessSupported) {
      cleanBytes = await stripViaCanvasFallback(entry.url);
      entry.format = 'JPEG';
      entry.mime = 'image/jpeg';
      afterReport = window.FootprintEngine.inspectBytes(cleanBytes).report;
    }

    // 2) Sync via Vercel Node.js backend in background for files <= 2MB (with 2.5s timeout so UI never hangs)
    if (entry.bytes.length <= 2 * 1024 * 1024 && stripped.losslessSupported) {
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 2500);
        const resp = await fetch(VERCEL_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: ctrl.signal,
          body: JSON.stringify({
            action: 'strip-metadata',
            fileBase64: bytesToBase64(entry.bytes, entry.mime)
          })
        });
        clearTimeout(timer);
        if (resp.ok) {
          const json = await resp.json();
          if (json.ok && json.cleanBase64) {
            cleanBytes = base64ToUint8(json.cleanBase64);
            afterReport = json.afterReport || afterReport;
          }
        }
      } catch (_) {
        // Already cleanly stripped locally above
      }
    }

    if (entry.cleanUrl) URL.revokeObjectURL(entry.cleanUrl);
    entry.cleanBytes = cleanBytes;
    entry.afterReport = afterReport;
    entry.cleaned = true;
    entry.cleanUrl = URL.createObjectURL(new Blob([cleanBytes], { type: getOutputMime(entry) }));
  }

  // ---------- Upload & Auto-Clean on Drop/Select ----------
  async function addFiles(fileList) {
    const incoming = Array.from(fileList || []);
    if (!incoming.length) return;

    for (const file of incoming) {
      if (state.files.length >= 5) {
        showToast('Batch limit reached (maximum 5 photos).');
        break;
      }
      try {
        const buf = await file.arrayBuffer();
        const bytes = new Uint8Array(buf);
        const url = URL.createObjectURL(file);
        const inspected = window.FootprintEngine.inspectBytes(bytes);

        const entry = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          name: file.name,
          mime: file.type || 'image/jpeg',
          size: bytes.length,
          bytes,
          url,
          format: inspected.format,
          report: inspected.report,
          cleanBytes: null,
          cleanUrl: null,
          afterReport: null,
          cleaned: false
        };

        state.files.push(entry);
        state.selectedId = entry.id;

        // Auto-clean immediately upon upload/drop!
        if (state.mode !== 'view') {
          await cleanEntry(entry);
        }
      } catch (err) {
        console.error(err);
        showToast(err.message || `Failed to process ${file.name}`);
      }
    }

    renderBatchList();
    renderSelectedMetadata();
    if (state.files.some((f) => f.cleaned)) {
      showToast('Photo cleaned! Click Download Clean Photo.');
    }
  }

  function renderBatchList() {
    if (state.files.length === 0) {
      el.batchList.classList.add('hidden');
      el.metadataDisplayCard.classList.add('hidden');
      el.removeMetadataBtn.disabled = true;
      el.downloadAllBtn.disabled = true;
      return;
    }

    el.batchList.classList.remove('hidden');
    el.removeMetadataBtn.disabled = false;
    el.downloadAllBtn.disabled = !state.files.some((f) => f.cleaned);

    el.batchList.innerHTML = '';
    state.files.forEach((f) => {
      const row = document.createElement('div');
      row.className = 'batch-row';

      const removedCount = f.report ? f.report.totalTags : 0;
      const pillClass = f.cleaned ? 'clean' : f.report.aiDetected ? 'ai' : '';
      const pillText = f.cleaned
        ? `✓ Cleaned (${removedCount} tags removed)`
        : f.report.aiDetected
          ? `⚠ ${f.report.aiTagsCount || 1} AI tag(s)`
          : `${removedCount} tags`;

      row.innerHTML = `
        <div class="batch-left">
          <img class="batch-thumb" src="${f.cleanUrl || f.url}" alt="" />
          <div class="batch-info">
            <div class="batch-name">${escapeHtml(f.name)}</div>
            <div class="batch-sub">
              <span>${f.format} · ${formatBytes(f.cleaned ? f.cleanBytes.length : f.size)}</span>
              <span class="tag-pill ${pillClass}">${pillText}</span>
            </div>
          </div>
        </div>
        <div class="batch-actions">
          <button type="button" class="mini-btn inspect-btn">View Tags</button>
          ${f.cleaned ? '<button type="button" class="mini-btn dl dl-btn">Download</button>' : ''}
          <button type="button" class="mini-btn rm-btn" title="Remove">✕</button>
        </div>
      `;

      row.querySelector('.inspect-btn').addEventListener('click', () => {
        state.selectedId = f.id;
        state.showDetails = true;
        renderSelectedMetadata();
      });

      const dlBtn = row.querySelector('.dl-btn');
      if (dlBtn) {
        dlBtn.addEventListener('click', () => triggerDownload(f));
      }

      row.querySelector('.rm-btn').addEventListener('click', () => {
        URL.revokeObjectURL(f.url);
        if (f.cleanUrl) URL.revokeObjectURL(f.cleanUrl);
        state.files = state.files.filter((x) => x.id !== f.id);
        if (state.selectedId === f.id) {
          state.selectedId = state.files[0] ? state.files[0].id : null;
        }
        renderBatchList();
        renderSelectedMetadata();
      });

      el.batchList.appendChild(row);
    });
  }

  function renderSelectedMetadata() {
    const file = state.files.find((f) => f.id === state.selectedId) || state.files[0];
    if (!file || (!state.showDetails && state.mode !== 'view')) {
      el.metadataDisplayCard.classList.add('hidden');
      return;
    }

    el.metadataDisplayCard.classList.remove('hidden');
    const report = file.cleaned && file.afterReport ? file.afterReport : file.report;
    const beforeReport = file.report;

    el.reportFilename.textContent = `${file.name} (${file.cleaned ? 'After Cleaning' : 'Metadata Tags'})`;
    el.reportTotalTags.textContent = `${report.totalTags} metadata tag(s) remaining`;
    el.reportAiTags.textContent = `${report.aiTagsCount} AI tag(s) remaining`;

    if (file.cleaned) {
      el.reportAiBanner.classList.remove('hidden');
      el.reportAiBanner.classList.add('safe');
      el.reportAiBanner.innerHTML = `<strong>Cleaned!</strong> Removed ${beforeReport.totalTags} tag(s) cleanly without altering photo pixels.`;
    } else if (report.aiDetected) {
      el.reportAiBanner.classList.remove('hidden', 'safe');
      el.reportAiBanner.innerHTML = `<strong>AI Metadata Found:</strong> ${report.detectedGenerators.join(', ') || 'AI tag detected'}`;
    } else {
      el.reportAiBanner.classList.remove('hidden');
      el.reportAiBanner.classList.add('safe');
      el.reportAiBanner.textContent = report.totalTags ? 'Standard photo metadata tags detected.' : 'No metadata tags found.';
    }

    el.reportSections.innerHTML = '';
    const displaySections = file.cleaned ? beforeReport.sections : report.sections;
    Object.keys(displaySections || {}).forEach((sec) => {
      const det = document.createElement('details');
      det.className = 'report-section';
      det.open = true;
      const labelSuffix = file.cleaned ? ' — Removed' : '';
      const rowsHtml = displaySections[sec]
        .map(
          (r) => `
          <div class="report-row">
            <div class="report-label">${escapeHtml(r.label)}</div>
            <div class="report-val">${escapeHtml(r.value)}</div>
          </div>`
        )
        .join('');
      det.innerHTML = `<summary>${escapeHtml(sec)} (${displaySections[sec].length})${labelSuffix}</summary>${rowsHtml}`;
      el.reportSections.appendChild(det);
    });
  }

  el.closeReportBtn.addEventListener('click', () => {
    state.showDetails = false;
    el.metadataDisplayCard.classList.add('hidden');
  });

  function triggerDownload(entry) {
    if (!entry.cleanUrl) {
      showToast('Clean the photo first.');
      return;
    }
    const a = document.createElement('a');
    const dot = entry.name.lastIndexOf('.');
    const base = dot > 0 ? entry.name.slice(0, dot) : entry.name;
    a.download = `${base}-clean.${getOutputExt(entry)}`;
    a.href = entry.cleanUrl;
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast(`Downloaded ${a.download}`);
  }

  el.removeMetadataBtn.addEventListener('click', async () => {
    if (!state.files.length) return;
    el.removeMetadataBtn.disabled = true;
    const prevText = el.primaryActionLabel.textContent;
    el.primaryActionLabel.textContent = 'Cleaning...';

    try {
      for (const entry of state.files) {
        await cleanEntry(entry);
      }
      renderBatchList();
      renderSelectedMetadata();
      showToast('Photo cleaned! Ready to download.');
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Could not clean photo');
    } finally {
      el.removeMetadataBtn.disabled = false;
      el.primaryActionLabel.textContent = prevText;
    }
  });

  el.downloadAllBtn.addEventListener('click', () => {
    const ready = state.files.filter((f) => f.cleaned);
    if (!ready.length) {
      showToast('Upload or clean a photo first.');
      return;
    }
    ready.forEach((f) => triggerDownload(f));
  });

  // Upload Events
  el.uploadButton.addEventListener('click', (e) => {
    e.stopPropagation();
    el.fileInput.click();
  });
  el.uploadZone.addEventListener('click', () => el.fileInput.click());
  el.fileInput.addEventListener('change', (e) => {
    addFiles(e.target.files);
    e.target.value = '';
  });
  el.uploadCard.addEventListener('dragover', (e) => {
    e.preventDefault();
    el.uploadCard.classList.add('drag-over');
  });
  el.uploadCard.addEventListener('dragleave', () => el.uploadCard.classList.remove('drag-over'));
  el.uploadCard.addEventListener('drop', (e) => {
    e.preventDefault();
    el.uploadCard.classList.remove('drag-over');
    addFiles(e.dataTransfer.files);
  });

  // Sample AI Photo
  el.samplePhotoBtn.addEventListener('click', async () => {
    const c = document.createElement('canvas');
    c.width = 640;
    c.height = 420;
    const ctx = c.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 640, 420);
    g.addColorStop(0, '#007365');
    g.addColorStop(1, '#16211f');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 640, 420);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText('Hydrochloric Clean Sample', 135, 200);
    ctx.font = '16px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.82)';
    ctx.fillText('Sample AI Photo with C2PA & Midjourney Metadata', 120, 235);

    const blob = await new Promise((res) => c.toBlob(res, 'image/png'));
    const raw = new Uint8Array(await blob.arrayBuffer());
    const withAiMeta = window.FootprintEngine.writePngMetadata(raw, {
      Software: 'OpenAI DALL-E 3 / ChatGPT',
      Description: 'Midjourney --v 6.1 --ar 3:2',
      'XML:com.adobe.xmp': '<x:xmpmeta><rdf:Description iptcExt:DigitalSourceType="trainedAlgorithmicMedia" xmp:CreatorTool="ChatGPT C2PA"/></x:xmpmeta>'
    });
    addFiles([new File([withAiMeta], 'sample-ai-photo.png', { type: 'image/png' })]);
  });

  // ---------- Visual AI Eraser ----------
  const cImgCtx = el.cImageCanvas.getContext('2d', { willReadFrequently: true });
  const cMaskCtx = el.cMaskCanvas.getContext('2d', { willReadFrequently: true });

  el.cChooseBtn.addEventListener('click', () => el.cFileInput.click());
  el.cFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, 1400 / Math.max(img.naturalWidth, img.naturalHeight));
      state.cW = Math.round(img.naturalWidth * scale);
      state.cH = Math.round(img.naturalHeight * scale);
      el.cImageCanvas.width = state.cW;
      el.cImageCanvas.height = state.cH;
      el.cMaskCanvas.width = state.cW;
      el.cMaskCanvas.height = state.cH;
      cImgCtx.drawImage(img, 0, 0, state.cW, state.cH);
      cMaskCtx.clearRect(0, 0, state.cW, state.cH);
      state.cImgData = cImgCtx.getImageData(0, 0, state.cW, state.cH);
      el.cPlaceholder.classList.add('hidden');
      el.cCanvasWrap.classList.remove('hidden');
      el.cRemoveBtn.disabled = false;
      el.cDownloadBtn.classList.add('hidden');
    };
    img.src = URL.createObjectURL(file);
  });

  el.cTools.forEach((b) => {
    b.addEventListener('click', () => {
      el.cTools.forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      state.cTool = b.dataset.ctool;
    });
  });

  function cCoords(e) {
    const r = el.cMaskCanvas.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width) * state.cW,
      y: ((e.clientY - r.top) / r.height) * state.cH
    };
  }

  el.cMaskCanvas.addEventListener('pointerdown', (e) => {
    el.cMaskCanvas.setPointerCapture(e.pointerId);
    state.cDrawing = true;
    const pt = cCoords(e);
    if (state.cTool === 'rect') {
      state.cRectStart = pt;
    } else {
      state.cLastPt = pt;
      drawCMask(pt, pt);
    }
  });

  el.cMaskCanvas.addEventListener('pointermove', (e) => {
    if (!state.cDrawing || state.cTool === 'rect') return;
    const pt = cCoords(e);
    drawCMask(state.cLastPt, pt);
    state.cLastPt = pt;
  });

  el.cMaskCanvas.addEventListener('pointerup', (e) => {
    if (!state.cDrawing) return;
    state.cDrawing = false;
    if (state.cTool === 'rect' && state.cRectStart) {
      const end = cCoords(e);
      cMaskCtx.fillStyle = '#ff3d3d';
      cMaskCtx.fillRect(
        Math.min(state.cRectStart.x, end.x),
        Math.min(state.cRectStart.y, end.y),
        Math.abs(end.x - state.cRectStart.x),
        Math.abs(end.y - state.cRectStart.y)
      );
      state.cRectStart = null;
    }
  });

  function drawCMask(p1, p2) {
    cMaskCtx.save();
    cMaskCtx.lineCap = 'round';
    cMaskCtx.lineWidth = Number(el.cBrushSize.value);
    if (state.cTool === 'eraser') {
      cMaskCtx.globalCompositeOperation = 'destination-out';
      cMaskCtx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      cMaskCtx.strokeStyle = '#ff3d3d';
    }
    cMaskCtx.beginPath();
    cMaskCtx.moveTo(p1.x, p1.y);
    cMaskCtx.lineTo(p2.x + 0.01, p2.y);
    cMaskCtx.stroke();
    cMaskCtx.restore();
  }

  el.cCornerBrBtn.addEventListener('click', () => {
    if (!state.cW) return;
    cMaskCtx.fillStyle = '#ff3d3d';
    const bw = Math.min(240, state.cW * 0.25);
    const bh = Math.min(90, state.cH * 0.14);
    cMaskCtx.fillRect(state.cW - bw - 10, state.cH - bh - 10, bw, bh);
  });

  el.cClearBtn.addEventListener('click', () => cMaskCtx.clearRect(0, 0, state.cW, state.cH));

  el.cRemoveBtn.addEventListener('click', async () => {
    if (!state.cW) return;
    el.cRemoveBtn.disabled = true;
    const mImg = cMaskCtx.getImageData(0, 0, state.cW, state.cH);
    const maskAlpha = new Uint8Array(state.cW * state.cH);
    for (let i = 0; i < maskAlpha.length; i++) maskAlpha[i] = mImg.data[i * 4 + 3];

    try {
      const cleaned = await window.CleanPixelInpainter.inpaintImage(state.cImgData, maskAlpha, { mode: 'smart' });
      state.cImgData = cleaned;
      cImgCtx.putImageData(cleaned, 0, 0);
      cMaskCtx.clearRect(0, 0, state.cW, state.cH);
      el.cDownloadBtn.classList.remove('hidden');
      showToast('Badge cleaned! Ready to download.');
    } catch (err) {
      showToast(err.message);
    } finally {
      el.cRemoveBtn.disabled = false;
    }
  });

  el.cDownloadBtn.addEventListener('click', () => {
    const a = document.createElement('a');
    a.download = 'hydrochloric-clean-photo.png';
    a.href = el.cImageCanvas.toDataURL('image/png');
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
})();
