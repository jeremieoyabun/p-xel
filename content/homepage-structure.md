# Homepage Structure - P-XEL Studio

Blueprint for the homepage as a narrative experience. This document defines intent, structure, pacing, and design direction. The copy lives in `/content/homepage.md`.

---

## Homepage Intent

This page is the core product of the site. It must accomplish five things in sequence:

1. **Visceral impact** (0-3s). The visitor feels quality before reading a word.
2. **Clarity** (3-10s). The visitor understands what P-XEL does.
3. **Credibility** (10-30s). The visitor's skepticism is addressed through proof.
4. **Desire** (30-60s). The visitor sees work and capability that exceeds expectations.
5. **Action** (60s+). The visitor books a call because it feels like the obvious next step.

---

## SEO Brief

- **Search intent:** Navigational + commercial. Brand queries, studio queries, Liege digital agency queries.
- **Primary keyword:** studio digital Liege
- **Secondary keywords:** agence web Liege, creation site web Belgique, product design studio, agence digitale Liege, studio design produit Belgique
- **Title tag:** P-XEL Studio | Design, Code & Lancement de Produits Digitaux
- **Meta description:** Studio digital a Liege. On conçoit, construit et livre des produits digitaux premium. Sites, applications, MVP, branding. Reservez un appel.
- **Schema:** Organization, LocalBusiness, WebSite, BreadcrumbList, FAQPage

---

## Narrative Structure (9 beats)

The homepage is a scroll-driven narrative. One idea per viewport. Each beat advances the story and shifts the visitor's emotional state.

### Beat 1: Arrival
**Section:** Hero
**Viewport:** Full screen (100vh)
**Emotional state:** Intrigue, respect
**What happens:** Dark canvas. Bold typography. The headline appears with restrained motion. The visitor feels precision and premium quality before processing the words.
**Design notes:**
- Typography-driven. No hero image. No illustration. The type IS the visual.
- Space Grotesk at display scale. Maximum contrast against #0A0A0F.
- Label in JetBrains Mono anchors the positioning (studio type + location).
- Two CTAs: primary (violet, Calendly) and secondary (ghost, work page).
- Generous negative space. Nothing competes with the headline.

### Beat 2: Authority
**Section:** Proof strip
**Viewport:** Compact (not a full viewport, attached to the transition out of hero)
**Emotional state:** Trust begins
**What happens:** Three numbers appear. Fast. No explanation needed. The visitor processes "16+ years, 49+ projects, 98% satisfaction" in under 2 seconds.
**Design notes:**
- JetBrains Mono for numbers. Satoshi for labels.
- Counter animation on scroll-into-view (count up, 800ms, no bounce).
- Subtle border-top or border-bottom to frame the strip.
- This section is a bridge, not a destination. It should feel like a pause between the hero and the next beat.

### Beat 3: Trust signal
**Section:** Client logos
**Viewport:** Compact (combined with proof strip or immediately after)
**Emotional state:** Recognition, social proof
**What happens:** Logos of real clients. Grayscale. No fanfare. The visitor sees recognizable names and registers "others have trusted this studio."
**Design notes:**
- Grayscale by default. No hover effects (this is not an interaction moment, it is a background trust signal).
- Single row, evenly spaced. No carousel. No animation.
- Small label in mono: "Ils nous font confiance" or no label at all.

### Beat 4: Capability
**Section:** What we build
**Viewport:** Full viewport or slightly more
**Emotional state:** Understanding, desire forms
**What happens:** The visitor sees what P-XEL builds. Not a grid of 4 service cards. A unified statement of capability that shows range without fragmenting into silos. The framing is: "Here is the spectrum of what we ship."
**Design notes:**
- NOT a services grid. This is a capability narrative.
- Each capability is introduced through a word or phrase, not a paragraph. Think: typographic reveal, not copywriting block.
- Links to service pages are present but subtle (for SEO and for visitors who want to go deeper). They are not the main interaction.
- The visual treatment makes the capabilities feel connected, not siloed.
- Consider: a single flowing section where capabilities appear in sequence, or a bold typographic list with descriptions that expand on hover/tap.

### Beat 5: Evidence
**Section:** Selected work
**Viewport:** Large (this is the most important proof section)
**Emotional state:** Trust deepens, desire intensifies
**What happens:** Three projects. Each presented with scale and impact. Not thumbnails in a grid. Large visuals, clear results, minimal text. The visitor sees the quality of the output and thinks "I want this for my product."
**Design notes:**
- Full-width or near-full-width project visuals. The work should feel big.
- Each project: visual + client name + tags + one-line description + measurable result (in mono) + link to case study.
- Staggered layout or sequential scroll reveal. Each project gets its moment.
- Results are prominent: "30 secondes pour trouver des economies" and "Produit SaaS complet en production" should hit hard.
- CTA after the third project: "Voir tous les projets" linking to /work/.
- Phase 1 shows 3 featured projects: BillyCheck, ChairSplit, Greenmood.

### Beat 6: Differentiation
**Section:** Why P-XEL
**Viewport:** Full viewport
**Emotional state:** Distinction from competitors
**What happens:** The visitor understands WHY P-XEL is different. Not a list of features. Three sharp differentiators, each with a concrete proof point. This section answers the unspoken question: "What makes you different from the 50 other studios I could contact?"
**Design notes:**
- Three differentiators, not four, not five. Restraint.
- Each differentiator: bold statement + 1-2 sentence explanation + proof point.
- Typography-driven. No icons. The words carry the weight.
- Consider a dark-on-dark layout with subtle surface elevation to create visual separation from surrounding sections.

### Beat 7: Process
**Section:** How it works
**Viewport:** Full viewport
**Emotional state:** Friction dissolves
**What happens:** Four steps. Simple. The visitor sees that working with P-XEL is straightforward. The process section reduces anxiety ("what happens if I click the CTA?") and makes the next step feel easy.
**Design notes:**
- Four numbered steps in JetBrains Mono (01, 02, 03, 04).
- Compact. Each step is a title + one sentence. No walls of text.
- CTA at the end: "Reserver un appel" (this is the mid-page CTA, the second of three).
- Consider a horizontal scroll or a compact vertical layout. The process should not feel long.

### Beat 8: Objections
**Section:** FAQ
**Viewport:** Approximately one viewport
**Emotional state:** Doubt handled
**What happens:** The most common questions are answered before the visitor has to ask. Pricing, timelines, scope, location, development capability. This section catches visitors who are interested but have lingering doubts.
**Design notes:**
- Accordion or static list. No complex interaction needed.
- 5-6 questions maximum.
- Light background option (`#F8F7F4`) for readability contrast, or stay dark with careful typography.
- FAQPage schema markup for each question.

### Beat 9: Action
**Section:** Final CTA
**Viewport:** Full viewport (the last thing the visitor sees)
**Emotional state:** Decision made
**What happens:** One clear invitation. The visitor has seen enough. The CTA is bold, simple, and feels like a natural conclusion to the narrative.
**Design notes:**
- Large display headline. No paragraph. The headline IS the CTA context.
- Two buttons: primary "Reserver un appel" (Calendly) + secondary "Lancer mon projet" (/contact/).
- Generous negative space. Let the CTA breathe.
- This section should feel conclusive, not repetitive. It is a resolution, not another pitch.

---

## CTA Placement (3 total)

| Location | CTA | Destination |
|----------|-----|------------|
| Beat 1 (Hero) | Primary: "Reserver un appel" / Secondary: "Voir nos projets" | Calendly / /work/ |
| Beat 7 (Process) | "Reserver un appel" | Calendly |
| Beat 9 (Final) | Primary: "Reserver un appel" / Secondary: "Lancer mon projet" | Calendly / /contact/ |

Three CTA moments. Not more. Each appears at a natural decision point.

---

## Internal Links From Homepage

| Section | Links To | Purpose |
|---------|----------|---------|
| Hero secondary CTA | /work/ | Visitors who want proof before action |
| Capability section | /services/creation-site-web/ | SEO link equity + deeper reading |
| Capability section | /services/application-web-mvp/ | Same |
| Project: BillyCheck | /work/billycheck/ | Case study deep dive |
| Project: ChairSplit | /work/chairsplit/ | Case study deep dive |
| Project: Greenmood | /work/greenmood/ | Case study deep dive |
| Work CTA | /work/ | Full portfolio |
| Process CTA | Calendly | Conversion |
| Final CTA primary | Calendly | Conversion |
| Final CTA secondary | /contact/ | Conversion (form path) |
| Footer | All Phase 1 pages | SEO link mesh |

---

## What This Structure Does NOT Include

| Omitted | Why |
|---------|-----|
| Services grid (4-5 cards) | Agency pattern. The capability section replaces it with a narrative approach. |
| Performance/SEO block | A standalone section about "we optimize for performance" is self-congratulatory. Performance is demonstrated by the site itself. Remove as a section, embed as a proof point within differentiators or FAQ if needed. |
| AI workflow block | AI as a separate section is marketing. AI fluency is demonstrated through the sophistication of the experience. Mention AI within the capability narrative or as a differentiator, not as its own section. |
| Testimonials section | No testimonials yet. When available, they can be woven into the evidence section next to relevant projects, not as a standalone carousel. |
| Blog highlights | No blog in Phase 1. When blog launches in Phase 2, consider a compact "latest" section, but it is not a homepage priority. |

---

## Responsive Considerations

- **Mobile:** Same 9 beats. Same narrative arc. Adapted presentation (single column, adjusted type scale, touch-friendly CTAs).
- **Hero:** Full viewport on all devices. Headline may wrap to 2-3 lines on mobile. That is fine. Size > elegance at this scale.
- **Work section:** Projects go full-bleed on mobile for maximum visual impact.
- **FAQ:** Accordion on mobile. May be open on desktop if space allows.
- **CTAs:** 48px minimum touch targets. Full-width buttons on mobile.

---

## Estimated Word Count

~1,000-1,200 words of visible copy (excluding metadata and structural notes).
The homepage is not a long read. It is a designed experience where every word earns its place.
