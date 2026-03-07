# Phase 1 Priorities - P-XEL Studio

Build sequence, phasing decisions, and quality gates for V1 launch.

---

## Design and Build Sequence

The order matters. Each step builds on the last. Earlier pages establish the design language that later pages inherit.

### Sprint 1: Foundation (Design System + Homepage)

**Duration estimate: the longest sprint. Get this right.**

| Step | Deliverable | Why first |
|------|------------|-----------|
| 1.1 | Design system implementation (tokens, fonts, grid, components in code) | Everything else depends on this. Cannot design pages without the system. |
| 1.2 | Homepage design | This page defines the quality bar. Every other page is measured against it. |
| 1.3 | Homepage build | Proves the technical stack can deliver the experience. Validates motion, typography, responsive behavior. |
| 1.4 | Navigation + footer (global layout) | Shared across all pages. Build once, apply everywhere. |
| 1.5 | 404 page | Small effort. Sets the tone for edge cases. |

**Quality gate:** The homepage must feel world-class before moving to Sprint 2. If it does not, iterate. Do not proceed with a mediocre homepage to "finish more pages."

### Sprint 2: Proof (Case Studies + Work Page)

| Step | Deliverable | Why second |
|------|------------|-----------|
| 2.1 | Case study template/approach (not a rigid template, a design approach for telling project stories) | Defines how proof is presented across all case studies. |
| 2.2 | Greenmood case study | Strongest product case. Design this one first, set the bar. |
| 2.3 | Arduenna Gin case study | Different story type (ROI/e-commerce). Validates the approach works for different narratives. |
| 2.4 | Hopscotch case study | Third variation (speed/creative). Confirms flexibility. |
| 2.5 | Work page (`/work/`) | Requires case studies to exist. Designed around their teasers. |

**Quality gate:** Each case study must feel like its own experience, not a template with swapped content. If they feel templated, the design approach needs revision.

### Sprint 3: Credibility + Conversion (Studio + Contact)

| Step | Deliverable | Why third |
|------|------------|-----------|
| 3.1 | Studio page (`/studio/`) | Founder credibility, process philosophy. Requires the design language from Sprint 1 but is more editorial in nature. |
| 3.2 | Contact page (`/contact/`) | Calendly integration, intake form. Functional + premium. |

**Quality gate:** The studio page must make the visitor feel they are choosing a person with a point of view, not hiring a vendor. The contact page must feel effortless.

### Sprint 4: SEO Foundation (Service Pages + City Page)

| Step | Deliverable | Why fourth |
|------|------------|-----------|
| 4.1 | Service page design approach | Content-rich pages that still feel premium. Not blog posts with CTAs. |
| 4.2 | `/services/creation-site-web/` | Highest volume service keyword. |
| 4.3 | `/services/application-web-mvp/` | Highest value service keyword. |
| 4.4 | `/liege/` city page | Local SEO anchor. |

**Quality gate:** Service pages and the city page must feel like they belong on the same site as the homepage. If they feel like a different, lesser site, the design approach needs work.

### Sprint 5: Polish + Launch

| Step | Deliverable | Why last |
|------|------------|----------|
| 5.1 | Legal pages (mentions legales, politique de confidentialite) | Minimal design. Quick. |
| 5.2 | Technical SEO (sitemap.xml, robots.txt, schema markup, meta tags, OG images) | Required for indexing. |
| 5.3 | Performance audit (Lighthouse, Core Web Vitals, font loading, image optimization) | Validate performance targets before launch. |
| 5.4 | Cross-browser and responsive testing | Ensure quality across devices. |
| 5.5 | Google Business Profile update (link to /liege/, update NAP, add photos) | Local SEO activation. |
| 5.6 | Analytics setup (GA4, GSC, conversion tracking) | Must be live at launch to measure from day 1. |
| 5.7 | Launch | Ship it. |

---

## Phase 2: Weeks 2-6 After Launch

Pages that ship within the first month after V1 is live. These are important but not launch-critical. The V1 is generating leads while Phase 2 builds.

| Page | URL | Why Phase 2 | Trigger |
|------|-----|------------|---------|
| UX/UI Design service | `/services/ux-ui-design/` | Important SEO keyword but homepage covers UX/UI capability. | Content ready, just needs design + build. |
| Branding service | `/services/branding-identite/` | Same. Branding is shown through case studies in V1. | Content ready. |
| Landing Page service | `/services/landing-page/` | Lower volume keyword. Overlaps with creation-site-web. | Content ready. |
| Bruxelles city page | `/bruxelles/` | High volume but high competition. Liege foundation must be solid first. | Copy to be written from framework. |
| Luxembourg city page | `/luxembourg/` | High conversion potential (subsidy angle). Needs subsidy content polished. | Copy to be written. Subsidy blog post should ideally launch alongside. |
| Oyabun case study | `/work/oyabun/` | Strong project, adds Web3/tech depth. Not essential for V1 trust. | Visuals and story to be prepared. |
| Kokoro case study | `/work/kokoro/` | Good branding case. Expands the portfolio breadth. | Same. |
| Paris Crowdfunding case study | `/work/paris-crowdfunding/` | Startup branding angle. | Same. |
| Blog index + 3 priority posts | `/blog/`, pricing post, subsidies BE, subsidies LU | These 3 blog posts have commercial undertones and feed into service and city page internal links. | Content to be written/migrated. |

**Phase 2 adds:** 3 service pages, 2 city pages, 3 case studies, blog with 3 posts = **12 pages.**
**Running total after Phase 2:** 26 pages.

---

## Phase 3: Months 2-4 After Launch

Pages that build long-term SEO authority and expand geographic reach.

| Page | URL | Why Phase 3 |
|------|-----|------------|
| Namur city page | `/namur/` | Medium volume. Lower priority market. |
| Charleroi city page | `/charleroi/` | Smaller market. Requires Phase 1 cities to be indexed first. |
| Verviers city page | `/verviers/` | Long-tail play. Low competition. |
| 4 remaining blog posts | No-code vs full-code, UX trends, design system, AI for designers | Pure authority building. Informational SEO. |
| Service+city clusters | `/services/creation-site-web/liege/`, `/services/creation-site-web/bruxelles/`, etc. | Only when search data from Phase 1+2 validates demand. |

**Phase 3 adds:** 3 city pages, 4 blog posts, 2-4 cluster pages = **9-11 pages.**
**Running total after Phase 3:** 35-37 pages.

---

## Minimum Viable V1 (If Scope Must Be Cut Further)

If time or resources force further cuts, the absolute minimum to launch with credibility:

```
/                          Homepage (non-negotiable)
/work/greenmood/           One case study (the strongest)
/studio/                   Who is behind this
/contact/                  How to reach out
/mentions-legales/         Legal requirement
/politique-confidentialite/ Legal requirement
```

**6 pages.** No service pages. No city page. No work index. Just: "Here is who we are, here is what we built, here is how to talk to us."

This is the survival mode launch. It generates leads through direct referrals and outbound, not through search. SEO begins accumulating authority from day 1 but does not drive traffic until Phase 2 pages ship.

**Not recommended.** The 14-page V1 is the right scope. But if a choice must be made between launching 6 world-class pages and 14 mediocre ones, launch 6 world-class ones.

---

## Content Readiness for Phase 1

| Page | Content Status | What's Needed |
|------|---------------|---------------|
| Homepage | Written (`/content/homepage.md`) | Ready for design. May need minor revisions as design evolves. |
| Work page | Not written | Write 3 project teasers (50-80 words each). Derive from case study content. |
| Greenmood case study | Structure not written | Write full case study (Phase 5e task). Gather/create visuals. |
| Arduenna Gin case study | Structure not written | Same. |
| Hopscotch case study | Structure not written | Same. |
| Studio page | Not written | New page. Write founder story, philosophy, process, stats. |
| Contact page | Not written | Minimal. Headline, subtext, form fields. Functional copy. |
| Service: creation-site-web | Written (`/content/services/creation-site-web.md`) | Ready. |
| Service: application-web-mvp | Written (`/content/services/application-web-mvp.md`) | Ready. |
| Liege city page | Framework defined (`/content/cities/city-framework.md`) | Write full copy from framework. |
| Legal pages | Not written | Standard legal text. Low effort. |

### Content still to produce before build begins:
1. 3 case study narratives (Greenmood, Arduenna, Hopscotch)
2. Studio page copy
3. Work page teasers
4. Liege city page copy
5. Contact page copy
6. Legal text

Items 1-3 are the priority. Items 4-6 are quick.

---

## Quality Standards for Phase 1

### Non-negotiable:

- Homepage Lighthouse performance score > 95
- LCP < 1.5s on 4G connection
- CLS near zero
- No layout shifts during font loading
- All fonts self-hosted, subsetted, preloaded
- All images WebP, lazy-loaded (except hero)
- All pages pass WCAG AA contrast requirements
- All schema markup validates in Google Rich Results Test
- All meta titles < 60 chars, all meta descriptions < 155 chars
- Responsive design tested on: iPhone SE, iPhone 14 Pro, iPad, 1440px desktop, 1920px desktop
- No broken links
- No console errors
- Calendly integration works on all devices
- Google Analytics 4 tracking confirmed
- Google Search Console verified and sitemap submitted

### Design non-negotiables:

- The homepage makes visitors feel "this is top-tier" within 3 seconds
- Every case study feels designed, not templated
- The dark canvas, typography, and motion feel cohesive across all pages
- No section on any page looks like it came from a page builder
- The site feels faster than any competitor
- Mobile is a designed experience, not a reflowed desktop

---

## Success Metrics (First 30 Days)

| Metric | Target | Measured via |
|--------|--------|-------------|
| Calendly bookings from site | > 0 (any booking validates the conversion path) | Calendly analytics |
| Average session duration | > 60 seconds | GA4 |
| Homepage scroll depth | > 70% reach mid-page CTA | GA4 scroll events |
| Bounce rate on homepage | < 50% | GA4 |
| Pages indexed in Google | All 14 pages within 2 weeks | GSC |
| Liege page ranking for "agence web Liege" | Appearing in top 30 within 4 weeks | GSC |
| Total organic impressions | Baseline established | GSC |
| Contact form submissions | Any | Form tracking |
| Core Web Vitals | All green | PageSpeed Insights |
