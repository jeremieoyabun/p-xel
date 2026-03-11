export const hero = {
  label: "Product Design Studio / Liège, BE",
  headline: "On conçoit. On construit. On livre.",
  subheadline:
    "Produits digitaux premium. Sites, applications, identités de marque. De la stratégie au déploiement.",
  ctaPrimary: { label: "Réserver un appel", href: "https://calendly.com/p-xel" },
  ctaSecondary: { label: "Voir nos projets", href: "/work/" },
};

export const proofStrip = [
  { value: 16, suffix: "+", label: "années d'expertise" },
  { value: 49, suffix: "+", label: "projets livrés" },
  { value: 98, suffix: "%", label: "clients satisfaits" },
];

export const clientLogos = [
  { name: "Greenmood", src: "/legacy-assets/logos/Logo_Greenmood.png" },
  { name: "Kokoro", src: "/legacy-assets/logos/Kokoro-logo.webp" },
  { name: "Globodai", src: "/legacy-assets/logos/Globodai-b.webp" },
  { name: "DO", src: "/legacy-assets/logos/Logo_DODS.png" },
  { name: "PN3DLG", src: "/legacy-assets/logos/PN3DLG-Logo.webp" },
  { name: "Kalibre", src: "/legacy-assets/logos/KALIBRE_logo.webp" },
  { name: "Modular", src: "/legacy-assets/logos/Modular-logo.webp" },
  { name: "ND", src: "/legacy-assets/logos/ND_Logo.webp" },
  { name: "Hopscotch", src: "/legacy-assets/logos/Hopscotch-Logo.webp" },
  { name: "Entourage", src: "/legacy-assets/logos/Entourage-logo.webp" },
  { name: "Oyabun", src: "/legacy-assets/logos/OYABUN_New-Logo_black.webp" },
  { name: "Naturovape", src: "/legacy-assets/logos/Naturovape-logo.webp" },
];

export const capability = {
  label: "Ce qu'on construit",
  heading: "Du produit. Pas des livrables.",
  subtext:
    "On ne vend pas des heures. On conçoit des produits digitaux complets, de l'idée au lancement. Un seul studio. Zéro intermédiaire.",
  items: [
    {
      title: "Sites web",
      description:
        "Sites vitrines, e-commerce, plateformes corporate. Rapides, optimisés SEO, construits pour convertir.",
      href: "/services/creation-site-web/",
    },
    {
      title: "Applications web et MVP",
      description:
        "Outils métier, plateformes SaaS, prototypes fonctionnels, intégrations IA. Du concept au produit qui tourne en production.",
      href: "/services/application-web-mvp/",
    },
    {
      title: "Design d'interface",
      description:
        "UX research, UI design, design systems, prototypage. Des interfaces pensées pour l'usage, pas pour la décoration.",
      href: "/services/ux-ui-design/",
    },
    {
      title: "Identité de marque",
      description:
        "Logo, direction artistique, systèmes visuels. Des marques construites pour durer et pour scaler.",
      href: "/services/branding-identite/",
    },
  ],
};

export const selectedWork = {
  label: "Ce qu'on a livré",
  heading: "Derniers projets",
  projects: [
    {
      name: "BillyCheck",
      tags: ["Application Web", "SaaS", "Intelligence Artificielle", "Fintech"],
      description:
        "Application SaaS d'optimisation de factures énergétiques. Upload, analyse IA, comparaison de 15+ fournisseurs. De l'idée au produit en production.",
      result: "30 secondes pour trouver des économies",
      href: "/work/billycheck/",
      image: "/images/case-studies/billycheck-hero.webp",
    },
    {
      name: "ChairSplit",
      tags: ["SaaS", "Plateforme Métier", "PWA", "Multi-Tenant"],
      description:
        "Plateforme SaaS de gestion pour barbershops. Revenus, commissions, équipes, fiches de paie. Multi-tenant, mobile-first.",
      result: "Produit SaaS complet en production",
      href: "/work/chairsplit/",
      image: "/images/case-studies/chairsplit-hero.webp",
    },
    {
      name: "Greenmood",
      tags: ["UX/UI", "Plateforme B2B", "Configurateur produit", "Design System"],
      description:
        "Plateforme B2B pour le leader européen du design acoustique et biophilique. Architecture d'information, UX/UI et configurateurs produit.",
      href: "/work/greenmood/",
      image: "/images/case-studies/greenmood-hero.webp",
    },
  ],
  cta: { label: "Voir tous les projets", href: "/work/" },
};

export const whyPxel = {
  label: "Pourquoi nous",
  heading: "On ne livre pas des maquettes. On livre des produits.",
  points: [
    {
      number: "01",
      title: "On conçoit et on exécute",
      body: "La plupart des studios s'arrêtent à la maquette Figma. On va jusqu'au déploiement. Design, code, mise en ligne. Votre produit est fonctionnel, pas juste beau sur un écran de présentation.",
    },
    {
      number: "02",
      title: "Un seul interlocuteur",
      body: "Pas de compte manager. Pas de couche intermédiaire. Un studio senior qui travaille directement avec les décideurs. On comprend votre projet parce qu'on le porte du début à la fin.",
    },
    {
      number: "03",
      title: "Rapide et précis",
      body: "On utilise l'IA comme levier d'exécution. Ce qui prend 3 semaines en agence classique, on le livre en 5 jours. 2 ans de CA en 2 mois pour Arduenna Gin. Un SaaS complet en production pour BillyCheck. On ne promet pas la vitesse. On la démontre.",
    },
  ],
};

export const process = {
  label: "Comment on travaille",
  heading: "Du brief au lancement. Sans friction.",
  steps: [
    {
      number: "01",
      title: "Premier contact",
      description: "Décrivez votre projet en quelques lignes. On répond sous 24h.",
    },
    {
      number: "02",
      title: "Appel découverte",
      description:
        "30 minutes pour comprendre vos objectifs, vos contraintes et vos attentes.",
    },
    {
      number: "03",
      title: "Proposition claire",
      description:
        "Périmètre, livrables, planning, budget. Tout est posé. Pas de surprises.",
    },
    {
      number: "04",
      title: "On construit",
      description:
        "Design, développement, itérations. Vous suivez l'avancement en temps réel.",
    },
  ],
};

export const faq = {
  label: "Questions fréquentes",
  items: [
    {
      question: "Quels types de projets prenez-vous en charge ?",
      answer:
        "Sites web, applications web, MVP, landing pages, e-commerce, branding et identités visuelles. On travaille avec des startups, des PME et des marques ambitieuses en Belgique, au Luxembourg et en Europe.",
    },
    {
      question: "Combien coûte un projet avec P-XEL ?",
      answer:
        "Chaque projet est chiffré sur mesure en fonction du périmètre, de la complexité et de vos objectifs. À titre indicatif : landing page à partir de 1\u00a0500\u00a0€, site vitrine à partir de 3\u00a0500\u00a0€, MVP à partir de 5\u00a0000\u00a0€. On fournit une estimation détaillée et gratuite après un premier échange. Pas de surprise, pas d'engagement.",
    },
    {
      question: "Quelle est la durée moyenne d'un projet ?",
      answer:
        "Landing page : 1 à 2 semaines. Site vitrine : 3 à 6 semaines. Application web : 6 à 12 semaines. On adapte le planning à vos contraintes.",
    },
    {
      question:
        "Est-ce que vous développez aussi ou uniquement du design ?",
      answer:
        "On conçoit et on développe. Design, code et déploiement. Vous recevez un produit fonctionnel, pas une maquette.",
    },
    {
      question: "Où êtes-vous basés ?",
      answer:
        "À Liège, en Belgique. On travaille avec des clients en Wallonie, à Bruxelles, au Luxembourg et partout en Europe en remote.",
    },
  ],
};

export const finalCta = {
  heading: "Votre projet mérite mieux qu'un template.",
  subtext:
    "Parlez-nous de votre idée. 30 minutes pour cadrer votre projet et poser les bases.",
  ctaPrimary: { label: "Réserver un appel", href: "https://calendly.com/p-xel" },
  ctaSecondary: { label: "Lancer mon projet", href: "/contact/" },
};
