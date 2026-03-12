import type { CityMeta } from "./types";

export const CITIES: Record<string, CityMeta> = {
  liege: {
    slug: "liege",
    name: { fr: "Liège", en: "Liege" },
    country: { fr: "Belgique", en: "Belgium" },
    metaTitle: {
      fr: "Agence Web à Liège | P-XEL Studio",
      en: "Web Agency in Liège | P-XEL Studio",
    },
    metaDescription: {
      fr: "Studio digital basé à Liège. Sites web, applications, MVP, branding et UX/UI. Du concept au produit livré. 16+ ans d'expertise.",
      en: "Digital studio based in Liège. Websites, applications, MVPs, branding and UX/UI. From concept to shipped product. 16+ years of expertise.",
    },
  },
  bruxelles: {
    slug: "bruxelles",
    name: { fr: "Bruxelles", en: "Brussels" },
    country: { fr: "Belgique", en: "Belgium" },
    metaTitle: {
      fr: "Agence Web à Bruxelles | P-XEL Studio",
      en: "Web Agency in Brussels | P-XEL Studio",
    },
    metaDescription: {
      fr: "Studio produit digital pour Bruxelles. Sites web, applications, MVP, branding et UX/UI. Un interlocuteur senior, du concept au produit livré.",
      en: "Digital product studio for Brussels. Websites, applications, MVPs, branding and UX/UI. One senior contact, from concept to shipped product.",
    },
  },
  luxembourg: {
    slug: "luxembourg",
    name: { fr: "Luxembourg", en: "Luxembourg" },
    country: { fr: "Luxembourg", en: "Luxembourg" },
    metaTitle: {
      fr: "Agence Web au Luxembourg | P-XEL Studio",
      en: "Web Agency in Luxembourg | P-XEL Studio",
    },
    metaDescription: {
      fr: "Studio produit digital pour le Luxembourg. Sites web, applications, MVP, branding et UX/UI. Basé à Liège, on intervient au Luxembourg.",
      en: "Digital product studio for Luxembourg. Websites, applications, MVPs, branding and UX/UI. Based in Liège, serving Luxembourg.",
    },
  },
};

export const CITY_SLUGS = Object.keys(CITIES) as Array<keyof typeof CITIES>;
