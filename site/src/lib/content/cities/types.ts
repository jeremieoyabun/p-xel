import type { Locale } from "@/lib/i18n/config";

export interface CityMeta {
  slug: string;
  name: Record<Locale, string>;
  country: Record<Locale, string>;
  metaTitle: Record<Locale, string>;
  metaDescription: Record<Locale, string>;
}

export interface CityServiceContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    label: string;
    heading: string;
    subtext: string;
  };
  localContext: {
    label: string;
    heading: string;
    paragraphs: string[];
  };
  whyHere: {
    label: string;
    heading: string;
    points: { title: string; body: string }[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  cta: {
    heading: string;
    subtext: string;
  };
}

export const SERVICE_SLUGS = [
  "creation-site-web",
  "application-web-mvp",
  "ux-ui-design",
  "branding-identite",
  "ai-studio",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
