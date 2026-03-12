import { SITE_URL, SITE_NAME, CONTACT, SOCIAL } from "./constants";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org" as const,
    "@type": "Organization" as const,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    sameAs: [SOCIAL.linkedin],
    contactPoint: {
      "@type": "ContactPoint" as const,
      telephone: CONTACT.phoneRaw,
      email: CONTACT.email,
      contactType: "customer service",
      availableLanguage: ["French", "English"],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org" as const,
    "@type": "ProfessionalService" as const,
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
    image: `${SITE_URL}/logo.svg`,
    logo: `${SITE_URL}/logo.svg`,
    sameAs: [SOCIAL.linkedin],
    address: {
      "@type": "PostalAddress" as const,
      streetAddress: "Rue de la Casquette 5",
      addressLocality: "Liege",
      postalCode: "4000",
      addressRegion: "Wallonie",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates" as const,
      latitude: 50.6292,
      longitude: 5.5734,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City" as const, name: "Liege" },
      { "@type": "City" as const, name: "Bruxelles" },
      { "@type": "City" as const, name: "Luxembourg" },
      { "@type": "AdministrativeArea" as const, name: "Wallonie" },
      { "@type": "Country" as const, name: "Belgium" },
      { "@type": "Country" as const, name: "Luxembourg" },
    ],
    knowsLanguage: ["fr", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog" as const,
      name: "Digital Product Services",
      itemListElement: [
        { "@type": "Offer" as const, itemOffered: { "@type": "Service" as const, name: "Web Development" } },
        { "@type": "Offer" as const, itemOffered: { "@type": "Service" as const, name: "Web Application & MVP" } },
        { "@type": "Offer" as const, itemOffered: { "@type": "Service" as const, name: "UX/UI Design" } },
        { "@type": "Offer" as const, itemOffered: { "@type": "Service" as const, name: "Branding & Identity" } },
        { "@type": "Offer" as const, itemOffered: { "@type": "Service" as const, name: "AI Studio" } },
      ],
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org" as const,
    "@type": "Person" as const,
    name: "Jeremie Oyabun",
    jobTitle: "Founder & Product Designer",
    worksFor: {
      "@type": "Organization" as const,
      name: SITE_NAME,
      url: SITE_URL,
    },
    sameAs: [SOCIAL.linkedin],
    knowsAbout: [
      "Product Design",
      "UX/UI Design",
      "Web Development",
      "Branding",
      "AI-powered workflows",
    ],
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "Article" as const,
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: datePublished || "2025-01-15",
    dateModified: dateModified || new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person" as const,
      name: "Jeremie Oyabun",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization" as const,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
    },
    inLanguage: "fr",
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org" as const,
    "@type": "WebSite" as const,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["fr", "en"],
    potentialAction: {
      "@type": "SearchAction" as const,
      target: `${SITE_URL}/perspectives/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "Service" as const,
    name,
    description,
    provider: {
      "@type": "ProfessionalService" as const,
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
    },
    areaServed: [
      { "@type": "Country" as const, name: "Belgium" },
      { "@type": "Country" as const, name: "Luxembourg" },
    ],
  };
}

export function faqSchema(items: readonly FAQItem[]) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "FAQPage" as const,
    mainEntity: items.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.answer,
      },
    })),
  };
}
