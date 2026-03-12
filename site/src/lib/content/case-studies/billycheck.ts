import type { CaseStudy } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, CaseStudy> = {
  fr: {
    slug: "billycheck",
    title: "BillyCheck",
    metaTitle: "BillyCheck - Application Web IA & SaaS",
    metaDescription:
      "Conception, design et développement complet d'une application SaaS d'optimisation de factures avec IA. Next.js, GPT-4o Vision, Stripe. Étude de cas P-XEL Studio.",
    tags: ["Application Web", "SaaS", "Intelligence Artificielle", "Fintech"],
    tagline:
      "Application SaaS d'optimisation de factures énergétiques. Upload, analyse IA, comparaison fournisseurs, économies en 30 secondes.",
    keyResult: "De l'idée au produit en production",
    period: "2025",
    heroImage: "/images/case-studies/billycheck-hero.webp",
    beats: {
      context: {
        label: "Contexte",
        heading: "Un problème réel que personne ne résolvait simplement.",
        body: "En Belgique, les factures d'énergie sont opaques. Les tarifs varient par région, par type de compteur, par distributeur de réseau. Comparer les offres demande de comprendre des structures tarifaires complexes que même les consommateurs informés ne maîtrisent pas. Les simulateurs existants sont longs, techniques, et demandent des dizaines de champs à remplir manuellement. BillyCheck devait résoudre ce problème en une action : prendre une photo de sa facture et voir immédiatement combien on peut économiser.",
      },
      challenge: {
        label: "Problème",
        heading: "Transformer un processus complexe en expérience de 30 secondes.",
        body: "Le défi n'était pas technique au sens classique. C'était un défi de produit. Comment réduire un processus qui demande normalement 15 minutes de saisie manuelle et une connaissance du marché énergétique belge à une expérience de 30 secondes ? Comment extraire des données fiables d'une photo de facture, les confronter à un modèle de tarification réel avec des variables régionales, et afficher un résultat crédible ? Et comment faire tout ça sans login, sans friction, sans tutoriel ?",
      },
      thinking: {
        label: "Réflexion",
        heading: "Penser en produit, pas en fonctionnalités.",
        body: "On a commencé par le résultat final : l'écran que l'utilisateur voit après avoir scanné sa facture. C'est cet écran qui décide si le produit a de la valeur ou non. On a conçu à rebours : d'abord l'expérience de résultat, puis le flux d'upload, puis l'architecture technique pour supporter les deux. La décision clé a été d'éliminer le login obligatoire. Un utilisateur qui découvre le produit doit pouvoir scanner une facture et voir ses économies sans créer de compte. L'authentification intervient après la valeur, pas avant. Ce choix a conditionné toute l'architecture technique.",
      },
      approach: {
        label: "Approche",
        heading: "Un flux en trois étapes. Zéro friction.",
        body: "L'interface a été conçue autour d'un parcours linéaire : upload, analyse, résultats. Pas de dashboard complexe. Pas de menu à comprendre. L'utilisateur arrive, uploade sa facture (photo ou PDF), et l'IA fait le reste.\n\nL'extraction des données repose sur GPT-4o Vision. Le modèle analyse la facture, identifie les champs pertinents (consommation, tarif, distributeur, type de compteur, région) et les structure pour le moteur de comparaison. On a construit un modèle de tarification qui intègre les spécificités du marché belge : tarifs régionaux, codes GRD, structures tarifaires mono et bi-horaires, coûts de distribution variables par zone.\n\nLe moteur de comparaison confronte les données extraites aux offres de plus de 15 fournisseurs d'énergie belges. Le résultat affiche les économies potentielles par fournisseur, classées par pertinence.\n\nLe modèle économique est freemium avec Stripe. Le premier scan est gratuit. Les scans suivants sont disponibles via des crédits payés.",
      },
      execution: {
        label: "Exécution",
        heading: "Full-stack. Du design au déploiement.",
        body: "L'application a été construite en Next.js avec une base de données PostgreSQL via Prisma. L'authentification fonctionne par cookies, sans login obligatoire pour le premier scan. L'intégration GPT-4o Vision gère l'extraction des données de facturation. Le moteur de tarification a été construit sur mesure pour le marché énergétique belge. Le paiement passe par Stripe avec un système de crédits. L'ensemble a été conçu, designé, développé et déployé par P-XEL. Un seul studio. De l'idée au produit en production.",
      },
      result: {
        label: "Impact",
        heading: "Un produit qui fonctionne. Pas une maquette.",
        body: "BillyCheck est en production. Les utilisateurs scannent des factures, obtiennent des comparaisons et identifient des économies. Le produit fait en 30 secondes ce qui demandait 15 minutes de recherche manuelle. L'expérience est fluide, l'IA est fiable, le modèle de monétisation est en place. C'est exactement ce que signifie \"on conçoit, on construit, on livre.\"",
      },
    },
    deliverables: [
      "Product design complet (UX research, parcours utilisateur, UI)",
      "Application web Next.js en production",
      "Intégration GPT-4o Vision pour l'extraction de factures",
      "Modèle de tarification énergétique belge (15+ fournisseurs)",
      "Système de paiement Stripe (freemium + crédits)",
      "Base de données PostgreSQL / Prisma",
      "Déploiement et mise en production",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "GPT-4o Vision", "Stripe", "Vercel"],
    cta: {
      heading: "Un produit digital à concevoir et livrer ?",
      body: "On conçoit des applications web et MVP de l'idée au déploiement. Un seul studio. Zéro intermédiaire.",
      serviceLink: { label: "applications web et MVP", href: "/services/application-web-mvp/" },
    },
    navigation: {
      next: { slug: "chairsplit", title: "ChairSplit" },
    },
    internalLinks: [
      { label: "Applications web et MVP", href: "/services/application-web-mvp/" },
    ],
  },

  en: {
    slug: "billycheck",
    title: "BillyCheck",
    metaTitle: "BillyCheck - AI Web Application & SaaS",
    metaDescription:
      "Full design and development of a SaaS application for bill optimization with AI. Next.js, GPT-4o Vision, Stripe. P-XEL Studio case study.",
    tags: ["Web Application", "SaaS", "Artificial Intelligence", "Fintech"],
    tagline:
      "SaaS application for energy bill optimization. Upload, AI analysis, provider comparison, savings in 30 seconds.",
    keyResult: "From idea to product in production",
    period: "2025",
    heroImage: "/images/case-studies/billycheck-hero.webp",
    beats: {
      context: {
        label: "Context",
        heading: "A real problem nobody was solving simply.",
        body: "In Belgium, energy bills are opaque. Rates vary by region, meter type and distribution network operator. Comparing offers requires understanding complex rate structures that even informed consumers don't master. Existing simulators are slow, technical, and require filling in dozens of fields manually. BillyCheck had to solve this problem in one action: take a photo of your bill and immediately see how much you can save.",
      },
      challenge: {
        label: "Challenge",
        heading: "Turning a complex process into a 30-second experience.",
        body: "The challenge wasn't technical in the classic sense. It was a product challenge. How do you reduce a process that normally takes 15 minutes of manual input and knowledge of the Belgian energy market to a 30-second experience? How do you extract reliable data from a bill photo, match it against a real pricing model with regional variables, and display a credible result? And how do you do all of this without login, without friction, without a tutorial?",
      },
      thinking: {
        label: "Thinking",
        heading: "Thinking in product, not in features.",
        body: "We started with the end result: the screen the user sees after scanning their bill. That screen decides whether the product has value or not. We designed backwards: first the results experience, then the upload flow, then the technical architecture to support both. The key decision was eliminating mandatory login. A user discovering the product should be able to scan a bill and see their savings without creating an account. Authentication comes after value, not before. This choice conditioned the entire technical architecture.",
      },
      approach: {
        label: "Approach",
        heading: "A three-step flow. Zero friction.",
        body: "The interface was designed around a linear journey: upload, analysis, results. No complex dashboard. No menu to figure out. The user arrives, uploads their bill (photo or PDF), and AI does the rest.\n\nData extraction relies on GPT-4o Vision. The model analyzes the bill, identifies relevant fields (consumption, rate, distributor, meter type, region) and structures them for the comparison engine. We built a pricing model that integrates Belgian market specifics: regional rates, GRD codes, single and dual-rate structures, variable distribution costs by zone.\n\nThe comparison engine matches extracted data against offers from 15+ Belgian energy providers. The result displays potential savings by provider, ranked by relevance.\n\nThe business model is freemium with Stripe. The first scan is free. Subsequent scans are available via paid credits.",
      },
      execution: {
        label: "Execution",
        heading: "Full-stack. From design to deployment.",
        body: "The application was built in Next.js with a PostgreSQL database via Prisma. Authentication works via cookies, with no mandatory login for the first scan. GPT-4o Vision integration handles billing data extraction. The pricing engine was custom-built for the Belgian energy market. Payment runs through Stripe with a credit system. The entire product was designed, built, developed and deployed by P-XEL. One studio. From idea to product in production.",
      },
      result: {
        label: "Impact",
        heading: "A product that works. Not a mockup.",
        body: "BillyCheck is in production. Users scan bills, get comparisons and identify savings. The product does in 30 seconds what used to take 15 minutes of manual research. The experience is smooth, the AI is reliable, the monetization model is in place. This is exactly what \"we design, we build, we ship\" means.",
      },
    },
    deliverables: [
      "Complete product design (UX research, user journeys, UI)",
      "Next.js web application in production",
      "GPT-4o Vision integration for bill extraction",
      "Belgian energy pricing model (15+ providers)",
      "Stripe payment system (freemium + credits)",
      "PostgreSQL / Prisma database",
      "Deployment and production launch",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "GPT-4o Vision", "Stripe", "Vercel"],
    cta: {
      heading: "A digital product to design and ship?",
      body: "We design web applications and MVPs from idea to deployment. One studio. Zero middlemen.",
      serviceLink: { label: "web applications and MVPs", href: "/en/services/application-web-mvp/" },
    },
    navigation: {
      next: { slug: "chairsplit", title: "ChairSplit" },
    },
    internalLinks: [
      { label: "Web applications and MVPs", href: "/en/services/application-web-mvp/" },
    ],
  },
} as const;

export function getBillycheckContent(locale: Locale) {
  return content[locale];
}

// Re-export default for backward compatibility
export const billycheck = content.fr;
