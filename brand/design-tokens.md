# Design Tokens - P-XEL Studio

Based on: Architect Noir direction

---

## Colors

### Surfaces

```css
--surface-primary: #0A0A0F;       /* Main dark background */
--surface-secondary: #14141A;     /* Elevated dark surfaces, cards */
--surface-tertiary: #1E1E28;      /* Subtle elevation on dark (hover states) */
--surface-light: #F8F7F4;         /* Light sections (blog, FAQ, readability) */
--surface-white: #FFFFFF;         /* Pure white backgrounds */
```

### Accent

```css
--accent: #6608F9;                /* Primary violet - CTAs, highlights */
--accent-hover: #5506D4;          /* CTA hover state */
--accent-active: #4A05B8;         /* CTA active/pressed state */
--accent-muted: rgba(102, 8, 249, 0.15);  /* Hover fills, subtle borders */
--accent-subtle: rgba(102, 8, 249, 0.08); /* Very subtle backgrounds */
```

### Text on Dark

```css
--text-dark-primary: #F5F5F7;     /* Headings, key content */
--text-dark-secondary: #8A8A9A;   /* Descriptions, meta */
--text-dark-muted: #5A5A6A;       /* Timestamps, labels, fine print */
```

### Text on Light

```css
--text-light-primary: #111111;    /* Headings, body text */
--text-light-secondary: #555555;  /* Descriptions, meta */
--text-light-muted: #999999;      /* Timestamps, labels */
```

### Borders

```css
--border-dark: rgba(255, 255, 255, 0.08);  /* Subtle dividers on dark */
--border-dark-hover: rgba(255, 255, 255, 0.16);  /* Hover emphasis */
--border-light: #E5E5E5;          /* Dividers on light */
--border-accent: rgba(102, 8, 249, 0.3);   /* Accent borders */
```

---

## Typography

### Font Families

```css
--font-heading: 'Space Grotesk', system-ui, sans-serif;
--font-body: 'Satoshi', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Font Files (self-hosted, WOFF2, subsetted)

| Font | Weights | Subsets | Budget |
|------|---------|--------|--------|
| Space Grotesk | 500, 700 | Latin, Latin Extended | < 30KB |
| Satoshi | 400, 500, 700 | Latin | < 35KB |
| JetBrains Mono | 400 | Latin (numbers + symbols priority) | < 15KB |
| **Total** | | | **< 80KB** |

### Type Scale

Based on a 1.25 ratio (Major Third), anchored at 16px body.

| Token | Size | Line Height | Weight | Font | Use |
|-------|------|-------------|--------|------|-----|
| --text-xs | 12px / 0.75rem | 1.5 | 400 | mono | Labels, timestamps |
| --text-sm | 14px / 0.875rem | 1.5 | 400 | body | Captions, meta |
| --text-base | 16px / 1rem | 1.6 | 400 | body | Body text |
| --text-md | 18px / 1.125rem | 1.6 | 400 | body | Lead paragraphs |
| --text-lg | 20px / 1.25rem | 1.4 | 500 | body | Subheadings, intro |
| --text-xl | 24px / 1.5rem | 1.3 | 500 | heading | H4 |
| --text-2xl | 30px / 1.875rem | 1.2 | 700 | heading | H3 |
| --text-3xl | 36px / 2.25rem | 1.15 | 700 | heading | H2 |
| --text-4xl | 48px / 3rem | 1.1 | 700 | heading | H1 (inner pages) |
| --text-5xl | 60px / 3.75rem | 1.05 | 700 | heading | H1 (homepage) |
| --text-6xl | 72px / 4.5rem | 1.0 | 700 | heading | Hero display |

### Letter Spacing

```css
--tracking-tight: -0.02em;    /* Display headings (48px+) */
--tracking-normal: 0;          /* Body text, small headings */
--tracking-wide: 0.08em;       /* Uppercase labels, nav items */
--tracking-wider: 0.12em;      /* Monospace metadata, service tags */
```

---

## Spacing

Based on 8px unit. All spacing derives from this base.

```css
--space-1: 4px;     /* 0.5 unit - tight inline spacing */
--space-2: 8px;     /* 1 unit - minimum gap */
--space-3: 12px;    /* 1.5 units */
--space-4: 16px;    /* 2 units - default padding */
--space-5: 20px;    /* 2.5 units */
--space-6: 24px;    /* 3 units - card padding */
--space-8: 32px;    /* 4 units - section inner gap */
--space-10: 40px;   /* 5 units */
--space-12: 48px;   /* 6 units - between elements */
--space-16: 64px;   /* 8 units - between groups */
--space-20: 80px;   /* 10 units - section gap (mobile) */
--space-24: 96px;   /* 12 units - section gap (desktop) */
--space-32: 128px;  /* 16 units - major section gap */
```

---

## Layout

### Grid

```css
--grid-columns: 12;
--grid-gutter: 24px;            /* Gap between columns */
--grid-margin: 24px;            /* Page margin (mobile) */
--grid-margin-md: 40px;         /* Page margin (tablet) */
--grid-margin-lg: 80px;         /* Page margin (desktop) */
--content-max: 1200px;          /* Maximum content width */
--content-narrow: 680px;        /* Readable text column */
```

### Breakpoints

```css
--bp-sm: 640px;     /* Small (large phones) */
--bp-md: 768px;     /* Medium (tablets) */
--bp-lg: 1024px;    /* Large (small desktop) */
--bp-xl: 1280px;    /* Extra large (desktop) */
--bp-2xl: 1536px;   /* Wide screens */
```

### Z-Index Scale

```css
--z-base: 0;
--z-above: 10;
--z-nav: 100;
--z-overlay: 200;
--z-modal: 300;
--z-toast: 400;
```

---

## Border Radius

```css
--radius-none: 0;           /* Cards, sections */
--radius-sm: 2px;           /* Subtle rounding */
--radius-md: 4px;           /* Buttons, inputs */
--radius-lg: 8px;           /* Modals, dropdowns */
--radius-full: 9999px;      /* Pills, badges */
```

Design principle: Sharp edges by default. Only buttons and interactive elements get radius. Cards and sections are square.

---

## Shadows

Minimal. Dark mode doesn't need drop shadows for depth. Use surface color elevation instead.

```css
--shadow-none: none;
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);           /* Subtle on dark */
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);           /* Dropdowns on dark */
--shadow-light-sm: 0 1px 3px rgba(0, 0, 0, 0.08);     /* Subtle on light */
--shadow-light-md: 0 4px 12px rgba(0, 0, 0, 0.08);    /* Cards on light */
```

---

## Motion

### Durations

```css
--duration-fast: 150ms;      /* Hover states, color changes */
--duration-base: 300ms;      /* Content reveals, transitions */
--duration-slow: 500ms;      /* Section transitions, decorative */
--duration-slower: 800ms;    /* Page-level animations */
```

### Easing

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);     /* Content entering */
--ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);  /* Symmetric transitions */
--ease-linear: linear;                            /* Progress bars, counters */
```

### Animation Patterns

| Pattern | Transform | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Fade in up | translateY(20px) -> 0, opacity 0 -> 1 | 300ms | ease-out | Scroll into view |
| Stagger children | Same as fade in up, +100ms per child | 300ms + stagger | ease-out | Scroll into view |
| Hover underline | scaleX(0) -> scaleX(1), transform-origin: left | 200ms | ease-out | Hover |
| Counter | Numerical interpolation | 800ms | ease-in-out | Scroll into view |
| CTA hover | Background color transition | 150ms | ease-in-out | Hover |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## Components (Token-Level)

### Buttons

| Variant | Background | Text | Border | Radius | Height | Padding |
|---------|-----------|------|--------|--------|--------|---------|
| Primary | --accent | #FFFFFF | none | --radius-md | 48px | 0 24px |
| Secondary | transparent | --accent | 1px --accent | --radius-md | 48px | 0 24px |
| Ghost | transparent | --text-dark-primary | none | --radius-md | 48px | 0 24px |
| Primary hover | --accent-hover | #FFFFFF | none | - | - | - |
| Secondary hover | --accent-subtle | --accent | 1px --accent | - | - | - |
| Ghost hover | --surface-tertiary | --text-dark-primary | none | - | - | - |

Font: --font-body, 16px, weight 500, no text-transform.

### Inputs

```css
background: --surface-secondary;
border: 1px solid --border-dark;
border-radius: --radius-md;
color: --text-dark-primary;
height: 48px;
padding: 0 16px;
font: --font-body, 16px;
/* Focus */
border-color: --accent;
outline: none;
box-shadow: 0 0 0 2px --accent-muted;
```

### Cards (Dark)

```css
background: --surface-secondary;
border: 1px solid --border-dark;
border-radius: --radius-none;
padding: --space-6;
/* Hover */
border-color: --border-dark-hover;
```

### Cards (Light)

```css
background: --surface-white;
border: 1px solid --border-light;
border-radius: --radius-none;
padding: --space-6;
box-shadow: --shadow-light-sm;
```

### Navigation

```css
background: --surface-primary;
border-bottom: 1px solid --border-dark;
height: 64px;
position: sticky;
top: 0;
z-index: --z-nav;
backdrop-filter: blur(12px);
background: rgba(10, 10, 15, 0.9);
```

### Section Dividers

```css
/* On dark */
border-top: 1px solid --border-dark;
/* On light */
border-top: 1px solid --border-light;
/* Accent (rare) */
border-top: 1px solid --accent-muted;
```

---

## Images

### Aspect Ratios

```css
--ratio-hero: 16 / 9;        /* Hero images */
--ratio-project: 1 / 1;       /* Portfolio thumbnails */
--ratio-project-wide: 3 / 2;  /* Case study images */
--ratio-og: 1200 / 630;       /* OG images */
--ratio-logo: auto;           /* Client logos, maintain original */
```

### Treatment

- All images: WebP format, next/image component
- Portfolio images: no border-radius, no filters
- Client logos: grayscale by default, color on hover (CSS filter)
- Blog thumbnails: 1:1 ratio, no border-radius

---

## Iconography

- System: Lucide Icons (consistent with geometric aesthetic, 24px default, 1.5px stroke)
- Size tokens: 16px (inline), 20px (buttons), 24px (standalone), 32px (feature)
- Color: inherits text color (currentColor)
- No filled icons. Outline only.

---

## Dark / Light Mode Strategy

The site is dark-mode-first. Light sections are used strategically for readability:
- Homepage: fully dark
- Service pages: dark hero, light content sections
- City pages: dark hero, light content sections
- Blog posts: light body for readability, dark header/footer
- Case studies: dark
- Contact: dark
- About: dark hero, light body

No user toggle. The mode is designed per section, not per preference.
