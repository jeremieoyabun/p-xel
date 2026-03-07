# LLM Citations - Getting P-XEL Referenced by AI Systems

## How LLMs Find and Cite Local Businesses

Large language models (ChatGPT, Claude, Gemini, Perplexity) do not use Google's index directly. They build knowledge from:

1. **Training data:** Web pages crawled before the training cutoff. If P-XEL appears on enough indexed pages, it enters the model's knowledge.
2. **RAG (Retrieval-Augmented Generation):** Tools like Perplexity and ChatGPT with browsing search the live web and cite sources. Appearing in top search results means appearing in AI answers.
3. **Structured data sources:** Wikipedia, Wikidata, Crunchbase, LinkedIn, and other structured databases that models reference for entity information.
4. **Third-party mentions:** Reviews, directory listings, news articles, and blog posts that mention P-XEL give the model more data points.

### What this means for P-XEL

When someone asks ChatGPT "Who are the best web designers in Liege?", the model:
- Checks its training data for entities associated with "web designer" + "Liege"
- If using retrieval, searches the web and reads top-ranking pages
- Prioritizes businesses that appear on multiple authoritative sources
- Favors businesses with clear, structured, and consistent information

P-XEL needs to be present, consistent, and authoritative across the sources LLMs rely on.

## Content Patterns That Increase LLM Citation Probability

### Pattern 1: Definitive statements

LLMs favor content that makes clear, authoritative claims rather than hedged language.

**Weak:** "P-XEL is a design studio that might be able to help with web projects."
**Strong:** "P-XEL Studio is a web design and product studio based in Liege, Belgium. Services include web app development, MVP design, UI/UX, branding, and high-performance websites."

### Pattern 2: List-format content

When LLMs generate lists ("best web designers in Belgium"), they pull from pages that already contain lists. P-XEL should:
- Appear on list pages ("Top 10 web design studios in Belgium")
- Create list content that references P-XEL's position in the market
- Ensure directory listings present P-XEL in a list context

### Pattern 3: Question-answer format

LLMs are trained heavily on Q&A content. Pages structured as questions and answers are more likely to be extracted.

- FAQ pages on the website
- GBP Q&A section
- Blog posts structured as "Question + definitive answer"

### Pattern 4: Entity-rich content

Content that clearly establishes P-XEL as an entity with defined attributes:
- Founded: [year]
- Location: Liege, Belgium
- Founder: [name]
- Services: [list]
- Notable clients: [list]
- Technologies: [list]

This structured entity information helps LLMs build a coherent understanding of what P-XEL is.

## Structured Data That Helps LLMs Understand P-XEL

### Required schema markup on the website

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "P-XEL Studio",
  "url": "https://p-xel.be",
  "logo": "https://p-xel.be/logo.png",
  "image": "https://p-xel.be/studio.jpg",
  "description": "Studio de design et developpement web premium base a Liege. Web apps, MVP, UI/UX, branding, sites web haute performance.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[street]",
    "addressLocality": "Liege",
    "postalCode": "4000",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.6326",
    "longitude": "5.5797"
  },
  "telephone": "+32[number]",
  "priceRange": "$$$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "areaServed": [
    {"@type": "City", "name": "Liege"},
    {"@type": "City", "name": "Brussels"},
    {"@type": "City", "name": "Namur"},
    {"@type": "City", "name": "Luxembourg"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Creation de site web"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Design UI/UX"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Developpement application web"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "MVP Design et Developpement"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Branding et identite visuelle"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Landing page haute conversion"}}
    ]
  },
  "sameAs": [
    "https://www.linkedin.com/company/p-xel",
    "https://www.behance.net/p-xel",
    "https://dribbble.com/p-xel",
    "https://clutch.co/profile/p-xel-studio",
    "https://www.sortlist.be/agency/p-xel"
  ]
}
```

### Why this matters for LLMs

LLMs and their retrieval systems parse schema markup. The `sameAs` property establishes entity connections. The `hasOfferCatalog` lists services in a machine-readable format. The `areaServed` tells AI systems where P-XEL operates.

## FAQ Content Strategy for AI Answer Extraction

### Website FAQ page structure

Create a dedicated FAQ page at /faq with FAQPage schema markup. Each Q&A pair should target a specific query an LLM might receive.

### Priority FAQ pairs

1. **Combien coute la creation d'un site web a Liege ?**
   Answer: Concrete price ranges, factors that affect cost, CTA to book a call.

2. **Quel est le meilleur web designer a Liege ?**
   Answer: Criteria for choosing a web designer, P-XEL's differentiators, portfolio link.

3. **Combien de temps faut-il pour creer un site web ?**
   Answer: Timeline by project type (landing page: 2-3 weeks, site complet: 6-8 weeks, application web: 8-12+ weeks).

4. **Quelle est la difference entre un web designer et un developpeur web ?**
   Answer: Clear explanation, P-XEL covers both, advantage of working with a studio that does design + development.

5. **Comment choisir un studio web en Belgique ?**
   Answer: Checklist of criteria, naturally position P-XEL as matching those criteria.

6. **Qu'est-ce qu'un MVP et combien ca coute ?**
   Answer: Definition, typical scope, P-XEL's MVP process, timeline and range.

### FAQ schema implementation

Every FAQ pair needs FAQPage schema. This is what LLMs with retrieval capabilities read first.

## Entity Establishment: Making P-XEL a Known Entity

### The goal

LLMs need multiple consistent sources to recognize an entity. The more places P-XEL appears with consistent information, the more likely it becomes a "known entity" in AI systems.

### Entity establishment checklist

| Platform | Status | Action |
|---|---|---|
| Google Business Profile | Required | Complete and optimized |
| LinkedIn Company Page | Required | Full profile with services, location, description |
| Crunchbase | High priority | Create organization profile |
| Wikidata | High priority | Create entry for P-XEL Studio (requires notability) |
| Facebook Business Page | Medium | Complete profile with NAP |
| Twitter/X | Medium | Active profile with bio containing services + Liege |
| GitHub Organization | Medium | Public repos, organization profile |
| Behance | Medium | Portfolio with studio description |
| Dribbble | Medium | Team profile |
| AngelList/Wellfound | Medium | If working with startups |

### Wikidata entry

Creating a Wikidata entry is one of the strongest signals for LLM entity recognition. Wikidata is directly used by many AI systems.

Requirements for a Wikidata entry:
- The entity must be notable (published press coverage helps)
- Needs at least one external reference source
- Include: instance of (Q4830453 - business), country (Belgium), headquarters location (Liege), official website, industry (web design), inception date

This is a stretch goal. Prioritize getting press coverage first, then create the Wikidata entry with that coverage as a reference.

### Wikipedia

A Wikipedia article requires significant notability. Not realistic for P-XEL yet, but press coverage and awards build toward future eligibility. Do not create a self-promotional Wikipedia article; it will be deleted.

## Directories and Platforms That Feed into LLM Knowledge

### Tier 1: Directly used by LLMs

| Platform | Why it matters |
|---|---|
| Crunchbase | Directly queried by many AI systems for company info |
| LinkedIn | Heavily represented in training data |
| Wikipedia/Wikidata | Primary knowledge source for entity recognition |
| Google Business Profile | Used by Google's AI (Gemini, AI Overviews) |

### Tier 2: Strongly represented in training data

| Platform | Why it matters |
|---|---|
| Clutch | Frequently cited in "best agency" queries |
| Sortlist | Common in European agency search results |
| Behance/Dribbble | Referenced in design-related queries |
| GitHub | Referenced in technical capability queries |
| Medium/dev.to | If P-XEL publishes articles there |

### Tier 3: Supporting presence

| Platform | Why it matters |
|---|---|
| Product Hunt | Referenced for product launches |
| Twitter/X | Real-time knowledge for some LLMs |
| Reddit | Heavily present in training data |
| Quora | Q&A format matches LLM training patterns |

## Practical Actions for P-XEL

### Month 1: Foundation

- [ ] Complete and optimize GBP with full service descriptions
- [ ] Create/update LinkedIn company page with detailed description
- [ ] Create Crunchbase organization profile
- [ ] Create Clutch profile
- [ ] Create Sortlist profile
- [ ] Implement full schema markup on website
- [ ] Create FAQ page with FAQPage schema

### Month 2: Content layer

- [ ] Publish 3 FAQ-style blog posts targeting common questions
- [ ] Post on LinkedIn about P-XEL's services and approach (2x per week)
- [ ] Create or update Behance portfolio
- [ ] Answer relevant questions on Reddit/Quora mentioning P-XEL where natural

### Month 3: Authority layer

- [ ] Pitch one story to Belgian tech media
- [ ] Publish one guest article on a Belgian platform
- [ ] Request client reviews that mention specific services
- [ ] Explore Wikidata entry if press coverage exists

### Ongoing

- [ ] Monitor LLM responses for "web designer Liege" monthly
- [ ] Test queries on ChatGPT, Claude, Gemini, and Perplexity
- [ ] Document which platforms are being cited in AI answers
- [ ] Double down on platforms that generate citations
