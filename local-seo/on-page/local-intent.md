# Local Intent Optimization - P-XEL Studio

## Overview

Local intent queries are searches where the user expects results relevant to their geographic area. For P-XEL Studio, capturing local intent means ranking when Belgian businesses search for web design, development, and branding services, whether or not they include a city name in their query.

---

## Types of Local Intent Queries for P-XEL's Services

### 1. Explicit local queries

The user includes a geographic term in the search.

| Query type | Examples | Target page |
|---|---|---|
| Service + city | creation site web Liege, agence web Bruxelles | City page or service+city page |
| Service + region | agence web Wallonie, web designer Belgique | City pages + service pages |
| Service + "near me" | agence web pres de moi | City page (based on IP) |
| Brand + city | P-XEL Liege | Homepage or Liege city page |

### 2. Implicit local queries

The user does NOT include a geographic term, but Google detects local intent from the query type and serves local results.

| Query type | Examples | Why Google shows local results |
|---|---|---|
| Service queries | creation site web, agence web, web designer | Google knows users prefer local service providers |
| Cost queries | prix site web, combien coute un site web | Pricing is location-dependent |
| "Best" queries | meilleure agence web, meilleur web designer | Google assumes local preference |
| Comparison queries | agence web vs freelance | Often followed by local selection |

### 3. Transactional local queries

The user is ready to buy and wants someone nearby.

| Query type | Examples | Conversion potential |
|---|---|---|
| Hire/engage | engager web designer, trouver agence web | Very high |
| Quote/devis | devis site web, devis application web | Very high |
| Meeting | rendez-vous agence web, appel agence web | Very high |

---

## Optimizing for Explicit Local Intent

### Title tag patterns

**Formula:** [Primary Service] a [City] | P-XEL Studio

| Page | Title tag |
|---|---|
| /liege/ | Studio Design Produit a Liege | P-XEL Studio |
| /bruxelles/ | Agence Design Produit a Bruxelles | P-XEL Studio |
| /services/creation-site-web/ | Creation de Sites Web Performants | P-XEL Studio Liege |
| /services/application-web/ | Developpement d'Applications Web | P-XEL Studio Liege |
| /services/branding/ | Branding et Identite Visuelle | P-XEL Studio Liege |
| /services/mvp/ | Design et Developpement MVP | P-XEL Studio Liege |

**Rules:**
- City pages put the city in the first half of the title tag
- Service pages put "Liege" or "P-XEL Studio Liege" at the end
- Never stuff multiple cities in one title tag
- Keep under 60 characters

### H1 patterns for explicit local

| Page type | H1 pattern | Example |
|---|---|---|
| City page | [Value proposition] a [City] | Studio design produit a Liege |
| Service page | [Service benefit statement] | Des sites web qui convertissent |
| Service + city (Phase 2) | [Service] a [City] - [benefit] | Creation site web a Liege - rapide et performant |

### URL structure

- City pages: /liege/, /bruxelles/, /namur/, /luxembourg/
- Service pages: /services/creation-site-web/, /services/application-web/
- Service + city (Phase 2): /services/creation-site-web-liege/
- No /services/liege/creation-site-web/ nesting (too deep, dilutes authority)

---

## Optimizing for Implicit Local Intent

Implicit local is harder because the user does not type a city. Google decides whether to show local results based on the query category and user location. P-XEL must send strong local signals on every page so that when Google decides to localize results for "creation site web", P-XEL appears for users in Liege and Wallonia.

### Content signals that reinforce local relevance

#### 1. Geographic mentions in body text (not stuffed)

Every service page should include one natural mention of Liege and one of the broader service area:

> P-XEL Studio est base a Liege et concoit des sites web pour les entreprises belges.

This is enough. Do not repeat "Liege" 15 times on a service page.

#### 2. LocalBusiness schema on every page

The JSON-LD schema with `addressLocality: "Liege"` and `areaServed` tells Google this is a local business, even on pages that do not mention a city in the content.

#### 3. Client/project references with geographic context

On portfolio pages and case studies:
> Client base a Bruxelles. Secteur : fintech. Livraison : 6 semaines.

This builds geographic relevance without being a "city page".

#### 4. Internal links to city pages

Every service page should link to at least the Liege city page:
> [En savoir plus sur nos services a Liege](/liege/)

This creates a geographic signal chain across the site.

#### 5. Google Business Profile optimization

The strongest implicit local signal is not on the website itself. It comes from Google Business Profile:
- Correct primary category
- Complete service list
- Regular posts (1-2/month)
- Photos of work
- Review responses
- Q&A section filled

#### 6. Reviews mentioning location

Encourage satisfied clients to mention their city in Google reviews:
> "P-XEL a cree notre site web pour notre cabinet a Liege. Excellent travail."

Google extracts location signals from review text.

---

## Belgian Market-Specific Patterns

### Bilingual query patterns

Belgium's linguistic divide creates unique search patterns:

| Pattern | Example | How to handle |
|---|---|---|
| French query from Wallonia | agence web Liege | Primary target. All content in French. |
| French query from Brussels | agence web Bruxelles | Target with /bruxelles/ page. |
| Dutch query from Brussels | webdesign bureau Brussel | Low priority. Do not create Dutch content unless volume justifies. |
| Dutch query for Liege | webdesign Luik | Very low volume. Not worth targeting. |
| English query from expats | web design agency Belgium | Target with English content if/when an EN version exists. Ignore for now. |
| Mixed language | webdesign agence Liege | French content ranks for these mixed queries. No action needed. |

**Practical decision:** Do NOT create Dutch or English pages in Phase 1. French content with correct schema and GBP covers 95% of the target audience.

### Cross-border Luxembourg queries

Luxembourg is a high-value market with specific patterns:

| Pattern | Notes |
|---|---|
| French queries from Luxembourg IP | Google may show Belgian results for "agence web" if the user is near the border |
| "agence web Luxembourg" from Belgian IP | Belgians searching for Luxembourg services. /luxembourg/ page targets this. |
| Multilingual expectations | Luxembourg clients expect FR + EN minimum. Mention this on /luxembourg/ page. |
| Higher budgets | Luxembourg companies have higher digital budgets. Pricing page or FAQ should acknowledge this. |

**Action:** The /luxembourg/ page should explicitly address cross-border collaboration, multilingual capability, and EUR billing.

### Regional identity in queries

Belgians search by region more than the French do:

| Region term | Coverage | Use in content |
|---|---|---|
| Wallonie | All French-speaking Belgium south of Brussels | Use on service pages as secondary geo term |
| Region liegeoise | Liege + surrounding communes | Use on /liege/ page |
| Province de Liege | Larger than city, includes Verviers, Spa, etc. | Use in FAQ or local context |
| Brabant wallon | Wavre, Ottignies, LLN | Potential Phase 2 city page |
| Hainaut | Charleroi, Mons, Tournai | Phase 2 expansion |

---

## Seasonal Patterns in Belgian Business

Belgian business search patterns follow predictable cycles. Content publishing and ad campaigns should align.

### September - October: Post-summer relaunch

**What happens:** Companies return from July-August vacation. Budgets are reviewed. New projects are launched for Q4.

**Search behavior:**
- Spike in "creation site web", "refonte site web", "nouvelle identite visuelle"
- Decision-makers actively seeking agencies
- Cheques-entreprises applications increase

**P-XEL action:**
- Publish a blog post in late August: "Rentree digitale : 5 questions a se poser avant de refaire son site web"
- Push city pages and service pages in Google Ads from September 1
- Send outreach emails to prospects in August

### January - February: New year budgets

**What happens:** Annual budgets are allocated. Digital transformation projects get greenlit. Subsidy programs reset.

**Search behavior:**
- "budget site web 2026", "devis application web"
- "cheques-entreprises 2026", "aides digitalisation Wallonie"
- Companies compare agencies in January, decide in February

**P-XEL action:**
- Publish content about digital budgeting and subsidies in December
- Update pricing/FAQ pages with current year references
- Run targeted ads in January for "devis site web" keywords

### March - May: Execution season

**What happens:** Projects signed in Q1 are in production. Some late deciders are still searching.

**Search behavior:**
- Moderate search volume
- More specific queries: "developpeur React Belgique", "design system entreprise"
- Conference and event season (Kikk preparations, tech meetups)

**P-XEL action:**
- Focus on case study publishing (show recent deliveries)
- Optimize existing pages based on Q1 Search Console data

### June - August: Summer slowdown

**What happens:** Decision-making slows. Some last-minute projects before July shutdown.

**Search behavior:**
- Drop in commercial queries
- Informational queries remain stable
- "freelance web designer" queries may increase (companies look for quick summer projects)

**P-XEL action:**
- Publish evergreen content and technical blog posts
- Update portfolio with completed projects
- Prepare September campaigns

### Subsidy cycles (year-round but peaking Q1 and Q4)

**Cheques-entreprises (Wallonia):** Companies can get up to 75% subsidy on consulting and digital services. This is a major conversion lever.

**Search patterns around subsidies:**
- "cheques-entreprises site web"
- "aide creation site internet Wallonie"
- "prime digitalisation PME Belgique"
- "cheque entreprise web design"

**P-XEL action:**
- Create a dedicated section or page about cheques-entreprises eligibility
- Mention eligibility on service pages and city pages
- FAQ answer: "Oui, nos services sont eligibles aux cheques-entreprises de la Region wallonne."

---

## Local Intent Optimization Checklist

### On every page
- [ ] LocalBusiness JSON-LD schema present
- [ ] Footer contains NAP (name, location, phone, email)
- [ ] At least one internal link to a city page

### On service pages
- [ ] Title tag ends with "P-XEL Studio Liege" or similar geographic marker
- [ ] Body text includes one natural mention of Liege/Belgique
- [ ] FAQ includes at least one location-relevant question
- [ ] "Ou nous intervenons" or equivalent section links to city pages

### On city pages
- [ ] H1 includes city name
- [ ] Title tag starts with city name or includes it in the first half
- [ ] Local context section with 3+ specific local references
- [ ] Unique FAQ with city-specific questions
- [ ] CTA with city name: "Lancez votre projet a [City]"

### On Google Business Profile
- [ ] Primary category set correctly
- [ ] All services listed
- [ ] At least 10 photos uploaded
- [ ] Business description includes primary keywords
- [ ] Posts published at least monthly
- [ ] Q&A section has pre-filled questions and answers
- [ ] Review response rate: 100%

### Content calendar alignment
- [ ] September content planned and scheduled by August 15
- [ ] January subsidy/budget content planned by December 1
- [ ] Case studies published quarterly
- [ ] City pages reviewed and refreshed every 6 months
