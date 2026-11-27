(() => {
  'use strict';

  const STORAGE_KEY = 'su_cover_saved_v1';
  const VERCEL_DOCX_API =
    window.location.hostname.endsWith('.vercel.app') ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
      ? `${window.location.origin}/api/su-docx`
      : 'https://mohammadshourovcom.vercel.app/api/su-docx';

  const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const GHOST_DEFAULTS = {
    university: 'SONARGAON UNIVERSITY',
    deptHeader: 'Department of Computer Science and Engineering',
    docLabel: 'ASSIGNMENT -01',
    courseTitle: 'Professional Ethics and\nEnvironmental Protection',
    teacherName: 'Mohammed Tamjid Islam',
    studentName: 'Kishan Mallick Sraban',
    studentId: 'CSE2601037053',
    department: 'CSE'
  };

  const els = {
    university: document.getElementById('university'),
    deptHeader: document.getElementById('deptHeader'),
    docLabel: document.getElementById('docLabel'),
    courseTitle: document.getElementById('courseTitle'),
    courseCode: document.getElementById('courseCode'),
    experiment: document.getElementById('experiment'),
    teacherName: document.getElementById('teacherName'),
    teacherDesignation: document.getElementById('teacherDesignation'),
    teacherDept: document.getElementById('teacherDept'),
    studentName: document.getElementById('studentName'),
    studentId: document.getElementById('studentId'),
    department: document.getElementById('department'),
    section: document.getElementById('section'),
    session: document.getElementById('session'),
    subDate: document.getElementById('subDate'),
    dateFormat: document.getElementById('dateFormat'),
    borderColor: document.getElementById('borderColor'),
    showBorder: document.getElementById('showBorder'),
    showSignatures: document.getElementById('showSignatures'),

    clearSavedBtn: document.getElementById('clearSavedBtn'),
    todayBtn: document.getElementById('todayBtn'),

    pdfDropzone: document.getElementById('pdfDropzone'),
    attachPdfInput: document.getElementById('attachPdfInput'),
    dropzoneIdle: document.getElementById('dropzoneIdle'),
    dropzoneFile: document.getElementById('dropzoneFile'),
    attachedFileName: document.getElementById('attachedFileName'),
    attachedPageCount: document.getElementById('attachedPageCount'),
    removeAttachedBtn: document.getElementById('removeAttachedBtn'),
    dropLastPage: document.getElementById('dropLastPage'),
    downloadMergedBtn: document.getElementById('downloadMergedBtn'),

    downloadPdfBtn: document.getElementById('downloadPdfBtn'),
    pdfBtnLabel: document.getElementById('pdfBtnLabel'),
    downloadDocxBtn: document.getElementById('downloadDocxBtn'),
    docxBtnLabel: document.getElementById('docxBtnLabel'),
    downloadPngBtn: document.getElementById('downloadPngBtn'),
    pngBtnLabel: document.getElementById('pngBtnLabel'),
    printBtn: document.getElementById('printBtn'),
    statusMsg: document.getElementById('statusMsg'),

    coverPage: document.getElementById('cover-page'),
    sheetBorder: document.getElementById('sheetBorder'),
    tplAcademic: document.getElementById('tplAcademic'),
    tplLab: document.getElementById('tplLab'),
    acLogoWrap: document.getElementById('acLogoWrap'),
    acLogoImg: document.getElementById('acLogoImg'),
    acSignatures: document.getElementById('acSignatures'),

    previewViewport: document.getElementById('previewViewport'),
    previewScaler: document.getElementById('previewScaler'),
    zoomFitBtn: document.getElementById('zoomFitBtn'),
    zoom100Btn: document.getElementById('zoom100Btn'),
    formPanel: document.getElementById('formPanel'),
    previewPanel: document.getElementById('previewPanel'),
    mobileTabs: document.querySelectorAll('.mobile-tab'),
  };

  let attachedPdf = null; // { name, bytes, pageCount }
  let zoomMode = 'fit';

  // ---------------- Date Helpers ----------------
  function todayIso() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function formatDateValue(iso, fmt) {
    if (!iso) return '';
    const parts = iso.split('-');
    if (parts.length !== 3) return iso;
    const [y, m, d] = parts;
    const dayNum = parseInt(d, 10);
    const monIdx = parseInt(m, 10) - 1;
    if (fmt === 'dot') return `${d}.${m}.${y}`;
    if (fmt === 'slash') return `${d}/${m}/${y}`;
    return `${dayNum} ${MONTHS[monIdx] || m} ${y}`;
  }

  // ---------------- Storage Helpers ----------------
  function saveStudentPrefs() {
    try {
      const payload = {
        university: els.university.value,
        deptHeader: els.deptHeader.value,
        studentName: els.studentName.value,
        studentId: els.studentId.value,
        department: els.department.value,
        section: els.section.value,
        session: els.session.value,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (_) {}
  }

  function loadStudentPrefs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved && typeof saved === 'object') {
        if (saved.university) els.university.value = saved.university;
        if (saved.deptHeader) els.deptHeader.value = saved.deptHeader;
        if (saved.studentName) els.studentName.value = saved.studentName;
        if (saved.studentId) els.studentId.value = saved.studentId;
        if (saved.department) els.department.value = saved.department;
        if (saved.section) els.section.value = saved.section;
        if (saved.session) els.session.value = saved.session;
      }
    } catch (_) {}
  }

  // ---------------- Data Collection ----------------
  function getTemplateChoice() {
    const checked = document.querySelector("input[name='tplChoice']:checked");
    return checked ? checked.value : '1';
  }

  function collectData({ forExport = false } = {}) {
    const raw = id => (els[id] ? els[id].value.trim() : '');
    const pick = (id, ghostKey) => {
      const val = raw(id);
      if (val) return { text: val, isGhost: false };
      if (!forExport && ghostKey && GHOST_DEFAULTS[ghostKey]) {
        return { text: GHOST_DEFAULTS[ghostKey], isGhost: true };
      }
      return { text: '', isGhost: false };
    };

    const dateFormatted = formatDateValue(raw('subDate'), els.dateFormat.value);
    const tpl = getTemplateChoice();

    return {
      template: tpl,
      university: pick('university', 'university'),
      deptHeader: pick('deptHeader', 'deptHeader'),
      docLabel: pick('docLabel', 'docLabel'),
      courseTitle: pick('courseTitle', 'courseTitle'),
      courseCode: { text: raw('courseCode'), isGhost: false },
      experiment: { text: raw('experiment'), isGhost: false },
      teacherName: pick('teacherName', 'teacherName'),
      teacherDesignation: { text: raw('teacherDesignation'), isGhost: false },
      teacherDept: { text: raw('teacherDept'), isGhost: false },
      studentName: pick('studentName', 'studentName'),
      studentId: pick('studentId', 'studentId'),
      department: pick('department', 'department'),
      section: { text: raw('section'), isGhost: false },
      session: { text: raw('session'), isGhost: false },
      submissionDate: { text: dateFormatted, isGhost: false },
      showBorder: els.showBorder.checked,
      borderColor: els.borderColor.value || 'AAB7C4',
      showSignatures: tpl === '3' ? true : els.showSignatures.checked,
    };
  }

  function setPreviewField(key, text, isGhost = false, { hideWhenEmpty = false } = {}) {
    document.querySelectorAll(`#cover-page [data-pv="${key}"]`).forEach(el => {
      if (hideWhenEmpty && !text) {
        el.hidden = true;
        el.textContent = '';
      } else {
        el.hidden = false;
        el.textContent = text;
        el.classList.toggle('is-placeholder', Boolean(isGhost));
      }
    });
  }

  // ---------------- Live Preview Rendering ----------------
  function renderPreview() {
    const d = collectData({ forExport: false });
    const tpl = d.template;

    // Template visibility
    els.coverPage.dataset.template = tpl;
    els.tplAcademic.classList.toggle('active', tpl === '1' || tpl === '2');
    els.tplAcademic.classList.toggle('has-logo', tpl === '2');
    els.acLogoWrap.hidden = tpl !== '2';
    els.tplLab.classList.toggle('active', tpl === '3');

    // Border & Signatures
    els.sheetBorder.classList.toggle('no-border', !d.showBorder);
    els.sheetBorder.style.borderColor = `#${d.borderColor}`;
    els.acSignatures.hidden = !els.showSignatures.checked;

    // Fill fields
    setPreviewField('university', d.university.text, d.university.isGhost);
    setPreviewField('deptHeader', d.deptHeader.text, d.deptHeader.isGhost, { hideWhenEmpty: true });
    setPreviewField('docLabel', d.docLabel.text, d.docLabel.isGhost, { hideWhenEmpty: true });
    setPreviewField('courseTitle', d.courseTitle.text, d.courseTitle.isGhost);
    setPreviewField('courseTitleSingle', d.courseTitle.text.replace(/\n+/g, ' '), d.courseTitle.isGhost);
    setPreviewField('courseCode', d.courseCode.text, false);
    setPreviewField('courseCodeLine', d.courseCode.text ? `Course Code: ${d.courseCode.text}` : '', false, { hideWhenEmpty: true });
    setPreviewField('experimentLine', d.experiment.text ? `Topic / Experiment: ${d.experiment.text}` : '', false, { hideWhenEmpty: true });

    setPreviewField('teacherName', d.teacherName.text, d.teacherName.isGhost);
    setPreviewField('teacherDesignation', d.teacherDesignation.text, false, { hideWhenEmpty: true });
    setPreviewField('teacherDept', d.teacherDept.text, false);
    setPreviewField('teacherDeptLine', d.teacherDept.text ? `Department of ${d.teacherDept.text}` : '', false, { hideWhenEmpty: true });

    setPreviewField('studentName', d.studentName.text, d.studentName.isGhost);
    setPreviewField('studentId', d.studentId.text, d.studentId.isGhost);
    setPreviewField('studentIdLine', d.studentId.text ? `ID No.: ${d.studentId.text}` : '', d.studentId.isGhost, { hideWhenEmpty: true });
    setPreviewField('department', d.department.text, d.department.isGhost);
    setPreviewField('departmentLine', d.department.text ? `Department: ${d.department.text}` : '', d.department.isGhost, { hideWhenEmpty: true });
    setPreviewField('section', d.section.text, false);
    setPreviewField('sectionLine', d.section.text ? `Section: ${d.section.text}` : '', false, { hideWhenEmpty: true });
    setPreviewField('session', d.session.text, false);
    setPreviewField('sessionLine', d.session.text ? `Session: ${d.session.text}` : '', false, { hideWhenEmpty: true });
    setPreviewField('dateLine', d.submissionDate.text ? `Date of Submission: ${d.submissionDate.text}` : '', false, { hideWhenEmpty: true });

    // Lab table conditional rows
    const toggleRow = (key, show) => {
      document.querySelectorAll(`#cover-page [data-pv="${key}"]`).forEach(el => {
        el.hidden = !show;
      });
    };
    toggleRow('labIdRow', Boolean(d.studentId.text));
    toggleRow('labDeptRow', Boolean(d.department.text));
    toggleRow('labSectionRow', Boolean(d.section.text));
    toggleRow('labSessionRow', Boolean(d.session.text));
    toggleRow('labDesigRow', Boolean(d.teacherDesignation.text));
    toggleRow('labTeacherDeptRow', Boolean(d.teacherDept.text));
    toggleRow('labCourseCodeRow', Boolean(d.courseCode.text));
  }

  // ---------------- Preview Auto-Scaling ----------------
  function updatePreviewScale() {
    const A4_W = 794;
    const A4_H = 1123;
    const availW = Math.max(240, els.previewViewport.clientWidth - 12);
    const scale = zoomMode === '100' ? 1 : Math.min(1, availW / A4_W);

    els.coverPage.style.transform = `scale(${scale})`;
    els.previewScaler.style.width = `${Math.round(A4_W * scale)}px`;
    els.previewScaler.style.height = `${Math.round(A4_H * scale)}px`;
  }

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(updatePreviewScale).observe(els.previewViewport);
  }
  window.addEventListener('resize', updatePreviewScale);

  els.zoomFitBtn.addEventListener('click', () => {
    zoomMode = 'fit';
    els.zoomFitBtn.classList.add('active');
    els.zoom100Btn.classList.remove('active');
    updatePreviewScale();
  });

  els.zoom100Btn.addEventListener('click', () => {
    zoomMode = '100';
    els.zoom100Btn.classList.add('active');
    els.zoomFitBtn.classList.remove('active');
    updatePreviewScale();
  });

  // ---------------- Mobile Tabs ----------------
  els.mobileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      els.mobileTabs.forEach(t => {
        const on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', String(on));
      });
      els.formPanel.classList.toggle('mobile-hidden', target !== 'form');
      els.previewPanel.classList.toggle('mobile-hidden', target !== 'preview');
      if (target === 'preview') {
        requestAnimationFrame(updatePreviewScale);
      }
    });
  });

  // Initialize mobile visibility
  if (window.innerWidth <= 960) {
    els.previewPanel.classList.add('mobile-hidden');
  }

  // ---------------- Status Helpers ----------------
  function setStatus(msg, type = '') {
    els.statusMsg.textContent = msg;
    els.statusMsg.classList.remove('is-success', 'is-error');
    if (type) els.statusMsg.classList.add(type);
  }

  // ---------------- Presets & Quick Controls ----------------
  document.querySelectorAll('[data-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.dataset.preset;
      if (preset === 'ethics') {
        els.university.value = 'SONARGAON UNIVERSITY';
        els.deptHeader.value = 'Department of Computer Science and Engineering';
        els.docLabel.value = 'ASSIGNMENT -01';
        els.courseTitle.value = 'Professional Ethics and\nEnvironmental Protection';
        els.teacherName.value = 'Mohammed Tamjid Islam';
        if (!els.studentName.value.trim()) els.studentName.value = 'Kishan Mallick Sraban';
        if (!els.studentId.value.trim()) els.studentId.value = 'CSE2601037053';
        if (!els.department.value.trim()) els.department.value = 'CSE';
        setStatus('Loaded Ethics Assignment sample.', 'is-success');
      } else if (preset === 'discrete') {
        els.university.value = 'SONARGAON UNIVERSITY';
        els.deptHeader.value = 'Department of Computer Science and Engineering';
        els.docLabel.value = 'ASSIGNMENT -01';
        els.courseTitle.value = 'Discrete Mathematics';
        els.teacherName.value = 'Mustafa Mohammad Nashwan Haque';
        if (!els.studentName.value.trim()) els.studentName.value = 'Kishan Mallick Sraban';
        if (!els.studentId.value.trim()) els.studentId.value = 'CSE2601037053';
        if (!els.department.value.trim()) els.department.value = 'CSE';
        setStatus('Loaded Discrete Mathematics sample.', 'is-success');
      } else if (preset === 'clear') {
        els.courseTitle.value = '';
        els.courseCode.value = '';
        els.experiment.value = '';
        els.teacherName.value = '';
        els.teacherDesignation.value = '';
        els.teacherDept.value = '';
        els.studentName.value = '';
        els.studentId.value = '';
        els.section.value = '';
        els.session.value = '';
        els.docLabel.value = 'ASSIGNMENT -01';
        els.subDate.value = todayIso();
        setStatus('Cleared fields.', '');
      }
      saveStudentPrefs();
      renderPreview();
    });
  });

  document.querySelectorAll('[data-fill-target]').forEach(chip => {
    chip.addEventListener('click', () => {
      const target = document.getElementById(chip.dataset.fillTarget);
      if (target) {
        target.value = chip.dataset.fillVal;
        renderPreview();
      }
    });
  });

  els.todayBtn.addEventListener('click', () => {
    els.subDate.value = todayIso();
    renderPreview();
  });

  els.clearSavedBtn.addEventListener('click', () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
    els.studentName.value = '';
    els.studentId.value = '';
    els.section.value = '';
    els.session.value = '';
    renderPreview();
    setStatus('Saved student info cleared.', '');
  });

  // ---------------- Vector PDF Builder (jsPDF) ----------------
  function hexToRgb(hex) {
    const clean = (hex || '000000').replace('#', '');
    return [
      parseInt(clean.slice(0, 2), 16) || 0,
      parseInt(clean.slice(2, 4), 16) || 0,
      parseInt(clean.slice(4, 6), 16) || 0,
    ];
  }

  function getLogoDataUrl() {
    return new Promise(resolve => {
      const img = els.acLogoImg;
      if (!img || !img.complete || img.naturalWidth === 0) {
        const loader = new Image();
        loader.crossOrigin = 'anonymous';
        loader.onload = () => {
          try {
            const c = document.createElement('canvas');
            c.width = loader.naturalWidth;
            c.height = loader.naturalHeight;
            c.getContext('2d').drawImage(loader, 0, 0);
            resolve({ dataUrl: c.toDataURL('image/png'), w: loader.naturalWidth, h: loader.naturalHeight });
          } catch (_) {
            resolve(null);
          }
        };
        loader.onerror = () => resolve(null);
        loader.src = 'img/sulogo.png';
        return;
      }
      try {
        const c = document.createElement('canvas');
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        c.getContext('2d').drawImage(img, 0, 0);
        resolve({ dataUrl: c.toDataURL('image/png'), w: img.naturalWidth, h: img.naturalHeight });
      } catch (_) {
        resolve(null);
      }
    });
  }

  function drawCenteredLines(pdf, text, centerX, startY, { maxWidth, fontSize, style = 'normal', color = '#000000', lineHeight }) {
    if (!text) return startY;
    pdf.setFont('times', style);
    pdf.setFontSize(fontSize);
    pdf.setTextColor(...hexToRgb(color));
    const lines = pdf.splitTextToSize(text, maxWidth);
    let y = startY;
    lines.forEach(line => {
      pdf.text(line, centerX, y, { align: 'center' });
      y += lineHeight;
    });
    return y;
  }

  function drawSignatureBlock(pdf, pageW, yPos) {
    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.8);
    const leftStart = 76;
    const leftEnd = 240;
    const rightStart = pageW - 240;
    const rightEnd = pageW - 76;
    pdf.line(leftStart, yPos, leftEnd, yPos);
    pdf.line(rightStart, yPos, rightEnd, yPos);
    pdf.setFont('times', 'normal');
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text('Signature of Student', (leftStart + leftEnd) / 2, yPos + 16, { align: 'center' });
    pdf.text('Signature of Teacher', (rightStart + rightEnd) / 2, yPos + 16, { align: 'center' });
  }

  async function buildVectorCoverPdf() {
    if (typeof window.jspdf === 'undefined') {
      throw new Error('jsPDF library failed to load. Please refresh and check your connection.');
    }
    const d = collectData({ forExport: true });
    const hasCoreInput =
      d.courseTitle.text || d.teacherName.text || d.studentName.text || d.studentId.text;
    if (!hasCoreInput) {
      throw new Error('Please fill in your Course Title, Teacher Name, Student Name, or ID first (or click a Quick Fill preset).');
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageW = pdf.internal.pageSize.getWidth();   // 595.28 pt
    const pageH = pdf.internal.pageSize.getHeight();  // 841.89 pt
    const centerX = pageW / 2;
    const maxTextW = pageW - 120;

    // Outer gray border (24pt inset)
    if (d.showBorder) {
      pdf.setDrawColor(...hexToRgb(d.borderColor));
      pdf.setLineWidth(0.75);
      pdf.rect(24, 24, pageW - 48, pageH - 48);
    }

    if (d.template === '3') {
      // Template 3: Classic Lab Report Table (Vector)
      let y = 78;
      y = drawCenteredLines(pdf, d.university.text || 'SONARGAON UNIVERSITY', centerX, y, {
        maxWidth: maxTextW, fontSize: 25, style: 'bold', color: '#0070C0', lineHeight: 28
      });
      if (d.deptHeader.text) {
        y = drawCenteredLines(pdf, d.deptHeader.text, centerX, y - 2, {
          maxWidth: maxTextW, fontSize: 13, style: 'normal', color: '#0D0D0D', lineHeight: 18
        });
      }
      const logo = await getLogoDataUrl();
      if (logo) {
        const logoW = 68;
        const logoH = logoW * (logo.h / logo.w);
        pdf.addImage(logo.dataUrl, 'PNG', centerX - logoW / 2, y + 4, logoW, logoH);
        y += logoH + 28;
      } else {
        y += 16;
      }

      const docText = d.docLabel.text || 'ASSIGNMENT -01';
      pdf.setFont('times', 'bold');
      pdf.setFontSize(19);
      pdf.setTextColor(0, 0, 0);
      pdf.text(docText, centerX, y, { align: 'center' });
      const tw = pdf.getTextWidth(docText);
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(1);
      pdf.line(centerX - tw / 2, y + 3, centerX + tw / 2, y + 3);
      y += 24;

      if (d.experiment.text) {
        y = drawCenteredLines(pdf, `Topic / Experiment: ${d.experiment.text}`, centerX, y, {
          maxWidth: maxTextW, fontSize: 13.5, style: 'bold', color: '#203A55', lineHeight: 18
        });
        y += 10;
      } else {
        y += 10;
      }

      // Draw 2-column table
      const tx = 64;
      const twTotal = pageW - 128;
      const colW = twTotal / 2;
      const headH = 28;

      const leftLines = [];
      if (d.studentName.text) leftLines.push(['Name: ', d.studentName.text]);
      if (d.studentId.text) leftLines.push(['Student ID: ', d.studentId.text]);
      if (d.department.text) leftLines.push(['Department: ', d.department.text]);
      if (d.section.text) leftLines.push(['Section: ', d.section.text]);
      if (d.session.text) leftLines.push(['Session: ', d.session.text]);

      const rightLines = [];
      if (d.teacherName.text) rightLines.push(['', d.teacherName.text]);
      if (d.teacherDesignation.text) rightLines.push(['Designation: ', d.teacherDesignation.text]);
      if (d.teacherDept.text) rightLines.push(['Department: ', d.teacherDept.text]);

      const row1H = Math.max(leftLines.length, rightLines.length, 2) * 20 + 22;
      const courseSingle = (d.courseTitle.text || '').replace(/\n+/g, ' ');
      pdf.setFont('times', 'bold');
      pdf.setFontSize(13);
      const courseWrapped = courseSingle ? pdf.splitTextToSize(`Course Title: ${courseSingle}`, twTotal - 24) : [];
      const row2H = Math.max(1, courseWrapped.length + (d.courseCode.text ? 1 : 0)) * 20 + 20;

      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.9);
      pdf.rect(tx, y, twTotal, headH + row1H + row2H);
      pdf.line(tx, y + headH, tx + twTotal, y + headH);
      pdf.line(tx, y + headH + row1H, tx + twTotal, y + headH + row1H);
      pdf.line(tx + colW, y, tx + colW, y + headH + row1H);

      pdf.setFont('times', 'bold');
      pdf.setFontSize(13);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Submitted by:', tx + 12, y + 19);
      pdf.text('Submitted to:', tx + colW + 12, y + 19);

      const renderCellPairs = (pairs, startX, startY, availW) => {
        let cy = startY;
        pairs.forEach(([label, val]) => {
          pdf.setFont('times', 'normal');
          pdf.setFontSize(12.5);
          const lw = label ? pdf.getTextWidth(label) : 0;
          if (label) pdf.text(label, startX, cy);
          pdf.setFont('times', 'bold');
          const wrapped = pdf.splitTextToSize(val, availW - lw);
          wrapped.forEach((wLine, idx) => {
            pdf.text(wLine, idx === 0 ? startX + lw : startX, cy);
            cy += 19;
          });
        });
      };

      renderCellPairs(leftLines, tx + 12, y + headH + 22, colW - 22);
      renderCellPairs(rightLines, tx + colW + 12, y + headH + 22, colW - 22);

      let cy2 = y + headH + row1H + 22;
      if (courseSingle) {
        renderCellPairs([['Course Title: ', courseSingle]], tx + 12, cy2, twTotal - 24);
        cy2 += courseWrapped.length * 19;
      }
      if (d.courseCode.text) {
        renderCellPairs([['Course Code: ', d.courseCode.text]], tx + 12, cy2, twTotal - 24);
      }

      y += headH + row1H + row2H + 28;
      if (d.submissionDate.text) {
        pdf.setFont('times', 'normal');
        pdf.setFontSize(13.5);
        pdf.text(`Date of Submission: ${d.submissionDate.text}`, tx, y);
      }
      drawSignatureBlock(pdf, pageW, pageH - 86);
      return { pdf, data: d };
    }

    // Templates 1 & 2: Exact Ethics Cover - KISHAN.pdf Vector Coordinates
    const withLogo = d.template === '2';
    let y = 160;

    if (withLogo) {
      const logo = await getLogoDataUrl();
      if (logo) {
        const logoW = 64;
        const logoH = logoW * (logo.h / logo.w);
        pdf.addImage(logo.dataUrl, 'PNG', centerX - logoW / 2, 68, logoW, logoH);
        y = 68 + logoH + 34;
      } else {
        y = 128;
      }
    }

    // University Name (28pt Bold #0070C0)
    y = drawCenteredLines(pdf, d.university.text || 'SONARGAON UNIVERSITY', centerX, y, {
      maxWidth: maxTextW, fontSize: 28, style: 'bold', color: '#0070C0', lineHeight: 32
    });

    // Dept Header (14pt Regular #0D0D0D)
    if (d.deptHeader.text) {
      y = drawCenteredLines(pdf, d.deptHeader.text, centerX, y - 5, {
        maxWidth: maxTextW, fontSize: 14, style: 'normal', color: '#0D0D0D', lineHeight: 19
      });
    }

    // Assignment Label (14pt Bold #C00000)
    y += withLogo ? 28 : 42;
    if (d.docLabel.text) {
      y = drawCenteredLines(pdf, d.docLabel.text, centerX, y, {
        maxWidth: maxTextW, fontSize: 14, style: 'bold', color: '#C00000', lineHeight: 20
      });
    }

    // Course / Subject Title (20pt Bold #203A55)
    y += withLogo ? 40 : 58;
    const rawTitleLines = (d.courseTitle.text || '').split('\n').map(s => s.trim()).filter(Boolean);
    if (rawTitleLines.length > 0) {
      pdf.setFont('times', 'bold');
      pdf.setFontSize(20);
      pdf.setTextColor(...hexToRgb('#203A55'));
      rawTitleLines.forEach(line => {
        const wrapped = pdf.splitTextToSize(line, maxTextW);
        wrapped.forEach(wLine => {
          pdf.text(wLine, centerX, y, { align: 'center' });
          y += 30;
        });
      });
    } else {
      y += 24;
    }

    if (d.courseCode.text) {
      y = drawCenteredLines(pdf, `Course Code: ${d.courseCode.text}`, centerX, y - 4, {
        maxWidth: maxTextW, fontSize: 13, style: 'bold', color: '#203A55', lineHeight: 19
      });
    }
    if (d.experiment.text) {
      y = drawCenteredLines(pdf, `Topic / Experiment: ${d.experiment.text}`, centerX, y - 2, {
        maxWidth: maxTextW, fontSize: 12.5, style: 'normal', color: '#254061', lineHeight: 18
      });
    }

    // SUBMITTED TO
    y += withLogo ? 32 : 46;
    y = drawCenteredLines(pdf, 'SUBMITTED TO', centerX, y, {
      maxWidth: maxTextW, fontSize: 14, style: 'bold', color: '#000000', lineHeight: 22
    });
    if (d.teacherName.text) {
      y = drawCenteredLines(pdf, d.teacherName.text, centerX, y, {
        maxWidth: maxTextW, fontSize: 14, style: 'normal', color: '#254061', lineHeight: 21
      });
    }
    if (d.teacherDesignation.text) {
      y = drawCenteredLines(pdf, d.teacherDesignation.text, centerX, y - 2, {
        maxWidth: maxTextW, fontSize: 12, style: 'normal', color: '#333333', lineHeight: 17
      });
    }
    if (d.teacherDept.text) {
      y = drawCenteredLines(pdf, `Department of ${d.teacherDept.text}`, centerX, y - 2, {
        maxWidth: maxTextW, fontSize: 12, style: 'normal', color: '#333333', lineHeight: 17
      });
    }

    // SUBMITTED BY
    y += withLogo ? 26 : 36;
    y = drawCenteredLines(pdf, 'SUBMITTED BY', centerX, y, {
      maxWidth: maxTextW, fontSize: 14, style: 'bold', color: '#000000', lineHeight: 22
    });
    if (d.studentName.text) {
      y = drawCenteredLines(pdf, d.studentName.text, centerX, y, {
        maxWidth: maxTextW, fontSize: 14, style: 'bold', color: '#17375E', lineHeight: 22
      });
    }
    if (d.studentId.text) {
      y = drawCenteredLines(pdf, `ID No.: ${d.studentId.text}`, centerX, y, {
        maxWidth: maxTextW, fontSize: 14, style: 'normal', color: '#000000', lineHeight: 22
      });
    }
    if (d.department.text) {
      y = drawCenteredLines(pdf, `Department: ${d.department.text}`, centerX, y, {
        maxWidth: maxTextW, fontSize: 14, style: 'normal', color: '#000000', lineHeight: 22
      });
    }
    if (d.section.text) {
      y = drawCenteredLines(pdf, `Section: ${d.section.text}`, centerX, y, {
        maxWidth: maxTextW, fontSize: 13, style: 'normal', color: '#000000', lineHeight: 20
      });
    }
    if (d.session.text) {
      y = drawCenteredLines(pdf, `Session: ${d.session.text}`, centerX, y, {
        maxWidth: maxTextW, fontSize: 13, style: 'normal', color: '#000000', lineHeight: 20
      });
    }

    // Date of Submission
    if (d.submissionDate.text) {
      y += withLogo ? 30 : 40;
      drawCenteredLines(pdf, `Date of Submission: ${d.submissionDate.text}`, centerX, y, {
        maxWidth: maxTextW, fontSize: 16, style: 'normal', color: '#0D0D0D', lineHeight: 22
      });
    }

    if (d.showSignatures) {
      drawSignatureBlock(pdf, pageW, Math.max(y + 70, pageH - 86));
    }

    return { pdf, data: d };
  }

  function makeSafeFilename(d, ext) {
    const parts = [d.docLabel.text || 'Assignment', d.studentName.text, d.studentId.text]
      .filter(Boolean)
      .map(s => s.replace(/[^a-zA-Z0-9_-]+/g, '_').replace(/^_+|_+$/g, ''));
    const base = parts.filter(Boolean).join('_') || 'Cover_Page';
    return `${base}.${ext}`;
  }

  function triggerBlobDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  // ---------------- Download Cover PDF ----------------
  els.downloadPdfBtn.addEventListener('click', async () => {
    els.downloadPdfBtn.disabled = true;
    els.pdfBtnLabel.textContent = 'Generating PDF...';
    setStatus('', '');
    try {
      const { pdf, data } = await buildVectorCoverPdf();
      pdf.save(makeSafeFilename(data, 'pdf'));
      setStatus('Cover PDF downloaded!', 'is-success');
    } catch (err) {
      console.error(err);
      setStatus(err.message || 'Could not create PDF.', 'is-error');
    } finally {
      els.downloadPdfBtn.disabled = false;
      els.pdfBtnLabel.textContent = 'Download Cover PDF';
    }
  });

  // ---------------- Download Word (.docx) via Vercel ----------------
  els.downloadDocxBtn.addEventListener('click', async () => {
    els.downloadDocxBtn.disabled = true;
    els.docxBtnLabel.textContent = 'Building...';
    setStatus('Generating Word file via Vercel...', '');
    try {
      const d = collectData({ forExport: true });
      if (!d.courseTitle.text && !d.teacherName.text && !d.studentName.text && !d.studentId.text) {
        throw new Error('Please fill in your Course Title, Teacher Name, Student Name, or ID first.');
      }
      const payload = {
        template: d.template,
        university: d.university.text,
        deptHeader: d.deptHeader.text,
        docLabel: d.docLabel.text,
        courseTitle: d.courseTitle.text,
        courseCode: d.courseCode.text,
        experiment: d.experiment.text,
        teacherName: d.teacherName.text,
        teacherDesignation: d.teacherDesignation.text,
        teacherDept: d.teacherDept.text,
        studentName: d.studentName.text,
        studentId: d.studentId.text,
        department: d.department.text,
        section: d.section.text,
        session: d.session.text,
        submissionDate: d.submissionDate.text,
        showBorder: d.showBorder,
        borderColor: d.borderColor,
        showSignatures: d.showSignatures,
      };
      const res = await fetch(VERCEL_DOCX_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        let msg = `Word API error (${res.status})`;
        try {
          const j = await res.json();
          if (j && j.error) msg = j.error;
        } catch (_) {}
        throw new Error(msg);
      }
      const blob = await res.blob();
      triggerBlobDownload(blob, makeSafeFilename(d, 'docx'));
      setStatus('Word (.docx) file downloaded!', 'is-success');
    } catch (err) {
      console.error(err);
      setStatus(err.message || 'Could not create Word document.', 'is-error');
    } finally {
      els.downloadDocxBtn.disabled = false;
      els.docxBtnLabel.textContent = 'Word (.docx)';
    }
  });

  // ---------------- Save PNG ----------------
  els.downloadPngBtn.addEventListener('click', async () => {
    if (typeof html2canvas === 'undefined') {
      setStatus('Image export library did not load.', 'is-error');
      return;
    }
    els.downloadPngBtn.disabled = true;
    els.pngBtnLabel.textContent = 'Saving...';
    setStatus('', '');
    const prevTransform = els.coverPage.style.transform;
    const prevBoxShadow = els.coverPage.style.boxShadow;
    const placeholders = [];
    try {
      document.querySelectorAll('#cover-page .is-placeholder').forEach(el => {
        placeholders.push(el);
        el.style.visibility = 'hidden';
      });
      els.coverPage.style.transform = 'none';
      els.coverPage.style.boxShadow = 'none';
      const canvas = await html2canvas(els.coverPage, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: 794,
        height: 1123,
      });
      const d = collectData({ forExport: true });
      canvas.toBlob(blob => {
        if (blob) {
          triggerBlobDownload(blob, makeSafeFilename(d, 'png'));
          setStatus('PNG image downloaded!', 'is-success');
        }
      }, 'image/png');
    } catch (err) {
      console.error(err);
      setStatus('Could not export PNG.', 'is-error');
    } finally {
      placeholders.forEach(el => { el.style.visibility = ''; });
      els.coverPage.style.transform = prevTransform;
      els.coverPage.style.boxShadow = prevBoxShadow;
      els.downloadPngBtn.disabled = false;
      els.pngBtnLabel.textContent = 'Save PNG';
    }
  });

  // ---------------- Print ----------------
  els.printBtn.addEventListener('click', () => {
    window.print();
  });

  // ---------------- PDF Merger (pdf-lib) ----------------
  async function handleAttachedFile(file) {
    if (!file) return;
    if (typeof window.PDFLib === 'undefined') {
      setStatus('PDF merger library failed to load. Please refresh.', 'is-error');
      return;
    }
    try {
      const buf = await file.arrayBuffer();
      const loaded = await window.PDFLib.PDFDocument.load(buf);
      const count = loaded.getPageCount();
      attachedPdf = { name: file.name, bytes: buf, pageCount: count };
      els.attachedFileName.textContent = file.name;
      els.attachedPageCount.textContent = `${count} page${count === 1 ? '' : 's'}`;
      els.dropzoneIdle.hidden = true;
      els.dropzoneFile.hidden = false;
      els.downloadMergedBtn.disabled = false;
      setStatus(`Attached "${file.name}" (${count} pages). Ready to merge!`, 'is-success');
    } catch (err) {
      console.error(err);
      attachedPdf = null;
      els.downloadMergedBtn.disabled = true;
      setStatus('Could not read PDF (it may be corrupted or password-protected).', 'is-error');
    }
  }

  function clearAttachedFile(e) {
    if (e) e.stopPropagation();
    attachedPdf = null;
    els.attachPdfInput.value = '';
    els.dropzoneIdle.hidden = false;
    els.dropzoneFile.hidden = true;
    els.downloadMergedBtn.disabled = true;
  }

  els.pdfDropzone.addEventListener('click', e => {
    if (e.target === els.removeAttachedBtn) return;
    els.attachPdfInput.click();
  });

  els.attachPdfInput.addEventListener('change', e => {
    if (e.target.files && e.target.files[0]) {
      handleAttachedFile(e.target.files[0]);
    }
  });

  els.pdfDropzone.addEventListener('dragover', e => {
    e.preventDefault();
    els.pdfDropzone.classList.add('is-dragover');
  });

  els.pdfDropzone.addEventListener('dragleave', () => {
    els.pdfDropzone.classList.remove('is-dragover');
  });

  els.pdfDropzone.addEventListener('drop', e => {
    e.preventDefault();
    els.pdfDropzone.classList.remove('is-dragover');
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) handleAttachedFile(file);
  });

  els.removeAttachedBtn.addEventListener('click', clearAttachedFile);

  els.downloadMergedBtn.addEventListener('click', async () => {
    if (!attachedPdf) return;
    if (typeof window.PDFLib === 'undefined') {
      setStatus('PDF merger library not available.', 'is-error');
      return;
    }
    els.downloadMergedBtn.disabled = true;
    const prevLabel = els.downloadMergedBtn.textContent;
    els.downloadMergedBtn.textContent = 'Merging PDF...';
    setStatus('', '');
    try {
      const { pdf, data } = await buildVectorCoverPdf();
      const coverBytes = pdf.output('arraybuffer');

      const { PDFDocument } = window.PDFLib;
      const merged = await PDFDocument.create();
      const coverDoc = await PDFDocument.load(coverBytes);
      const bodyDoc = await PDFDocument.load(attachedPdf.bytes);

      const [coverPage] = await merged.copyPages(coverDoc, [0]);
      merged.addPage(coverPage);

      const totalBody = bodyDoc.getPageCount();
      const keepCount = els.dropLastPage.checked && totalBody > 1 ? totalBody - 1 : totalBody;
      const indices = Array.from({ length: keepCount }, (_, i) => i);
      const copiedPages = await merged.copyPages(bodyDoc, indices);
      copiedPages.forEach(p => merged.addPage(p));

      const outBytes = await merged.save();
      const blob = new Blob([outBytes], { type: 'application/pdf' });
      triggerBlobDownload(blob, makeSafeFilename(data, 'pdf').replace(/\.pdf$/, '_Full.pdf'));
      setStatus(`Merged PDF downloaded (${1 + keepCount} pages)!`, 'is-success');
    } catch (err) {
      console.error(err);
      setStatus(err.message || 'Could not merge PDF.', 'is-error');
    } finally {
      els.downloadMergedBtn.disabled = !attachedPdf;
      els.downloadMergedBtn.textContent = prevLabel;
    }
  });

  // ---------------- Init & Listeners ----------------
  els.subDate.value = todayIso();
  loadStudentPrefs();

  document.querySelectorAll('#coverForm input, #coverForm select, #coverForm textarea').forEach(el => {
    if (el.id === 'attachPdfInput') return;
    const evt = el.type === 'checkbox' || el.type === 'radio' || el.tagName === 'SELECT' ? 'change' : 'input';
    el.addEventListener(evt, () => {
      saveStudentPrefs();
      renderPreview();
    });
  });

  renderPreview();
  updatePreviewScale();
})();
