# City Page Framework - P-XEL Studio

Framework for local SEO city pages. Each page must feel locally authentic, not like a template with a swapped city name. Every page drives one action: book a call via Calendly.

---

## Framework Rules

1. **No spun content.** Each city page has unique local context, unique FAQ answers, unique trust angles. Shared structural sections (services list, process) are rewritten per city with local framing.
2. **One primary keyword per page.** No cannibalization with service pages or the homepage.
3. **Local proof or no page.** If there is no credible local angle (ecosystem knowledge, proximity, client history, subsidy expertise), delay the page until one exists.
4. **CTA consistency.** Every page uses Calendly booking as primary CTA. Text varies but the action is always "book a discovery call."
5. **Schema on every page.** LocalBusiness (Liege address, areaServed = target city), Service, FAQPage, BreadcrumbList.
6. **Mobile first.** These pages are entry points from Google Maps and local mobile searches. No heavy images above the fold. Portfolio screenshots lazy-loaded. Target < 2s LCP.
7. **Word count.** Minimum 1,200 words per page. Local context and FAQ sections carry the uniqueness.

---

## Shared Page Structure

Every city page follows this skeleton. Content is unique per city.

| Section | Purpose | Word Count |
|---------|---------|------------|
| 1. Hero | Capture intent, state local value prop | 50-80 |
| 2. Services overview | Show what P-XEL delivers, with local framing | 150-250 |
| 3. Why P-XEL in [city] | Local trust angles, differentiation | 200-350 |
| 4. Local context | Prove knowledge of the city's business ecosystem | 250-400 |
| 5. Selected projects | Show relevant work (local connection if possible) | 100-150 |
| 6. Process | 4 steps, emphasize speed and clarity | 100-150 |
| 7. FAQ | 5-6 unique questions per city, FAQ schema | 300-500 |
| 8. Final CTA | Convert the visitor | 30-50 |
| **Total** | | **1,200-1,900** |

---

## Internal Linking Rules (All Cities)

### Links OUT from each city page:
- All 5 service pages: `/services/creation-site-web/`, `/services/application-web-mvp/`, `/services/landing-page/`, `/services/ux-ui-design/`, `/services/branding-identite/`
- Portfolio hub or 2-3 relevant case studies
- `/a-propos/` (trust)
- `/contact/` (secondary to Calendly CTA)
- Relevant blog articles (subsidies, pricing, comparisons)
- Other city pages in a "Nous servons aussi" section

### Links INTO each city page:
- From service pages: "Decouvrez nos services a [city]"
- From blog posts mentioning the city or its business context
- From homepage: city links in footer or "Ou nous intervenons" section
- From footer navigation on every page
- From other city pages: cross-linking

### Breadcrumb:
```
Accueil > [City]
```

---

## Schema Template (All Cities)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "P-XEL Studio",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[P-XEL address]",
    "addressLocality": "Liege",
    "addressRegion": "Wallonie",
    "postalCode": "4000",
    "addressCountry": "BE"
  },
  "areaServed": {
    "@type": "City",
    "name": "[Target City]"
  },
  "url": "https://p-xel.be/[city-slug]/",
  "telephone": "[phone]",
  "email": "hello@p-xel.be"
}
```

Plus: Service schema (each service listed), FAQPage schema, BreadcrumbList schema.

---

# City 1: Liege (Primary)

## SEO Brief

- **URL:** `/liege/`
- **Intent:** Commercial + local. Someone in Liege searching for a local web/design agency.
- **Primary keyword:** agence web Liege
- **Secondary keywords:** agence digitale Liege, creation site web Liege, studio design Liege, web designer Liege, UX designer Liege, developpeur web Liege
- **Title tag:** Agence Web a Liege | P-XEL Studio
- **Meta description:** Studio digital base a Liege. Sites web, applications, MVP, branding et UX/UI. Du concept au produit livre. 16+ ans d'expertise. Reservez un appel.
- **Schema:** LocalBusiness (areaServed: Liege), Service, FAQPage, BreadcrumbList
- **Priority:** P0 - Build first
- **Word count target:** 1,500-2,000 (most content, primary city)

## Search Intent Logic

Liege is P-XEL's home city. The intent is direct: someone local searching for a web agency nearby. They want proximity, proven work, and clear pricing. This page must rank for the broadest local agency queries and funnel visitors to specific service pages or directly to Calendly.

## Keyword Opportunities

| Keyword | Volume Estimate | Intent | Page Targets |
|---------|----------------|--------|-------------|
| agence web Liege | High | Commercial | This page (primary) |
| creation site web Liege | Medium-High | Commercial | Phase 2 cluster: `/services/creation-site-web/liege/` |
| agence digitale Liege | Medium | Commercial | This page (secondary) |
| web designer Liege | Medium | Commercial | This page (secondary) |
| developpeur web Liege | Medium | Commercial | This page (secondary) |
| UX designer Liege | Low-Medium | Commercial | Phase 2 cluster: `/services/ux-ui-design/liege/` |
| branding Liege | Low | Commercial | Phase 2 cluster: `/services/branding-identite/liege/` |
| MVP startup Liege | Low | Commercial | This page (FAQ) |

## Local Trust Angles

1. **Physically based in Liege.** Not a Brussels agency parachuting in. P-XEL is Liege-rooted, Liege-addressed, Liege-present.
2. **Ecosystem insider.** Knowledge of VentureLab, Leansquare, SPI, Noshaq. Understands the Liege startup and PME landscape because P-XEL operates within it.
3. **In-person available.** Clients can meet face-to-face. No timezone issues, no communication delays.
4. **Walloon market understanding.** Cheques-entreprises, regional subsidies, PME challenges specific to Wallonia.
5. **16+ years of local track record.** Not a new player.

## Local Context to Weave In

- Liege as a growing tech city: WSL, SPI, VentureLab, Leansquare, Noshaq
- University of Liege and HEC Liege as startup feeders
- La Boverie, Guillemins quarter, Mediacite as symbols of modern Liege
- Liege Airport/logistics hub needing digital partners
- Growing PME and startup density in the province
- Kikk Festival proximity (Namur, but Walloon creative scene)

## CTA Logic

- **Primary CTA:** "Reserver un appel" (Calendly)
- **Secondary CTA:** "Voir nos projets" (portfolio)
- **Angle:** "On est a Liege. On se rencontre quand vous voulez."
- **Trust line:** "Appel gratuit de 30 minutes. Sans engagement."

## FAQ Ideas (6 questions)

1. **Combien coute un site web professionnel a Liege ?** Range by project type, link to pricing blog post, push toward call for accurate estimate.
2. **P-XEL travaille-t-il avec des startups liegoises ?** Yes. MVP expertise. VentureLab/Leansquare context. Link to application-web-mvp service page.
3. **Peut-on se rencontrer en personne a Liege ?** Yes, based here. Available for in-person meetings.
4. **Quel est le delai pour creer un site web a Liege ?** 2-6 weeks depending on scope.
5. **P-XEL peut-il aider avec les cheques-entreprises ?** Guidance on Walloon digitalization subsidies. Link to blog article.
6. **Quels types d'entreprises liegoises font appel a P-XEL ?** Startups, PMEs, independants, structures publiques.

## Internal Linking Opportunities

- Each service mention links to its dedicated service page
- Link to blog: `/blog/combien-coute-un-site-web/` from pricing FAQ
- Link to blog: `/blog/prime-digitalisation-belgique/` from subsidies FAQ
- Link to case studies: Greenmood (B2B platform), Arduenna Gin (e-commerce)
- Link to Phase 2 cluster pages when live: `/services/creation-site-web/liege/`
- Cross-link to other city pages in "Nous servons aussi" section
- Link to `/a-propos/` for founder credibility

---

# City 2: Bruxelles

## SEO Brief

- **URL:** `/bruxelles/`
- **Intent:** Commercial + local. Brussels-based business or startup looking for a digital agency.
- **Primary keyword:** agence digitale Bruxelles
- **Secondary keywords:** agence web Bruxelles, creation site web Bruxelles, studio UX Bruxelles, developpeur web Bruxelles, agence design Bruxelles
- **Title tag:** Agence Digitale a Bruxelles | P-XEL Studio
- **Meta description:** Studio design produit pour les entreprises bruxelloises. Sites web, applications, MVP, branding. Qualite premium, tarifs competitifs. Reservez un appel.
- **Schema:** LocalBusiness (areaServed: Bruxelles), Service, FAQPage, BreadcrumbList
- **Priority:** P1 - High
- **Word count target:** 1,200-1,500

## Search Intent Logic

Brussels has the highest search volume but also the highest agency competition. The searcher is comparing agencies. P-XEL must differentiate on: lean pricing (no Brussels overhead), direct founder access, speed, and product thinking. The page must answer the implicit question: "Why should I pick an agency based in Liege?"

## Keyword Opportunities

| Keyword | Volume Estimate | Intent | Page Targets |
|---------|----------------|--------|-------------|
| agence digitale Bruxelles | High | Commercial | This page (primary) |
| agence web Bruxelles | High | Commercial | This page (secondary) |
| creation site web Bruxelles | Medium-High | Commercial | Phase 2 cluster: `/services/creation-site-web/bruxelles/` |
| studio UX Bruxelles | Medium | Commercial | Phase 2 cluster: `/services/ux-ui-design/bruxelles/` |
| developpeur web Bruxelles | Medium | Commercial | This page (secondary) |
| agence design Bruxelles | Medium | Commercial | This page (secondary) |
| developpement application Bruxelles | Low-Medium | Commercial | Phase 2 cluster: `/services/application-web-mvp/bruxelles/` |

## Local Trust Angles

1. **Premium quality, lean pricing.** No Brussels rent, no bloated team. Same quality, lower rates.
2. **Direct founder access.** No account managers, no intermediary layers. The person who takes the call is the person who does the work.
3. **1h by train.** Available for on-site meetings in Brussels when needed.
4. **Startup ecosystem familiarity.** BeCentral, Co.Station, Startit@KBC. P-XEL understands the Brussels startup pace and needs.
5. **Subsidy guidance.** Cheques-entreprises Bruxelles (1819), prime digitalisation. Help clients reduce costs.

## Local Context to Weave In

- Brussels startup hub density: BeCentral, Co.Station, Silversquare, Start.be
- International business presence, EU institutions
- Brussels Digital initiative, hub.brussels
- Dense agency competition (differentiation is key)
- Prime digitalisation Bruxelles (1819)
- Scale-up scene: companies raising funds, needing product fast
- Multilingual reality (FR + NL + EN)

## CTA Logic

- **Primary CTA:** "Reserver un appel" (Calendly)
- **Secondary CTA:** "Voir nos projets"
- **Angle:** "Qualite d'agence premium. Prix de studio lean. Depuis Liege, pour Bruxelles."
- **Trust line:** "15 minutes, sans engagement. On vous dit si on est le bon fit."

## FAQ Ideas (5-6 questions)

1. **Etes-vous bases a Bruxelles ?** Based in Liege, serving Brussels actively. 1h by train. Available for meetings.
2. **Pourquoi choisir une agence hors Bruxelles ?** Cost advantage, direct access, same quality. No overhead markup.
3. **Quels types de clients bruxellois accompagnez-vous ?** Startups, PMEs, scale-ups, associations.
4. **Combien coute un site web a Bruxelles ?** Range, depends on scope. Book a call for accurate estimate.
5. **Connaissez-vous les aides a la digitalisation a Bruxelles ?** Yes, cheques-entreprises, prime 1819. Guidance included.
6. **Travaillez-vous en neerlandais ?** Projects primarily in French. Multilingual sites (FR/NL/EN) technically supported.

## Internal Linking Opportunities

- All 5 service pages
- Blog: `/blog/prime-digitalisation-belgique/` (subsidies angle)
- Blog: `/blog/combien-coute-un-site-web/` (pricing FAQ)
- Case studies: strongest projects showing execution speed
- Cross-link to Liege page: "Notre base"
- Phase 2 clusters when live: `/services/creation-site-web/bruxelles/`, `/services/ux-ui-design/bruxelles/`
- Other city pages in "Nous servons aussi"

---

# City 3: Namur

## SEO Brief

- **URL:** `/namur/`
- **Intent:** Commercial + local. Namur-based PME or organization looking for website creation.
- **Primary keyword:** creation site web Namur
- **Secondary keywords:** agence web Namur, agence digitale Namur, web designer Namur, site internet Namur, developpeur web Namur
- **Title tag:** Creation Site Web a Namur | P-XEL Studio
- **Meta description:** Sites web, applications et branding pour les entreprises namuoroises. Studio digital a 45 min de Namur. Rapide, premium, efficace. Reservez un appel.
- **Schema:** LocalBusiness (areaServed: Namur), Service, FAQPage, BreadcrumbList
- **Priority:** P2 - Medium
- **Word count target:** 1,000-1,200

## Search Intent Logic

Namur searchers are primarily PMEs and independants looking for website creation. The market is less startup-heavy than Brussels or Liege. The intent is practical: "I need a site for my business." P-XEL must position as the premium-but-accessible option between expensive Brussels agencies and local solo freelancers.

## Keyword Opportunities

| Keyword | Volume Estimate | Intent | Page Targets |
|---------|----------------|--------|-------------|
| creation site web Namur | Medium | Commercial | This page (primary) |
| agence web Namur | Medium | Commercial | This page (secondary) |
| agence digitale Namur | Low-Medium | Commercial | This page (secondary) |
| web designer Namur | Low | Commercial | This page (secondary) |
| site internet Namur | Low | Commercial | This page (secondary) |

Note: Lower volume than Liege and Brussels. Fewer keyword cluster opportunities. Focus on quality over quantity.

## Local Trust Angles

1. **45 minutes from Namur.** Close enough for in-person meetings, without being another remote agency.
2. **Walloon PME understanding.** P-XEL works with the same type of businesses that populate Namur's economy.
3. **Premium middle ground.** Not a solo freelancer, not a big Brussels agency. The right fit for Namur PMEs who want quality without the overhead.
4. **Cheques-entreprises expertise.** Help Namur businesses access Walloon digitalization subsidies.
5. **Fast execution.** PMEs need results quickly, not agency timelines.

## Local Context to Weave In

- Namur as Wallonia's capital: proximity to regional government, public institutions
- BEP (Bureau Economique de la Province) supporting local businesses
- TRAKK (hub for creative industries and innovation)
- NamurInvest, PME density in Province de Namur
- Growing demand for digital presence among traditional PMEs
- Kikk Festival (digital creativity event hosted in Namur)
- Proximity to Liege (30-45 min) for easy collaboration

## CTA Logic

- **Primary CTA:** "Reserver un appel" (Calendly)
- **Secondary CTA:** "Lancer mon projet" (contact form)
- **Angle:** "Un partenaire digital proche de Namur. Studio premium, execution rapide."
- **Trust line:** "Appel gratuit de 30 minutes. Sans engagement."

## FAQ Ideas (5 questions)

1. **Combien coute la creation d'un site web a Namur ?** Range by project type, starting from 1,500 EUR for a landing page, 5,000-15,000 EUR for a site complet. Book a call.
2. **P-XEL se deplace-t-il a Namur ?** Yes, 45 min from our studio. Available for in-person meetings.
3. **Travaillez-vous avec des independants et petites PME ?** Yes. Adapted approach for smaller structures. Same quality.
4. **Peut-on beneficier des cheques-entreprises pour un projet avec P-XEL ?** Yes. Guidance on Walloon subsidies included.
5. **Quel est votre delai de livraison ?** Landing page: 1-2 weeks. Site vitrine: 3-6 weeks. Application web: 6-12 weeks.

## Internal Linking Opportunities

- All 5 service pages (focus on creation-site-web and branding for Namur PME audience)
- Blog: `/blog/combien-coute-un-site-web/`
- Blog: `/blog/prime-digitalisation-belgique/`
- Case studies: projects most relevant to PME context
- Cross-link to Liege page ("Notre base")
- Cross-link to other city pages in "Nous servons aussi"
- Phase 2 cluster: `/services/creation-site-web/namur/` when live

---

# City 4: Charleroi

## SEO Brief

- **URL:** `/charleroi/`
- **Intent:** Commercial + local. Charleroi-based PME or organization seeking web/digital services.
- **Primary keyword:** agence web Charleroi
- **Secondary keywords:** creation site web Charleroi, agence digitale Charleroi, web designer Charleroi, site internet Charleroi, developpeur web Charleroi
- **Title tag:** Agence Web a Charleroi | P-XEL Studio
- **Meta description:** Sites web, applications et branding pour les entreprises de Charleroi. Studio digital premium base en Wallonie. Execution rapide. Reservez un appel.
- **Schema:** LocalBusiness (areaServed: Charleroi), Service, FAQPage, BreadcrumbList
- **Priority:** P3 - Build after Phase 1 cities are indexed
- **Word count target:** 1,000-1,200

## Search Intent Logic

Charleroi is Wallonia's second-largest city with a growing digital economy. The searcher is typically a PME or independant looking for web services locally. Competition is lower than Brussels but the market is price-sensitive. P-XEL must position on quality and execution speed without feeling overpriced for the local market.

## Keyword Opportunities

| Keyword | Volume Estimate | Intent | Page Targets |
|---------|----------------|--------|-------------|
| agence web Charleroi | Medium | Commercial | This page (primary) |
| creation site web Charleroi | Medium | Commercial | This page (secondary) |
| agence digitale Charleroi | Low-Medium | Commercial | This page (secondary) |
| web designer Charleroi | Low | Commercial | This page (secondary) |
| site internet Charleroi | Low | Commercial | This page (secondary) |

Lower volume than Liege and Brussels. Comparable to Namur. Focus on conversion quality over traffic volume.

## Local Trust Angles

1. **Walloon solidarity.** P-XEL understands the Walloon PME landscape from the inside. Same challenges, same market.
2. **1h15 from Charleroi.** Close enough for project meetings when needed.
3. **Charleroi's digital transformation.** The city is investing in its reinvention. Digital presence is part of that shift. P-XEL aligns with this momentum.
4. **Cheques-entreprises access.** Same Walloon subsidies, same guidance.
5. **No local agency lock-in.** Charleroi businesses often work with Brussels agencies or very small local freelancers. P-XEL is the missing middle: studio-quality, direct, fast.

## Local Context to Weave In

- Charleroi as Wallonia's economic reboot city: CATCH (Catalysts for Charleroi), urban renewal initiatives
- A6K (innovation hub), Sambrinvest (investment), Hainaut Developpement
- Biopark Charleroi (biotech cluster), Aeropole (airport zone)
- Brussels South Charleroi Airport as economic driver and employer ecosystem
- Growing tech and creative sectors: co-working spaces, digital training (Molengeek Charleroi, Technofutur TIC)
- Traditional industries (steel, glass) transitioning to digital: need for web presence and digital tools
- Proximity to Brussels (50 min by train) pulling local talent and business

## CTA Logic

- **Primary CTA:** "Reserver un appel" (Calendly)
- **Secondary CTA:** "Lancer mon projet" (contact form)
- **Angle:** "Un studio digital qui comprend les PME wallonnes. Qualite premium, execution rapide."
- **Trust line:** "Appel gratuit de 30 minutes. Sans engagement."

## FAQ Ideas (5 questions)

1. **Combien coute un site web a Charleroi ?** Range by project type. Starting from 1,500 EUR for a landing page. Book a call for an accurate estimate.
2. **P-XEL se deplace-t-il a Charleroi ?** Meetings possibles. 1h15 depuis notre studio a Liege. Collaboration principalement en remote avec suivi en temps reel.
3. **Travaillez-vous avec des PME et independants de la region de Charleroi ?** Yes. Experience with Walloon PMEs of all sizes.
4. **Quelles aides a la digitalisation sont disponibles a Charleroi ?** Cheques-entreprises Wallonie. Guidance on application included.
5. **Quel est votre delai pour livrer un site web ?** Landing page: 1-2 semaines. Site vitrine: 3-6 semaines. Application web: 6-12 semaines.

## Internal Linking Opportunities

- All 5 service pages
- Blog: `/blog/combien-coute-un-site-web/`
- Blog: `/blog/prime-digitalisation-belgique/`
- Case studies: projects relevant to PME/industrial context
- Cross-link to Liege page, Namur page, Bruxelles page
- No Phase 2 service+city clusters planned for Charleroi initially (monitor search data first)

---

# City 5: Verviers

## SEO Brief

- **URL:** `/verviers/`
- **Intent:** Commercial + local. Verviers-based PME, independant, or organization seeking web services.
- **Primary keyword:** creation site web Verviers
- **Secondary keywords:** agence web Verviers, web designer Verviers, site internet Verviers, agence digitale Verviers
- **Title tag:** Creation Site Web a Verviers | P-XEL Studio
- **Meta description:** Sites web et branding pour les entreprises de Verviers. Studio digital base a Liege, a 30 minutes. Execution rapide, qualite premium. Reservez un appel.
- **Schema:** LocalBusiness (areaServed: Verviers), Service, FAQPage, BreadcrumbList
- **Priority:** P3 - Build after Phase 1 cities are indexed
- **Word count target:** 1,000-1,200

## Search Intent Logic

Verviers is a smaller market with lower search volume. The city has limited local digital agencies, which means less competition. The searcher is almost always a PME or independant who needs a website. P-XEL's proximity (30 min from Liege) is the strongest angle. This page must feel like a natural extension of the Liege presence, not a forced SEO play.

## Keyword Opportunities

| Keyword | Volume Estimate | Intent | Page Targets |
|---------|----------------|--------|-------------|
| creation site web Verviers | Low | Commercial | This page (primary) |
| agence web Verviers | Low | Commercial | This page (secondary) |
| web designer Verviers | Very low | Commercial | This page (secondary) |
| site internet Verviers | Very low | Commercial | This page (secondary) |

Low volume across the board. This page is a long-tail play: low competition, high conversion potential for the few who search. Quality of the page matters more than quantity of content.

## Local Trust Angles

1. **30 minutes from Verviers.** P-XEL is the closest premium studio. Practically a neighbor.
2. **Province de Liege.** Same province, same economic fabric. P-XEL understands the local business reality.
3. **Underserved market.** Verviers has very few quality digital agencies. Most businesses either go to Liege, Brussels, or use cheap freelance solutions. P-XEL fills the gap.
4. **Cheques-entreprises.** Same Walloon subsidies available. Guidance provided.
5. **Personal relationship.** In a smaller city, direct founder access matters even more. No corporate buffer.

## Local Context to Weave In

- Verviers as a city in economic transition: textile industry legacy evolving into new sectors
- SPI (agence de developpement Province de Liege) supporting Verviers businesses
- Vedia (local TV) and regional media ecosystem
- Proximity to the German-speaking community and Eupen (potential cross-border angle)
- E40/E42 corridor connecting Verviers to Liege and Aachen
- Growing artisanal and independent sector (food, craft, retail) needing digital presence
- Verviers as a less expensive base for businesses that serve the broader Liege-Eupen corridor

## CTA Logic

- **Primary CTA:** "Reserver un appel" (Calendly)
- **Secondary CTA:** "Lancer mon projet" (contact form)
- **Angle:** "Votre studio digital, a 30 minutes de Verviers. On se deplace."
- **Trust line:** "Appel gratuit de 30 minutes. Sans engagement."

## FAQ Ideas (5 questions)

1. **Combien coute un site web a Verviers ?** Same pricing as all our projects. Starting from 1,500 EUR. Book a call for a precise estimate.
2. **P-XEL se deplace-t-il a Verviers ?** Oui. 30 minutes depuis notre studio a Liege. Rencontre en personne possible.
3. **Travaillez-vous avec des petites entreprises et independants ?** Oui. On adapte notre approche a la taille du projet. Meme rigueur, meme qualite.
4. **Quelles aides existent pour digitaliser mon entreprise a Verviers ?** Cheques-entreprises de la Region wallonne. On vous guide dans les demarches.
5. **Pouvez-vous refondre un site existant ?** Oui. Audit, refonte design, migration de contenu, optimisation SEO. On gere tout.

## Internal Linking Opportunities

- All 5 service pages (focus on creation-site-web and branding for the Verviers PME audience)
- Blog: `/blog/combien-coute-un-site-web/`
- Blog: `/blog/prime-digitalisation-belgique/`
- Cross-link to Liege page (primary hub, same province)
- Cross-link to other city pages in "Nous servons aussi"
- No Phase 2 service+city clusters planned for Verviers (volume too low)

---

# Cannibalization Prevention

## Keyword Ownership Rules

| Page Type | Keyword Pattern | Example |
|-----------|----------------|---------|
| Homepage | `studio digital Liege` | Brand + broad local |
| Service page | `[service] Belgique` | National service scope |
| City page | `agence web [city]` or `creation site web [city]` | Local agency/service query |
| Service+city cluster (Phase 2) | `[specific service] [city]` | `creation site web Liege` |

Each layer targets a different intent specificity:
- **Homepage:** Brand query with location
- **Service pages:** "I need this service" (national)
- **City pages:** "I need an agency near me" (local, broad)
- **Cluster pages:** "I need this specific service near me" (local, specific)

## Cross-City Differentiation Checklist

Before publishing any city page, verify:

- [ ] H1 is unique (not just "[generic term] a [city]")
- [ ] Meta description is unique, not a template swap
- [ ] Local context section mentions at least 3 specific local references (organizations, hubs, economic sectors)
- [ ] FAQ questions are unique to this city
- [ ] FAQ answers reference city-specific realities
- [ ] At least one project/case study has a connection to the city's economy or industry
- [ ] Internal links go to at least 4 service pages
- [ ] Schema includes the city in areaServed
- [ ] The page passes: "Would this specifically help someone searching in [city]?"

---

# Build Priority and Timeline

| Priority | City | URL | When | Rationale |
|----------|------|-----|------|-----------|
| P0 | Liege | `/liege/` | Phase 1 launch | Home city. Strongest local authority. Most content. |
| P1 | Bruxelles | `/bruxelles/` | Phase 1 launch | Highest volume. Competitive but essential. |
| P2 | Namur | `/namur/` | Phase 1 launch | Wallonia's capital. Medium volume. PME audience. |
| P3 | Charleroi | `/charleroi/` | Month 2-3 (after Phase 1 cities indexed) | Growing market. Lower competition. |
| P3 | Verviers | `/verviers/` | Month 2-3 (after Phase 1 cities indexed) | Very close to Liege. Low competition. Long-tail play. |

Note: Luxembourg (`/luxembourg/`) is already planned in the existing sitemap and keyword map as a P2 city page. Its framework exists in `/local-seo/content/city-landing-pages.md`. It should be built alongside Phase 1 cities due to the SME Package Digital subsidy conversion angle.

---

# Scalability

## Adding New Cities Later

When adding new cities (Mons, Tournai, Arlon, Eupen):

1. Validate search volume first (Google Keyword Planner, GSC data from existing city pages)
2. Identify a credible local angle (proximity, clients, ecosystem knowledge, subsidy expertise)
3. Follow this framework structure exactly
4. Ensure primary keyword does not cannibalize existing city pages
5. Add internal links from existing city pages and service pages
6. Monitor for 3 months before creating service+city cluster pages

## Service+City Clusters (Phase 2)

Top priority combinations to build after city pages are indexed:

| Cluster Page | Primary Keyword | Parent City | Parent Service |
|-------------|----------------|-------------|----------------|
| `/services/creation-site-web/liege/` | creation site web Liege | `/liege/` | `/services/creation-site-web/` |
| `/services/creation-site-web/bruxelles/` | creation site web Bruxelles | `/bruxelles/` | `/services/creation-site-web/` |
| `/services/ux-ui-design/bruxelles/` | UX designer Bruxelles | `/bruxelles/` | `/services/ux-ui-design/` |
| `/services/application-web-mvp/bruxelles/` | developpement application Bruxelles | `/bruxelles/` | `/services/application-web-mvp/` |

Charleroi and Verviers: no cluster pages planned initially. Monitor search data for 6 months before considering.
