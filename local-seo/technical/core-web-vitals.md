# Core Web Vitals Strategy

## Why CWV Matters for P-XEL Local SEO

Core Web Vitals are a confirmed Google ranking signal. In competitive local markets like "creation site web Liege" or "agence web Bruxelles", most competing agencies have mediocre CWV scores. Hitting top-tier CWV gives P-XEL a concrete ranking edge, especially on mobile where local searches happen.

---

## Target Metrics

### Mobile Targets (Primary)

| Metric | Google "Good" | P-XEL Target | Why Stricter |
|--------|--------------|---------------|--------------|
| LCP | < 2.5s | < 2.0s | Competitive edge, most local competitors are 3-5s |
| INP | < 200ms | < 150ms | Snappy interactions reinforce premium positioning |
| CLS | < 0.1 | < 0.05 | Zero layout shift is the goal for premium feel |
| TTFB | < 800ms | < 400ms | SSG pages should be near-instant |
| FCP | < 1.8s | < 1.2s | Fast first paint signals quality |

### Desktop Targets

Desktop targets: all metrics at 50% of mobile targets or better. Desktop is less critical for local SEO but matters for B2B leads browsing from offices.

---

## LCP Optimization

### What Determines LCP on P-XEL Pages

The LCP element on most pages will be either:
- The hero heading (text-based LCP, ideal)
- A hero image or background (image-based LCP, needs optimization)

### Strategy: Prefer Text-Based LCP

Design city and service pages so the LCP element is the H1 heading, not an image. This means:
- H1 renders immediately with critical CSS
- Hero images are decorative, not the largest contentful element
- Background visuals load after the heading is painted

### If Image-Based LCP Is Unavoidable

- Use `next/image` with `priority` prop on the hero image
- Serve WebP with AVIF fallback
- Set explicit `width` and `height` attributes
- Preload the hero image in `<head>`:
  ```html
  <link rel="preload" as="image" href="/images/hero-liege.webp" type="image/webp" />
  ```
- Keep hero images under 100KB
- Use responsive `srcset` to avoid serving desktop-sized images on mobile

---

## INP Optimization

### Interaction Hotspots on P-XEL Pages

- Calendly booking button click
- Mobile navigation toggle
- FAQ accordion expand/collapse
- Portfolio filter/carousel interactions
- Contact form submissions

### Rules

- No JavaScript execution on page load that blocks the main thread for > 50ms
- Event handlers must complete in < 100ms
- Use `requestAnimationFrame` for visual updates triggered by interactions
- Debounce scroll-triggered animations
- Calendly widget: load only when the user clicks the CTA (not on page load)
- FAQ accordions: use CSS-only `<details>` / `<summary>` elements, no JS needed

---

## CLS Optimization

### Zero-Shift Rules

1. **Every image has explicit dimensions**: `width` and `height` on all `<img>` and `next/image` components
2. **Font loading does not shift text**: Use `font-display: swap` with a fallback that matches metrics (see Font section)
3. **No late-injecting elements**: No banners, no cookie popups that push content down. Cookie consent overlays the page, never inserts into flow.
4. **No ads or third-party embeds above the fold**: Google Maps and Calendly load below fold or on interaction
5. **Reserved space for dynamic content**: If showing review counts or ratings, reserve the exact pixel height in CSS

### Testing

- Test CLS with Chrome DevTools > Performance panel with "Slow 3G" throttling
- Check CLS at page load AND after interaction (post-interaction CLS counts since March 2024)
- Test on real Android devices, not just Chrome emulation

---

## Next.js Specific Optimizations

### Static Generation (SSG)

All local SEO pages must be statically generated:

```
/liege/                           -> SSG
/bruxelles/                       -> SSG
/namur/                           -> SSG
/luxembourg/                      -> SSG
/services/creation-site-web/      -> SSG
/services/[service]/[city]/       -> SSG via generateStaticParams
```

No ISR (Incremental Static Regeneration) needed. These pages change rarely. Rebuild and redeploy when content is updated.

### App Router Specifics

- Use `generateMetadata()` for per-page meta tags (title, description, canonical, hreflang)
- Use `generateStaticParams()` for service+city combinations
- Keep client components (`'use client'`) to an absolute minimum on local pages
- Server components render schema, content, and structure. Client components only for:
  - Mobile menu toggle
  - Calendly embed trigger
  - FAQ accordion (or use CSS-only)

### Bundle Optimization

- Analyze bundle with `@next/bundle-analyzer`
- Target < 80KB first-load JS for local pages
- Code-split Calendly integration into its own chunk
- No moment.js, no lodash (full), no heavy animation libraries on local pages
- Use native CSS animations and transitions, not Framer Motion on local pages

### Image Component

Use `next/image` everywhere with these defaults for local pages:

```tsx
<Image
  src="/images/projet-liege.webp"
  alt="Projet web realise a Liege par P-XEL Studio"
  width={800}
  height={450}
  loading="lazy"       // default for below-fold
  quality={80}         // good balance
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

For hero images only, add `priority={true}` and remove `loading="lazy"`.

---

## Font Loading Strategy

### Banned Fonts

- Inter
- Poppins
- Roboto
- Arial

These are banned per P-XEL brand guidelines. They are generic and undermine premium positioning.

### Recommended Approach

Use a distinctive display font for headings and a clean geometric or humanist font for body. Candidates to evaluate:

- **Headings**: Space Grotesk, Clash Display, General Sans, or a custom/licensed font
- **Body**: Satoshi, Cabinet Grotesk, Switzer, or similar

### Loading Strategy

1. **Self-host all fonts** (do not use Google Fonts CDN, it adds DNS lookup + connection time)
2. **Subset fonts** to Latin characters only (no Cyrillic, no Greek). Reduces file size by 40-60%.
3. **Use WOFF2 format only** (best compression, supported by all modern browsers)
4. **Preload the primary heading font** (the one used in H1, which is likely the LCP element):
   ```html
   <link rel="preload" as="font" href="/fonts/space-grotesk-bold.woff2" type="font/woff2" crossorigin />
   ```
5. **Font-display: swap** on all @font-face declarations
6. **Matched fallback font**: Configure a system font fallback with adjusted `ascent-override`, `descent-override`, and `size-adjust` to minimize CLS during swap:
   ```css
   @font-face {
     font-family: 'SpaceGrotesk-Fallback';
     src: local('Arial');
     ascent-override: 95%;
     descent-override: 25%;
     line-gap-override: 0%;
     size-adjust: 105%;
   }
   ```
7. **Limit font weights**: Load maximum 2 weights per family (e.g., Regular 400 + Bold 700). No light, medium, semibold variants.

### Font File Size Budget

| Font | Max Size (WOFF2) |
|------|-----------------|
| Heading font (1 weight) | 25KB |
| Heading font (2 weights) | 50KB |
| Body font (2 weights) | 50KB |
| Total font payload | < 100KB |

---

## Third-Party Script Management

### Calendly

**Problem**: Calendly's embed script is ~200KB and blocks the main thread.

**Solution**:
- Do NOT load Calendly on page load
- Use a "click to load" pattern: show a styled CTA button, load the Calendly inline widget only when the user clicks
- Alternatively, link directly to the Calendly booking page (external link) for city pages where inline embed is not essential
- If inline embed is required, use Intersection Observer to load when the section scrolls into view

```typescript
// Pseudocode for lazy Calendly
const [showCalendly, setShowCalendly] = useState(false);

// On CTA click:
setShowCalendly(true);
// Then dynamically import and render the Calendly inline widget
```

### Google Analytics 4 (GA4)

- Load via `next/script` with `strategy="afterInteractive"`
- This defers GA4 until after hydration, keeping it off the critical path
- Do NOT use Google Tag Manager if GA4 is the only tag. GTM adds unnecessary overhead.
- If GTM is needed for Google Ads conversion tracking, load GTM with `afterInteractive` and keep the container lean (< 5 tags)

### Google Ads Conversion Tracking

- Load the Google Ads tag ONLY on the thank-you / booking confirmation page
- Do not load it site-wide
- Use the gtag.js conversion snippet, not GTM, if it is the only ads tag

### Cookie Consent

- Use a lightweight consent solution (< 20KB)
- Do NOT use heavy solutions like CookieBot or OneTrust unless legally required
- Load consent banner after first paint (defer it)
- Block GA4 and Google Ads scripts until consent is granted (GDPR requirement for Belgium)

### Google Maps Embed

- Do NOT load the Maps iframe on page load
- Show a static map image (screenshot) as placeholder
- Load the interactive iframe only when the user clicks "Voir la carte" / taps the static image
- This saves ~500KB and multiple network requests on initial load

---

## Mobile Performance Priorities

### Testing Protocol

Test all local pages on:
1. **Moto G Power** (or equivalent mid-range Android) on **4G connection**
2. Chrome DevTools with "Mid-tier mobile" CPU throttling + "Fast 3G" network
3. PageSpeed Insights (uses real field data when available)
4. WebPageTest with "Dulles, VA - Moto G4 - 4G" profile (closest available)

### Mobile-Specific Budgets

| Resource | Budget |
|----------|--------|
| Total page weight (compressed) | < 500KB |
| JavaScript (compressed) | < 100KB |
| CSS (compressed) | < 30KB |
| Fonts | < 100KB |
| Images (above fold) | < 150KB |
| Images (total page) | < 500KB |

### Priority Actions (Ranked)

1. Ensure SSG on all local pages (biggest single impact)
2. Self-host and subset fonts (eliminates Google Fonts latency)
3. Defer Calendly to click-to-load (removes ~200KB from initial load)
4. Defer Google Maps to click-to-load (removes ~500KB from initial load)
5. Preload hero font file (improves LCP when text is LCP element)
6. Inline critical CSS (improves FCP)
7. Use `next/image` with proper sizing everywhere (reduces image payload by 30-60%)
8. Load GA4 after interaction (keeps main thread free during load)

---

## Monitoring and Alerting

### Tools

- **Google Search Console**: CWV report, check weekly for regressions
- **PageSpeed Insights API**: Automate monthly audits for all city pages
- **Chrome UX Report (CrUX)**: Check real-user data once the site has enough traffic
- **Lighthouse CI**: Run in CI/CD pipeline on every deploy, fail the build if LCP > 2.5s or CLS > 0.1

### Regression Protocol

If any city page falls below "Good" threshold on any CWV metric:
1. Identify the regression within 48 hours (Search Console alert or CI failure)
2. Diagnose the cause (new third-party script, unoptimized image, layout change)
3. Fix and deploy within 1 week
4. Verify fix with PageSpeed Insights
5. Document the cause in `/tasks/lessons.md` to prevent recurrence
