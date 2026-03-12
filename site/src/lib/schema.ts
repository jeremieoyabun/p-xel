import { SITE_URL, SITE_NAME, CONTACT } from "./constants";

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
    "@type": "LocalBusiness" as const,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Liège",
      addressCountry: "BE",
    },
    priceRange: "$$",
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org" as const,
    "@type": "WebSite" as const,
    name: SITE_NAME,
    url: SITE_URL,
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
      "@type": "LocalBusiness" as const,
      name: SITE_NAME,
      url: SITE_URL,
      telephone: CONTACT.phoneRaw,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress" as const,
        addressLocality: "Liège",
        addressCountry: "BE",
      },
    },
    areaServed: {
      "@type": "Country" as const,
      name: "Belgium",
    },
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
