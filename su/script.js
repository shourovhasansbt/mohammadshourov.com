// ------------------------------------------------------------------
// Preview rendering. All four templates expose the same data-pv hooks,
// so a single pass fills whichever template is currently visible.
// ------------------------------------------------------------------

// Session year always reflects the current year and isn't user-editable.
document.getElementById("sessionYear").value = new Date().getFullYear();

function formatDate(isoValue) {
  if (!isoValue) return "";
  const [y, m, d] = isoValue.split("-");
  if (!y || !m || !d) return isoValue;
  return `${d}.${m}.${y}`;
}

function collectValues() {
  const val = id => document.getElementById(id).value.trim();
  const semester = val("session");
  const year = val("sessionYear");
  return {
    docTitle:     val("docTitle"),
    experiment:   val("experiment"),
    name:         val("name"),
    studentId:    val("studentId"),
    courseTitle:  val("courseTitle"),
    courseCode:   val("courseCode"),
    section:      val("section"),
    session:      semester && year ? `${semester} ${year}` : "",
    toName:       val("toName"),
    toDesignation:val("toDesignation"),
    toDepartment: val("toDepartment"),
    subDate:      formatDate(val("subDate"))
  };
}

function updatePreview() {
  const values = collectValues();
  document.querySelectorAll("#cover-page [data-pv]").forEach(el => {
    el.textContent = values[el.dataset.pv] || "\u00A0";
  });
}

// Shows one template at a time; the rest stay display:none. A mismatch
// between the picked value and the .tpl-N class would otherwise leave
// every template hidden, i.e. a blank preview and a blank PDF.
function applyTemplate() {
  const templates = document.querySelectorAll("#cover-page .tpl");
  const picked = document.querySelector("input[name='tplChoice']:checked");
  const chosen = picked ? picked.value : "";
  let matched = false;
  templates.forEach(tpl => {
    const on = tpl.classList.contains(`tpl-${chosen}`);
    if (on) matched = true;
    tpl.classList.toggle("active", on);
  });
  if (!matched && templates.length) {
    templates[0].classList.add("active");
  }
}

// Wire up live updates
document.querySelectorAll("#cover-form input, #cover-form select")
  .forEach(el => el.addEventListener("input", updatePreview));

document.querySelectorAll("input[name='tplChoice']")
  .forEach(el => el.addEventListener("change", applyTemplate));

applyTemplate();
updatePreview();

// ------------------------------------------------------------------
// Header stats display helper
// ------------------------------------------------------------------
function updateStatsDisplay(data) {
  const viewEl = document.getElementById("viewCount");
  const dlEl   = document.getElementById("dlCount");
  if (viewEl && typeof data.views === "number") {
    viewEl.textContent = data.views.toLocaleString();
  }
  if (dlEl && typeof data.downloads === "number") {
    dlEl.textContent = data.downloads.toLocaleString();
  }
}

// ------------------------------------------------------------------
// Page view counter — fires once on load
// ------------------------------------------------------------------
async function bumpView() {
  try {
    const res = await fetch("counter.php?type=view", { method: "POST" });
    if (!res.ok) return;
    const data = await res.json();
    updateStatsDisplay(data);
  } catch (err) {
    // Try GET fallback to at least show current counts
    try {
      const res = await fetch("counter.php");
      if (res.ok) updateStatsDisplay(await res.json());
    } catch (_) {}
    console.warn("View counter update failed:", err);
  }
}

// Run immediately when page loads
bumpView();

// ------------------------------------------------------------------
// PDF generation + download counter
// ------------------------------------------------------------------
const downloadBtn   = document.getElementById("downloadBtn");
const btnLabel      = document.getElementById("btnLabel");
const downloadCount = document.getElementById("downloadCount");

// Resolves on the next animation frame, or after 100ms. A backgrounded or
// battery-throttled tab stops firing frames, and waiting on one alone would
// leave the Download button stuck on "Preparing PDF…" forever.
function nextPaint() {
  return new Promise(resolve => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve();
      }
    };
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(finish);
    setTimeout(finish, 100);
  });
}

async function generatePdf() {
  if (typeof html2canvas === "undefined" || typeof window.jspdf === "undefined") {
    throw new Error("the PDF library did not load — check your connection and reload the page");
  }

  const node = document.getElementById("cover-page");

  // --- Pin the real A4 pixel box before capturing ------------------------
  const prevStyle = node.getAttribute("style");
  node.style.width = "794px";
  node.style.height = "1123px";
  await nextPaint();

  let canvas;
  try {
    canvas = await html2canvas(node, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      width: 794,
      height: 1123,
      windowWidth: 1280,
      windowHeight: 1600
    });
  } finally {
    if (prevStyle === null) {
      node.removeAttribute("style");
    } else {
      node.setAttribute("style", prevStyle);
    }
  }

  const imgData = canvas.toDataURL("image/jpeg", 0.98);
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const pageWidth  = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const canvasRatio = canvas.width / canvas.height;
  let imgWidth  = pageWidth;
  let imgHeight = imgWidth / canvasRatio;
  if (imgHeight > pageHeight) {
    imgHeight = pageHeight;
    imgWidth  = imgHeight * canvasRatio;
  }
  const xOffset = (pageWidth  - imgWidth)  / 2;
  const yOffset = (pageHeight - imgHeight) / 2;
  pdf.addImage(imgData, "JPEG", xOffset, yOffset, imgWidth, imgHeight);

  const name     = document.getElementById("name").value.trim() || "cover-page";
  const safeName = name.replace(/[^a-z0-9]+/gi, "_");
  pdf.save(`${safeName}_cover_page.pdf`);
}

async function bumpDownload() {
  try {
    const res = await fetch("counter.php?type=download", { method: "POST" });
    if (!res.ok) return;
    const data = await res.json();
    updateStatsDisplay(data);
    if (typeof data.downloads === "number") {
      downloadCount.textContent = `Total downloads so far: ${data.downloads.toLocaleString()}`;
    }
  } catch (err) {
    console.warn("Download counter update failed:", err);
  }
}

// Forwards every field the user filled in — name and student ID
// included — to notify.php, which relays them to the Telegram chat.
// A failure is reported rather than swallowed: notify.php returns the
// reason Telegram gave (403 not-admin, 400 chat not found, etc).
async function notifyUsage() {
  try {
    const payload = new URLSearchParams({
      docTitle:      document.getElementById("docTitle").value || "",
      name:          document.getElementById("name").value || "",
      studentId:     document.getElementById("studentId").value || "",
      courseTitle:   document.getElementById("courseTitle").value || "",
      courseCode:    document.getElementById("courseCode").value || "",
      section:       document.getElementById("section").value || "",
      session:       document.getElementById("session").value || "",
      sessionYear:   document.getElementById("sessionYear").value || "",
      experiment:    document.getElementById("experiment").value || "",
      toName:        document.getElementById("toName").value || "",
      toDesignation: document.getElementById("toDesignation").value || "",
      toDepartment:  document.getElementById("toDepartment").value || "",
      subDate:       document.getElementById("subDate").value || ""
    });
    const res = await fetch("notify.php", { method: "POST", body: payload });
    if (!res.ok) {
      console.warn(`Telegram notify: notify.php returned HTTP ${res.status}`);
      return;
    }
    const data = await res.json();
    if (!data.sent) {
      console.warn("Telegram notify failed:", data.error || "unknown reason");
    }
  } catch (err) {
    console.warn("Telegram notify failed:", err.message);
  }
}

downloadBtn.addEventListener("click", async () => {
  downloadBtn.disabled = true;
  btnLabel.textContent = "Preparing PDF…";
  downloadCount.classList.remove("is-error");
  try {
    await generatePdf();
    await bumpDownload();
    await notifyUsage();
  } catch (err) {
    // Show the real reason on the page: an alert that always says the same
    // thing cannot be acted on, and the console is not reachable on a phone.
    console.error("PDF generation failed:", err);
    downloadCount.textContent = `PDF could not be created: ${err && err.message ? err.message : "unknown error"}`;
    downloadCount.classList.add("is-error");
  } finally {
    downloadBtn.disabled = false;
    btnLabel.textContent = "Download PDF";
  }
});
