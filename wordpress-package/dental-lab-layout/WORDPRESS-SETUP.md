# Dental Lab Room Planner — WordPress setup

This package is a **static web app** (HTML, CSS, JavaScript). It does not need PHP or a database. You upload the files to your site and embed the planner on any WordPress page.

---

## What is in the ZIP?

After extracting, you should see:

- `index.html` — main entry point
- `assets/` — app scripts and styles
- `equipment/` — equipment images
- `lab-hero.svg` — header artwork
- `WORDPRESS-SETUP.md` — this file

---

## Step 1 — Upload files

### Option A — Media / uploads folder (simple)

1. Log in to **WordPress Admin**.
2. Open **Plugins → Plugin File Editor** is **not** required.
3. Use **FTP**, **SFTP**, or your host’s **File Manager** (cPanel, Plesk, etc.).
4. Go to:  
   `wp-content/uploads/dental-lab-layout/`
5. Create the folder `dental-lab-layout` if it does not exist.
6. Upload **all** files from the ZIP into that folder (including `index.html`, `assets`, `equipment`).

Your planner URL will be:

`https://YOUR-DOMAIN.com/wp-content/uploads/dental-lab-layout/index.html`

Replace `YOUR-DOMAIN.com` with your real site address.

### Option B — Subfolder at site root (cleaner URL)

1. Create a folder on the server, for example:  
   `public_html/lab-planner/` (exact path depends on your host).
2. Upload all ZIP contents there.

URL example:

`https://YOUR-DOMAIN.com/lab-planner/index.html`

---

## Step 2 — Test the upload

1. Open the planner URL in your browser (see above).
2. You should see the catalog, floor plan, and quote panel.
3. Add a mill or furnace, drag it, then click **Finalize & get quote**.

If the page is blank or has no styling, see **Troubleshooting** below.

---

## Step 3 — Embed on a WordPress page

### Method 1 — Custom HTML block (recommended)

1. **Pages → Add New** (or edit an existing page).
2. Add a **Custom HTML** block (or “HTML” in the block inserter).
3. Paste this code (change the URL to match where you uploaded files):

```html
<div class="dental-lab-planner-wrap" style="width:100%;max-width:100%;margin:0 auto;">
  <iframe
    src="https://YOUR-DOMAIN.com/wp-content/uploads/dental-lab-layout/index.html"
    title="Dental Lab Room Planner"
    width="100%"
    height="920"
    style="border:0;display:block;min-height:85vh;width:100%;"
    loading="lazy"
    allow="clipboard-write"
  ></iframe>
</div>
```

4. Publish the page.
5. View the page on the front end — the planner runs inside the iframe.

**Tip:** Use a **full-width** page template (theme-dependent names: “Full Width”, “Canvas”, “Elementor Full Width”) so the iframe can use the full screen.

### Method 2 — Classic editor / shortcode plugin

If you use a plugin such as **Insert HTML Snippet** or **Shortcodes Ultimate**, create a shortcode that outputs the same `<iframe>` code as above.

### Method 3 — Link instead of embed

Add a menu item or button that opens the planner in a new tab:

`https://YOUR-DOMAIN.com/wp-content/uploads/dental-lab-layout/index.html`

No iframe needed; the app uses the full browser window (good for mobile).

---

## Step 4 — Optional WordPress tweaks

| Goal | What to do |
|------|------------|
| Full-width page | Theme: Page template → Full width. Or page builder → stretch section to 100%. |
| Hide title on planner page | Page settings → hide title (theme/plugin dependent). |
| SEO | Set page title e.g. “Lab layout planner”; the iframe content is not indexed as separate SEO — that is normal. |
| HTTPS | Site and iframe `src` must both use `https://` if your site uses SSL. |

---

## Troubleshooting

### Blank page or broken layout

- Confirm `index.html` and the `assets` folder are in the **same** directory.
- Open browser **Developer Tools → Network** and check for 404 errors on `.js` or `.css` files.
- Re-upload the full ZIP; do not upload only `index.html`.

### iframe shows “refused to connect”

- Some security plugins block iframes. In **Wordfence**, **iThemes**, etc., allow your own domain to embed `/wp-content/uploads/`.
- Ensure the `src` URL is correct and loads when opened directly in a new tab.

### Planner is too short on mobile

Increase iframe height in the HTML, e.g. `height="1100"` or `min-height:95vh`.

### Download screenshot / quote does not work in iframe

Browsers usually still allow downloads from same-origin iframes. If blocked, use **Method 3** (open planner in its own tab) for finalize/export.

---

## Updating later

1. Build or obtain a new ZIP from the developer.
2. Delete old files in `dental-lab-layout` (or back them up).
3. Upload the new files.
4. Hard-refresh the page (Ctrl+F5) or clear cache (LiteSpeed, WP Rocket, Cloudflare, etc.).

---

## Changing prices or equipment

The uploaded package is **compiled** — you cannot edit prices in WordPress without rebuilding the app from source (`src/data/equipment.ts`) and creating a new ZIP.

For custom product photos: replace files in the `equipment` folder (same filename, e.g. `wet-mill.jpg`) and clear cache.

---

## Support checklist

- [ ] Files uploaded to one folder with `index.html` at the top level  
- [ ] Direct URL opens the planner correctly  
- [ ] WordPress page uses correct iframe `src` (https, correct path)  
- [ ] Full-width template applied if needed  
- [ ] Cache cleared after upload  

---

**Project:** Dental Lab Room Planner  
**Version:** 1.0 (static build for WordPress)
