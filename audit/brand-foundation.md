# Brand Foundation - p-xel.be

## Visual Identity

### Logo
- SVG format: `/wp-content/uploads/2025/04/P-XEL-STUDIO_LOGO.svg`
- Footer variant: `/wp-content/uploads/2025/04/P-XEL-STUDIO_LOGO-V2.png`
- Social/OG image: `/wp-content/uploads/2025/11/P-xel_social.jpg` (1080x1080)
- Decision: Logo is kept as-is for the rebuild

### Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Primary Accent (Violet) | #6608F9 / #6608FA | CTAs, dots, accents |
| Dark Background | #191D28 | Main background, sections |
| Secondary Dark | #2A3040 | Button hover states |
| Border Gray | #4A5164 | Button borders |
| Text Primary | #111111 / #000000 | Headings, body |
| Text Secondary | #555555 / #898989 / #B3B3B3 | Subtitles, muted text |
| Line Gray | #D4D4D4 | Service dividers |
| White | #FFFFFF | Text on dark, backgrounds |

### Typography (Current - To Be Replaced)
- Primary: Inter, system-ui, sans-serif (flagged for replacement per design constraints)
- Secondary: Poppins, sans-serif (flagged for replacement)
- Sizes: 13px, 20px, 26px, 36px, 42px
- Letter-spacing: 0.08em-0.22em on uppercase elements
- Weights: 400 (regular), 600 (semibold)

Note: Both Inter and Poppins are explicitly listed as fonts to avoid in CLAUDE.md. New typography system needed.

---

## Brand Signals

### Positioning (Current)
- "Studio UI/UX & Identite Visuelle a Liege"
- "Nous aidons les marques et startups a se distinguer et grandir"
- Services: UX, UI, Branding, Graphic Design, Product Design, 3D, AI

### Positioning (New Target)
- "AI Product Designer - From idea to shipped product, fast"
- UI/UX, Full-Stack, Brand
- Web apps, MVPs, high-performance websites, landing pages, AI workflows

### Gap
The current site positions P-XEL as a design studio. The new positioning is a product partner that ships. The site does not communicate execution, shipping, or full-stack capability.

---

## Layout Patterns

### Homepage Structure
1. Full-screen hero with tagline + CTA
2. Horizontal scrolling ticker (services)
3. Stats bar (counters)
4. Client logo strip
5. Service rows with hover animations
6. Portfolio carousel (popup-based)
7. Process steps (numbered)
8. Blog cards grid
9. FAQ accordion
10. Contact section with CTA
11. Minimal footer

### Visual Motifs
- Decorative ellipses/blurred circles (Ellipse-03.webp, Ellipse-02b.webp)
- Geometric, dark-background sections
- Sharp, minimal layout with generous whitespace
- Accent dots with pulse animation
- Service list with horizontal lines and hover slide-up text
- Week number + live time display widget

### Motion/Animation
- `pxelScroll`: Horizontal ticker (20s loop)
- `pxelSlideUp`: Service label hover animation (0.45s cubic-bezier)
- `pixelPulse`: Accent dot pulse (4s ease-in-out, opacity + scale)
- Scroll-reveal: Progressive text opacity on scroll
- Counter animations on stats
- Lazy-loaded background images via IntersectionObserver

---

## Trust Signals

### Client Logos (11 identified)
Greenmood, Hopscotch, Oyabun, Arduenna, Kokoro, Globodai, DO, PN3DLG, Kalibre, Modular, ND

### Stats
- 16+ years expertise (displayed via counter)
- 49+ brands/projects launched (displayed via counter)
- 360 accompaniment
- 98% client satisfaction (on /home-landing/ only)

### Portfolio (6 case studies)
1. **Greenmood** - B2B platform, UX/UI, configurators (strongest case)
2. **Hopscotch** - 51-page RFP document in 24h (speed proof)
3. **Oyabun** - Web3 game ecosystem (tech credibility)
4. **Arduenna Gin** - E-commerce + 103 FB Ads campaigns, "2 years revenue in 2 months" (results proof)
5. **Kokoro** - Wellness center branding + web (design quality)
6. **Paris Crowdfunding** - Full brand identity (brand expertise)

### Missing Trust Signals
- No written testimonials or client quotes
- No Google reviews integration
- No case study KPIs beyond Arduenna
- No awards or certifications
- No team/founder credibility
- No "as seen in" press mentions
- No detailed project timelines or deliverable lists

---

## Portfolio Assets (Reusable Images)

### Project Images
| Project | Files |
|---------|-------|
| Greenmood | Greenmood_slide-front.webp, _01.webp, _02a.webp, Logo_Greenmood.png |
| Hopscotch | HOPSCOTCH.webp, slide-1.webp, slide-02.webp |
| Oyabun | Oyabun_slide.webp, _02.webp, _web.webp, _03.webp, STREET-FURY.webp |
| Arduenna | Arduenna-Gin.webp, _01.webp, _02.webp, _03.webp, Logo.webp |
| Kokoro | Kokoro_front.webp, _02.webp, Logo.webp |
| Paris CF | PCF-01.webp, _02.webp |

### Client Logos
Greenmood, Arduenna, ND, Kalibre, Modular, Kokoro, Globodai, DO, PN3DLG (all in webp/png)

### Blog Article Thumbnails
- Article_Web-1024x1024.png
- Article_UX-UI-1024x1024.png
- Article-Design-system-1024x1024.webp
- Articles-AI-1024x1024.webp
- Articles-No-code-1024x1024.webp

### Decorative Assets
- BG_fallback.webp (dark background)
- Ellipse-03.webp (blurred circle)
- Ellipse-02b.webp (blurred circle)

### Brand Assets
- P-XEL-STUDIO_LOGO.svg (main logo)
- P-XEL-STUDIO_LOGO-V2.png (footer variant)
- P-xel_social.jpg (social/OG image)
- Menu3.svg (hamburger icon)

---

## Tone of Voice (Current)

### Characteristics
- Professional but approachable
- French, with occasional informal "tu" in blog posts
- Premium positioning language
- Process-oriented explanations
- Some inconsistency: formal "vous" on homepage, informal "tu" in articles

### What Works
- Sharp, clear service descriptions
- Process transparency (4-step workflow)
- Technical credibility in blog content

### What Needs Work
- Inconsistent formality level (tu/vous mix)
- No personality or founder voice
- Generic studio language ("nous aidons les marques")
- Doesn't communicate speed, shipping, or product thinking
- No urgency or differentiation in CTAs

---

## Third-Party Integrations
- Calendly: 30-min booking (calendly.com/p-xel-studio/30min)
- Tawk.to: Live chat widget
- Google Analytics: GA4 (GT-K4TP42FQ)
- Google Ads: AW-17757045001
- WP Rocket: Performance optimization
- Elementor: Page builder
