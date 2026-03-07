# SEO Issues - p-xel.be

## Critical Issues

### 1. No service pages
- All services are listed as labels on the homepage
- Cannot rank for "creation site web Liege", "UX designer Belgique", "branding studio Liege", etc.
- Homepage tries to rank for everything and ranks for nothing specific
- Competitors with dedicated service pages will always outrank

### 2. No location pages
- No city-specific pages (Liege, Bruxelles, Namur, Charleroi, Luxembourg, etc.)
- Cannot capture local search intent ("agence web Liege", "designer UI Bruxelles")
- No service + city combinations
- Massive missed opportunity for local SEO

### 3. Portfolio is not indexable
- Projects are popup modals, not pages
- Google cannot crawl or index any project content
- No case study URLs to rank for brand names or project types
- `/portfolio/` and `/portfolio-2/` exist but are near-duplicate and thin

### 4. Homepage H1 is non-descriptive
- H1: "Design Strategie Experience"
- Three disconnected words with no search intent
- Does not include any target keyword
- Should target the primary service + location keyword

---

## Major Issues

### 5. Title tag is weak
- Current: "P-XEL - Studio UI/UX & Identite Visuelle a Liege"
- "Identite Visuelle" is low-volume compared to "creation site web", "agence digitale", "web design"
- Does not reflect new positioning (web apps, MVP, AI product design)
- Missing commercial modifiers

### 6. Meta description is generic
- "Studio UI/UX et design graphique base a Liege..."
- Does not include a value proposition or call to action
- Does not differentiate from any other design studio

### 7. No internal linking strategy
- Blog posts don't link to service pages (because they don't exist)
- Blog posts don't link to each other
- Homepage links to blog but blog doesn't link back to specific services
- No topical clusters or pillar page structure

### 8. Thin content on core pages
- Homepage is the only "real" page with service info
- No long-form service descriptions
- No "what we do" page with depth
- Portfolio pages are thin duplicates

### 9. Blog URL structure issues
- `/ia-pour-les-designers-les-vrais-usages-en-2026-p-xel/` contains brand name in URL (unnecessary)
- Some URLs are very long
- No `/blog/` or `/perspectives/` prefix in article URLs (flat structure)

---

## Schema and Technical SEO

### 10. Schema is minimal
- Organization schema: present but basic
- WebPage schema: present
- BreadcrumbList: present
- Missing: LocalBusiness schema (critical for local SEO)
- Missing: Service schema
- Missing: Article/BlogPosting schema on blog posts
- Missing: FAQ schema on FAQ sections
- Missing: Review/AggregateRating schema
- Missing: Person schema for founder

### 11. No LocalBusiness schema
- No address structured data
- No opening hours
- No service area
- No geo coordinates
- Critical gap for local SEO rankings

### 12. No Google Business Profile integration
- No visible GBP link or NAP consistency check
- No map embed
- No review widgets

### 13. OG image is generic
- Single P-xel_social.jpg (1080x1080) used for all pages
- Blog posts should have unique OG images matching their thumbnails

---

## Content SEO

### 14. No keyword targeting on articles
- Blog posts cover broad topics but don't target specific search queries
- "Combien coute un site web en 2026" is the strongest keyword-targeted article
- Other articles are informational without clear transactional intent
- No articles targeting service-related keywords

### 15. Missing content for commercial intent
- No content for "creation site web Liege"
- No content for "agence UX Belgique"
- No content for "developpement MVP"
- No content for "design application mobile"
- No content for "refonte site web"
- No comparison or "vs" content
- No "how to choose a web agency" content

### 16. No hreflang or multilingual support
- Site is French only (fr-BE)
- No Dutch version (misses Flanders market)
- No English version (misses international/expat market)
- No hreflang tags

### 17. Blog posts don't cross-link
- Articles on related topics (UX trends, design systems, AI) don't link to each other
- No related articles section
- No topical hub structure

---

## Technical Performance

### 18. WordPress + Elementor overhead
- Heavy page builder with large CSS/JS bundles
- WP Rocket helps but doesn't eliminate bloat
- Multiple third-party scripts (Tawk.to, Calendly, GA4, Google Ads)
- Images are mostly WebP (good) but some PNG remain at 1024x1024

### 19. Image optimization gaps
- Some images are PNG instead of WebP (Logo_Greenmood-1024x302.png, Article_Web-1024x1024.png)
- Blog thumbnails are 1024x1024 but displayed much smaller
- No explicit width/height attributes visible (CLS risk)

### 20. No canonical tag verification needed
- `/portfolio/` and `/portfolio-2/` likely have duplicate content without canonical tags
- `/home-landing/` may cannibalize the homepage

---

## Local SEO Gaps

### 21. No Google Business Profile optimization plan
- No GBP listing verification mentioned
- No NAP consistency across directories
- No local citations strategy

### 22. No location-specific content
- No mention of specific neighborhoods, landmarks, or local context
- No Liege-specific landing page
- No "studio web a Liege" or similar geo-targeted pages
- No local case studies (Belgian clients highlighted but not geo-tagged)

### 23. No review strategy
- No Google reviews
- No Trustpilot or similar
- No testimonial collection process visible
- No review schema

---

## Priority Actions for New Build

1. Create dedicated service pages targeting primary keywords
2. Create city pages (Liege, Bruxelles, Namur, Luxembourg)
3. Create service + city combination pages
4. Build indexable case study pages with results and KPIs
5. Implement LocalBusiness schema with full NAP
6. Implement FAQ schema on FAQ sections
7. Implement Article schema on blog posts
8. Add internal linking between services, blog, and case studies
9. Set up proper canonical tags
10. Create a Google Business Profile optimization plan
