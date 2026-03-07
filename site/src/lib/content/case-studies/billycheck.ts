import type { CaseStudy } from "./types";

export const billycheck: CaseStudy = {
  slug: "billycheck",
  title: "BillyCheck",
  metaTitle: "BillyCheck - Application Web IA & SaaS",
  metaDescription:
    "Conception, design et developpement complet d'une application SaaS d'optimisation de factures avec IA. Next.js, GPT-4o Vision, Stripe. Etude de cas P-XEL Studio.",
  tags: ["Application Web", "SaaS", "Intelligence Artificielle", "Fintech"],
  tagline:
    "Application SaaS d'optimisation de factures energetiques. Upload, analyse IA, comparaison fournisseurs, economies en 30 secondes.",
  keyResult: "De l'idee au produit en production",
  period: "2025",
  heroImage: "/images/case-studies/billycheck-hero.webp",
  beats: {
    context: {
      label: "Contexte",
      heading: "Un probleme reel que personne ne resolvait simplement.",
      body: "En Belgique, les factures d'energie sont opaques. Les tarifs varient par region, par type de compteur, par distributeur de reseau. Comparer les offres demande de comprendre des structures tarifaires complexes que meme les consommateurs informes ne maitrisent pas. Les simulateurs existants sont longs, techniques, et demandent des dizaines de champs a remplir manuellement. BillyCheck devait resoudre ce probleme en une action : prendre une photo de sa facture et voir immediatement combien on peut economiser.",
    },
    challenge: {
      label: "Probleme",
      heading: "Transformer un processus complexe en experience de 30 secondes.",
      body: "Le defi n'etait pas technique au sens classique. C'etait un defi de produit. Comment reduire un processus qui demande normalement 15 minutes de saisie manuelle et une connaissance du marche energetique belge a une experience de 30 secondes ? Comment extraire des donnees fiables d'une photo de facture, les confronter a un modele de tarification reel avec des variables regionales, et afficher un resultat credible ? Et comment faire tout ca sans login, sans friction, sans tutoriel ?",
    },
    thinking: {
      label: "Reflexion",
      heading: "Penser en produit, pas en fonctionnalites.",
      body: "On a commence par le resultat final : l'ecran que l'utilisateur voit apres avoir scanne sa facture. C'est cet ecran qui decide si le produit a de la valeur ou non. On a concu a rebours : d'abord l'experience de resultat, puis le flux d'upload, puis l'architecture technique pour supporter les deux. La decision cle a ete d'eliminer le login obligatoire. Un utilisateur qui decouvre le produit doit pouvoir scanner une facture et voir ses economies sans creer de compte. L'authentification intervient apres la valeur, pas avant. Ce choix a conditionne toute l'architecture technique.",
    },
    approach: {
      label: "Approche",
      heading: "Un flux en trois etapes. Zero friction.",
      body: "L'interface a ete concue autour d'un parcours lineaire : upload, analyse, resultats. Pas de dashboard complexe. Pas de menu a comprendre. L'utilisateur arrive, uploade sa facture (photo ou PDF), et l'IA fait le reste.\n\nL'extraction des donnees repose sur GPT-4o Vision. Le modele analyse la facture, identifie les champs pertinents (consommation, tarif, distributeur, type de compteur, region) et les structure pour le moteur de comparaison. On a construit un modele de tarification qui integre les specificites du marche belge : tarifs regionaux, codes GRD, structures tarifaires mono et bi-horaires, couts de distribution variables par zone.\n\nLe moteur de comparaison confronte les donnees extraites aux offres de plus de 15 fournisseurs d'energie belges. Le resultat affiche les economies potentielles par fournisseur, classees par pertinence.\n\nLe modele economique est freemium avec Stripe. Le premier scan est gratuit. Les scans suivants sont disponibles via des credits payes.",
    },
    execution: {
      label: "Execution",
      heading: "Full-stack. Du design au deploiement.",
      body: "L'application a ete construite en Next.js avec une base de donnees PostgreSQL via Prisma. L'authentification fonctionne par cookies, sans login obligatoire pour le premier scan. L'integration GPT-4o Vision gere l'extraction des donnees de facturation. Le moteur de tarification a ete construit sur mesure pour le marche energetique belge. Le paiement passe par Stripe avec un systeme de credits. L'ensemble a ete concu, designe, developpe et deploye par P-XEL. Un seul studio. De l'idee au produit en production.",
    },
    result: {
      label: "Impact",
      heading: "Un produit qui fonctionne. Pas une maquette.",
      body: "BillyCheck est en production. Les utilisateurs scannent des factures, obtiennent des comparaisons et identifient des economies. Le produit fait en 30 secondes ce qui demandait 15 minutes de recherche manuelle. L'experience est fluide, l'IA est fiable, le modele de monetisation est en place. C'est exactement ce que signifie \"on concoit, on construit, on livre.\"",
    },
  },
  deliverables: [
    "Product design complet (UX research, parcours utilisateur, UI)",
    "Application web Next.js en production",
    "Integration GPT-4o Vision pour l'extraction de factures",
    "Modele de tarification energetique belge (15+ fournisseurs)",
    "Systeme de paiement Stripe (freemium + credits)",
    "Base de donnees PostgreSQL / Prisma",
    "Deploiement et mise en production",
  ],
  stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "GPT-4o Vision", "Stripe", "Vercel"],
  cta: {
    heading: "Un produit digital a concevoir et livrer ?",
    body: "On concoit des applications web et MVP de l'idee au deploiement. Un seul studio. Zero intermediaire.",
    serviceLink: { label: "applications web et MVP", href: "/services/application-web-mvp/" },
  },
  navigation: {
    next: { slug: "chairsplit", title: "ChairSplit" },
  },
  internalLinks: [
    { label: "Applications web et MVP", href: "/services/application-web-mvp/" },
  ],
};
