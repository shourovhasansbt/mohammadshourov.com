/* Mobile-edition UI layer: chip filters, tab state, smooth in-screen scrolling.
   Wrapped in an IIFE because app.js already declares these names globally. */

(function () {
  const divisionFilter = document.getElementById("division-filter");
  const categoryFilter = document.getElementById("category-filter");
  const divisionChipRow = document.getElementById("division-chips");
  const categoryChipRow = document.getElementById("category-chips");
  const clearButton = document.getElementById("reset-filters");
  const emptyReset = document.getElementById("empty-reset");
  const searchInput = document.getElementById("search-input");
  const screenScroll = document.getElementById("screen-scroll");
  const planSection = document.getElementById("plan");
  const tabLinks = Array.from(document.querySelectorAll(".tab"));

  if (!divisionFilter || !categoryFilter || !divisionChipRow || !categoryChipRow) return;

  function buildChipRow(select, row) {
    const chips = [];
    for (const option of select.options) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.textContent = option.value === "" ? "All" : option.textContent;
      chip.dataset.value = option.value;
      chip.setAttribute("aria-pressed", String(option.value === ""));
      chip.addEventListener("click", () => {
        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      });
      chips.push(chip);
      row.append(chip);
    }
    return chips;
  }

  const divisionChips = buildChipRow(divisionFilter, divisionChipRow);
  const categoryChips = buildChipRow(categoryFilter, categoryChipRow);

  function syncChips() {
    const pairs = [[divisionFilter, divisionChips], [categoryFilter, categoryChips]];
    for (const [select, chips] of pairs) {
      for (const chip of chips) {
        const active = chip.dataset.value === select.value;
        chip.classList.toggle("is-active", active);
        chip.setAttribute("aria-pressed", String(active));
      }
    }
  }

  for (const control of [divisionFilter, categoryFilter, searchInput]) {
    control.addEventListener("input", syncChips);
    control.addEventListener("change", syncChips);
  }
  if (clearButton) clearButton.addEventListener("click", () => setTimeout(syncChips, 0));
  if (emptyReset) emptyReset.addEventListener("click", () => setTimeout(syncChips, 0));
  syncChips();

  for (const link of tabLinks) {
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href");
      if (!target || target.charAt(0) !== "#") return;
      const section = document.querySelector(target);
      if (!section) return;
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(syncActiveTab, 450);
    });
  }

  const directorySection = document.getElementById("destinations");
  const filterPanel = document.getElementById("filter-form");

  function syncActiveTab() {
    if (!screenScroll) return;
    const viewTop = screenScroll.getBoundingClientRect().top;
    const threshold = viewTop + screenScroll.clientHeight * 0.45;
    let travelled;
    if (directorySection) travelled = directorySection.getBoundingClientRect().bottom < threshold;
    else travelled = planSection.getBoundingClientRect().top < threshold;
    for (const link of tabLinks) {
      const href = link.getAttribute("href") || "";
      if (href.charAt(0) !== "#") continue;
      link.classList.toggle("is-active", (href === "#plan") === travelled);
    }
    if (filterPanel) filterPanel.classList.toggle("is-detached", travelled);
  }

  if (screenScroll && planSection) {
    screenScroll.addEventListener("scroll", syncActiveTab, { passive: true });
    syncActiveTab();
  }

  /* Native dialogs render in the top layer, so they are positioned against the
     browser viewport rather than the phone frame. Measure the screen instead. */
  const screenEl = document.querySelector(".screen");
  const sheets = Array.from(document.querySelectorAll(".sheet"));

  function syncSheetMetrics() {
    if (!screenEl) return;
    const rect = screenEl.getBoundingClientRect();
    const style = document.documentElement.style;
    style.setProperty("--sheet-bottom", Math.max(0, Math.round(window.innerHeight - rect.bottom)) + "px");
    style.setProperty("--sheet-width", Math.round(rect.width) + "px");
    style.setProperty("--sheet-height", Math.round(rect.height * 0.92) + "px");
  }

  for (const sheet of sheets) {
    sheet.addEventListener("beforetoggle", syncSheetMetrics);
  }
  window.addEventListener("resize", syncSheetMetrics);
  window.addEventListener("orientationchange", syncSheetMetrics);
  syncSheetMetrics();
})();
