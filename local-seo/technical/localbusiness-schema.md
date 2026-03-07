# LocalBusiness Schema Implementation

## Primary Schema: Homepage

This is the main LocalBusiness JSON-LD for the homepage (`p-xel.be`). It serves as the canonical business entity for Google.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://p-xel.be/#organization",
  "name": "P-XEL Studio",
  "alternateName": "P-XEL",
  "description": "Studio de design produit premium. Web apps, MVPs, sites performants, landing pages, UI/UX et branding. De l'idee au produit livre, rapidement.",
  "url": "https://p-xel.be",
  "telephone": "+32497382954",
  "email": "hello@p-xel.be",
  "image": "https://p-xel.be/images/p-xel-studio-logo.png",
  "logo": {
    "@type": "ImageObject",
    "url": "https://p-xel.be/images/p-xel-studio-logo.png",
    "width": 512,
    "height": 512
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liege",
    "addressRegion": "Wallonie",
    "addressCountry": "BE",
    "postalCode": "4000"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.6292,
    "longitude": 5.5797
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Liege",
      "@id": "https://www.wikidata.org/wiki/Q3992"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Wallonie"
    },
    {
      "@type": "City",
      "name": "Bruxelles",
      "@id": "https://www.wikidata.org/wiki/Q239"
    },
    {
      "@type": "City",
      "name": "Namur",
      "@id": "https://www.wikidata.org/wiki/Q193387"
    },
    {
      "@type": "City",
      "name": "Luxembourg",
      "@id": "https://www.wikidata.org/wiki/Q1842"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Bank Transfer, Invoice",
  "sameAs": [
    "https://www.facebook.com/pixelstudio18",
    "https://www.linkedin.com/company/p-xel-studio"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services P-XEL Studio",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Creation de site web",
          "description": "Sites web performants, rapides et optimises pour la conversion."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Design UI/UX",
          "description": "Design d'interfaces centrees utilisateur pour applications web et mobiles."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Developpement d'applications web",
          "description": "Applications web sur mesure, du MVP au produit complet."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MVP Design & Development",
          "description": "Conception et developpement de MVPs pour valider rapidement une idee produit."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landing Pages",
          "description": "Pages d'atterrissage optimisees pour la conversion et la performance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding",
          "description": "Identite visuelle premium et distinctive pour marques ambitieuses."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "1",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### Notes on the Homepage Schema

- **@type**: Use `ProfessionalService`. Google does not recognize `DesignAgency` as a valid schema type. `ProfessionalService` is the most accurate supported subtype of `LocalBusiness`.
- **@id**: Use `https://p-xel.be/#organization` as the canonical entity ID. Reference this `@id` from other pages to connect them to the same business entity.
- **aggregateRating**: Update `ratingValue` and `reviewCount` as real Google reviews accumulate. Do NOT fabricate ratings. Remove this block entirely if no reviews exist yet.
- **geo**: Coordinates point to central Liege. Update if P-XEL gets a specific office address.
- **postalCode**: Using 4000 (Liege center). Update when a specific address is confirmed.

---

## City Page Schema

Each city page (`/liege/`, `/bruxelles/`, etc.) gets a modified version that emphasizes the specific city.

### Example: `/liege/`

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://p-xel.be/#organization",
  "name": "P-XEL Studio - Liege",
  "url": "https://p-xel.be/liege/",
  "telephone": "+32497382954",
  "email": "hello@p-xel.be",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liege",
    "addressRegion": "Wallonie",
    "addressCountry": "BE",
    "postalCode": "4000"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.6292,
    "longitude": 5.5797
  },
  "areaServed": {
    "@type": "City",
    "name": "Liege",
    "@id": "https://www.wikidata.org/wiki/Q3992"
  },
  "sameAs": [
    "https://www.facebook.com/pixelstudio18",
    "https://www.linkedin.com/company/p-xel-studio"
  ]
}
```

### Example: `/bruxelles/`

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://p-xel.be/#organization",
  "name": "P-XEL Studio - Bruxelles",
  "url": "https://p-xel.be/bruxelles/",
  "telephone": "+32497382954",
  "email": "hello@p-xel.be",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liege",
    "addressRegion": "Wallonie",
    "addressCountry": "BE",
    "postalCode": "4000"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bruxelles",
    "@id": "https://www.wikidata.org/wiki/Q239"
  },
  "sameAs": [
    "https://www.facebook.com/pixelstudio18",
    "https://www.linkedin.com/company/p-xel-studio"
  ]
}
```

### Key Differences on City Pages

- **name**: Append the city name ("P-XEL Studio - Bruxelles")
- **url**: Points to the specific city page
- **areaServed**: Only the target city, not all areas
- **@id**: SAME as homepage. This tells Google it is the same business entity, not a different location.
- **address**: Always Liege (the actual business location). Do NOT fake an address in Brussels or Namur.

---

## Service+City Page Schema

Service+city pages (`/services/creation-site-web/liege/`) combine the LocalBusiness reference with a Service schema.

```json
[
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://p-xel.be/#organization",
    "name": "P-XEL Studio",
    "url": "https://p-xel.be",
    "telephone": "+32497382954",
    "areaServed": {
      "@type": "City",
      "name": "Liege"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creation de site web a Liege",
    "description": "P-XEL Studio conçoit des sites web performants, rapides et optimises pour la conversion a Liege.",
    "provider": {
      "@id": "https://p-xel.be/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Liege"
    },
    "serviceType": "Web Design",
    "url": "https://p-xel.be/services/creation-site-web/liege/"
  }
]
```

### Key Points for Service+City Schema

- The `ProfessionalService` block references the same `@id` as the homepage
- The `Service` block uses `provider.@id` to link back to the business entity
- `areaServed` is scoped to the specific city
- `serviceType` uses a generic English term (Google understands it regardless of page language)
- Each service+city page gets its own unique `Service` name and description

---

## Breadcrumb Schema

Add BreadcrumbList schema on every page with navigation depth > 1.

### Service+City Page Example

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://p-xel.be"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://p-xel.be/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Creation site web",
      "item": "https://p-xel.be/services/creation-site-web/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Liege",
      "item": "https://p-xel.be/services/creation-site-web/liege/"
    }
  ]
}
```

---

## Implementation in Next.js

### Where to Place Schema

Use a reusable component that injects JSON-LD into the `<head>` via Next.js metadata API.

```typescript
// components/schema/LocalBusinessSchema.tsx
// Accepts props: page type (homepage | city | service-city), city name, service name
// Outputs the appropriate JSON-LD block as a <script type="application/ld+json">
```

### Per-Page Implementation

| Page Type | Schema Blocks |
|-----------|--------------|
| Homepage | ProfessionalService (full) |
| City page | ProfessionalService (city-scoped) + BreadcrumbList |
| Service page | ProfessionalService (ref only) + Service + BreadcrumbList |
| Service+City page | ProfessionalService (ref only) + Service (city-scoped) + BreadcrumbList |
| Blog post | ProfessionalService (ref only) + Article + BreadcrumbList |
| Contact page | ProfessionalService (full) |

### Validation

- Test every schema variant with Google's Rich Results Test: https://search.google.com/test/rich-results
- Test with Schema.org validator: https://validator.schema.org/
- Check for errors in Search Console > Enhancements after deployment
- Re-validate after any schema template change

### Update Protocol

- When a new Google review comes in: update `aggregateRating` values
- When a new service is added: add to `hasOfferCatalog`
- When a new city is launched: add to `areaServed` on homepage schema
- When social profiles change: update `sameAs` array
- When opening hours change: update `openingHoursSpecification`
