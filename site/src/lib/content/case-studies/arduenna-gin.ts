import type { CaseStudy } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, CaseStudy> = {
  fr: {
    slug: "arduenna-gin",
    title: "Arduenna Gin",
    metaTitle: "Arduenna Gin - E-commerce & Stratégie d'Acquisition",
    metaDescription:
      "2 sites e-commerce, 103 campagnes Facebook Ads, 2 ans de CA en 2 mois. Comment P-XEL a construit la machine de vente digitale d'Arduenna Gin.",
    tags: ["E-commerce", "Stratégie d'acquisition", "Facebook Ads", "Marketing digital"],
    tagline:
      "Deux sites e-commerce et une stratégie d'acquisition complète pour une marque de gin artisanal belge.",
    keyResult: "2 ans de CA en 2 mois",
    period: "2022",
    heroImage: "/images/case-studies/arduenna-hero.webp",
    beats: {
      context: {
        label: "Contexte",
        heading: "Un produit artisanal sans présence digitale.",
        body: "Arduenna Gin est une marque de gin artisanal basée en Belgique. Produit en petites séries avec des botaniques locales, le gin se positionne sur le segment premium du marché des spiritueux. La marque avait un produit solide et une identité claire, mais aucune présence digitale structurée. Pas de vente en ligne. Pas de stratégie d'acquisition. Pas de canal de revenus en dehors du réseau physique.",
      },
      challenge: {
        label: "Problème",
        heading: "Passer du physique au digital avec un objectif de rentabilité rapide.",
        body: "Arduenna Gin devait passer d'une distribution exclusivement physique à une machine de vente en ligne. Le défi n'était pas seulement de créer un site e-commerce. Il fallait construire un système complet : une boutique qui convertit, une stratégie publicitaire qui amène du trafic qualifié, et une intégration entre les deux qui transforme des visiteurs en acheteurs. Le tout avec un objectif de rentabilité rapide, pas un horizon à 12 mois.",
      },
      thinking: {
        label: "Réflexion",
        heading: "Un système d'acquisition, pas un projet web classique.",
        body: "On a abordé le projet comme un système d'acquisition, pas comme un projet web classique. Un site e-commerce seul ne génère rien. Des campagnes publicitaires sans une boutique optimisée pour la conversion brûlent du budget. Notre stratégie reposait sur l'intégration complète : le site e-commerce et les campagnes Facebook Ads conçus comme un seul dispositif. Chaque page produit, chaque creative publicitaire, chaque audience ciblée faisait partie du même entonnoir. Le design servait la conversion. Les campagnes servaient le trafic. Les deux fonctionnaient ensemble.",
        image: "/images/case-studies/P-xel_work_Arduenna-01.webp",
      },
      approach: {
        label: "Approche",
        heading: "Deux boutiques, 103 campagnes, un seul objectif.",
        body: "On a construit deux sites e-commerce distincts pour couvrir les différents segments de marché d'Arduenna Gin. Chaque boutique a été conçue avec un objectif de conversion précis : navigation simplifiée, fiches produit orientées vers l'achat, tunnel de commande sans friction. Le design reflétait le positionnement premium de la marque, des visuels atmosphériques au choix typographique, tout en restant au service de la performance commerciale.\n\nCôté acquisition, on a structuré 103 campagnes Facebook Ads avec une approche méthodique. Segmentation fine des audiences : géographique, par centres d'intérêt, par comportement d'achat. Tests A/B systématiques sur les creatives, les accroches et les formats. Chaque campagne était mesurée, ajustée et optimisée en continu.\n\nL'intégration entre les sites et les campagnes était totale. Les pages d'atterrissage étaient alignées avec les promesses publicitaires. Le tracking était configuré pour mesurer chaque conversion, du clic à l'achat.",
        image: "/images/case-studies/P-xel_work_Arduenna-02.webp",
      },
      execution: {
        label: "Exécution",
        heading: "Déploiement rapide, optimisation continue.",
        body: "Deux sites e-commerce livrés, configurés et mis en production. 103 campagnes Facebook Ads créées, lancées et optimisées. L'ensemble du dispositif, sites et campagnes, a été déployé et opérationnel rapidement pour maximiser la fenêtre de vente. On a géré l'exécution de bout en bout : conception, développement, configuration des campagnes, suivi des performances et ajustements en temps réel.",
      },
      result: {
        label: "Impact",
        heading: "2 ans de chiffre d'affaires en 2 mois.",
        body: "Ce n'est pas une projection. C'est le revenu réel généré par le dispositif e-commerce et les campagnes d'acquisition. Le canal de vente en ligne était rentable dès le premier mois. Arduenna Gin est passé d'une présence digitale inexistante à un système de vente qui a surpassé deux années de distribution physique en huit semaines.",
      },
    },
    deliverables: [
      "Conception et développement de deux sites e-commerce",
      "Architecture produit et tunnel de conversion",
      "Design e-commerce premium aligné sur l'identité de marque",
      "Stratégie d'acquisition digitale complète",
      "103 campagnes Facebook Ads (création, ciblage, optimisation)",
      "Segmentation d'audiences et tests A/B",
      "Configuration du tracking et suivi des conversions",
      "Optimisation continue des performances publicitaires",
    ],
    cta: {
      heading: "Un projet e-commerce ou une stratégie d'acquisition à lancer ?",
      body: "On conçoit des sites web et des plateformes qui convertissent. Parlons de votre projet.",
      serviceLink: { label: "sites web et plateformes", href: "/services/creation-site-web/" },
    },
    navigation: {
      next: { slug: "greenmood-marketing-os", title: "Greenmood Marketing OS" },
    },
    internalLinks: [
      { label: "Création de sites web", href: "/services/creation-site-web/" },
    ],
  },

  en: {
    slug: "arduenna-gin",
    title: "Arduenna Gin",
    metaTitle: "Arduenna Gin - E-commerce & Acquisition Strategy",
    metaDescription:
      "2 e-commerce sites, 103 Facebook Ads campaigns, 2 years of revenue in 2 months. How P-XEL built Arduenna Gin's digital sales machine.",
    tags: ["E-commerce", "Acquisition Strategy", "Facebook Ads", "Digital Marketing"],
    tagline:
      "Two e-commerce sites and a complete acquisition strategy for a Belgian artisanal gin brand.",
    keyResult: "2 years of revenue in 2 months",
    period: "2022",
    heroImage: "/images/case-studies/arduenna-hero.webp",
    beats: {
      context: {
        label: "Context",
        heading: "An artisanal product with no digital presence.",
        body: "Arduenna Gin is a Belgian artisanal gin brand. Produced in small batches with local botanicals, the gin is positioned in the premium segment of the spirits market. The brand had a solid product and a clear identity, but no structured digital presence. No online sales. No acquisition strategy. No revenue channel beyond the physical network.",
      },
      challenge: {
        label: "Challenge",
        heading: "Going from physical to digital with a fast profitability target.",
        body: "Arduenna Gin needed to go from exclusively physical distribution to an online sales machine. The challenge wasn't just to create an e-commerce site. It required building a complete system: a store that converts, an advertising strategy that brings qualified traffic, and an integration between the two that turns visitors into buyers. All with a fast profitability target, not a 12-month horizon.",
      },
      thinking: {
        label: "Thinking",
        heading: "An acquisition system, not a standard web project.",
        body: "We approached the project as an acquisition system, not a standard web project. An e-commerce site alone generates nothing. Ad campaigns without a conversion-optimized store burn budget. Our strategy rested on complete integration: the e-commerce site and Facebook Ads campaigns designed as a single device. Every product page, every ad creative, every targeted audience was part of the same funnel. Design served conversion. Campaigns served traffic. Both worked together.",
        image: "/images/case-studies/P-xel_work_Arduenna-01.webp",
      },
      approach: {
        label: "Approach",
        heading: "Two stores, 103 campaigns, one objective.",
        body: "We built two distinct e-commerce sites to cover Arduenna Gin's different market segments. Each store was designed with a precise conversion objective: simplified navigation, purchase-oriented product pages, frictionless checkout flow. The design reflected the brand's premium positioning, from atmospheric visuals to typographic choices, while staying in service of commercial performance.\n\nOn the acquisition side, we structured 103 Facebook Ads campaigns with a methodical approach. Granular audience segmentation: geographic, by interests, by purchase behavior. Systematic A/B testing on creatives, hooks and formats. Every campaign was measured, adjusted and continuously optimized.\n\nThe integration between sites and campaigns was total. Landing pages were aligned with ad promises. Tracking was configured to measure every conversion, from click to purchase.",
        image: "/images/case-studies/P-xel_work_Arduenna-02.webp",
      },
      execution: {
        label: "Execution",
        heading: "Rapid deployment, continuous optimization.",
        body: "Two e-commerce sites delivered, configured and launched. 103 Facebook Ads campaigns created, launched and optimized. The entire device, sites and campaigns, was deployed and operational quickly to maximize the sales window. We managed the execution end to end: design, development, campaign setup, performance tracking and real-time adjustments.",
      },
      result: {
        label: "Impact",
        heading: "2 years of revenue in 2 months.",
        body: "This is not a projection. It's the actual revenue generated by the e-commerce device and acquisition campaigns. The online sales channel was profitable from month one. Arduenna Gin went from a nonexistent digital presence to a sales system that surpassed two years of physical distribution in eight weeks.",
      },
    },
    deliverables: [
      "Design and development of two e-commerce sites",
      "Product architecture and conversion funnel",
      "Premium e-commerce design aligned with brand identity",
      "Complete digital acquisition strategy",
      "103 Facebook Ads campaigns (creation, targeting, optimization)",
      "Audience segmentation and A/B testing",
      "Tracking setup and conversion monitoring",
      "Continuous ad performance optimization",
    ],
    cta: {
      heading: "An e-commerce project or acquisition strategy to launch?",
      body: "We design websites and platforms that convert. Let's talk about your project.",
      serviceLink: { label: "websites and platforms", href: "/en/services/creation-site-web/" },
    },
    navigation: {
      next: { slug: "greenmood-marketing-os", title: "Greenmood Marketing OS" },
    },
    internalLinks: [
      { label: "Website creation", href: "/en/services/creation-site-web/" },
    ],
  },
} as const;

export function getArduennaGinContent(locale: Locale) {
  return content[locale];
}

// Re-export default for backward compatibility
export const arduennaGin = content.fr;
