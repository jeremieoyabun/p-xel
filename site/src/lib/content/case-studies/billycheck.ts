import type { CaseStudy } from "./types";

export const billycheck: CaseStudy = {
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
};
