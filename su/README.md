# Sonargaon University — Assignment Cover Page Generator (`/su/`)

A clean, fast web app for generating A4 Assignment & Lab Report cover pages styled for **Sonargaon University**.

## Features

- **Exact A4 Vector PDF Export** (`jsPDF`) — sharp selectable Times New Roman text, exact university color palette (`#0070C0`, `#C00000`, `#203A55`, `#254061`, `#17375E`), and `#AAB7C4` outer page frame.
- **3 Cover Templates**:
  1. **Academic (Default)** — minimalist centered assignment cover layout.
  2. **With Logo** — centered academic cover with the Sonargaon University crest.
  3. **Lab Table** — classic bordered 2-column table with signature lines.
- **In-Browser PDF Merger** (`pdf-lib`) — attach an assignment PDF (e.g. from CamScanner), optionally remove the last page, and download a single merged PDF with the cover as Page 1.
- **Editable Word Export (`.docx`)** — powered by the Vercel Node.js serverless function at [`/api/su-docx`](../api/su-docx.js).
- **Auto-Saved Student Info** — stores your name, ID, and department in `localStorage` so repeat covers take seconds.
- **PNG Export & Direct A4 Print** (`@media print`).

## Folder Structure

```text
su/
├── index.html          # Main cover generator UI & live A4 preview
├── style.css           # Responsive UI & exact A4 print stylesheet
├── script.js           # Live preview, jsPDF vector export, pdf-lib merger, Word API client
├── img/
│   └── sulogo.png      # Sonargaon University crest
└── js/
    ├── jspdf.umd.min.js
    ├── pdf-lib.min.js
    └── html2canvas.min.js
```
