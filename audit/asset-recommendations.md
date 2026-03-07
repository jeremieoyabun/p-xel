# Asset Recommendations - p-xel.be

## Classification

### REUSE DIRECTLY (16 assets)

These assets are production-quality, on-brand, and serve the new positioning without modification.

**P-XEL Logo (SVG)**
- File: P-XEL-STUDIO_LOGO.svg
- Why: Core identity. Vector format. Scales perfectly. Decision: logo is kept.
- Target: `/public/legacy-assets/logos/`

**Portfolio project images - card/cover format (6 files)**
- Greenmood_slide-front-1024x1024.webp
- HOPSCOTCH-1024x1024.webp
- Oyabun_slide-1024x1024.webp
- Arduenna-Gin-1024x1024.webp
- Kokoro_front-1024x1024.webp
- PCF-01-1024x1024.webp
- Why: Clean, on-brand project covers. WebP format. Work for portfolio grid and case study hero.
- Target: `/public/legacy-assets/images/portfolio/`

**Client logos (9 files)**
- Greenmood, Arduenna, ND, Kalibre, Modular, Kokoro, Globodai, DO, PN3DLG
- Why: Trust bar essentials. Social proof. Already in WebP (except Greenmood in PNG).
- Target: `/public/legacy-assets/logos/clients/`

---

### UPDATE (14 assets)

These assets have value but need conversion, resizing, or reworking before use.

**P-XEL footer logo (PNG -> SVG)**
- File: P-XEL-STUDIO_LOGO-V2.png
- Action: Replace with SVG version or derive from main logo SVG. Raster logos are not acceptable for a premium Next.js build.
- Target: `/public/legacy-assets/logos/`

**P-XEL social/OG image (JPG -> redesign)**
- File: P-xel_social.jpg (1080x1080)
- Action: Redesign to match new positioning. Current one is generic. Each page type should have its own OG template. Create 1200x630 format for proper social preview.
- Target: generate new, do not reuse this file

**Portfolio detail images (13 files)**
- Greenmood: _01, _02a
- Hopscotch: slide-1, slide-02
- Oyabun: _02, _web, _03, STREET-FURY
- Arduenna: _01, _02, _03
- Kokoro: _02
- PCF: _02
- Action: Download at highest available resolution (not the 1024px WordPress crops). These will be used in full case study pages where quality matters. Verify aspect ratios work for the new layout system. May need re-cropping for consistent grid.
- Target: `/public/legacy-assets/images/portfolio/`

**Blog thumbnails - PNG files (2 files)**
- Article_Web-1024x1024.png
- Article_UX-UI-1024x1024.png
- Action: Convert to WebP. The other 3 thumbnails are already WebP. These two are unnecessarily heavy as PNG.
- Target: `/public/legacy-assets/images/blog/`

**Greenmood client logo (PNG -> WebP/SVG)**
- File: Logo_Greenmood-1024x302.png
- Action: Convert to WebP or request SVG from client. Only client logo still in PNG. Inconsistent with the rest.
- Target: `/public/legacy-assets/logos/clients/`

---

### ARCHIVE (8 assets)

Worth keeping for reference but should not ship in the new build.

**Blog hero images (2 files)**
- Article-large_UI.webp (1643x638)
- Article-large_AI.webp (1643x638)
- Why archive: Odd dimensions (1643px wide). May not fit new layout grid. Keep as reference for art direction but plan to create new hero images in a consistent format.

**Blog thumbnails - WebP (3 files)**
- Article-Design-system-1024x1024.webp
- Articles-AI-1024x1024.webp
- Articles-No-code-1024x1024.webp
- Why archive: Usable as-is but likely need redesign to match new brand system and typography. Keep as reference for style continuity. If the new blog design uses the same square format, these can be promoted back to "reuse directly."

**Decorative ellipses (2 files)**
- Ellipse-03.webp
- Ellipse-02b-155x300.webp
- Why archive: The blurred circle motif is worth keeping conceptually, but these specific raster files are too tied to the Elementor layout. In Next.js, recreate these as CSS/SVG effects for better performance and flexibility.

**Background fallback (1 file)**
- BG_fallback.webp
- Why archive: Tied to the WordPress lazy-load fallback pattern. In Next.js, handle dark backgrounds with CSS. Keep for color/texture reference only.

---

### IGNORE (6 assets)

No value for the rebuild. Do not download.

**UI icons from old site (3 files)**
- Menu3.svg (hamburger menu icon)
- Close2.png (modal close icon)
- close-icon.svg (Calendly modal close)
- Why: Generic UI elements. The new build will use a proper icon system (Lucide, Phosphor, or custom). These are Elementor/WordPress artifacts.

**Calendly external assets**
- /assets/external/close-icon.svg
- Why: Hosted by Calendly. Not our asset. Loaded dynamically.

**WP Rocket assets**
- youtube.png (lazy-load play button placeholder)
- Why: Plugin artifact. Irrelevant to Next.js build.

**Elementor header/footer templates**
- elementor-hf-sitemap.xml
- Why: CMS artifact. No value.

---

## Download Priority

### Immediate (before any design work)

```
# 1. P-XEL logo
curl -o public/legacy-assets/logos/p-xel-studio-logo.svg "https://p-xel.be/wp-content/uploads/2025/04/P-XEL-STUDIO_LOGO.svg"

# 2. Portfolio covers (6 files)
curl -o public/legacy-assets/images/portfolio/greenmood-cover.webp "https://p-xel.be/wp-content/uploads/2025/11/Greenmood_slide-front-1024x1024.webp"
curl -o public/legacy-assets/images/portfolio/hopscotch-cover.webp "https://p-xel.be/wp-content/uploads/2025/11/HOPSCOTCH-1024x1024.webp"
curl -o public/legacy-assets/images/portfolio/oyabun-cover.webp "https://p-xel.be/wp-content/uploads/2025/11/Oyabun_slide-1024x1024.webp"
curl -o public/legacy-assets/images/portfolio/arduenna-cover.webp "https://p-xel.be/wp-content/uploads/2025/11/Arduenna-Gin-1024x1024.webp"
curl -o public/legacy-assets/images/portfolio/kokoro-cover.webp "https://p-xel.be/wp-content/uploads/2025/11/Kokoro_front-1024x1024.webp"
curl -o public/legacy-assets/images/portfolio/pcf-cover.webp "https://p-xel.be/wp-content/uploads/2025/11/PCF-01-1024x1024.webp"

# 3. Client logos (9 files)
curl -o public/legacy-assets/logos/clients/greenmood.png "https://p-xel.be/wp-content/uploads/2025/11/Logo_Greenmood-1024x302.png"
curl -o public/legacy-assets/logos/clients/arduenna.webp "https://p-xel.be/wp-content/uploads/2025/04/Arduenna-Logo-01.webp"
curl -o public/legacy-assets/logos/clients/nd.webp "https://p-xel.be/wp-content/uploads/2025/04/ND_Logo-1024x377.webp"
curl -o public/legacy-assets/logos/clients/kalibre.webp "https://p-xel.be/wp-content/uploads/2025/04/KALIBRE_logo-1024x377.webp"
curl -o public/legacy-assets/logos/clients/modular.webp "https://p-xel.be/wp-content/uploads/2025/04/Modular-logo-1024x377.webp"
curl -o public/legacy-assets/logos/clients/kokoro.webp "https://p-xel.be/wp-content/uploads/2025/04/Kokoro-logo-1024x934.webp"
curl -o public/legacy-assets/logos/clients/globodai.webp "https://p-xel.be/wp-content/uploads/2025/04/Globodai-b-1024x377.webp"
curl -o public/legacy-assets/logos/clients/do.webp "https://p-xel.be/wp-content/uploads/2025/12/DO-Logo.webp"
curl -o public/legacy-assets/logos/clients/pn3dlg.webp "https://p-xel.be/wp-content/uploads/2025/12/PN3DLG_Logo.webp"
```

### Before case study pages (13 detail images)

Download portfolio detail images at full resolution (remove the `-1024x1024` suffix from URLs to try fetching originals).

### Before blog migration (5 thumbnails)

Download and convert the 2 PNG thumbnails to WebP.

---

## Folder Structure (Target)

```
public/legacy-assets/
  logos/
    p-xel-studio-logo.svg
    p-xel-studio-logo-v2.png    (update to SVG)
    clients/
      greenmood.png              (update to WebP/SVG)
      arduenna.webp
      nd.webp
      kalibre.webp
      modular.webp
      kokoro.webp
      globodai.webp
      do.webp
      pn3dlg.webp
  images/
    portfolio/
      greenmood-cover.webp
      greenmood-01.webp
      greenmood-02.webp
      hopscotch-cover.webp
      hopscotch-01.webp
      hopscotch-02.webp
      oyabun-cover.webp
      oyabun-01.webp
      oyabun-02.webp
      oyabun-03.webp
      oyabun-street-fury.webp
      arduenna-cover.webp
      arduenna-01.webp
      arduenna-02.webp
      arduenna-03.webp
      kokoro-cover.webp
      kokoro-01.webp
      pcf-cover.webp
      pcf-01.webp
    blog/
      article-web.webp           (convert from PNG)
      article-ux-ui.webp         (convert from PNG)
      article-design-system.webp
      article-ai.webp
      article-no-code.webp
  icons/                         (empty - new icon system in build phase)
  screenshots/                   (empty - populate during build for case studies)
  videos/                        (empty - populate if video content is created)
```

---

## Key Decisions

1. **All raster logos must become SVG or WebP** - no PNG logos in the final build
2. **Portfolio images use kebab-case naming** - consistent, URL-friendly, no WordPress suffixes
3. **Decorative effects move to CSS/SVG** - no raster blurs or ellipses shipped as images
4. **OG images are regenerated** - one per page type, 1200x630, matching new brand
5. **UI icons come from a system** - not individual legacy files
6. **Blog thumbnails follow one format** - all WebP, all same dimensions, consistent style
