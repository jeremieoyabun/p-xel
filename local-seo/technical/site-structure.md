# Site Structure for Local SEO

## URL Architecture

### Phase 1: City Landing Pages (Root Level)

City pages live at the root level to maximize URL authority and keep paths short for local searches.

```
/liege/                  -> Primary city, launched first
/bruxelles/              -> Second priority
/namur/                  -> Third priority
/luxembourg/             -> Cross-border opportunity
```

Each city page is a standalone landing page optimized for:
- "[service] + [city]" queries (e.g., "agence web Liege", "creation site web Bruxelles")
- Local intent signals (address, map, testimonials from local clients)
- A single CTA: book a call via Calendly

These are NOT thin doorway pages. Each city page must contain:
- Unique intro referencing the local market (specific pain points, local business context)
- 3-5 service highlights with links to full service pages
- At least one local case study or client reference
- Embedded Google Maps for that city's service area
- LocalBusiness schema with geo-targeted data
- Minimum 800 words of unique content

### Phase 2: Service + City Nested Pages

Once city pages are indexed and gaining traction, deploy service+city pages:

```
/services/creation-site-web/liege/
/services/creation-site-web/bruxelles/
/services/design-ui-ux/liege/
/services/design-ui-ux/bruxelles/
/services/developpement-application-web/liege/
/services/branding/liege/
/services/landing-page/liege/
/services/mvp-design/liege/
```

Priority order for service+city deployment:
1. `creation-site-web` + all 4 cities (highest search volume)
2. `design-ui-ux` + Liege, Bruxelles
3. `developpement-application-web` + Liege, Bruxelles
4. Remaining combinations based on search data

Each service+city page must:
- Target one primary keyword: "[service] [city]" (e.g., "creation site web Liege")
- Include 2-3 secondary keywords (e.g., "agence web Liege", "developpeur site internet Liege")
- Reference specific local context (not just city name stuffing)
- Link back to the parent service page AND the parent city page
- Contain a unique project example relevant to that service

### URL Rules

- All URLs in lowercase, French slugs, no accents in URLs
- Use hyphens, never underscores
- No trailing parameters or session IDs
- Keep depth to 3 levels maximum: `/services/[service]/[city]/`
- Canonical tags on every page pointing to itself
- No duplicate city content across service+city pages

---

## Hreflang Configuration

### Current: French Belgium

```html
<link rel="alternate" hreflang="fr-BE" href="https://p-xel.be/liege/" />
<link rel="alternate" hreflang="x-default" href="https://p-xel.be/" />
```

Apply `fr-BE` to all pages. The `x-default` points to the homepage.

### Future: Dutch Belgium (nl-BE)

When expanding to Flemish market:

```html
<link rel="alternate" hreflang="fr-BE" href="https://p-xel.be/liege/" />
<link rel="alternate" hreflang="nl-BE" href="https://p-xel.be/nl/luik/" />
<link rel="alternate" hreflang="x-default" href="https://p-xel.be/" />
```

Implementation notes:
- Dutch pages go under `/nl/` prefix
- City names use Dutch equivalents (Luik, Brussel, Namen)
- Service slugs translated (e.g., `/nl/diensten/website-maken/brussel/`)
- Hreflang must be reciprocal: every page references all its language variants
- Implement via `<head>` tags in Next.js `layout.tsx`, not HTTP headers

Do NOT implement nl-BE until there is a clear business case. This is documented for future planning only.

---

## Geo-Targeted Sitemaps

### Sitemap Index Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://p-xel.be/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://p-xel.be/sitemap-services.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://p-xel.be/sitemap-cities.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://p-xel.be/sitemap-service-cities.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://p-xel.be/sitemap-blog.xml</loc>
  </sitemap>
</sitemapindex>
```

### City Sitemap (`sitemap-cities.xml`)

Contains all city landing pages with `lastmod` dates. Update `lastmod` whenever content is refreshed (not automatically on every build).

### Service+City Sitemap (`sitemap-service-cities.xml`)

Contains all service+city combination pages. This sitemap will grow as new combinations are deployed.

### Implementation in Next.js

Use Next.js App Router's built-in `sitemap.ts` convention:
- `/app/sitemap.ts` generates the sitemap index
- Dynamic segments generate their own sitemap entries
- Sitemaps are generated at build time (SSG), not on every request

Submit all sitemaps to Google Search Console individually for better crawl reporting.

---

## Internal Linking Rules for Local Pages

### Rule 1: Homepage Links to All City Pages

The homepage footer and a dedicated "Zones d'intervention" section must link to every active city page.

### Rule 2: City Pages Link to Service+City Children

Each city page links to all service+city pages for that city:
- `/liege/` links to `/services/creation-site-web/liege/`, `/services/design-ui-ux/liege/`, etc.

### Rule 3: Service Pages Link to Their City Variants

Each main service page (`/services/creation-site-web/`) includes a "Disponible a" section linking to all city variants of that service.

### Rule 4: Service+City Pages Link in Three Directions

Each service+city page links to:
1. Its parent city page (`/liege/`)
2. Its parent service page (`/services/creation-site-web/`)
3. Sibling service+city pages for the same city (`/services/design-ui-ux/liege/`)

### Rule 5: Blog Posts Link to Relevant Service+City Pages

Any blog post mentioning a service in a local context must link to the corresponding service+city page. Example: a post about "tendances web design 2026" links to `/services/creation-site-web/liege/` with anchor text "creation de site web a Liege".

### Rule 6: Breadcrumbs on Every Page

Implement breadcrumb navigation with BreadcrumbList schema:
- Service+city: Accueil > Services > Creation site web > Liege
- City page: Accueil > Liege

### Rule 7: No Orphan Local Pages

Every local page must receive at least 3 internal links from other pages on the site. Audit this quarterly.

---

## Mobile-First Structure Requirements

### Layout Rules

- Tap targets minimum 48x48px (Google's requirement)
- Phone number clickable with `tel:+32497382954` on all local pages
- Calendly CTA visible without scrolling on mobile (sticky CTA bar or above-fold button)
- No horizontal scroll on any viewport down to 320px
- Hamburger menu with city pages accessible within 2 taps

### Content Priority on Mobile

On city and service+city pages, mobile layout must follow this order:
1. H1 with city name + service
2. One-line value proposition
3. Primary CTA (book a call)
4. Social proof (client logos or review count)
5. Service description
6. Local case study
7. Process / how it works
8. Secondary CTA
9. FAQ (collapsed accordion)
10. Footer with NAP

### Mobile-Specific Elements

- Click-to-call button in mobile header (always visible)
- Directions link to Google Maps on city pages
- Simplified navigation: services, portfolio, contact (3 items max in mobile nav)

---

## Page Speed Requirements for Local Ranking

### Target Metrics (Mobile)

| Metric | Target | Why |
|--------|--------|-----|
| LCP | < 2.0s | Top 10% threshold, ranking signal |
| INP | < 150ms | Interaction responsiveness |
| CLS | < 0.05 | Layout stability |
| TTFB | < 400ms | Server response, use SSG |
| Total page weight | < 500KB | Fast on Belgian mobile networks |
| Speed Index | < 3.0s | Perceived performance |

### Mandatory Implementation

- All city and service+city pages must be statically generated (SSG via Next.js)
- No client-side data fetching on local pages
- Images: WebP format, lazy-loaded below fold, explicit width/height
- Fonts: preloaded, font-display: swap, subset to Latin characters
- Calendly: load via intersection observer (only when CTA section enters viewport)
- Google Maps embed: load only on user interaction (click to load map)
- No render-blocking CSS beyond critical path
- Inline critical CSS for above-fold content

### Monitoring

- Set up PageSpeed Insights API monitoring for all city pages
- Alert if any city page LCP exceeds 2.5s
- Monthly CWV audit via Search Console
- Test on real devices: mid-range Android on 4G (representative of Belgian mobile users)
