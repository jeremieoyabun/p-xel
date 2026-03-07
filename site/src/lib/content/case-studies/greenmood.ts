import type { CaseStudy } from "./types";

export const greenmood: CaseStudy = {
  slug: "greenmood",
  title: "Greenmood",
  metaTitle: "Greenmood - Plateforme B2B & Configurateur Produit",
  metaDescription:
    "Plateforme B2B, configurateurs produit et design system pour Greenmood, leader européen du design acoustique. Étude de cas P-XEL Studio.",
  tags: ["Plateforme B2B", "UX/UI", "Configurateur Produit", "Design System"],
  tagline:
    "Architecture d'information, UX et configurateurs produit pour le leader européen du design biophilique et acoustique.",
  period: "2021",
  heroImage: "/images/case-studies/greenmood-hero.webp",
  beats: {
    context: {
      label: "Contexte",
      heading: "Un leader européen avec un catalogue qui dépasse l'interface classique.",
      body: "Greenmood conçoit et fabrique des solutions de design biophilique et acoustique pour les espaces professionnels. Murs végétaux, panneaux acoustiques, cloisons modulaires. Leur catalogue est vaste, technique, et chaque produit se décline en dizaines de configurations. Leur positionnement est premium, leur clientèle est B2B : architectes, designers d'intérieur, facility managers. L'enjeu n'était pas de créer un site vitrine. C'était de construire un outil de travail.",
    },
    challenge: {
      label: "Problème",
      heading: "Un catalogue complexe sans structure pour le porter.",
      body: "Le site existant ne reflétait pas la profondeur de l'offre Greenmood. Les produits étaient nombreux, les variantes multiples, mais l'architecture d'information ne permettait pas aux utilisateurs B2B de naviguer efficacement. Les commerciaux perdaient du temps à expliquer ce que la plateforme aurait dû montrer. Les architectes ne trouvaient pas les spécifications techniques dont ils avaient besoin pour prescrire les produits. Il manquait un système pensé pour la complexité réelle du catalogue.",
    },
    thinking: {
      label: "Réflexion",
      heading: "Penser en produit, pas en pages.",
      body: "Avant d'ouvrir Figma, on a cartographié l'ensemble du catalogue : familles de produits, variantes, options, spécifications techniques, cas d'usage. On a identifié trois profils utilisateurs distincts : l'architecte qui prescrit, le facility manager qui compare, le commercial Greenmood qui présente. Chaque profil avait des parcours différents et des besoins d'information différents. La structure devait servir les trois sans compromis. On a conçu l'architecture d'information comme un système de filtrage progressif, pas comme une arborescence statique.",
    },
    approach: {
      label: "Approche",
      heading: "Configurateurs, système de composants et navigation par usage.",
      body: "L'interface a été structurée autour de deux axes : la navigation par catégorie produit et la navigation par cas d'usage. Un architecte cherchant une solution acoustique pour un open space arrive au bon produit en trois clics, sans passer par l'arborescence complète du catalogue.\n\nLes configurateurs produit sont le coeur du projet. Chaque produit configurable dispose d'une interface dédiée où l'utilisateur sélectionne dimensions, matériaux, finitions, et visualise le résultat en temps réel. On a conçu la logique de configuration en collaboration avec l'équipe technique de Greenmood pour garantir que chaque combinaison affichée soit réellement fabricable.\n\nLe design system a été construit pour supporter la diversité du catalogue sans exploser en complexité. Composants modulaires, grille adaptable, typographie technique pour les specs, mise en page éditoriale pour les cas d'usage. Le système devait fonctionner aussi bien pour une fiche produit minimaliste que pour un configurateur à 15 options.",
    },
    execution: {
      label: "Exécution",
      heading: "Livraison structurée pour une équipe technique interne.",
      body: "On a livré un système complet : wireframes détaillés, prototypes interactifs, design system documenté, spécifications fonctionnelles des configurateurs. L'architecture de composants a été pensée pour que l'équipe de développement interne de Greenmood puisse implémenter et maintenir la plateforme sans dépendance externe. Chaque configurateur a été spécifié avec sa logique de règles métier, ses états d'interface et ses cas limites.",
    },
    result: {
      label: "Impact",
      heading: "Une plateforme qui travaille pour le business.",
      body: "La plateforme a transformé la manière dont Greenmood présente son offre. Les commerciaux utilisent les configurateurs en rendez-vous client. Les architectes configurent et prescrivent en autonomie. Le catalogue, auparavant difficile à appréhender, est devenu un avantage concurrentiel tangible.",
    },
  },
  deliverables: [
    "Architecture d'information complète",
    "UX research et cartographie des parcours utilisateurs",
    "Wireframes et prototypes interactifs",
    "Design system modulaire et documenté",
    "UX et UI des configurateurs produit",
    "Spécifications fonctionnelles des configurateurs",
    "Direction artistique plateforme",
    "Guidelines de composants pour l'équipe dev",
  ],
  cta: {
    heading: "Un projet complexe à structurer ?",
    body: "On conçoit des plateformes et applications qui fonctionnent pour vos utilisateurs et votre business. Parlons de votre projet.",
    serviceLink: { label: "plateformes et applications", href: "/services/application-web-mvp/" },
  },
  navigation: {
    next: { slug: "oyabun", title: "Oyabun" },
  },
  internalLinks: [
    { label: "Applications web et MVP", href: "/services/application-web-mvp/" },
  ],
};
