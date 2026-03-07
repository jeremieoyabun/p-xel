import type { WorkProject } from "./case-studies/types";

export const workIntro = {
  label: "Work",
  heading: "Ce qu'on a construit.",
  subtext:
    "Cinq projets. Cinq preuves. Chaque produit concu, construit et livre par notre studio.",
};

export const workProjects: WorkProject[] = [
  {
    name: "BillyCheck",
    slug: "billycheck",
    tags: ["Application Web", "SaaS", "Intelligence Artificielle", "Fintech"],
    description:
      "Application SaaS d'optimisation de factures energetiques. Upload, analyse IA via GPT-4o Vision, comparaison de 15+ fournisseurs. De l'idee au produit en production.",
    result: "30 secondes pour trouver des economies",
    image: "/images/case-studies/billycheck-hero.webp",
    tier: "featured",
  },
  {
    name: "ChairSplit",
    slug: "chairsplit",
    tags: ["SaaS", "Plateforme Metier", "PWA", "Multi-Tenant"],
    description:
      "Plateforme SaaS de gestion pour barbershops. Revenus, commissions, equipes, fiches de paie. Multi-tenant, mobile-first, modele d'abonnement Stripe.",
    result: "Produit SaaS complet en production",
    image: "/images/case-studies/chairsplit-hero.webp",
    tier: "featured",
  },
  {
    name: "Greenmood",
    slug: "greenmood",
    tags: ["UX/UI", "Plateforme B2B", "Configurateur produit", "Design System"],
    description:
      "Plateforme B2B pour le leader europeen du design acoustique et biophilique. Architecture d'information, UX/UI et configurateurs produit.",
    image: "/images/case-studies/greenmood-hero.webp",
    tier: "featured",
  },
  {
    name: "Oyabun",
    slug: "oyabun",
    tags: ["Product Design", "Gaming", "Web3", "Telegram"],
    description:
      "Application gaming Web3 avec economie de tokens, systeme de clans et integration Telegram. Un univers complet concu, du concept au produit pret a deployer.",
    result: "Produit gaming complet, du concept au lancement",
    image: "/images/case-studies/oyabun-hero.webp",
    tier: "secondary",
  },
  {
    name: "Arduenna Gin",
    slug: "arduenna-gin",
    tags: ["E-commerce", "Strategie d'acquisition", "Facebook Ads"],
    description:
      "Deux sites e-commerce et 103 campagnes d'acquisition. Une strategie qui a genere deux ans de chiffre d'affaires en deux mois.",
    result: "2 ans de CA en 2 mois",
    image: "/images/case-studies/arduenna-hero.webp",
    tier: "secondary",
  },
];

export const workCta = {
  heading: "Un projet en tete ?",
  subtext: "On vous dit en 15 minutes si on est le bon partenaire.",
};
