# P-XEL Hero Redesign

## Current State

The hero is a full-height dark section with:
- A mono Label ("Product Design Studio / Liege, BE")
- An h1 ("On conçoit. On construit. On livre.")
- A paragraph subtitle
- Two buttons (primary + ghost)

No video. No image. No visual event. The hero video `P-xel_Hero.webm` sits unused in `/public/legacy-assets/videos/`.

## The Problem

This hero could belong to any dark-mode tech site. There is nothing that says "this is P-XEL." There is no sensory hook. No visual ambition. A premium product studio needs a hero that shows before it tells.

## The Redesign

### Direction: Video-First Editorial Hero

The hero becomes a full-viewport video canvas with overlaid editorial typography. The video `P-xel_Hero.webm` plays as a background loop. Text sits on top with precise positioning.

### Layout Specification

```
+------------------------------------------------------+
|  [P-XEL logo SVG - white]                    [nav]   |  <- header (existing, now transparent over hero)
|                                                        |
|                                                        |
|  PRODUCT DESIGN STUDIO                                |  <- label, now larger
|                                                        |
|  On conçoit.                                          |  <- headline line 1
|  On construit.                                        |  <- headline line 2
|  On livre.                                            |  <- headline line 3
|                                                        |
|  Produits digitaux premium...                         |  <- subtitle
|                                                        |
|  [Reserver un appel]  [Voir nos projets]              |  <- CTA row
|                                                        |
|                                                        |
|                              Liege, BE  ·  Since 2008 |  <- bottom-right anchor
+------------------------------------------------------+
```

### Video Integration

**File**: `/public/legacy-assets/videos/P-xel_Hero.webm`

```html
<section class="hero">
  <video
    class="heroVideo"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    poster="/images/hero-poster.webp"  <!-- static fallback frame -->
  >
    <source src="/legacy-assets/videos/P-xel_Hero.webm" type="video/webm" />
  </video>
  <div class="heroOverlay" />
  <div class="heroContent">
    <!-- text and CTAs -->
  </div>
</section>
```

### Video CSS

```css
.hero {
  position: relative;
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.heroVideo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.heroOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 15, 0.4) 0%,
    rgba(10, 10, 15, 0.6) 50%,
    rgba(10, 10, 15, 0.85) 100%
  );
  z-index: 1;
}

.heroContent {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--grid-margin);
}
```

### Key Design Decisions

**Overlay gradient**: Not a flat color. A vertical gradient that is lighter at the top (letting the video breathe) and darker at the bottom (ensuring text readability). The text lives in the lower half where contrast is strongest.

**Text color**: White (`#F5F5F7`) on overlay. If the video is light/bright, the gradient ensures readability. No need for a separate color mode.

**Headline treatment**: The three-sentence headline should break naturally across three lines. Each line gets its own visual weight. Consider making the period (.) in accent color for a subtle signature touch.

**Label upgrade**: Instead of the tiny mono label, make it slightly larger (`text-sm`), with wider tracking, and place it higher in the composition. It anchors the context before the eye hits the headline.

### Header Modification

The header currently has `background: rgba(10, 10, 15, 0.9)` with backdrop-filter. On the hero, this should become fully transparent so the video is visible behind it. Once the user scrolls past the hero, the header returns to its blurred dark state.

This requires:
- A `variant` prop or class on the header (transparent vs. solid)
- An Intersection Observer on the hero section to toggle header state
- OR: simply make the header always transparent with backdrop-filter. When scrolled, the dark page background behind it creates the same visual effect.

Simplest approach: keep `backdrop-filter: blur(12px)` but change background to `rgba(10, 10, 15, 0.5)`. This works over both video and dark sections. No JS needed.

### Bottom Anchor

A small typographic element in the bottom-right of the hero:

```
Liege, BE  ·  Since 2008
```

In mono, uppercase, muted color. This grounds the hero with location and credibility without adding visual noise.

### Mobile Adaptation

- Video still plays fullscreen (WebM is 218KB, lightweight enough for mobile)
- Headline drops from `text-6xl` to `text-4xl` (already handled)
- CTAs stack vertically (already handled)
- Bottom anchor moves to bottom-left, single line
- Overlay gradient gets slightly darker on mobile for contrast safety

### Performance Considerations

- `P-xel_Hero.webm` is 218KB. This is very small for a hero video. No performance concern.
- Add `preload="metadata"` to avoid blocking first paint
- Add a static poster image as fallback (extract a frame from the video, save as WebP)
- The `playsinline` attribute is critical for iOS (prevents fullscreen takeover)
- Users with `prefers-reduced-motion: reduce` get the poster image only (pause the video)

### What This Replaces

- Current: `<Section fullHeight>` containing a `.hero` div with text
- New: A custom hero section with `<video>`, overlay, and positioned content
- The hero no longer uses the Section component. It is a standalone full-viewport block.

### Emotional Effect

The visitor lands on a site where the first thing they see is motion, depth, and a commanding headline. It says: "this studio doesn't just talk about making things, they show it." The video creates an atmosphere. The typography creates authority. The CTA creates a path.

This is the single highest-impact change in the entire upgrade.
