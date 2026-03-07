# Phase 1 Architecture - P-XEL Studio

Next.js architecture for the 16-page Phase 1 launch.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules + CSS custom properties (design tokens) |
| Fonts | Self-hosted WOFF2 (Space Grotesk, Satoshi, JetBrains Mono) |
| Icons | Lucide React |
| Images | next/image, WebP, sharp |
| Schema | JSON-LD (inline per page) |
| Analytics | GA4 (gtag.js) |
| Forms | Next.js API route + Resend |
| Booking | Calendly embed + direct links |
| Hosting | Vercel |
| Linting | ESLint + Prettier |

---

## Route Map

```
app/
  layout.tsx                    # Root layout (fonts, tokens, nav, footer, analytics)
  page.tsx                      # Homepage /
  not-found.tsx                 # 404 page

  work/
    page.tsx                    # /work/
    billycheck/page.tsx         # /work/billycheck/
    chairsplit/page.tsx         # /work/chairsplit/
    greenmood/page.tsx          # /work/greenmood/
    arduenna-gin/page.tsx       # /work/arduenna-gin/
    hopscotch/page.tsx          # /work/hopscotch/

  studio/
    page.tsx                    # /studio/

  contact/
    page.tsx                    # /contact/

  services/
    creation-site-web/page.tsx  # /services/creation-site-web/
    application-web-mvp/page.tsx # /services/application-web-mvp/

  liege/
    page.tsx                    # /liege/

  mentions-legales/
    page.tsx                    # /mentions-legales/

  politique-confidentialite/
    page.tsx                    # /politique-confidentialite/

  api/
    contact/route.ts            # POST /api/contact (form handler)

  sitemap.ts                    # Dynamic sitemap.xml
  robots.ts                     # Dynamic robots.txt
```

**Total: 16 pages + 1 API route + sitemap + robots + 404**

---

## Layout Architecture

### Root Layout (`app/layout.tsx`)

Responsibilities:
- Load and apply self-hosted fonts via `next/font/local`
- Inject CSS custom properties (design tokens) on `<html>`
- Set `<html lang="fr">` and dark color-scheme
- Render `<Header />` and `<Footer />`
- Include GA4 script
- Include global metadata defaults

```
<html lang="fr" class={fontClasses}>
  <body class="surface-primary">
    <Header />
    <main>{children}</main>
    <Footer />
    <Analytics />
  </body>
</html>
```

No nested layouts needed for Phase 1. All pages share the same header/footer chrome.

### Header

- Sticky, blurred background (`backdrop-filter: blur(12px)`)
- Height: 64px
- Logo (left) + nav links (right): Work, Studio, Contact
- Mobile: hamburger menu with slide-in panel
- No dropdowns, no mega-menu
- CTA button hidden from header (nav items are the CTAs)

### Footer

- Full internal link mesh for SEO
- Columns: Services (2 links), Projects (5 links), Studio, Contact
- Bottom row: legal links, copyright, social links
- Dark surface, border-top divider

---

## Component System

### Naming Convention

PascalCase components. Flat structure (no deep nesting). CSS Modules colocated.

```
components/
  Header/
    Header.tsx
    Header.module.css
  Footer/
    Footer.tsx
    Footer.module.css
  Section/
    Section.tsx              # Reusable section wrapper (dark/light variants)
    Section.module.css
  Button/
    Button.tsx               # Primary, secondary, ghost variants
    Button.module.css
  Label/
    Label.tsx                # JetBrains Mono small labels
    Label.module.css
  SectionHeading/
    SectionHeading.tsx       # H2 + optional subtext
    SectionHeading.module.css
  ProjectCard/
    ProjectCard.tsx          # Case study teaser (featured + compact variants)
    ProjectCard.module.css
  ProcessStep/
    ProcessStep.tsx          # Numbered step (01 / Title + description)
    ProcessStep.module.css
  StatBlock/
    StatBlock.tsx             # Animated counter stat
    StatBlock.module.css
  FAQ/
    FAQ.tsx                  # Accordion FAQ with schema
    FAQ.module.css
  ContactForm/
    ContactForm.tsx          # 6-field intake form
    ContactForm.module.css
  CalendlyEmbed/
    CalendlyEmbed.tsx        # Inline Calendly widget
    CalendlyEmbed.module.css
  CTA/
    CTA.tsx                  # CTA block (heading + subtext + 2 buttons)
    CTA.module.css
  FadeInUp/
    FadeInUp.tsx             # Scroll-triggered animation wrapper
    FadeInUp.module.css
  Icon/
    Icon.tsx                 # Lucide icon wrapper (size, color)
  SchemaScript/
    SchemaScript.tsx         # JSON-LD injection helper
  OtherCities/
    OtherCities.tsx          # "On intervient aussi a..." block
    OtherCities.module.css
  CaseStudyNav/
    CaseStudyNav.tsx         # Previous/next project navigation
    CaseStudyNav.module.css
  ServiceCard/
    ServiceCard.tsx          # Service summary with link (for city/homepage use)
    ServiceCard.module.css
  PricingTable/
    PricingTable.tsx         # Budget/timeline table
    PricingTable.module.css
  StackTable/
    StackTable.tsx           # Technology stack display
    StackTable.module.css
```

### Shared Primitives

- `Section`: wraps every page beat. Props: `variant` (dark | light | accent), `id`, `className`. Handles max-width, padding, responsive margins.
- `Button`: renders `<a>` or `<button>`. Props: `variant` (primary | secondary | ghost), `href`, `onClick`, `size`.
- `Label`: JetBrains Mono label. Props: `children`.
- `SectionHeading`: H2 with optional body text. Props: `heading`, `subtext`.
- `FadeInUp`: Intersection Observer wrapper. Adds `fade-in-up` class on scroll. Respects `prefers-reduced-motion`.

### Page-Specific Components

Some pages have unique sections that don't repeat elsewhere. These live as local components within the page file or in a page-specific subfolder when complex:

- Homepage hero (unique layout, not reused)
- Studio founder section (unique, uses "je" voice)
- Contact dual-path layout (Calendly + form side by side)
- Case study hero (project-specific layout with tags)

---

## Content Structure

Content is stored as TypeScript data objects, not MDX or a CMS. Phase 1 has 16 pages with static content that changes rarely. A CMS is unnecessary overhead.

```
lib/
  content/
    homepage.ts              # Homepage beats data
    work.ts                  # Project list (featured + secondary)
    case-studies/
      billycheck.ts
      chairsplit.ts
      greenmood.ts
      arduenna-gin.ts
      hopscotch.ts
    studio.ts                # Studio page beats
    contact.ts               # Contact page copy + form config
    services/
      creation-site-web.ts
      application-web-mvp.ts
    cities/
      liege.ts
    legal/
      mentions-legales.ts
      politique-confidentialite.ts
  navigation.ts              # Header nav items + footer link mesh
  metadata.ts                # Shared metadata helpers
  schema.ts                  # Schema generation functions
  constants.ts               # Site-wide constants (URLs, social, contact info)
```

### Case Study Data Shape

```typescript
interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  beats: {
    context: { label: string; heading: string; body: string };
    challenge: { label: string; heading: string; body: string };
    thinking: { label: string; heading: string; body: string };
    approach: { label: string; heading: string; items: ApproachItem[] };
    execution: { label: string; heading: string; body: string; items: string[] };
    result: { label: string; heading: string; body: string; stat?: string };
    deliverables: string[];
    stack: StackItem[];
  };
  navigation: {
    next: { slug: string; title: string };
  };
}
```

---

## Metadata Architecture

### Default Metadata (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://p-xel.be'),
  title: {
    template: '%s | P-XEL Studio',
    default: 'P-XEL Studio | Studio Digital a Liege',
  },
  description: 'Studio produit digital a Liege. Sites web, applications, MVP, branding et UX/UI. Du concept au produit livre.',
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'P-XEL Studio',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Per-Page Metadata

Each `page.tsx` exports its own `metadata` or `generateMetadata()`. Pattern:

```typescript
export const metadata: Metadata = {
  title: 'Creation Site Web',  // -> "Creation Site Web | P-XEL Studio"
  description: 'Sites web performants, e-commerce et landing pages...',
  alternates: { canonical: '/services/creation-site-web/' },
  openGraph: {
    title: 'Creation Site Web | P-XEL Studio',
    description: '...',
    url: '/services/creation-site-web/',
    images: [{ url: '/og/creation-site-web.jpg', width: 1200, height: 630 }],
  },
};
```

### Metadata per Page Type

| Page Type | Title Pattern | Canonical | OG Image |
|-----------|--------------|-----------|----------|
| Homepage | `P-XEL Studio \| Studio Digital a Liege` | `/` | `/og/homepage.jpg` |
| Work | `Projets \| P-XEL Studio` | `/work/` | `/og/work.jpg` |
| Case study | `[Name] - [Type] \| P-XEL Studio` | `/work/[slug]/` | `/og/[slug].jpg` |
| Studio | `Studio \| P-XEL Studio` | `/studio/` | `/og/studio.jpg` |
| Contact | `Contact \| P-XEL Studio` | `/contact/` | `/og/contact.jpg` |
| Service | `[Service] \| P-XEL Studio - Belgique` | `/services/[slug]/` | `/og/[slug].jpg` |
| City | `[Title] \| P-XEL Studio` | `/liege/` | `/og/liege.jpg` |
| Legal | `[Title] \| P-XEL Studio` | `/[slug]/` | None |

### OG Images

Static, pre-generated. Dark background, Space Grotesk heading, P-XEL logo. 1200x630px. Stored in `public/og/`.

---

## Schema Architecture

JSON-LD injected via `<SchemaScript />` component in each page.

### Schema per Page Type

| Page | Schema Types |
|------|-------------|
| Homepage | Organization, LocalBusiness, WebSite, BreadcrumbList |
| Work | WebPage, BreadcrumbList |
| Case studies | WebPage, BreadcrumbList |
| Studio | Person, Organization, BreadcrumbList |
| Contact | ContactPage, LocalBusiness, BreadcrumbList |
| Service pages | Service, FAQPage, BreadcrumbList |
| Liege | LocalBusiness (areaServed: Liege), Service, FAQPage, BreadcrumbList |
| Legal | WebPage, BreadcrumbList |

### Schema Helper (`lib/schema.ts`)

```typescript
export function organizationSchema(): WithContext<Organization> { ... }
export function localBusinessSchema(city?: string): WithContext<LocalBusiness> { ... }
export function serviceSchema(service: ServiceData): WithContext<Service> { ... }
export function faqSchema(items: FAQItem[]): WithContext<FAQPage> { ... }
export function breadcrumbSchema(items: BreadcrumbItem[]): WithContext<BreadcrumbList> { ... }
export function personSchema(): WithContext<Person> { ... }
```

### Organization Schema (sitewide)

```json
{
  "@type": "Organization",
  "name": "P-XEL Studio",
  "url": "https://p-xel.be",
  "logo": "https://p-xel.be/logo.svg",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+32497382954",
    "email": "hello@p-xel.be",
    "contactType": "customer service",
    "availableLanguage": ["French", "English"]
  }
}
```

---

## Font Loading Strategy

### Implementation

```typescript
// app/layout.tsx
import localFont from 'next/font/local';

const spaceGrotesk = localFont({
  src: [
    { path: '../public/fonts/SpaceGrotesk-Medium.woff2', weight: '500' },
    { path: '../public/fonts/SpaceGrotesk-Bold.woff2', weight: '700' },
  ],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
});

const satoshi = localFont({
  src: [
    { path: '../public/fonts/Satoshi-Regular.woff2', weight: '400' },
    { path: '../public/fonts/Satoshi-Medium.woff2', weight: '500' },
    { path: '../public/fonts/Satoshi-Bold.woff2', weight: '700' },
  ],
  variable: '--font-body',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = localFont({
  src: [{ path: '../public/fonts/JetBrainsMono-Regular.woff2', weight: '400' }],
  variable: '--font-mono',
  display: 'swap',
  preload: false,  // Not critical for FCP
});
```

### Font Budget

| Font | Files | Target Size |
|------|-------|------------|
| Space Grotesk | 2 (Medium, Bold) | < 30KB |
| Satoshi | 3 (Regular, Medium, Bold) | < 35KB |
| JetBrains Mono | 1 (Regular) | < 15KB |
| **Total** | **6 files** | **< 80KB** |

All fonts subsetted to Latin + Latin Extended. No italic variants (not used in design).

### CLS Prevention

- `font-display: swap` on all fonts
- System font fallback with matched metrics via `adjustFontFallback`
- No layout shift because font CSS variables are defined from load

---

## Performance Strategy

### Build Configuration

```typescript
// next.config.ts
const config: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};
```

Default Vercel deployment (not static export). The API route for the contact form requires server-side runtime. All pages are still statically generated at build time via SSG.

### Image Strategy

| Context | Format | Loading | Sizes |
|---------|--------|---------|-------|
| Hero images | WebP | `priority` (eager) | 1280, 1536 |
| Case study images | WebP | `lazy` | 640, 1024, 1280 |
| Project thumbnails | WebP | `lazy` | 640, 1024 |
| OG images | JPG | N/A (meta only) | 1200x630 |
| Logo | SVG | Inline | N/A |

All images served via `next/image` with explicit `width` and `height` to prevent CLS.

### CSS Strategy

- CSS Modules for component scoping (no runtime CSS-in-JS)
- Global CSS file for design tokens (custom properties on `:root`)
- Global CSS file for reset/base styles
- No Tailwind (custom design system, not utility-first)
- CSS custom properties enable theming per section (dark/light)

```
styles/
  globals.css           # Reset, base, tokens
  tokens.css            # All CSS custom properties
  animations.css        # Scroll-triggered animation keyframes
```

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 95 |
| LCP | < 1.5s |
| FID/INP | < 100ms |
| CLS | < 0.05 |
| Total page weight (homepage) | < 500KB |
| Font payload | < 80KB |
| JS bundle (homepage) | < 100KB |

### JavaScript Budget

- Minimal client-side JS. Most pages are fully static.
- Client components only for: `FadeInUp` (Intersection Observer), `FAQ` (accordion toggle), `ContactForm` (form state), `CalendlyEmbed` (widget), `Header` (mobile menu), `StatBlock` (counter animation).
- All other components are React Server Components (zero JS).

### Critical Rendering Path

1. HTML arrives with inlined critical CSS (via Next.js automatic optimization)
2. Fonts begin loading immediately (preload on Space Grotesk + Satoshi)
3. Hero content is visible without JS (SSG)
4. Scroll animations initialize after hydration
5. Below-fold images lazy load on scroll
6. Calendly widget loads only on /contact/ page

---

## API Route: Contact Form

### `app/api/contact/route.ts`

```typescript
// POST /api/contact
// Body: { nom, email, message, type?, budget?, delai?, honeypot? }
// Response: { success: boolean, error?: string }
```

**Validation:** zod schema. Required: nom, email (valid format), message (min 10 chars). Optional: type (enum), budget (enum), delai (enum).

**Spam prevention:** Honeypot field (hidden input, reject if filled).

**On success:**
1. Send notification email via Resend (to hello@p-xel.be)
2. Send confirmation email to submitter
3. Return `{ success: true }`

**On failure:** Return `{ success: false, error: "..." }` with appropriate HTTP status.

No database for Phase 1. Resend handles email delivery and provides a submission log in its dashboard. A database layer can be added in Phase 2 if submission volume or analytics needs justify it.

---

## Analytics

### GA4 Implementation

Script loaded via `next/script` with `strategy="afterInteractive"`.

### Event Tracking

| Event | Trigger | Parameters |
|-------|---------|-----------|
| `cta_click` | Any CTA button click | `cta_text`, `cta_destination` |
| `form_submit` | Contact form submitted successfully | `source_page` |
| `calendly_open` | Calendly link clicked | `source_page` |

GA4's built-in engagement metrics (scroll depth, session duration, page views) cover the rest. Keep custom events minimal at launch. Add granular tracking in Phase 2 based on actual data needs.

---

## File Structure (Complete)

```
p-xel-rebuild/
  app/
    layout.tsx
    page.tsx
    not-found.tsx
    work/
      page.tsx
      billycheck/page.tsx
      chairsplit/page.tsx
      greenmood/page.tsx
      arduenna-gin/page.tsx
      hopscotch/page.tsx
    studio/page.tsx
    contact/page.tsx
    services/
      creation-site-web/page.tsx
      application-web-mvp/page.tsx
    liege/page.tsx
    mentions-legales/page.tsx
    politique-confidentialite/page.tsx
    api/
      contact/route.ts
    sitemap.ts
    robots.ts
  components/
    Header/
    Footer/
    Section/
    Button/
    Label/
    SectionHeading/
    ProjectCard/
    ProcessStep/
    StatBlock/
    FAQ/
    ContactForm/
    CalendlyEmbed/
    CTA/
    FadeInUp/
    Icon/
    SchemaScript/
    OtherCities/
    CaseStudyNav/
    ServiceCard/
    PricingTable/
    StackTable/
  lib/
    content/
      homepage.ts
      work.ts
      case-studies/
      studio.ts
      contact.ts
      services/
      cities/
      legal/
    navigation.ts
    metadata.ts
    schema.ts
    constants.ts
  styles/
    globals.css
    tokens.css
    animations.css
  public/
    fonts/
      SpaceGrotesk-Medium.woff2
      SpaceGrotesk-Bold.woff2
      Satoshi-Regular.woff2
      Satoshi-Medium.woff2
      Satoshi-Bold.woff2
      JetBrainsMono-Regular.woff2
    og/
      homepage.jpg
      work.jpg
      studio.jpg
      contact.jpg
      billycheck.jpg
      chairsplit.jpg
      greenmood.jpg
      arduenna-gin.jpg
      hopscotch.jpg
      creation-site-web.jpg
      application-web-mvp.jpg
      liege.jpg
    images/
      case-studies/
      logo.svg
      favicon.ico
  next.config.ts
  tsconfig.json
  package.json
```

---

## Dependencies (Phase 1)

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.400.0",
    "resend": "^4.0.0",
    "zod": "^3.23.0",
    "schema-dts": "^1.1.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/react": "^19.0.0",
    "@types/node": "^22.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0",
    "prettier": "^3.3.0"
  }
}
```

No Tailwind. No Framer Motion (vanilla CSS animations + Intersection Observer). No CMS SDK. No state management library. Minimal dependency surface.

---

## Key Architecture Decisions

1. **App Router only.** No Pages Router. All routes use the App Router conventions.
2. **CSS Modules over Tailwind.** Custom design system warrants custom CSS. Tokens via custom properties. No utility classes.
3. **TypeScript content files over MDX/CMS.** 16 pages of static content. Type safety. No build-time MDX compilation. CMS deferred to Phase 2+ if needed.
4. **React Server Components by default.** Client components only where interactivity is required (6 components).
5. **Static generation (SSG).** All pages pre-rendered at build time. Contact form API route is the only server-side runtime. No database for Phase 1.
6. **No Framer Motion.** CSS keyframes + Intersection Observer for scroll animations. Saves ~30KB from bundle.
7. **Self-hosted fonts via next/font/local.** No Google Fonts CDN. Full control over subsetting and loading.
8. **Schema as code.** JSON-LD generated from typed helper functions, not manual JSON strings.
9. **Single layout.** No nested layouts for Phase 1. Simplicity over premature abstraction.
10. **Vercel deployment.** Automatic previews, edge CDN, built-in analytics compatibility.
