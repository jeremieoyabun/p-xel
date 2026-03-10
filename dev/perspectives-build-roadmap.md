# Perspectives - Build Roadmap

## Overview

Phase 1.5 adds the Perspectives editorial layer to the existing site. 5 new pages (1 index + 4 articles), 6 new components, navigation updates, structured data, sitemap integration.

The build is split into 4 sprints. Each sprint produces shippable output.

---

## Sprint 1: Infrastructure (foundation)

### Goal
Build the content system, article type, and index page with placeholder cards.

### Tasks

1. **Create article metadata registry**
   - `site/src/content/perspectives/index.ts`
   - Define `Article` type
   - Add metadata for all 4 articles (slug, title, excerpt, category, readingTime, images, dates, keywords, meta)

2. **Build ArticleCard component**
   - `site/src/components/ArticleCard/ArticleCard.tsx`
   - `site/src/components/ArticleCard/ArticleCard.module.css`
   - Props: article metadata object + optional `featured` boolean
   - Featured variant: full-width, larger image
   - Standard variant: grid-friendly card
   - Hover: lift + shadow + accent border reveal

3. **Build index page**
   - `site/src/app/perspectives/page.tsx`
   - `site/src/app/perspectives/layout.tsx` (shared meta defaults)
   - Hero section with Label + H1 + subline
   - Article grid (featured P1 card + 3 standard cards)
   - Bottom CTA block
   - BreadcrumbList + CollectionPage schema

4. **Update navigation**
   - Add "Perspectives" to `headerNav` in `site/src/lib/navigation.ts`
   - Add "Perspectives" section to `footerNav`

5. **Update sitemap**
   - Add `/perspectives/` and all 4 article URLs

### Deliverable
Live `/perspectives/` index page with real cards linking to `/perspectives/[slug]` (404 until Sprint 2).

---

## Sprint 2: Article template (framework)

### Goal
Build the article page template and all article-specific components.

### Tasks

1. **Build ArticleHero component**
   - Full-width hero image with overlay
   - Title (H1), category, reading time, date
   - Breadcrumb
   - Priority image loading

2. **Build ArticleBody component**
   - Typography wrapper (article-specific font size, line height, max-width)
   - H2 accent markers (violet square)
   - Paragraph spacing, list styles, link styles
   - Light background section

3. **Build ArticleHighlight component**
   - Accent-bordered callout block
   - Left violet border + subtle background
   - For key takeaways, important numbers, P-XEL opinions

4. **Build ArticleCTA component**
   - Mid-article CTA callout
   - Heading + button
   - Accent background or border treatment
   - Links to service pages or contact

5. **Build ArticleFAQ component (client)**
   - Accordion with click-to-expand
   - Injects FAQPage schema
   - Smooth max-height transition
   - Accessible: aria-expanded, aria-controls

6. **Build article page template**
   - `site/src/app/perspectives/[slug]/page.tsx`
   - `generateStaticParams()` from article registry
   - `generateMetadata()` from article metadata
   - ArticleHero + dynamic article body import + end CTA + related articles
   - Article schema + BreadcrumbList schema

### Deliverable
Working article template. All 4 URLs resolve. Article body is a placeholder component until Sprint 3.

---

## Sprint 3: Content (articles)

### Goal
Write and integrate all 4 article bodies as TSX components.

### Tasks

1. **P1: Combien coute un site web**
   - Full rewrite per article-audit.md specifications
   - 2,000-2,500 words
   - Price tables, comparison section, refonte section
   - FAQ schema (5-6 questions)
   - Internal links to services, subsidies article, no-code article, contact
   - Mid-article CTA + end-article CTA

2. **P2: Aides digitalisation belgique**
   - Medium rewrite per audit specs
   - 1,500-1,800 words
   - Verify all 2026 subsidy amounts and eligibility
   - "P-XEL handles the application" section
   - FAQ schema (5 questions)
   - Cross-links to pricing article, services, contact

3. **P3: No-code vs code**
   - Medium rewrite per audit specs
   - 1,500-2,000 words
   - Strong P-XEL opinion ("we recommend X when Y")
   - Decision matrix table
   - FAQ schema (4-5 questions)
   - Cross-links to services, pricing article, contact

4. **P4: IA creation produit digital**
   - Heavy rewrite (complete angle change)
   - 1,500-2,000 words
   - Client-focused: time/cost savings, not tool reviews
   - Concrete examples with numbers
   - FAQ schema (3-4 questions)
   - Cross-links to application service, no-code article, contact
   - **Publish gate**: only if content quality clears the bar

### Content rules per article
- Verify every price, date, subsidy amount, and tool reference
- P-XEL opinion or experience in every article
- At least one concrete number, example, or case
- Min 2 internal links to service pages
- Min 1 internal link to another article
- Mid-article CTA + end-article CTA
- FAQ section with schema

### Deliverable
All 4 articles live with final content. (P4 may be deferred if quality gate not met.)

---

## Sprint 4: Polish and integration

### Goal
Quality pass, internal linking backlinks, performance verification.

### Tasks

1. **Service page backlinks**
   - Add contextual "Lire aussi" links from `/services/creation-site-web/` to pricing and subsidies articles
   - Add contextual links from `/services/application-web-mvp/` to pricing and no-code articles
   - Add link from `/liege/` to subsidies article

2. **Homepage integration**
   - Consider adding a "Perspectives" teaser section between Process and FAQ
   - 2-3 article cards with "Voir toutes les perspectives" link
   - Only if it strengthens the page, not if it dilutes it

3. **Performance audit**
   - Verify LCP < 2.5s on all article pages
   - Verify CLS < 0.1
   - Check image optimization
   - Check no unnecessary client JS

4. **SEO verification**
   - Validate all structured data with Google Rich Results Test
   - Verify sitemap includes all new URLs
   - Verify canonical URLs
   - Check meta titles and descriptions render correctly
   - Verify internal linking architecture matches plan

5. **Accessibility check**
   - FAQ accordion keyboard navigation
   - All images have alt text
   - Heading hierarchy (H1 > H2 > H3)
   - Focus states on all interactive elements

### Deliverable
Production-ready Perspectives section. All pages live, indexed, internally linked, and performing.

---

## Sprint dependencies

```
Sprint 1 (Infrastructure) -> Sprint 2 (Template)
Sprint 2 (Template) -> Sprint 3 (Content)
Sprint 3 (Content) -> Sprint 4 (Polish)
```

Strictly sequential. Each sprint depends on the previous one.

## Estimated scope

| Sprint | New files | Complexity |
|--------|-----------|------------|
| 1 | ~8 files (registry, component, pages, nav) | Medium |
| 2 | ~12 files (5 components + page template) | Medium-High |
| 3 | ~4 files (article bodies) | High (content writing) |
| 4 | ~6 file edits (service pages, homepage, sitemap) | Low |

## What this does NOT include

- New service pages (Phase 2)
- New city pages (Phase 2)
- New case studies (Phase 2)
- Phase 2 articles (refonte, app pricing, agence vs freelance)
- CMS or admin interface
- Comments, reactions, or social features
- Newsletter integration
- RSS feed (can be added later trivially)
