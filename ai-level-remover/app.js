(function () {
  'use strict';

  // ---------- i18n Translations (EN / বাংলা) ----------
  const I18N = {
    en: {
      subtitle: 'Photo AI Label & Object Remover',
      localEngine: 'Local Engine',
      apiEngine: 'Vercel Cloud API',
      newPhoto: 'New Photo',
      download: 'Download',
      dropTitle: 'Drop your photo here to remove AI labels',
      dropSub: 'Supports JPG, PNG, WebP — or press <kbd>Ctrl+V</kbd> to paste an image. 100% private in your browser.',
      selectPhoto: 'Select Photo',
      tryDemo: 'Try Demo Image',
      pill1: 'Instant Browser AI',
      pill2: 'Corner Badge Presets',
      pill3: 'Full Original Resolution',
      toolsTitle: 'Selection Tools',
      toolBrush: 'Brush',
      toolBox: 'Box',
      toolEraser: 'Eraser',
      brushSize: 'Brush Size',
      presetsTitle: 'Quick Corner AI Badge',
      presetsHelp: 'Auto-highlight common corner AI labels',
      cornerTL: 'Top-Left',
      cornerTR: 'Top-Right',
      cornerBL: 'Bottom-Left',
      cornerBR: 'Bottom-Right',
      qualityTitle: 'Removal Mode',
      modeSmart: 'Smart Texture + Gradient (Balanced)',
      modeHigh: 'Deep Texture Synthesis (Best Quality)',
      modeFast: 'Fast Smooth Fill (Solid Backgrounds)',
      removeBtn: 'Remove AI Label',
      undo: 'Undo',
      clear: 'Clear',
      reset: 'Original',
      resolution: 'Resolution:',
      statusLabel: 'Status:',
      readyStatus: 'Paint over the AI label',
      fit: 'Fit',
      compare: 'Before / After',
      holdOriginal: 'Hold to View Original',
      processing: 'Removing AI label & reconstructing background...',
      settingsTitle: 'AI Engine Settings',
      engineLocalTitle: 'Built-in Browser Engine (Free & Instant)',
      engineLocalDesc: 'Runs 100% locally on your device via HTML5 Canvas. No API key or server required.',
      engineApiTitle: 'Custom Vercel / Node.js Cloud API (Optional)',
      engineApiDesc: 'Connect your own Vercel Node.js endpoint for heavy deep-learning inpainting (e.g., Clipdrop / Replicate).',
      apiUrlLabel: 'API Endpoint URL',
      apiKeyLabel: 'Optional Auth Bearer Token',
      saveSettings: 'Save Settings',
      toastCleaned: 'AI label removed cleanly!',
      toastSelectMask: 'First brush or select the AI label area.',
      toastInvalidFile: 'Please select a valid image file (JPG, PNG, WebP).',
      toastSettingsSaved: 'Engine settings saved!',
      toastApiMissing: 'Please enter a valid API endpoint URL in Engine Settings.',
      statusDone: 'Cleaned successfully',
      statusMasked: 'Ready to remove'
    },
    bn: {
      subtitle: 'ছবির AI লেবেল ও ওয়াটারমার্ক রিমুভার',
      localEngine: 'লোকাল ইঞ্জিন',
      apiEngine: 'Vercel ক্লাউড API',
      newPhoto: 'নতুন ছবি',
      download: 'ডাউনলোড',
      dropTitle: 'AI লেবেল রিমুভ করতে ছবি এখানে ছাড়ুন',
      dropSub: 'JPG, PNG, WebP সাপোর্ট করে — অথবা <kbd>Ctrl+V</kbd> চেপে ছবি পেস্ট করুন। সম্পূর্ণ ফ্রি ও প্রাইভেট।',
      selectPhoto: 'ছবি সিলেক্ট করুন',
      tryDemo: 'ডেমো ছবি দেখুন',
      pill1: 'ব্রাউজারেই ইনস্ট্যান্ট AI',
      pill2: 'কর্নার ব্যাজ প্রিসেট',
      pill3: 'অরিজিনাল রেজোলিউশন',
      toolsTitle: 'সিলেকশন টুলস',
      toolBrush: 'ব্রাশ',
      toolBox: 'বক্স',
      toolEraser: 'ইরেজার',
      brushSize: 'ব্রাশের সাইজ',
      presetsTitle: 'দ্রুত কর্নার AI লেবেল',
      presetsHelp: 'কোণার AI লেবেল এক ক্লিকে মার্ক করুন',
      cornerTL: 'উপরে-বামে',
      cornerTR: 'উপরে-ডানে',
      cornerBL: 'নিচে-বামে',
      cornerBR: 'নিচে-ডানে',
      qualityTitle: 'রিমুভ মোড',
      modeSmart: 'স্মার্ট টেক্সচার + গ্রেডিয়েন্ট (সেরা ব্যালেন্স)',
      modeHigh: 'ডিপ টেক্সচার সিন্থেসিস (সর্বোচ্চ কোয়ালিটি)',
      modeFast: 'ফাস্ট স্মুথ ফিল (এক রঙের ব্যাকগ্রাউন্ড)',
      removeBtn: 'AI লেবেল রিমুভ করুন',
      undo: 'আনডু',
      clear: 'মুছুন',
      reset: 'আসল ছবি',
      resolution: 'রেজোলিউশন:',
      statusLabel: 'অবস্থা:',
      readyStatus: 'AI লেবেলের ওপর ব্রাশ করুন',
      fit: 'ফিট',
      compare: 'আগে / পরে',
      holdOriginal: 'আসল ছবি দেখতে চেপে ধরুন',
      processing: 'AI লেবেল রিমুভ করে ব্যাকগ্রাউন্ড ঠিক করা হচ্ছে...',
      settingsTitle: 'AI ইঞ্জিন সেটিংস',
      engineLocalTitle: 'বিল্ট-ইন ব্রাউজার ইঞ্জিন (ফ্রি ও ইনস্ট্যান্ট)',
      engineLocalDesc: 'সরাসরি আপনার ডিভাইসে HTML5 Canvas দিয়ে চলে। কোনো সার্ভার বা API Key লাগে না।',
      engineApiTitle: 'কাস্টম Vercel / Node.js ক্লাউড API (ঐচ্ছিক)',
      engineApiDesc: 'চাইলে নিজের Vercel Node.js সার্ভার URL যুক্ত করে হেভি ক্লাউড AI মডেল চালাতে পারেন।',
      apiUrlLabel: 'API এন্ডপয়েন্ট URL',
      apiKeyLabel: 'ঐচ্ছিক অথেনটিকেশন টোকেন',
      saveSettings: 'সেটিংস সেভ করুন',
      toastCleaned: 'AI লেবেল সফলভাবে রিমুভ হয়েছে!',
      toastSelectMask: 'আগে ছবির AI লেবেলের অংশটুকু ব্রাশ বা বক্স দিয়ে মার্ক করুন।',
      toastInvalidFile: 'অনুগ্রহ করে একটি সঠিক ছবি (JPG, PNG, WebP) দিন।',
      toastSettingsSaved: 'ইঞ্জিন সেটিংস সেভ হয়েছে!',
      toastApiMissing: 'সেটিংসে গিয়ে একটি সঠিক Vercel API URL দিন।',
      statusDone: 'রিমুভ সম্পন্ন হয়েছে',
      statusMasked: 'রিমুভ করার জন্য প্রস্তুত'
    }
  };

  // ---------- DOM Elements ----------
  const el = {
    uploadView: document.getElementById('uploadView'),
    editorView: document.getElementById('editorView'),
    dropZone: document.getElementById('dropZone'),
    fileInput: document.getElementById('fileInput'),
    browseBtn: document.getElementById('browseBtn'),
    tryDemoBtn: document.getElementById('tryDemoBtn'),
    newPhotoBtn: document.getElementById('newPhotoBtn'),
    downloadGroup: document.getElementById('downloadGroup'),
    downloadBtn: document.getElementById('downloadBtn'),
    exportFormat: document.getElementById('exportFormat'),

    langToggleBtn: document.getElementById('langToggleBtn'),
    langLabel: document.getElementById('langLabel'),

    imageCanvas: document.getElementById('imageCanvas'),
    originalCompareCanvas: document.getElementById('originalCompareCanvas'),
    maskCanvas: document.getElementById('maskCanvas'),
    canvasWrapper: document.getElementById('canvasWrapper'),
    viewport: document.getElementById('viewport'),
    rectPreview: document.getElementById('rectPreview'),
    brushCursor: document.getElementById('brushCursor'),
    processingOverlay: document.getElementById('processingOverlay'),
    progressBar: document.getElementById('progressBar'),

    toolBtns: document.querySelectorAll('.tool-btn'),
    presetBtns: document.querySelectorAll('.preset-btn'),
    brushSize: document.getElementById('brushSize'),
    brushSizeVal: document.getElementById('brushSizeVal'),
    brushSizeGroup: document.getElementById('brushSizeGroup'),
    qualityMode: document.getElementById('qualityMode'),

    removeBtn: document.getElementById('removeBtn'),
    undoMaskBtn: document.getElementById('undoMaskBtn'),
    clearMaskBtn: document.getElementById('clearMaskBtn'),
    resetImgBtn: document.getElementById('resetImgBtn'),

    zoomOutBtn: document.getElementById('zoomOutBtn'),
    zoomInBtn: document.getElementById('zoomInBtn'),
    zoomFitBtn: document.getElementById('zoomFitBtn'),
    zoomVal: document.getElementById('zoomVal'),

    compareBtn: document.getElementById('compareBtn'),
    holdOriginalBtn: document.getElementById('holdOriginalBtn'),
    compareDivider: document.getElementById('compareDivider'),

    imgDimensions: document.getElementById('imgDimensions'),
    statusText: document.getElementById('statusText'),
    toast: document.getElementById('toast')
  };

  const imgCtx = el.imageCanvas.getContext('2d', { willReadFrequently: true });
  const origCtx = el.originalCompareCanvas.getContext('2d', { willReadFrequently: true });
  const maskCtx = el.maskCanvas.getContext('2d', { willReadFrequently: true });

  // ---------- App State ----------
  const state = {
    lang: 'en',
    tool: 'brush',
    brushSize: 34,
    zoom: 1,
    imgW: 0,
    imgH: 0,
    originalImageData: null,
    currentImageData: null,
    hasCleaned: false,
    compareActive: false,
    compareSplit: 0.5,
    isDrawing: false,
    isComparingDrag: false,
    lastPt: null,
    rectStart: null,
    maskHistory: [],
    apiUrl: window.location.hostname.endsWith('.vercel.app')
      ? `${window.location.origin}/api/remove`
      : 'https://mohammadshourovcom.vercel.app/api/remove',
    fileName: 'cleaned-photo'
  };

  // ---------- Utility Functions ----------
  let toastTimer = null;
  function showToast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.add('hidden'), 2800);
  }

  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
  }

  function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (key === 'dropSub') {
        node.innerHTML = t(key);
      } else {
        node.textContent = t(key);
      }
    });
    el.langLabel.textContent = state.lang === 'en' ? 'বাংলা' : 'English';
    updateButtonsState();
  }

  function hasAnyMask() {
    if (!state.imgW || !state.imgH) return false;
    const m = maskCtx.getImageData(0, 0, state.imgW, state.imgH).data;
    for (let i = 3; i < m.length; i += 16) {
      if (m[i] > 20) return true;
    }
    // Fine check if coarse step missed small stroke
    for (let i = 3; i < m.length; i += 4) {
      if (m[i] > 20) return true;
    }
    return false;
  }

  function updateButtonsState() {
    const masked = hasAnyMask();
    el.removeBtn.disabled = !masked;
    el.clearMaskBtn.disabled = !masked;
    el.undoMaskBtn.disabled = state.maskHistory.length === 0;
    el.resetImgBtn.disabled = !state.hasCleaned;

    if (state.hasCleaned) {
      el.compareBtn.classList.remove('hidden');
      el.holdOriginalBtn.classList.remove('hidden');
      el.statusText.textContent = masked ? t('statusMasked') : t('statusDone');
    } else {
      el.compareBtn.classList.add('hidden');
      el.holdOriginalBtn.classList.add('hidden');
      el.statusText.textContent = masked ? t('statusMasked') : t('readyStatus');
    }
  }

  function pushMaskHistory() {
    if (!state.imgW) return;
    if (state.maskHistory.length >= 20) state.maskHistory.shift();
    state.maskHistory.push(maskCtx.getImageData(0, 0, state.imgW, state.imgH));
  }

  // ---------- Image Loading ----------
  function loadCanvasFromSource(drawFn, name) {
    state.fileName = name || 'cleaned-photo';
    state.hasCleaned = false;
    state.compareActive = false;
    state.maskHistory = [];
    setCompareMode(false);

    drawFn();

    state.originalImageData = imgCtx.getImageData(0, 0, state.imgW, state.imgH);
    state.currentImageData = imgCtx.getImageData(0, 0, state.imgW, state.imgH);

    el.originalCompareCanvas.width = state.imgW;
    el.originalCompareCanvas.height = state.imgH;
    origCtx.putImageData(state.originalImageData, 0, 0);

    el.maskCanvas.width = state.imgW;
    el.maskCanvas.height = state.imgH;
    maskCtx.clearRect(0, 0, state.imgW, state.imgH);

    el.imgDimensions.textContent = `${state.imgW} × ${state.imgH}`;

    el.uploadView.classList.add('hidden');
    el.editorView.classList.remove('hidden');
    el.newPhotoBtn.classList.remove('hidden');
    el.downloadGroup.classList.remove('hidden');

    fitZoomToViewport();
    updateButtonsState();
  }

  function handleImageFile(file) {
    if (!file || !file.type.startsWith('image/')) {
      showToast(t('toastInvalidFile'));
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        // Keep up to 2400px max dimension for crisp yet snappy browser performance
        const maxSide = 2400;
        let w = img.naturalWidth;
        let h = img.naturalHeight;
        if (w > maxSide || h > maxSide) {
          const ratio = maxSide / Math.max(w, h);
          w = Math.round(w * ratio);
          h = Math.round(h * ratio);
        }
        state.imgW = w;
        state.imgH = h;
        el.imageCanvas.width = w;
        el.imageCanvas.height = h;
        const baseName = file.name.replace(/\.[^.]+$/, '');
        loadCanvasFromSource(() => {
          imgCtx.drawImage(img, 0, 0, w, h);
        }, baseName);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  function loadDemoImage() {
    const w = 1000;
    const h = 660;
    state.imgW = w;
    state.imgH = h;
    el.imageCanvas.width = w;
    el.imageCanvas.height = h;

    loadCanvasFromSource(() => {
      // Sunset sky gradient
      const sky = imgCtx.createLinearGradient(0, 0, 0, h * 0.68);
      sky.addColorStop(0, '#1e3a8a');
      sky.addColorStop(0.5, '#7c3aed');
      sky.addColorStop(1, '#fb923c');
      imgCtx.fillStyle = sky;
      imgCtx.fillRect(0, 0, w, h);

      // Sun
      const sunGrad = imgCtx.createRadialGradient(w * 0.65, h * 0.42, 8, w * 0.65, h * 0.42, 95);
      sunGrad.addColorStop(0, '#fef08a');
      sunGrad.addColorStop(0.4, 'rgba(253, 186, 116, 0.7)');
      sunGrad.addColorStop(1, 'rgba(251, 146, 60, 0)');
      imgCtx.fillStyle = sunGrad;
      imgCtx.beginPath();
      imgCtx.arc(w * 0.65, h * 0.42, 95, 0, Math.PI * 2);
      imgCtx.fill();

      // Mountains
      imgCtx.fillStyle = '#312e81';
      imgCtx.beginPath();
      imgCtx.moveTo(0, h * 0.66);
      imgCtx.lineTo(180, h * 0.45);
      imgCtx.lineTo(390, h * 0.62);
      imgCtx.lineTo(610, h * 0.41);
      imgCtx.lineTo(820, h * 0.58);
      imgCtx.lineTo(w, h * 0.48);
      imgCtx.lineTo(w, h);
      imgCtx.lineTo(0, h);
      imgCtx.closePath();
      imgCtx.fill();

      // Foreground lake reflection
      const lake = imgCtx.createLinearGradient(0, h * 0.66, 0, h);
      lake.addColorStop(0, '#1e1b4b');
      lake.addColorStop(1, '#0f172a');
      imgCtx.fillStyle = lake;
      imgCtx.fillRect(0, h * 0.66, w, h * 0.34);

      // Subtle grass/water texture
      for (let i = 0; i < 400; i++) {
        imgCtx.fillStyle = i % 2 === 0 ? 'rgba(251, 146, 60, 0.14)' : 'rgba(148, 163, 184, 0.08)';
        const rx = Math.random() * w;
        const ry = h * 0.67 + Math.random() * (h * 0.32);
        imgCtx.fillRect(rx, ry, 18 + Math.random() * 44, 2);
      }

      // Synthetic "AI GENERATED" badge in bottom-right corner
      const bx = w - 215;
      const by = h - 64;
      imgCtx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      imgCtx.beginPath();
      imgCtx.roundRect(bx, by, 190, 42, 10);
      imgCtx.fill();
      imgCtx.strokeStyle = 'rgba(255,255,255,0.45)';
      imgCtx.lineWidth = 1.5;
      imgCtx.stroke();

      imgCtx.fillStyle = '#38bdf8';
      imgCtx.font = 'bold 18px Inter, sans-serif';
      imgCtx.fillText('✦ AI GENERATED', bx + 18, by + 27);
    }, 'demo-landscape');
  }

  // ---------- Zoom & Display Scaling ----------
  function applyZoom() {
    if (!state.imgW) return;
    const dispW = Math.round(state.imgW * state.zoom);
    const dispH = Math.round(state.imgH * state.zoom);

    el.canvasWrapper.style.width = `${dispW}px`;
    el.canvasWrapper.style.height = `${dispH}px`;

    [el.imageCanvas, el.originalCompareCanvas, el.maskCanvas].forEach((c) => {
      c.style.width = `${dispW}px`;
      c.style.height = `${dispH}px`;
    });

    el.zoomVal.textContent = `${Math.round(state.zoom * 100)}%`;
  }

  function fitZoomToViewport() {
    const rect = el.viewport.getBoundingClientRect();
    const availW = Math.max(260, rect.width - 56);
    const availH = Math.max(240, rect.height - 56);
    state.zoom = Math.min(1, availW / state.imgW, availH / state.imgH);
    applyZoom();
  }

  // ---------- Canvas Coordinates & Mask Drawing ----------
  function getCanvasCoords(clientX, clientY) {
    const rect = el.maskCanvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * state.imgW;
    const y = ((clientY - rect.top) / rect.height) * state.imgH;
    return { x, y };
  }

  function drawBrushStroke(p1, p2) {
    const radius = (state.brushSize / state.zoom) * 0.5;
    maskCtx.save();
    maskCtx.lineCap = 'round';
    maskCtx.lineJoin = 'round';
    maskCtx.lineWidth = radius * 2;

    if (state.tool === 'eraser') {
      maskCtx.globalCompositeOperation = 'destination-out';
      maskCtx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      maskCtx.globalCompositeOperation = 'source-over';
      maskCtx.strokeStyle = '#f43f5e';
    }

    maskCtx.beginPath();
    maskCtx.moveTo(p1.x, p1.y);
    maskCtx.lineTo(p2.x, p2.y);
    maskCtx.stroke();
    maskCtx.restore();
  }

  function updateBrushCursor(clientX, clientY) {
    if (state.tool === 'rect' || state.compareActive) {
      el.brushCursor.classList.add('hidden');
      return;
    }
    el.brushCursor.classList.remove('hidden');
    el.brushCursor.style.width = `${state.brushSize}px`;
    el.brushCursor.style.height = `${state.brushSize}px`;
    el.brushCursor.style.left = `${clientX}px`;
    el.brushCursor.style.top = `${clientY}px`;
  }

  // ---------- Corner Badge Preset ----------
  function applyCornerPreset(corner) {
    if (!state.imgW) return;
    pushMaskHistory();
    const boxW = Math.round(Math.min(Math.max(state.imgW * 0.22, 130), 260));
    const boxH = Math.round(Math.min(Math.max(state.imgH * 0.11, 55), 110));
    const pad = Math.round(Math.min(state.imgW, state.imgH) * 0.015);

    let x = pad;
    let y = pad;
    if (corner === 'tr' || corner === 'br') x = state.imgW - boxW - pad;
    if (corner === 'bl' || corner === 'br') y = state.imgH - boxH - pad;

    maskCtx.save();
    maskCtx.fillStyle = '#f43f5e';
    maskCtx.fillRect(x, y, boxW, boxH);
    maskCtx.restore();

    updateButtonsState();
  }

  // ---------- Before / After Comparison ----------
  function setCompareMode(active) {
    state.compareActive = active;
    if (!active) {
      el.originalCompareCanvas.classList.add('hidden');
      el.compareDivider.classList.add('hidden');
      el.maskCanvas.style.pointerEvents = 'auto';
      el.compareBtn.classList.remove('btn-primary');
      return;
    }
    el.originalCompareCanvas.classList.remove('hidden');
    el.compareDivider.classList.remove('hidden');
    el.maskCanvas.style.pointerEvents = 'none';
    el.compareBtn.classList.add('btn-primary');
    updateCompareClip();
  }

  function updateCompareClip() {
    const pct = Math.max(0, Math.min(1, state.compareSplit)) * 100;
    el.originalCompareCanvas.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    el.compareDivider.style.left = `${pct}%`;
  }

  // ---------- Run Removal (Background Vercel Node.js API + Local Fallback) ----------
  async function runLocalFallbackRemoval() {
    const maskImg = maskCtx.getImageData(0, 0, state.imgW, state.imgH);
    const maskAlpha = new Uint8Array(state.imgW * state.imgH);
    for (let i = 0; i < maskAlpha.length; i++) {
      maskAlpha[i] = maskImg.data[i * 4 + 3];
    }

    const result = await window.CleanPixelInpainter.inpaintImage(
      state.currentImageData,
      maskAlpha,
      { mode: el.qualityMode.value },
      (pct) => {
        el.progressBar.style.width = `${pct}%`;
      }
    );

    state.currentImageData = result;
    imgCtx.putImageData(result, 0, 0);
  }

  async function runRemoval() {
    if (!hasAnyMask()) {
      showToast(t('toastSelectMask'));
      return;
    }

    setCompareMode(false);
    el.processingOverlay.classList.remove('hidden');
    el.progressBar.style.width = '5%';

    try {
      try {
        await runRemoteApiRemoval();
      } catch (apiErr) {
        console.warn('Background Vercel API unavailable, using built-in browser engine:', apiErr);
        await runLocalFallbackRemoval();
      }

      maskCtx.clearRect(0, 0, state.imgW, state.imgH);
      state.maskHistory = [];
      state.hasCleaned = true;
      updateButtonsState();
      showToast(t('toastCleaned'));
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Removal failed');
    } finally {
      el.processingOverlay.classList.add('hidden');
      el.progressBar.style.width = '0%';
    }
  }

  async function runRemoteApiRemoval() {
    el.progressBar.style.width = '18%';

    const mData = maskCtx.getImageData(0, 0, state.imgW, state.imgH).data;
    let minX = state.imgW, minY = state.imgH, maxX = -1, maxY = -1;
    for (let y = 0; y < state.imgH; y++) {
      for (let x = 0; x < state.imgW; x++) {
        if (mData[(y * state.imgW + x) * 4 + 3] > 20) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    if (maxX < minX) throw new Error('No masked region selected');

    const pad = 80;
    const x0 = Math.max(0, minX - pad);
    const y0 = Math.max(0, minY - pad);
    const x1 = Math.min(state.imgW - 1, maxX + pad);
    const y1 = Math.min(state.imgH - 1, maxY + pad);
    const cropW = x1 - x0 + 1;
    const cropH = y1 - y0 + 1;

    // Keep payload compact (< 520px) so it stays fast & well under Vercel 4.5MB limit
    const scale = Math.min(1, 520 / Math.max(cropW, cropH));
    const sw = Math.max(16, Math.round(cropW * scale));
    const sh = Math.max(16, Math.round(cropH * scale));

    const cropImgCanvas = document.createElement('canvas');
    cropImgCanvas.width = sw;
    cropImgCanvas.height = sh;
    cropImgCanvas.getContext('2d').drawImage(el.imageCanvas, x0, y0, cropW, cropH, 0, 0, sw, sh);

    const cropMaskCanvas = document.createElement('canvas');
    cropMaskCanvas.width = sw;
    cropMaskCanvas.height = sh;
    const cmCtx = cropMaskCanvas.getContext('2d');
    cmCtx.fillStyle = '#000000';
    cmCtx.fillRect(0, 0, sw, sh);

    // Draw scaled mask then threshold cleanly to pure white
    const tmpMask = document.createElement('canvas');
    tmpMask.width = sw;
    tmpMask.height = sh;
    tmpMask.getContext('2d').drawImage(el.maskCanvas, x0, y0, cropW, cropH, 0, 0, sw, sh);
    const tmpData = tmpMask.getContext('2d').getImageData(0, 0, sw, sh).data;
    const bwData = cmCtx.getImageData(0, 0, sw, sh);
    for (let i = 0; i < tmpData.length; i += 4) {
      if (tmpData[i + 3] > 20) {
        bwData.data[i] = 255;
        bwData.data[i + 1] = 255;
        bwData.data[i + 2] = 255;
        bwData.data[i + 3] = 255;
      }
    }
    cmCtx.putImageData(bwData, 0, 0);

    const headers = { 'Content-Type': 'application/json' };

    el.progressBar.style.width = '50%';
    const response = await fetch(state.apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        imageBase64: cropImgCanvas.toDataURL('image/png'),
        maskBase64: cropMaskCanvas.toDataURL('image/png'),
        mode: el.qualityMode.value
      })
    });

    if (!response.ok) {
      let msg = `API Error (${response.status})`;
      try {
        const errJson = await response.json();
        if (errJson && errJson.error) msg = errJson.error;
      } catch (_) {}
      throw new Error(msg);
    }

    el.progressBar.style.width = '82%';
    const ctype = response.headers.get('content-type') || '';
    let resultImgSrc;
    if (ctype.includes('application/json')) {
      const json = await response.json();
      if (!json.imageBase64) throw new Error('Invalid API response');
      resultImgSrc = json.imageBase64;
    } else {
      const blob = await response.blob();
      resultImgSrc = URL.createObjectURL(blob);
    }

    const cleanedImg = await new Promise((resolve, reject) => {
      const im = new Image();
      im.onload = () => {
        if (resultImgSrc.startsWith('blob:')) URL.revokeObjectURL(resultImgSrc);
        resolve(im);
      };
      im.onerror = () => reject(new Error('Failed to decode cleaned image'));
      im.src = resultImgSrc;
    });

    // Composite cleaned pixels back into masked region at full original resolution
    const compCanvas = document.createElement('canvas');
    compCanvas.width = cropW;
    compCanvas.height = cropH;
    const compCtx = compCanvas.getContext('2d');
    compCtx.drawImage(cleanedImg, 0, 0, cropW, cropH);
    compCtx.globalCompositeOperation = 'destination-in';
    compCtx.drawImage(el.maskCanvas, x0, y0, cropW, cropH, 0, 0, cropW, cropH);

    imgCtx.drawImage(compCanvas, x0, y0);
    state.currentImageData = imgCtx.getImageData(0, 0, state.imgW, state.imgH);
  }

  // ---------- Event Wiring ----------
  el.browseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    el.fileInput.click();
  });

  el.tryDemoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    loadDemoImage();
  });

  el.dropZone.addEventListener('click', () => el.fileInput.click());
  el.dropZone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      el.fileInput.click();
    }
  });

  el.fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) handleImageFile(e.target.files[0]);
    e.target.value = '';
  });

  el.dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    el.dropZone.classList.add('drag-over');
  });

  el.dropZone.addEventListener('dragleave', () => {
    el.dropZone.classList.remove('drag-over');
  });

  el.dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    el.dropZone.classList.remove('drag-over');
    if (e.dataTransfer.files[0]) handleImageFile(e.dataTransfer.files[0]);
  });

  window.addEventListener('paste', (e) => {
    const items = e.clipboardData && e.clipboardData.items;
    if (!items) return;
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        handleImageFile(item.getAsFile());
        break;
      }
    }
  });

  el.newPhotoBtn.addEventListener('click', () => el.fileInput.click());

  el.downloadBtn.addEventListener('click', () => {
    const mime = el.exportFormat.value;
    const ext = mime === 'image/jpeg' ? 'jpg' : mime === 'image/webp' ? 'webp' : 'png';
    const link = document.createElement('a');
    link.download = `${state.fileName}-clean.${ext}`;
    link.href = el.imageCanvas.toDataURL(mime, 0.94);
    link.click();
  });

  // Tools
  el.toolBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      el.toolBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.tool = btn.dataset.tool;
      el.brushSizeGroup.style.opacity = state.tool === 'rect' ? '0.4' : '1';
      el.maskCanvas.style.cursor = state.tool === 'rect' ? 'crosshair' : 'none';
    });
  });

  el.brushSize.addEventListener('input', () => {
    state.brushSize = Number(el.brushSize.value);
    el.brushSizeVal.textContent = `${state.brushSize}px`;
  });

  el.presetBtns.forEach((btn) => {
    btn.addEventListener('click', () => applyCornerPreset(btn.dataset.corner));
  });

  // Mask Pointer Events
  el.maskCanvas.addEventListener('pointerdown', (e) => {
    if (state.compareActive) return;
    el.maskCanvas.setPointerCapture(e.pointerId);
    pushMaskHistory();
    state.isDrawing = true;
    const pt = getCanvasCoords(e.clientX, e.clientY);

    if (state.tool === 'rect') {
      state.rectStart = { clientX: e.clientX, clientY: e.clientY, pt };
      el.rectPreview.classList.remove('hidden');
    } else {
      state.lastPt = pt;
      drawBrushStroke(pt, pt);
    }
  });

  el.maskCanvas.addEventListener('pointermove', (e) => {
    updateBrushCursor(e.clientX, e.clientY);
    if (!state.isDrawing) return;

    const pt = getCanvasCoords(e.clientX, e.clientY);
    if (state.tool === 'rect' && state.rectStart) {
      const wrapRect = el.canvasWrapper.getBoundingClientRect();
      const x1 = e.clientX - wrapRect.left;
      const y1 = e.clientY - wrapRect.top;
      const x0 = state.rectStart.clientX - wrapRect.left;
      const y0 = state.rectStart.clientY - wrapRect.top;

      el.rectPreview.style.left = `${Math.min(x0, x1)}px`;
      el.rectPreview.style.top = `${Math.min(y0, y1)}px`;
      el.rectPreview.style.width = `${Math.abs(x1 - x0)}px`;
      el.rectPreview.style.height = `${Math.abs(y1 - y0)}px`;
    } else if (state.lastPt) {
      drawBrushStroke(state.lastPt, pt);
      state.lastPt = pt;
    }
  });

  el.maskCanvas.addEventListener('pointerup', (e) => {
    if (!state.isDrawing) return;
    state.isDrawing = false;

    if (state.tool === 'rect' && state.rectStart) {
      const endPt = getCanvasCoords(e.clientX, e.clientY);
      const x = Math.min(state.rectStart.pt.x, endPt.x);
      const y = Math.min(state.rectStart.pt.y, endPt.y);
      const w = Math.abs(endPt.x - state.rectStart.pt.x);
      const h = Math.abs(endPt.y - state.rectStart.pt.y);
      if (w > 2 && h > 2) {
        maskCtx.save();
        maskCtx.fillStyle = '#f43f5e';
        maskCtx.fillRect(x, y, w, h);
        maskCtx.restore();
      }
      el.rectPreview.classList.add('hidden');
      state.rectStart = null;
    }
    state.lastPt = null;
    updateButtonsState();
  });

  el.maskCanvas.addEventListener('pointerleave', () => {
    el.brushCursor.classList.add('hidden');
  });

  // Actions
  el.removeBtn.addEventListener('click', runRemoval);

  el.undoMaskBtn.addEventListener('click', () => {
    const prev = state.maskHistory.pop();
    if (prev) maskCtx.putImageData(prev, 0, 0);
    updateButtonsState();
  });

  el.clearMaskBtn.addEventListener('click', () => {
    pushMaskHistory();
    maskCtx.clearRect(0, 0, state.imgW, state.imgH);
    updateButtonsState();
  });

  el.resetImgBtn.addEventListener('click', () => {
    if (!state.originalImageData) return;
    state.currentImageData = new ImageData(
      new Uint8ClampedArray(state.originalImageData.data),
      state.imgW,
      state.imgH
    );
    imgCtx.putImageData(state.currentImageData, 0, 0);
    state.hasCleaned = false;
    setCompareMode(false);
    updateButtonsState();
  });

  // Zoom
  el.zoomInBtn.addEventListener('click', () => {
    state.zoom = Math.min(3, state.zoom + 0.15);
    applyZoom();
  });
  el.zoomOutBtn.addEventListener('click', () => {
    state.zoom = Math.max(0.2, state.zoom - 0.15);
    applyZoom();
  });
  el.zoomFitBtn.addEventListener('click', fitZoomToViewport);

  // Compare
  el.compareBtn.addEventListener('click', () => {
    setCompareMode(!state.compareActive);
  });

  el.holdOriginalBtn.addEventListener('pointerdown', () => {
    if (!state.hasCleaned) return;
    imgCtx.putImageData(state.originalImageData, 0, 0);
  });
  const restoreCurrent = () => {
    if (state.hasCleaned && state.currentImageData) {
      imgCtx.putImageData(state.currentImageData, 0, 0);
    }
  };
  el.holdOriginalBtn.addEventListener('pointerup', restoreCurrent);
  el.holdOriginalBtn.addEventListener('pointerleave', restoreCurrent);

  el.compareDivider.addEventListener('pointerdown', (e) => {
    state.isComparingDrag = true;
    el.compareDivider.setPointerCapture(e.pointerId);
  });
  window.addEventListener('pointermove', (e) => {
    if (!state.isComparingDrag) return;
    const rect = el.canvasWrapper.getBoundingClientRect();
    state.compareSplit = (e.clientX - rect.left) / rect.width;
    updateCompareClip();
  });
  window.addEventListener('pointerup', () => {
    state.isComparingDrag = false;
  });

  // Language toggle
  el.langToggleBtn.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'bn' : 'en';
    applyLanguage();
  });

  // Keyboard shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      el.undoMaskBtn.click();
    } else if (e.key === '[') {
      el.brushSize.value = Math.max(6, state.brushSize - 6);
      el.brushSize.dispatchEvent(new Event('input'));
    } else if (e.key === ']') {
      el.brushSize.value = Math.min(140, state.brushSize + 6);
      el.brushSize.dispatchEvent(new Event('input'));
    }
  });

  // Init
  applyLanguage();
})();
