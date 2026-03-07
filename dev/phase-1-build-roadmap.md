# Phase 1 Build Roadmap - P-XEL Studio

Step-by-step implementation order. Each step builds on the previous. No step should be skipped.

---

## Sprint 1: Foundation

**Goal:** Design system in code + homepage live. This sprint defines the quality bar for everything else.

### 1.1 Project Setup

- [ ] Initialize Next.js 15 project with TypeScript and App Router
- [ ] Configure `tsconfig.json` (strict mode, path aliases: `@/components`, `@/lib`, `@/styles`)
- [ ] Install dependencies: `lucide-react`, `zod`, `schema-dts`
- [ ] Configure ESLint + Prettier
- [ ] Set up folder structure (`components/`, `lib/`, `styles/`, `public/`)
- [ ] Configure `next.config.ts` (image formats, device sizes)
- [ ] Create `.env.local` template (GA4 ID, Calendly URL)
- [ ] Deploy empty project to Vercel (confirm pipeline works)

**Estimate:** Half a day. Do not over-engineer setup.

### 1.2 Design Tokens + Base Styles

- [ ] Download and subset fonts (Space Grotesk 500/700, Satoshi 400/500/700, JetBrains Mono 400)
- [ ] Place WOFF2 files in `public/fonts/`
- [ ] Configure `next/font/local` in `app/layout.tsx`
- [ ] Create `styles/tokens.css` (all CSS custom properties from design tokens doc)
- [ ] Create `styles/globals.css` (reset, base typography, dark surface default)
- [ ] Create `styles/animations.css` (fade-in-up keyframes, reduced-motion media query)
- [ ] Verify font loading: no CLS, swap behavior, total < 80KB

**Estimate:** Half a day. Test on slow 3G to confirm font loading behavior.

### 1.3 Shared Components (Round 1)

Build only what the homepage needs. Do not build components for future pages yet.

- [ ] `Section` - dark/light wrapper with max-width, responsive padding
- [ ] `Button` - primary (violet), secondary (outline), ghost variants
- [ ] `Label` - JetBrains Mono small label
- [ ] `SectionHeading` - H2 + optional subtext
- [ ] `FadeInUp` - Intersection Observer scroll animation wrapper
- [ ] `Icon` - Lucide wrapper with size prop
- [ ] `SchemaScript` - JSON-LD injection component

**Estimate:** 1 day. Each component should be simple. No premature abstraction.

### 1.4 Global Layout

- [ ] `app/layout.tsx` - root layout with fonts, tokens, metadata defaults, lang="fr"
- [ ] `Header` - sticky nav (logo + Work/Studio/Contact), mobile hamburger
- [ ] `Footer` - link mesh (services, projects, studio, contact, legal), copyright
- [ ] `lib/navigation.ts` - nav items and footer links data
- [ ] `lib/constants.ts` - site URL, email, phone, social links, Calendly URL
- [ ] Responsive testing: mobile menu, footer columns collapse

**Estimate:** 1 day. Header and footer are used everywhere. Get them right.

### 1.5 Homepage

- [ ] `lib/content/homepage.ts` - all 9 beats as typed data
- [ ] `lib/schema.ts` - Organization, LocalBusiness, WebSite, BreadcrumbList generators
- [ ] Homepage hero (Beat 1): H1, subtext, 2 CTAs, scroll indicator
- [ ] Services overview (Beat 2): 4 pillars with descriptions
- [ ] AI transversal (Beat 3): capability narrative
- [ ] Social proof (Beat 4): stats with counter animation (`StatBlock`)
- [ ] Selected work (Beat 5): 3 project cards (`ProjectCard` - featured variant)
- [ ] Process (Beat 6): 4 steps (`ProcessStep`)
- [ ] Audience (Beat 7): 3 segments
- [ ] Testimonial placeholder (Beat 8): structure ready, content TBD
- [ ] Final CTA (Beat 9): `CTA` block
- [ ] Page metadata + OG image
- [ ] Schema: Organization + LocalBusiness + WebSite + BreadcrumbList
- [ ] Performance check: Lighthouse > 95, LCP < 1.5s

**Estimate:** 2-3 days. The most important page. Iterate until it feels world-class.

### 1.6 404 Page

- [ ] `app/not-found.tsx` - minimal, on-brand. Heading + link back to homepage.

**Estimate:** 1 hour.

### Sprint 1 Quality Gate

> The homepage must feel world-class before moving to Sprint 2. If it does not, iterate. Do not proceed with a mediocre homepage.

Checklist:
- [ ] Lighthouse Performance > 95
- [ ] LCP < 1.5s on 4G
- [ ] CLS near zero
- [ ] No font loading layout shift
- [ ] Responsive: iPhone SE, iPhone 14 Pro, iPad, 1440px, 1920px
- [ ] All CTAs link correctly (Calendly, /work/, /contact/)
- [ ] Schema validates in Google Rich Results Test
- [ ] Feels "2030-level" in 3 seconds

---

## Sprint 2: Proof

**Goal:** Case studies and work page live. Visitors can see what P-XEL ships.

### 2.1 Shared Components (Round 2)

- [ ] `CaseStudyNav` - previous/next project navigation with loop
- [ ] `CTA` block component (if not built in Sprint 1)
- [ ] `ProjectCard` compact variant (for secondary projects on /work/)

**Estimate:** Half a day.

### 2.2 Case Study Content

- [ ] `lib/content/case-studies/billycheck.ts`
- [ ] `lib/content/case-studies/chairsplit.ts`
- [ ] `lib/content/case-studies/greenmood.ts`
- [ ] `lib/content/case-studies/arduenna-gin.ts`
- [ ] `lib/content/case-studies/hopscotch.ts`

**Estimate:** Half a day (data entry from existing markdown content).

### 2.3 Case Study Pages

Build BillyCheck first (strongest proof of "we ship products"), then apply the approach to the other 4.

- [ ] BillyCheck page (`/work/billycheck/`) - 10 beats: hero, context, challenge, thinking, approach, execution, result, deliverables, stack, navigation
- [ ] ChairSplit page (`/work/chairsplit/`)
- [ ] Greenmood page (`/work/greenmood/`)
- [ ] Arduenna Gin page (`/work/arduenna-gin/`)
- [ ] Hopscotch page (`/work/hopscotch/`)
- [ ] Per-page metadata + OG images
- [ ] Schema: WebPage + BreadcrumbList per case study
- [ ] Navigation loop: BillyCheck -> ChairSplit -> Greenmood -> Arduenna -> Hopscotch -> BillyCheck

**Estimate:** 3-4 days. Each case study must feel like its own experience.

### 2.4 Work Page

- [ ] `lib/content/work.ts` - project list with featured/secondary flag
- [ ] Work page (`/work/`) - 3 featured (full viewport) + 2 secondary (compact, side by side)
- [ ] Metadata + OG image
- [ ] Schema: WebPage + BreadcrumbList

**Estimate:** 1 day.

### Sprint 2 Quality Gate

> Each case study must feel like its own experience, not a template with swapped content.

Checklist:
- [ ] All 5 case studies render correctly
- [ ] Navigation loop works (next project links cycle correctly)
- [ ] Case studies feel designed, not templated
- [ ] Work page hierarchy is clear (featured vs secondary)
- [ ] All internal links work
- [ ] Responsive on all target devices

---

## Sprint 3: Credibility + Conversion

**Goal:** Studio and contact pages live. Visitors can understand who P-XEL is and reach out.

### 3.1 Shared Components (Round 3)

- [ ] `ContactForm` - 6-field form with validation, honeypot, inline success
- [ ] `CalendlyEmbed` - inline Calendly widget wrapper
- [ ] Install `resend` dependency

**Estimate:** 1 day.

### 3.2 Studio Page

- [ ] `lib/content/studio.ts` - 7 beats data
- [ ] Studio page (`/studio/`) - opening, founder (voice shift to "je"), philosophy, capabilities, proof (stats), process, CTA
- [ ] Metadata + OG image
- [ ] Schema: Person + Organization + BreadcrumbList

**Estimate:** 1-2 days.

### 3.3 Contact Page

- [ ] `lib/content/contact.ts` - copy + form configuration
- [ ] Contact page (`/contact/`) - dual-path layout (Calendly left + form right)
- [ ] `app/api/contact/route.ts` - form handler (zod validation, honeypot check, Resend email notification + confirmation)
- [ ] Form behavior: real-time field validation, inline success/error states
- [ ] Calendly embed: inline widget, UTM params forwarded
- [ ] Metadata + OG image
- [ ] Schema: ContactPage + LocalBusiness + BreadcrumbList
- [ ] Test form submission end-to-end
- [ ] Test Calendly embed on mobile

**Estimate:** 2 days. Form backend + Calendly integration need careful testing.

### Sprint 3 Quality Gate

> The studio page must make the visitor feel they are choosing a person with a point of view. The contact page must feel effortless.

Checklist:
- [ ] Studio founder section feels personal, not corporate
- [ ] Contact form submits correctly (notification email received, confirmation email sent)
- [ ] Calendly embed loads and works on all devices
- [ ] Dual-path layout works on mobile (stacked, Calendly first)
- [ ] Form validation messages are clear and helpful
- [ ] Honeypot blocks bot submissions
- [ ] No console errors

---

## Sprint 4: SEO Foundation

**Goal:** Service pages and city page live. SEO starts working.

### 4.1 Shared Components (Round 4)

- [ ] `FAQ` - accordion with FAQPage schema injection
- [ ] `PricingTable` - budget/timeline display
- [ ] `StackTable` - technology stack display
- [ ] `ServiceCard` - service summary for city page use
- [ ] `OtherCities` - "On intervient aussi a..." block

**Estimate:** 1 day.

### 4.2 Service: Creation Site Web

- [ ] `lib/content/services/creation-site-web.ts` - 9 beats data
- [ ] Service page (`/services/creation-site-web/`) - opening, problem, what we build, method, performance standards, proof, pricing, FAQ, CTA
- [ ] Dark hero + light content sections (per design tokens strategy)
- [ ] FAQ with FAQPage schema
- [ ] Metadata + OG image
- [ ] Schema: Service + FAQPage + BreadcrumbList

**Estimate:** 1-2 days.

### 4.3 Service: Application Web MVP

- [ ] `lib/content/services/application-web-mvp.ts` - 10 beats data
- [ ] Service page (`/services/application-web-mvp/`) - opening, problem, what we build, method, proof, stack, deliverables, pricing, FAQ, CTA
- [ ] Same dark/light section strategy
- [ ] FAQ with FAQPage schema
- [ ] Metadata + OG image
- [ ] Schema: Service + FAQPage + BreadcrumbList

**Estimate:** 1 day (reuses patterns from creation-site-web).

### 4.4 City: Liege

- [ ] `lib/content/cities/liege.ts` - 9 beats data
- [ ] City page (`/liege/`) - opening, services, why P-XEL in Liege, local context, projects, process, FAQ, other cities, CTA
- [ ] Local trust elements (ecosystem references, in-person meeting angle)
- [ ] FAQ with FAQPage schema
- [ ] Metadata + OG image
- [ ] Schema: LocalBusiness (areaServed: Liege) + Service + FAQPage + BreadcrumbList

**Estimate:** 1 day.

### Sprint 4 Quality Gate

> Service and city pages must feel like they belong on the same site as the homepage.

Checklist:
- [ ] Dark/light section transitions are smooth
- [ ] FAQ accordions work correctly
- [ ] All FAQPage schemas validate
- [ ] All internal links between service/city/case study pages work
- [ ] Pricing tables are clear and readable
- [ ] Pages don't feel like "lesser" SEO pages
- [ ] Content reads naturally, not like keyword-stuffed filler

---

## Sprint 5: Polish + Launch

**Goal:** Everything polished, tested, and live.

### 5.1 Legal Pages

- [ ] `lib/content/legal/mentions-legales.ts`
- [ ] `lib/content/legal/politique-confidentialite.ts`
- [ ] Legal pages (minimal design, light surface, readable)

**Estimate:** Half a day.

### 5.2 Technical SEO

- [ ] `app/sitemap.ts` - dynamic sitemap with all 16 pages, lastmod dates
- [ ] `app/robots.ts` - allow all, reference sitemap
- [ ] Verify all canonical URLs are correct
- [ ] Verify all meta titles < 60 chars, descriptions < 155 chars
- [ ] Verify schema validates on every page (Google Rich Results Test)
- [ ] Verify no broken internal links
- [ ] Generate and place OG images for all pages

**Estimate:** Half a day.

### 5.3 Performance Audit

- [ ] Run Lighthouse on every page (target > 95 performance)
- [ ] Verify LCP < 1.5s on 4G throttling
- [ ] Verify CLS < 0.05 on all pages
- [ ] Verify total font payload < 80KB
- [ ] Verify homepage JS bundle < 100KB
- [ ] Verify all images are WebP with correct sizing
- [ ] Test on slow 3G: site must feel usable

**Estimate:** Half a day + time to fix any issues found.

### 5.4 Cross-Browser + Responsive Testing

Devices to test:
- [ ] iPhone SE (375px)
- [ ] iPhone 14 Pro (393px)
- [ ] iPad (768px)
- [ ] Desktop 1440px
- [ ] Desktop 1920px

Browsers to test:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome (Android)

Focus areas:
- [ ] Mobile menu opens/closes correctly
- [ ] Calendly embed works on all devices
- [ ] Contact form works on mobile
- [ ] FAQ accordions work on touch
- [ ] No horizontal scroll on any page
- [ ] Font rendering is consistent

**Estimate:** 1 day.

### 5.5 Analytics Setup

- [ ] GA4 property created and configured
- [ ] GA4 script added via `next/script` (afterInteractive)
- [ ] Custom events: `cta_click`, `form_submit`, `calendly_open`
- [ ] Google Search Console verified (DNS or meta tag)
- [ ] Sitemap submitted to GSC
- [ ] Verify events fire correctly in GA4 debug mode

**Estimate:** Half a day.

### 5.6 Pre-Launch Checklist

- [ ] All 16 pages render correctly
- [ ] All links work (internal + external)
- [ ] All forms work (contact form, Calendly)
- [ ] All schemas validate
- [ ] All meta tags are correct
- [ ] Favicon and apple-touch-icon are set
- [ ] 404 page works
- [ ] Sitemap.xml is accessible
- [ ] Robots.txt is correct
- [ ] No console errors on any page
- [ ] HTTPS is configured
- [ ] Old domain redirects are set up (if applicable)

### 5.7 Launch

- [ ] Deploy to production
- [ ] Verify live site
- [ ] Test Calendly booking flow end-to-end
- [ ] Test contact form end-to-end
- [ ] Confirm GA4 is receiving data

---

## Post-Launch (Marketing Operations)

These are not website build tasks. They happen after launch and are tracked separately.

- [ ] Google Business Profile: update URL, NAP, add link to `/liege/`, upload new screenshots
- [ ] Verify GBP information is consistent across all listings
- [ ] Monitor GA4 data for first 30 days
- [ ] Evaluate Phase 2 priorities based on actual traffic and conversion data

---

## Timeline Summary

| Sprint | Focus | Key Deliverables |
|--------|-------|-----------------|
| Sprint 1 | Foundation | Design system, homepage, global layout, 404 |
| Sprint 2 | Proof | 5 case studies, work page |
| Sprint 3 | Conversion | Studio page, contact page, form backend |
| Sprint 4 | SEO | 2 service pages, Liege city page |
| Sprint 5 | Launch | Legal, technical SEO, performance, testing, deploy |

---

## Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Calendly embed breaks layout or performance | Load via lazy iframe. Fallback: direct link button only. |
| Font subsetting produces missing characters (accents) | Include Latin Extended subset. Test with all French diacritics. |
| Case study images not ready | Use placeholder images with correct aspect ratios. Replace before launch. |
| Contact form email delivery issues | Test with Resend in staging. Have Postmark as backup provider. |
| Performance regression during Sprint 4-5 | Run Lighthouse after every page addition. Budget alerts on bundle size. |

---

## What Is NOT in Phase 1

Explicitly out of scope to prevent scope creep:

- Blog (Phase 2)
- 3 additional service pages: UX/UI Design, Branding, Landing Pages (Phase 2)
- 3 additional city pages: Bruxelles, Namur, Luxembourg (Phase 2-3)
- Database for form submissions (Phase 2 if volume justifies it, Resend dashboard is sufficient at launch)
- CMS integration (Phase 2+ if needed)
- WhatsApp Business integration (Phase 2, data-dependent)
- Service + city cluster pages (Phase 3, data-dependent)
- Internationalization / English version (not planned)
- Dark/light mode toggle (not planned, dark-first by design)
- E-commerce / payment (not applicable)
