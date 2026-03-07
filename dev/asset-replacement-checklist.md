# P-XEL Phase 1 - Asset Replacement Checklist

Every placeholder that must be replaced before launch for a premium result.

---

## Font Files

Location: `site/public/fonts/`

| File | Used By | Priority |
|---|---|---|
| `SpaceGrotesk-Medium.woff2` | Headings (--font-heading) | Critical |
| `SpaceGrotesk-Bold.woff2` | Headings bold (--font-heading) | Critical |
| `Satoshi-Regular.woff2` | Body text (--font-body) | Critical |
| `Satoshi-Medium.woff2` | Body medium (--font-body) | Critical |
| `Satoshi-Bold.woff2` | Body bold (--font-body) | Critical |
| `JetBrainsMono-Regular.woff2` | Mono/labels (--font-mono) | Critical |

After placing: uncomment `@font-face` blocks in `site/src/styles/fonts.css`.

Sources:
- Space Grotesk: Google Fonts (free, OFL license)
- Satoshi: Fontshare by Indian Type Foundry (free for commercial use)
- JetBrains Mono: JetBrains (free, OFL license)

---

## Founder Photo

| Asset | Location | Component | Current State |
|---|---|---|---|
| Founder portrait photo | `site/public/images/founder.webp` (suggested) | `site/src/app/studio/page.tsx` | Text placeholder "Photo fondateur" |

Requirements:
- High-quality portrait, dark/moody tone preferred
- WebP format, ~800x1000px minimum
- After placing, replace the placeholder `<div>` with `<Image>` component

---

## Project / Case Study Images

### Homepage ProjectCard Images

File: `site/src/lib/content/homepage.ts` - `selectedWork.projects[]`

Each project has an `image` field (currently empty string or placeholder path). The `ProjectCard` component renders a text placeholder when no image is provided.

| Project | Image Field | Suggested Path |
|---|---|---|
| BillyCheck | `image` | `site/public/images/projects/billycheck.webp` |
| ChairSplit | `image` | `site/public/images/projects/chairsplit.webp` |
| Arduenna Gin | `image` | `site/public/images/projects/arduenna.webp` |

### Case Study Pages

File: `site/src/lib/content/work/` - individual case study data files

Each case study has `heroImageText` and potentially `featuredImageText` / `secondaryImageText` fields that render as text placeholders.

| Case Study | Fields to Replace | Suggested Paths |
|---|---|---|
| BillyCheck | heroImageText, featuredImageText, secondaryImageText | `site/public/images/work/billycheck-hero.webp`, etc. |
| ChairSplit | heroImageText, featuredImageText, secondaryImageText | `site/public/images/work/chairsplit-hero.webp`, etc. |
| Arduenna Gin | heroImageText, featuredImageText, secondaryImageText | `site/public/images/work/arduenna-hero.webp`, etc. |
| Greenmood | heroImageText, featuredImageText, secondaryImageText | `site/public/images/work/greenmood-hero.webp`, etc. |
| Oyabun | heroImageText, featuredImageText, secondaryImageText | `site/public/images/work/oyabun-hero.webp`, etc. |

To replace: update `CaseStudyPage.tsx` template and individual data files to use `<Image>` with actual paths instead of text placeholders.

### Work Index Page

File: `site/src/app/work/page.tsx`

Has `featuredImageText` and `secondaryImageText` placeholders for the featured project display.

---

## Favicon

| Asset | Location | Current State |
|---|---|---|
| `icon.svg` | `site/public/icon.svg` | Geometric placeholder (2x2 grid, violet + white squares) |

The current placeholder is functional but should be replaced with the actual P-XEL logo mark if a different design is preferred.

---

## OG Image

| Asset | Location | Current State |
|---|---|---|
| Dynamic OG image | `site/src/app/opengraph-image.tsx` | Uses system fonts (no custom font loading) |

To improve: load Space Grotesk WOFF2 as ArrayBuffer in the edge runtime for brand-consistent OG images. This is optional but improves social sharing appearance.

---

## Summary by Priority

### Critical (blocks premium feel)
1. 6 font WOFF2 files
2. Founder photo
3. At least 3 project images for homepage cards

### High (weakens credibility)
4. Case study hero images (5 pages)
5. Case study detail images

### Nice to Have
6. Custom favicon (current placeholder is acceptable)
7. OG image with custom fonts
