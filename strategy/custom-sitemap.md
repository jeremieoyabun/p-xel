# Custom Sitemap - P-XEL Studio

Revised site architecture. Replaces `/strategy/sitemap.md` as the active structure plan.

---

## Architecture Philosophy

The old sitemap was 28 pages organized like an agency website: services hub, 4 service pages, portfolio hub, 6 case studies, blog index, 7 blog posts, 4 city pages, about, contact, 2 legal pages.

The new architecture is leaner, more intentional, and organized around visitor experience rather than information taxonomy. Pages exist for one of three reasons:

1. **Experience pages** - Custom-designed, high-impact pages that convert through quality
2. **SEO pages** - Structured content that ranks and funnels traffic into the experience
3. **Editorial pages** - Content that builds authority and captures informational intent

No page exists just to fill a sitemap slot.

---

## Revised URL Architecture

```
EXPERIENCE LAYER (custom-designed, conversion-driven)
/                                    Homepage (narrative experience)
/work/                               Work (experiential portfolio, not a grid)
/work/greenmood/                     Case study
/work/arduenna-gin/                  Case study
/work/hopscotch/                     Case study
/work/oyabun/                        Case study
/work/kokoro/                        Case study
/work/paris-crowdfunding/            Case study
/studio/                             Studio (replaces about + contact)
/contact/                            Contact (intake + Calendly)

SEO LAYER (content-rich, rankable, funnels to experience)
/services/creation-site-web/         SEO: websites + landing pages
/services/application-web-mvp/       SEO: web apps + MVPs
/services/ux-ui-design/              SEO: UI/UX design
/services/branding-identite/         SEO: branding
/services/landing-page/              SEO: landing pages
/liege/                              Local SEO: Liege
/bruxelles/                          Local SEO: Bruxelles
/namur/                              Local SEO: Namur
/luxembourg/                         Local SEO: Luxembourg

EDITORIAL LAYER (authority, informational SEO, nurture)
/blog/                               Blog index
/blog/combien-coute-un-site-web/     Blog post
/blog/prime-digitalisation-belgique/ Blog post
/blog/aides-digitalisation-luxembourg/ Blog post
/blog/no-code-low-code-full-code/    Blog post
/blog/tendances-ux-ui/               Blog post
/blog/design-system-essentiel/       Blog post
/blog/ia-pour-designers/             Blog post

LEGAL (required, minimal)
/mentions-legales/                   Legal
/politique-confidentialite/          Privacy
```

**Total: 25 pages at launch** (down from 28)

---

## What Changed From the Old Sitemap

### Pages removed (3)

| Old page | Why removed |
|----------|------------|
| `/services/` (services hub) | Dead-end intermediary. Visitors either land on a specific service page from search or discover capabilities through the homepage experience. A hub page that just lists 4-5 links adds nothing. The homepage handles the overview role better. |
| `/projets/` (portfolio hub) | Same problem. A grid of project thumbnails is the most generic agency pattern possible. `/work/` replaces it as an experiential page, not a listing page. |
| `/a-propos/` (about page) | Merged into `/studio/`. A separate "about" page is agency convention. P-XEL's story, values, founder credibility, and way of working belong in one cohesive studio page that also makes the visitor want to reach out. |

### Pages merged (2 into 1)

| Old pages | New page | Why |
|-----------|----------|-----|
| `/a-propos/` + founder story | `/studio/` | One page that covers who P-XEL is, how it works, and why it matters. More compelling than splitting "about" and "process" across pages. |

### Pages renamed (1)

| Old | New | Why |
|-----|-----|-----|
| `/projets/` + `/projets/[slug]/` | `/work/` + `/work/[slug]/` | "Projets" is generic agency French. "Work" is sharper, more product-studio, and aligns with the premium positioning. Also shorter in the URL. |

### Pages kept as-is (21)

All service pages, city pages, blog posts, case studies, contact, and legal pages retain their URLs and SEO substance. The content already written remains valid. What changes is how these pages are designed and how they connect to each other.

### Pages deferred (2)

| Page | Status |
|------|--------|
| `/charleroi/` | Phase 2 (month 2-3), as planned in city framework |
| `/verviers/` | Phase 2 (month 2-3), as planned in city framework |

---

## Page Architecture by Layer

### Experience Layer

These pages are fully custom-designed. They carry the premium experience. They are where conversion happens.

#### `/` Homepage

The core product. A narrative scroll that takes the visitor from first impression to qualified intent in under 90 seconds. This page does the work that a services hub, portfolio overview, and about page would do on a standard site, but as one unified experience.

- **Not linked from nav as "Accueil."** The logo is the home link.
- **No section feels like a module from a page builder.**
- **Every viewport advances the story.**

#### `/work/` Work

Not a portfolio grid. An experiential showcase. The page itself demonstrates P-XEL's design capability through how it presents the work. Projects are revealed through scroll, with visual scale, pacing, and narrative that makes each project feel significant.

- Maximum 6 projects at launch. Curated, not comprehensive.
- Each project teaser leads to a full case study.
- The page ends with a CTA, not a "load more" button.

#### `/work/[slug]/` Case Studies

Each case study is a designed experience, not a project page template. The story is told through design decisions, large-scale visuals, and quantified results. The visitor should feel like they are seeing the product, not reading about it.

- 6 at launch: Greenmood, Arduenna Gin, Hopscotch, Oyabun, Kokoro, Paris Crowdfunding
- Each subtly emphasizes a different capability (UX, e-commerce, speed, branding, product thinking, B2B)
- Navigation between case studies is seamless (next project, not "back to portfolio")

#### `/studio/` Studio

Replaces the old about page. This is not a "meet the team" page. It is a credibility and connection page. Who is behind P-XEL, how the studio thinks, what the process looks like, why this is different from an agency or a freelancer.

- Founder story (brief, impactful, not a CV)
- How P-XEL works (philosophy, not just process steps)
- Stats that matter (16+ years, 49+ projects, concrete results)
- Ends with a natural bridge to contact

#### `/contact/` Contact

Clean, direct, premium. Two paths: Calendly booking (primary) and intake form (secondary). No clutter. The page assumes the visitor has already decided to reach out. Its job is to make that action effortless.

- Calendly embed or direct link
- Structured intake form: name, email, project type, budget range, timeline, message
- Direct contact info: email, phone
- Location: Liege, Belgium

---

### SEO Layer

These pages exist to rank for commercial keywords and funnel search traffic into the experience. They are content-rich and well-structured, but they are not the primary experience. A visitor who lands on a service page should quickly understand what P-XEL does and be pulled toward the experience layer (work, homepage, contact).

#### `/services/[slug]/` Service Pages (5)

These pages rank for national commercial queries. They carry the content already written in `/content/services/`. But they are not designed as standalone destinations. They are SEO entry points that funnel visitors toward case studies and contact.

**Design approach:** Not a template repeated 5 times. Each page has the same content depth but its visual presentation can vary. The goal is: the visitor understands the capability, sees proof, and either dives into a case study or books a call.

**Key difference from old plan:** No services hub page. Service pages are accessible through:
- Homepage capability section (contextual links)
- City pages (service links)
- Blog posts (in-content links)
- Footer navigation
- Direct search landing

| URL | Primary Keyword | Ranks For |
|-----|----------------|-----------|
| `/services/creation-site-web/` | creation site web Belgique | Website creation queries |
| `/services/application-web-mvp/` | developpement application web Belgique | Web app / MVP queries |
| `/services/ux-ui-design/` | UX UI designer Belgique | UX/UI design queries |
| `/services/branding-identite/` | branding Belgique | Branding queries |
| `/services/landing-page/` | creation landing page Belgique | Landing page queries |

#### `/[city]/` City Pages (4 at launch)

Local SEO entry points. These pages rank for "[service] + [city]" queries and capture local commercial intent. Content is unique per city (as defined in the city framework). Their job is to prove local relevance and funnel the visitor toward case studies or contact.

**Design approach:** These pages have more content than experience pages (for SEO) but should still feel premium and designed, not like blog posts with a CTA bolted on.

| URL | Primary Keyword | Ranks For |
|-----|----------------|-----------|
| `/liege/` | agence web Liege | Local Liege queries |
| `/bruxelles/` | agence digitale Bruxelles | Local Brussels queries |
| `/namur/` | creation site web Namur | Local Namur queries |
| `/luxembourg/` | agence web Luxembourg | Local Luxembourg queries |

---

### Editorial Layer

Blog posts build topical authority, capture informational intent, and create internal linking opportunities. They are the long game. They do not need to be experiential. They need to be useful, well-structured, and clearly linked to commercial pages.

**Design approach:** Light background for readability. Clean typography. Mid-article and end-of-article CTAs. Related articles. Author block. The blog design should feel premium but prioritize reading comfort over visual spectacle.

#### `/blog/` Blog Index

A simple, clean page that lists published articles. No elaborate filtering system for 7 articles. Category tags when the library grows past 15 posts.

#### `/blog/[slug]/` Blog Posts (7 at launch)

| URL | Primary Keyword | Intent |
|-----|----------------|--------|
| `/blog/combien-coute-un-site-web/` | combien coute un site web | Informational (commercial) |
| `/blog/prime-digitalisation-belgique/` | prime digitalisation Belgique | Informational (commercial) |
| `/blog/aides-digitalisation-luxembourg/` | SME Package Digital Luxembourg | Informational (commercial) |
| `/blog/no-code-low-code-full-code/` | no-code vs full-code | Informational |
| `/blog/tendances-ux-ui/` | tendances UX UI 2026 | Informational |
| `/blog/design-system-essentiel/` | design system | Informational |
| `/blog/ia-pour-designers/` | IA pour designers | Informational |

---

## Navigation

### Header

```
Work     Studio     Contact
```

Three items. No dropdowns. No "Services" menu with 5 sub-items. The navigation reflects the experience-first architecture. Logo links home.

Service pages and city pages are reachable through the homepage, through footer links, and through search. They do not need primary navigation slots. Putting "Services" in the nav forces the site into agency mode.

**Alternative if SEO justifies it:**
```
Work     Services     Studio     Contact
```

"Services" as a single link to a lightweight services overview section or an anchor to the homepage capability section. Not a dropdown. To be tested.

### Footer

```
P-XEL Studio

Work                    Services                     Studio
Greenmood               Sites web                    A propos
Arduenna Gin            Applications & MVP           Comment on travaille
Hopscotch               UX/UI Design                 Contact
Oyabun                  Branding
Kokoro                  Landing Pages
Paris Crowdfunding

Villes                  Ressources                   Legal
Liege                   Blog                         Mentions legales
Bruxelles               Combien coute un site web    Politique de confidentialite
Namur                   Prime digitalisation BE
Luxembourg              Aides digitalisation LU

hello@p-xel.be | +32 xxx xxx xxx
Liege, Belgique
LinkedIn | Calendly
```

The footer carries the internal linking weight. Every service page, city page, case study, and key blog post is linked from the footer. This is where the SEO architecture lives without cluttering the experience.

---

## User Journey Map

### Path 1: Direct landing (homepage)
```
/ (narrative experience)
  -> feels premium, understands what P-XEL does
  -> sees work previews -> clicks into /work/greenmood/
  -> sees results, wants this for their product
  -> clicks "Reserver un appel" -> /contact/ or Calendly
```

### Path 2: Search landing (service page)
```
/services/creation-site-web/ (SEO entry)
  -> understands P-XEL builds websites at a high level
  -> sees case study link -> /work/arduenna-gin/
  -> impressed by results
  -> clicks CTA -> /contact/
```

### Path 3: Local search landing (city page)
```
/liege/ (local SEO entry)
  -> sees P-XEL is local, credible, premium
  -> clicks service link -> /services/application-web-mvp/
  -> or goes directly to /contact/
```

### Path 4: Informational entry (blog)
```
/blog/combien-coute-un-site-web/ (editorial entry)
  -> gets useful information, sees P-XEL knows their stuff
  -> clicks mid-article CTA -> /services/creation-site-web/
  -> or clicks end CTA -> /contact/
```

### Path 5: Portfolio entry (direct work link)
```
/work/greenmood/ (shared link, social, referral)
  -> sees impressive case study
  -> clicks "next project" -> /work/arduenna-gin/
  -> or clicks CTA -> /contact/
  -> or clicks logo -> / (homepage for full picture)
```

Every path converges on `/contact/` within 2-3 clicks maximum.

---

## Internal Linking Architecture

### Link flow direction

```
Homepage (experience)
  -> /work/ (experiential showcase)
  -> /work/[slug]/ (case studies, proof)
  -> /services/[slug]/ (contextual links within capability sections)
  -> /studio/ (credibility)
  -> /contact/ (conversion)

Service pages (SEO entry)
  -> /work/[slug]/ (relevant case studies as proof)
  -> /contact/ (CTA)
  -> /blog/[slug]/ (related content)
  -> /[city]/ (local variant)

City pages (local SEO entry)
  -> /services/[slug]/ (all service pages)
  -> /work/[slug]/ (relevant case studies)
  -> /contact/ (CTA)
  -> /blog/[slug]/ (subsidy articles)
  -> other /[city]/ pages

Blog posts (editorial entry)
  -> /services/[slug]/ (relevant service page)
  -> /blog/[slug]/ (related articles)
  -> /contact/ (end CTA)

Case studies (proof)
  -> /work/[next-slug]/ (next project)
  -> /services/[slug]/ (relevant service)
  -> /contact/ (CTA)

Footer (on every page)
  -> All case studies, all services, all cities, key blog posts, contact, legal
```

### Linking rules

1. Every service page links to at least 2 case studies and 2 blog posts
2. Every case study links to 1 service page and the next case study
3. Every blog post links to 1 service page and 2 other blog posts
4. Every city page links to all 5 service pages
5. The homepage links to at least 3 case studies, all service capabilities, and contact
6. Footer carries the full internal link mesh on every page

---

## Phase 2 Expansion (Month 2-3)

| Addition | URL | Trigger |
|----------|-----|---------|
| Charleroi city page | `/charleroi/` | After Phase 1 cities are indexed |
| Verviers city page | `/verviers/` | After Phase 1 cities are indexed |
| Service+city clusters | `/services/creation-site-web/liege/` etc. | When search data justifies it |
| New blog posts | `/blog/[slug]/` | Editorial calendar |
| New case studies | `/work/[slug]/` | As projects ship |

No new structural page types. The architecture scales by adding content to existing patterns, not by creating new page categories.
