import type { Locale } from "@/lib/i18n/config";
import type { WorkProject } from "./case-studies/types";

const content = {
  fr: {
    workIntro: {
      label: "Work",
      heading: "Ce qu'on a construit.",
      subtext:
        "Six projets. Six preuves. Chaque produit conçu, construit et livré par notre studio.",
    },
    workProjects: [
      {
        name: "Greenmood Marketing OS",
        slug: "greenmood-marketing-os",
        tags: ["Application Web", "Intelligence Artificielle", "Marketing Automation", "Multi-Marché"],
        description:
          "Plateforme marketing IA sur mesure. Calendrier éditorial, compositeur IA, publication automatisée sur 8 marchés et 6 réseaux sociaux. Propulsée par Claude AI.",
        result: "60+ posts/mois, 8 marchés, zéro erreur",
        image: "/images/case-studies/greenmood-marketing-os-hero.webp",
        tier: "featured" as const,
      },
      {
        name: "BillyCheck",
        slug: "billycheck",
        tags: ["Application Web", "SaaS", "Intelligence Artificielle", "Fintech"],
        description:
          "Application SaaS d'optimisation de factures énergétiques. Upload, analyse IA via GPT-4o Vision, comparaison de 15+ fournisseurs. De l'idée au produit en production.",
        result: "30 secondes pour trouver des économies",
        image: "/images/case-studies/billycheck-hero.webp",
        tier: "featured" as const,
      },
      {
        name: "ChairSplit",
        slug: "chairsplit",
        tags: ["SaaS", "Plateforme Métier", "PWA", "Multi-Tenant"],
        description:
          "Application web et plateforme SaaS de gestion pour barbershops. Revenus, commissions, équipes, fiches de paie. Multi-tenant, mobile-first, modèle d'abonnement Stripe.",
        result: "Produit SaaS complet en production",
        image: "/images/case-studies/chairsplit-hero.webp",
        tier: "featured" as const,
      },
      {
        name: "Greenmood",
        slug: "greenmood",
        tags: ["UX/UI", "Plateforme B2B", "Configurateur produit", "Design System"],
        description:
          "Plateforme B2B pour le leader européen du design acoustique et biophilique. Architecture d'information, UX/UI et configurateurs produit.",
        result: "UX/UI complète pour le leader européen",
        image: "/images/case-studies/greenmood-hero.webp",
        tier: "featured" as const,
      },
      {
        name: "Oyabun",
        slug: "oyabun",
        tags: ["Product Design", "Gaming", "Web3", "Telegram"],
        description:
          "Application gaming Web3 avec économie de tokens, système de clans et intégration Telegram. Un univers complet conçu, du concept au produit prêt à déployer.",
        result: "Produit gaming complet, du concept au lancement",
        image: "/images/case-studies/oyabun-hero.webp",
        tier: "secondary" as const,
      },
      {
        name: "Arduenna Gin",
        slug: "arduenna-gin",
        tags: ["E-commerce", "Stratégie d'acquisition", "Facebook Ads"],
        description:
          "Deux sites e-commerce et 103 campagnes d'acquisition. Une stratégie qui a généré deux ans de chiffre d'affaires en deux mois.",
        result: "2 ans de CA en 2 mois",
        image: "/images/case-studies/arduenna-hero.webp",
        tier: "secondary" as const,
      },
    ] satisfies WorkProject[],
    workCta: {
      heading: "Un projet en tête ?",
      subtext: "30 minutes pour cadrer votre projet et poser les bases.",
    },
  },
  en: {
    workIntro: {
      label: "Work",
      heading: "What we\u2019ve built.",
      subtext:
        "Six projects. Six proofs. Every product designed, built and shipped by our studio.",
    },
    workProjects: [
      {
        name: "Greenmood Marketing OS",
        slug: "greenmood-marketing-os",
        tags: ["Web Application", "Artificial Intelligence", "Marketing Automation", "Multi-Market"],
        description:
          "Custom AI marketing platform. Editorial calendar, AI composer, automated publishing across 8 markets and 6 social platforms. Powered by Claude AI.",
        result: "60+ posts/month, 8 markets, zero errors",
        image: "/images/case-studies/greenmood-marketing-os-hero.webp",
        tier: "featured" as const,
      },
      {
        name: "BillyCheck",
        slug: "billycheck",
        tags: ["Web Application", "SaaS", "Artificial Intelligence", "Fintech"],
        description:
          "SaaS application for energy bill optimization. Upload, AI analysis via GPT-4o Vision, comparison of 15+ providers. From idea to product in production.",
        result: "30 seconds to find savings",
        image: "/images/case-studies/billycheck-hero.webp",
        tier: "featured" as const,
      },
      {
        name: "ChairSplit",
        slug: "chairsplit",
        tags: ["SaaS", "Business Platform", "PWA", "Multi-Tenant"],
        description:
          "Web application and SaaS management platform for barbershops. Revenue, commissions, teams, payslips. Multi-tenant, mobile-first, Stripe subscription model.",
        result: "Complete SaaS product in production",
        image: "/images/case-studies/chairsplit-hero.webp",
        tier: "featured" as const,
      },
      {
        name: "Greenmood",
        slug: "greenmood",
        tags: ["UX/UI", "B2B Platform", "Product Configurator", "Design System"],
        description:
          "B2B platform for Europe\u2019s leading acoustic and biophilic design company. Information architecture, UX/UI and product configurators.",
        result: "Full UX/UI for the European market leader",
        image: "/images/case-studies/greenmood-hero.webp",
        tier: "featured" as const,
      },
      {
        name: "Oyabun",
        slug: "oyabun",
        tags: ["Product Design", "Gaming", "Web3", "Telegram"],
        description:
          "Web3 gaming application with token economy, clan system and Telegram integration. A complete universe designed from concept to deploy-ready product.",
        result: "Complete gaming product, from concept to launch",
        image: "/images/case-studies/oyabun-hero.webp",
        tier: "secondary" as const,
      },
      {
        name: "Arduenna Gin",
        slug: "arduenna-gin",
        tags: ["E-commerce", "Acquisition Strategy", "Facebook Ads"],
        description:
          "Two e-commerce sites and 103 acquisition campaigns. A strategy that generated two years of revenue in two months.",
        result: "2 years of revenue in 2 months",
        image: "/images/case-studies/arduenna-hero.webp",
        tier: "secondary" as const,
      },
    ] satisfies WorkProject[],
    workCta: {
      heading: "Got a project in mind?",
      subtext: "30 minutes to scope your project and lay the groundwork.",
    },
  },
} as const;

export function getWorkContent(locale: Locale) {
  return content[locale];
}

// Backward compatibility
export const workIntro = content.fr.workIntro;
export const workProjects = content.fr.workProjects;
export const workCta = content.fr.workCta;
