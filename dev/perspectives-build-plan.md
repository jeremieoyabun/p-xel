# Perspectives - Technical Build Plan

## Scope
Build the /perspectives/ section: index page + 5 article pages. No CMS, no database. Static content with Next.js App Router.

## Architecture

### Route structure
```
site/src/app/perspectives/
  page.tsx                          # Index page (article grid)
  layout.tsx                        # Perspectives layout (optional, shared meta)
  [slug]/
    page.tsx                        # Dynamic article page
```

### Content storage
```
site/src/content/perspectives/
  index.ts                          # Article metadata array (title, slug, excerpt, category, readingTime, image, date)
  combien-coute-un-site-web.tsx     # Article body as React component
  aides-digitalisation-belgique.tsx
  ia-creation-produit-digital.tsx
  no-code-vs-code.tsx
  design-system-essentiel.tsx
```

Why `.tsx` instead of MDX:
- No MDX dependency needed
- Full control over layout, CTAs, highlight blocks
- Easier to embed structured components (FAQ, comparison tables, CTA blocks)
- Consistent with the rest of the codebase (no new toolchain)

### Content metadata type
```ts
type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  heroImage: string;
  thumbnail: string;
  date: string;           // ISO date string
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
};
```

### Static generation
- `generateStaticParams()` in `[slug]/page.tsx` returns all 5 slugs
- `generateMetadata()` pulls from the article metadata array
- All pages are fully static (no client components needed in article body)

## Components needed

### New components

**ArticleCard** (`site/src/components/ArticleCard/`)
- Props: article metadata
- Renders: thumbnail, category label, title (H2 link), excerpt, reading time
- CSS Module with hover state (lift + shadow, consistent with capabilities cards)

**ArticleHero** (`site/src/components/ArticleHero/`)
- Props: title, date, category, heroImage, readingTime
- Full-width hero image with overlay
- Editorial layout matching the premium style (hero-row pattern from legacy but rebuilt clean)

**ArticleBody** (`site/src/components/ArticleBody/`)
- Wrapper component providing article typography styles
- Handles: h2 accent markers, paragraph spacing, highlight blocks, lists
- CSS Module with all article body styles

**ArticleHighlight** (`site/src/components/ArticleHighlight/`)
- Accent-bordered callout block for mid-article emphasis
- Used for key quotes, CTAs, important takeaways

**ArticleFAQ** (`site/src/components/ArticleFAQ/`)
- FAQ accordion (client component)
- Renders FAQ schema in `<script type="application/ld+json">`
- Props: array of {question, answer}

### Existing components to reuse
- **Section** - for index page layout
- **Label** - for category labels
- **Button** - for CTAs
- **CTA** - for end-of-article CTA block
- **FadeInUp** - for scroll animations on cards

## Structured data

### Per article page
```json
{
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Organization", "name": "P-XEL Studio" },
  "datePublished": "...",
  "dateModified": "...",
  "image": "...",
  "publisher": { "@type": "Organization", "name": "P-XEL Studio" }
}
```

### FAQ schema (embedded per article)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ]
}
```

### BreadcrumbList
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Accueil", "item": "https://p-xel.be/" },
    { "position": 2, "name": "Perspectives", "item": "https://p-xel.be/perspectives/" },
    { "position": 3, "name": "Article Title" }
  ]
}
```

## Image handling

- Hero images: Next.js `<Image>` with `priority` on article pages, `sizes="100vw"`
- Thumbnails on index: Next.js `<Image>` with `sizes="(max-width: 768px) 100vw, 50vw"`, lazy loaded
- All images from `/public/legacy-assets/images/`
- Alt text per article (keyword-informed, descriptive)

## Styling approach

- CSS Modules for all new components
- Design tokens from `tokens.css`
- Article body typography: serif or distinctive font for body text (differentiate from UI text)
- Light background for article pages (variant="light" on Section)
- Dark header remains consistent

## Sitemap and robots

- Add /perspectives/ and all article URLs to sitemap
- All article pages are indexable
- Add `<link rel="canonical">` per article

## Build order

1. Create content metadata array (`index.ts`)
2. Build ArticleCard component
3. Build index page (`/perspectives/page.tsx`)
4. Build ArticleHero, ArticleBody, ArticleHighlight components
5. Build ArticleFAQ component
6. Build article template (`[slug]/page.tsx`)
7. Write article content (Priority 1 first, then 2-5)
8. Add structured data
9. Add to sitemap
10. Add nav link to Header

## Performance targets

- LCP < 2.5s on article pages
- CLS < 0.1
- All images optimized via Next.js Image
- No client JS in article body (server components only)
- FAQ accordion is the only client component on article pages
