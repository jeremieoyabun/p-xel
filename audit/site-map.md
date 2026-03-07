# Site Map - p-xel.be

## Overview

- Platform: WordPress + Elementor
- Total indexed pages: 14 (from sitemap_index.xml)
- Language: fr-BE (French - Belgium)
- Last modified: 2026-02-05

## Page Inventory

### Core Pages

| URL | Type | Last Modified |
|-----|------|---------------|
| `/` | Homepage | 2026-02-05 |
| `/portfolio/` | Portfolio (version 1) | 2025-12-03 |
| `/portfolio-2/` | Portfolio (version 2, reversed order) | 2025-12-03 |
| `/perspectives/` | Blog index | 2025-12-01 |
| `/privacy-policy/` | Legal | 2025-11-21 |
| `/thank-you/` | Form confirmation | 2025-12-02 |
| `/home-landing/` | Alternate landing page | 2025-11-12 |

### Blog Articles (7 posts)

| URL | Topic | Published |
|-----|-------|-----------|
| `/combien-coute-un-site-web-en-2026/` | Website pricing guide | 2025-11-20 |
| `/tendances-ux-ui-2026/` | UX/UI trends 2026 | 2025-11-02 |
| `/pourquoi-un-design-system-est-essentiel-en-2026/` | Design systems | 2025-10-18 |
| `/ia-pour-les-designers-les-vrais-usages-en-2026-p-xel/` | AI for designers | 2025-10-17 |
| `/la-prime-digitalisation-en-belgique-francophone-en-2026/` | Belgian digitalization subsidies | 2025-11-28 |
| `/aides-a-la-digitalisation-au-luxembourg-en-2026/` | Luxembourg SME Package Digital | 2025-11-28 |
| `/no-code-low-code-full-code-comment-choisir-en-2026/` | No-code vs full-code | 2025-12-01 |

## Navigation Structure

### Main Nav (all pages)
- Projets -> `/#projets` (anchor)
- Process -> `/#process` (anchor)
- Contact -> `/#contact` (anchor)

### Footer Links
- Privacy Policy -> `/privacy-policy/`
- Email: hello@p-xel.be
- Phone: +32 497 38 29 54

### Homepage Internal Links
- Blog listing link: "Voir tout" -> `/perspectives/`
- 4 blog article cards (not all 7)
- Portfolio items open as popups (no dedicated URLs)

### Missing from Navigation
- No link to `/portfolio/` or `/portfolio-2/` from main nav
- No link to `/home-landing/` from anywhere
- No service-specific pages
- No about page
- No dedicated contact page
- No city/location pages

## Anchor-Based Sections on Homepage
- `#projets` - Portfolio carousel
- `#process` - 4-step workflow
- `#contact` - Contact/booking section
- `#scroll` - Scroll indicator

## Sitemap Files
- `/sitemap_index.xml` - Index with 2 child sitemaps
- `/page-sitemap.xml` - All 14 pages
- `/elementor-hf-sitemap.xml` - Elementor header/footer templates
- `/sitemap.rss` - RSS sitemap (referenced in robots.txt)

## Robots.txt
- Disallow: `/wp-admin/`
- Allow: `/wp-admin/admin-ajax.php`

## Observations
- Site is extremely flat: everything lives on the homepage or as blog posts
- No service pages, no city pages, no about page
- Portfolio items are popups, not indexable pages
- Two duplicate portfolio pages exist (`/portfolio/` and `/portfolio-2/`)
- `/home-landing/` is an orphan page with different content (includes pricing)
- No structured service taxonomy or URL hierarchy
