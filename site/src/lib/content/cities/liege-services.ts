import type { Locale } from "@/lib/i18n/config";
import type { CityServiceContent, ServiceSlug } from "./types";

/* ---------------------------------------------------------------------------
 * City-service cluster content for LIÈGE
 * P-XEL home turf. Premium, sharp, zero fluff.
 * ------------------------------------------------------------------------ */

const content: Record<Locale, Record<ServiceSlug, CityServiceContent>> = {
  /* ========================================================================
   * FRENCH
   * ====================================================================== */
  fr: {
    /* ------------------------------------------------------------------
     * creation-site-web
     * ---------------------------------------------------------------- */
    "creation-site-web": {
      metaTitle: "Création de Site Web à Liège | P-XEL Studio",
      metaDescription:
        "Studio web basé à Liège. Sites vitrines, landing pages, e-commerce et SEO. Next.js, performance et conversion. Résultats mesurables.",
      hero: {
        label: "Sites web",
        heading: "Création de site web à Liège",
        subtext:
          "Des sites rapides, visibles et conçus pour convertir. Pensés pour le SEO dès la première ligne de code.",
      },
      localContext: {
        label: "Contexte local",
        heading: "Un studio web ancré à Liège",
        paragraphs: [
          "P-XEL est installé à Liège depuis ses débuts. On connaît le tissu économique local, les attentes des entreprises de la région et les leviers qui fonctionnent ici. Pas de sous-traitance offshore, pas d'intermédiaire : un interlocuteur senior, basé ici.",
          "Le marché liégeois regorge de PME, startups et indépendants qui méritent mieux qu'un template WordPress générique. Un site performant, bien référencé et pensé pour la conversion fait la différence entre une vitrine oubliée et un canal d'acquisition actif.",
          "Chaque projet est construit sur Next.js pour garantir des temps de chargement minimaux, un score Core Web Vitals optimal et un référencement naturel solide dès la mise en ligne.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi choisir P-XEL à Liège pour votre site web",
        points: [
          {
            title: "Proximité réelle",
            body: "Basé à Liège, disponible pour des réunions en personne. On parle la même langue, on comprend votre marché.",
          },
          {
            title: "Performance et SEO intégrés",
            body: "Chaque site est optimisé pour Google dès la conception. Architecture technique, vitesse, balisage structuré : rien n'est laissé au hasard.",
          },
          {
            title: "Approche produit, pas template",
            body: "On ne vend pas des thèmes personnalisés. On conçoit des sites sur mesure qui servent vos objectifs business.",
          },
        ],
      },
      faq: [
        {
          question: "Combien coûte la création d'un site web à Liège ?",
          answer:
            "Le budget dépend de la complexité : un site vitrine performant démarre autour de 3 000 EUR, un site e-commerce ou sur mesure peut aller au-delà. On définit toujours un devis clair avant de commencer.",
        },
        {
          question: "En combien de temps mon site sera-t-il en ligne ?",
          answer:
            "Un site vitrine est généralement livré en 3 à 5 semaines. Les projets plus complexes prennent 6 à 10 semaines. On travaille en sprints avec des livrables visibles chaque semaine.",
        },
        {
          question: "Mon site sera-t-il bien référencé sur Google à Liège ?",
          answer:
            "Oui. Le SEO technique et le balisage local sont intégrés dès le départ. On structure chaque page pour cibler les recherches pertinentes dans la région liégeoise.",
        },
        {
          question: "Puis-je modifier le contenu moi-même après la livraison ?",
          answer:
            "Absolument. On intègre un CMS headless qui vous donne le contrôle total sur vos textes et images, sans toucher au code.",
        },
      ],
      cta: {
        heading: "Votre site web, conçu à Liège",
        subtext:
          "Discutons de votre projet. Un appel de 30 minutes suffit pour définir la meilleure approche.",
      },
    },

    /* ------------------------------------------------------------------
     * application-web-mvp
     * ---------------------------------------------------------------- */
    "application-web-mvp": {
      metaTitle: "Application Web & MVP à Liège | P-XEL Studio",
      metaDescription:
        "Développement d'applications web et MVP à Liège. SaaS, outils métier, prototypes fonctionnels. Du concept au produit livré, vite.",
      hero: {
        label: "Apps & MVP",
        heading: "Application web et MVP à Liège",
        subtext:
          "Du prototype fonctionnel au SaaS complet. On conçoit et développe des produits digitaux qui résolvent de vrais problèmes.",
      },
      localContext: {
        label: "Contexte local",
        heading: "Liège, terrain fertile pour les produits digitaux",
        paragraphs: [
          "L'écosystème tech liégeois grandit vite. Entre le WSL, les incubateurs locaux et une nouvelle génération d'entrepreneurs, la demande en applications web solides n'a jamais été aussi forte. P-XEL accompagne cette dynamique depuis le terrain.",
          "Trop de startups et PME liégeoises perdent des mois avec des agences qui livrent des maquettes sans jamais expédier un produit. Notre approche est inverse : on valide vite, on construit vite, on itère avec vous.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi confier votre MVP à P-XEL à Liège",
        points: [
          {
            title: "Product thinking intégré",
            body: "On ne code pas aveuglément un cahier des charges. On challenge les hypothèses, on priorise les fonctionnalités et on livre un produit qui tient la route.",
          },
          {
            title: "Vitesse d'exécution",
            body: "Un MVP fonctionnel en 4 à 8 semaines. Pas de roadmap de 6 mois avant de voir un résultat concret.",
          },
          {
            title: "Accompagnement local",
            body: "Workshops en personne à Liège, itérations rapides, communication directe. Pas de ticket dans une file d'attente.",
          },
        ],
      },
      faq: [
        {
          question: "Quelle est la différence entre un MVP et une application complète ?",
          answer:
            "Un MVP se concentre sur les fonctionnalités essentielles pour valider votre idée auprès de vrais utilisateurs. Une fois validé, on itère pour construire le produit complet.",
        },
        {
          question: "Quelles technologies utilisez-vous pour les applications web ?",
          answer:
            "Next.js, React, TypeScript, PostgreSQL, Supabase. On choisit la stack en fonction du projet, pas l'inverse.",
        },
        {
          question: "Accompagnez-vous les startups liégeoises dès l'idée ?",
          answer:
            "Oui. On intervient dès la phase de conception pour définir le produit, valider le marché et construire une V1 qui a du sens.",
        },
        {
          question: "Combien coûte le développement d'un MVP à Liège ?",
          answer:
            "Un MVP démarre généralement entre 8 000 et 20 000 EUR selon la complexité. On définit ensemble le périmètre exact avant de s'engager.",
        },
      ],
      cta: {
        heading: "Lancez votre produit depuis Liège",
        subtext:
          "Présentez-nous votre idée. On vous dit en 30 minutes si un MVP est la bonne approche.",
      },
    },

    /* ------------------------------------------------------------------
     * ux-ui-design
     * ---------------------------------------------------------------- */
    "ux-ui-design": {
      metaTitle: "UX/UI Design à Liège | P-XEL Studio",
      metaDescription:
        "Design UX/UI à Liège. Recherche utilisateur, interfaces, design systems et prototypage. Des produits beaux, utilisables et performants.",
      hero: {
        label: "UX/UI Design",
        heading: "Design UX/UI à Liège",
        subtext:
          "Des interfaces pensées pour vos utilisateurs, pas pour décorer un portfolio. Recherche, prototypage, design systems.",
      },
      localContext: {
        label: "Contexte local",
        heading: "Le design comme levier de croissance à Liège",
        paragraphs: [
          "Beaucoup d'entreprises liégeoises investissent dans le développement mais négligent le design. Résultat : des outils puissants que personne n'utilise correctement. Un bon design UX/UI transforme un produit fonctionnel en produit adopté.",
          "P-XEL apporte à Liège une approche design de niveau international. On combine recherche utilisateur, prototypage rapide et design systems rigoureux pour des interfaces qui servent les objectifs business autant que l'expérience utilisateur.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi choisir P-XEL pour le design UX/UI à Liège",
        points: [
          {
            title: "16+ ans de pratique",
            body: "Pas un junior qui découvre Figma. Un designer senior avec plus de 16 ans d'expérience en design produit.",
          },
          {
            title: "Design qui ship",
            body: "On ne livre pas juste des maquettes. On conçoit des interfaces prêtes à être développées, avec des specs claires et des design tokens exploitables.",
          },
          {
            title: "Tests et itérations sur le terrain",
            body: "Sessions de test utilisateur organisables à Liège. On valide les hypothèses avec de vrais utilisateurs, pas avec des suppositions.",
          },
        ],
      },
      faq: [
        {
          question: "Quelle est la différence entre UX et UI design ?",
          answer:
            "L'UX (expérience utilisateur) concerne la structure, les parcours et l'utilisabilité. L'UI (interface utilisateur) concerne le visuel : typographie, couleurs, composants. Les deux sont indissociables dans un bon produit.",
        },
        {
          question: "Proposez-vous des audits UX pour des produits existants ?",
          answer:
            "Oui. On réalise des audits UX complets avec analyse heuristique, tests utilisateurs et recommandations priorisées. Idéal avant une refonte.",
        },
        {
          question: "Travaillez-vous avec des équipes de développement externes ?",
          answer:
            "Absolument. On livre des design systems documentés, des specs détaillées et des fichiers Figma structurés pour faciliter la collaboration avec n'importe quelle équipe tech.",
        },
        {
          question: "Combien de temps prend une mission UX/UI à Liège ?",
          answer:
            "Un audit UX prend 1 à 2 semaines. Une refonte d'interface complète prend 4 à 8 semaines selon l'ampleur du projet.",
        },
      ],
      cta: {
        heading: "Un design qui fait la différence",
        subtext:
          "Parlons de votre produit. On identifie ensemble les points de friction et les opportunités.",
      },
    },

    /* ------------------------------------------------------------------
     * branding-identite
     * ---------------------------------------------------------------- */
    "branding-identite": {
      metaTitle: "Branding & Identité Visuelle à Liège | P-XEL Studio",
      metaDescription:
        "Branding et identité visuelle à Liège. Logo, direction artistique, systèmes visuels. Une marque premium qui vous distingue.",
      hero: {
        label: "Branding",
        heading: "Branding et identité visuelle à Liège",
        subtext:
          "Une marque forte ne se résume pas à un logo. Direction artistique, système visuel, territoire de marque. Tout ce qu'il faut pour exister.",
      },
      localContext: {
        label: "Contexte local",
        heading: "Construire une marque forte depuis Liège",
        paragraphs: [
          "Le tissu économique liégeois est dense et compétitif. Se démarquer visuellement n'est pas un luxe, c'est une nécessité. Une identité de marque cohérente et premium positionne votre entreprise au-dessus du bruit ambiant.",
          "P-XEL conçoit des identités visuelles qui fonctionnent partout : sur le web, en print, sur les réseaux sociaux, en signalétique. Un système de marque complet, pas juste un logo isolé.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi confier votre branding à P-XEL à Liège",
        points: [
          {
            title: "Vision produit, pas juste graphique",
            body: "On pense votre marque comme un système. Logo, typographie, couleurs, iconographie : chaque élément a une fonction et une cohérence.",
          },
          {
            title: "Exécution premium",
            body: "On ne livre pas un PDF avec trois variantes de logo. On livre un brand book complet, des fichiers source exploitables et un système visuel prêt à déployer.",
          },
          {
            title: "Continuité digitale",
            body: "Votre identité est conçue pour vivre en ligne. On assure la cohérence entre votre marque et votre présence web, du premier pixel au dernier composant.",
          },
        ],
      },
      faq: [
        {
          question: "Que comprend une mission de branding chez P-XEL ?",
          answer:
            "Analyse stratégique, direction artistique, création du logo, système typographique, palette de couleurs, iconographie, brand book et fichiers source. Le périmètre exact dépend de vos besoins.",
        },
        {
          question: "Combien coûte une identité visuelle à Liège ?",
          answer:
            "Une identité complète démarre autour de 3 500 EUR. Un projet incluant la stratégie de marque et un système visuel étendu peut aller au-delà de 8 000 EUR.",
        },
        {
          question: "Pouvez-vous moderniser une identité existante sans repartir de zéro ?",
          answer:
            "Oui. On réalise un audit de votre marque actuelle et on propose une évolution qui préserve votre capital de reconnaissance tout en la rendant plus contemporaine et cohérente.",
        },
        {
          question: "En combien de temps livrez-vous une identité visuelle ?",
          answer:
            "Comptez 3 à 6 semaines pour une identité complète. On travaille par phases avec des validations intermédiaires pour avancer vite sans sacrifier la qualité.",
        },
      ],
      cta: {
        heading: "Une marque à la hauteur de vos ambitions",
        subtext:
          "Prenons 30 minutes pour comprendre votre positionnement et définir la direction.",
      },
    },

    /* ------------------------------------------------------------------
     * ai-studio
     * ---------------------------------------------------------------- */
    "ai-studio": {
      metaTitle: "AI Studio à Liège | P-XEL Studio",
      metaDescription:
        "Intégration IA à Liège. Automatisation, workflows intelligents, IA intégrée à vos produits. Résultats concrets, pas du buzzword.",
      hero: {
        label: "AI Studio",
        heading: "Intégration IA et automatisation à Liège",
        subtext:
          "L'IA au service de vos produits et processus. Pas du gadget, des gains mesurables. Automatisation, génération, analyse intelligente.",
      },
      localContext: {
        label: "Contexte local",
        heading: "L'IA appliquée au tissu économique liégeois",
        paragraphs: [
          "L'intelligence artificielle n'est plus réservée aux géants de la tech. Les PME et startups liégeoises peuvent tirer parti de l'IA pour automatiser des tâches répétitives, enrichir leurs produits et prendre de meilleures décisions. Le potentiel est énorme, mais l'exécution compte plus que la promesse.",
          "P-XEL intègre l'IA directement dans des produits et workflows concrets. On ne vend pas des démos impressionnantes qui ne survivent pas à la mise en production. On livre des solutions qui fonctionnent au quotidien.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi choisir P-XEL pour l'IA à Liège",
        points: [
          {
            title: "IA orientée produit",
            body: "On intègre l'IA dans des produits réels, pas dans des proof of concept qui finissent dans un tiroir. Chaque intégration sert un objectif business clair.",
          },
          {
            title: "Expertise full-stack",
            body: "L'IA seule ne suffit pas. On maîtrise toute la chaîne : design, développement, déploiement. Votre solution IA est intégrée, pas bricolée.",
          },
          {
            title: "Pragmatisme avant tout",
            body: "On évalue honnêtement si l'IA est la bonne réponse à votre problème. Parfois un bon workflow automatisé suffit. On recommande ce qui fonctionne, pas ce qui brille.",
          },
        ],
      },
      faq: [
        {
          question: "Quels types de projets IA réalisez-vous à Liège ?",
          answer:
            "Automatisation de processus métier, chatbots intelligents, génération de contenu, analyse de données, intégration d'API IA (OpenAI, Claude, etc.) dans des produits existants.",
        },
        {
          question: "Faut-il beaucoup de données pour commencer un projet IA ?",
          answer:
            "Pas nécessairement. Beaucoup de cas d'usage s'appuient sur des modèles pré-entraînés (LLM, vision, etc.) qui fonctionnent sans dataset propriétaire. On évalue votre situation et on recommande l'approche adaptée.",
        },
        {
          question: "Combien coûte un projet d'intégration IA à Liège ?",
          answer:
            "Un premier workflow automatisé peut démarrer autour de 5 000 EUR. Un projet d'intégration IA plus complexe dans un produit existant se situe entre 10 000 et 25 000 EUR.",
        },
        {
          question: "L'IA va-t-elle remplacer mon équipe ?",
          answer:
            "Non. L'objectif est d'augmenter les capacités de votre équipe, pas de la remplacer. On automatise les tâches répétitives pour que vos collaborateurs se concentrent sur ce qui a le plus de valeur.",
        },
      ],
      cta: {
        heading: "Exploitez le potentiel de l'IA à Liège",
        subtext:
          "Présentez-nous votre cas d'usage. On vous dit en 30 minutes ce qui est réaliste et rentable.",
      },
    },
  },

  /* ========================================================================
   * ENGLISH
   * ====================================================================== */
  en: {
    /* ------------------------------------------------------------------
     * creation-site-web
     * ---------------------------------------------------------------- */
    "creation-site-web": {
      metaTitle: "Web Design & Development in Liège | P-XEL Studio",
      metaDescription:
        "Web studio based in Liège. Websites, landing pages, e-commerce and SEO. Next.js, performance and conversion. Measurable results.",
      hero: {
        label: "Websites",
        heading: "Web design and development in Liège",
        subtext:
          "Fast, visible websites built to convert. SEO-first from the first line of code.",
      },
      localContext: {
        label: "Local context",
        heading: "A web studio rooted in Liège",
        paragraphs: [
          "P-XEL has been based in Liège since day one. We know the local business landscape, the expectations of regional companies and the levers that work here. No offshore outsourcing, no middlemen: one senior point of contact, based right here.",
          "The Liège market is full of SMEs, startups and independents who deserve better than a generic WordPress template. A performant, well-ranked site designed for conversion makes the difference between a forgotten showcase and an active acquisition channel.",
          "Every project is built on Next.js to guarantee minimal load times, optimal Core Web Vitals scores and solid organic search rankings from launch day.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why choose P-XEL in Liège for your website",
        points: [
          {
            title: "Real proximity",
            body: "Based in Liège, available for in-person meetings. Same language, same market understanding.",
          },
          {
            title: "Performance and SEO built in",
            body: "Every site is optimized for Google from day one. Technical architecture, speed, structured markup: nothing is left to chance.",
          },
          {
            title: "Product approach, not templates",
            body: "We don't sell customized themes. We build bespoke sites that serve your business goals.",
          },
        ],
      },
      faq: [
        {
          question: "How much does a website cost in Liège?",
          answer:
            "Budget depends on complexity: a performant showcase site starts around EUR 3,000, an e-commerce or custom site can go higher. We always define a clear quote before starting.",
        },
        {
          question: "How long until my site goes live?",
          answer:
            "A showcase site is typically delivered in 3 to 5 weeks. More complex projects take 6 to 10 weeks. We work in sprints with visible deliverables every week.",
        },
        {
          question: "Will my site rank well on Google in Liège?",
          answer:
            "Yes. Technical SEO and local markup are built in from the start. Every page is structured to target relevant searches in the Liège region.",
        },
        {
          question: "Can I update the content myself after delivery?",
          answer:
            "Absolutely. We integrate a headless CMS that gives you full control over your text and images without touching code.",
        },
      ],
      cta: {
        heading: "Your website, crafted in Liège",
        subtext:
          "Let's discuss your project. A 30-minute call is all it takes to define the best approach.",
      },
    },

    /* ------------------------------------------------------------------
     * application-web-mvp
     * ---------------------------------------------------------------- */
    "application-web-mvp": {
      metaTitle: "Web App & MVP Development in Liège | P-XEL Studio",
      metaDescription:
        "Web app and MVP development in Liège. SaaS, business tools, functional prototypes. From concept to shipped product, fast.",
      hero: {
        label: "Apps & MVPs",
        heading: "Web app and MVP development in Liège",
        subtext:
          "From functional prototype to full SaaS. We design and build digital products that solve real problems.",
      },
      localContext: {
        label: "Local context",
        heading: "Liège, fertile ground for digital products",
        paragraphs: [
          "The Liège tech ecosystem is growing fast. Between WSL, local incubators and a new generation of entrepreneurs, demand for solid web applications has never been higher. P-XEL supports this momentum from the ground.",
          "Too many Liège startups and SMEs lose months with agencies that deliver mockups but never ship a product. Our approach is the opposite: validate fast, build fast, iterate with you.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why trust P-XEL in Liège with your MVP",
        points: [
          {
            title: "Built-in product thinking",
            body: "We don't blindly code a spec document. We challenge assumptions, prioritize features and deliver a product that holds up.",
          },
          {
            title: "Speed of execution",
            body: "A functional MVP in 4 to 8 weeks. No 6-month roadmap before seeing a concrete result.",
          },
          {
            title: "Local support",
            body: "In-person workshops in Liège, rapid iterations, direct communication. No ticket in a queue.",
          },
        ],
      },
      faq: [
        {
          question: "What is the difference between an MVP and a full application?",
          answer:
            "An MVP focuses on the essential features to validate your idea with real users. Once validated, we iterate to build the full product.",
        },
        {
          question: "What technologies do you use for web applications?",
          answer:
            "Next.js, React, TypeScript, PostgreSQL, Supabase. We choose the stack based on the project, not the other way around.",
        },
        {
          question: "Do you work with Liège startups from the idea stage?",
          answer:
            "Yes. We get involved from the design phase to define the product, validate the market and build a V1 that makes sense.",
        },
        {
          question: "How much does MVP development cost in Liège?",
          answer:
            "An MVP typically starts between EUR 8,000 and 20,000 depending on complexity. We define the exact scope together before committing.",
        },
      ],
      cta: {
        heading: "Launch your product from Liège",
        subtext:
          "Tell us about your idea. We'll tell you in 30 minutes if an MVP is the right approach.",
      },
    },

    /* ------------------------------------------------------------------
     * ux-ui-design
     * ---------------------------------------------------------------- */
    "ux-ui-design": {
      metaTitle: "UX/UI Design in Liège | P-XEL Studio",
      metaDescription:
        "UX/UI design in Liège. User research, interfaces, design systems and prototyping. Beautiful, usable, performant products.",
      hero: {
        label: "UX/UI Design",
        heading: "UX/UI design in Liège",
        subtext:
          "Interfaces designed for your users, not to decorate a portfolio. Research, prototyping, design systems.",
      },
      localContext: {
        label: "Local context",
        heading: "Design as a growth lever in Liège",
        paragraphs: [
          "Many Liège businesses invest in development but neglect design. The result: powerful tools that nobody uses properly. Good UX/UI design transforms a functional product into an adopted product.",
          "P-XEL brings world-class design to Liège. We combine user research, rapid prototyping and rigorous design systems for interfaces that serve business goals as much as user experience.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why choose P-XEL for UX/UI design in Liège",
        points: [
          {
            title: "16+ years of practice",
            body: "Not a junior discovering Figma. A senior designer with over 16 years of product design experience.",
          },
          {
            title: "Design that ships",
            body: "We don't just deliver mockups. We design interfaces ready for development, with clear specs and usable design tokens.",
          },
          {
            title: "On-the-ground testing",
            body: "User testing sessions organized in Liège. We validate hypotheses with real users, not assumptions.",
          },
        ],
      },
      faq: [
        {
          question: "What is the difference between UX and UI design?",
          answer:
            "UX (user experience) covers structure, flows and usability. UI (user interface) covers visuals: typography, colors, components. Both are inseparable in a good product.",
        },
        {
          question: "Do you offer UX audits for existing products?",
          answer:
            "Yes. We perform full UX audits with heuristic analysis, user tests and prioritized recommendations. Ideal before a redesign.",
        },
        {
          question: "Do you work with external development teams?",
          answer:
            "Absolutely. We deliver documented design systems, detailed specs and structured Figma files to facilitate collaboration with any tech team.",
        },
        {
          question: "How long does a UX/UI project take in Liège?",
          answer:
            "A UX audit takes 1 to 2 weeks. A full interface redesign takes 4 to 8 weeks depending on scope.",
        },
      ],
      cta: {
        heading: "Design that makes a difference",
        subtext:
          "Let's talk about your product. We'll identify friction points and opportunities together.",
      },
    },

    /* ------------------------------------------------------------------
     * branding-identite
     * ---------------------------------------------------------------- */
    "branding-identite": {
      metaTitle: "Branding & Visual Identity in Liège | P-XEL Studio",
      metaDescription:
        "Branding and visual identity in Liège. Logo, art direction, visual systems. A premium brand that sets you apart.",
      hero: {
        label: "Branding",
        heading: "Branding and visual identity in Liège",
        subtext:
          "A strong brand is more than a logo. Art direction, visual system, brand territory. Everything you need to stand out.",
      },
      localContext: {
        label: "Local context",
        heading: "Building a strong brand from Liège",
        paragraphs: [
          "The Liège business landscape is dense and competitive. Standing out visually is not a luxury, it is a necessity. A coherent, premium brand identity positions your company above the noise.",
          "P-XEL designs visual identities that work everywhere: on the web, in print, on social media, in signage. A complete brand system, not just a standalone logo.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why trust P-XEL in Liège with your branding",
        points: [
          {
            title: "Product vision, not just graphics",
            body: "We think of your brand as a system. Logo, typography, colors, iconography: every element has a function and coherence.",
          },
          {
            title: "Premium execution",
            body: "We don't deliver a PDF with three logo variants. We deliver a complete brand book, usable source files and a visual system ready to deploy.",
          },
          {
            title: "Digital continuity",
            body: "Your identity is designed to live online. We ensure consistency between your brand and your web presence, from the first pixel to the last component.",
          },
        ],
      },
      faq: [
        {
          question: "What does a branding project with P-XEL include?",
          answer:
            "Strategic analysis, art direction, logo creation, typographic system, color palette, iconography, brand book and source files. Exact scope depends on your needs.",
        },
        {
          question: "How much does a visual identity cost in Liège?",
          answer:
            "A complete identity starts around EUR 3,500. A project including brand strategy and an extended visual system can go beyond EUR 8,000.",
        },
        {
          question: "Can you modernize an existing identity without starting from scratch?",
          answer:
            "Yes. We audit your current brand and propose an evolution that preserves your recognition capital while making it more contemporary and coherent.",
        },
        {
          question: "How long does a visual identity take to deliver?",
          answer:
            "Expect 3 to 6 weeks for a complete identity. We work in phases with intermediate validations to move fast without sacrificing quality.",
        },
      ],
      cta: {
        heading: "A brand that matches your ambitions",
        subtext:
          "Let's take 30 minutes to understand your positioning and define the direction.",
      },
    },

    /* ------------------------------------------------------------------
     * ai-studio
     * ---------------------------------------------------------------- */
    "ai-studio": {
      metaTitle: "AI Studio in Liège | P-XEL Studio",
      metaDescription:
        "AI integration in Liège. Automation, smart workflows, AI built into your products. Concrete results, not buzzwords.",
      hero: {
        label: "AI Studio",
        heading: "AI integration and automation in Liège",
        subtext:
          "AI in service of your products and processes. Not gimmicks, measurable gains. Automation, generation, intelligent analysis.",
      },
      localContext: {
        label: "Local context",
        heading: "Applied AI for the Liège business landscape",
        paragraphs: [
          "Artificial intelligence is no longer reserved for tech giants. Liège SMEs and startups can leverage AI to automate repetitive tasks, enrich their products and make better decisions. The potential is enormous, but execution matters more than promises.",
          "P-XEL integrates AI directly into concrete products and workflows. We don't sell impressive demos that don't survive production. We deliver solutions that work day in, day out.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why choose P-XEL for AI in Liège",
        points: [
          {
            title: "Product-oriented AI",
            body: "We integrate AI into real products, not into proof of concepts that end up in a drawer. Every integration serves a clear business objective.",
          },
          {
            title: "Full-stack expertise",
            body: "AI alone is not enough. We master the entire chain: design, development, deployment. Your AI solution is integrated, not cobbled together.",
          },
          {
            title: "Pragmatism first",
            body: "We honestly assess whether AI is the right answer to your problem. Sometimes a well-designed automated workflow is enough. We recommend what works, not what shines.",
          },
        ],
      },
      faq: [
        {
          question: "What types of AI projects do you deliver in Liège?",
          answer:
            "Business process automation, intelligent chatbots, content generation, data analysis, AI API integration (OpenAI, Claude, etc.) into existing products.",
        },
        {
          question: "Do I need a lot of data to start an AI project?",
          answer:
            "Not necessarily. Many use cases rely on pre-trained models (LLMs, vision, etc.) that work without proprietary datasets. We assess your situation and recommend the right approach.",
        },
        {
          question: "How much does an AI integration project cost in Liège?",
          answer:
            "A first automated workflow can start around EUR 5,000. A more complex AI integration into an existing product ranges between EUR 10,000 and 25,000.",
        },
        {
          question: "Will AI replace my team?",
          answer:
            "No. The goal is to augment your team's capabilities, not replace it. We automate repetitive tasks so your people can focus on what brings the most value.",
        },
      ],
      cta: {
        heading: "Unlock AI's potential in Liège",
        subtext:
          "Tell us your use case. We'll tell you in 30 minutes what's realistic and profitable.",
      },
    },
  },
};

export function getLiegeCityService(
  slug: ServiceSlug,
  locale: Locale,
): CityServiceContent {
  return content[locale][slug];
}
