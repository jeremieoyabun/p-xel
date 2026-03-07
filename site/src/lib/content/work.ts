import type { WorkProject } from "./case-studies/types";

export const workIntro = {
  label: "Work",
  heading: "Ce qu'on a construit.",
  subtext:
    "Cinq projets. Cinq preuves. Chaque produit conçu, construit et livré par notre studio.",
};

export const workProjects: WorkProject[] = [
  {
    name: "BillyCheck",
    slug: "billycheck",
    tags: ["Application Web", "SaaS", "Intelligence Artificielle", "Fintech"],
    description:
      "Application SaaS d'optimisation de factures énergétiques. Upload, analyse IA via GPT-4o Vision, comparaison de 15+ fournisseurs. De l'idée au produit en production.",
    result: "30 secondes pour trouver des économies",
    image: "/images/case-studies/billycheck-hero.webp",
    tier: "featured",
  },
  {
    name: "ChairSplit",
    slug: "chairsplit",
    tags: ["SaaS", "Plateforme Métier", "PWA", "Multi-Tenant"],
    description:
      "Plateforme SaaS de gestion pour barbershops. Revenus, commissions, équipes, fiches de paie. Multi-tenant, mobile-first, modèle d'abonnement Stripe.",
    result: "Produit SaaS complet en production",
    image: "/images/case-studies/chairsplit-hero.webp",
    tier: "featured",
  },
  {
    name: "Greenmood",
    slug: "greenmood",
    tags: ["UX/UI", "Plateforme B2B", "Configurateur produit", "Design System"],
    description:
      "Plateforme B2B pour le leader européen du design acoustique et biophilique. Architecture d'information, UX/UI et configurateurs produit.",
    image: "/images/case-studies/greenmood-hero.webp",
    tier: "featured",
  },
  {
    name: "Oyabun",
    slug: "oyabun",
    tags: ["Product Design", "Gaming", "Web3", "Telegram"],
    description:
      "Application gaming Web3 avec économie de tokens, système de clans et intégration Telegram. Un univers complet conçu, du concept au produit prêt à déployer.",
    result: "Produit gaming complet, du concept au lancement",
    image: "/images/case-studies/oyabun-hero.webp",
    tier: "secondary",
  },
  {
    name: "Arduenna Gin",
    slug: "arduenna-gin",
    tags: ["E-commerce", "Stratégie d'acquisition", "Facebook Ads"],
    description:
      "Deux sites e-commerce et 103 campagnes d'acquisition. Une stratégie qui a généré deux ans de chiffre d'affaires en deux mois.",
    result: "2 ans de CA en 2 mois",
    image: "/images/case-studies/arduenna-hero.webp",
    tier: "secondary",
  },
];

export const workCta = {
  heading: "Un projet en tête ?",
  subtext: "30 minutes pour cadrer votre projet et poser les bases.",
};
