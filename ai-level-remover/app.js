(function () {
  'use strict';

  const VERCEL_API_URL = window.location.hostname.endsWith('.vercel.app')
    ? `${window.location.origin}/api/remove`
    : 'https://mohammadshourovcom.vercel.app/api/remove';

  const I18N = {
    en: {
      navRemove: 'Remove Metadata',
      navVideo: 'Remove Video AI Labels',
      navCleaner: 'AI Text Cleaner',
      navEdit: 'Edit Metadata',
      navView: 'View Metadata',
      navOther: 'Other Tools',
      heroPrefix: 'Remove',
      heroTag: 'AI label metadata',
      heroTail: 'from images.',
      eyebrow: 'DELETE AI FOOTPRINTS',
      heroSub: 'Strip the C2PA JUMBF, XMP and other metadata AI signals that Instagram, Facebook, LinkedIn and other platforms check.',
      promoText: 'Remove AI labels and metadata from your Videos.',
      promoCta: 'Clean video →',
      uploadTitle: 'Drag & Drop or Click to Upload',
      uploadLimit: 'Up to 5 images. Max. Upload Size: 100 MB',
      chooseImage: 'Choose Image',
      trySample: 'Test with sample AI image',
      removeBtn: 'Remove All Metadata',
      downloadClean: 'Download Clean Image',
      stepsHeading: 'Steps to remove metadata',
      step1: 'Upload your image',
      step2: 'View Metadata Footprints',
      step3: 'Delete AI & All Other Metadata',
      step4: 'Download clean image',
      featuresHeading: 'Features'
    },
    bn: {
      navRemove: 'মেটাডাটা রিমুভ',
      navVideo: 'ভিডিও AI লেবেল রিমুভ',
      navCleaner: 'AI টেক্সট ক্লিনার',
      navEdit: 'মেটাডাটা এডিট',
      navView: 'মেটাডাটা দেখুন',
      navOther: 'অন্যান্য টুলস',
      heroPrefix: 'ছবি থেকে',
      heroTag: 'AI লেবেল মেটাডাটা',
      heroTail: 'মুছে ফেলুন।',
      eyebrow: 'ডিলিট AI ফুটপ্রিন্টস',
      heroSub: 'Instagram, Facebook, LinkedIn যেসব C2PA JUMBF, XMP এবং AI মেটাডাটা সিগন্যাল চেক করে, সেগুলো পিক্সেল নষ্ট না করেই রিমুভ করুন।',
      promoText: 'আপনার ভিডিও থেকেও AI লেবেল এবং মেটাডাটা রিমুভ করুন।',
      promoCta: 'ভিডিও ক্লিন করুন →',
      uploadTitle: 'ছবি এখানে ছাড়ুন বা ক্লিক করে আপলোড করুন',
      uploadLimit: 'একসাথে সর্বোচ্চ ৫টি ছবি। সাইজ লিমিট: ১০০ MB',
      chooseImage: 'ছবি সিলেক্ট করুন',
      trySample: 'স্যাম্পল AI ছবি দিয়ে টেস্ট করুন',
      removeBtn: 'সব মেটাডাটা রিমুভ করুন',
      downloadClean: 'ক্লিন ছবি ডাউনলোড করুন',
      stepsHeading: 'মেটাডাটা রিমুভ করার ধাপসমূহ',
      step1: 'ছবি আপলোড করুন',
      step2: 'মেটাডাটা ফুটপ্রিন্ট দেখুন',
      step3: 'AI ও সব মেটাডাটা ডিলিট করুন',
      step4: 'ক্লিন ছবি ডাউনলোড করুন',
      featuresHeading: 'বৈশিষ্ট্যসমূহ'
    }
  };

  const el = {
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.getElementById('navMenu'),
    navLinks: document.querySelectorAll('[data-nav]'),
    otherToolsBtn: document.getElementById('otherToolsBtn'),
    otherToolsMenu: document.getElementById('otherToolsMenu'),

    heroTitle: document.getElementById('heroTitle'),
    heroSub: document.getElementById('heroSub'),

    metadataToolSection: document.getElementById('metadataToolSection'),
    visualCleanerSection: document.getElementById('visualCleanerSection'),
    videoToolSection: document.getElementById('videoToolSection'),

    uploadCard: document.getElementById('uploadCard'),
    uploadZone: document.getElementById('uploadZone'),
    uploadButton: document.getElementById('uploadButton'),
    fileInput: document.getElementById('fileInput'),
    samplePhotoBtn: document.getElementById('samplePhotoBtn'),

    batchList: document.getElementById('batchList'),
    editMetadataPanel: document.getElementById('editMetadataPanel'),
    editPanelTitle: document.getElementById('editPanelTitle'),
    editFieldsContainer: document.getElementById('editFieldsContainer'),
    geoFieldsContainer: document.getElementById('geoFieldsContainer'),
    editTitle: document.getElementById('editTitle'),
    editAuthor: document.getElementById('editAuthor'),
    editCopyright: document.getElementById('editCopyright'),
    editSoftware: document.getElementById('editSoftware'),
    editDesc: document.getElementById('editDesc'),
    geoLat: document.getElementById('geoLat'),
    geoLng: document.getElementById('geoLng'),
    geoPlace: document.getElementById('geoPlace'),

    primaryActionSection: document.getElementById('primaryActionSection'),
    removeMetadataBtn: document.getElementById('removeMetadataBtn'),
    primaryActionLabel: document.getElementById('primaryActionLabel'),
    downloadAllBtn: document.getElementById('downloadAllBtn'),

    metadataDisplayCard: document.getElementById('metadataDisplayCard'),
    reportFilename: document.getElementById('reportFilename'),
    reportTotalTags: document.getElementById('reportTotalTags'),
    reportAiTags: document.getElementById('reportAiTags'),
    reportChips: document.getElementById('reportChips'),
    reportAiBanner: document.getElementById('reportAiBanner'),
    reportSections: document.getElementById('reportSections'),

    stepsDemoCard: document.getElementById('stepsDemoCard'),
    demoStatusLabel: document.getElementById('demoStatusLabel'),
    demoPauseBtn: document.getElementById('demoPauseBtn'),
    demoPauseIcon: document.getElementById('demoPauseIcon'),
    stepItems: document.querySelectorAll('.step-item'),

    langSelect: document.getElementById('langSelect'),
    toast: document.getElementById('toast'),

    // Visual Cleaner
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
    cTools: document.querySelectorAll('.c-tool'),

    // Video Scanner
    videoInput: document.getElementById('videoInput'),
    videoChooseBtn: document.getElementById('videoChooseBtn'),
    videoScanResult: document.getElementById('videoScanResult')
  };

  const state = {
    mode: 'remove',
    lang: 'en',
    files: [], // { id, name, size, bytes, url, format, report, cleanBytes, cleanUrl, afterReport, cleaned }
    selectedId: null,
    activeChip: 'ALL',
    demoStep: 1,
    demoPaused: false,

    // Visual Cleaner state
    cTool: 'brush',
    cDrawing: false,
    cLastPt: null,
    cRectStart: null,
    cImgData: null,
    cW: 0,
    cH: 0
  };

  // ---------- Toast & Helpers ----------
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
    return `data:${mime || 'application/octet-stream'};base64,${btoa(bin)}`;
  }

  function base64ToUint8(dataUrl) {
    const clean = dataUrl.replace(/^data:[^;]+;base64,/, '');
    const bin = atob(clean);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  // ---------- Language ----------
  function applyLang() {
    const dict = I18N[state.lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const k = node.getAttribute('data-i18n');
      if (dict[k]) node.textContent = dict[k];
    });
  }

  el.langSelect.addEventListener('change', () => {
    state.lang = el.langSelect.value;
    applyLang();
  });

  // ---------- Navigation Modes ----------
  function setNavMode(mode) {
    state.mode = mode;
    el.navMenu.classList.remove('open');
    el.otherToolsMenu.classList.add('hidden');

    document.querySelectorAll('.nav-menu .nav-link').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.nav === mode);
    });

    el.metadataToolSection.classList.add('hidden');
    el.visualCleanerSection.classList.add('hidden');
    el.videoToolSection.classList.add('hidden');
    el.editMetadataPanel.classList.add('hidden');
    el.primaryActionSection.classList.remove('hidden');

    if (mode === 'cleaner') {
      el.visualCleanerSection.classList.remove('hidden');
      el.heroTitle.innerHTML = 'Remove <span class="home-hero__tag">visual AI text</span><span class="home-hero__tail">and watermarks.</span>';
      el.heroSub.textContent = 'Brush over any visible corner AI badge, text watermark, or object to reconstruct the background cleanly.';
      return;
    }

    if (mode === 'video') {
      el.videoToolSection.classList.remove('hidden');
      el.heroTitle.innerHTML = 'Inspect <span class="home-hero__tag">video AI labels</span><span class="home-hero__tail">and metadata.</span>';
      el.heroSub.textContent = 'Check MP4 and MOV containers for C2PA, Sora, Runway, and AI generator metadata tags directly in your browser.';
      return;
    }

    el.metadataToolSection.classList.remove('hidden');

    if (mode === 'view') {
      el.heroTitle.innerHTML = 'View <span class="home-hero__tag">image metadata</span><span class="home-hero__tail">footprints.</span>';
      el.heroSub.textContent = 'Inspect every EXIF, XMP, IPTC, C2PA/JUMBF, and PNG AI prompt tag embedded inside your photo.';
      el.primaryActionSection.classList.add('hidden');
    } else if (mode === 'edit') {
      el.heroTitle.innerHTML = 'Edit <span class="home-hero__tag">image metadata</span><span class="home-hero__tail">cleanly.</span>';
      el.heroSub.textContent = 'Strip hidden AI footprints and write your own clean Title, Author, Copyright, and Description tags.';
      el.editMetadataPanel.classList.remove('hidden');
      el.editFieldsContainer.classList.remove('hidden');
      el.geoFieldsContainer.classList.add('hidden');
      el.editPanelTitle.textContent = 'Write Clean PNG Metadata Fields';
      el.primaryActionLabel.textContent = 'Strip AI & Save Metadata';
    } else if (mode === 'geo') {
      el.heroTitle.innerHTML = 'Geo tag <span class="home-hero__tag">your photos</span><span class="home-hero__tail">without AI footprints.</span>';
      el.heroSub.textContent = 'Strip AI signals while embedding custom GPS coordinates and location info into your PNG metadata.';
      el.editMetadataPanel.classList.remove('hidden');
      el.editFieldsContainer.classList.add('hidden');
      el.geoFieldsContainer.classList.remove('hidden');
      el.editPanelTitle.textContent = 'Add Clean Location / GPS Tags';
      el.primaryActionLabel.textContent = 'Apply Clean Geo Tag';
    } else {
      el.heroTitle.innerHTML = `<span data-i18n="heroPrefix">${I18N[state.lang].heroPrefix}</span> <span class="home-hero__tag" data-i18n="heroTag">${I18N[state.lang].heroTag}</span><span class="home-hero__tail" data-i18n="heroTail">${I18N[state.lang].heroTail}</span>`;
      el.heroSub.textContent = I18N[state.lang].heroSub;
      el.primaryActionLabel.textContent = I18N[state.lang].removeBtn;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  el.navLinks.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.nav === 'instagram-guide') {
        setNavMode('remove');
        document.querySelector('.home-about').scrollIntoView({ behavior: 'smooth' });
      } else {
        setNavMode(btn.dataset.nav);
      }
    });
  });

  el.menuToggle.addEventListener('click', () => el.navMenu.classList.toggle('open'));
  el.otherToolsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    el.otherToolsMenu.classList.toggle('hidden');
  });
  document.addEventListener('click', () => el.otherToolsMenu.classList.add('hidden'));

  // ---------- Animated 4-Step Demo Card ----------
  const DEMO_TEXTS = {
    1: 'Upload your image',
    2: 'Scanning C2PA, XMP & EXIF tags...',
    3: 'Deleting AI & All Other Metadata...',
    4: 'Clean! 0 AI Footprints Remaining'
  };

  setInterval(() => {
    if (state.demoPaused) return;
    state.demoStep = (state.demoStep % 4) + 1;
    el.stepsDemoCard.setAttribute('data-step', String(state.demoStep));
    el.demoStatusLabel.textContent = DEMO_TEXTS[state.demoStep];
    el.stepItems.forEach((item) => {
      item.classList.toggle('active', Number(item.dataset.stepIdx) === state.demoStep);
    });
  }, 2200);

  el.demoPauseBtn.addEventListener('click', () => {
    state.demoPaused = !state.demoPaused;
    el.demoPauseIcon.textContent = state.demoPaused ? '▶' : '❚❚';
  });

  // ---------- File Upload & Inspection ----------
  async function inspectViaVercelOrLocal(bytes, mime) {
    // Always inspect locally first for instant UI feedback, and also verify with Vercel if <= 3MB
    const localRes = window.FootprintEngine.inspectBytes(bytes);
    if (bytes.length <= 3 * 1024 * 1024) {
      try {
        const resp = await fetch(VERCEL_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'inspect-metadata',
            fileBase64: bytesToBase64(bytes, mime)
          })
        });
        if (resp.ok) {
          const json = await resp.json();
          if (json.ok && json.report) {
            return { format: json.format || localRes.format, report: json.report };
          }
        }
      } catch (_) {}
    }
    return localRes;
  }

  async function addFiles(fileList) {
    const incoming = Array.from(fileList || []);
    if (!incoming.length) return;

    for (const file of incoming) {
      if (state.files.length >= 5) {
        showToast('Batch limit reached (maximum 5 images).');
        break;
      }
      const buf = await file.arrayBuffer();
      const bytes = new Uint8Array(buf);
      const url = URL.createObjectURL(file);
      const inspected = await inspectViaVercelOrLocal(bytes, file.type);

      const entry = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        name: file.name,
        mime: file.type || 'image/png',
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
    }

    renderBatchList();
    renderSelectedMetadata();
  }

  function renderBatchList() {
    if (state.files.length === 0) {
      el.batchList.classList.add('hidden');
      el.metadataDisplayCard.classList.add('hidden');
      el.removeMetadataBtn.disabled = true;
      el.downloadAllBtn.classList.add('hidden');
      return;
    }

    el.batchList.classList.remove('hidden');
    el.removeMetadataBtn.disabled = false;

    const allCleaned = state.files.every((f) => f.cleaned);
    el.downloadAllBtn.classList.toggle('hidden', !allCleaned);

    el.batchList.innerHTML = '';
    state.files.forEach((f) => {
      const report = f.cleaned && f.afterReport ? f.afterReport : f.report;
      const row = document.createElement('div');
      row.className = 'batch-row';

      const pillClass = f.cleaned ? 'clean' : report.aiDetected ? 'ai' : '';
      const pillText = f.cleaned
        ? '✓ Cleaned · 0 AI tags'
        : report.aiDetected
          ? `⚠ ${report.aiTagsCount || 1} AI signal(s)`
          : `${report.totalTags} tags`;

      row.innerHTML = `
        <div class="batch-left">
          <img class="batch-thumb" src="${f.cleanUrl || f.url}" alt="" />
          <div class="batch-info">
            <div class="batch-name">${f.name}</div>
            <div class="batch-sub">
              <span>${f.format} · ${formatBytes(f.cleaned ? f.cleanBytes.length : f.size)}</span>
              <span class="tag-pill ${pillClass}">${pillText}</span>
            </div>
          </div>
        </div>
        <div class="batch-actions">
          <button type="button" class="mini-btn inspect-btn">Inspect</button>
          ${f.cleaned ? '<button type="button" class="mini-btn dl dl-btn">Download</button>' : ''}
          <button type="button" class="mini-btn rm-btn" title="Remove">✕</button>
        </div>
      `;

      row.querySelector('.inspect-btn').addEventListener('click', () => {
        state.selectedId = f.id;
        state.activeChip = 'ALL';
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
    if (!file) {
      el.metadataDisplayCard.classList.add('hidden');
      return;
    }

    el.metadataDisplayCard.classList.remove('hidden');
    const report = file.cleaned && file.afterReport ? file.afterReport : file.report;

    el.reportFilename.textContent = `${file.name} (${file.cleaned ? 'After Cleaning' : 'Metadata Report'})`;
    el.reportTotalTags.textContent = `${report.totalTags} metadata tag(s)`;
    el.reportAiTags.textContent = `${report.aiTagsCount} AI tag(s)`;

    if (file.cleaned) {
      el.reportAiBanner.classList.remove('hidden');
      el.reportAiBanner.classList.add('safe');
      el.reportAiBanner.innerHTML = '<strong>Clean!</strong> All EXIF, XMP, IPTC, C2PA, and PNG AI metadata chunks have been stripped losslessly without altering pixels.';
    } else if (report.aiDetected) {
      el.reportAiBanner.classList.remove('hidden', 'safe');
      const gens = report.detectedGenerators.length ? report.detectedGenerators.join(', ') : 'Embedded AI Signal';
      el.reportAiBanner.innerHTML = `<strong>AI Metadata Footprint Detected:</strong> ${gens}`;
    } else if (report.totalTags > 0) {
      el.reportAiBanner.classList.remove('hidden');
      el.reportAiBanner.classList.add('safe');
      el.reportAiBanner.innerHTML = '<strong>No obvious AI markers detected</strong>, though standard EXIF/device metadata tags were found and can be stripped.';
    } else {
      el.reportAiBanner.classList.remove('hidden');
      el.reportAiBanner.classList.add('safe');
      el.reportAiBanner.innerHTML = '<strong>Zero metadata tags found</strong> in this image header.';
    }

    // Chips
    const sectionNames = Object.keys(report.sections || {});
    el.reportChips.innerHTML = '';
    const allChip = document.createElement('button');
    allChip.type = 'button';
    allChip.className = `report-chip ${state.activeChip === 'ALL' ? 'active' : ''}`;
    allChip.textContent = 'All';
    allChip.addEventListener('click', () => {
      state.activeChip = 'ALL';
      renderSelectedMetadata();
    });
    el.reportChips.appendChild(allChip);

    sectionNames.forEach((sec) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `report-chip ${state.activeChip === sec ? 'active' : ''}`;
      b.textContent = sec;
      b.addEventListener('click', () => {
        state.activeChip = sec;
        renderSelectedMetadata();
      });
      el.reportChips.appendChild(b);
    });

    // Sections
    el.reportSections.innerHTML = '';
    sectionNames
      .filter((sec) => state.activeChip === 'ALL' || state.activeChip === sec)
      .forEach((sec) => {
        const det = document.createElement('details');
        det.className = 'report-section';
        det.open = true;
        const rowsHtml = report.sections[sec]
          .map(
            (r) => `
          <div class="report-row ${r.isAi ? 'is-ai' : ''}">
            <div class="report-label">${escapeHtml(r.label)}</div>
            <div class="report-val">${escapeHtml(r.value)}</div>
          </div>`
          )
          .join('');
        det.innerHTML = `<summary>${sec} (${report.sections[sec].length})</summary>${rowsHtml}`;
        el.reportSections.appendChild(det);
      });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // ---------- Strip / Edit Metadata via Vercel Node.js API (+ lossless fallback) ----------
  async function processSingleFile(entry) {
    if (state.mode === 'edit' || state.mode === 'geo') {
      // Ensure PNG bytes for clean custom PNG metadata write
      const pngBytes = await ensurePngBytes(entry);
      const fields =
        state.mode === 'geo'
          ? {
              'GPSLatitude': el.geoLat.value,
              'GPSLongitude': el.geoLng.value,
              'Location': el.geoPlace.value
            }
          : {
              Title: el.editTitle.value,
              Author: el.editAuthor.value,
              Copyright: el.editCopyright.value,
              Software: el.editSoftware.value,
              Description: el.editDesc.value
            };
      const editedBytes = window.FootprintEngine.writePngMetadata(pngBytes, fields);
      const after = window.FootprintEngine.inspectBytes(editedBytes);
      entry.cleanBytes = editedBytes;
      entry.format = 'PNG';
      entry.mime = 'image/png';
      entry.afterReport = after.report;
      entry.cleaned = true;
      entry.cleanUrl = URL.createObjectURL(new Blob([editedBytes], { type: 'image/png' }));
      return;
    }

    // Background Vercel Node.js API call for lossless metadata removal
    if (entry.bytes.length <= 3 * 1024 * 1024) {
      try {
        const resp = await fetch(VERCEL_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'strip-metadata',
            fileBase64: bytesToBase64(entry.bytes, entry.mime)
          })
        });
        if (resp.ok) {
          const json = await resp.json();
          if (json.ok && json.cleanBase64) {
            entry.cleanBytes = base64ToUint8(json.cleanBase64);
            entry.afterReport = json.afterReport;
            entry.cleaned = true;
            entry.cleanUrl = URL.createObjectURL(new Blob([entry.cleanBytes], { type: entry.mime }));
            return;
          }
        }
      } catch (err) {
        console.warn('Vercel API fallback to local lossless stripper:', err);
      }
    }

    // Instant lossless fallback
    const stripped = window.FootprintEngine.stripBytes(entry.bytes);
    entry.cleanBytes = stripped.cleanBytes;
    entry.afterReport = stripped.afterReport;
    entry.cleaned = true;
    entry.cleanUrl = URL.createObjectURL(new Blob([entry.cleanBytes], { type: entry.mime }));
  }

  async function ensurePngBytes(entry) {
    if (entry.format === 'PNG') return entry.bytes;
    const img = new Image();
    img.src = entry.url;
    await new Promise((res) => (img.onload = res));
    const c = document.createElement('canvas');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    c.getContext('2d').drawImage(img, 0, 0);
    const blob = await new Promise((res) => c.toBlob(res, 'image/png'));
    return new Uint8Array(await blob.arrayBuffer());
  }

  function triggerDownload(entry) {
    const a = document.createElement('a');
    const dot = entry.name.lastIndexOf('.');
    const base = dot > 0 ? entry.name.slice(0, dot) : entry.name;
    const ext = entry.format === 'PNG' ? 'png' : entry.format === 'WEBP' ? 'webp' : 'jpg';
    a.download = `${base}-clean.${ext}`;
    a.href = entry.cleanUrl;
    a.click();
  }

  el.removeMetadataBtn.addEventListener('click', async () => {
    if (!state.files.length) return;
    el.removeMetadataBtn.disabled = true;
    el.primaryActionLabel.textContent = 'Cleaning...';
    try {
      for (const entry of state.files) {
        await processSingleFile(entry);
      }
      renderBatchList();
      renderSelectedMetadata();
      showToast('All AI & photo metadata stripped cleanly!');
    } finally {
      el.removeMetadataBtn.disabled = false;
      el.primaryActionLabel.textContent =
        state.mode === 'edit'
          ? 'Strip AI & Save Metadata'
          : state.mode === 'geo'
            ? 'Apply Clean Geo Tag'
            : I18N[state.lang].removeBtn;
    }
  });

  el.downloadAllBtn.addEventListener('click', () => {
    state.files.filter((f) => f.cleaned).forEach((f) => triggerDownload(f));
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

  // Sample AI Photo with real embedded AI metadata chunks for 1-click testing
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
    ctx.fillText('Sample AI-Generated Image', 135, 200);
    ctx.font = '16px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText('Contains embedded C2PA / Midjourney / DALL-E metadata', 105, 235);

    const blob = await new Promise((res) => c.toBlob(res, 'image/png'));
    const raw = new Uint8Array(await blob.arrayBuffer());
    const withAiMeta = window.FootprintEngine.writePngMetadata(raw, {
      Software: 'OpenAI DALL-E 3 / ChatGPT',
      Description: 'Midjourney --v 6.1 --ar 3:2 cinematic landscape',
      'XML:com.adobe.xmp': '<x:xmpmeta><rdf:Description iptcExt:DigitalSourceType="http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia" xmp:CreatorTool="ChatGPT C2PA Content Credentials"/></x:xmpmeta>',
      Copyright: 'Generated with AI'
    });
    const sampleFile = new File([withAiMeta], 'sample-ai-photo.png', { type: 'image/png' });
    addFiles([sampleFile]);
  });

  // ---------- Visual AI Text Cleaner Tool ----------
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

  el.cClearBtn.addEventListener('click', () => {
    cMaskCtx.clearRect(0, 0, state.cW, state.cH);
  });

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
      showToast('Visual watermark / text cleaned!');
    } catch (err) {
      showToast(err.message);
    } finally {
      el.cRemoveBtn.disabled = false;
    }
  });

  el.cDownloadBtn.addEventListener('click', () => {
    const a = document.createElement('a');
    a.download = 'cleaned-visual.png';
    a.href = el.cImageCanvas.toDataURL('image/png');
    a.click();
  });

  // ---------- Video Container Scanner ----------
  el.videoChooseBtn.addEventListener('click', () => el.videoInput.click());
  el.videoInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const slice = new Uint8Array(await file.slice(0, 512 * 1024).arrayBuffer());
    const text = new TextDecoder('utf-8', { fatal: false }).decode(slice).replace(/[^\x20-\x7E]+/g, ' ');
    const found = [];
    if (/c2pa|jumbf/i.test(text)) found.push('C2PA / Content Credentials');
    if (/sora|openai/i.test(text)) found.push('OpenAI / Sora');
    if (/runway|kling|luma|midjourney/i.test(text)) found.push('AI Video Generator Tag');
    if (/lavf|ffmpeg/i.test(text)) found.push('FFmpeg / Lavf Encoder');

    el.videoScanResult.classList.remove('hidden');
    el.videoScanResult.innerHTML = `
      <strong>${escapeHtml(file.name)}</strong> (${formatBytes(file.size)})<br/>
      ${found.length ? `Detected container signals: <strong>${found.join(', ')}</strong>` : 'No C2PA/AI header strings found in first 512KB.'}
    `;
  });

  applyLang();
})();
