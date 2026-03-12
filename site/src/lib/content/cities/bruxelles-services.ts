import type { Locale } from "@/lib/i18n/config";
import type { CityServiceContent, ServiceSlug } from "./types";

/* ------------------------------------------------------------------ */
/*  Bruxelles / Brussels – city-service cluster content               */
/* ------------------------------------------------------------------ */

const content: Record<Locale, Record<ServiceSlug, CityServiceContent>> = {
  /* ================================================================ */
  /*  FR                                                              */
  /* ================================================================ */
  fr: {
    /* -------------------------------------------------------------- */
    /*  creation-site-web                                             */
    /* -------------------------------------------------------------- */
    "creation-site-web": {
      metaTitle: "Création de Site Web à Bruxelles | P-XEL Studio",
      metaDescription:
        "Site web performant pour entreprises bruxelloises. Next.js, SEO technique, landing pages et e-commerce. Studio senior basé à Liège, livraison rapide.",
      hero: {
        label: "Bruxelles",
        heading: "Création de site web à Bruxelles",
        subtext:
          "Des sites rapides, optimisés SEO et conçus pour convertir. Un interlocuteur senior, pas une chaîne de production.",
      },
      localContext: {
        label: "Le contexte bruxellois",
        heading: "Pourquoi votre site web doit être irréprochable à Bruxelles",
        paragraphs: [
          "Bruxelles concentre des milliers d'entreprises, de startups et d'institutions internationales. La compétition en ligne y est intense : un site lent, mal référencé ou mal structuré passe inaperçu.",
          "Les décideurs bruxellois comparent. Ils vérifient votre crédibilité en quelques secondes. Votre site doit charger vite, afficher un message clair et inspirer confiance immédiatement.",
          "Que vous visiez le marché local, le marché belge ou l'international depuis Bruxelles, un site techniquement solide et visuellement premium est votre meilleur commercial.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi choisir P-XEL pour votre site web à Bruxelles",
        points: [
          {
            title: "Expertise senior sans tarif capitale",
            body: "Les grandes agences bruxelloises facturent leur adresse. Chez P-XEL, vous travaillez directement avec un designer-développeur senior, sans intermédiaire ni surcoût lié au code postal.",
          },
          {
            title: "Performance et SEO intégrés dès le départ",
            body: "Chaque site est construit sur Next.js avec un score Lighthouse élevé, un balisage Schema.org et une architecture pensée pour le référencement. Pas de corrections après coup.",
          },
          {
            title: "Livraison rapide, communication directe",
            body: "Un seul interlocuteur, des délais tenus et une communication sans friction. Basé à Liège, disponible à Bruxelles en moins d'une heure.",
          },
        ],
      },
      faq: [
        {
          question: "Travaillez-vous sur place à Bruxelles ?",
          answer:
            "P-XEL est basé à Liège mais intervient régulièrement à Bruxelles. Les réunions se font en présentiel quand nécessaire, et le reste du projet avance en communication directe et asynchrone.",
        },
        {
          question: "Combien coûte un site web professionnel à Bruxelles ?",
          answer:
            "Un site vitrine démarre à partir de 3 000 EUR. Un site e-commerce ou sur mesure dépend du périmètre. Le tarif P-XEL reste compétitif face aux agences bruxelloises grâce à une structure légère et senior.",
        },
        {
          question: "En combien de temps livrez-vous un site ?",
          answer:
            "Un site vitrine est livré en 3 à 5 semaines. Un projet plus complexe prend 6 à 10 semaines. Les délais sont fixés dès le brief et respectés.",
        },
        {
          question: "Mon site sera-t-il bien référencé sur Google à Bruxelles ?",
          answer:
            "Oui. Le SEO technique est intégré nativement : structure sémantique, vitesse, balisage structuré, maillage interne. Le contenu est optimisé pour les recherches locales bruxelloises.",
        },
      ],
      cta: {
        heading: "Un site web qui travaille pour vous à Bruxelles",
        subtext:
          "Réservez un appel stratégique de 30 minutes. On analyse votre projet et on vous montre exactement ce qu'on peut livrer.",
      },
    },

    /* -------------------------------------------------------------- */
    /*  application-web-mvp                                           */
    /* -------------------------------------------------------------- */
    "application-web-mvp": {
      metaTitle: "Application Web & MVP à Bruxelles | P-XEL Studio",
      metaDescription:
        "Développement d'applications web et MVP pour startups et entreprises à Bruxelles. Architecture moderne, lancement rapide. Studio senior basé à Liège.",
      hero: {
        label: "Bruxelles",
        heading: "Application web et MVP à Bruxelles",
        subtext:
          "Du concept au produit fonctionnel. On conçoit et livre votre application web ou MVP avec une approche produit, pas une approche agence.",
      },
      localContext: {
        label: "Le contexte bruxellois",
        heading: "Bruxelles, terrain fertile pour les produits digitaux",
        paragraphs: [
          "Bruxelles abrite un écosystème startup dense, des incubateurs comme Co.Station et Startit, et un tissu corporate en pleine transformation digitale. Lancer un MVP ici, c'est accéder à un marché test bilingue et connecté à l'Europe.",
          "Mais les agences bruxelloises traditionnelles ne pensent pas produit. Elles vendent des heures. P-XEL pense en fonctionnalités livrées, en itérations rapides et en résultat mesurable.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi confier votre MVP à P-XEL plutôt qu'à une agence bruxelloise",
        points: [
          {
            title: "Approche produit, pas approche projet",
            body: "On ne livre pas des écrans, on livre un produit qui fonctionne. UX, UI, développement et lancement sont pensés comme un tout cohérent, pas comme des phases facturées séparément.",
          },
          {
            title: "Vitesse d'exécution",
            body: "Un MVP fonctionnel en 4 à 8 semaines. On priorise les fonctionnalités qui valident votre hypothèse business, pas celles qui gonflent le devis.",
          },
          {
            title: "Un senior de bout en bout",
            body: "Pas de junior assigné à votre projet. Un seul interlocuteur senior qui comprend le design, le code et la stratégie produit.",
          },
        ],
      },
      faq: [
        {
          question: "Quelle technologie utilisez-vous pour les applications web ?",
          answer:
            "Next.js, React, TypeScript et des bases de données modernes (PostgreSQL, Supabase). L'architecture est choisie en fonction du produit, pas en fonction de la mode.",
        },
        {
          question: "Pouvez-vous accompagner une startup bruxelloise dès l'idée ?",
          answer:
            "Oui. On intervient dès la phase de cadrage : validation du concept, définition du périmètre MVP, wireframes, design et développement. Un seul partenaire pour aller de l'idée au produit.",
        },
        {
          question: "Combien coûte un MVP à Bruxelles ?",
          answer:
            "Un MVP démarre généralement entre 8 000 et 20 000 EUR selon la complexité. On définit ensemble le périmètre minimal pour valider votre marché sans exploser le budget.",
        },
        {
          question: "Que se passe-t-il après le lancement du MVP ?",
          answer:
            "On peut continuer en itérations pour ajouter des fonctionnalités, ou vous transmettre le code proprement documenté. Le projet vous appartient, sans dépendance.",
        },
      ],
      cta: {
        heading: "Lancez votre produit digital depuis Bruxelles",
        subtext:
          "30 minutes pour cadrer votre MVP. On identifie le périmètre minimal et le planning de livraison.",
      },
    },

    /* -------------------------------------------------------------- */
    /*  ux-ui-design                                                  */
    /* -------------------------------------------------------------- */
    "ux-ui-design": {
      metaTitle: "UX/UI Design à Bruxelles | P-XEL Studio",
      metaDescription:
        "Design UX/UI pour produits digitaux à Bruxelles. Recherche utilisateur, prototypage, design systems. Studio senior, approche produit concrète.",
      hero: {
        label: "Bruxelles",
        heading: "UX/UI design à Bruxelles",
        subtext:
          "Un design qui résout des problèmes réels. Recherche utilisateur, interfaces premium et design systems construits pour durer.",
      },
      localContext: {
        label: "Le contexte bruxellois",
        heading: "Le design UX/UI à Bruxelles exige de la substance",
        paragraphs: [
          "Le marché bruxellois est exigeant. Les entreprises et institutions présentes dans la capitale attendent un design qui va au-delà de l'esthétique : il doit améliorer des métriques, simplifier des parcours et servir des objectifs business concrets.",
          "Beaucoup d'agences bruxelloises livrent des maquettes jolies mais déconnectées de la réalité technique. P-XEL conçoit des interfaces qui sont construites pour être développées, pas juste présentées en réunion.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi choisir P-XEL pour le design UX/UI à Bruxelles",
        points: [
          {
            title: "Design ancré dans le produit",
            body: "Chaque décision de design est prise en connaissance des contraintes techniques et business. Pas de concepts irréalisables, pas de friction entre design et développement.",
          },
          {
            title: "Recherche utilisateur pragmatique",
            body: "On valide les hypothèses avec des tests utilisateurs ciblés et des données réelles, pas avec des personas fictifs de 40 pages.",
          },
          {
            title: "Design systems réutilisables",
            body: "On livre des systèmes de composants cohérents et documentés, prêts à scaler. Votre équipe peut itérer sans repartir de zéro à chaque feature.",
          },
        ],
      },
      faq: [
        {
          question: "Faites-vous de la recherche UX pour le marché bruxellois ?",
          answer:
            "Oui. On conduit des interviews, des tests d'utilisabilité et des analyses de parcours adaptés à votre audience bruxelloise, qu'elle soit B2B, B2C ou institutionnelle.",
        },
        {
          question: "Livrez-vous un design system complet ?",
          answer:
            "Selon le projet, on livre un design system Figma avec composants, tokens et guidelines. Il est pensé pour le handoff développeur et l'évolutivité du produit.",
        },
        {
          question: "Pouvez-vous redesigner une application existante ?",
          answer:
            "Oui. On audite l'existant, identifie les points de friction et propose un redesign par étapes, avec des gains mesurables à chaque itération.",
        },
        {
          question: "Travaillez-vous avec des équipes produit internes à Bruxelles ?",
          answer:
            "Régulièrement. On s'intègre dans les workflows existants (Figma, Jira, Notion) et on collabore directement avec les développeurs et product managers de votre équipe.",
        },
      ],
      cta: {
        heading: "Un design qui fait la différence à Bruxelles",
        subtext:
          "Réservez un appel de 30 minutes. On analyse votre produit et on identifie les leviers UX/UI prioritaires.",
      },
    },

    /* -------------------------------------------------------------- */
    /*  branding-identite                                             */
    /* -------------------------------------------------------------- */
    "branding-identite": {
      metaTitle: "Branding & Identité Visuelle à Bruxelles | P-XEL Studio",
      metaDescription:
        "Identité visuelle et branding pour entreprises à Bruxelles. Logo, direction artistique, système de marque. Studio senior, résultat premium.",
      hero: {
        label: "Bruxelles",
        heading: "Branding et identité visuelle à Bruxelles",
        subtext:
          "Une identité de marque distinctive qui marque les esprits. Logo, direction artistique et système visuel complet.",
      },
      localContext: {
        label: "Le contexte bruxellois",
        heading: "À Bruxelles, votre marque doit se démarquer immédiatement",
        paragraphs: [
          "Bruxelles est saturée de marques. Institutions européennes, multinationales, startups, agences : le bruit visuel est permanent. Une identité générique se noie en quelques secondes.",
          "Les entreprises bruxelloises qui réussissent investissent dans une marque qui dit quelque chose de précis. Pas un logo décoratif, mais un système visuel qui porte une promesse claire et se décline sur tous les supports.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi confier votre branding à P-XEL à Bruxelles",
        points: [
          {
            title: "Vision produit, pas vision publicitaire",
            body: "P-XEL conçoit des identités pensées pour le digital d'abord : interfaces, réseaux sociaux, présentations. Pas des logos conçus pour un panneau 4x3 et adaptés ensuite.",
          },
          {
            title: "Système de marque, pas juste un logo",
            body: "On livre un système complet : logo, typographie, palette, grille, iconographie, guidelines d'application. Tout est documenté et prêt à être utilisé par votre équipe.",
          },
          {
            title: "Tarif juste, résultat premium",
            body: "Pas de frais d'agence gonflés. Un processus clair, un interlocuteur senior et un livrable de qualité à un prix cohérent avec la réalité du marché belge.",
          },
        ],
      },
      faq: [
        {
          question: "Créez-vous des identités visuelles pour des startups bruxelloises ?",
          answer:
            "Oui. On a accompagné des startups dès leur phase de lancement avec des identités qui tiennent la route sur le long terme, pas des solutions jetables.",
        },
        {
          question: "Que comprend un projet de branding complet ?",
          answer:
            "Stratégie de positionnement, conception du logo, palette de couleurs, typographie, iconographie, templates de base et un brandbook complet. Le périmètre exact est défini au brief.",
        },
        {
          question: "Pouvez-vous moderniser une identité existante ?",
          answer:
            "Oui. On peut faire évoluer votre identité sans perdre l'existant : raffinement du logo, mise à jour de la palette, création d'un design system cohérent à partir de l'existant.",
        },
        {
          question: "Combien de temps prend un projet de branding ?",
          answer:
            "Entre 3 et 6 semaines selon le périmètre. Le processus est structuré : brief, exploration, proposition, raffinement, livraison.",
        },
      ],
      cta: {
        heading: "Une marque qui se distingue à Bruxelles",
        subtext:
          "Réservez un appel stratégique. On évalue votre positionnement et on définit le périmètre de votre identité.",
      },
    },

    /* -------------------------------------------------------------- */
    /*  ai-studio                                                     */
    /* -------------------------------------------------------------- */
    "ai-studio": {
      metaTitle: "AI Studio à Bruxelles | P-XEL Studio",
      metaDescription:
        "Intégration IA et automatisation pour entreprises à Bruxelles. Workflows intelligents, prototypage IA, intégration produit. Studio senior à Liège.",
      hero: {
        label: "Bruxelles",
        heading: "AI Studio à Bruxelles",
        subtext:
          "L'intelligence artificielle intégrée dans vos produits et workflows. Pas de gadgets, des gains concrets et mesurables.",
      },
      localContext: {
        label: "Le contexte bruxellois",
        heading: "Bruxelles face à l'accélération de l'IA",
        paragraphs: [
          "Bruxelles est au coeur de la régulation européenne de l'IA, mais c'est aussi une ville où les entreprises doivent adopter ces technologies pour rester compétitives. Le fossé se creuse entre celles qui intègrent l'IA dans leurs opérations et celles qui attendent.",
          "Le problème : la majorité des offres IA à Bruxelles viennent de consultants théoriques ou de grandes ESN qui facturent des audits sans livrer de résultat concret. P-XEL livre des solutions fonctionnelles, intégrées dans vos produits existants.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Pourquoi choisir P-XEL pour l'IA à Bruxelles",
        points: [
          {
            title: "IA appliquée, pas IA théorique",
            body: "On ne vend pas des slides sur l'IA. On intègre des modèles de langage, de la génération de contenu et de l'automatisation directement dans vos outils et produits.",
          },
          {
            title: "Prototypage rapide",
            body: "Un premier prototype fonctionnel en quelques jours. On valide la faisabilité et la valeur ajoutée avant d'investir dans un développement complet.",
          },
          {
            title: "Vision produit intégrée",
            body: "L'IA n'est pas un module séparé. On l'intègre dans le flux utilisateur de manière naturelle, avec une UX pensée pour que l'utilisateur en tire un bénéfice réel.",
          },
        ],
      },
      faq: [
        {
          question: "Quels types de projets IA réalisez-vous pour des entreprises bruxelloises ?",
          answer:
            "Automatisation de workflows, chatbots intelligents, génération de contenu, extraction de données, intégration d'API IA dans des applications existantes. Chaque projet part d'un besoin business précis.",
        },
        {
          question: "Faut-il un gros budget pour intégrer l'IA ?",
          answer:
            "Non. Un premier workflow automatisé ou un prototype IA peut démarrer à partir de 3 000 EUR. On commence petit, on mesure le retour, et on étend si le résultat est là.",
        },
        {
          question: "Comment gérez-vous la conformité RGPD et AI Act ?",
          answer:
            "On conçoit chaque solution en tenant compte des exigences de confidentialité et de transparence. Les données sensibles restent sous votre contrôle et on documente les choix techniques liés à la conformité.",
        },
        {
          question: "Pouvez-vous former notre équipe à Bruxelles ?",
          answer:
            "Oui. On propose des sessions de formation pratique pour que votre équipe comprenne et utilise les outils IA intégrés. Pas de théorie abstraite, des cas d'usage concrets.",
        },
      ],
      cta: {
        heading: "Intégrez l'IA dans votre business à Bruxelles",
        subtext:
          "Un appel de 30 minutes pour identifier le premier cas d'usage IA à fort impact dans votre entreprise.",
      },
    },
  },

  /* ================================================================ */
  /*  EN                                                              */
  /* ================================================================ */
  en: {
    /* -------------------------------------------------------------- */
    /*  creation-site-web                                             */
    /* -------------------------------------------------------------- */
    "creation-site-web": {
      metaTitle: "Website Creation in Brussels | P-XEL Studio",
      metaDescription:
        "High-performance websites for Brussels businesses. Next.js, technical SEO, landing pages and e-commerce. Senior studio based in Liege, fast delivery.",
      hero: {
        label: "Brussels",
        heading: "Website creation in Brussels",
        subtext:
          "Fast, SEO-optimized websites built to convert. One senior point of contact, not a production line.",
      },
      localContext: {
        label: "The Brussels context",
        heading: "Why your website must be flawless in Brussels",
        paragraphs: [
          "Brussels hosts thousands of businesses, startups and international institutions. Online competition is fierce: a slow, poorly ranked or badly structured site goes unnoticed.",
          "Brussels decision-makers compare. They assess your credibility in seconds. Your site needs to load fast, display a clear message and inspire trust immediately.",
          "Whether you target the local market, the Belgian market or international audiences from Brussels, a technically solid and visually premium website is your best salesperson.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why choose P-XEL for your website in Brussels",
        points: [
          {
            title: "Senior expertise without capital-city pricing",
            body: "Large Brussels agencies charge for their address. With P-XEL, you work directly with a senior designer-developer. No middlemen, no postcode markup.",
          },
          {
            title: "Performance and SEO built in from day one",
            body: "Every site is built on Next.js with high Lighthouse scores, Schema.org markup and an architecture designed for search rankings. No afterthought fixes.",
          },
          {
            title: "Fast delivery, direct communication",
            body: "One point of contact, deadlines met and frictionless communication. Based in Liege, available in Brussels in under an hour.",
          },
        ],
      },
      faq: [
        {
          question: "Do you work on-site in Brussels?",
          answer:
            "P-XEL is based in Liege but regularly works in Brussels. In-person meetings happen when needed, and the rest of the project runs through direct, asynchronous communication.",
        },
        {
          question: "How much does a professional website cost in Brussels?",
          answer:
            "A brochure website starts from EUR 3,000. E-commerce or custom sites depend on scope. P-XEL remains competitive against Brussels agencies thanks to a lean, senior structure.",
        },
        {
          question: "How fast can you deliver a website?",
          answer:
            "A brochure site is delivered in 3 to 5 weeks. More complex projects take 6 to 10 weeks. Timelines are set at the brief stage and respected.",
        },
        {
          question: "Will my site rank well on Google in Brussels?",
          answer:
            "Yes. Technical SEO is built in natively: semantic structure, speed, structured data, internal linking. Content is optimized for Brussels-specific local searches.",
        },
      ],
      cta: {
        heading: "A website that works for you in Brussels",
        subtext:
          "Book a 30-minute strategy call. We analyze your project and show you exactly what we can deliver.",
      },
    },

    /* -------------------------------------------------------------- */
    /*  application-web-mvp                                           */
    /* -------------------------------------------------------------- */
    "application-web-mvp": {
      metaTitle: "Web Application & MVP in Brussels | P-XEL Studio",
      metaDescription:
        "Web app and MVP development for startups and businesses in Brussels. Modern architecture, fast launch. Senior studio based in Liege.",
      hero: {
        label: "Brussels",
        heading: "Web application and MVP in Brussels",
        subtext:
          "From concept to working product. We design and ship your web app or MVP with a product mindset, not an agency mindset.",
      },
      localContext: {
        label: "The Brussels context",
        heading: "Brussels: fertile ground for digital products",
        paragraphs: [
          "Brussels hosts a dense startup ecosystem, incubators like Co.Station and Startit, and a corporate landscape undergoing deep digital transformation. Launching an MVP here means accessing a bilingual test market connected to Europe.",
          "But traditional Brussels agencies do not think product. They sell hours. P-XEL thinks in shipped features, fast iterations and measurable outcomes.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why trust P-XEL with your MVP over a Brussels agency",
        points: [
          {
            title: "Product approach, not project approach",
            body: "We do not deliver screens. We deliver a working product. UX, UI, development and launch are treated as one coherent whole, not separately billed phases.",
          },
          {
            title: "Speed of execution",
            body: "A working MVP in 4 to 8 weeks. We prioritize features that validate your business hypothesis, not ones that inflate the quote.",
          },
          {
            title: "One senior, end to end",
            body: "No junior assigned to your project. One senior contact who understands design, code and product strategy.",
          },
        ],
      },
      faq: [
        {
          question: "What technology do you use for web applications?",
          answer:
            "Next.js, React, TypeScript and modern databases (PostgreSQL, Supabase). Architecture choices are driven by the product, not by trends.",
        },
        {
          question: "Can you support a Brussels startup from the idea stage?",
          answer:
            "Yes. We step in from the scoping phase: concept validation, MVP scope definition, wireframes, design and development. One partner from idea to product.",
        },
        {
          question: "How much does an MVP cost in Brussels?",
          answer:
            "An MVP generally starts between EUR 8,000 and EUR 20,000 depending on complexity. We define the minimal scope together to validate your market without blowing the budget.",
        },
        {
          question: "What happens after the MVP launch?",
          answer:
            "We can continue with iterations to add features, or hand over cleanly documented code. The project belongs to you, with no lock-in.",
        },
      ],
      cta: {
        heading: "Launch your digital product from Brussels",
        subtext:
          "30 minutes to scope your MVP. We identify the minimal scope and delivery timeline.",
      },
    },

    /* -------------------------------------------------------------- */
    /*  ux-ui-design                                                  */
    /* -------------------------------------------------------------- */
    "ux-ui-design": {
      metaTitle: "UX/UI Design in Brussels | P-XEL Studio",
      metaDescription:
        "UX/UI design for digital products in Brussels. User research, prototyping, design systems. Senior studio, concrete product approach.",
      hero: {
        label: "Brussels",
        heading: "UX/UI design in Brussels",
        subtext:
          "Design that solves real problems. User research, premium interfaces and design systems built to last.",
      },
      localContext: {
        label: "The Brussels context",
        heading: "UX/UI design in Brussels demands substance",
        paragraphs: [
          "The Brussels market is demanding. Businesses and institutions in the capital expect design that goes beyond aesthetics: it must improve metrics, simplify journeys and serve concrete business goals.",
          "Many Brussels agencies deliver beautiful mockups disconnected from technical reality. P-XEL designs interfaces that are built to be developed, not just presented in meetings.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why choose P-XEL for UX/UI design in Brussels",
        points: [
          {
            title: "Design grounded in the product",
            body: "Every design decision is made with full awareness of technical and business constraints. No unrealistic concepts, no friction between design and development.",
          },
          {
            title: "Pragmatic user research",
            body: "We validate hypotheses with targeted user tests and real data, not with 40-page fictional personas.",
          },
          {
            title: "Reusable design systems",
            body: "We deliver coherent, documented component systems ready to scale. Your team can iterate without starting from scratch for every feature.",
          },
        ],
      },
      faq: [
        {
          question: "Do you conduct UX research for the Brussels market?",
          answer:
            "Yes. We run interviews, usability tests and journey analyses tailored to your Brussels audience, whether B2B, B2C or institutional.",
        },
        {
          question: "Do you deliver a full design system?",
          answer:
            "Depending on the project, we deliver a Figma design system with components, tokens and guidelines. It is built for developer handoff and product scalability.",
        },
        {
          question: "Can you redesign an existing application?",
          answer:
            "Yes. We audit the existing product, identify friction points and propose a phased redesign with measurable gains at each iteration.",
        },
        {
          question: "Do you work with internal product teams in Brussels?",
          answer:
            "Regularly. We integrate into existing workflows (Figma, Jira, Notion) and collaborate directly with your developers and product managers.",
        },
      ],
      cta: {
        heading: "Design that makes a difference in Brussels",
        subtext:
          "Book a 30-minute call. We analyze your product and identify the highest-impact UX/UI levers.",
      },
    },

    /* -------------------------------------------------------------- */
    /*  branding-identite                                             */
    /* -------------------------------------------------------------- */
    "branding-identite": {
      metaTitle: "Branding & Visual Identity in Brussels | P-XEL Studio",
      metaDescription:
        "Visual identity and branding for Brussels businesses. Logo, art direction, brand systems. Senior studio, premium results.",
      hero: {
        label: "Brussels",
        heading: "Branding and visual identity in Brussels",
        subtext:
          "A distinctive brand identity that sticks. Logo, art direction and complete visual system.",
      },
      localContext: {
        label: "The Brussels context",
        heading: "In Brussels, your brand must stand out immediately",
        paragraphs: [
          "Brussels is saturated with brands. EU institutions, multinationals, startups, agencies: the visual noise is constant. A generic identity drowns in seconds.",
          "The Brussels businesses that succeed invest in a brand that says something specific. Not a decorative logo, but a visual system that carries a clear promise and works across every touchpoint.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why trust P-XEL with your branding in Brussels",
        points: [
          {
            title: "Product vision, not advertising vision",
            body: "P-XEL designs identities built for digital first: interfaces, social media, presentations. Not logos designed for a billboard and retrofitted afterwards.",
          },
          {
            title: "Brand system, not just a logo",
            body: "We deliver a complete system: logo, typography, palette, grid, iconography and application guidelines. Everything is documented and ready for your team to use.",
          },
          {
            title: "Fair pricing, premium output",
            body: "No inflated agency fees. A clear process, one senior contact and high-quality deliverables at a price that reflects the Belgian market reality.",
          },
        ],
      },
      faq: [
        {
          question: "Do you create visual identities for Brussels startups?",
          answer:
            "Yes. We have supported startups from their launch phase with identities built to last, not throwaway solutions.",
        },
        {
          question: "What does a full branding project include?",
          answer:
            "Positioning strategy, logo design, color palette, typography, iconography, base templates and a complete brand book. The exact scope is defined at the brief stage.",
        },
        {
          question: "Can you modernize an existing identity?",
          answer:
            "Yes. We can evolve your identity without losing what works: logo refinement, palette update, creation of a coherent design system from existing assets.",
        },
        {
          question: "How long does a branding project take?",
          answer:
            "Between 3 and 6 weeks depending on scope. The process is structured: brief, exploration, proposal, refinement, delivery.",
        },
      ],
      cta: {
        heading: "A brand that stands out in Brussels",
        subtext:
          "Book a strategy call. We assess your positioning and define the scope of your identity.",
      },
    },

    /* -------------------------------------------------------------- */
    /*  ai-studio                                                     */
    /* -------------------------------------------------------------- */
    "ai-studio": {
      metaTitle: "AI Studio in Brussels | P-XEL Studio",
      metaDescription:
        "AI integration and automation for Brussels businesses. Smart workflows, AI prototyping, product integration. Senior studio based in Liege.",
      hero: {
        label: "Brussels",
        heading: "AI Studio in Brussels",
        subtext:
          "Artificial intelligence integrated into your products and workflows. No gimmicks, just concrete, measurable gains.",
      },
      localContext: {
        label: "The Brussels context",
        heading: "Brussels facing the AI acceleration",
        paragraphs: [
          "Brussels sits at the heart of European AI regulation, but it is also a city where businesses must adopt these technologies to stay competitive. The gap is widening between those integrating AI into their operations and those still waiting.",
          "The problem: most AI offerings in Brussels come from theoretical consultants or large service firms that bill for audits without delivering concrete results. P-XEL ships working solutions integrated into your existing products.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Why choose P-XEL for AI in Brussels",
        points: [
          {
            title: "Applied AI, not theoretical AI",
            body: "We do not sell slides about AI. We integrate language models, content generation and automation directly into your tools and products.",
          },
          {
            title: "Rapid prototyping",
            body: "A first working prototype in days. We validate feasibility and added value before investing in full-scale development.",
          },
          {
            title: "Integrated product vision",
            body: "AI is not a separate module. We embed it into the user flow naturally, with UX designed so users get real benefit from it.",
          },
        ],
      },
      faq: [
        {
          question: "What types of AI projects do you build for Brussels businesses?",
          answer:
            "Workflow automation, intelligent chatbots, content generation, data extraction, AI API integration into existing applications. Every project starts from a specific business need.",
        },
        {
          question: "Do you need a large budget to integrate AI?",
          answer:
            "No. A first automated workflow or AI prototype can start from EUR 3,000. We start small, measure the return, and expand if the results are there.",
        },
        {
          question: "How do you handle GDPR and AI Act compliance?",
          answer:
            "We design every solution with privacy and transparency requirements in mind. Sensitive data stays under your control and we document the technical choices related to compliance.",
        },
        {
          question: "Can you train our Brussels-based team?",
          answer:
            "Yes. We offer hands-on training sessions so your team understands and uses the integrated AI tools. No abstract theory, just concrete use cases.",
        },
      ],
      cta: {
        heading: "Integrate AI into your Brussels business",
        subtext:
          "A 30-minute call to identify the first high-impact AI use case in your company.",
      },
    },
  },
};

export function getBruxellesCityService(
  slug: ServiceSlug,
  locale: Locale,
): CityServiceContent {
  return content[locale][slug];
}
