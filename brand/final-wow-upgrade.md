# P-XEL Phase 1 - Final Visual Upgrade

## Critical Audit

The current site is technically strong, structurally sound, and content-sharp. But visually, it reads as "competent dark theme" rather than "premium product studio that ships."

Here is what is holding it back.

### 1. The hero is flat

- Text on a dark background. No movement, no tension, no editorial drama.
- The hero video (`P-xel_Hero.webm`) exists but is not used. This is a major missed opportunity.
- There is no visual anchor that makes a visitor stop scrolling. The headline does work, but the overall composition does not command the screen.
- The label "Product Design Studio / Liege, BE" is small mono text floating alone. It has no visual weight.

### 2. The CTA system is generic

- Purple pill buttons on dark background. This is indistinguishable from every SaaS landing page built in the last 5 years.
- 48px height, 4px radius, no hover drama. The buttons feel like form elements, not premium conversion instruments.
- Ghost buttons blend into the background. They read as afterthoughts.
- The CTA component (final CTA section) is just centered text + buttons. No visual event. No urgency.

### 3. The visual rhythm is monotonous

- Every section follows the same pattern: dark background, Label, SectionHeading, grid of items. Repeat.
- The only variation is `variant="accent"` which switches from `#0A0A0F` to `#14141A`. This difference is almost invisible.
- There is no light section. No contrast break. No moment where the eye resets.
- The entire page feels like a single infinite dark scroll.

### 4. Typography has no drama

- Heading sizes are functional but not editorial. `--text-6xl` (4.5rem) for the hero headline is big, but the line-height of 1.0 and tight tracking make it feel compressed, not commanding.
- There is no moment of typographic tension: no oversized word, no mixed weight, no split color.
- Labels are so small and muted they barely register as navigation landmarks.

### 5. The grid cards are sterile

- Capability items: 1px border box, no fill, no icon, no visual signal. They look like wireframe components.
- Project cards: placeholder text blocks instead of images. Even with images later, the card design is minimal to the point of being invisible.

### 6. No signature graphic moments

- No geometric accent lines, no grid overlays, no pixel-inspired patterns, no P-XEL signature visual language.
- The favicon has a 2x2 geometric grid concept, but this language appears nowhere in the site itself.
- The logo SVGs have a distinctive geometric construction (offset squares forming the P), but the header just shows "P-XEL" as text.

---

## The Upgrade Strategy

The goal: make the site feel like it was designed by the studio it represents. A premium product studio should have a site that stops you mid-scroll.

### Principle 1: The hero must hit

Replace the flat dark hero with a full-viewport video hero using `P-xel_Hero.webm`. The video plays behind the headline, creating immediate visual authority. This is the single highest-impact change.

See `/brand/hero-redesign.md` for full specification.

### Principle 2: The CTA system must convert harder

Replace generic pill buttons with a distinctive, high-contrast CTA system that feels custom. Larger touch targets, better hover states, visual hierarchy between primary and secondary actions.

See `/brand/cta-redesign.md` for full specification.

### Principle 3: Break the monotony with surface shifts

Introduce strategic light sections to create rhythm:
- **Capabilities section**: switch to `variant="light"` (white/cream background). This creates a contrast break after the dark hero + proof strip. It makes the capabilities cards feel like tangible deliverables instead of dark-on-dark boxes.
- **Process section**: can also work as light. This separates it from the dark Why P-XEL section above.
- Keep hero, proof strip, selected work, why P-XEL, FAQ, and final CTA dark. The contrast between light and dark sections creates a visual breathing rhythm.

### Principle 4: Use the actual logo SVG

The header currently renders "P-XEL" as styled text. Replace with the actual SVG logo from `Logo_P-xel_white.svg`. The geometric P construction with offset violet squares is far more distinctive than text. This is a signature brand moment that costs nothing.

### Principle 5: Add geometric accent language

The P-XEL logo is built from offset squares. Extract this language into subtle graphic accents:
- A thin violet line or square accent next to section headings (left border or offset square).
- The `::before` pseudo-elements on problem points and deliverables already use small accent lines. Amplify this: use 4px square dots instead of 1px lines. This echoes the pixel/square brand DNA.
- Add a subtle grid overlay or dot grid on the hero section (very low opacity, 0.03-0.05). This creates depth without noise.

### Principle 6: Elevate hover and interaction states

Current hover states are too subtle:
- Capability items: border color change from 8% to 16% opacity white. Nearly invisible.
- Project cards: `translateY(-4px)`. Functional but not premium.
- Upgrade: on hover, capability items get a subtle accent glow (`box-shadow: 0 0 0 1px var(--accent)` or a violet left border reveal). Project cards get a slight scale + shadow lift.

### Principle 7: Make the proof strip and stats more impactful

The StatBlock counters are mono text. They work, but they don't hit. Options:
- Make the number larger (text-5xl on desktop).
- Add the accent color to the suffix (+, %).
- Add a thin top border in accent to each stat to create visual weight.

---

## Section-by-Section Impact Map

| Section | Current | Upgrade | Impact |
|---|---|---|---|
| Hero | Dark text only | Full-viewport video hero, overlay text, editorial layout | Maximum |
| Proof Strip | Mono numbers, dark | Larger numbers, accent suffix color, subtle top borders | Medium |
| Client Logos | Muted text names | Keep as-is, these work as understated social proof | Low |
| Capabilities | Dark border cards, no icons | Light background section, stronger cards with accent left border on hover | High |
| Selected Work | Dark placeholder cards | Keep dark, add subtle scale+shadow on hover, images will fix this later | Medium |
| Why P-XEL | Numbered list on slightly different dark | Keep dark accent variant, add violet square markers instead of just numbers | Medium |
| Process | Dark numbered list | Light section for contrast break, add horizontal timeline feel | High |
| FAQ | Standard accordion | Keep dark, add subtle accent indicator on active state | Low |
| Final CTA | Centered text + buttons | Full-width dark section with stronger visual container, upgraded CTA buttons | High |
| Header | Text "P-XEL" | SVG logo from brand assets | High |
| Footer | Standard link grid | Keep as-is, footer is already solid | Low |

---

## What This Does Not Change

- Information architecture stays identical
- Content stays identical
- Component API stays identical
- No new dependencies
- No Phase 2 scope
- All changes are CSS + markup adjustments to existing components
