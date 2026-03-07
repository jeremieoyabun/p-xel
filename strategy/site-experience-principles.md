# Site Experience Principles - P-XEL Studio

Design and build principles for a fully custom, premium, future-facing website. These override any standard agency/freelance website conventions.

---

## Principle 1: The Site Is the Portfolio

The strongest case study is the site itself. Every interaction, every transition, every layout decision is a demonstration of what P-XEL can do for a client's product.

**Implications:**
- No section should look like it came from a template library
- Custom interactions that feel designed, not assembled
- The technical execution (performance, animation fluidity, responsive behavior) must be flawless because visitors will judge P-XEL's capability through it
- If a competitor could swap in their logo and the page would still work, the page is not custom enough

---

## Principle 2: Feel First, Explain Second

The visitor's first impression is emotional, not rational. The site must create an immediate feeling of quality, precision, and modernity before any word is read.

**Implications:**
- Typography, spacing, contrast, and motion do the first 3 seconds of work
- Headlines confirm what the visitor already feels, they do not create the feeling
- Visual hierarchy guides the eye before the brain engages
- The dark canvas, the violet precision, the geometric atmosphere: these are felt before they are analyzed

**The feeling we are designing for:**
"This is clearly top-tier. I want my product to feel like this."

---

## Principle 3: Narrative Scroll, Not Information Dump

The homepage is a story told through scroll. Each viewport advances the narrative. The visitor never feels lost, overwhelmed, or bored.

**Implications:**
- One idea per viewport at any breakpoint
- Sections have clear entry and exit rhythms (content reveals as it enters, settles as it is read)
- The scroll itself is part of the design: pacing, density changes, and visual contrast create a reading tempo
- No section is skippable because no section is filler

**The narrative arc:**

| Beat | What the visitor experiences | Emotional state |
|------|----------------------------|-----------------|
| 1. Arrival | Dark canvas. Bold statement. Precision. | Intrigue, respect |
| 2. Clarity | What P-XEL does. Three verbs. Concrete. | Understanding |
| 3. Proof | Numbers, logos, credibility. Fast. | Trust begins |
| 4. Capability | What P-XEL builds. Shown, not listed. | Desire forms |
| 5. Evidence | Work that shipped. Results that happened. | Trust deepens |
| 6. Process | How it works. Simple. Fast. Clear. | Friction dissolves |
| 7. Intelligence | AI-native, modern stack, future-ready. | Differentiation |
| 8. Objections | FAQ, pricing context, timeline clarity. | Doubt handled |
| 9. Action | Book a call. One step. No friction. | Decision made |

---

## Principle 4: Precision Over Decoration

Every element earns its place. If something is decorative, it must also be functional. If something is functional, it should also be beautiful.

**Implications:**
- No ornamental gradients, blobs, meshes, or floating shapes
- Geometric elements serve as structural markers, not decoration
- Negative space is a design tool, not leftover room
- Violet is surgical: CTAs, active states, key accents. Never ambient.
- Lines, borders, and dividers are architectural, not decorative
- If a section looks the same without an element, that element should not exist

---

## Principle 5: Typography as Architecture

Type is not just content delivery. It is the primary visual material of the site. The typographic system creates hierarchy, rhythm, and identity.

**Implications:**
- Space Grotesk headlines at large scale create the visual identity of each section
- Size contrasts are dramatic (display type vs body creates clear hierarchy without needing visual noise)
- JetBrains Mono labels, stats, and metadata create a technical layer that signals "this studio builds things"
- Satoshi body text is clean and readable without being invisible
- Letter-spacing, line-height, and weight variations create texture within the type system itself
- No need for icons, illustrations, or graphics when typography carries the design

---

## Principle 6: Motion With Purpose

Every animation communicates something. Nothing moves for the sake of movement.

**Implications:**
- Scroll-triggered reveals: content enters with intention (fade-in-up, staggered children)
- Hover states: micro-confirmations that the interface is alive (underline grows, opacity shifts, border appears)
- Page transitions: smooth, fast, continuous (the site feels like one product, not separate pages)
- Stats/numbers: count up on scroll to create a moment of impact
- No parallax scrolling
- No floating particles, orbs, or ambient animation
- No loading animations that exist because the site is slow
- Reduced motion respected: `prefers-reduced-motion` kills all animation

**Motion budget:** Every animation under 500ms. Most under 300ms. The site should feel fast and precise, not cinematic and slow.

---

## Principle 7: Dark Canvas as Foundation

The dark surface is not a theme. It is the identity. It is architectural, not cosmetic.

**Implications:**
- `#0A0A0F` is the ground plane. Everything is placed on it.
- Surface elevation (secondary, tertiary) creates depth without shadows
- Light sections (`#F8F7F4`) are used only where extended reading demands it (blog posts, FAQ answers, legal pages)
- The dark-to-light transition, when it happens, is a deliberate design moment, not a random switch
- Images, case study visuals, and portfolio pieces sit on the dark canvas like objects in a gallery
- The contrast ratio between dark surfaces and light text must exceed WCAG AA at every level

---

## Principle 8: Conversion Through Quality, Not Pressure

The site does not push. It pulls. The quality of the experience creates the desire to work with P-XEL. The CTA is the release valve, not the pressure source.

**Implications:**
- CTAs are visible but not aggressive. They appear at natural decision points.
- No sticky CTA bars that follow the scroll
- No popups, no exit-intent modals, no countdown timers
- No "limited spots available" or artificial scarcity
- The Calendly booking is positioned as the logical next step, not a sales trick
- CTA copy is direct: "Reserver un appel" / "Lancer mon projet." No cleverness.
- The primary CTA appears exactly 3 times on the homepage: hero, mid-page, end. Not more.

**The conversion logic:**
1. The experience builds desire
2. The case studies build trust
3. The process builds clarity
4. The CTA appears when the visitor is ready, not before

---

## Principle 9: Performance Is Part of the Experience

A premium site that loads slowly is not premium. Speed is a design material.

**Implications:**
- Target: < 1s perceived load time on any modern connection
- LCP under 1.5s, CLS near zero, FID under 50ms
- No hero images that block first paint. Typography and color carry the initial viewport.
- Case study images: WebP, lazy-loaded, progressive
- Fonts: self-hosted, subsetted, preloaded (< 80KB total)
- JavaScript: minimal client-side. SSG/ISR for all content pages.
- Animations: CSS-driven where possible, GSAP only where CSS cannot achieve the desired motion
- The site should feel instant. Not fast. Instant.

---

## Principle 10: Responsive as a First-Class Design

Mobile is not a compressed desktop. Mobile is its own design.

**Implications:**
- The mobile experience is designed separately, not just reflowed
- Typography scale adjusts to maintain the same visual impact on smaller screens
- Touch targets are generous (48px minimum)
- The narrative scroll works on mobile: same story arc, adapted presentation
- No horizontal scrolling on any content
- No hover-dependent interactions without a tap-based fallback
- Case study images and portfolio pieces are full-bleed on mobile for maximum visual impact
- Navigation: minimal, clean, no hamburger menu with 15 links. Maximum clarity.

---

## Principle 11: SEO and Experience Coexist

Search engines see structure and content. Visitors see an experience. Both are satisfied without compromise.

**Implications:**
- Semantic HTML under the visual layer: proper heading hierarchy, landmarks, ARIA where needed
- Service page URLs exist and are indexable, but the visual experience is not constrained by SEO page architecture
- Schema markup is comprehensive (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList) but invisible to the visitor
- Meta titles and descriptions follow the keyword map. The visible headlines follow the creative direction.
- Blog posts and city pages serve SEO entry points. Once the visitor arrives, the experience takes over.
- Internal linking is woven into the narrative, not bolted on as a footer link list

---

## Principle 12: AI-Native Means Invisible Intelligence

AI capability is demonstrated through the sophistication of the product, not through AI-themed design.

**Implications:**
- No "AI" badges, neural network graphics, or robot imagery
- If the site uses AI (e.g., intelligent project intake, personalized content), the visitor experiences the intelligence without being told it is AI
- The AI angle in copy is about outcomes ("configurateurs intelligents", "automatisations", "interfaces adaptatives"), not about technology names
- P-XEL's AI fluency is proven by the quality of the thinking and execution on display, not by AI marketing

---

## Summary: The Quality Standard

Before any section, page, or interaction is considered complete, it must pass this test:

**Would a world-class product designer look at this and think: "This studio clearly knows what they are doing"?**

If the answer is not an immediate yes, it is not done.

---

## What These Principles Replace

| Old approach | New approach |
|-------------|-------------|
| Sitemap-first design | Experience-first design |
| Service page template applied 5 times | Purpose-built capability narratives |
| Portfolio as a grid of thumbnails | Case studies as experiential proof |
| FAQ as a collapsible list | FAQ woven into the narrative where objections naturally arise |
| CTA as a repeated button | CTA as a natural decision point after desire is built |
| Mobile as responsive reflow | Mobile as a designed experience |
| Dark mode as a theme toggle | Dark canvas as the architectural foundation |
| Animation as polish | Motion as communication |
| Content-first then design | Feeling-first, confirmed by content |
| Template + custom styling | Fully custom, zero templates |
