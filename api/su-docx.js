const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
  PageBorderDisplay,
  PageBorderOffsetFrom,
  PageBorderZOrder,
  ImageRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  VerticalAlign,
} = require('docx');

// A4 dimensions in twips (1 mm = 56.6929 twips)
const A4_WIDTH_TWIPS = 11906;
const A4_HEIGHT_TWIPS = 16838;
const MARGIN_TWIPS = 1440; // 1 inch = 2.54 cm

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
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

function cleanText(value, maxLen = 200) {
  if (value === undefined || value === null) return '';
  return String(value)
    .replace(/\r\n/g, '\n')
    .replace(/[\x00-\x09\x0B-\x1F\x7F]/g, ' ')
    .trim()
    .slice(0, maxLen);
}

function normalizeHex(hex, fallback) {
  const cleaned = String(hex || '').replace(/[^0-9a-fA-F]/g, '');
  return cleaned.length === 6 ? cleaned.toUpperCase() : fallback;
}

function loadLogoBuffer() {
  const candidates = [
    path.join(process.cwd(), 'su', 'img', 'sulogo.png'),
    path.join(__dirname, '..', 'su', 'img', 'sulogo.png'),
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) {
        return fs.readFileSync(p);
      }
    } catch (_) {}
  }
  return null;
}

function centeredPara(text, { size = 24, bold = false, color = '000000', spaceAfter = 160, underline = false } = {}) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: spaceAfter, line: 276 },
    children: [
      new TextRun({
        text,
        bold,
        font: 'Times New Roman',
        size, // half-points (24 = 12pt)
        color,
        underline: underline ? {} : undefined,
      }),
    ],
  });
}

function emptyPara(spaceAfter = 160) {
  return new Paragraph({
    spacing: { before: 0, after: spaceAfter },
    children: [new TextRun({ text: '', size: 4 })],
  });
}

function buildAcademicCover(data, includeLogo) {
  const children = [];
  const logoBuf = includeLogo ? loadLogoBuffer() : null;

  if (logoBuf) {
    children.push(emptyPara(160));
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 200 },
        children: [
          new ImageRun({
            data: logoBuf,
            transformation: { width: 82, height: 94 },
            type: 'png',
          }),
        ],
      })
    );
  } else {
    children.push(emptyPara(400));
    children.push(emptyPara(200));
  }

  children.push(centeredPara(data.university || 'SONARGAON UNIVERSITY', { size: 56, bold: true, color: '0070C0', spaceAfter: 80 }));

  if (data.deptHeader) {
    children.push(centeredPara(data.deptHeader, { size: 28, bold: false, color: '0D0D0D', spaceAfter: 320 }));
  }

  children.push(emptyPara(logoBuf ? 80 : 200));

  if (data.docLabel) {
    children.push(centeredPara(data.docLabel, { size: 28, bold: true, color: 'C00000', spaceAfter: 440 }));
  }

  children.push(emptyPara(logoBuf ? 80 : 240));

  const titleLines = (data.courseTitle || 'Course Title').split('\n').map(s => s.trim()).filter(Boolean);
  titleLines.forEach((line, idx) => {
    const isLast = idx === titleLines.length - 1;
    children.push(centeredPara(line, { size: 40, bold: true, color: '203A55', spaceAfter: isLast ? 120 : 80 }));
  });

  if (data.courseCode) {
    children.push(centeredPara(`Course Code: ${data.courseCode}`, { size: 26, bold: true, color: '203A55', spaceAfter: 160 }));
  }
  if (data.experiment) {
    children.push(centeredPara(`Topic / Experiment: ${data.experiment}`, { size: 26, bold: false, color: '254061', spaceAfter: 160 }));
  }

  children.push(emptyPara(logoBuf ? 160 : 320));

  children.push(centeredPara('SUBMITTED TO', { size: 28, bold: true, color: '000000', spaceAfter: 80 }));
  children.push(centeredPara(data.teacherName || 'Course Instructor', { size: 28, bold: false, color: '254061', spaceAfter: data.teacherDesignation || data.teacherDept ? 60 : 320 }));
  if (data.teacherDesignation) {
    children.push(centeredPara(data.teacherDesignation, { size: 24, bold: false, color: '333333', spaceAfter: data.teacherDept ? 40 : 280 }));
  }
  if (data.teacherDept) {
    children.push(centeredPara(`Department of ${data.teacherDept}`, { size: 24, bold: false, color: '333333', spaceAfter: 280 }));
  }

  children.push(emptyPara(80));

  children.push(centeredPara('SUBMITTED BY', { size: 28, bold: true, color: '000000', spaceAfter: 80 }));
  children.push(centeredPara(data.studentName || 'Student Name', { size: 28, bold: true, color: '17375E', spaceAfter: 80 }));

  if (data.studentId) {
    children.push(centeredPara(`ID No.: ${data.studentId}`, { size: 28, bold: false, color: '000000', spaceAfter: 80 }));
  }
  if (data.department) {
    children.push(centeredPara(`Department: ${data.department}`, { size: 28, bold: false, color: '000000', spaceAfter: data.section || data.session ? 80 : 320 }));
  }
  if (data.section) {
    children.push(centeredPara(`Section: ${data.section}`, { size: 26, bold: false, color: '000000', spaceAfter: data.session ? 60 : 280 }));
  }
  if (data.session) {
    children.push(centeredPara(`Session: ${data.session}`, { size: 26, bold: false, color: '000000', spaceAfter: 280 }));
  }

  children.push(emptyPara(logoBuf ? 120 : 200));

  if (data.submissionDate) {
    children.push(centeredPara(`Date of Submission: ${data.submissionDate}`, { size: 32, bold: false, color: '0D0D0D', spaceAfter: 160 }));
  }

  if (data.showSignatures) {
    children.push(emptyPara(360));
    children.push(buildSignatureTable());
  }

  return children;
}

function cellLine(label, value) {
  const runs = [];
  if (label) {
    runs.push(new TextRun({ text: `${label} `, bold: false, font: 'Times New Roman', size: 26, color: '000000' }));
  }
  runs.push(new TextRun({ text: value || '', bold: true, font: 'Times New Roman', size: 26, color: '000000' }));
  return new Paragraph({
    spacing: { before: 40, after: 100, line: 276 },
    children: runs,
  });
}

function buildSignatureTable() {
  const noBorder = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  const topLine = { style: BorderStyle.SINGLE, size: 6, color: '000000' };
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: noBorder,
      bottom: noBorder,
      left: noBorder,
      right: noBorder,
      insideHorizontal: noBorder,
      insideVertical: noBorder,
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 44, type: WidthType.PERCENTAGE },
            borders: { top: topLine, bottom: noBorder, left: noBorder, right: noBorder },
            children: [centeredPara('Signature of Student', { size: 24, spaceAfter: 0 })],
          }),
          new TableCell({
            width: { size: 12, type: WidthType.PERCENTAGE },
            borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder },
            children: [new Paragraph({ children: [] })],
          }),
          new TableCell({
            width: { size: 44, type: WidthType.PERCENTAGE },
            borders: { top: topLine, bottom: noBorder, left: noBorder, right: noBorder },
            children: [centeredPara('Signature of Teacher', { size: 24, spaceAfter: 0 })],
          }),
        ],
      }),
    ],
  });
}

function buildLabTableCover(data) {
  const children = [];
  const logoBuf = loadLogoBuffer();

  children.push(emptyPara(160));
  children.push(centeredPara(data.university || 'SONARGAON UNIVERSITY', { size: 52, bold: true, color: '0070C0', spaceAfter: 100 }));
  if (data.deptHeader) {
    children.push(centeredPara(data.deptHeader, { size: 26, bold: false, color: '0D0D0D', spaceAfter: 200 }));
  }

  if (logoBuf) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 240 },
        children: [
          new ImageRun({
            data: logoBuf,
            transformation: { width: 92, height: 105 },
            type: 'png',
          }),
        ],
      })
    );
  }

  children.push(centeredPara(data.docLabel || 'ASSIGNMENT -01', { size: 40, bold: true, color: '000000', underline: true, spaceAfter: 180 }));
  if (data.experiment) {
    children.push(centeredPara(`Experiment / Topic: ${data.experiment}`, { size: 28, bold: true, color: '203A55', spaceAfter: 240 }));
  } else {
    children.push(emptyPara(180));
  }

  const solid = { style: BorderStyle.SINGLE, size: 8, color: '000000' };
  const table = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: { top: solid, bottom: solid, left: solid, right: solid, insideHorizontal: solid, insideVertical: solid },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            margins: { top: 140, bottom: 140, left: 180, right: 180 },
            children: [
              new Paragraph({
                spacing: { before: 0, after: 0 },
                children: [new TextRun({ text: 'Submitted by:', bold: true, underline: {}, font: 'Times New Roman', size: 28 })],
              }),
            ],
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            margins: { top: 140, bottom: 140, left: 180, right: 180 },
            children: [
              new Paragraph({
                spacing: { before: 0, after: 0 },
                children: [new TextRun({ text: 'Submitted to:', bold: true, underline: {}, font: 'Times New Roman', size: 28 })],
              }),
            ],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            verticalAlign: VerticalAlign.TOP,
            margins: { top: 160, bottom: 160, left: 180, right: 180 },
            children: [
              cellLine('Name:', data.studentName),
              cellLine('Student ID:', data.studentId),
              cellLine('Department:', data.department),
              data.section ? cellLine('Section:', data.section) : null,
              data.session ? cellLine('Session:', data.session) : null,
            ].filter(Boolean),
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            verticalAlign: VerticalAlign.TOP,
            margins: { top: 160, bottom: 160, left: 180, right: 180 },
            children: [
              cellLine('', data.teacherName),
              data.teacherDesignation ? cellLine('Designation:', data.teacherDesignation) : null,
              data.teacherDept ? cellLine('Department:', data.teacherDept) : null,
            ].filter(Boolean),
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 2,
            margins: { top: 140, bottom: 140, left: 180, right: 180 },
            children: [
              cellLine('Course Title:', (data.courseTitle || '').replace(/\n+/g, ' ')),
              data.courseCode ? cellLine('Course Code:', data.courseCode) : null,
            ].filter(Boolean),
          }),
        ],
      }),
    ],
  });

  children.push(table);
  children.push(emptyPara(240));
  if (data.submissionDate) {
    children.push(
      new Paragraph({
        spacing: { before: 80, after: 200 },
        children: [
          new TextRun({ text: 'Date of Submission: ', bold: true, font: 'Times New Roman', size: 28 }),
          new TextRun({ text: data.submissionDate, bold: false, font: 'Times New Roman', size: 28 }),
        ],
      })
    );
  }
  children.push(emptyPara(700));
  children.push(buildSignatureTable());
  return children;
}

module.exports = async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const body = await readJsonBody(req);
    const data = {
      template: cleanText(body.template || '1', 10),
      university: cleanText(body.university, 140) || 'SONARGAON UNIVERSITY',
      deptHeader: cleanText(body.deptHeader, 160),
      docLabel: cleanText(body.docLabel, 80),
      courseTitle: cleanText(body.courseTitle, 240),
      courseCode: cleanText(body.courseCode, 60),
      experiment: cleanText(body.experiment, 200),
      teacherName: cleanText(body.teacherName, 120),
      teacherDesignation: cleanText(body.teacherDesignation, 100),
      teacherDept: cleanText(body.teacherDept, 100),
      studentName: cleanText(body.studentName, 120),
      studentId: cleanText(body.studentId, 60),
      department: cleanText(body.department, 80),
      section: cleanText(body.section, 40),
      session: cleanText(body.session, 50),
      submissionDate: cleanText(body.submissionDate, 80),
      showBorder: body.showBorder !== false,
      borderColor: normalizeHex(body.borderColor, 'AAB7C4'),
      showSignatures: Boolean(body.showSignatures),
    };

    let children;
    if (data.template === '3') {
      children = buildLabTableCover(data);
    } else {
      children = buildAcademicCover(data, data.template === '2');
    }

    const borderSpec = data.showBorder
      ? {
          pageBorders: {
            display: PageBorderDisplay.ALL_PAGES,
            offsetFrom: PageBorderOffsetFrom.PAGE,
            zOrder: PageBorderZOrder.FRONT,
          },
          pageBorderTop: { style: BorderStyle.SINGLE, size: 6, space: 24, color: data.borderColor },
          pageBorderLeft: { style: BorderStyle.SINGLE, size: 6, space: 24, color: data.borderColor },
          pageBorderBottom: { style: BorderStyle.SINGLE, size: 6, space: 24, color: data.borderColor },
          pageBorderRight: { style: BorderStyle.SINGLE, size: 6, space: 24, color: data.borderColor },
        }
      : undefined;

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              size: { width: A4_WIDTH_TWIPS, height: A4_HEIGHT_TWIPS },
              margin: { top: MARGIN_TWIPS, right: MARGIN_TWIPS, bottom: MARGIN_TWIPS, left: MARGIN_TWIPS },
              borders: borderSpec,
            },
          },
          children,
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);
    const safeName = (data.studentName || 'Cover_Page').replace(/[^a-zA-Z0-9_-]+/g, '_').replace(/^_+|_+$/g, '') || 'Cover_Page';

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', `attachment; filename="${safeName}_Cover_Page.docx"`);
    return res.status(200).send(buffer);
  } catch (err) {
    console.error('su-docx error:', err);
    return res.status(500).json({ error: err.message || 'Failed to build DOCX' });
  }
};
