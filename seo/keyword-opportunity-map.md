# Keyword Opportunity Map - P-XEL Studio

## Critical Reassessment of Current Strategy

The existing keyword map (keyword-map.md) has a sound structure but makes several strategic errors that must be corrected before the site can function as a lead-generation engine.

### What works

1. One-keyword-per-page discipline is correct and must be maintained
2. Hub-and-spoke internal linking is architecturally sound
3. Service + city cluster strategy for Phase 2 is well-designed
4. Cannibalization prevention logic is solid

### What is broken or weak

#### 1. Phantom keywords on key pages

Several primary keywords target queries that do not exist in real search behavior:

| Page | Current primary keyword | Problem |
|------|------------------------|---------|
| Homepage `/` | studio digital Liege | Nobody searches this phrase. "Studio digital" is not a search pattern in Belgian French. |
| Services hub `/services/` | services design digital Belgique | Invented compound. Zero search volume. |
| Portfolio hub `/projets/` | portfolio design digital | Not a real query. Prospects search for agency portfolios indirectly, not this phrase. |
| Blog index `/blog/` or `/perspectives/` | blog design digital | Same issue. Users do not search for blogs by this label. |

**Impact**: These four pages carry no organic search potential. They function as navigation nodes only, which is acceptable for hub pages, but the homepage must carry real keyword weight.

**Fix**:
- Homepage: target "agence web Liege" or "agence digitale Liege" (real queries with real volume)
- Services hub: accept navigational role, optimize for "services P-XEL" (brand + nav)
- Portfolio hub: accept navigational role, optimize for "projets P-XEL" (brand + nav)
- Perspectives index: optimize for "blog P-XEL" or accept navigational role

#### 2. Missing high-value commercial keywords

The current strategy has no dedicated page targeting these proven high-volume, high-intent keywords:

| Missing keyword | Estimated monthly searches (FR-BE) | Estimated monthly searches (all francophone) | Intent | Value |
|----------------|-------------------------------------|----------------------------------------------|--------|-------|
| refonte site web | 200-400 | 3,000-5,000 | Commercial | Very high - existing business owners with budget |
| agence web belgique | 300-600 | N/A (Belgium-specific) | Commercial | Very high - direct service search |
| devis site web | 100-250 | 2,000-4,000 | Transactional | Very high - ready to buy |
| tarif site web / prix site internet | 150-300 | 2,500-4,000 | Commercial | High - price comparison stage |
| audit site web | 50-150 | 800-1,500 | Commercial | High - signals dissatisfaction with current site |
| site web pour PME | 50-100 | 500-1,000 | Commercial | High - audience-specific |
| agence digitale liege | 100-250 | N/A | Local + Commercial | High - direct local search |
| freelance web designer belgique | 100-200 | N/A | Commercial | Medium - competitor comparison |

**Impact**: These keywords represent hundreds of monthly searches from people actively looking to hire. Currently, P-XEL captures none of this traffic.

#### 3. Case study keywords are fiction

Current case study primary keywords like "plateforme B2B design", "design document commercial", "e-commerce artisanal Belgique" are not real search queries. Nobody googles these phrases.

**Fix**: Case studies should not target search keywords. Their role is conversion (trust-building), not acquisition. Remove fictional keyword targets and let them function as proof pages that service pages and city pages link to.

#### 4. Blog/Perspectives URL inconsistency

The older keyword map uses `/blog/` URLs. The newer perspectives strategy uses `/perspectives/`. This must be resolved before build. One path. No redirects needed if we pick now.

**Recommendation**: Use `/perspectives/` to align with premium positioning. Update all references.

#### 5. "Refonte" is buried

"Refonte site web" is one of the highest-intent commercial keywords in the French web design space. People searching this already have a website, already have a budget, and are actively looking for a partner. Currently, refonte is mentioned in a FAQ answer on the creation-site-web page. This is a waste.

**Fix**: Either give "refonte site web" its own dedicated page (Phase 2) or make it a major H2 section on the creation-site-web page with its own internal anchor and schema. For now, the perspectives article "combien coute un site web" should explicitly address refonte budgets.

#### 6. No comparison or decision-making content

Missing entirely:
- "agence vs freelance" (very common search)
- "wordpress vs next.js" or "wordpress vs site sur mesure"
- "webflow vs developpement"
- "comment choisir agence web"
- "meilleure agence web liege/belgique"

These are mid-funnel keywords with strong conversion paths.

---

## Corrected Keyword Architecture

### Tier 1: Money pages (direct lead generation)

| Page | Corrected primary keyword | Search intent | Est. monthly vol (FR-BE) | Est. monthly vol (francophone) | Conversion potential |
|------|--------------------------|---------------|--------------------------|-------------------------------|---------------------|
| `/services/creation-site-web/` | creation site web belgique | Commercial | 200-400 | 8,000-15,000* | Very high |
| `/services/application-web-mvp/` | developpement application web belgique | Commercial | 50-150 | 1,000-2,000 | Very high |
| `/services/ux-ui-design/` | UX UI designer belgique | Commercial | 50-100 | 800-1,500 | High |
| `/services/branding-identite/` | branding belgique | Commercial | 30-80 | 500-1,000 | High |
| `/liege/` | agence web liege | Local + Commercial | 150-350 | N/A | Very high |
| `/contact/` | devis site web | Transactional | 100-250 | 2,000-4,000 | Highest |

*"creation site web" without geo modifier has very high volume across France, Switzerland, Belgium combined

### Tier 2: Authority and support pages

| Page | Corrected primary keyword | Search intent | Est. monthly vol (FR-BE) | Conversion potential |
|------|--------------------------|---------------|--------------------------|---------------------|
| `/` (Homepage) | agence digitale liege | Brand + Commercial | 100-250 | High (brand anchor) |
| `/bruxelles/` | agence web bruxelles | Local + Commercial | 200-400 | High |
| `/luxembourg/` | agence web luxembourg | Local + Commercial | 100-200 | High |
| `/namur/` | creation site web namur | Local + Commercial | 50-100 | Medium |
| `/studio/` | P-XEL studio | Navigational | N/A (brand) | Medium |

### Tier 3: Content-driven acquisition (perspectives)

| Page | Primary keyword | Search intent | Est. monthly vol (francophone) | Conversion potential |
|------|----------------|---------------|-------------------------------|---------------------|
| `/perspectives/combien-coute-un-site-web` | combien coute un site web | Commercial-informational | 5,000-10,000 | Very high |
| `/perspectives/aides-digitalisation-belgique` | aides digitalisation belgique | Informational-commercial | 300-600 | Very high |
| `/perspectives/no-code-vs-code` | no-code vs code | Informational-commercial | 1,000-2,000 | Medium |
| `/perspectives/ia-creation-produit-digital` | ia creation produit digital | Informational | 200-500 | Medium |
| `/perspectives/design-system-essentiel` | design system entreprise | Informational | 200-400 | Low |

### Tier 4: Pages with no search acquisition role

These pages serve navigation, trust, and conversion purposes. They should not pretend to target search keywords:

| Page | Role | Optimization |
|------|------|-------------|
| `/services/` | Navigation hub | Brand + "services" in title. Internal link distributor. |
| `/work/` | Trust builder | Brand + "projets" in title. Proof gallery. |
| `/work/[case-study]/` | Conversion proof | Case study name + project type in title. Not keyword-targeted. |
| `/perspectives/` | Content hub | Brand + "perspectives" in title. Article distributor. |

---

## Keyword Gap Analysis: What Must Be Added

### Immediate additions (Phase 1 content or pages)

| Keyword opportunity | Recommended vehicle | Priority |
|---------------------|-------------------|----------|
| refonte site web | Major H2 section on `/services/creation-site-web/` + addressed in pricing article | P1 |
| devis site web / demande de devis | `/contact/` page optimization (title, H1, meta) | P1 |
| prix site web / tarif creation site web | Covered by `/perspectives/combien-coute-un-site-web` | P1 |
| agence digitale liege | Homepage primary keyword shift | P1 |

### Phase 2 additions (new pages or articles)

| Keyword opportunity | Recommended vehicle | Priority |
|---------------------|-------------------|----------|
| refonte site web (dedicated) | New perspectives article or dedicated service sub-page | P2 |
| agence vs freelance web | New perspectives article: "Agence, freelance ou studio : comment choisir" | P2 |
| comment choisir agence web | Same article as above, or dedicated | P2 |
| site web pour PME / site web pour startup | Audience-specific landing pages or major sections on service page | P2 |
| wordpress vs site sur mesure | New perspectives article | P2 |
| audit site web / audit UX | New service sub-page or perspectives article | P2 |
| cout application web / prix application web | New perspectives article or section in MVP service page | P2 |
| creation site web liege | Service + city cluster page | P2 |
| creation site web bruxelles | Service + city cluster page | P2 |

### Phase 3 additions (expansion)

| Keyword opportunity | Recommended vehicle | Priority |
|---------------------|-------------------|----------|
| meilleure agence web belgique | Comparison/listicle perspectives article (if appropriate for brand) | P3 |
| site web e-commerce belgique | Dedicated e-commerce service sub-page | P3 |
| developpeur react belgique / developpeur next.js | Tech-specific landing page or FAQ section | P3 |
| strategie digitale PME | Advisory perspectives article | P3 |
| site web pas cher belgique | Probably skip - conflicts with premium positioning | Skip |

---

## Cannibalization Risks in Current Setup

### Risk 1: Homepage vs Liege city page (HIGH)

Current homepage targets "studio digital Liege." Liege city page targets "agence web Liege." Both pages reference Liege as primary location. If homepage shifts to "agence digitale Liege" (recommended), it gets even closer to the Liege city page.

**Resolution**:
- Homepage: "agence digitale liege" (brand-level, broad agency query)
- Liege city page: "agence web liege" (service-specific local query)
- These are distinct queries. "Agence digitale" is broader (digital agency = strategy, marketing, etc.). "Agence web" is specific (web design/dev). Monitor after launch.

### Risk 2: Creation site web (service page) vs pricing article (MEDIUM)

Service page targets "creation site web belgique." Pricing article targets "combien coute un site web." Both heavily discuss website creation and pricing.

**Resolution**: Clear intent separation. Service page = "here's what we build and how." Pricing article = "here's what it costs in the market." Service page links to pricing article for budget details. Pricing article links to service page for "ready to start." No content overlap beyond natural cross-references.

### Risk 3: Multiple city pages for similar queries (LOW now, MEDIUM in Phase 2)

When service+city pages launch, "creation site web liege" (cluster page) could compete with "agence web liege" (city page) and "creation site web belgique" (service page).

**Resolution**: Already addressed in service-location-clusters.md. Strict keyword differentiation and clear content boundaries. Monitor GSC for query overlap.

### Risk 4: Blog "no-code vs code" vs service page "application web" (LOW)

Both discuss technology choices. No-code article could draw traffic that should go to the application service page.

**Resolution**: No-code article focuses on decision framework. Application page focuses on "hire us to build." Clear CTAs from article to service page. No overlap in target keywords.

---

## Keyword Categories Summary

### Structural SEO keywords (site architecture)
- agence digitale liege (homepage)
- P-XEL studio (studio/about)
- services P-XEL (services hub - brand)
- projets P-XEL (work hub - brand)

### Service-intent keywords (direct lead gen)
- creation site web belgique
- developpement application web belgique
- UX UI designer belgique
- branding belgique
- devis site web (contact page)
- refonte site web (creation-site-web page H2)

### Local-intent keywords (geographic capture)
- agence web liege
- agence web bruxelles
- agence web luxembourg
- creation site web namur
- creation site web liege (Phase 2 cluster)
- creation site web bruxelles (Phase 2 cluster)
- developpement web app bruxelles (Phase 2 cluster)

### Editorial / authority keywords (content-driven acquisition)
- combien coute un site web
- aides digitalisation belgique
- no-code vs code
- ia creation produit digital
- design system entreprise
- agence vs freelance web (Phase 2)
- refonte site web guide (Phase 2)
- wordpress vs site sur mesure (Phase 2)
