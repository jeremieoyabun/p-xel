import type { ServicePage } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, ServicePage> = {
  fr: {
    slug: "ux-ui-design",
    metaTitle: "UX UI Design & Product Design | P-XEL Studio - Belgique",
    metaDescription:
      "Design d'interfaces, audit UX, design systems et prototypage Figma. 16+ ans d'expertise produit. Studio UX/UI à Liège. Réservez un appel.",

    hero: {
      label: "UX/UI & Product Design",
      heading: "Des interfaces qui fonctionnent. Pas juste des maquettes qui plaisent.",
      subheadline:
        "On conçoit des expériences utilisateur pensées pour la conversion, la clarté et la scalabilité. Audit UX, design systems, prototypage, refonte. De la recherche au handoff développeur.",
      image: "/images/Services_UX-UI.webp",
    },

    problem: {
      label: "Signaux d'alerte",
      heading: "Quand le design freine votre produit.",
      intro:
        "L'interface est en ligne, mais les résultats ne suivent pas. Voici les signaux qui montrent qu'il est temps d'investir dans une vraie démarche UX.",
      points: [
        "Votre produit ne convertit pas. Les parcours sont confus, les actions clés sont enfouies, le taux de conversion stagne.",
        "Votre interface est devenue trop complexe. Les fonctionnalités se sont empilées sans vision globale.",
        "Vous grandissez sans système. Chaque page a son propre style. Les composants sont dupliqués.",
        "Votre produit a vieilli. Les standards ont changé. Les attentes des utilisateurs aussi.",
      ],
    },

    whatWeBuild: {
      label: "Ce qu'on construit",
      heading: "Du diagnostic à l'interface finale.",
      intro:
        "On ne dessine pas des écrans au hasard. Chaque intervention UX/UI répond à un problème identifié et à un objectif mesurable.",
      items: [
        {
          title: "Audit UX",
          body: "Analyse complète de votre produit existant : parcours utilisateur, taux de conversion, points de friction, heuristiques d'utilisabilité. On identifie ce qui bloque et on priorise les corrections.",
          icon: "search",
        },
        {
          title: "Wireframes & architecture",
          body: "Structure des écrans, hiérarchie de l'information, flux utilisateur. On pose les fondations avant de toucher au visuel. Chaque décision est justifiée par la recherche.",
          icon: "layout",
        },
        {
          title: "UI Design",
          body: "Interfaces haute fidélité conçues dans Figma. Typographie, couleurs, spacing, composants. Un design qui sert la clarté et la conversion, pas juste l'esthétique.",
          icon: "pen",
        },
        {
          title: "Design Systems",
          body: "Bibliothèque de composants réutilisables, tokens de design, documentation des patterns. Pour garantir la cohérence visuelle et accélérer le développement à grande échelle.",
          icon: "grid",
        },
        {
          title: "Prototypage interactif",
          body: "Prototypes cliquables dans Figma pour valider les parcours avant le développement. On teste les hypothèses avec de vrais utilisateurs avant d'écrire une ligne de code.",
          icon: "mouse",
        },
        {
          title: "Refonte d'interfaces",
          body: "Votre produit fonctionne mais l'interface a vieilli ? On modernise sans casser ce qui marche. Migration progressive, système de composants, nouvelles fondations visuelles.",
          icon: "zap",
        },
      ],
    },

    approach: {
      label: "Notre méthode",
      heading: "Recherche d'abord. Pixels ensuite.",
      intro:
        "On ne commence jamais par dessiner. On commence par comprendre vos utilisateurs, vos contraintes et vos objectifs. Le design est la conséquence d'une réflexion, pas le point de départ.",
      steps: [
        {
          number: "01",
          title: "Research",
          body: "Analyse des utilisateurs, de la concurrence et du produit existant. On identifie les comportements, les attentes et les points de friction avant de toucher au design.",
        },
        {
          number: "02",
          title: "Architecture",
          body: "Organisation de l'information, définition des flux et des parcours clés. On structure le produit pour que chaque écran serve un objectif clair.",
        },
        {
          number: "03",
          title: "Wireframes",
          body: "Maquettes basse fidélité pour valider la structure, la hiérarchie et les interactions principales. Itérations rapides avant d'investir dans le visuel.",
        },
        {
          number: "04",
          title: "Design",
          body: "Création des interfaces haute fidélité dans Figma. Direction artistique, composants, responsive. Chaque pixel est intentionnel.",
        },
        {
          number: "05",
          title: "Prototype",
          body: "Prototypes interactifs pour tester les parcours critiques. Validation interne et tests utilisateurs avant de passer au développement.",
        },
        {
          number: "06",
          title: "Test",
          body: "Tests d'utilisabilité, retours utilisateurs, itérations. On valide que le design fonctionne en conditions réelles avant le handoff.",
        },
        {
          number: "07",
          title: "Handoff",
          body: "Livraison complète aux développeurs : specs, assets, tokens, documentation des composants. Tout est prêt pour une intégration propre et fidèle.",
        },
      ],
    },

    deliverables: {
      label: "Ce que vous recevez",
      heading: "Des fichiers exploitables. Pas des présentations PowerPoint.",
      intro: "Chaque projet UX/UI inclut :",
      items: [
        "Fichiers Figma complets et organisés",
        "Design system documenté",
        "Prototypes interactifs cliquables",
        "Spécifications développeur détaillées",
        "Documentation des composants",
        "Rapport d'audit UX (si applicable)",
      ],
    },

    caseStudies: {
      label: "Résultats",
      heading: "Des interfaces pensées. Des résultats mesurés.",
      studies: [
        {
          name: "Greenmood",
          tags: ["UX/UI", "Plateforme B2B", "Configurateur produit"],
          body: "Conception UX/UI d'une plateforme B2B avec configurateur produit intégré. Recherche utilisateur, architecture d'information, design system et prototypage. Une interface pensée pour simplifier un processus de commande complexe.",
          image: "/images/case-studies/greenmood-hero.webp",
          href: "/work/greenmood/",
        },
      ],
    },

    investment: {
      label: "Investissement",
      heading: "Un budget adapté à la complexité de votre produit.",
      body: "Le coût d'un projet UX/UI dépend de plusieurs facteurs : nombre d'écrans, complexité des parcours, besoin d'un design system, niveau de recherche utilisateur requis.\n\nUn audit UX ciblé peut démarrer à un budget accessible. Un projet de design complet avec design system et prototypage représente un investissement plus conséquent. On définit le périmètre ensemble après un premier échange.",
      anchor: "Estimation gratuite sous 24h",
      note: "On fournit une estimation détaillée et gratuite avant de démarrer. Pas d'engagement, pas de surprise.",
    },

    faq: {
      label: "Questions fréquentes",
      items: [
        {
          question: "Quelle est la différence entre UX et UI ?",
          answer:
            "L'UX (User Experience) concerne la structure, les parcours et la logique d'utilisation du produit. L'UI (User Interface) concerne le visuel : typographie, couleurs, composants, animations. Les deux sont indissociables pour un produit qui fonctionne.",
        },
        {
          question: "Travaillez-vous uniquement sur des produits digitaux ?",
          answer:
            "On se concentre sur les interfaces digitales : applications web, applications mobiles, plateformes SaaS, sites complexes. On ne fait pas de design print ou de packaging.",
        },
        {
          question: "Combien de temps prend un projet UX/UI ?",
          answer:
            "Un audit UX prend 1 à 2 semaines. Un projet de design d'interface complet entre 4 et 10 semaines selon la complexité. Un design system robuste peut prendre 6 à 12 semaines.",
        },
        {
          question: "Livrez-vous le code ou uniquement le design ?",
          answer:
            "On livre le design dans Figma avec toutes les spécifications nécessaires au développement. Si vous avez besoin du développement front-end, on peut aussi l'intégrer au projet.",
        },
        {
          question: "Peut-on commencer par un audit avant un projet complet ?",
          answer:
            "C'est même recommandé. Un audit UX permet d'identifier les vrais problèmes et de prioriser les interventions. On évite de redesigner des choses qui fonctionnent déjà.",
        },
        {
          question: "Comment travaillez-vous avec nos développeurs ?",
          answer:
            "On livre des fichiers Figma structurés avec des composants, des tokens de design et une documentation claire. On reste disponible pendant l'intégration pour répondre aux questions et valider la fidélité du résultat.",
        },
      ],
    },

    cta: {
      heading:
        "Votre interface mérite une vraie réflexion UX.",
      subtext:
        "Audit, refonte ou design system complet. Parlez-nous de votre produit. On vous dit en 30 minutes comment améliorer l'expérience.",
    },
  },

  en: {
    slug: "ux-ui-design",
    metaTitle: "UX UI Design & Product Design | P-XEL Studio - Belgium",
    metaDescription:
      "Interface design, UX audit, design systems and Figma prototyping. 16+ years of product expertise. UX/UI studio in Liege, Belgium. Book a call.",

    hero: {
      label: "UX/UI & Product Design",
      heading: "Interfaces that work. Not just mockups that look good.",
      subheadline:
        "We design user experiences built for conversion, clarity and scalability. UX audit, design systems, prototyping, redesign. From research to developer handoff.",
      image: "/images/Services_UX-UI.webp",
    },

    problem: {
      label: "Warning signs",
      heading: "When design holds your product back.",
      intro:
        "The interface is live, but the results aren't following. Here are the signals that it's time to invest in a real UX approach.",
      points: [
        "Your product doesn't convert. User journeys are confusing, key actions are buried, conversion rates stagnate.",
        "Your interface has become too complex. Features have piled up without a global vision.",
        "You're scaling without a system. Every page has its own style. Components are duplicated.",
        "Your product has aged. Standards have changed. User expectations too.",
      ],
    },

    whatWeBuild: {
      label: "What we build",
      heading: "From diagnosis to final interface.",
      intro:
        "We don't design screens at random. Every UX/UI intervention addresses an identified problem and a measurable objective.",
      items: [
        {
          title: "UX Audit",
          body: "Complete analysis of your existing product: user journeys, conversion rates, friction points, usability heuristics. We identify what's blocking and prioritize the fixes.",
          icon: "search",
        },
        {
          title: "Wireframes & architecture",
          body: "Screen structure, information hierarchy, user flows. We lay the foundations before touching the visual. Every decision is backed by research.",
          icon: "layout",
        },
        {
          title: "UI Design",
          body: "High-fidelity interfaces designed in Figma. Typography, colors, spacing, components. Design that serves clarity and conversion, not just aesthetics.",
          icon: "pen",
        },
        {
          title: "Design Systems",
          body: "Reusable component library, design tokens, pattern documentation. To ensure visual consistency and accelerate development at scale.",
          icon: "grid",
        },
        {
          title: "Interactive prototyping",
          body: "Clickable prototypes in Figma to validate journeys before development. We test hypotheses with real users before writing a single line of code.",
          icon: "mouse",
        },
        {
          title: "Interface redesign",
          body: "Your product works but the interface has aged? We modernize without breaking what works. Progressive migration, component system, new visual foundations.",
          icon: "zap",
        },
      ],
    },

    approach: {
      label: "Our method",
      heading: "Research first. Pixels second.",
      intro:
        "We never start by designing. We start by understanding your users, your constraints and your goals. Design is the consequence of thinking, not the starting point.",
      steps: [
        {
          number: "01",
          title: "Research",
          body: "Analysis of users, competition and the existing product. We identify behaviors, expectations and friction points before touching the design.",
        },
        {
          number: "02",
          title: "Architecture",
          body: "Information organization, definition of flows and key journeys. We structure the product so every screen serves a clear objective.",
        },
        {
          number: "03",
          title: "Wireframes",
          body: "Low-fidelity mockups to validate structure, hierarchy and main interactions. Rapid iterations before investing in the visual.",
        },
        {
          number: "04",
          title: "Design",
          body: "High-fidelity interface creation in Figma. Art direction, components, responsive. Every pixel is intentional.",
        },
        {
          number: "05",
          title: "Prototype",
          body: "Interactive prototypes to test critical journeys. Internal validation and user testing before moving to development.",
        },
        {
          number: "06",
          title: "Test",
          body: "Usability testing, user feedback, iterations. We validate that the design works in real conditions before handoff.",
        },
        {
          number: "07",
          title: "Handoff",
          body: "Complete delivery to developers: specs, assets, tokens, component documentation. Everything is ready for a clean, faithful integration.",
        },
      ],
    },

    deliverables: {
      label: "What you receive",
      heading: "Usable files. Not PowerPoint presentations.",
      intro: "Every UX/UI project includes:",
      items: [
        "Complete, organized Figma files",
        "Documented design system",
        "Clickable interactive prototypes",
        "Detailed developer specifications",
        "Component documentation",
        "UX audit report (if applicable)",
      ],
    },

    caseStudies: {
      label: "Results",
      heading: "Thoughtful interfaces. Measured results.",
      studies: [
        {
          name: "Greenmood",
          tags: ["UX/UI", "B2B Platform", "Product Configurator"],
          body: "UX/UI design of a B2B platform with integrated product configurator. User research, information architecture, design system and prototyping. An interface designed to simplify a complex ordering process.",
          image: "/images/case-studies/greenmood-hero.webp",
          href: "/en/work/greenmood/",
        },
      ],
    },

    investment: {
      label: "Investment",
      heading: "A budget adapted to your product's complexity.",
      body: "The cost of a UX/UI project depends on several factors: number of screens, journey complexity, need for a design system, required level of user research.\n\nA targeted UX audit can start at an accessible budget. A complete design project with design system and prototyping represents a more significant investment. We define the scope together after a first conversation.",
      anchor: "Free estimate within 24h",
      note: "We provide a detailed, free estimate before starting. No commitment, no surprises.",
    },

    faq: {
      label: "Frequently asked questions",
      items: [
        {
          question: "What is the difference between UX and UI?",
          answer:
            "UX (User Experience) concerns the structure, journeys and usage logic of the product. UI (User Interface) concerns the visual: typography, colors, components, animations. Both are inseparable for a product that works.",
        },
        {
          question: "Do you only work on digital products?",
          answer:
            "We focus on digital interfaces: web applications, mobile applications, SaaS platforms, complex websites. We don't do print design or packaging.",
        },
        {
          question: "How long does a UX/UI project take?",
          answer:
            "A UX audit takes 1 to 2 weeks. A complete interface design project between 4 and 10 weeks depending on complexity. A robust design system can take 6 to 12 weeks.",
        },
        {
          question: "Do you deliver code or only design?",
          answer:
            "We deliver the design in Figma with all specifications needed for development. If you need front-end development, we can integrate that into the project as well.",
        },
        {
          question: "Can we start with an audit before a full project?",
          answer:
            "It's even recommended. A UX audit identifies the real problems and prioritizes interventions. We avoid redesigning things that already work.",
        },
        {
          question: "How do you work with our developers?",
          answer:
            "We deliver structured Figma files with components, design tokens and clear documentation. We stay available during integration to answer questions and validate the fidelity of the result.",
        },
      ],
    },

    cta: {
      heading:
        "Your interface deserves a real UX approach.",
      subtext:
        "Audit, redesign or full design system. Tell us about your product. We'll tell you in 30 minutes how to improve the experience.",
    },
  },
} as const;

export function getUxUiDesignContent(locale: Locale) {
  return content[locale];
}

// Re-export default for backward compatibility
export const uxUiDesign = content.fr;
