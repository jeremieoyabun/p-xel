import type { ServicePage } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, ServicePage> = {
  fr: {
    slug: "application-web-mvp",
    metaTitle:
      "Développement Application Web & MVP | P-XEL Studio - Belgique",
    metaDescription:
      "Applications web, MVPs et plateformes sur mesure. De la stratégie au déploiement. Studio produit à Liège. 16+ ans d'expérience. Réservez un appel.",

    hero: {
      label: "Applications Web & MVPs",
      heading:
        "On construit des produits digitaux qui fonctionnent. Pas des prototypes qui restent dans un tiroir.",
      subheadline:
        "Applications web, plateformes SaaS, outils métier, MVPs. De la stratégie produit au déploiement. Un seul studio. Un seul interlocuteur.",
    },

    problem: {
      label: "Le problème",
      heading: "Pourquoi la plupart des projets d'applications échouent.",
      intro:
        "Vous avez une idée de produit digital. Vous savez ce que vous voulez construire. Mais entre l'idée et le produit fonctionnel, il y a un gouffre.",
      points: [
        "Trop d'interlocuteurs, pas assez de résultats. Quatre prestataires. Quatre agendas. Quatre factures. Et personne ne porte la vision produit.",
        "Des mois de développement sans rien à montrer. Six mois après le kickoff, vous avez des specs, des wireframes, des sprints en retard. Mais rien de déployable.",
        "Un MVP qui n'est ni minimum, ni viable. Soit on vous livre un prototype inutilisable. Soit on vous facture le prix d'un produit complet pour un MVP qui ne valide rien.",
      ],
    },

    whatWeBuild: {
      label: "Ce qu'on construit",
      heading: "Applications web. Plateformes. Outils. MVPs.",
      intro:
        "On conçoit et développe des produits digitaux sur mesure. Chaque projet commence par un objectif business clair et se termine par un produit déployé.",
      items: [
        {
          title: "Applications web sur mesure",
          body: "Interfaces complexes, logiques métier spécifiques, gestion de données. On construit des applications web qui répondent à des besoins que les solutions standard ne couvrent pas.",
        },
        {
          title: "Plateformes SaaS",
          body: "De l'architecture à l'interface, on conçoit des plateformes pensées pour scaler. Gestion utilisateurs, abonnements, tableaux de bord, APIs.",
        },
        {
          title: "Outils métier",
          body: "CRM internes, outils de gestion, configurateurs produit, plateformes de commande. Des outils construits autour de vos processus, pas l'inverse.",
        },
        {
          title: "MVPs pour validation marché",
          body: "Un produit fonctionnel, déployé et utilisable en quelques semaines. Suffisamment solide pour valider votre marché. Suffisamment léger pour itérer vite.",
        },
        {
          title: "Plateformes et écosystèmes digitaux",
          body: "Écosystèmes multi-interfaces : web, mobile, intégrations tierces. On conçoit l'architecture globale et on livre les composants un par un.",
        },
      ],
    },

    approach: {
      label: "Notre approche",
      heading: "De la stratégie au déploiement. Sans friction.",
      intro:
        "On ne sépare pas le design du développement. Chaque étape alimente la suivante. Le résultat : un produit cohérent, livré plus vite, avec moins de friction.",
      steps: [
        {
          number: "01",
          title: "Stratégie produit",
          body: "On définit ensemble le périmètre, les utilisateurs cibles, les fonctionnalités prioritaires et les métriques de succès. Un document de cadrage clair et actionnable.",
        },
        {
          number: "02",
          title: "UX Research & Architecture",
          body: "On structure les parcours utilisateur, l'architecture d'information et les flux de données. On identifie les risques techniques avant d'écrire une ligne de code.",
        },
        {
          number: "03",
          title: "Design UI",
          body: "Maquettes haute fidélité dans Figma. Design system réutilisable. Chaque écran est conçu pour fonctionner, pas juste pour impressionner dans une présentation.",
        },
        {
          number: "04",
          title: "Développement",
          body: "Front-end et back-end, en parallèle quand c'est possible. Livraisons incrémentales. Vous voyez le produit avancer chaque semaine.",
        },
        {
          number: "05",
          title: "Déploiement & Lancement",
          body: "Mise en production, configuration serveur, monitoring. Le produit est en ligne, accessible à vos utilisateurs.",
        },
        {
          number: "06",
          title: "Itération",
          body: "Après le lancement, on analyse les données réelles et on itère. Les meilleures décisions produit viennent des vrais utilisateurs, pas des hypothèses.",
        },
      ],
    },

    deliverables: {
      label: "Ce que vous recevez",
      heading: "Des livrables concrets. Pas des promesses.",
      intro: "",
      items: [
        "Document de cadrage (périmètre, objectifs, planning)",
        "Wireframes & flux utilisateur",
        "Maquettes UI haute fidélité (Figma, desktop et mobile)",
        "Design system (composants, typographie, couleurs, spacing)",
        "Code source (front-end et back-end, versionné, documenté)",
        "Application déployée en production",
        "Documentation technique (architecture, APIs, déploiement)",
        "Formation pour votre équipe",
      ],
      note: "Vous êtes propriétaire de tout. Code, design, domaine, hébergement. Rien n'est retenu.",
    },

    caseStudies: {
      label: "Projets récents",
      heading: "Ce qu'on a construit pour nos clients.",
      studies: [
        {
          name: "Greenmood",
          tags: ["UX/UI", "Plateforme B2B", "Configurateur produit"],
          body: "Plateforme B2B complète pour le leader international du design acoustique. Catalogue de 200+ produits, configurateurs interactifs, espace revendeur et back-office sur mesure.",
          href: "/work/greenmood/",
        },
        {
          name: "Oyabun",
          tags: ["Web3", "Unity", "Application Telegram"],
          body: "Écosystème Web3 complet. Site web, application Telegram avec mécaniques de jeu, intégration Unity pour les éléments 3D, architecture blockchain.",
          href: "/work/oyabun/",
        },
      ],
    },

    investment: {
      label: "Investissement",
      heading: "Un budget adapté à votre ambition produit.",
      body: "Le coût d'une application web dépend de ce qu'elle doit accomplir. Un MVP de validation marché et une plateforme SaaS complète ne demandent pas le même investissement. On définit le budget avec vous, sur la base d'un périmètre validé : fonctionnalités prioritaires, complexité technique, nombre d'interfaces, intégrations tierces.\n\nOn travaille en forfait ou en régie selon la nature du projet. Chaque estimation est gratuite et détaillée.",
      anchor: "Estimation gratuite sous 24h",
      note: "Chaque projet commence par une estimation gratuite et détaillée. Périmètre, planning et budget sont validés ensemble avant de démarrer.",
    },

    faq: {
      label: "Questions fréquentes",
      items: [
        {
          question:
            "Comment définissez-vous le périmètre d'un projet ?",
          answer:
            "On commence par un appel de 30 minutes pour comprendre vos objectifs, vos contraintes et vos utilisateurs. Ensuite, on rédige un document de cadrage avec le périmètre exact, les fonctionnalités prioritaires, le planning et le budget. Vous validez avant qu'on commence.",
        },
        {
          question: "Quels sont les délais pour un MVP ?",
          answer:
            "Un MVP fonctionnel est généralement livré en 4 à 8 semaines. On privilégie une première version déployable rapidement, puis des itérations basées sur les retours utilisateurs.",
        },
        {
          question: "Quelles technologies utilisez-vous ?",
          answer:
            "On choisit la stack en fonction du projet. Front-end : React, Next.js, Vue.js. Back-end : Node.js, Python. Bases de données : PostgreSQL, MongoDB. Déploiement : Vercel, AWS, DigitalOcean.",
        },
        {
          question:
            "Est-ce que je suis propriétaire du code et du produit ?",
          answer:
            "Oui. À 100%. Le code source, les fichiers de design, le domaine, l'hébergement. Tout vous appartient. On ne retient rien.",
        },
        {
          question:
            "Proposez-vous de la maintenance après le lancement ?",
          answer:
            "Oui. On propose des contrats de maintenance mensuels pour les mises à jour, les corrections, le monitoring et les évolutions fonctionnelles. Le contrat est flexible.",
        },
        {
          question:
            "Comment se déroule la collaboration au quotidien ?",
          answer:
            "On travaille avec des livraisons incrémentales sur des cycles d'une à deux semaines. Vous avez accès à un espace de suivi en temps réel. Des démos régulières du produit en cours.",
        },
      ],
    },

    cta: {
      heading: "Vous avez un produit à construire.",
      subtext:
        "Parlez-nous de votre projet. On vous envoie une estimation gratuite en 48h.",
    },
  },

  en: {
    slug: "application-web-mvp",
    metaTitle:
      "Web Application & MVP Development | P-XEL Studio - Belgium",
    metaDescription:
      "Custom web applications, MVPs and platforms. From strategy to deployment. Product studio in Liege, Belgium. 16+ years of experience. Book a call.",

    hero: {
      label: "Web Applications & MVPs",
      heading:
        "We build digital products that work. Not prototypes that gather dust.",
      subheadline:
        "Web applications, SaaS platforms, business tools, MVPs. From product strategy to deployment. One studio. One point of contact.",
    },

    problem: {
      label: "The problem",
      heading: "Why most application projects fail.",
      intro:
        "You have a digital product idea. You know what you want to build. But between the idea and a working product, there's a gap.",
      points: [
        "Too many stakeholders, not enough results. Four vendors. Four schedules. Four invoices. And nobody owns the product vision.",
        "Months of development with nothing to show. Six months after kickoff, you have specs, wireframes, delayed sprints. But nothing deployable.",
        "An MVP that is neither minimum nor viable. Either you get an unusable prototype. Or you're charged the price of a full product for an MVP that validates nothing.",
      ],
    },

    whatWeBuild: {
      label: "What we build",
      heading: "Web applications. Platforms. Tools. MVPs.",
      intro:
        "We design and develop custom digital products. Every project starts with a clear business objective and ends with a deployed product.",
      items: [
        {
          title: "Custom web applications",
          body: "Complex interfaces, specific business logic, data management. We build web applications that address needs standard solutions can't cover.",
        },
        {
          title: "SaaS platforms",
          body: "From architecture to interface, we design platforms built to scale. User management, subscriptions, dashboards, APIs.",
        },
        {
          title: "Business tools",
          body: "Internal CRMs, management tools, product configurators, ordering platforms. Tools built around your processes, not the other way around.",
        },
        {
          title: "MVPs for market validation",
          body: "A functional product, deployed and usable in a few weeks. Solid enough to validate your market. Lean enough to iterate fast.",
        },
        {
          title: "Platforms and digital ecosystems",
          body: "Multi-interface ecosystems: web, mobile, third-party integrations. We design the global architecture and deliver components one by one.",
        },
      ],
    },

    approach: {
      label: "Our approach",
      heading: "From strategy to deployment. Without friction.",
      intro:
        "We don't separate design from development. Each step feeds the next. The result: a cohesive product, delivered faster, with less friction.",
      steps: [
        {
          number: "01",
          title: "Product strategy",
          body: "We define the scope, target users, priority features and success metrics together. A clear, actionable scoping document.",
        },
        {
          number: "02",
          title: "UX Research & Architecture",
          body: "We structure user journeys, information architecture and data flows. We identify technical risks before writing a single line of code.",
        },
        {
          number: "03",
          title: "UI Design",
          body: "High-fidelity mockups in Figma. Reusable design system. Every screen is designed to work, not just to impress in a presentation.",
        },
        {
          number: "04",
          title: "Development",
          body: "Front-end and back-end, in parallel when possible. Incremental deliveries. You see the product advance every week.",
        },
        {
          number: "05",
          title: "Deployment & Launch",
          body: "Production deployment, server configuration, monitoring. The product is live and accessible to your users.",
        },
        {
          number: "06",
          title: "Iteration",
          body: "After launch, we analyze real data and iterate. The best product decisions come from real users, not assumptions.",
        },
      ],
    },

    deliverables: {
      label: "What you receive",
      heading: "Concrete deliverables. Not promises.",
      intro: "",
      items: [
        "Scoping document (scope, objectives, timeline)",
        "Wireframes & user flows",
        "High-fidelity UI mockups (Figma, desktop and mobile)",
        "Design system (components, typography, colors, spacing)",
        "Source code (front-end and back-end, versioned, documented)",
        "Application deployed in production",
        "Technical documentation (architecture, APIs, deployment)",
        "Training for your team",
      ],
      note: "You own everything. Code, design, domain, hosting. Nothing is held back.",
    },

    caseStudies: {
      label: "Recent projects",
      heading: "What we've built for our clients.",
      studies: [
        {
          name: "Greenmood",
          tags: ["UX/UI", "B2B Platform", "Product Configurator"],
          body: "Complete B2B platform for the international leader in acoustic design. 200+ product catalog, interactive configurators, reseller portal and custom back-office.",
          href: "/en/work/greenmood/",
        },
        {
          name: "Oyabun",
          tags: ["Web3", "Unity", "Telegram Application"],
          body: "Complete Web3 ecosystem. Website, Telegram application with game mechanics, Unity integration for 3D elements, blockchain architecture.",
          href: "/en/work/oyabun/",
        },
      ],
    },

    investment: {
      label: "Investment",
      heading: "A budget tailored to your product ambition.",
      body: "The cost of a web application depends on what it needs to accomplish. A market validation MVP and a full SaaS platform don't require the same investment. We define the budget with you, based on a validated scope: priority features, technical complexity, number of interfaces, third-party integrations.\n\nWe work on fixed-price or time-and-materials basis depending on the project. Every estimate is free and detailed.",
      anchor: "Free estimate within 24h",
      note: "Every project starts with a free, detailed estimate. Scope, timeline and budget are validated together before we start.",
    },

    faq: {
      label: "Frequently asked questions",
      items: [
        {
          question:
            "How do you define the scope of a project?",
          answer:
            "We start with a 30-minute call to understand your goals, constraints and users. Then we write a scoping document with the exact scope, priority features, timeline and budget. You validate before we begin.",
        },
        {
          question: "What are the timelines for an MVP?",
          answer:
            "A functional MVP is typically delivered in 4 to 8 weeks. We prioritize a first deployable version quickly, then iterate based on user feedback.",
        },
        {
          question: "What technologies do you use?",
          answer:
            "We choose the stack based on the project. Front-end: React, Next.js, Vue.js. Back-end: Node.js, Python. Databases: PostgreSQL, MongoDB. Deployment: Vercel, AWS, DigitalOcean.",
        },
        {
          question:
            "Do I own the code and the product?",
          answer:
            "Yes. 100%. The source code, design files, domain, hosting. Everything belongs to you. We hold nothing back.",
        },
        {
          question:
            "Do you offer maintenance after launch?",
          answer:
            "Yes. We offer monthly maintenance contracts for updates, fixes, monitoring and feature evolution. The contract is flexible.",
        },
        {
          question:
            "How does day-to-day collaboration work?",
          answer:
            "We work with incremental deliveries on one to two week cycles. You have access to a real-time tracking space. Regular demos of the product in progress.",
        },
      ],
    },

    cta: {
      heading: "You have a product to build.",
      subtext:
        "Tell us about your project. We'll send you a free estimate within 48h.",
    },
  },
} as const;

export function getApplicationWebMvpContent(locale: Locale) {
  return content[locale];
}

// Re-export default for backward compatibility
export const applicationWebMvp = content.fr;
