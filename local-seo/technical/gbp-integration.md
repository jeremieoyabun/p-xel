# Google Business Profile Integration

## GBP-to-Website Connection

### Primary Website Link

Set the GBP website field to: `https://p-xel.be/?utm_source=google&utm_medium=organic&utm_campaign=gbp_main`

This UTM-tagged URL allows tracking GBP-sourced visits separately from organic search in GA4.

### Appointment Link

Set the GBP appointment URL to: `https://calendly.com/p-xel/decouverte?utm_source=google&utm_medium=organic&utm_campaign=gbp_booking`

This sends GBP users directly to the Calendly booking page and tracks conversions from GBP.

### Service Links in GBP

GBP allows linking individual services to specific URLs. Map them as follows:

| GBP Service | Website URL |
|-------------|-------------|
| Creation de site web | `https://p-xel.be/services/creation-site-web/?utm_source=google&utm_medium=organic&utm_campaign=gbp_service_web` |
| Design UI/UX | `https://p-xel.be/services/design-ui-ux/?utm_source=google&utm_medium=organic&utm_campaign=gbp_service_ux` |
| Developpement application web | `https://p-xel.be/services/developpement-application-web/?utm_source=google&utm_medium=organic&utm_campaign=gbp_service_app` |
| MVP Design | `https://p-xel.be/services/mvp-design/?utm_source=google&utm_medium=organic&utm_campaign=gbp_service_mvp` |
| Landing Page | `https://p-xel.be/services/landing-page/?utm_source=google&utm_medium=organic&utm_campaign=gbp_service_landing` |
| Branding | `https://p-xel.be/services/branding/?utm_source=google&utm_medium=organic&utm_campaign=gbp_service_branding` |

---

## UTM Parameter Strategy

### Naming Convention

All GBP-related UTM parameters follow this pattern:

```
utm_source=google
utm_medium=organic
utm_campaign=gbp_[context]
```

Where `[context]` identifies the GBP element:
- `gbp_main` - Main website link
- `gbp_booking` - Appointment link
- `gbp_service_[slug]` - Individual service link
- `gbp_post_[topic]` - GBP post link (e.g., `gbp_post_portfolio_update`)
- `gbp_cta` - GBP call-to-action button

### GA4 Tracking Setup

Create a custom GA4 exploration report:
- Filter: `utm_campaign` contains "gbp_"
- Dimensions: Campaign, Landing page, Device
- Metrics: Sessions, Engagement rate, Conversions (Calendly booking event)

This report shows exactly how much business GBP drives and which GBP elements perform best.

---

## Embedded Google Maps

### When to Use Embedded Maps

- **City pages** (`/liege/`, `/bruxelles/`): Yes, show the service area
- **Contact page**: Yes, show business location
- **Service pages**: No, not relevant
- **Homepage**: Optional, only in the footer or contact section

### Implementation: Click-to-Load Pattern

Do NOT embed the Google Maps iframe directly. It loads ~500KB and hurts CWV.

Instead:
1. Show a static image of the map area (screenshot or static Maps API image)
2. Overlay a "Voir sur Google Maps" button
3. On click, either:
   - Replace the static image with the live iframe embed, OR
   - Open Google Maps in a new tab (simpler, better for mobile)

### Static Map Image

Use the Google Maps Static API to generate a lightweight map image:

```
https://maps.googleapis.com/maps/api/staticmap?center=Liege,Belgium&zoom=13&size=600x300&maptype=roadmap&key=YOUR_API_KEY
```

- Generate at build time, save as WebP in `/public/images/`
- One static map image per city page
- Size: 600x300px, quality 80, WebP format, target < 30KB

### Map Embed Parameters

When loading the interactive map (on click), use these iframe parameters:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40639.8!2d5.5597!3d50.6292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f9a1b3123d63%3A0x5765cd2990650c02!2sLi%C3%A8ge!5e0!3m2!1sfr!2sbe"
  width="600"
  height="300"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="P-XEL Studio - Zone d'intervention Liege"
></iframe>
```

Key: set `loading="lazy"` and add a descriptive `title` for accessibility.

---

## Review Widget Integration

### Strategy: Lightweight, Not a Heavy Widget

Do NOT use third-party review widgets (Elfsight, Trustmary, etc.). They add 200-500KB of JavaScript and hurt CWV.

Instead, build a simple native review display component:

### Implementation

1. **Manually curate 3-5 best Google reviews** (update quarterly)
2. **Store review data in a JSON file** or CMS:
   ```json
   [
     {
       "author": "Client Name",
       "rating": 5,
       "text": "Review excerpt...",
       "date": "2026-01",
       "source": "Google"
     }
   ]
   ```
3. **Render as a static component** (server-rendered, no client JS needed)
4. **Include a "Voir tous les avis sur Google" link** that opens the GBP review page:
   ```
   https://search.google.com/local/reviews?placeid=PLACE_ID
   ```
5. **Add Review schema** for each displayed review (optional, Google may not show rich results for self-served reviews, but it helps entity validation):
   ```json
   {
     "@type": "Review",
     "author": { "@type": "Person", "name": "Client Name" },
     "reviewRating": { "@type": "Rating", "ratingValue": 5 },
     "datePublished": "2026-01-15",
     "reviewBody": "Review text..."
   }
   ```

### Review Acquisition Strategy

- After every completed project, send a direct link to leave a Google review:
  ```
  https://search.google.com/local/writereview?placeid=PLACE_ID
  ```
- Send the link 1-2 weeks after project delivery (when satisfaction is highest)
- Include it in the final project handoff email
- Target: 2 new reviews per month minimum
- Respond to every review within 48 hours (positive and negative)
- In responses, mention the service delivered ("Merci pour votre confiance pour la creation de votre site web") to reinforce keyword relevance

---

## GBP Post Strategy

### Post Types and Frequency

| Post Type | Frequency | Content |
|-----------|-----------|---------|
| What's New | 2x/month | New project launch, new service, team update |
| Offer | 1x/month | Free audit, limited discovery call slots |
| Event | As needed | Webinar, local meetup, workshop |

### Post Content Rules

1. **Every post links to a specific page on the website** (not the homepage)
2. **Use UTM parameters** on every post link (see UTM convention above)
3. **Include a CTA button**: "En savoir plus" or "Prendre rendez-vous"
4. **Keep text under 300 characters** (mobile truncation threshold)
5. **Use a high-quality image** (1200x900px minimum, no stock photos)
6. **Mention the city** in the post text when relevant

### Post-to-Page Mapping

| Post Topic | Links To |
|------------|----------|
| New website project for Liege client | `/portfolio/[project-slug]/?utm_source=google&utm_medium=organic&utm_campaign=gbp_post_portfolio` |
| Web design tips | `/blog/[article-slug]/?utm_source=google&utm_medium=organic&utm_campaign=gbp_post_blog` |
| Free site audit offer | `/contact/?utm_source=google&utm_medium=organic&utm_campaign=gbp_post_audit` |
| New service announcement | `/services/[service-slug]/?utm_source=google&utm_medium=organic&utm_campaign=gbp_post_service` |
| Local availability update | `/liege/?utm_source=google&utm_medium=organic&utm_campaign=gbp_post_city` |

### Post Calendar

Maintain a simple spreadsheet or Notion board:
- Plan posts 1 month ahead
- Align with content calendar (blog posts, portfolio updates)
- Track clicks per post (via GA4 UTM report)
- Double down on post formats that generate clicks

---

## GBP Messaging vs. Calendly Booking

### The Problem

GBP offers a built-in messaging feature. If enabled, prospects can message P-XEL directly through Google. This creates a parallel communication channel that can conflict with the Calendly booking flow.

### Recommendation: Disable GBP Messaging

**Disable GBP messaging.** Here is why:

1. **Response time pressure**: Google penalizes businesses that take > 24h to respond to GBP messages. As a solo/small studio, this is risky.
2. **Low-quality leads**: GBP messages tend to attract price-shoppers and tire-kickers, not qualified leads.
3. **Fragmented funnel**: The entire P-XEL conversion flow is built around Calendly discovery calls. GBP messaging bypasses qualification.
4. **No tracking**: GBP messages are harder to track and attribute than Calendly bookings.

### Alternative: Optimize for Booking

Instead of messaging, optimize GBP to push toward Calendly:

1. **Appointment URL**: Set to Calendly link (see above)
2. **CTA button**: "Prendre rendez-vous" pointing to Calendly
3. **Business description**: End with "Reservez un appel decouverte gratuit sur notre site"
4. **Posts**: Always include booking CTA

### If Messaging Must Be Enabled

If Google's algorithm favors profiles with messaging enabled (test this):

1. Set up auto-reply: "Merci pour votre message. Pour planifier un appel, reservez directement sur [Calendly link]. Nous repondons sous 24h."
2. Check messages daily
3. Redirect every conversation toward a Calendly booking within 2 messages
4. Track message-to-booking conversion rate monthly. If < 5%, disable messaging.

---

## GBP Profile Optimization Checklist

Before launch, ensure the GBP profile includes:

- [ ] Business name: "P-XEL Studio"
- [ ] Primary category: "Web Designer" (closest match)
- [ ] Secondary categories: "Graphic Designer", "Software Company", "Marketing Agency"
- [ ] Address: Liege, Belgium (or specific address when available)
- [ ] Phone: +32 497 38 29 54
- [ ] Website: https://p-xel.be (with UTM)
- [ ] Appointment URL: Calendly link (with UTM)
- [ ] Business hours: Lundi-Vendredi 09:00-18:00
- [ ] Business description: 750 characters max, include primary keywords ("creation site web", "design UI/UX", "agence web Liege")
- [ ] Services: All 6 services listed with descriptions and links
- [ ] Photos: 10+ high-quality images (office/workspace, team, project screenshots, logo)
- [ ] Logo: P-XEL logo uploaded
- [ ] Cover photo: Branded cover matching website visual identity
- [ ] Service area: Liege, Wallonie, Bruxelles, Luxembourg
- [ ] Opening date: Set to actual founding date for credibility
- [ ] Messaging: Disabled (see above)
- [ ] Q&A: Pre-populate 5 questions (see below)

### Pre-Populated Q&A

Add these questions and answers to GBP proactively:

1. **"Quels services proposez-vous ?"** - "P-XEL Studio conçoit et developpe des sites web, applications web, MVPs, landing pages, et identites visuelles. Nous intervenons a Liege, Bruxelles, Namur et Luxembourg."

2. **"Combien coute un site web ?"** - "Chaque projet est unique. Reservez un appel decouverte gratuit de 30 minutes pour discuter de votre besoin et recevoir une estimation. [Calendly link]"

3. **"Quel est votre delai de realisation ?"** - "Un site web performant est generalement livre en 4 a 8 semaines. Un MVP en 6 a 12 semaines. Le planning exact depend de la complexite du projet."

4. **"Travaillez-vous avec des clients hors de Liege ?"** - "Oui, nous travaillons avec des clients a Bruxelles, Namur, Luxembourg et partout en Belgique. Les appels et la collaboration se font a distance, avec possibilite de rencontre a Liege."

5. **"Proposez-vous du design UI/UX uniquement ?"** - "Oui, nous proposons du design UI/UX independamment du developpement. Nous pouvons aussi prendre en charge le projet complet, du design au deploiement."
