# Studio Page Structure - P-XEL Studio

Blueprint for `/studio/` as the credibility and connection page. Replaces the standard "about" page. This is not a CV. It is the page that makes a visitor choose P-XEL over every other option.

---

## Page Intent

This page answers three questions:
1. "Who is behind P-XEL?"
2. "How do they think and work?"
3. "Why should I trust this studio with my product?"

The answer is not a list of values, a team grid, or a timeline. It is a narrative that makes the visitor feel they are about to work with someone exceptional.

---

## SEO Brief

- **Search intent:** Navigational / trust-building. Visitors already considering P-XEL, looking for depth.
- **Primary keyword:** studio design Liege (low priority, the page's value is conversion, not search)
- **Title tag:** Studio | P-XEL Studio
- **Meta description:** Un studio. Un fondateur. 16 ans d'expertise produit. On conçoit, construit et livre des produits digitaux premium. Decouvrez comment on travaille.
- **Schema:** WebPage, BreadcrumbList, Person (founder), Organization
- **URL:** /studio/

---

## Design Philosophy

This is NOT an about page. No stock photos. No generic values grid. No team carousel of headshots. No timeline infographic.

The page has the editorial quality of a magazine profile and the visual precision of the homepage. The founder's voice comes through without the page becoming a personal blog. The philosophy is shown through how the page itself is designed, not through bullet points about "quality" and "innovation."

**This page must answer the unspoken question:** "Am I trusting a person or a faceless entity?" The answer is a person, backed by a system.

**References (feeling, not copying):**
- A designer's personal manifesto published as a physical booklet
- The "about" section of a Michelin-starred chef's restaurant site
- A product studio's case for why they exist

---

## Page Structure (6 beats)

### Beat 1: Opening

**Viewport:** Less than full. An entrance, not a hero.

**Label (JetBrains Mono, small):**
Studio

**H1 (Space Grotesk, display):**
Un studio. Pas une agence.

**Subtext (Satoshi, text-md):**
P-XEL est un studio produit fonde et dirige par un designer-developpeur senior. On ne vend pas des heures. On livre des produits.

**Design notes:**
- Same dark canvas entry as the homepage and work page. Consistent atmosphere.
- The distinction "studio vs agence" is the hook. It immediately positions.
- No image here. Typography carries the opening.

---

### Beat 2: The Founder

**Viewport:** Approximately one viewport. The most human moment on the site.

**Label (JetBrains Mono, small):**
Le fondateur

**H2 (Space Grotesk):**
16 ans a concevoir des produits qui tournent en production.

**Body (Satoshi):**
The founder's story. Not a biography. A positioning narrative in first person ("je" for this section only, then back to "on"). Three paragraphs maximum:

1. **The origin** - What shaped the approach. Not "I studied X at Y." More like: what problem was encountered, what conviction was formed, why this studio exists.
2. **The philosophy** - What makes P-XEL different from an agency with 30 people and a project manager you've never met. The direct relationship, the end-to-end execution, the refusal to deliver maquettes without shipping.
3. **The proof** - Not stats (those come later). A sentence that anchors credibility: "J'ai conçu des plateformes pour le leader europeen du design biophilique, lance des SaaS en production, et genere deux ans de CA en deux mois pour un client."

**Visual:** One high-quality photo of the founder. Not a corporate headshot. Not casual behind-a-laptop. Something that communicates: precision, creative confidence, approachability. The image is editorial, not stock.

**Design notes:**
- This is the only section on the entire site that uses "je." It creates a deliberate shift in voice that makes the moment feel personal.
- The photo is large enough to matter but does not dominate. The text carries the weight.
- No name card or title card. The founder's name and role are stated naturally in the text, not in a caption.

---

### Beat 3: Philosophy / How We Think

**Viewport:** Approximately one viewport. The intellectual credibility section.

**Label (JetBrains Mono, small):**
Comment on pense

**H2 (Space Grotesk):**
Le produit d'abord. Tout le reste en decoule.

**Content:** Three sharp principles, each with a one-line headline and a two-sentence explanation. These are not generic values ("quality, innovation, transparency"). They are specific to P-XEL's way of working:

**Principle 1: On pense en produit, pas en livrables**
Chaque projet commence par la question : "Qu'est-ce que ce produit doit accomplir ?" Pas par un cahier des charges de 50 pages ou une liste de fonctionnalites. On conçoit des systemes qui fonctionnent, pas des fichiers qui s'empilent.

**Principle 2: On conçoit et on execute. Pas l'un ou l'autre.**
La plupart des studios s'arretent au Figma. On va jusqu'au deploiement. Design, code, mise en production. Le client reçoit un produit fonctionnel, pas une presentation.

**Principle 3: Un seul interlocuteur, de A a Z.**
Pas de compte manager. Pas de sous-traitance. Le fondateur est implique dans chaque projet du premier brief au dernier deploy. La qualite ne se dilue pas dans une chaine de delegation.

**Design notes:**
- Three blocks, not a grid of six or eight. Three is enough. Each must be undeniably true and differentiating.
- The formatting is restrained: headline + explanation. No icons. No illustrations. Typography and spacing do the work.
- These principles should feel like convictions, not marketing claims.

---

### Beat 4: What We Build / Capability Overview

**Viewport:** Compact. A bridge section, not a deep dive.

**Label (JetBrains Mono, small):**
Ce qu'on construit

**H2 (Space Grotesk):**
Du concept au produit qui tourne.

**Content:** A concise capability list that mirrors the homepage but with slightly more depth. Not a services page. A reminder of range:

**Applications web et SaaS**
De l'idee au produit en production. BillyCheck, ChairSplit : deux SaaS conçus, construits et deployes par notre studio.

**Sites web et e-commerce**
Sites vitrines, plateformes, e-commerce. Optimises pour le SEO, la vitesse et la conversion.

**Design d'interface**
UX research, UI design, design systems. Des interfaces pensees pour l'usage, pas pour la decoration.

**Identite de marque**
Logo, direction artistique, systemes visuels. Des marques construites pour durer.

**Design notes:**
- Each capability gets 2 lines maximum. This is an overview, not a service page.
- Links to service pages are embedded but subtle (for SEO, not as primary navigation).
- The BillyCheck/ChairSplit reference in the first item is deliberate: it immediately grounds "web apps" in real, shipped products.

---

### Beat 5: Proof

**Viewport:** Compact. Numbers that hit.

**Label (JetBrains Mono, small):**
En chiffres

**Stats layout (JetBrains Mono numbers + Satoshi labels):**

| Number | Label |
|--------|-------|
| 16+ | annees d'expertise |
| 49+ | projets livres |
| 98% | clients satisfaits |
| 5 | produits en production |

**Design notes:**
- Same counter animation as homepage proof strip. Numbers count up on scroll.
- The 4th stat ("5 produits en production") is new and differentiating. It says: we don't just design, we ship things that are running right now.
- Compact row. No section padding inflation. The numbers speak.

---

### Beat 6: Process

**Viewport:** One viewport. The operational clarity section.

**Label (JetBrains Mono, small):**
Comment on travaille

**H2 (Space Grotesk):**
Du brief au lancement. Sans friction.

**Content:** Four steps, same as homepage but with slightly more detail:

**01 / Premier contact**
Decrivez votre projet en quelques lignes via le formulaire ou par email. On repond sous 24h avec un premier retour.

**02 / Appel decouverte**
30 minutes pour comprendre vos objectifs, vos contraintes et vos attentes. On valide ensemble si le projet est un bon fit.

**03 / Proposition claire**
Perimetre, livrables, planning et budget. Tout est pose noir sur blanc. Pas de surprises, pas de zones grises.

**04 / On construit**
Design, developpement, iterations. Vous suivez l'avancement en temps reel. On livre un produit fini, pas un draft.

**Design notes:**
- Numbered steps with strong visual hierarchy (step number in mono, title in Space Grotesk, description in Satoshi).
- This mirrors the homepage process but the studio page version adds confidence through slightly more detail.
- The process should feel effortless and professional, not bureaucratic.

---

### Beat 7: CTA

**Viewport:** Compact. Natural conclusion.

**H2 (Space Grotesk):**
Pret a construire ?

**Subtext (Satoshi):**
On vous dit en 15 minutes si on est le bon partenaire pour votre projet.

**CTA primary (violet):**
Reserver un appel -> Calendly

**CTA secondary (ghost):**
Lancer mon projet -> /contact/

**Design notes:**
- Identical CTA pattern to the homepage and work page. Consistent across the site.
- The "15 minutes" framing is low-commitment and specific.
- The page flows naturally into this CTA after process. The visitor knows who P-XEL is, how they think, what they build, and how they work. The call is the logical next step.

---

## Visual Rhythm

```
Opening (typographic, positioning statement)
  |
Founder (editorial, human, one photo)
  |
Philosophy (three principles, conviction-driven)
  |
Capabilities (compact overview, grounded in real projects)
  |
Proof (numbers, counter animation)
  |
Process (four steps, clarity)
  |
CTA (conclusive, low-friction)
```

The page moves from personal (founder) to intellectual (philosophy) to concrete (capabilities, proof, process) to action (CTA). Each beat builds on the previous one.

---

## What This Page Is NOT

- Not a team page (P-XEL is a solo studio with collaborators, not a team of 8)
- Not a timeline ("founded in 2010, grew to...")
- Not a values grid ("Quality. Innovation. Passion.")
- Not a mission statement ("Our mission is to empower brands through...")
- Not a client testimonial gallery (testimonials are woven into case studies, not isolated here)
- Not a tech stack showcase (the stack is visible in case studies, not on the studio page)

---

## Internal Links

| From | Links To | Purpose |
|------|----------|---------|
| Capability: Apps & SaaS | /services/application-web-mvp/ | SEO link |
| Capability: Sites web | /services/creation-site-web/ | SEO link |
| CTA primary | Calendly | Conversion |
| CTA secondary | /contact/ | Conversion |
| Footer | All Phase 1 pages | SEO mesh |

---

## Responsive

- **Mobile:** Single column. Founder photo is full-bleed. Principles stack vertically. Stats in 2x2 grid. Process steps stack.
- **Tablet:** Same structure, slightly wider text column.
- **Desktop:** Founder photo and text side by side. Principles in a row of 3. Stats in a single row. Process in a row or staggered.

---

## Word Count

Estimated: ~600-700 words of visible copy. The page is textually dense compared to the homepage and work page, but every word earns its place.
