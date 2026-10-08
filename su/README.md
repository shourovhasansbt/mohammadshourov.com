# Assignment Cover Page Generator

A small static site (HTML/CSS/JS) that lets a student fill a form and download
a print-ready cover page PDF, styled after the Sonargaon University Lab
Report cover page. Every successful download is logged by `counter.php`.

## Folder structure

```
assinment-cover/          <- upload this whole folder to your Azure site
├── index.html
├── style.css
├── script.js
├── js/
│   ├── html2canvas.min.js   <- REQUIRED for PDF download
│   └── jspdf.umd.min.js     <- REQUIRED for PDF download
├── counter.php
├── notify.php             <- REQUIRED for Telegram; omitting it makes
│                             notify.php 404 and the message silently vanish
├── counter_data.json      <- auto-created/updated, stores the download count
└── img/
    └── sulogo.png          (700 × 800 university logo)
```

## How it works

- `index.html` — the form (left) and a live cover-page preview (right).
- `script.js` — updates the preview as you type, then on **Download PDF**:
  1. Pins `#cover-page` to exactly 794 × 1123 px (A4 at 96 dpi) and renders
     it to an image with `html2canvas`.
  2. Places it on an A4 page with `jsPDF` and triggers the download.
  3. Sends a `POST` to `counter.php` to bump the download counter.
  4. Sends a `POST` to `notify.php`, which forwards the filled-in details to
     a Telegram chat.
- `counter.php` — reads/writes `counter_data.json` with a file lock so
  concurrent downloads don't overwrite each other's count. It returns
  `{"views": N, "downloads": N}` as JSON. You can check the current totals any
  time by visiting `counter.php` in a browser (GET request, no increment).
- `notify.php` — allow-lists the fields it forwards to Telegram. Every field
  in the form is included, **student name and student ID included**.

`html2canvas` and `jsPDF` are served from the local `js/` folder, so the PDF
feature does not depend on a third party being reachable. If `js/` was not
uploaded, `index.html` falls back to the CDN automatically. No build step and no
npm install is needed either way.

If a PDF still cannot be produced, the reason is now printed under the Download
button in red instead of a generic alert — read it, it names the actual cause
(usually the library failing to load).

### Telegram troubleshooting

Verified working configuration for this deployment: chat id `-1003940246865`
resolves to the **channel** `Sonargoan University`, and the bot
`@Sonargaon_University_Bot` is an **administrator** with `can_post_messages`.

Three things must all hold, and when one fails the message disappears silently:

1. `notify.php` must be uploaded next to `index.html` — a 404 there is silent.
2. PHP must have the **curl** extension. `notify.php` calls `curl_init()`; if
   the extension is missing you get a fatal error. It is enabled by default on
   Azure App Service, but not on every PHP build (a plain Windows PHP zip, for
   instance, ships without it).
3. The bot must be a channel administrator with post rights.

To see why a send failed, open the browser console (F12) and click Download
once. `script.js` logs `Telegram notify failed: <Telegram's own reason>` — that
reason is the answer, e.g. `bot is not a member of the channel chat`,
`chat not found`, or `message is too long`.

### Windows PHP note (only if you test locally)

A bare Windows PHP build has no `php.ini`, so `curl_init()` is undefined and,
if `curl.cainfo` is unset, HTTPS fails with
`SSL certificate verify result: self-signed certificate in certificate chain`.
Enable `curl` in `php.ini` and point `curl.cainfo` at a `cacert.pem`. Azure is
unaffected.

## Cover templates

The **Cover Design** picker at the top of the form shows all four templates at
once, as clickable cards with a miniature of each layout — a dropdown would hide
the fact that there are four choices. Each design is a different international
A4 layout, and each renders into the exact same fixed A4 frame, so every PDF is
one full page no matter which card is picked.

| # | Name              | Look                                            |
|---|-------------------|-------------------------------------------------|
| 1 | Classic Lab Report| Original bordered "submitted by / to" table      |
| 2 | Centered Academic| Everything centred, ruled headings               |
| 3 | Modern Sidebar    | Navy vertical sidebar, label/value rows           |
| 4 | Formal Frame      | Double-line page border, formal two-column block  |

Picking a card is a radio button in the `#cover-form` group `tplChoice`; the
`value` is the template number and **must match the `.tpl-N` class name** — if it
does not, no template matches and the preview goes blank (that bug shipped once
already; `applyTemplate()` now falls back to the first template so the page can
never render empty).

All four templates share one set of `data-pv="…"` hooks, so `updatePreview()`
fills all four in a single pass and switching designs keeps every value intact.

To add a template: copy an existing `.tpl-N` block in `index.html`, give it
`class="tpl tpl-N"`, add a matching radio + card in `.tpl-picker` whose
`value` is `N`, and add a `.tpl-N` rule in `style.css`. No JS change needed.

## Deploying via Kudu (Azure App Service)

1. Make sure your App Service has **PHP** enabled (Configuration → General
   settings → Stack settings → PHP version), since `counter.php` needs a PHP
   runtime.
2. Open the Kudu dashboard: `https://<your-app-name>.scm.azurewebsites.net`.
3. Go to **Debug console → CMD** (or Bash) and navigate to `site/wwwroot`.
4. Drag-and-drop the entire `assinment-cover` folder onto the Kudu file
   listing (or use **Zip Push Deploy** with a zipped copy of this folder).
5. Confirm the final path is `site/wwwroot/assinment-cover/...` — i.e. the
   `img` folder and `counter.php` sit directly inside `assinment-cover`.
6. Visit `https://<your-app-name>.azurewebsites.net/assinment-cover/` to use
   the generator.
7. The first download will auto-create `counter_data.json` if it isn't
   already there. Make sure the app's file system allows writes (App Service
   local storage is writable by default — no extra config needed).

## Customizing

- **Logo**: replace `img/sulogo.png` (keep it roughly 700×800 for crisp
  print quality; transparent background recommended).
- **University name / colors**: edit the `.cp-university` text in
  `index.html` and the `--blue` / `--navy` variables at the top of
  `style.css`.
- **Extra fields**: add an `<input>` in the form, a `<span data-pv="yourKey">`
  in **every** `.tpl-N` block in `index.html`, and one entry in the object
  returned by `collectValues()` in `script.js`.
- **Telegram**: `notify.php` holds the bot token and chat ID as plain
  constants near the top. Move them to an environment variable or Azure App
  Settings before deploying, and treat the bot token as a secret — anyone with
  it can post to your channel.
- **Session**: the semester dropdown (Spring/Summer/Fall) is combined with
  the current year automatically — the year field is read-only and always
  reflects `new Date().getFullYear()`, so it never needs manual updating.
- **Designation**: defaults to "Assignment Teacher" but stays editable.
- **Experiment / Project Name**: a dedicated field shown as its own line on
  the cover page, right under the document title (useful for lab reports
  or project submissions).
- **Signatures**: "Signature of Student" and "Signature of Teacher" lines
  are pinned to the bottom of the printed page automatically.
