# Phase 1.5: Perspectives Editorial Layer

## Why Phase 1.5

Phase 1 shipped the premium showcase: homepage, work, services, studio, contact, local SEO.
Phase 2 is the broader expansion (new service pages, city pages, branding).

Between these, the biggest gap is editorial authority. The site looks premium but has no content engine. No way to capture informational-commercial traffic. No way to build topical authority. No way to rank for the high-volume francophone queries identified in the keyword strategy.

Phase 1.5 closes this gap by adding a selective, premium editorial layer.

## What Phase 1.5 is NOT

- Not a blog. Not a content calendar. Not a collection of generic advice articles.
- Not Phase 2. No new service pages, no new city pages, no new case studies.
- Not 20 articles. This is 4 surgical pieces of content, each targeting a validated keyword cluster with real lead-generation potential.

## Scope

### Pages to build

| Page | URL | Type |
|------|-----|------|
| Perspectives index | `/perspectives/` | Hub page (article grid) |
| Combien coute un site web | `/perspectives/combien-coute-un-site-web` | Pillar article |
| Aides digitalisation belgique | `/perspectives/aides-digitalisation-belgique` | Authority article |
| No-code vs code | `/perspectives/no-code-vs-code` | Decision article |
| IA creation produit digital | `/perspectives/ia-creation-produit-digital` | Positioning article |

### Infrastructure

- Article content system (TSX-based, no CMS)
- Article metadata registry
- ArticleCard, ArticleHero, ArticleBody, ArticleHighlight, ArticleFAQ components
- Structured data: Article schema, FAQ schema, BreadcrumbList
- Sitemap inclusion
- Header/footer navigation update

## Strategic rationale per article

### P1: Combien coute un site web
- **Volume**: 5,000-10,000/month francophone
- **Intent**: Commercial. Searchers have a project and need a budget reference.
- **Role**: Traffic pillar. The single highest-volume, highest-conversion content asset P-XEL can own.
- **Internal linking**: Hub for all other articles and both service pages.

### P2: Aides digitalisation belgique
- **Volume**: 300-600/month Belgium
- **Intent**: Commercial. Searchers have a project and want funding.
- **Role**: Unfair advantage. No competitor covers this well. Removes buying objection ("it costs less than you think").
- **Conversion angle**: "P-XEL handles the subsidy application for you."

### P3: No-code vs code
- **Volume**: 1,500-3,000/month francophone
- **Intent**: Informational-commercial. Evaluating tech before choosing a provider.
- **Role**: Decision content. Catches prospects one step before "hire someone."
- **Conversion angle**: P-XEL works with both approaches. The recommendation leads to booking a call.

### P4: IA creation produit digital
- **Volume**: 100-300/month (growing)
- **Intent**: Informational.
- **Role**: Positioning play. Reinforces "AI Product Designer" identity.
- **Conversion angle**: Indirect. Credibility asset for sales conversations.
- **Publish gate**: Only if the content is genuinely strong. Weak AI content does damage.

## SEO architecture

### Content hierarchy

```
/perspectives/ (hub)
  |
  |-- /perspectives/combien-coute-un-site-web (PILLAR)
  |     |-- links to: services/creation-site-web, services/application-web-mvp
  |     |-- links to: aides-digitalisation, no-code-vs-code
  |     |-- links to: /contact/
  |
  |-- /perspectives/aides-digitalisation-belgique
  |     |-- links to: combien-coute-un-site-web
  |     |-- links to: services/creation-site-web, /liege/, /contact/
  |
  |-- /perspectives/no-code-vs-code
  |     |-- links to: services/application-web-mvp, services/creation-site-web
  |     |-- links to: combien-coute-un-site-web, /contact/
  |
  |-- /perspectives/ia-creation-produit-digital
  |     |-- links to: services/application-web-mvp
  |     |-- links to: no-code-vs-code, /contact/
```

### Service page backlinks
- `/services/creation-site-web/` links to pricing article and subsidies article
- `/services/application-web-mvp/` links to pricing article and no-code article
- `/liege/` links to subsidies article

### Navigation update
- Add "Perspectives" to header nav (between Studio and Contact)
- Add Perspectives section to footer nav

## Design direction

The Perspectives section must match the premium level of the rest of the site. It is not a dumping ground for SEO content.

### Index page
- Clean typographic hero (no image). H1 "Perspectives" with editorial subline.
- 2-column card grid (desktop), 1-column (mobile)
- Each card: thumbnail, category label, title, excerpt, reading time
- Premium card hover (lift + subtle shadow, consistent with capabilities section)
- Bottom CTA block

### Article pages
- Full-width hero image with overlay and title treatment
- Light background for reading comfort (variant="light")
- Distinctive article typography (body text differentiated from UI text)
- Accent markers on H2s (violet line or square, P-XEL signature)
- Mid-article CTA callout blocks (accent-bordered)
- FAQ accordion at end (with schema)
- End-article CTA block (full width, matching homepage CTA style)
- Related articles (2-3 cards at bottom)

## Content quality standards

- 1,200-2,500 words per article. Dense, not padded.
- Every section delivers value or gets cut.
- P-XEL opinion or experience in every article. Not neutral. Not generic.
- At least one concrete number, example, or case per article.
- Tone: expert, direct, premium. Not academic. Not casual.
- FAQ schema with 3-6 questions per article.
- Minimum 2 internal links to service pages, 1 to another article.
- Mid-article CTA + end-article CTA.

## Success metrics

| Article | Target ranking | Timeline | Lead metric |
|---------|---------------|----------|-------------|
| Pricing | Top 10 "combien coute un site web" | 3 months | CTA clicks to contact |
| Subsidies | Top 3 "aides digitalisation belgique" | 3 months | CTA clicks to contact |
| No-code | Top 10 "no-code vs code" | 4 months | CTA clicks to service page |
| AI | N/A (positioning play) | N/A | Referenced in sales conversations |

## Risk: publishing weak content

Every article published under P-XEL's name is a brand statement. A weak, generic, or outdated article does more damage than having no article at all. The publishing gate is: would you send this to a prospect as proof of your expertise?

If the answer is not a clear yes, do not publish. Defer to Phase 2.

## Relationship to Phase 2

Phase 1.5 establishes the editorial infrastructure. Phase 2 adds:
- Refonte de site web (3,000-5,000/month, very high conversion)
- Combien coute une application web (1,000-2,000/month)
- Agence vs freelance vs studio (1,000-2,000/month)
- WordPress vs site sur mesure (800-1,500/month)

Phase 2 articles use the same content system, components, and design. No new infrastructure needed.
