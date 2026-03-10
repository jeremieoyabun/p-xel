import type { ServicePage } from "./types";

export const uxUiDesign: ServicePage = {
  slug: "ux-ui-design",
  metaTitle: "UX UI Design & Product Design | P-XEL Studio - Belgique",
  metaDescription:
    "Design d'interfaces, audit UX, design systems et prototypage Figma. 16+ ans d'expertise produit. Studio UX/UI à Liège. Réservez un appel.",

  hero: {
    label: "UX/UI & Product Design",
    heading: "Des interfaces qui fonctionnent. Pas juste des maquettes qui plaisent.",
    subheadline:
      "On conçoit des expériences utilisateur pensées pour la conversion, la clarté et la scalabilité. Audit UX, design systems, prototypage, refonte. De la recherche au handoff développeur.",
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
      },
      {
        title: "Wireframes & architecture",
        body: "Structure des écrans, hiérarchie de l'information, flux utilisateur. On pose les fondations avant de toucher au visuel. Chaque décision est justifiée par la recherche.",
      },
      {
        title: "UI Design",
        body: "Interfaces haute fidélité conçues dans Figma. Typographie, couleurs, spacing, composants. Un design qui sert la clarté et la conversion, pas juste l'esthétique.",
      },
      {
        title: "Design Systems",
        body: "Bibliothèque de composants réutilisables, tokens de design, documentation des patterns. Pour garantir la cohérence visuelle et accélérer le développement à grande échelle.",
      },
      {
        title: "Prototypage interactif",
        body: "Prototypes cliquables dans Figma pour valider les parcours avant le développement. On teste les hypothèses avec de vrais utilisateurs avant d'écrire une ligne de code.",
      },
      {
        title: "Refonte d'interfaces",
        body: "Votre produit fonctionne mais l'interface a vieilli ? On modernise sans casser ce qui marche. Migration progressive, système de composants, nouvelles fondations visuelles.",
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
};
