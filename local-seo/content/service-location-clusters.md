# Service + Location Cluster Pages - Phase 2

## Strategy

Service+city pages target long-tail commercial queries like "creation site web Liege" or "developpeur web app Bruxelles." They sit between the pure service page (explains the service in depth) and the pure city page (explains local presence). These cluster pages combine both: the service expertise applied to the local context.

They are Phase 2 because they require both service pages and city pages to exist first. They plug into the internal linking mesh between those parent pages.

---

## URL Structure

```
/services/[service-slug]/[city-slug]/
```

Examples:
- `/services/creation-site-web/liege/`
- `/services/web-app/bruxelles/`
- `/services/mvp-design/luxembourg/`

This structure keeps service pages as parents in the hierarchy and adds city as a child qualifier. It avoids conflict with city pages (`/liege/`) which serve a broader purpose.

---

## Priority Matrix

Impact score: combination of estimated search volume, conversion potential, and competitive feasibility. Scale: 1 (low) to 5 (high).

| Service | Liege | Bruxelles | Luxembourg | Namur |
|---|---|---|---|---|
| Creation site web | 5 | 4 | 4 | 3 |
| Web app / developpement | 4 | 5 | 3 | 2 |
| MVP design | 4 | 4 | 3 | 1 |
| Landing page | 3 | 3 | 2 | 1 |
| UI/UX design | 3 | 4 | 2 | 1 |
| Branding | 3 | 3 | 2 | 2 |

---

## Top 6 Combinations to Build First

### 1. /services/creation-site-web/liege/
**Primary keyword:** creation site web Liege
**Secondary:** site internet Liege, faire un site web Liege, site web professionnel Liege
**Why first:** Highest volume local query, P-XEL's home city, strongest local authority
**Word count:** 1,000 - 1,200

### 2. /services/web-app/bruxelles/
**Primary keyword:** developpement web app Bruxelles
**Secondary:** agence web app Bruxelles, developpeur application web Bruxelles
**Why second:** Brussels has the highest density of startups and scale-ups needing web apps. Higher average project value.
**Word count:** 1,000 - 1,200

### 3. /services/creation-site-web/luxembourg/
**Primary keyword:** creation site web Luxembourg
**Secondary:** site internet Luxembourg, agence site web Luxembourg, site web PME Luxembourg
**Why third:** SME Package Digital subsidy makes this page a direct conversion driver. Mention subsidy in the page itself.
**Word count:** 1,000 - 1,200

### 4. /services/mvp-design/liege/
**Primary keyword:** MVP design Liege
**Secondary:** prototype application Liege, lancer un MVP Liege, startup MVP Liege
**Why fourth:** Liege startup ecosystem (VentureLab, Leansquare) creates demand. P-XEL differentiator.
**Word count:** 800 - 1,000

### 5. /services/creation-site-web/bruxelles/
**Primary keyword:** creation site web Bruxelles
**Secondary:** site internet Bruxelles, agence site web Bruxelles, site web professionnel Bruxelles
**Why fifth:** High volume but high competition. Content must differentiate hard.
**Word count:** 1,000 - 1,200

### 6. /services/mvp-design/bruxelles/
**Primary keyword:** MVP design Bruxelles
**Secondary:** developpement MVP Bruxelles, prototype startup Bruxelles, agence MVP Bruxelles
**Why sixth:** Brussels startup density. High project value.
**Word count:** 800 - 1,000

---

## Combinations to Skip (for now)

| Combination | Reason |
|---|---|
| Landing page + Namur | Too thin search volume. No local angle strong enough. |
| UI/UX + Namur | Same. Namur PMEs search for "site web," not "UI/UX." |
| Branding + Luxembourg | Low search intent for branding alone in Luxembourg. |
| Landing page + Luxembourg | Not enough search volume to justify a dedicated page. |
| Any service + Namur (except creation site web) | Namur market is primarily site web focused at this stage. |
| Branding + Namur | Too niche for a standalone page. |

These can be reconsidered if search data shows demand after 6 months.

---

## Page Template - Content Structure

Each service+city page follows this structure. Total word count: 800 - 1,200 depending on combination.

### Section 1: Hero
- H1: "[Service] a [City]" (e.g., "Creation de site web a Liege")
- Subheadline: One sentence combining service value + local relevance
- CTA button: "Reservez un appel decouverte"
- No filler. No "bienvenue sur notre page."

### Section 2: What We Deliver (300-400 words)
- Specific to this service. Not a copy of the parent service page.
- Angle: what does a [city] business specifically need from this service?
- Example for "creation site web Liege": PMEs liegoises who need a site that generates leads, not just a digital business card. Performance, SEO local, conversion-focused.
- Example for "web app Bruxelles": startups and scale-ups needing custom tools, dashboards, SaaS MVPs. Speed of delivery is key in Brussels's competitive market.
- Include 2-3 concrete deliverables (not vague promises)

### Section 3: Why P-XEL for [Service] in [City] (200-300 words)
- 3-4 bullet points, each with a brief explanation
- Must include at least one city-specific reason (proximity, local knowledge, ecosystem involvement, subsidy expertise)
- Must include at least one service-specific differentiator (product thinking, speed, modern stack)

### Section 4: Portfolio Example (150-200 words)
- One project highlight relevant to this service
- Screenshot, brief description, outcome
- If no perfect match exists, use closest project and frame it appropriately

### Section 5: Process Summary (100-150 words)
- 3-4 steps, condensed from the full process page
- Emphasize speed and clarity

### Section 6: FAQ (3-4 questions)
- At least one price question
- At least one timeline question
- At least one city-specific question (e.g., "Do you meet in person in [city]?")
- FAQ schema markup

### Section 7: CTA Block
- "Pret a lancer votre [project type] a [city] ?"
- Calendly button
- Contact info

---

## Internal Linking Architecture

### Links INTO each service+city page:
- From parent service page (`/services/creation-site-web/`) - "Vous etes a Liege ? Voir notre page dediee."
- From parent city page (`/liege/`) - In the services list section, each service links to the cluster page
- From blog articles - Contextual links where relevant (e.g., subsidy article links to `/services/creation-site-web/luxembourg/`)
- From other service+city pages in the same city - Cross-link between services ("Vous avez aussi besoin de branding ? Voir branding a Bruxelles.")
- From other service+city pages for the same service - "Nous offrons aussi ce service a Bruxelles, Namur, Luxembourg."

### Links OUT from each service+city page:
- To parent service page (breadcrumb + in-content link for deeper service info)
- To parent city page (breadcrumb + "En savoir plus sur notre presence a [city]")
- To portfolio page or case study
- To relevant blog article (subsidy guide, comparison guide)
- To Calendly (CTA)

### Breadcrumb structure:
```
Accueil > Services > [Service Name] > [City]
```
Example: Accueil > Services > Creation de site web > Liege

Use BreadcrumbList schema.

---

## Cannibalization Prevention

The main risk: Google sees the city page, the service page, and the service+city page as competing for the same query.

### Rules to prevent cannibalization:

**1. Distinct primary keywords per page type**

| Page type | Example primary keyword | What it targets |
|---|---|---|
| City page `/liege/` | agence web Liege | Brand/agency-level search in the city |
| Service page `/services/creation-site-web/` | creation site web Belgique | National service search |
| Cluster page `/services/creation-site-web/liege/` | creation site web Liege | Service-specific search in the city |

Each page owns a different query. The city page is broad ("agence web"). The service page is service-specific but national. The cluster page is service-specific AND local.

**2. Content differentiation**

- City page: talks about P-XEL's presence and all services in that city. Broad.
- Service page: explains the service in depth, methodology, tech stack, national scope. Deep.
- Cluster page: applies the service to the city context. Neither broad nor deep - it is specific. Local pain points, local examples, local reasons to choose P-XEL for this exact service in this exact city.

**3. Internal linking signals intent**

- City page links DOWN to cluster pages (supporting pages)
- Service page links DOWN to cluster pages (city variants)
- Cluster page links UP to both parents (acknowledging hierarchy)

This creates a clear topical hierarchy Google can follow.

**4. Title tag differentiation**

- City page: "Agence web a Liege | P-XEL Studio"
- Service page: "Creation de site web | P-XEL Studio"
- Cluster page: "Creation de site web a Liege | P-XEL Studio"

**5. Monitor and consolidate**

After 3 months, check Google Search Console for:
- Two P-XEL pages ranking for the same query
- One page cannibalizing another's clicks

If cannibalization occurs: add canonical hints, adjust internal linking weight, or merge pages if one is underperforming.

---

## Schema Markup Per Cluster Page

- **Service schema:** name, description, provider (P-XEL), areaServed (target city)
- **BreadcrumbList:** Accueil > Services > [Service] > [City]
- **FAQPage:** for the FAQ section
- **LocalBusiness:** P-XEL's Liege address, with areaServed set to target city

---

## Timeline

| Phase | Action | Target |
|---|---|---|
| Phase 1 (Month 1-2) | Build city pages and service pages | Foundation must exist first |
| Phase 2 (Month 2-3) | Build top 6 cluster pages listed above | Start with highest-impact combos |
| Phase 3 (Month 4-5) | Add 4-6 more cluster pages based on Phase 2 data | Expand what works |
| Ongoing | Monitor GSC, add new combos only if data justifies | No thin pages for the sake of coverage |

---

## Quality Gate

Before publishing any cluster page, verify:
- [ ] H1 includes service + city
- [ ] Primary keyword is distinct from parent pages
- [ ] At least 800 words of unique content (not copy-pasted from parent pages)
- [ ] Internal links to parent service page and parent city page
- [ ] Internal links from parent pages to this cluster page
- [ ] FAQ section with schema
- [ ] BreadcrumbList schema
- [ ] Service schema with areaServed
- [ ] CTA with Calendly link
- [ ] Meta title and description include service + city
- [ ] No content overlap >30% with any other page
