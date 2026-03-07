# Perspectives - Legacy Image Inventory

## Source location
All legacy article images are in `/public/legacy-assets/images/`

## Hero / Large images (used as article banners)

| File | Format | Mapped article | Quality | Reuse? |
|------|--------|---------------|---------|--------|
| Article-large_Web-design.webp | WebP | combien-coute-un-site-web-en-2026 | Good - dark geometric composition | Yes |
| Article-large_Digitalisation.webp | WebP | aides-digitalisation | Good - abstract digital pattern | Yes |
| Article-large_AI.webp | WebP | ia-pour-les-designers | Good - AI-themed visual | Yes |
| Article-large_Code.webp | WebP | no-code | Good - code/tech visual | Yes |
| Article-large_design-system.webp | WebP | pourquoi-un-design-system | Good - design system illustration | Yes |
| Article-large_UI.webp | WebP | tendances-ux-ui-2026 | Good - UI-themed visual | Yes - only if article is kept |

## Thumbnail images

| File | Format | Mapped article | Quality | Reuse? |
|------|--------|---------------|---------|--------|
| Articles-AI.webp | WebP | ia-pour-les-designers | Good | Yes - card thumbnails |
| Articles-Design-system.webp | WebP | pourquoi-un-design-system | Good | Yes - card thumbnails |
| Articles-Digitalisation.webp | WebP | aides-digitalisation | Good | Yes - card thumbnails |
| Articles-No-code.webp | WebP | no-code | Good | Yes - card thumbnails |

## PNG variants

| File | Format | Mapped article | Notes |
|------|--------|---------------|-------|
| Article_UX-UI.png | PNG | tendances-ux-ui-2026 | Duplicate of WebP version, heavier. Skip. |
| Article_Web.png | PNG | combien-coute-un-site-web-en-2026 | Duplicate of WebP version, heavier. Skip. |

## Coverage gaps

- **combien-coute-un-site-web** has hero (WebP) but no dedicated thumbnail WebP. Use hero with Next.js Image resize.
- **tendances-ux-ui-2026** has hero (WebP) but no dedicated thumbnail WebP. Same approach.
- PNG versions are redundant. Use WebP exclusively for performance.

## Recommendations

1. Use WebP hero images as-is for article pages
2. Generate thumbnails from hero images via Next.js `<Image>` with `sizes` prop for the /perspectives/ index grid
3. Do not use PNG variants - WebP is smaller and already available
4. If an article is cut (tendances-ux-ui-2026 is the weakest candidate), its images can be archived
5. Add `alt` text per article during build - current legacy images have generic or missing alt attributes
