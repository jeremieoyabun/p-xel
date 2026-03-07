# P-XEL Phase 1 - Final QA Checklist

Page-by-page QA checks. Test on desktop (1440px+), tablet (768px), and mobile (375px).

---

## Global Checks (All Pages)

- [ ] Header sticky + blur effect works
- [ ] Header logo links to `/`
- [ ] Desktop nav links all resolve correctly
- [ ] Mobile hamburger menu opens/closes
- [ ] Mobile nav links all resolve correctly
- [ ] Footer renders correctly
- [ ] Footer links all resolve (mentions-legales, politique-confidentialite)
- [ ] No horizontal scroll on any viewport
- [ ] FadeInUp animations trigger on scroll (not before)
- [ ] All text is readable (contrast, sizing)
- [ ] No flash of unstyled text (FOUT) after font files are installed
- [ ] No console errors

---

## Page-by-Page QA

### `/` (Homepage)

- [ ] Hero headline, subheadline, CTAs render
- [ ] Primary CTA links to Calendly
- [ ] Secondary CTA links to `/work/`
- [ ] StatBlock counters animate on scroll
- [ ] Client logos strip displays
- [ ] Capability section: 4 items, service links work
- [ ] Selected Work: 3 ProjectCards render (with images or placeholders)
- [ ] ProjectCard links resolve to case study pages
- [ ] "Voir tous les projets" links to `/work/`
- [ ] Why P-XEL: 4 numbered points
- [ ] Process: 4 steps + CTA to Calendly
- [ ] FAQ accordion opens/closes correctly
- [ ] Final CTA section renders with both buttons
- [ ] JSON-LD: organization, localBusiness, webSite, breadcrumb, faq schemas present

### `/studio/`

- [ ] Opening section with label and heading
- [ ] Founder section: photo placeholder (or image) + 3 paragraphs
- [ ] Philosophy: 3 numbered principles in grid
- [ ] Capabilities: 4 items in 2x2 grid, service links work
- [ ] Stats: 4 StatBlock counters animate
- [ ] Process: 4 steps in grid
- [ ] CTA section with Calendly link
- [ ] JSON-LD: breadcrumb, organization schemas present

### `/work/`

- [ ] Page heading and intro
- [ ] Featured project display
- [ ] Project grid renders all case studies
- [ ] Each project card links to correct `/work/[slug]/` page
- [ ] JSON-LD: breadcrumb schema present

### `/work/billycheck/`, `/work/chairsplit/`, `/work/arduenna-gin/`, `/work/greenmood/`, `/work/oyabun/`

- [ ] Hero with project name, tags, description
- [ ] Image placeholders display (or images after replacement)
- [ ] Challenge / solution / results sections render
- [ ] Key results display
- [ ] CTA links to `/contact/`
- [ ] JSON-LD: breadcrumb schema present
- [ ] Back link to `/work/` works

### `/services/creation-site-web/`

- [ ] Hero with headline + dual CTAs
- [ ] Problem section: intro + 4 pain points
- [ ] What We Build: items list
- [ ] Approach: numbered steps
- [ ] Deliverables: items list + note
- [ ] Case Studies: links to relevant `/work/` pages
- [ ] Investment: narrative body + anchor price ("A partir de 5 000 EUR") + CTA
- [ ] FAQ accordion works
- [ ] Final CTA
- [ ] JSON-LD: breadcrumb, service, faqPage schemas present
- [ ] Internal links to `/contact/`, `/work/`, Calendly resolve

### `/services/application-web-mvp/`

- [ ] Same structure as creation-site-web
- [ ] Investment anchor: "A partir de 8 000 EUR"
- [ ] Content is distinct (not copy of other service page)
- [ ] JSON-LD: breadcrumb, service, faqPage schemas present

### `/liege/`

- [ ] Hero with Liege-specific headline + CTAs
- [ ] Services grid: 4 items with links to service pages
- [ ] Why section: 4 points
- [ ] Local context: 3 paragraphs mentioning Liege ecosystem
- [ ] Projects: 3 local project cards
- [ ] Process steps
- [ ] FAQ accordion: 6 Liege-specific questions
- [ ] Other cities section
- [ ] CTA section
- [ ] JSON-LD: breadcrumb, localBusiness, faqPage schemas present

### `/contact/`

- [ ] Opening section with heading
- [ ] Calendly embed loads (test with real Calendly URL)
- [ ] Calendly dark mode params apply correctly
- [ ] Contact form renders all 6 fields
- [ ] Required fields show validation errors when empty
- [ ] Email validation works (invalid format rejected)
- [ ] Honeypot field is hidden but present in DOM
- [ ] Form submits successfully (test with Resend API key)
- [ ] Success message displays after submission
- [ ] Error message displays on failure
- [ ] Direct contact info: email, phone, location, LinkedIn
- [ ] Email link (`mailto:`) works
- [ ] Phone link (`tel:`) works
- [ ] JSON-LD: breadcrumb, localBusiness schemas present

### `/mentions-legales/`

- [ ] All 6 legal sections render
- [ ] Company info is correct (address, email, phone)
- [ ] Hebergement section mentions Vercel
- [ ] JSON-LD: breadcrumb schema present

### `/politique-confidentialite/`

- [ ] All 9 privacy sections render
- [ ] RGPD rights listed
- [ ] Resend mentioned as data processor
- [ ] Calendly cookie disclosure present
- [ ] JSON-LD: breadcrumb schema present

---

## SEO Checks

- [ ] Every page has unique `<title>`
- [ ] Every page has unique `<meta name="description">`
- [ ] Every page has `<link rel="canonical">`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] Sitemap lists all 14 public pages
- [ ] No public page has `noindex`
- [ ] `/api/` is disallowed in robots.txt
- [ ] JSON-LD validates in Google Rich Results Test (test at least homepage + 1 service page)
- [ ] OG image renders at `/opengraph-image` (1200x630)
- [ ] `og:title`, `og:description`, `og:url` present on all pages

---

## Performance Checks

- [ ] Lighthouse Performance score 90+ (homepage)
- [ ] Lighthouse Accessibility score 90+ (homepage)
- [ ] Lighthouse SEO score 90+ (homepage)
- [ ] LCP under 2.5s on mobile
- [ ] CLS under 0.1
- [ ] FID/INP under 200ms
- [ ] No render-blocking resources (fonts loaded with `display: swap`)
- [ ] Images lazy-loaded where appropriate
- [ ] Calendly script only loads on `/contact/` (not globally)
- [ ] No unused CSS or JS bundles over 50KB
- [ ] `X-Powered-By` header is absent

---

## Responsive Checks

Test at 375px (mobile), 768px (tablet), 1440px (desktop):

- [ ] Header: hamburger on mobile, full nav on desktop
- [ ] Hero sections: text scales, CTAs stack on mobile
- [ ] Grids: 2x2 on desktop, single column on mobile
- [ ] ProjectCards: stack vertically on mobile
- [ ] Contact page: Calendly + form side by side on desktop, stacked on mobile
- [ ] StatBlock row: wraps gracefully on small screens
- [ ] Process steps: readable on all sizes
- [ ] FAQ: full width, tap targets large enough on mobile
- [ ] Typography: no text overflow or truncation
- [ ] Spacing: consistent padding on all viewports
