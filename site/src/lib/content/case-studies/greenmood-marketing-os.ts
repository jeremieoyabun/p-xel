import type { CaseStudy } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, CaseStudy> = {
  fr: {
    slug: "greenmood-marketing-os",
    title: "Marketing OS",
    metaTitle:
      "Marketing OS — Plateforme Marketing IA | P-XEL",
    metaDescription:
      "Plateforme marketing IA sur mesure. Publication automatisée, gestion multi-marchés, workflows éditoriaux intelligents. 8 marchés, 6 plateformes, un seul dashboard.",
    tags: [
      "Application Web",
      "Intelligence Artificielle",
      "Marketing Automation",
      "Multi-Marché",
    ],
    tagline:
      "OS marketing propulsé par l'IA. Une plateforme qui orchestre la création de contenu, les workflows d'approbation et la publication automatisée sur 8 marchés et 6 réseaux sociaux.",
    keyResult: "60+ posts/mois gérés depuis un seul dashboard",
    period: "2026",
    heroImage: "/images/case-studies/greenmood-marketing-os-hero.webp",
    beats: {
      context: {
        label: "Contexte",
        heading:
          "Une marque premium, 8 marchés, zéro outil adapté.",
        body: "Greenmood conçoit et fabrique des murs végétaux stabilisés, des panneaux acoustiques en liège et des produits d'architecture biophilique vendus dans 8 marchés (Belgique, USA, UK, France, Émirats Arabes Unis, Pologne, Corée du Sud, Allemagne).\n\nLeur équipe marketing gérait le contenu manuellement sur plusieurs comptes Instagram, pages LinkedIn et marchés régionaux — chacun avec sa propre langue, son ton et ses règles de conformité. Les données produit (indices d'absorption acoustique NRC, certifications incendie, crédits designers) devaient être exactes sur chaque publication. Une seule erreur pouvait compromettre la crédibilité auprès des architectes et prescripteurs.",
        image: "/images/case-studies/gmos-context.webp",
      },
      challenge: {
        label: "Le défi",
        heading:
          "Du contenu dispersé, des erreurs inévitables, aucun contrôle.",
        body: "Le contenu était dispersé entre tableurs et messages. Aucun workflow d'approbation : les posts étaient publiés sans vérification factuelle. La confusion des fuseaux horaires sur 8 marchés causait des publications manquées. Aucune traçabilité sur le contenu généré par IA. Et la publication se faisait manuellement, plateforme par plateforme.\n\nPour une marque B2B premium qui s'adresse à des architectes et prescripteurs exigeants, ce niveau de risque n'était plus acceptable. Greenmood avait besoin d'un système, pas d'un outil de plus.",
      },
      thinking: {
        label: "Réflexion produit",
        heading:
          "Un OS marketing. Pas un wrapper autour d'outils existants.",
        body: "On n'a pas cherché à connecter Hootsuite avec ChatGPT. On a conçu un système d'exploitation marketing complet, taillé sur mesure pour les flux de Greenmood.\n\nLe principe fondateur : l'IA ne doit jamais inventer de faits. Chaque contenu généré est ancré dans une base de connaissances vérifiées (spécifications produit, guidelines de marque, règles par marché). La publication est automatisée mais contrôlée — un pipeline d'approbation strict empêche tout raccourci.\n\nOn a pensé multi-marché dès le premier jour : fuseaux horaires, langues, tons, réglementations locales. Pas un ajout après coup.",
      },
      approach: {
        label: "Approche",
        heading:
          "Six modules. Un seul système intégré.",
        body: "**Calendrier éditorial** — Vue mois, semaine et agenda. Chaque marché et plateforme identifié par couleur. Drag-and-drop, création par lots multi-marchés, publication intelligente par fuseau horaire.\n\n**Compositeur IA** — Claude AI génère du contenu ancré dans la base de connaissances Greenmood : specs produit réelles, guidelines de ton, règles par marché. L'IA ne fabrique jamais de données. Chaque post passe un fact-checking avant planification.\n\n**Pipeline d'approbation** — Machine à 6 états : Brouillon → Généré par IA → Vérifié → Approuvé marque → Prêt à planifier → Planifié → Publié. Chaque transition est loguée. Aucun raccourci possible.\n\n**Publication automatisée** — Intégration directe Instagram Graph API et LinkedIn API. Images uniques, carousels (jusqu'à 10 slides), Stories et Reels. Premiers commentaires auto-postés pour la stratégie de liens LinkedIn.\n\n**Intelligence marché** — Moteur d'intelligence compétitive propulsé par IA. Monitoring des tendances, mouvements concurrents et lacunes de contenu. Recommandations d'opportunités scorées par pertinence.\n\n**Multi-marché, multi-langue** — 8 marchés avec ton localisé. Français pour la France, polonais pour la Pologne, coréen pour la Corée du Sud. L'interface elle-même est trilingue (EN/FR/PL).",
        image: "/images/case-studies/gmos-approach.webp",
      },
      execution: {
        label: "Exécution",
        heading:
          "Full-stack. Du design au déploiement en production.",
        body: "L'application a été construite avec Next.js 16 (App Router) et React 19 en TypeScript strict. La base de données tourne sur Neon PostgreSQL avec Prisma ORM. L'IA utilise Anthropic Claude : Sonnet pour la génération de contenu, Haiku pour la validation et le fact-checking.\n\nLes médias passent par Cloudinary pour le CDN et l'optimisation d'images. L'authentification est session-based avec protection middleware. Le tout est déployé sur Vercel (Edge + Serverless) avec Tailwind CSS v4 pour le styling.\n\nLe système gère les rôles (Opérateur, Coordinateur, Lecteur), les guardrails de marque (l'IA ne fabrique jamais de specs, crédite toujours les designers) et la publication timezone-aware (les posts US sont publiés en heure de New York, les posts Émirats en heure de Dubaï).",
        image: "/images/case-studies/gmos-execution.webp",
      },
      result: {
        label: "Résultat",
        heading:
          "Un OS marketing en production. Pas un prototype.",
        body: "60+ posts par mois gérés sur tous les marchés depuis une seule interface. Zéro affirmation fabriquée : chaque output IA est ancré dans la base de connaissances. La publication automatisée élimine le posting manuel plateforme par plateforme.\n\nTraçabilité complète sur chaque contenu, du brouillon à la publication. Le taux d'erreur est passé de 2,8% à 0% après durcissement en production. L'équipe marketing de Greenmood gère désormais 8 marchés avec la même charge de travail qu'un seul auparavant.",
        image: "/images/case-studies/gmos-result.webp",
      },
    },
    deliverables: [
      "Plateforme marketing complète (Next.js 16, TypeScript, PostgreSQL)",
      "Compositeur IA avec génération ancrée dans la base de connaissances",
      "Calendrier éditorial multi-marchés avec scheduling timezone-aware",
      "Pipeline d'approbation à 6 états avec audit trail complet",
      "Publication automatisée Instagram Graph API + LinkedIn API",
      "Support carousels, Stories, Reels et premiers commentaires",
      "Moteur d'intelligence compétitive propulsé par IA",
      "Interface trilingue (EN/FR/PL) avec gestion de rôles",
      "Intégration Cloudinary pour CDN et optimisation média",
      "Déploiement Vercel (Edge + Serverless) en production",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Claude AI",
      "Cloudinary",
      "Vercel",
      "Tailwind CSS",
    ],
    cta: {
      heading: "Une plateforme IA sur mesure à concevoir ?",
      body: "On conçoit et livre des produits IA complets. Du dashboard au workflow automatisé, un seul studio du brief au déploiement.",
      serviceLink: {
        label: "AI Studio →",
        href: "/services/ai-studio/",
      },
    },
    navigation: {
      next: { slug: "billycheck", title: "BillyCheck" },
    },
    internalLinks: [
      { label: "AI Studio", href: "/services/ai-studio/" },
      { label: "Applications web et MVP", href: "/services/application-web-mvp/" },
      { label: "Greenmood (UX/UI)", href: "/work/greenmood/" },
    ],
  },

  en: {
    slug: "greenmood-marketing-os",
    title: "Marketing OS",
    metaTitle:
      "Marketing OS — AI-Powered Marketing Platform | P-XEL",
    metaDescription:
      "Custom AI marketing operating system. Automated publishing, multi-market content management, and intelligent editorial workflows. 8 markets, 6 platforms, one dashboard.",
    tags: [
      "Web Application",
      "Artificial Intelligence",
      "Marketing Automation",
      "Multi-Market",
    ],
    tagline:
      "AI-powered marketing OS. A production-grade platform that orchestrates content creation, approval workflows, and automated publishing across 8 markets and 6 social platforms.",
    keyResult: "60+ posts/month managed from a single dashboard",
    period: "2026",
    heroImage: "/images/case-studies/greenmood-marketing-os-hero.webp",
    beats: {
      context: {
        label: "Context",
        heading:
          "A premium brand, 8 markets, zero adapted tooling.",
        body: "Greenmood designs and manufactures preserved moss walls, cork acoustic panels, and biophilic architectural products — sold in 8 markets worldwide (Belgium, USA, UK, France, UAE, Poland, South Korea, Germany).\n\nTheir marketing team managed content manually across multiple Instagram accounts, LinkedIn pages, and regional markets — each with its own language, tone, and compliance rules. Product facts (NRC acoustic ratings, fire certifications, designer credits) had to be accurate across every post. One wrong claim could damage credibility with architects and specifiers.",
        image: "/images/case-studies/gmos-context.webp",
      },
      challenge: {
        label: "The challenge",
        heading:
          "Scattered content, inevitable errors, no control.",
        body: "Content was scattered across spreadsheets and DMs. No approval workflow — posts went live without fact-checking. Timezone confusion across 8 markets caused missed schedules. No audit trail for AI-generated content. Manual publishing on each platform, one by one.\n\nFor a premium B2B brand addressing demanding architects and specifiers, this level of risk was no longer acceptable. Greenmood needed a system, not another tool.",
      },
      thinking: {
        label: "Product thinking",
        heading:
          "A marketing OS. Not a wrapper around existing tools.",
        body: "We didn\u2019t try to connect Hootsuite with ChatGPT. We designed a complete marketing operating system, custom-built for Greenmood\u2019s workflows.\n\nThe founding principle: AI must never fabricate facts. Every generated piece of content is grounded in a verified knowledge base (product specifications, brand guidelines, market-specific rules). Publishing is automated but controlled — a strict approval pipeline prevents any shortcuts.\n\nWe designed for multi-market from day one: timezones, languages, tones, local regulations. Not as an afterthought.",
      },
      approach: {
        label: "Approach",
        heading:
          "Six modules. One integrated system.",
        body: "**Editorial Calendar** — Month, week and agenda views. Every market and platform color-coded. Drag-and-drop scheduling, multi-market batch creation, and timezone-aware publishing.\n\n**AI Content Composer** — Claude AI generates content grounded in Greenmood\u2019s Knowledge Base: real product specs, brand tone guidelines, and market-specific rules. The AI never invents facts. Every generated post passes through fact-checking before scheduling.\n\n**Approval Pipeline** — A strict 6-step state machine: Draft \u2192 AI Generated \u2192 Fact-Checked \u2192 Brand Approved \u2192 Ready to Schedule \u2192 Scheduled \u2192 Published. Every transition is logged. No shortcuts.\n\n**Automated Publishing** — Direct integration with Instagram Graph API and LinkedIn API. Single images, carousels (up to 10 slides), Stories, and Reels. First comments auto-posted for LinkedIn link strategy.\n\n**Market Intelligence** — An AI-powered competitive intelligence engine that monitors industry trends, competitor moves, and content gaps. Recommends actionable content opportunities scored by relevance.\n\n**Multi-Market, Multi-Language** — 8 markets, each with localized tone. French for France, Polish for Poland, Korean for South Korea. The platform UI itself is trilingual (EN/FR/PL).",
        image: "/images/case-studies/gmos-approach.webp",
      },
      execution: {
        label: "Execution",
        heading:
          "Full-stack. From design to production deployment.",
        body: "The application was built with Next.js 16 (App Router) and React 19 in strict TypeScript. The database runs on Neon PostgreSQL with Prisma ORM. AI uses Anthropic Claude: Sonnet for content generation, Haiku for validation and fact-checking.\n\nMedia goes through Cloudinary for CDN and image optimization. Authentication is session-based with middleware protection. Everything is deployed on Vercel (Edge + Serverless) with Tailwind CSS v4 for styling.\n\nThe system manages roles (Operator, Coordinator, Viewer), brand guardrails (AI never fabricates specs, always credits designers), and timezone-aware publishing (US posts publish in New York time, UAE posts in Dubai time).",
        image: "/images/case-studies/gmos-execution.webp",
      },
      result: {
        label: "Result",
        heading:
          "A marketing OS in production. Not a prototype.",
        body: "60+ posts per month managed across all markets from a single interface. Zero fabricated claims — every AI output grounded in the Knowledge Base. Automated publishing eliminates manual platform-by-platform posting.\n\nFull audit trail on every piece of content from draft to publication. Error rate dropped from 2.8% to 0% after production hardening. Greenmood\u2019s marketing team now manages 8 markets with the same workload as one before.",
        image: "/images/case-studies/gmos-result.webp",
      },
    },
    deliverables: [
      "Complete marketing platform (Next.js 16, TypeScript, PostgreSQL)",
      "AI content composer with knowledge-base-grounded generation",
      "Multi-market editorial calendar with timezone-aware scheduling",
      "6-state approval pipeline with full audit trail",
      "Automated publishing via Instagram Graph API + LinkedIn API",
      "Carousel, Stories, Reels and first comment support",
      "AI-powered competitive intelligence engine",
      "Trilingual interface (EN/FR/PL) with role-based access",
      "Cloudinary integration for CDN and media optimization",
      "Vercel deployment (Edge + Serverless) in production",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Claude AI",
      "Cloudinary",
      "Vercel",
      "Tailwind CSS",
    ],
    cta: {
      heading: "A custom AI platform to build?",
      body: "We design and ship complete AI products. From dashboard to automated workflow, one studio from brief to deployment.",
      serviceLink: {
        label: "AI Studio \u2192",
        href: "/en/services/ai-studio/",
      },
    },
    navigation: {
      next: { slug: "billycheck", title: "BillyCheck" },
    },
    internalLinks: [
      { label: "AI Studio", href: "/en/services/ai-studio/" },
      { label: "Web apps & MVPs", href: "/en/services/application-web-mvp/" },
      { label: "Greenmood (UX/UI)", href: "/en/work/greenmood/" },
    ],
  },
};

export function getGreenmoodMarketingOsContent(locale: Locale): CaseStudy {
  return content[locale];
}

export const greenmoodMarketingOs = content.fr;
