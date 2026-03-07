# Contact Page Structure - P-XEL Studio

Blueprint for `/contact/` as the conversion terminal. This is where every journey ends. The page assumes the visitor has already decided. Its job is to make the action effortless.

---

## Page Intent

This page does one thing: convert qualified interest into a conversation.

Two paths:
1. **Book a call** (Calendly) - For visitors ready to talk now
2. **Send a brief** (intake form) - For visitors who want to describe their project first

Both paths lead to the same outcome: a 30-minute discovery call. The difference is timing and preference.

---

## SEO Brief

- **Search intent:** Navigational / transactional. Visitors coming to contact P-XEL directly.
- **Primary keyword:** contact P-XEL Studio (branded, no competition)
- **Title tag:** Contact | P-XEL Studio
- **Meta description:** Reservez un appel de 30 minutes ou decrivez votre projet. On repond sous 24h. P-XEL Studio, Liege, Belgique.
- **Schema:** WebPage, BreadcrumbList, LocalBusiness (full), ContactPoint
- **URL:** /contact/

---

## Design Philosophy

This is NOT a generic contact page. No map iframe with a pin. No three-column layout with phone, email, and address in separate boxes. No "drop us a line" headline with a 12-field form.

The page is minimal, direct, and premium. The dark canvas continues. The visitor's attention goes to two things: the Calendly booking and the intake form. Everything else is secondary.

**The emotional logic:** The visitor has been through the homepage, seen the work, read the studio page. They are ready. The contact page should feel like opening a door, not filling out paperwork.

**Anti-patterns to avoid:**
- Contact forms with 10+ fields
- Required phone number fields
- CAPTCHA that breaks flow
- "We'll get back to you in 3-5 business days"
- Separate pages for "Book a call" and "Contact us"
- Live chat widget that pops up immediately
- Map that takes up half the viewport

---

## Page Structure (3 sections)

### Section 1: Opening

**Viewport:** Less than half. Quick entry.

**Label (JetBrains Mono, small):**
Contact

**H1 (Space Grotesk, display):**
Parlons de votre projet.

**Subtext (Satoshi, text-md):**
Reservez un appel de 30 minutes ou decrivez votre projet ci-dessous. On repond sous 24h.

**Design notes:**
- Two sentences. That is all the intro this page needs.
- The headline is warm but direct. "Parlons" (let's talk) is more human than "Contactez-nous."
- The subtext immediately tells the visitor what will happen and when.

---

### Section 2: Two Paths (Core)

**Viewport:** Primary section. Takes up the majority of the page.

The two conversion paths are presented side by side on desktop, stacked on mobile. Neither is hidden behind a tab. Both are immediately visible.

#### Path A: Book a Call (Primary)

**H2 (Space Grotesk):**
Reserver un appel

**Body (Satoshi):**
30 minutes pour decouvrir votre projet, vos objectifs et vos contraintes. Sans engagement.

**Calendly Integration:**
- Embedded Calendly widget (inline, not popup)
- Pre-configured for 30-minute discovery call
- Shows available slots directly on the page
- Calendly URL: calendly.com/p-xel-studio/30min

**Design notes:**
- The Calendly embed is styled to match the dark canvas as much as Calendly allows (dark mode, custom colors).
- This is the primary path. It gets more visual weight: larger section, left position on desktop, first on mobile.
- "Sans engagement" removes the last friction point.

#### Path B: Send a Brief (Secondary)

**H2 (Space Grotesk):**
Decrire mon projet

**Body (Satoshi):**
Pas encore pret pour un appel ? Decrivez votre projet en quelques lignes. On revient vers vous sous 24h.

**Intake Form Fields:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Nom | Text input | Yes | First name or full name |
| Email | Email input | Yes | Primary contact |
| Type de projet | Select dropdown | Yes | Options: Site web, Application web / SaaS, Landing page, Branding / Identite, UX/UI Design, Autre |
| Budget estimatif | Select dropdown | No | Options: < 5 000 EUR, 5 000 - 15 000 EUR, 15 000 - 30 000 EUR, 30 000 - 50 000 EUR, > 50 000 EUR, Pas encore defini |
| Delai souhaite | Select dropdown | No | Options: < 1 mois, 1 - 3 mois, 3 - 6 mois, Pas de deadline |
| Message | Textarea | Yes | Brief project description. Placeholder: "Decrivez votre projet, vos objectifs et vos contraintes principales." |

**Submit button (violet):**
Envoyer mon brief ->

**Post-submit:**
Redirect to a clean confirmation message (inline, not a new page): "Merci. On revient vers vous sous 24 heures."

**Design notes:**
- 6 fields total. 3 required, 3 optional. The form qualifies without interrogating.
- Budget and timeline are optional because some visitors don't know yet. Forcing a choice creates abandonment.
- The select dropdowns pre-qualify the lead. The message field captures the nuance.
- No phone number field. If a call is needed, the visitor books one through Path A.
- No company name field. Optional info that can be gathered on the call.
- No CAPTCHA visible. Use honeypot field + rate limiting server-side.
- The form submission sends an email to hello@p-xel.be and stores the data for CRM.

---

### Section 3: Direct Contact Info

**Viewport:** Compact footer section. Below the two paths.

**Label (JetBrains Mono, small):**
Coordonnees

**Contact details (Satoshi + JetBrains Mono):**

| Info | Value | Format |
|------|-------|--------|
| Email | hello@p-xel.be | Clickable mailto link |
| Telephone | +32 497 38 29 54 | Clickable tel link |
| Localisation | Liege, Belgique | Text (no map) |
| LinkedIn | linkedin.com/company/p-xel-studio | Clickable link |

**Design notes:**
- Four lines. No boxes, no cards, no grid with icons. Just the information.
- Email and phone are clickable (mailto: and tel:).
- No Google Maps embed. The address serves schema and trust. A map adds nothing for a remote-first studio.
- LinkedIn is the only social link. No Twitter, no Instagram, no Behance. One platform, the professional one.

---

## Optional: Live Chat Consideration

**Recommendation: Do not include at V1.**

Rationale:
- A solo studio cannot staff live chat. Delayed responses worse than no chat.
- Chat widgets (Tawk.to, Intercom, Crisp) conflict with the premium positioning.
- The Calendly embed already provides "talk to us now" functionality.
- If chat is added later, consider a WhatsApp Business button (simple, familiar, async) or an AI-powered intake chatbot that qualifies and books. But only when the technology matches the premium feel.

**Phase 2 consideration:** If data shows visitors want a faster async channel, add a WhatsApp Business button below the direct contact info. One line: "Preferer WhatsApp ? Ecrivez-nous directement." with a wa.me link.

---

## Visual Rhythm

```
Opening (typographic, two sentences, dark canvas)
  |
Two Paths side by side:
  [Book a Call]          [Send a Brief]
  Calendly embed         Intake form
  |
Direct Contact (compact, informational)
```

The page is intentionally short. No scroll journey. No narrative arc. The visitor is here to act. The page respects that by getting out of the way.

---

## Form Behavior

### Validation
- Real-time field validation (red border + inline message on blur)
- Email format validation
- Required fields marked with subtle indicator (not red asterisks)
- Submit button disabled until required fields are valid

### Submission
- Form data sent to backend API (Next.js API route)
- Email notification to hello@p-xel.be with formatted brief
- Data stored in database for CRM/pipeline tracking
- Inline success message (no page redirect, no separate thank-you page)
- If submission fails: clear error message with retry option

### Spam Prevention
- Honeypot field (hidden, if filled = bot)
- Rate limiting (max 3 submissions per IP per hour)
- No visible CAPTCHA (breaks premium feel)

---

## Schema Markup

```json
{
  "@type": "LocalBusiness",
  "name": "P-XEL Studio",
  "email": "hello@p-xel.be",
  "telephone": "+32497382954",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liege",
    "addressCountry": "BE"
  },
  "url": "https://p-xel.be",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hello@p-xel.be",
    "telephone": "+32497382954",
    "availableLanguage": ["French", "English"]
  }
}
```

---

## Internal Links

| From | Links To | Purpose |
|------|----------|---------|
| Calendly embed | calendly.com/p-xel-studio/30min | Conversion |
| Email | mailto:hello@p-xel.be | Direct contact |
| Phone | tel:+32497382954 | Direct contact |
| LinkedIn | LinkedIn profile | Social proof |
| Footer | All Phase 1 pages | SEO mesh |

---

## Responsive

- **Mobile:** Stacked layout. Book a Call section first, form second. Calendly embed adapts to mobile width. Form fields full-width. Contact info centered.
- **Tablet:** Two columns possible if width allows. Otherwise same as mobile.
- **Desktop:** Two-column layout. Calendly embed on the left (60% width), intake form on the right (40% width). Or equal split. Contact info below in a single row.

---

## What This Page Is NOT

- Not a "contact us" page with a map and three address boxes
- Not a form with 12 fields and a CAPTCHA
- Not a page that says "we'll get back to you" without specifying when
- Not a page with a chat widget that nobody monitors
- Not a page that hides the booking behind a form
- Not a page with social media icons for 6 platforms

---

## Word Count

Estimated: ~100-120 words of visible copy (excluding form labels). This is the leanest page on the site. By design.
