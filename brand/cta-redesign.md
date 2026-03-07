# P-XEL CTA System Redesign

## Current State

The Button component has three variants:

- **primary**: `#6608F9` background, white text, 48px height, 4px radius
- **secondary**: transparent background, violet text, 1px violet border
- **ghost**: transparent, white text, no border, dark hover fill

The CTA component is centered text + heading + buttons. No visual container, no accent, no drama.

## The Problems

1. **The primary button is a generic purple pill.** It looks like every SaaS signup button. Nothing about it says "premium studio."
2. **48px height is safe but not commanding.** For a hero CTA, it does not demand attention.
3. **The hover state is just a darker purple.** There is no tactile feedback, no motion signal.
4. **Ghost buttons are invisible.** White text on dark with no border or underline. They read as plain text links.
5. **The CTA section has no visual event.** Just centered text and buttons floating in space. No container, no accent line, no visual frame.

## The Redesign

### Primary Button

The primary button should feel decisive and premium. Not louder, sharper.

```css
.primary {
  background-color: var(--accent);
  color: #ffffff;
  border: none;
  height: 52px;
  padding: 0 var(--space-8);
  font-weight: 600;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  transition:
    background-color var(--duration-fast) var(--ease-in-out),
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.primary:hover {
  background-color: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(102, 8, 249, 0.35);
}

.primary:active {
  background-color: var(--accent-active);
  transform: translateY(0);
  box-shadow: none;
}
```

Key changes:
- **52px height** instead of 48px. 4px taller gives more visual weight without being oversized.
- **Padding 0 32px** instead of 24px. More breathing room.
- **font-weight 600** instead of 500. Slightly bolder.
- **letter-spacing 0.02em**. Subtle openness.
- **Hover: lift + glow**. A 1px translateY + violet box-shadow creates a tactile hover effect. The glow is the signature. It says "this button is alive."
- **Active: press down**. Reset transform and shadow for a click feedback.

### Secondary Button

Replace the current violet-border approach with a more distinctive treatment.

```css
.secondary {
  background-color: transparent;
  color: var(--text-dark-primary);
  border: 1px solid var(--border-dark-hover);
  height: 52px;
  padding: 0 var(--space-8);
  font-weight: 500;
  letter-spacing: 0.02em;
  transition:
    border-color var(--duration-fast) var(--ease-in-out),
    background-color var(--duration-fast) var(--ease-in-out),
    color var(--duration-fast) var(--ease-in-out);
}

.secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
  background-color: var(--accent-subtle);
}
```

Key changes:
- **White text + light border** at rest. Reads as a clear secondary action without disappearing.
- **On hover**: border turns violet, text turns violet, faint violet fill. Clear signal of interactivity.
- **No lift or shadow**. The secondary button is calmer than primary. The hierarchy is clear.

### Ghost Button

The ghost variant should work as a text-link-with-click-area, not a shapeless void.

```css
.ghost {
  background-color: transparent;
  color: var(--text-dark-secondary);
  border: none;
  height: 52px;
  padding: 0 var(--space-6);
  font-weight: 500;
  position: relative;
  transition: color var(--duration-fast) var(--ease-in-out);
}

.ghost::after {
  content: "";
  position: absolute;
  bottom: 14px;
  left: var(--space-6);
  right: var(--space-6);
  height: 1px;
  background-color: var(--text-dark-muted);
  opacity: 0;
  transition:
    opacity var(--duration-fast) var(--ease-in-out),
    background-color var(--duration-fast) var(--ease-in-out);
}

.ghost:hover {
  color: var(--text-dark-primary);
}

.ghost:hover::after {
  opacity: 1;
  background-color: var(--accent);
}
```

Key changes:
- **Muted text at rest**. Lower visual priority. Clear hierarchy.
- **Underline reveal on hover**. A thin accent-colored line slides in under the text. This is more editorial and distinctive than a background fill.
- **No background fill on hover**. The underline IS the hover feedback. Cleaner.

### Light Variant

For use on light background sections (capabilities, process):

```css
.primary-on-light {
  /* Same as primary - violet works on both dark and light */
}

.secondary-on-light {
  background-color: transparent;
  color: var(--text-light-primary);
  border: 1px solid var(--border-light);
}

.secondary-on-light:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.ghost-on-light {
  color: var(--text-light-secondary);
}

.ghost-on-light:hover {
  color: var(--text-light-primary);
}

.ghost-on-light:hover::after {
  background-color: var(--accent);
}
```

This can be handled by adding a `data-theme="light"` context to the Section component or by a simple `onLight` prop on Button.

### The Arrow Indicator

For the primary CTA, consider adding a subtle arrow indicator:

```css
.primary::after {
  content: "→";
  margin-left: var(--space-2);
  transition: transform var(--duration-fast) var(--ease-out);
}

.primary:hover::after {
  transform: translateX(3px);
}
```

This adds a directional cue that reinforces the "action" feel. The arrow slides slightly right on hover. Small detail, big impact.

However: this should ONLY be used on CTA buttons, not on all primary buttons. If the Button component is used for non-CTA contexts, the arrow should be opt-in via a prop, not default.

## CTA Section Redesign

The CTA component (used at the bottom of pages) needs a stronger visual frame.

### Current

```
          heading
          subtext
      [primary] [ghost]
```

Floating in empty dark space. No visual anchoring.

### Proposed

```
+------------------------------------------------------+
|  ────────────────                                      |
|                                                        |
|  heading (text-4xl, tight tracking)                   |
|                                                        |
|  subtext                                               |
|                                                        |
|  [primary CTA →]   ghost link                         |
|                                                        |
|  ────────────────                                      |
+------------------------------------------------------+
```

Key changes:

1. **Horizontal accent lines above and below.** Two thin lines (1px, `var(--accent)`, max-width 120px) frame the content vertically. This creates a visual container without a box.

2. **Larger heading.** Push from `text-4xl` (3rem) to `text-5xl` (3.75rem) on desktop. The CTA heading should hit harder than section headings.

3. **Left-aligned option.** Consider left-aligning the CTA on some pages instead of always centering. Left-aligned CTAs feel more editorial and less generic.

```css
.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-6);
  padding: var(--space-20) 0;
  position: relative;
}

.cta::before,
.cta::after {
  content: "";
  display: block;
  width: 120px;
  height: 1px;
  background-color: var(--accent);
}

.heading {
  font-size: var(--text-5xl);
  font-weight: 700;
  letter-spacing: var(--tracking-tight);
  max-width: 700px;
  line-height: 1.05;
}

.actions {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  margin-top: var(--space-6);
}
```

## Summary of Changes

| Element | Before | After |
|---|---|---|
| Primary height | 48px | 52px |
| Primary padding | 0 24px | 0 32px |
| Primary hover | Color shift only | Lift + violet glow |
| Secondary style | Violet border + text | White border + text, violet on hover |
| Ghost hover | Dark fill | Accent underline reveal |
| CTA heading | text-4xl | text-5xl |
| CTA frame | No container | Accent line accents above/below |
| Letter spacing | None | 0.02em on all buttons |

## Implementation Notes

- All changes are CSS-only. No new components needed.
- Button component API stays identical (variant: primary, secondary, ghost).
- The arrow `::after` should be opt-in if implemented (add a `withArrow` prop).
- The violet glow on hover is the signature detail. It ties the buttons to the P-XEL accent color in a way that feels custom, not template.
- Test the glow on mobile: `box-shadow` with rgba violet should be subtle, not overpowering.
