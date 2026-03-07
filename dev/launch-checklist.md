# P-XEL Phase 1 - Launch Checklist

## 1. Environment Variables

| Variable | Where | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Vercel env settings | Contact form email delivery via Resend |

No other env vars are required for Phase 1.

## 2. Domain & DNS

- [ ] Point `p-xel.be` to Vercel (A record or CNAME)
- [ ] Verify SSL certificate is active
- [ ] Set `SITE_URL` in `site/src/lib/constants.ts` to `https://p-xel.be` (currently placeholder)
- [ ] Confirm www redirect to non-www (or vice versa) is configured in Vercel

## 3. Integrations to Verify

### Resend (Email)
- [ ] Create Resend account and obtain API key
- [ ] Add `RESEND_API_KEY` to Vercel environment variables (Production + Preview)
- [ ] Verify sender domain in Resend dashboard (p-xel.be)
- [ ] Update `from` address in `site/src/app/api/contact/route.ts` if needed (currently `noreply@p-xel.be`)
- [ ] Update `to` address in `site/src/app/api/contact/route.ts` if needed (currently `hello@p-xel.be`)
- [ ] Submit a test form and confirm email arrives

### Calendly
- [ ] Verify Calendly URL in `site/src/lib/constants.ts` matches active Calendly account
- [ ] Test embed loads correctly on `/contact/`
- [ ] Test booking flow end-to-end in production
- [ ] Verify dark mode params render correctly (`background_color`, `text_color`, `primary_color`)

### Google Search Console
- [ ] Register property for `p-xel.be`
- [ ] Add verification meta tag or DNS TXT record
- [ ] Update `verification` object in `site/src/app/layout.tsx` with actual verification code
- [ ] Submit sitemap (`/sitemap.xml`)

## 4. Font Files

Six WOFF2 files must be placed in `site/public/fonts/`:
- [ ] `SpaceGrotesk-Medium.woff2`
- [ ] `SpaceGrotesk-Bold.woff2`
- [ ] `Satoshi-Regular.woff2`
- [ ] `Satoshi-Medium.woff2`
- [ ] `Satoshi-Bold.woff2`
- [ ] `JetBrainsMono-Regular.woff2`

After placing files:
- [ ] Uncomment `@font-face` declarations in `site/src/styles/fonts.css`
- [ ] Remove system font fallback stack from `tokens.css` font variables
- [ ] Test all pages for correct font rendering

## 5. Asset Replacement

See `asset-replacement-checklist.md` for the full list.

## 6. SEO Pre-Indexing

- [ ] Verify `/robots.txt` serves correctly (allows `/`, disallows `/api/`)
- [ ] Verify `/sitemap.xml` lists all 14 pages
- [ ] Verify canonical URLs resolve correctly on every page
- [ ] Verify JSON-LD schema renders on every page (test with Google Rich Results Test)
- [ ] Verify OG image generates at `/opengraph-image` (1200x630)
- [ ] Verify `<title>` and `<meta description>` on all 14 pages
- [ ] Check no `noindex` tags are present on public pages
- [ ] Submit sitemap in Google Search Console
- [ ] Request indexing for homepage and key service pages

## 7. Performance Pre-Launch

- [ ] Run Lighthouse on homepage, service pages, contact page (target 90+ on all metrics)
- [ ] Verify images use Next.js `<Image>` with proper sizing
- [ ] Verify no layout shift from font loading (check CLS)
- [ ] Verify `backdrop-filter` performance on mobile (header)
- [ ] Test on real mobile device (not just DevTools)
- [ ] Verify `compress: true` is active in `next.config.ts`
- [ ] Verify `poweredByHeader: false` hides X-Powered-By

## 8. Final Build Verification

- [ ] `npm run build` completes without errors
- [ ] `npm run start` serves site correctly locally
- [ ] No console errors on any page
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] All internal links resolve (no 404s)
- [ ] Contact form submits successfully in production
- [ ] Calendly embed loads in production

## 9. Post-Launch (First 7 Days)

### Day 1
- [ ] Verify all pages are accessible in production
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for priority pages: `/`, `/services/creation-site-web/`, `/services/application-web-mvp/`, `/liege/`
- [ ] Send a test contact form submission
- [ ] Verify Resend delivers email in production
- [ ] Check Calendly embed works in production

### Day 2-3
- [ ] Monitor Google Search Console for crawl errors
- [ ] Monitor Resend dashboard for any failed deliveries
- [ ] Check Core Web Vitals in Search Console (once data appears)
- [ ] Verify no broken links reported by crawlers

### Day 4-7
- [ ] Check indexing status of submitted pages
- [ ] Monitor any 404 errors in Vercel logs (old URLs from previous site)
- [ ] Set up 301 redirects for any old URLs still receiving traffic
- [ ] Verify schema markup appears correctly in Search Console enhancements
- [ ] Review real-user performance data if available

## 10. Items That Could Break Premium Feel If Left Unfinished

1. **Missing font files** - Site falls back to system fonts, destroying the Architect Noir aesthetic
2. **Missing project images** - ProjectCard and CaseStudyPage show text placeholders instead of visuals
3. **Missing founder photo** - Studio page shows placeholder instead of portrait
4. **Unverified Calendly URL** - Embed could show wrong calendar or fail to load
5. **Missing OG image custom fonts** - Dynamic OG image uses system fonts instead of Space Grotesk
6. **Hardcoded Calendly URLs** in `homepage.ts` (lines 6, 181) - Should match `CONTACT.calendlyUrl` constant
