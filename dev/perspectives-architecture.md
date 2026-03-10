# Perspectives - Technical Architecture

## Principles

- No CMS, no database. Static content with Next.js App Router.
- Articles as TSX components. Full control over layout, CTAs, structured data.
- No MDX dependency. Consistent with the rest of the codebase.
- Server components only in article body. Client components only for FAQ accordion.
- Reuses existing design system (tokens, Section, Label, Button, PXelButton, CTA, FadeInUp).

## Route structure

```
site/src/app/perspectives/
  page.tsx                          # Index page
  layout.tsx                        # Shared layout (breadcrumb, meta defaults)
  [slug]/
    page.tsx                        # Article page (static generation)
```

## Content system

### Article registry

```
site/src/content/perspectives/
  index.ts                          # Article metadata array + type definition
  combien-coute-un-site-web.tsx     # Article body component
  aides-digitalisation-belgique.tsx
  no-code-vs-code.tsx
  ia-creation-produit-digital.tsx
```

### Article type

```ts
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  heroImage: string;
  thumbnail: string;
  date: string;              // ISO date "2026-03-15"
  dateModified?: string;     // ISO date, for schema
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
};
```

### Article body component contract

Each article TSX file exports a default React component with no props:

```tsx
export default function CombienCouteUnSiteWeb() {
  return (
    <ArticleBody>
      <h2>...</h2>
      <p>...</p>
      <ArticleHighlight>Key takeaway here</ArticleHighlight>
      <ArticleCTA
        heading="Besoin d'un devis ?"
        href="/contact/"
        label="Demander un devis gratuit"
      />
      <h2>FAQ</h2>
      <ArticleFAQ items={[...]} />
    </ArticleBody>
  );
}
```

### Static generation

```tsx
// site/src/app/perspectives/[slug]/page.tsx

import { articles } from "@/content/perspectives";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  return {
    title: article?.metaTitle,
    description: article?.metaDescription,
    alternates: { canonical: `/perspectives/${article?.slug}` },
  };
}
```

## Components

### New components (6)

| Component | Path | Type | Purpose |
|-----------|------|------|---------|
| ArticleCard | `components/ArticleCard/` | Server | Card for index grid |
| ArticleHero | `components/ArticleHero/` | Server | Full-width hero on article page |
| ArticleBody | `components/ArticleBody/` | Server | Typography wrapper for article content |
| ArticleHighlight | `components/ArticleHighlight/` | Server | Accent-bordered callout block |
| ArticleCTA | `components/ArticleCTA/` | Server | Mid-article CTA callout |
| ArticleFAQ | `components/ArticleFAQ/` | Client | FAQ accordion + schema injection |

### Existing components reused

- Section (dark/light wrapper)
- Label (category labels)
- Button (secondary CTA in cards and article)
- PXelButton (primary CTA on index and article)
- CTA (end-of-article CTA block)
- FadeInUp (scroll animations on cards)
- SchemaScript (structured data injection)

## ArticleCard design

```
+---------------------------------------+
| [Thumbnail image]                      |
| Category                               |
| Article Title (H2, linked)            |
| Excerpt text (2 lines max)            |
| 8 min de lecture                       |
+---------------------------------------+
```

- Featured card (P1 pricing article): full-width on desktop, larger image
- Standard cards: 2-column grid
- Hover: subtle lift (translateY(-4px)) + shadow, accent border-bottom reveal
- Category label: mono, uppercase, violet, text-xs

## ArticleHero design

- Full-width hero image with dark overlay for text legibility
- Title (H1) over image
- Category label + reading time + date
- Breadcrumb above title
- BreadcrumbList schema

## ArticleBody typography

- Article text uses body font at slightly larger size (text-lg or 18px)
- Line height 1.75 for reading comfort
- Max-width var(--content-narrow) (680px) for optimal line length
- H2: accent square marker (8px violet square before text)
- H3: no marker, smaller weight
- Blockquote: left violet border
- Links: violet, underline on hover
- Images within body: full-width with caption
- Light background (Section variant="light") for the entire article

## ArticleFAQ

- Accordion: click to expand/collapse
- Default: all collapsed
- Animation: max-height transition
- Injects FAQPage schema via `<script type="application/ld+json">`
- Client component (needs click handlers)

## Structured data per article page

### Article schema
```json
{
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Organization", "name": "P-XEL Studio" },
  "publisher": {
    "@type": "Organization",
    "name": "P-XEL Studio",
    "logo": { "@type": "ImageObject", "url": "https://p-xel.be/icon.svg" }
  },
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-15",
  "image": "https://p-xel.be/legacy-assets/images/Article-large_Web-design.webp",
  "mainEntityOfPage": "https://p-xel.be/perspectives/combien-coute-un-site-web"
}
```

### FAQ schema (per article, embedded by ArticleFAQ component)
### BreadcrumbList schema (Accueil > Perspectives > Article Title)

## Image handling

- Hero images: `<Image priority sizes="100vw" />` on article pages
- Thumbnails on index: `<Image sizes="(max-width: 768px) 100vw, 50vw" />` lazy loaded
- Source: `/public/legacy-assets/images/` (existing assets)
- Alt text: keyword-informed, descriptive

## Navigation updates

### Header
```ts
// Add to headerNav
{ label: "Perspectives", href: "/perspectives/" }
```
Position: between "Studio" and "Contact"

### Footer
```ts
// Add to footerNav
perspectives: {
  title: "Perspectives",
  links: [
    { label: "Prix site web", href: "/perspectives/combien-coute-un-site-web" },
    { label: "Aides digitalisation", href: "/perspectives/aides-digitalisation-belgique" },
    { label: "No-code vs code", href: "/perspectives/no-code-vs-code" },
  ],
}
```

## Sitemap

Add to existing sitemap generation:
- `/perspectives/` (priority 0.8)
- `/perspectives/combien-coute-un-site-web` (priority 0.9)
- `/perspectives/aides-digitalisation-belgique` (priority 0.8)
- `/perspectives/no-code-vs-code` (priority 0.7)
- `/perspectives/ia-creation-produit-digital` (priority 0.6)

## Performance targets

- LCP < 2.5s on article pages
- CLS < 0.1
- No client JS in article body
- ArticleFAQ is the only client component on article pages
- All images optimized via Next.js Image
- Total page weight < 200KB (excluding images)
