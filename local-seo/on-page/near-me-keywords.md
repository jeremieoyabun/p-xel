# Near Me Keywords Strategy - P-XEL Studio

## Overview

"Near me" searches signal high purchase intent. In Belgium, these queries blend French phrasing with Google's implicit local detection. P-XEL must capture both explicit "pres de moi" queries and implicit local searches triggered by user location.

---

## Priority "Near Me" Keyword Variations

### Tier 1 - High intent, direct service match

| Keyword (Belgian French) | Monthly search estimate | Target page |
|---|---|---|
| agence web pres de moi | 150-300 | /liege/ + /services/creation-site-web/ |
| web designer pres de Liege | 50-100 | /liege/ |
| studio design pres de chez moi | 30-60 | /liege/ + /services/branding/ |
| developpeur web pres de moi | 100-200 | /liege/ + /services/application-web/ |
| creation site internet pres de moi | 100-200 | /services/creation-site-web/ |
| agence digitale pres de Liege | 30-80 | /liege/ |

### Tier 2 - Service-specific local

| Keyword (Belgian French) | Monthly search estimate | Target page |
|---|---|---|
| agence branding pres de moi | 20-50 | /services/branding/ |
| developpeur application pres de moi | 50-100 | /services/application-web/ |
| creation landing page Liege | 20-40 | /services/landing-page/ |
| designer UX UI pres de Liege | 20-40 | /services/ui-ux/ |
| freelance web designer pres de moi | 50-100 | /liege/ |
| agence MVP pres de moi | 10-30 | /services/mvp/ |

### Tier 3 - Long tail, high conversion

| Keyword (Belgian French) | Target page |
|---|---|
| qui fait des sites web pres de Liege | /liege/ |
| studio creation site web a proximite | /liege/ |
| agence web pas loin de chez moi Belgique | /liege/ |
| trouver un web designer sur Liege | /liege/ |
| bon designer web region liegeoise | /liege/ |

---

## Mapping to Existing Pages

### City pages capture geographic "near me"

- `/liege/` is the primary landing page for all "pres de Liege", "pres de moi" (from Liege IP), "region liegeoise" queries
- `/bruxelles/`, `/namur/`, `/luxembourg/` capture the same patterns for their respective cities
- Each city page must contain all core services to match "agence web pres de [city]" variations

### Service pages capture service-specific "near me"

- `/services/creation-site-web/` targets "creation site web pres de moi" via LocalBusiness schema + geographic signals in content
- `/services/application-web/` targets "developpeur application pres de moi"
- `/services/branding/` targets "agence branding pres de moi"
- Service pages must include a "Ou nous intervenons" or "Basee a Liege" section to trigger local relevance

### Crossover: service + city pages (Phase 2)

- `/services/creation-site-web-liege/` would directly target "creation site web Liege" and "agence web Liege"
- Only create these when a service + city combo shows consistent search volume above 40/month

---

## On-Page Optimization Tactics for Implicit Local Intent

### 1. Footer NAP on every page

Every page on p-xel.be carries the Liege address, phone (+32 497 38 29 54), and email. This tells Google the business is physically in Liege, which influences "near me" results even on service pages.

### 2. LocalBusiness schema on all pages

Use `@type: ProfessionalService` with `areaServed` listing Liege, Wallonie, Bruxelles, and Belgium. This connects every page to the local graph.

### 3. Geographic anchors in service page content

Each service page should include one or two natural geographic references:

- "P-XEL Studio, base a Liege, concoit des sites web performants pour les entreprises belges."
- "Nous travaillons avec des startups et PME en Wallonie et a Bruxelles."

Do NOT repeat city names artificially. One mention in the intro paragraph and one in the CTA section is enough.

### 4. Google Maps embed on /contact/ and city pages

An embedded Google Map for the Liege location reinforces geographic association. On other city pages, mention proximity or travel willingness without embedding a map for a location that is not a physical office.

### 5. Internal linking with geographic anchor text

Link from blog posts and service pages to city pages using anchors like "notre studio a Liege" or "nos services web a Bruxelles" rather than generic "en savoir plus".

---

## Content Patterns That Capture "Near Me" Without Stuffing

### Pattern 1: Local credibility intro

> P-XEL Studio est un studio de design produit base a Liege. Nous concevons et livrons des sites web, applications et identites visuelles pour les entreprises belges qui veulent un produit digital qui performe.

This naturally includes "Liege", "studio design", "sites web", "entreprises belges" without forcing keywords.

### Pattern 2: Client geography mention

> Nos clients sont bases en region liegeoise, a Bruxelles et au Luxembourg. Nous travaillons en francais et en anglais.

This captures "region liegeoise", "Bruxelles", "Luxembourg" and signals multilingual capability (important for Belgian market).

### Pattern 3: Process with local flavor

> Un premier appel de 30 minutes pour comprendre votre projet. Ensuite, un devis clair sous 48h. Si vous etes a Liege, on peut aussi se voir en personne.

This captures local intent while being genuine about the working process.

### Pattern 4: FAQ with local questions

> **Travaillez-vous uniquement a Liege ?**
> Nous sommes bases a Liege, mais nous travaillons avec des clients partout en Belgique et au Luxembourg. La majorite de nos projets se font a distance, avec des points en visio.

This FAQ naturally targets "Liege", "Belgique", "Luxembourg" and answers a real user question.

---

## Belgian French vs France French Search Differences

### Vocabulary differences that impact keyword targeting

| Concept | Belgian French | France French | Targeting note |
|---|---|---|---|
| Website | site web, site internet | site web, site internet | Same - target both |
| Business | entreprise, societe | entreprise, societe | Same |
| Quote/estimate | devis, offre de prix | devis | "Offre de prix" is more Belgian, use both |
| Freelancer | independant, freelance | freelance, auto-entrepreneur | Use "independant" in Belgian content |
| VAT number | numero TVA, numero d'entreprise | numero SIRET | Completely different system |
| Near me | pres de moi, pres de chez moi, a proximite | pres de moi, autour de moi | "Pres de chez moi" is slightly more Belgian |
| Meeting | reunion, rendez-vous | reunion, rendez-vous | Same |
| Web agency | agence web, agence digitale | agence web, agence digitale | Same |

### Spelling and usage differences

- Belgian users search "septante" not "soixante-dix" (but this rarely appears in web design queries)
- Belgian French users are more likely to include city names in searches because Belgium is small and city identity is strong
- Belgian users often search bilingually: "webdesign Luik" (Dutch for Liege) appears in some searches, especially from Flemish users looking in Wallonia border areas

### Practical impact on content

- Use "offre de prix" alongside "devis" in CTA buttons and FAQ
- Reference Belgian business realities: subsides regionales, cheques-entreprises, numero d'entreprise
- Never reference French-specific systems (SIRET, auto-entrepreneur, region Ile-de-France)
- Mention TVA/BTW when relevant to signal Belgian business context

---

## Implementation Checklist

- [ ] Audit all service pages for at least one natural geographic mention
- [ ] Verify LocalBusiness schema includes areaServed for all target cities
- [ ] Add geographic FAQ to each service page (1-2 location-relevant questions)
- [ ] Ensure footer NAP is consistent and present on every page
- [ ] Add Google Maps embed to /contact/ page
- [ ] Create internal links from service pages to city pages with geographic anchors
- [ ] Review title tags on service pages to include "Liege" or "Belgique" where natural
- [ ] Monitor Search Console for "near me" query impressions and click-through
- [ ] Track city page rankings for "[service] + [city]" combinations monthly
