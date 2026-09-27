# Bangladesh Unfolded

**A visual catalogue of 100 historic and traditional heritage sites across all eight divisions of Bangladesh.**

From old mosques, temples and Buddhist monasteries to palaces, forts, literary homes and memorial landmarks, *Bangladesh Unfolded* is a living record of the country's architecture, memory and traditions — built as a dependency-free static website that runs by opening a single file in a browser.

---

## Overview

| | |
|---|---|
| **Sites** | 100 |
| **Divisions covered** | 8 (all) |
| **Photographs** | 100, stored locally |
| **Dependencies** | None |
| **Build step** | None |
| **Runs from** | `file://` — no server required |

The site is plain HTML, CSS and JavaScript. There is no framework, no bundler, no package manager and no network call at runtime, so it works offline and can be hosted on any static host (GitHub Pages, Netlify, Cloudflare Pages, or a plain folder).

---

## The catalogue

The 100 sites are distributed across the eight divisions exactly as they were supplied:

| Division | Sites |
|---|---|
| Dhaka | 20 |
| Rajshahi | 20 |
| Rangpur | 10 |
| Khulna | 15 |
| Chattogram | 15 |
| Barisal | 10 |
| Sylhet | 5 |
| Mymensingh | 5 |
| **Total** | **100** |

Every site is also tagged by type. Tags overlap, so a single site can appear under more than one category:

| Type | Sites |
|---|---|
| Heritage | 100 |
| Architecture | 77 |
| Religious | 40 |
| Culture | 9 |
| Museum | 9 |
| Nature | 2 |
| Memorial | 2 |

---

## Features

- **100 illustrated cards** — every site has a locally stored photograph.
- **Live search** across site names, locations, summaries and tags.
- **Combined filters** — narrow by division, by type, or both at once.
- **Detail dialog** per site, with description, season, access notes, tags and full photo credit.
- **Photo credits dialog** — a full 100-entry ledger of authors, sources and licences, generated from the same data that drives the cards.
- **Travel notes section** with practical guidance for planning a heritage route.
- **Responsive layout** — three columns on desktop, two on tablet, one on mobile.
- **Accessible by construction** — semantic landmarks, a skip link, labelled form controls, keyboard-operable dialogs, visible focus states and `prefers-reduced-motion` support.
- **Safe DOM rendering** — all data is inserted with `textContent`; no `innerHTML` is used for site content.

---

## Getting started

There is nothing to install. Open the site:

```
index.html
```

Or serve the folder, if you prefer a real origin:

```powershell
# PowerShell, from the project folder
python -m http.server 8000
# then visit http://localhost:8000
```

### Project structure

```
.
├── index.html                    # Page shell: header, hero, filters, grid, dialogs, footer
├── styles.css                    # All styling, responsive rules and reduced-motion support
├── script.js                     # Site data, image metadata, rendering, filters, dialogs
├── v1/                           # Mobile edition — same data and images, phone-style layout
│   ├── index.html                #   App shell: app bar, chip filters, tab bar, bottom sheets
│   ├── styles.css                #   Phone frame, single-column list, phone-style controls
│   ├── app.js                    #   Same site data and image metadata as script.js
│   └── mobile.js                 #   Mobile-only layer: chip filters, tab state, sheet metrics
├── v1/                           # Mobile edition — same data and images, phone-style layout
│   ├── index.html                #   App shell: app bar, chip filters, tab bar, bottom sheets
│   ├── styles.css                #   Phone frame, single-column list, native-feeling controls
│   ├── app.js                    #   Same site data and image metadata as script.js
│   └── mobile.js                 #   Mobile-only layer: chip filters, tab state, sheet metrics
├── images/                       # Local copies of every photograph used by the site
│   └── ATTRIBUTION.md            # Per-image source, author, licence and modification ledger
├── commons_search.ps1            # Research helper: search Wikimedia Commons for site photos
├── commons_info.ps1              # Research helper: fetch exact author/licence metadata
└── commons_bangladesh_sites.jsonl# Research output: candidate files per site
```

All site content lives in `script.js` as a compact row array, with image metadata held in a separate `EXACT_IMAGES` map keyed by each site's generated slug. Adding a site means adding one row; adding a photograph means adding one object to that map.

---

## Two editions

The project ships the same 100-site catalogue in two layouts.

**The main site** (root) is the editorial, desktop-first version: a wide hero, select-based filters and a responsive 3 / 2 / 1 column grid.

**The mobile edition** (`v1/`) presents the identical data and the identical photographs as a phone app. It is mobile-first, so it uses the full screen on a real handset; on a desktop browser it renders inside a phone frame so you can preview it as it appears on a handset. Its differences are all presentational:

- a sticky app bar and a single-column card list;
- horizontally scrolling **chip filters** instead of dropdowns (the selects are kept in the markup and drive the same logic, so filtering behaviour is identical);
- a fixed bottom tab bar for Sites / Travel / Credits;
- site details and photo credits open as **bottom sheets** rather than centred dialogs;
- it reuses `../images/`, so no photograph is duplicated on disk.

`v1/app.js` is a copy of `script.js` with the image paths rewritten to `../images/`, and `v1/mobile.js` adds the mobile-only behaviour. Both pass `deno check`.

To publish only one edition, deploy the root as-is, or point your static host at `v1/` for the phone version.

---

## Images and attribution

**Every photograph is stored locally in `images/`.** None are hot-linked, and the site makes no external requests at runtime.

All 100 photographs come from **Wikimedia Commons** and are used under free licences — CC BY, CC BY-SA, CC0, or public domain. `images/ATTRIBUTION.md` lists, for every file:

- the local filename,
- the heritage site it illustrates,
- the original Commons file title and page,
- the author,
- the licence,
- and the modification applied (a width-limited local derivative).

The same information is exposed in the UI: each card's detail dialog and the global **Photo credits** dialog both link back to the original Commons page and name the author and licence. If you reuse this site or its images, please keep that attribution intact — CC BY and CC BY-SA require it.

### Representative images

For a small number of sites, no photograph of the exact monument could be verified on Commons. In those cases the site uses a clearly labelled **representative** image of a related place — for example a wetland for a wetland museum, or a nearby heritage building of the same type and district.

These are never presented as the real site. Each one is marked in three places:

1. the image `alt` text says it is a representative image,
2. the card's detail credit and the credits dialog show an amber **"Representative photo"** badge explaining the substitution,
3. the `images/ATTRIBUTION.md` ledger records it in the modification column.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a skip link to the main content.
- Every control is a real, labelled form element; dialogs are native `<dialog>` elements, so focus trapping and `Esc` handling come from the browser.
- Images carry descriptive `alt` text and explicit `width`/`height`, which prevents layout shift while images load.
- Focus indicators are visible and never removed without a replacement.
- Animation is reduced to near-zero when the user has `prefers-reduced-motion` set.
- Colours are chosen to keep body text and links above WCAG AA contrast.

---

## Browser support

Tested and working in current Chrome, Edge, Firefox and Safari. The site uses `dialog`, CSS custom properties, and `IntersectionObserver`-free plain JavaScript, all of which are widely supported. JavaScript syntax is checked with `deno check script.js`.

Rendering and responsive behaviour were verified in headless Chrome at desktop width and inside a fixed 390 px mobile viewport, asserting document width, grid column count and card geometry.

---

## Research tooling

The three auxiliary files in the project root are the PowerShell helpers used to find and verify the photographs. They talk to the Wikimedia Commons API with a descriptive user agent, exponential backoff and deliberate request spacing, because the API rate-limits aggressive scrapes.

```powershell
# Find candidate files for a set of sites (pipe-separated)
.\commons_search.ps1 -Sites "Lalbagh Fort|Kantajew Temple"

# Get exact author, licence and thumbnail URL for specific file titles
.\commons_info.ps1 -Titles "File:Chhota Katra Gate.jpg" -Width 1200
```

They are not required to view or run the site — they are kept so the image set can be re-verified or extended later.

---

## Data sources

- Site list: supplied catalogue of 100 heritage places, grouped by the eight divisions.
- Photographs: Wikimedia Commons, per-image metadata recorded in `images/ATTRIBUTION.md`.
- Site summaries are written for this project as short descriptive catalogue entries.

---

## Licence

**Photographs** are *not* covered by a single project licence. Each image keeps its original Wikimedia Commons licence — CC BY, CC BY-SA, CC0 or public domain — and the per-image terms are listed in [`images/ATTRIBUTION.md`](images/ATTRIBUTION.md). Attribution to the original authors is required for the CC BY and CC BY-SA images.

**Source code** (`index.html`, `styles.css`, `script.js` and the PowerShell helpers) has no licence file yet. Add one — MIT or anything else you prefer — before publishing, so visitors know what they are allowed to do with the code.

---

## Acknowledgements

- All photographs remain the work of their respective authors, made available through [Wikimedia Commons](https://commons.wikimedia.org/).
- The heritage site list reflects the country's eight administrative divisions and the monuments, memorials and traditional buildings within them.

---

*If you find a site whose photograph turns out to be wrong or mislabelled, please open an issue — corrections are very welcome, and representative images can be replaced with verified ones as they become available.*
