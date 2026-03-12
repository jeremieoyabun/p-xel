import type { Locale } from "@/lib/i18n/config";
import type { CityServiceContent, ServiceSlug } from "./types";

const content: Record<Locale, Record<ServiceSlug, CityServiceContent>> = {
  fr: {
    "creation-site-web": {
      metaTitle: "Création de site web au Luxembourg | P-XEL Studio",
      metaDescription:
        "Sites web performants pour le marché luxembourgeois. Next.js, SEO, landing pages. Studio basé à Liège, interventions au Luxembourg.",
      hero: {
        label: "Sites web · Luxembourg",
        heading: "Création de site web au Luxembourg",
        subtext:
          "Des sites rapides, optimisés SEO et pensés conversion pour le marché luxembourgeois. Du site vitrine au e-commerce, livrés clé en main.",
      },
      localContext: {
        label: "Contexte local",
        heading: "Le web au Luxembourg exige de la rigueur",
        paragraphs: [
          "Le Luxembourg concentre un pouvoir d'achat parmi les plus élevés d'Europe. Les entreprises locales, qu'elles soient dans la finance, les services ou la tech, attendent un niveau de finition à la hauteur de leur positionnement. Un site générique ne suffit pas.",
          "Le marché luxembourgeois est aussi multilingue par nature. Français, anglais, allemand, luxembourgeois : un site performant ici doit parler à des audiences variées sans sacrifier la clarté ni le référencement.",
          "P-XEL conçoit des sites Next.js rapides, accessibles et optimisés pour le SEO. Chaque page est pensée pour convertir, pas juste pour exister.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Un studio belge, une qualité premium pour le Luxembourg",
        points: [
          {
            title: "Flexibilité transfrontalière",
            body: "Basés à Liège, à 1h30 du Luxembourg. On se déplace pour les réunions clés, on livre à distance le reste du temps. Le meilleur des deux mondes.",
          },
          {
            title: "Qualité belge, tarifs compétitifs",
            body: "Le même niveau d'exigence que les agences luxembourgeoises, sans les tarifs grand-duché. Vous investissez dans le produit, pas dans le loyer de Kirchberg.",
          },
          {
            title: "Expertise senior, sans intermédiaire",
            body: "Un interlocuteur unique avec 16+ ans d'expérience. Pas de junior caché, pas de sous-traitance. Votre projet est piloté du brief au déploiement.",
          },
        ],
      },
      faq: [
        {
          question:
            "Pouvez-vous créer un site multilingue pour le marché luxembourgeois ?",
          answer:
            "Oui. Nous livrons des sites multilingues (FR, EN, DE) avec un SEO optimisé par langue et un routing propre. C'est une compétence centrale pour le marché luxembourgeois.",
        },
        {
          question:
            "Travaillez-vous sur place au Luxembourg ou uniquement à distance ?",
          answer:
            "Les deux. Nous nous déplaçons au Luxembourg pour les ateliers stratégiques et les présentations clés. Le développement se fait depuis notre studio à Liège.",
        },
        {
          question:
            "Quel type de site web réalisez-vous pour des entreprises au Luxembourg ?",
          answer:
            "Sites vitrines premium, landing pages de conversion, plateformes e-commerce et portails métier. Toujours sur Next.js, toujours optimisés performance et SEO.",
        },
        {
          question: "Quels sont vos délais pour un site web complet ?",
          answer:
            "Entre 4 et 8 semaines selon la complexité. Nous travaillons en sprints courts avec des livrables visibles chaque semaine.",
        },
      ],
      cta: {
        heading: "Un site web à la hauteur du marché luxembourgeois",
        subtext:
          "Réservez un appel de 30 minutes. On évalue votre projet et on vous propose une approche concrète.",
      },
    },

    "application-web-mvp": {
      metaTitle: "Application web et MVP au Luxembourg | P-XEL Studio",
      metaDescription:
        "Développement d'applications web et MVP pour startups et entreprises au Luxembourg. SaaS, outils métier, prototypage rapide.",
      hero: {
        label: "Apps & MVP · Luxembourg",
        heading: "Applications web et MVP au Luxembourg",
        subtext:
          "Du prototype fonctionnel au produit SaaS complet. On conçoit et développe des applications web pour l'écosystème luxembourgeois.",
      },
      localContext: {
        label: "Contexte local",
        heading: "Le Luxembourg, hub fintech et innovation",
        paragraphs: [
          "Le Luxembourg est un terreau fertile pour la fintech, les fonds d'investissement et les startups à forte valeur ajoutée. L'écosystème exige des outils numériques sur mesure : portails clients, dashboards réglementaires, plateformes de gestion.",
          "Les institutions européennes basées au Luxembourg génèrent aussi une demande constante pour des applications métier robustes et sécurisées. Le niveau d'attente en termes de fiabilité et de conformité est élevé.",
          "P-XEL accompagne les entreprises luxembourgeoises dans la conception et le développement de leurs outils digitaux, du MVP validé en quelques semaines à l'application complète prête pour l'échelle.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Votre partenaire produit, de l'autre côté de la frontière",
        points: [
          {
            title: "Rapidité d'exécution",
            body: "MVP livré en 4 à 6 semaines. On valide vite, on itère vite. Idéal pour les startups luxembourgeoises qui doivent prouver leur concept avant la prochaine levée.",
          },
          {
            title: "Coût maîtrisé, qualité intacte",
            body: "Les tarifs de développement au Luxembourg sont parmi les plus élevés d'Europe. Travailler avec P-XEL depuis Liège, c'est accéder à la même qualité technique pour un budget optimisé.",
          },
          {
            title: "Vision produit, pas juste du code",
            body: "On ne se contente pas de développer. On challenge le concept, on structure le produit, on priorise les fonctionnalités qui comptent. Un vrai partenaire produit.",
          },
        ],
      },
      faq: [
        {
          question:
            "Développez-vous des applications pour le secteur financier luxembourgeois ?",
          answer:
            "Oui. Nous avons l'expérience des interfaces métier exigeantes : dashboards, portails clients, outils de reporting. Nous concevons des applications robustes et conformes aux attentes du secteur.",
        },
        {
          question: "En combien de temps livrez-vous un MVP fonctionnel ?",
          answer:
            "Entre 4 et 6 semaines pour un MVP avec les fonctionnalités essentielles. L'objectif : valider le concept auprès de vrais utilisateurs le plus rapidement possible.",
        },
        {
          question:
            "Pouvez-vous reprendre et améliorer une application existante ?",
          answer:
            "Oui. Audit technique, refonte UX, migration technologique : nous intervenons aussi sur des produits existants qui ont besoin d'un second souffle.",
        },
        {
          question:
            "Travaillez-vous avec des startups en phase d'amorçage au Luxembourg ?",
          answer:
            "Absolument. Nous accompagnons régulièrement des fondateurs qui ont besoin d'un premier produit solide pour convaincre investisseurs et premiers utilisateurs.",
        },
      ],
      cta: {
        heading: "Votre application, conçue et livrée",
        subtext:
          "Discutons de votre projet. 30 minutes pour évaluer la faisabilité et définir les prochaines étapes.",
      },
    },

    "ux-ui-design": {
      metaTitle: "UX/UI Design au Luxembourg | P-XEL Studio",
      metaDescription:
        "Design UX/UI pour entreprises luxembourgeoises. Recherche utilisateur, design systems, prototypage. Studio senior basé à Liège.",
      hero: {
        label: "UX/UI · Luxembourg",
        heading: "UX/UI Design au Luxembourg",
        subtext:
          "Des interfaces pensées pour vos utilisateurs. Recherche UX, design systems et prototypage pour les produits digitaux luxembourgeois.",
      },
      localContext: {
        label: "Contexte local",
        heading: "Au Luxembourg, l'expérience utilisateur est un avantage concurrentiel",
        paragraphs: [
          "Dans un marché où les attentes de qualité sont élevées, l'expérience utilisateur fait la différence. Les entreprises luxembourgeoises, notamment dans la finance et les services, ont besoin d'interfaces qui inspirent confiance et simplifient des parcours souvent complexes.",
          "Le multilinguisme ajoute une couche de complexité. Concevoir une interface qui fonctionne en trois langues sans surcharger l'utilisateur demande une expertise UX réelle, pas juste du design cosmétique.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Un regard senior sur vos interfaces",
        points: [
          {
            title: "Recherche avant le design",
            body: "On commence par comprendre vos utilisateurs, leurs contraintes et leurs parcours. Le design vient après la recherche, jamais avant.",
          },
          {
            title: "Design systems durables",
            body: "Pas de maquettes jetables. On construit des systèmes de design cohérents et réutilisables qui accompagnent votre produit dans le temps.",
          },
          {
            title: "Proximité sans surcoût",
            body: "Ateliers UX en présentiel au Luxembourg quand c'est utile, travail de production depuis Liège. Vous bénéficiez d'un accompagnement de proximité au tarif belge.",
          },
        ],
      },
      faq: [
        {
          question:
            "Réalisez-vous des audits UX pour des produits existants ?",
          answer:
            "Oui. Audit heuristique, tests utilisateurs, analyse de parcours. On identifie les points de friction et on propose des recommandations actionnables.",
        },
        {
          question:
            "Pouvez-vous animer des ateliers UX dans nos bureaux au Luxembourg ?",
          answer:
            "Oui, nous nous déplaçons régulièrement au Luxembourg pour les ateliers de cadrage, les sessions de co-design et les présentations de résultats.",
        },
        {
          question: "Livrez-vous des prototypes interactifs ?",
          answer:
            "Oui. Prototypes Figma interactifs testables par vos équipes et vos utilisateurs avant toute ligne de code.",
        },
        {
          question:
            "Concevez-vous des interfaces pour des applications métier complexes ?",
          answer:
            "C'est notre terrain de jeu. Dashboards financiers, portails de gestion, outils internes : on simplifie la complexité sans perdre la puissance fonctionnelle.",
        },
      ],
      cta: {
        heading: "Des interfaces qui font la différence",
        subtext:
          "Parlons de votre produit. On vous montre comment le design peut accélérer vos résultats.",
      },
    },

    "branding-identite": {
      metaTitle: "Branding et identité visuelle au Luxembourg | P-XEL Studio",
      metaDescription:
        "Branding premium pour entreprises luxembourgeoises. Logo, identité visuelle, direction artistique. Studio créatif basé à Liège.",
      hero: {
        label: "Branding · Luxembourg",
        heading: "Branding et identité visuelle au Luxembourg",
        subtext:
          "Une identité de marque distinctive pour vous démarquer sur le marché luxembourgeois. Logo, direction artistique, systèmes visuels.",
      },
      localContext: {
        label: "Contexte local",
        heading: "Au Luxembourg, votre marque doit inspirer confiance",
        paragraphs: [
          "Le marché luxembourgeois est exigeant. Les décideurs sont habitués à un niveau de qualité élevé, que ce soit dans la finance, le droit, le conseil ou la tech. Une identité visuelle approximative envoie le mauvais signal.",
          "Le Luxembourg est aussi un carrefour international. Votre marque doit fonctionner en contexte francophone, anglophone et germanophone, auprès de cultures différentes. Cela demande une direction artistique réfléchie et universelle.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "Du branding qui positionne, pas du décor",
        points: [
          {
            title: "Direction artistique stratégique",
            body: "On ne dessine pas un logo dans le vide. On part de votre positionnement, votre marché et vos ambitions pour construire une identité qui travaille pour vous.",
          },
          {
            title: "Systèmes de marque complets",
            body: "Logo, typographie, palette, guidelines, templates. Vous repartez avec un système cohérent applicable sur tous vos supports, du site web au pitch deck.",
          },
          {
            title: "Sensibilité premium, tarifs raisonnables",
            body: "P-XEL apporte une exigence visuelle de haut niveau, calibrée pour le marché luxembourgeois, à un positionnement tarifaire belge.",
          },
        ],
      },
      faq: [
        {
          question:
            "Réalisez-vous des refontes d'identité pour des marques établies au Luxembourg ?",
          answer:
            "Oui. Nous accompagnons aussi bien des créations de marque que des refontes complètes. Audit de l'existant, repositionnement, nouvelle direction artistique.",
        },
        {
          question: "Que comprend un projet de branding complet ?",
          answer:
            "Stratégie de marque, logo et déclinaisons, palette de couleurs, typographie, guidelines d'utilisation et templates principaux. Le tout livré dans un brand book structuré.",
        },
        {
          question:
            "Pouvez-vous créer une identité qui fonctionne en plusieurs langues ?",
          answer:
            "C'est essentiel pour le Luxembourg. Nous concevons des systèmes visuels qui restent cohérents et lisibles quelle que soit la langue utilisée.",
        },
        {
          question:
            "Combien de temps prend un projet de branding ?",
          answer:
            "Entre 3 et 6 semaines selon le périmètre. Chaque étape est validée avec vous avant de passer à la suivante.",
        },
      ],
      cta: {
        heading: "Une marque à la hauteur de vos ambitions",
        subtext:
          "Réservez un appel. On discute de votre positionnement et de ce que votre marque devrait projeter.",
      },
    },

    "ai-studio": {
      metaTitle: "AI Studio au Luxembourg | P-XEL Studio",
      metaDescription:
        "Intégration IA et automatisation pour entreprises luxembourgeoises. Workflows AI, outils sur mesure, produits augmentés. Studio à Liège.",
      hero: {
        label: "AI Studio · Luxembourg",
        heading: "AI Studio au Luxembourg",
        subtext:
          "Intégration IA dans vos produits et processus. Automatisation, workflows intelligents et outils augmentés pour le marché luxembourgeois.",
      },
      localContext: {
        label: "Contexte local",
        heading: "Le Luxembourg accélère sur l'IA",
        paragraphs: [
          "Le secteur financier luxembourgeois investit massivement dans l'automatisation et l'intelligence artificielle. Conformité, analyse de données, traitement documentaire : les cas d'usage sont concrets et les attentes sont élevées.",
          "Au-delà de la finance, les entreprises luxembourgeoises de toutes tailles cherchent à intégrer l'IA dans leurs produits et leurs opérations. Le défi n'est pas la technologie, c'est de trouver un partenaire qui comprend à la fois le produit et l'IA.",
          "P-XEL combine expertise produit et maîtrise des workflows IA pour livrer des solutions qui fonctionnent en production, pas juste en démo.",
        ],
      },
      whyHere: {
        label: "Pourquoi P-XEL",
        heading: "L'IA au service du produit, pas l'inverse",
        points: [
          {
            title: "Approche produit avant tout",
            body: "On ne vend pas de l'IA pour le buzz. On identifie où l'IA crée de la valeur réelle dans votre produit ou vos processus, puis on l'intègre proprement.",
          },
          {
            title: "Prototypage rapide, validation concrète",
            body: "Proof of concept en quelques semaines. Vous testez la valeur de l'IA sur vos vrais cas d'usage avant d'investir dans une solution complète.",
          },
          {
            title: "Proximité et confidentialité",
            body: "Pour les sujets sensibles du marché luxembourgeois, travailler avec un studio de proximité basé en Belgique offre un cadre de confiance et de conformité européenne.",
          },
        ],
      },
      faq: [
        {
          question:
            "Quels types de solutions IA développez-vous pour le marché luxembourgeois ?",
          answer:
            "Automatisation documentaire, analyse de données, chatbots métier, workflows intelligents, intégration LLM dans des produits existants. Toujours sur mesure, toujours orienté résultat.",
        },
        {
          question:
            "Pouvez-vous intégrer de l'IA dans une application existante ?",
          answer:
            "Oui. Audit de votre produit, identification des opportunités IA, intégration progressive. Pas besoin de tout reconstruire.",
        },
        {
          question: "Comment gérez-vous la confidentialité des données ?",
          answer:
            "Hébergement européen, conformité RGPD, architecture sécurisée. Pour les données sensibles, nous proposons des déploiements privés sans transit vers des services tiers.",
        },
        {
          question: "En combien de temps peut-on voir un premier résultat ?",
          answer:
            "Un proof of concept fonctionnel en 2 à 4 semaines. L'objectif est de valider la valeur business avant d'engager un développement complet.",
        },
      ],
      cta: {
        heading: "L'IA comme levier, pas comme gadget",
        subtext:
          "Explorons ensemble les opportunités IA pour votre entreprise. 30 minutes pour identifier les cas d'usage à fort impact.",
      },
    },
  },

  en: {
    "creation-site-web": {
      metaTitle: "Website Creation in Luxembourg | P-XEL Studio",
      metaDescription:
        "High-performance websites for the Luxembourg market. Next.js, SEO, landing pages. Studio based in Liege, serving Luxembourg.",
      hero: {
        label: "Websites · Luxembourg",
        heading: "Website Creation in Luxembourg",
        subtext:
          "Fast, SEO-optimised, conversion-driven websites for the Luxembourg market. From corporate sites to e-commerce, delivered turnkey.",
      },
      localContext: {
        label: "Local context",
        heading: "The Luxembourg web demands precision",
        paragraphs: [
          "Luxembourg has one of the highest purchasing powers in Europe. Local businesses in finance, services, and tech expect a level of polish that matches their positioning. A generic website falls short.",
          "The Luxembourg market is inherently multilingual. French, English, German, Luxembourgish: a performant website here must speak to diverse audiences without sacrificing clarity or search rankings.",
          "P-XEL builds fast Next.js websites that are accessible and SEO-optimised. Every page is designed to convert, not just to exist.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "A Belgian studio, premium quality for Luxembourg",
        points: [
          {
            title: "Cross-border flexibility",
            body: "Based in Liege, 1.5 hours from Luxembourg. We travel for key meetings and deliver remotely the rest of the time. Best of both worlds.",
          },
          {
            title: "Belgian quality, competitive rates",
            body: "The same level of craft as Luxembourg agencies, without the Grand Duchy price tag. Your budget goes into the product, not into Kirchberg rent.",
          },
          {
            title: "Senior expertise, no middlemen",
            body: "One senior contact with 16+ years of experience. No hidden juniors, no outsourcing. Your project is guided from brief to deployment.",
          },
        ],
      },
      faq: [
        {
          question:
            "Can you build a multilingual website for the Luxembourg market?",
          answer:
            "Yes. We deliver multilingual sites (FR, EN, DE) with per-language SEO and clean routing. This is a core skill for the Luxembourg market.",
        },
        {
          question:
            "Do you work on-site in Luxembourg or only remotely?",
          answer:
            "Both. We travel to Luxembourg for strategic workshops and key presentations. Development happens from our studio in Liege.",
        },
        {
          question:
            "What types of websites do you build for Luxembourg companies?",
          answer:
            "Premium corporate sites, conversion landing pages, e-commerce platforms, and business portals. Always on Next.js, always optimised for performance and SEO.",
        },
        {
          question: "What is your typical timeline for a full website?",
          answer:
            "Between 4 and 8 weeks depending on complexity. We work in short sprints with visible deliverables each week.",
        },
      ],
      cta: {
        heading: "A website that matches the Luxembourg standard",
        subtext:
          "Book a 30-minute call. We assess your project and propose a concrete approach.",
      },
    },

    "application-web-mvp": {
      metaTitle: "Web Application & MVP in Luxembourg | P-XEL Studio",
      metaDescription:
        "Web app and MVP development for Luxembourg startups and companies. SaaS, business tools, rapid prototyping. Studio in Liege.",
      hero: {
        label: "Apps & MVP · Luxembourg",
        heading: "Web Applications & MVPs in Luxembourg",
        subtext:
          "From functional prototype to full SaaS product. We design and develop web applications for the Luxembourg ecosystem.",
      },
      localContext: {
        label: "Local context",
        heading: "Luxembourg, a fintech and innovation hub",
        paragraphs: [
          "Luxembourg is a breeding ground for fintech, investment funds, and high-value startups. The ecosystem demands custom digital tools: client portals, regulatory dashboards, management platforms.",
          "EU institutions based in Luxembourg also drive constant demand for robust, secure business applications. Expectations around reliability and compliance are high.",
          "P-XEL helps Luxembourg companies design and build their digital tools, from an MVP validated in weeks to a full-scale application ready for growth.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Your product partner, just across the border",
        points: [
          {
            title: "Speed of execution",
            body: "MVP delivered in 4 to 6 weeks. We validate fast, we iterate fast. Ideal for Luxembourg startups that need to prove their concept before the next funding round.",
          },
          {
            title: "Controlled costs, intact quality",
            body: "Development rates in Luxembourg are among the highest in Europe. Working with P-XEL from Liege means accessing the same technical quality at an optimised budget.",
          },
          {
            title: "Product vision, not just code",
            body: "We do more than develop. We challenge the concept, structure the product, and prioritise the features that matter. A true product partner.",
          },
        ],
      },
      faq: [
        {
          question:
            "Do you develop applications for the Luxembourg financial sector?",
          answer:
            "Yes. We have experience with demanding business interfaces: dashboards, client portals, reporting tools. We build robust applications that meet sector expectations.",
        },
        {
          question: "How quickly can you deliver a functional MVP?",
          answer:
            "Between 4 and 6 weeks for an MVP with core features. The goal: validate the concept with real users as quickly as possible.",
        },
        {
          question:
            "Can you take over and improve an existing application?",
          answer:
            "Yes. Technical audit, UX overhaul, technology migration: we also work on existing products that need a fresh start.",
        },
        {
          question:
            "Do you work with early-stage startups in Luxembourg?",
          answer:
            "Absolutely. We regularly work with founders who need a solid first product to convince investors and early users.",
        },
      ],
      cta: {
        heading: "Your application, designed and shipped",
        subtext:
          "Let's discuss your project. 30 minutes to assess feasibility and define next steps.",
      },
    },

    "ux-ui-design": {
      metaTitle: "UX/UI Design in Luxembourg | P-XEL Studio",
      metaDescription:
        "UX/UI design for Luxembourg companies. User research, design systems, prototyping. Senior studio based in Liege.",
      hero: {
        label: "UX/UI · Luxembourg",
        heading: "UX/UI Design in Luxembourg",
        subtext:
          "Interfaces designed for your users. UX research, design systems, and prototyping for Luxembourg digital products.",
      },
      localContext: {
        label: "Local context",
        heading: "In Luxembourg, user experience is a competitive edge",
        paragraphs: [
          "In a market where quality expectations run high, user experience makes the difference. Luxembourg companies, particularly in finance and professional services, need interfaces that build trust and simplify complex workflows.",
          "Multilingualism adds a layer of complexity. Designing an interface that works in three languages without overwhelming the user requires real UX expertise, not just cosmetic design.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "A senior eye on your interfaces",
        points: [
          {
            title: "Research before design",
            body: "We start by understanding your users, their constraints, and their journeys. Design follows research, never the other way around.",
          },
          {
            title: "Durable design systems",
            body: "No throwaway mockups. We build coherent, reusable design systems that support your product over time.",
          },
          {
            title: "Proximity without the premium",
            body: "On-site UX workshops in Luxembourg when it matters, production work from Liege. You get hands-on support at Belgian rates.",
          },
        ],
      },
      faq: [
        {
          question: "Do you run UX audits on existing products?",
          answer:
            "Yes. Heuristic audits, user testing, journey analysis. We identify friction points and deliver actionable recommendations.",
        },
        {
          question:
            "Can you run UX workshops at our offices in Luxembourg?",
          answer:
            "Yes, we regularly travel to Luxembourg for framing workshops, co-design sessions, and result presentations.",
        },
        {
          question: "Do you deliver interactive prototypes?",
          answer:
            "Yes. Interactive Figma prototypes that your teams and users can test before a single line of code is written.",
        },
        {
          question:
            "Do you design interfaces for complex business applications?",
          answer:
            "That is our playground. Financial dashboards, management portals, internal tools: we simplify complexity without losing functional power.",
        },
      ],
      cta: {
        heading: "Interfaces that make a difference",
        subtext:
          "Let's talk about your product. We will show you how design can accelerate your results.",
      },
    },

    "branding-identite": {
      metaTitle: "Branding & Visual Identity in Luxembourg | P-XEL Studio",
      metaDescription:
        "Premium branding for Luxembourg companies. Logo, visual identity, art direction. Creative studio based in Liege.",
      hero: {
        label: "Branding · Luxembourg",
        heading: "Branding & Visual Identity in Luxembourg",
        subtext:
          "A distinctive brand identity to stand out in the Luxembourg market. Logo, art direction, visual systems.",
      },
      localContext: {
        label: "Local context",
        heading: "In Luxembourg, your brand must inspire trust",
        paragraphs: [
          "The Luxembourg market is demanding. Decision-makers are accustomed to high quality, whether in finance, law, consulting, or tech. An approximate visual identity sends the wrong signal.",
          "Luxembourg is also an international crossroads. Your brand must work in French, English, and German contexts, across different cultures. That requires thoughtful, universal art direction.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "Branding that positions, not decorates",
        points: [
          {
            title: "Strategic art direction",
            body: "We do not design a logo in a vacuum. We start from your positioning, your market, and your ambitions to build an identity that works for you.",
          },
          {
            title: "Complete brand systems",
            body: "Logo, typography, palette, guidelines, templates. You walk away with a coherent system applicable across all touchpoints, from website to pitch deck.",
          },
          {
            title: "Premium sensibility, reasonable rates",
            body: "P-XEL brings a high-level visual standard calibrated for the Luxembourg market, at a Belgian price point.",
          },
        ],
      },
      faq: [
        {
          question:
            "Do you handle brand redesigns for established Luxembourg companies?",
          answer:
            "Yes. We support both new brand creation and full overhauls. Audit of the existing identity, repositioning, new art direction.",
        },
        {
          question: "What does a complete branding project include?",
          answer:
            "Brand strategy, logo and variations, colour palette, typography, usage guidelines, and key templates. Everything delivered in a structured brand book.",
        },
        {
          question:
            "Can you create an identity that works across multiple languages?",
          answer:
            "Essential for Luxembourg. We design visual systems that remain coherent and legible regardless of the language in use.",
        },
        {
          question: "How long does a branding project take?",
          answer:
            "Between 3 and 6 weeks depending on scope. Each stage is validated with you before moving to the next.",
        },
      ],
      cta: {
        heading: "A brand that matches your ambitions",
        subtext:
          "Book a call. We discuss your positioning and what your brand should project.",
      },
    },

    "ai-studio": {
      metaTitle: "AI Studio in Luxembourg | P-XEL Studio",
      metaDescription:
        "AI integration and automation for Luxembourg companies. AI workflows, custom tools, augmented products. Studio in Liege.",
      hero: {
        label: "AI Studio · Luxembourg",
        heading: "AI Studio in Luxembourg",
        subtext:
          "AI integration into your products and processes. Automation, smart workflows, and augmented tools for the Luxembourg market.",
      },
      localContext: {
        label: "Local context",
        heading: "Luxembourg is accelerating on AI",
        paragraphs: [
          "The Luxembourg financial sector is investing heavily in automation and artificial intelligence. Compliance, data analysis, document processing: use cases are concrete and expectations are high.",
          "Beyond finance, Luxembourg companies of all sizes are looking to integrate AI into their products and operations. The challenge is not the technology; it is finding a partner who understands both product and AI.",
          "P-XEL combines product expertise with AI workflow mastery to deliver solutions that work in production, not just in demos.",
        ],
      },
      whyHere: {
        label: "Why P-XEL",
        heading: "AI in service of the product, not the other way around",
        points: [
          {
            title: "Product-first approach",
            body: "We do not sell AI for the hype. We identify where AI creates real value in your product or processes, then integrate it properly.",
          },
          {
            title: "Rapid prototyping, concrete validation",
            body: "Proof of concept in a few weeks. You test the value of AI on your real use cases before committing to a full solution.",
          },
          {
            title: "Proximity and confidentiality",
            body: "For sensitive topics in the Luxembourg market, working with a nearby studio based in Belgium offers a framework of trust and European compliance.",
          },
        ],
      },
      faq: [
        {
          question:
            "What types of AI solutions do you build for the Luxembourg market?",
          answer:
            "Document automation, data analysis, business chatbots, smart workflows, LLM integration into existing products. Always custom, always results-driven.",
        },
        {
          question:
            "Can you integrate AI into an existing application?",
          answer:
            "Yes. Product audit, AI opportunity identification, progressive integration. No need to rebuild everything.",
        },
        {
          question: "How do you handle data confidentiality?",
          answer:
            "European hosting, GDPR compliance, secure architecture. For sensitive data, we offer private deployments with no data transit to third-party services.",
        },
        {
          question: "How soon can we see initial results?",
          answer:
            "A functional proof of concept in 2 to 4 weeks. The goal is to validate business value before committing to full-scale development.",
        },
      ],
      cta: {
        heading: "AI as a lever, not a gimmick",
        subtext:
          "Let's explore AI opportunities for your business. 30 minutes to identify high-impact use cases.",
      },
    },
  },
};

export function getLuxembourgCityService(
  slug: ServiceSlug,
  locale: Locale,
): CityServiceContent {
  return content[locale][slug];
}
