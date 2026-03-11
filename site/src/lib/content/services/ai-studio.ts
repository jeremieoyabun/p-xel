import type { ServicePage } from "./types";

export const aiStudio: ServicePage = {
  slug: "ai-studio",
  metaTitle:
    "AI Product Design Studio | MVP IA & Produits Intelligents | P-XEL",
  metaDescription:
    "On intègre l'IA dans vos produits digitaux. Prototypage IA, agents, automatisation, intégrations LLM. De l'idée au produit IA en production. Studio à Liège.",

  hero: {
    label: "AI Product Design",
    heading:
      "On conçoit et livre des produits avec l'IA intégrée. Pas des démos. Des produits qui tournent.",
    subheadline:
      "Agents IA, interfaces intelligentes, automatisations, intégrations LLM. Ce qui prenait 3 semaines en agence classique, on le livre en 5 jours.",
  },

  problem: {
    label: "Le contexte",
    heading: "L'IA est partout. Les produits qui l'utilisent vraiment, non.",
    intro:
      "Tout le monde parle d'IA. Peu d'équipes savent comment l'intégrer concrètement dans un produit digital qui fonctionne, se déploie et crée de la valeur.",
    points: [
      "Des expérimentations qui ne sortent jamais de la phase de prototype. ChatGPT dans une démo Figma, ce n'est pas un produit IA.",
      "Des intégrations LLM bâclées sans UX. Coller une API GPT sur une interface existante génère de la confusion, pas de la valeur.",
      "Des délais absurdes pour des projets simples. Six mois pour un MVP IA, c'est six mois de marché perdus.",
    ],
  },

  whatWeBuild: {
    label: "Ce qu'on construit",
    heading: "Produits IA. Interfaces intelligentes. Automatisations.",
    intro:
      "On utilise l'IA comme levier d'exécution et comme fonctionnalité produit. Les deux en même temps.",
    items: [
      {
        title: "MVPs avec IA intégrée",
        body: "Produits fonctionnels avec traitement LLM, analyse de documents, génération de contenu ou recommandations. Déployés en production, pas en sandbox.",
      },
      {
        title: "Agents et automatisations",
        body: "Agents IA qui exécutent des tâches métier complexes. Extraction de données, classement automatique, résumés, workflows intelligents.",
      },
      {
        title: "Interfaces intelligentes",
        body: "Recherche sémantique, chat intégré, suggestions contextuelles, personnalisation dynamique. Des interfaces qui s'adaptent au comportement utilisateur.",
      },
      {
        title: "Intégrations LLM",
        body: "OpenAI, Anthropic Claude, Mistral, Gemini. On choisit le modèle adapté à votre usage, on gère le prompt engineering, les coûts et la fiabilité.",
      },
      {
        title: "Outils métier augmentés",
        body: "CRM, tableaux de bord, outils de gestion enrichis par l'IA. Analyse prédictive, alertes intelligentes, synthèses automatiques.",
      },
    ],
  },

  approach: {
    label: "Notre méthode",
    heading: "De l'idée au produit IA. En semaines, pas en mois.",
    intro:
      "On travaille en cycles courts. Chaque semaine, vous voyez quelque chose qui fonctionne. L'IA accélère chaque phase.",
    steps: [
      {
        number: "01",
        title: "Cadrage IA",
        body: "On identifie les cas d'usage IA à fort impact dans votre produit. On choisit les modèles, on définit les contraintes de coût, de latence et de fiabilité.",
      },
      {
        number: "02",
        title: "Design sprint",
        body: "En 3 à 5 jours, on prototype l'interface et les flux IA. Vous testez une version fonctionnelle avant d'investir dans le développement complet.",
      },
      {
        number: "03",
        title: "Build",
        body: "Développement front-end, back-end et intégration des APIs IA. On itère sur les prompts, on optimise les performances et on gère les edge cases.",
      },
      {
        number: "04",
        title: "Déploiement",
        body: "Mise en production, monitoring des appels LLM, gestion des coûts. Le produit est en ligne et vous avez la main dessus.",
      },
    ],
  },

  deliverables: {
    label: "Ce que vous recevez",
    heading: "Un produit IA fonctionnel. Pas une présentation.",
    intro: "",
    items: [
      "Document de cadrage IA (use cases, modèles, architecture)",
      "Prototype interactif (Figma + intégration IA réelle)",
      "Code source complet (front-end, back-end, intégrations LLM)",
      "Prompts engineerés, testés et documentés",
      "Infrastructure déployée (Vercel, Railway, AWS selon le projet)",
      "Documentation d'utilisation et de maintenance",
      "Formation pour votre équipe sur les outils livrés",
    ],
    note: "Vous êtes propriétaire de tout. Code, prompts, infrastructure, données. Rien n'est retenu.",
  },

  caseStudies: {
    label: "Projets récents",
    heading: "Ce qu'on a livré avec l'IA.",
    studies: [
      {
        name: "BillyCheck",
        tags: ["Application Web", "GPT-4o Vision", "Fintech", "SaaS"],
        body: "Application SaaS d'optimisation de factures énergétiques. Upload d'une facture, analyse IA via GPT-4o Vision, comparaison automatique de 15+ fournisseurs. De l'idée au produit en production.",
        href: "/work/billycheck/",
      },
    ],
  },

  investment: {
    label: "Investissement",
    heading: "Un budget calibré sur la valeur créée.",
    body: "Un prototype IA fonctionnel peut être livré en 5 à 10 jours. Un produit complet avec intégration LLM en 4 à 8 semaines. Les coûts dépendent de la complexité des flux IA, du nombre d'intégrations et du volume d'appels API prévu.\n\nÀ titre indicatif : prototype IA à partir de 3\u00a0000\u00a0€, MVP avec IA intégrée à partir de 8\u00a0000\u00a0€. Estimation gratuite et détaillée après un premier échange.",
    anchor: "Estimation gratuite sous 24h",
    note: "On calcule aussi le coût mensuel des APIs IA pour que vous ayez une vision complète de votre budget d'exploitation.",
  },

  faq: {
    label: "Questions fréquentes",
    items: [
      {
        question: "Quels modèles IA utilisez-vous ?",
        answer:
          "On travaille principalement avec OpenAI (GPT-4o, o1), Anthropic (Claude), Mistral et les embeddings pour la recherche sémantique. On choisit le modèle en fonction de votre use case, de la latence requise et du budget API mensuel.",
      },
      {
        question: "Combien coûte l'utilisation des APIs IA en production ?",
        answer:
          "Cela dépend du volume d'appels et du modèle utilisé. On estime avec vous le coût mensuel réaliste dès le cadrage. Pour un produit à 500 utilisateurs actifs, on parle généralement de 50 à 300\u00a0€/mois d'API selon l'usage.",
      },
      {
        question: "En combien de temps peut-on avoir un premier prototype ?",
        answer:
          "Un prototype IA fonctionnel (pas une maquette, un produit qui appelle réellement les APIs) est livrable en 3 à 5 jours. C'est notre point de départ habituel avant de décider si on investit dans le produit complet.",
      },
      {
        question: "Est-ce que mes données sont sécurisées ?",
        answer:
          "On configure les intégrations pour ne pas envoyer de données sensibles aux APIs tierces sans consentement explicite. On peut aussi déployer des modèles en local si la confidentialité est critique.",
      },
      {
        question: "Peut-on intégrer l'IA à un produit existant ?",
        answer:
          "Oui. C'est souvent plus rapide que de partir de zéro. On audite votre produit, on identifie les points d'entrée IA les plus impactants et on les implémente sans casser ce qui fonctionne déjà.",
      },
    ],
  },

  cta: {
    heading: "Votre produit peut être plus intelligent.",
    subtext:
      "Décrivez votre projet en quelques lignes. On vous propose un cadrage IA concret sous 24h.",
  },
};
