# NAP Consistency - P-XEL Studio

## Overview

NAP (Name, Address, Phone) consistency is a foundational local SEO signal. Google cross-references NAP data across the website, Google Business Profile, directories, and citations. Any inconsistency weakens local ranking authority. This document defines the canonical NAP format and where it must appear.

---

## Official NAP Format

### Canonical format (use exactly this everywhere)

```
P-XEL Studio
hello@p-xel.be
+32 497 38 29 54
```

### Rules

| Element | Canonical value | Notes |
|---|---|---|
| Business name | P-XEL Studio | Always "P-XEL Studio". Never "PXEL", "P-Xel", "Pixel Studio", "P-XEL Design", or "P-XEL" alone |
| Email | hello@p-xel.be | Primary contact email everywhere |
| Phone (international) | +32 497 38 29 54 | Use on the website, in schema, and on international directories |
| Phone (local Belgian) | 0497 38 29 54 | Use only on Belgian-specific directories that require local format |
| Website | https://p-xel.be | Always with https, never with www unless www is the canonical |

### Address Considerations

P-XEL Studio operates as a remote-first business. This creates a specific challenge for local SEO, which rewards a verifiable physical address.

**Options and recommendation:**

| Option | SEO impact | Practical impact | Recommendation |
|---|---|---|---|
| Home address (registered) | Strong - verifiable, consistent | Privacy concern, not client-facing | Use for Google Business Profile if comfortable |
| Coworking membership (with mail) | Strong - professional address, verifiable | Monthly cost (50-150 EUR), may require proof | Best balance of SEO and professionalism |
| No address displayed | Weak - limits local pack eligibility | Simple, no cost | Not recommended for local SEO |
| PO Box | None - Google rejects PO boxes | Cheap | Not viable |

**Recommended approach:**

1. Use a coworking or business center address in Liege for Google Business Profile and structured data
2. Display the city "Liege, Belgique" on the website without full street address if privacy is preferred
3. In schema markup, include the full address that matches Google Business Profile exactly
4. On the website's visible footer, use a format like:

```
P-XEL Studio
Liege, Belgique
+32 497 38 29 54
hello@p-xel.be
```

If a coworking address is secured (e.g., La Grand Poste, Regus Liege, Espace Tivoli):

```
P-XEL Studio
[Street address from coworking]
4000 Liege, Belgique
+32 497 38 29 54
hello@p-xel.be
```

---

## Where NAP Must Appear on the Website

### 1. Footer (every page)

**Format:** Compact, always visible.

```
P-XEL Studio | Liege, Belgique | +32 497 38 29 54 | hello@p-xel.be
```

Or as a stacked block:

```
P-XEL Studio
Liege, Belgique
+32 497 38 29 54
hello@p-xel.be
```

**Requirements:**
- Present on every single page
- Phone number must be a clickable `tel:` link: `<a href="tel:+32497382954">+32 497 38 29 54</a>`
- Email must be a clickable `mailto:` link: `<a href="mailto:hello@p-xel.be">hello@p-xel.be</a>`
- Consistent format across all pages (no variations)

### 2. Contact page (/contact/)

**Format:** Full NAP block with all details.

```
P-XEL Studio
[Full address if available]
4000 Liege, Belgique

Telephone : +32 497 38 29 54
Email : hello@p-xel.be

Numero d'entreprise : [BCE number]
TVA : [VAT number]
```

**Additional elements:**
- Google Maps embed showing location
- Calendly booking widget
- Contact form as alternative

### 3. City pages (/liege/, /bruxelles/, etc.)

**Format:** NAP in the CTA section at bottom.

For the Liege page:
```
P-XEL Studio - Liege
+32 497 38 29 54
hello@p-xel.be
```

For other city pages:
```
P-XEL Studio
Base a Liege, disponible a [City]
+32 497 38 29 54
hello@p-xel.be
```

### 4. Schema markup (every page)

**JSON-LD LocalBusiness schema on every page:**

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "P-XEL Studio",
  "url": "https://p-xel.be",
  "telephone": "+32497382954",
  "email": "hello@p-xel.be",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street address - must match GBP exactly]",
    "addressLocality": "Liege",
    "postalCode": "4000",
    "addressRegion": "Wallonie",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[exact latitude]",
    "longitude": "[exact longitude]"
  },
  "areaServed": [
    { "@type": "City", "name": "Liege" },
    { "@type": "City", "name": "Bruxelles" },
    { "@type": "City", "name": "Namur" },
    { "@type": "City", "name": "Luxembourg" }
  ],
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "image": "https://p-xel.be/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/p-xel-studio",
    "https://www.instagram.com/pxelstudio"
  ]
}
```

**Critical:** The `telephone`, `name`, and `address` in schema must be character-for-character identical to what appears on Google Business Profile.

### 5. About page (/a-propos/)

Mention the studio name and location naturally in the text:
> P-XEL Studio est un studio de design produit base a Liege, en Belgique.

---

## Phone Number Format Rules

| Context | Format | Example |
|---|---|---|
| Website (visible text) | International with spaces | +32 497 38 29 54 |
| Schema markup | International without spaces | +32497382954 |
| `tel:` link href | International without spaces | tel:+32497382954 |
| Belgian directories (Pages d'Or, etc.) | Local Belgian | 0497 38 29 54 |
| Google Business Profile | International | +32 497 38 29 54 |
| Social media profiles | International | +32 497 38 29 54 |

**Never use:**
- 0032 497 38 29 54 (old international format)
- +32 (0)497 38 29 54 (mixed format)
- 04 97 38 29 54 (incorrect grouping)

---

## Handling Remote-First Positioning with Local SEO

### The tension

P-XEL positions itself as modern and remote-friendly, but local SEO rewards physical presence. These are not contradictory if handled correctly.

### Strategy

1. **Lead with "base a Liege"** - not "remote-first". The website should say "Base a Liege, nous travaillons avec des clients partout en Belgique et au Luxembourg." This establishes local authority while explaining geographic reach.

2. **Never say "we have no office"** - Instead, say "Nous rencontrons nos clients en visio ou en personne a Liege." This implies availability without claiming a client-facing office.

3. **Google Business Profile category** - Use "Service d'informatique" or "Agence de design web" as primary category. These categories do not require a storefront.

4. **Service-area business option** - If there is no verifiable address, set up Google Business Profile as a "Service Area Business" (SAB). This hides the address but still allows appearing in local results for the defined service area. Less powerful than a verified address, but better than nothing.

5. **On city pages for non-Liege cities** - Be transparent: "P-XEL Studio est base a Liege et travaille regulierement avec des entreprises a [City]. La majorite de nos collaborations se font a distance, avec des reunions en visio hebdomadaires."

---

## NAP Audit Checklist for External Directories

### Priority directories for Belgian local SEO

| Directory | Priority | Status | NAP correct? |
|---|---|---|---|
| Google Business Profile | Critical | [ ] Claimed | [ ] Verified |
| Pages d'Or / Gouden Gids | High | [ ] Listed | [ ] Checked |
| LinkedIn Company Page | High | [ ] Active | [ ] Checked |
| Yelp Belgium | Medium | [ ] Listed | [ ] Checked |
| Cylex Belgium | Medium | [ ] Listed | [ ] Checked |
| Kompass Belgium | Medium | [ ] Listed | [ ] Checked |
| 1307.be | Medium | [ ] Listed | [ ] Checked |
| Europages | Medium | [ ] Listed | [ ] Checked |
| Trustpilot | Medium | [ ] Listed | [ ] Checked |
| Sortlist | High | [ ] Listed | [ ] Checked |
| Clutch | Medium | [ ] Listed | [ ] Checked |
| Facebook Business Page | Medium | [ ] Active | [ ] Checked |
| Apple Maps (Apple Business Connect) | Medium | [ ] Listed | [ ] Checked |
| Bing Places | Medium | [ ] Listed | [ ] Checked |
| BCE/KBO (official register) | High | [ ] Registered | [ ] Checked |

### What to check on each directory

1. Business name is exactly "P-XEL Studio" (not PXEL, not P-XEL, not Pixel)
2. Phone number matches canonical format for that context
3. Address matches Google Business Profile exactly
4. Website URL is https://p-xel.be (no trailing slash variation, no www)
5. Email is hello@p-xel.be
6. Business category is appropriate (web design, product design, digital agency)
7. Description does not contradict information on the website

### Audit frequency

- Full audit: every 6 months
- Google Business Profile check: monthly
- After any change (phone, address, name): update ALL directories within 48 hours

---

## Common NAP Mistakes to Avoid

| Mistake | Example | Why it hurts |
|---|---|---|
| Name variation | "P-XEL" on one site, "P-XEL Studio" on another | Google sees these as potentially different businesses |
| Phone format mix | "+32 497 38 29 54" on site, "0497/38.29.54" on directory | Inconsistency weakens citation signal |
| Old address | Previous address on a forgotten directory listing | Conflicting signals confuse Google |
| Missing "Studio" | "P-XEL" without "Studio" | Partial name match reduces confidence |
| Different email | "contact@p-xel.be" on one platform, "hello@p-xel.be" on another | Use one canonical email everywhere |
| HTTP vs HTTPS | "http://p-xel.be" on old listings | Update to https everywhere |
