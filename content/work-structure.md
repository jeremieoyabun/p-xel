# Work Page Structure - P-XEL Studio

Blueprint for `/work/` as an experiential showcase. Not a portfolio grid. A curated, designed presentation of P-XEL's strongest work.

---

## Page Intent

This page answers one question: "What has P-XEL built?"

The answer is not a list. It is a curated experience where each project is revealed with visual scale and narrative impact. The visitor should feel the quality of the output and want the same for their product.

---

## SEO Brief

- **Search intent:** Commercial investigation. Visitors checking P-XEL's work before deciding to reach out.
- **Primary keyword:** portfolio design digital (low priority, the page's value is experiential, not search-driven)
- **Title tag:** Work | P-XEL Studio
- **Meta description:** Applications web, plateformes SaaS, identites de marque. Cinq produits digitaux conçus, construits et livres par P-XEL Studio. Voir les projets.
- **Schema:** WebPage, BreadcrumbList

---

## Design Philosophy

This is NOT a portfolio grid. No thumbnails. No equal-sized cards. No masonry layout.

Each project gets its moment. The page is a vertical scroll where projects are revealed one by one with visual weight and pacing. The design itself demonstrates P-XEL's ability to present work at the highest level.

**Key change:** The page now leads with web apps (BillyCheck, ChairSplit) before platform work (Greenmood) and marketing/design projects (Arduenna, Hopscotch). This ordering reflects P-XEL's positioning as a product partner that ships, not just designs.

**References (feeling, not copying):**
- A gallery exhibition where each piece has its own wall
- A film reel where each frame is deliberate
- An architecture portfolio where projects are presented with space and precision

---

## Project Hierarchy

### Featured (3) - Full visual treatment, homepage highlights

These three projects get maximum visual impact, larger images, more detail:

1. **BillyCheck** - Proves AI + SaaS + full-stack product shipping
2. **ChairSplit** - Proves multi-tenant SaaS + product thinking + PWA
3. **Greenmood** - Proves B2B platform + complex UX + design system

### Secondary (2) - Present but with lighter treatment

These projects are on the page but with a more compact presentation:

4. **Oyabun** - Tech range, Web3/gaming, proves capability in cutting-edge domains
5. **Arduenna Gin** - Strong ROI story, proves strategy + execution

---

## Page Structure (4 sections)

### Section 1: Intro

**Viewport:** Less than full. A brief contextual entry, not a hero.

**Label (JetBrains Mono, small):**
Work

**H1 (Space Grotesk):**
Ce qu'on a construit.

**Subtext (Satoshi, text-md):**
Cinq projets. Cinq preuves. Chaque produit conçu, construit et livre par notre studio.

**Design notes:**
- Minimal. The intro is a doorway, not a destination.
- Dark canvas. Same visual language as the homepage.
- No CTA here. The projects are the CTA.

---

### Section 2: Featured Project Sequence

**Viewport:** Each featured project occupies approximately one full viewport.

Three featured projects presented in sequence. Each one is a self-contained moment:

#### Project 1: BillyCheck

**Visual:** Large-scale project image (full-width or near-full-width). The image is the centerpiece.

**Content overlay or adjacent:**
- Client name: BillyCheck (Space Grotesk, large)
- Tags (JetBrains Mono, small): Application Web / SaaS / Intelligence Artificielle / Fintech
- Description (Satoshi, 2 sentences max): Application SaaS d'optimisation de factures energetiques. Upload, analyse IA via GPT-4o Vision, comparaison de 15+ fournisseurs. De l'idee au produit en production.
- Result (JetBrains Mono, accent): 30 secondes pour trouver des economies
- Link: Voir le projet -> /work/billycheck/

**Design notes:**
- This is the first project the visitor sees. It must immediately signal "we build real products."
- Show the app interface. Not a mockup. The actual product.
- The AI angle is a differentiator. Let the tags communicate it.

---

#### Project 2: ChairSplit

**Visual:** Large-scale project image. Different layout from BillyCheck.

**Content:**
- Client name: ChairSplit
- Tags: SaaS / Plateforme Metier / PWA / Multi-Tenant
- Description: Plateforme SaaS de gestion pour barbershops. Revenus, commissions, equipes, fiches de paie. Multi-tenant, mobile-first, modele d'abonnement Stripe.
- Result (JetBrains Mono, accent): Produit SaaS complet en production
- Link: Voir le projet -> /work/chairsplit/

**Design notes:**
- Show the mobile interface. ChairSplit is mobile-first, the visual should reflect that.
- Different visual treatment from BillyCheck to avoid repetition. Could be mobile device framing.
- The "SaaS complet en production" result reinforces the "we ship" positioning.

---

#### Project 3: Greenmood

**Visual:** Large-scale project image.

**Content:**
- Client name: Greenmood
- Tags: UX/UI / Plateforme B2B / Configurateur produit / Design System
- Description: Plateforme B2B pour le leader europeen du design acoustique et biophilique. Architecture d'information, UX/UI et configurateurs produit.
- Link: Voir le projet -> /work/greenmood/

**Design notes:**
- Different energy from the two SaaS projects. More editorial, more premium.
- Shows P-XEL can work at scale with established brands, not just build its own products.
- Configurator screenshots work well here to show product complexity.

---

### Section 3: Secondary Projects

**Viewport:** Both projects share a more compact section. Not individual viewports.

**Design notes:**
- Lighter treatment. Smaller images, shorter descriptions.
- Side by side on desktop, stacked on mobile.
- Still quality presentation, just not featured scale.

#### Oyabun
- Tags: Application Web3 / Gaming / Design UX/UI / Telegram
- Description: Design et conception d'une application Web3 gaming. Interface utilisateur, experience joueur, integration Telegram.
- Link: Voir le projet -> /work/oyabun/

#### Arduenna Gin
- Tags: E-commerce / Strategie d'acquisition / Facebook Ads
- Description: Deux sites e-commerce et 103 campagnes d'acquisition. Deux ans de CA en deux mois.
- Result: 2 ans de CA en 2 mois
- Link: Voir le projet -> /work/arduenna-gin/

---

### Section 4: CTA

**Viewport:** Compact. Follows the last project naturally.

**H2 (Space Grotesk):**
Un projet en tete ?

**Subtext (Satoshi):**
On vous dit en 15 minutes si on est le bon partenaire.

**CTA primary (violet):**
Reserver un appel -> Calendly

**CTA secondary (ghost):**
Lancer mon projet -> /contact/

---

## Visual Rhythm

The page alternates visual weight:

```
Intro (light, typographic)
  |
BillyCheck (large image, app interface, AI angle)
  |
ChairSplit (large image, mobile-first, SaaS angle)
  |
Greenmood (large image, editorial, B2B platform)
  |
Oyabun + Arduenna (compact, side by side, range + results)
  |
CTA (typographic, conclusive)
```

Each featured project has a slightly different visual treatment to prevent monotony while maintaining cohesion. The secondary projects share space to signal hierarchy without diminishing quality.

---

## Homepage Highlights

The homepage (Beat 5: Selected Work) features the same 3 featured projects: BillyCheck, ChairSplit, Greenmood. The work page expands this with the 2 secondary projects.

---

## Case Study Navigation Loop

Each case study links to the next, creating a reading loop:

```
BillyCheck -> ChairSplit -> Greenmood -> Oyabun -> Arduenna -> BillyCheck
```

---

## Internal Links

| From | Links To | Purpose |
|------|----------|---------|
| Project 1 | /work/billycheck/ | Case study deep dive |
| Project 2 | /work/chairsplit/ | Case study deep dive |
| Project 3 | /work/greenmood/ | Case study deep dive |
| Project 4 | /work/oyabun/ | Case study deep dive |
| Project 5 | /work/arduenna-gin/ | Case study deep dive |
| CTA primary | Calendly | Conversion |
| CTA secondary | /contact/ | Conversion |
| Footer | All Phase 1 pages | SEO mesh |

---

## Responsive

- **Mobile:** Projects go full-bleed. One project per scroll. Touch-friendly links. Secondary projects stack vertically.
- **Tablet:** Same sequence, slightly reduced image scale.
- **Desktop:** Maximum visual impact. Featured projects can be asymmetric, overlapping, or full-width. Secondary projects side by side.

---

## Phase 2 Expansion

When Hopscotch, Kokoro, and Paris Crowdfunding case studies ship:
- Add them to the secondary section or promote based on strength
- Consider grouping by capability (SaaS / Platform / Brand) if the page becomes long
- Maintain the curated, featured-first presentation
- Do not switch to a grid layout

---

## Word Count

~200-250 words of visible copy (intro + 5 teasers + CTA). The visuals carry this page.
