import type { ServicePage } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, ServicePage> = {
  fr: {
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
      video: "/images/Cube-IA.webm",
      hideAccent: true,
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
          icon: "sparkle",
        },
        {
          title: "Agents et automatisations",
          body: "Agents IA qui exécutent des tâches métier complexes. Extraction de données, classement automatique, résumés, workflows intelligents.",
          icon: "bot",
        },
        {
          title: "Interfaces intelligentes",
          body: "Recherche sémantique, chat intégré, suggestions contextuelles, personnalisation dynamique. Des interfaces qui s'adaptent au comportement utilisateur.",
          icon: "workflow",
        },
        {
          title: "Intégrations LLM",
          body: "OpenAI, Anthropic Claude, Mistral, Gemini. On choisit le modèle adapté à votre usage, on gère le prompt engineering, les coûts et la fiabilité.",
          icon: "cpu",
        },
        {
          title: "Outils métier augmentés",
          body: "CRM, tableaux de bord, outils de gestion enrichis par l'IA. Analyse prédictive, alertes intelligentes, synthèses automatiques.",
          icon: "tool",
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
          image: "/images/case-studies/billycheck-hero.webp",
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
  },

  en: {
    slug: "ai-studio",
    metaTitle:
      "AI Product Design Studio | AI MVP & Intelligent Products | P-XEL",
    metaDescription:
      "We integrate AI into your digital products. AI prototyping, agents, automation, LLM integrations. From idea to AI product in production. Studio in Liege, Belgium.",

    hero: {
      label: "AI Product Design",
      heading:
        "We design and ship products with built-in AI. Not demos. Products that run.",
      subheadline:
        "AI agents, intelligent interfaces, automations, LLM integrations. What used to take 3 weeks at a traditional agency, we deliver in 5 days.",
      video: "/images/Cube-IA.webm",
      hideAccent: true,
    },

    problem: {
      label: "The context",
      heading: "AI is everywhere. Products that actually use it are not.",
      intro:
        "Everyone talks about AI. Few teams know how to concretely integrate it into a digital product that works, deploys and creates value.",
      points: [
        "Experiments that never leave the prototype phase. ChatGPT in a Figma demo is not an AI product.",
        "Sloppy LLM integrations without UX. Slapping a GPT API onto an existing interface creates confusion, not value.",
        "Absurd timelines for simple projects. Six months for an AI MVP means six months of lost market opportunity.",
      ],
    },

    whatWeBuild: {
      label: "What we build",
      heading: "AI products. Intelligent interfaces. Automations.",
      intro:
        "We use AI as an execution lever and as a product feature. Both at the same time.",
      items: [
        {
          title: "MVPs with built-in AI",
          body: "Functional products with LLM processing, document analysis, content generation or recommendations. Deployed in production, not in a sandbox.",
          icon: "sparkle",
        },
        {
          title: "Agents and automations",
          body: "AI agents that execute complex business tasks. Data extraction, automatic classification, summaries, intelligent workflows.",
          icon: "bot",
        },
        {
          title: "Intelligent interfaces",
          body: "Semantic search, integrated chat, contextual suggestions, dynamic personalization. Interfaces that adapt to user behavior.",
          icon: "workflow",
        },
        {
          title: "LLM integrations",
          body: "OpenAI, Anthropic Claude, Mistral, Gemini. We choose the model suited to your use case, handle prompt engineering, cost management and reliability.",
          icon: "cpu",
        },
        {
          title: "AI-augmented business tools",
          body: "CRMs, dashboards, management tools enhanced by AI. Predictive analysis, intelligent alerts, automatic summaries.",
          icon: "tool",
        },
      ],
    },

    approach: {
      label: "Our method",
      heading: "From idea to AI product. In weeks, not months.",
      intro:
        "We work in short cycles. Every week, you see something that works. AI accelerates every phase.",
      steps: [
        {
          number: "01",
          title: "AI scoping",
          body: "We identify high-impact AI use cases in your product. We choose the models, define cost, latency and reliability constraints.",
        },
        {
          number: "02",
          title: "Design sprint",
          body: "In 3 to 5 days, we prototype the interface and AI flows. You test a functional version before investing in full development.",
        },
        {
          number: "03",
          title: "Build",
          body: "Front-end, back-end development and AI API integration. We iterate on prompts, optimize performance and handle edge cases.",
        },
        {
          number: "04",
          title: "Deployment",
          body: "Production deployment, LLM call monitoring, cost management. The product is live and you have full control.",
        },
      ],
    },

    deliverables: {
      label: "What you receive",
      heading: "A functional AI product. Not a presentation.",
      intro: "",
      items: [
        "AI scoping document (use cases, models, architecture)",
        "Interactive prototype (Figma + real AI integration)",
        "Complete source code (front-end, back-end, LLM integrations)",
        "Engineered, tested and documented prompts",
        "Deployed infrastructure (Vercel, Railway, AWS depending on project)",
        "Usage and maintenance documentation",
        "Training for your team on the delivered tools",
      ],
      note: "You own everything. Code, prompts, infrastructure, data. Nothing is held back.",
    },

    caseStudies: {
      label: "Recent projects",
      heading: "What we've shipped with AI.",
      studies: [
        {
          name: "BillyCheck",
          tags: ["Web Application", "GPT-4o Vision", "Fintech", "SaaS"],
          body: "SaaS application for energy bill optimization. Upload a bill, AI analysis via GPT-4o Vision, automatic comparison of 15+ providers. From idea to product in production.",
          href: "/en/work/billycheck/",
          image: "/images/case-studies/billycheck-hero.webp",
        },
      ],
    },

    investment: {
      label: "Investment",
      heading: "A budget calibrated on the value created.",
      body: "A functional AI prototype can be delivered in 5 to 10 days. A complete product with LLM integration in 4 to 8 weeks. Costs depend on the complexity of AI flows, number of integrations and expected API call volume.\n\nAs a reference: AI prototype from 3,000 EUR, MVP with integrated AI from 8,000 EUR. Free and detailed estimate after a first conversation.",
      anchor: "Free estimate within 24h",
      note: "We also calculate the monthly AI API cost so you have a complete view of your operating budget.",
    },

    faq: {
      label: "Frequently asked questions",
      items: [
        {
          question: "What AI models do you use?",
          answer:
            "We primarily work with OpenAI (GPT-4o, o1), Anthropic (Claude), Mistral and embeddings for semantic search. We choose the model based on your use case, required latency and monthly API budget.",
        },
        {
          question: "How much does using AI APIs in production cost?",
          answer:
            "It depends on the call volume and model used. We estimate the realistic monthly cost with you during scoping. For a product with 500 active users, we're typically talking 50 to 300 EUR/month in API costs depending on usage.",
        },
        {
          question: "How quickly can we have a first prototype?",
          answer:
            "A functional AI prototype (not a mockup, a product that actually calls the APIs) can be delivered in 3 to 5 days. That's our usual starting point before deciding whether to invest in the full product.",
        },
        {
          question: "Is my data secure?",
          answer:
            "We configure integrations to not send sensitive data to third-party APIs without explicit consent. We can also deploy models locally if confidentiality is critical.",
        },
        {
          question: "Can AI be integrated into an existing product?",
          answer:
            "Yes. It's often faster than starting from scratch. We audit your product, identify the highest-impact AI entry points and implement them without breaking what already works.",
        },
      ],
    },

    cta: {
      heading: "Your product can be smarter.",
      subtext:
        "Describe your project in a few lines. We'll propose a concrete AI scoping within 24h.",
    },
  },
} as const;

export function getAiStudioContent(locale: Locale) {
  return content[locale];
}

// Re-export default for backward compatibility
export const aiStudio = content.fr;
