import type { CaseStudy } from "./types";

export const greenmood: CaseStudy = {
  slug: "greenmood",
  title: "Greenmood",
  metaTitle: "Greenmood - Plateforme B2B & Configurateur Produit",
  metaDescription:
    "Plateforme B2B, configurateurs produit et design system pour Greenmood, leader europeen du design acoustique. Etude de cas P-XEL Studio.",
  tags: ["Plateforme B2B", "UX/UI", "Configurateur Produit", "Design System"],
  tagline:
    "Architecture d'information, UX et configurateurs produit pour le leader europeen du design biophilique et acoustique.",
  period: "2021",
  heroImage: "/images/case-studies/greenmood-hero.webp",
  beats: {
    context: {
      label: "Contexte",
      heading: "Un leader europeen avec un catalogue qui depasse l'interface classique.",
      body: "Greenmood concoit et fabrique des solutions de design biophilique et acoustique pour les espaces professionnels. Murs vegetaux, panneaux acoustiques, cloisons modulaires. Leur catalogue est vaste, technique, et chaque produit se decline en dizaines de configurations. Leur positionnement est premium, leur clientele est B2B : architectes, designers d'interieur, facility managers. L'enjeu n'etait pas de creer un site vitrine. C'etait de construire un outil de travail.",
    },
    challenge: {
      label: "Probleme",
      heading: "Un catalogue complexe sans structure pour le porter.",
      body: "Le site existant ne refletait pas la profondeur de l'offre Greenmood. Les produits etaient nombreux, les variantes multiples, mais l'architecture d'information ne permettait pas aux utilisateurs B2B de naviguer efficacement. Les commerciaux perdaient du temps a expliquer ce que la plateforme aurait du montrer. Les architectes ne trouvaient pas les specifications techniques dont ils avaient besoin pour prescrire les produits. Il manquait un systeme pense pour la complexite reelle du catalogue.",
    },
    thinking: {
      label: "Reflexion",
      heading: "Penser en produit, pas en pages.",
      body: "Avant d'ouvrir Figma, on a cartographie l'ensemble du catalogue : familles de produits, variantes, options, specifications techniques, cas d'usage. On a identifie trois profils utilisateurs distincts : l'architecte qui prescrit, le facility manager qui compare, le commercial Greenmood qui presente. Chaque profil avait des parcours differents et des besoins d'information differents. La structure devait servir les trois sans compromis. On a concu l'architecture d'information comme un systeme de filtrage progressif, pas comme une arborescence statique.",
    },
    approach: {
      label: "Approche",
      heading: "Configurateurs, systeme de composants et navigation par usage.",
      body: "L'interface a ete structuree autour de deux axes : la navigation par categorie produit et la navigation par cas d'usage. Un architecte cherchant une solution acoustique pour un open space arrive au bon produit en trois clics, sans passer par l'arborescence complete du catalogue.\n\nLes configurateurs produit sont le coeur du projet. Chaque produit configurable dispose d'une interface dediee ou l'utilisateur selectionne dimensions, materiaux, finitions, et visualise le resultat en temps reel. On a concu la logique de configuration en collaboration avec l'equipe technique de Greenmood pour garantir que chaque combinaison affichee soit reellement fabricable.\n\nLe design system a ete construit pour supporter la diversite du catalogue sans exploser en complexite. Composants modulaires, grille adaptable, typographie technique pour les specs, mise en page editoriale pour les cas d'usage. Le systeme devait fonctionner aussi bien pour une fiche produit minimaliste que pour un configurateur a 15 options.",
    },
    execution: {
      label: "Execution",
      heading: "Livraison structuree pour une equipe technique interne.",
      body: "On a livre un systeme complet : wireframes detailles, prototypes interactifs, design system documente, specifications fonctionnelles des configurateurs. L'architecture de composants a ete pensee pour que l'equipe de developpement interne de Greenmood puisse implementer et maintenir la plateforme sans dependance externe. Chaque configurateur a ete specifie avec sa logique de regles metier, ses etats d'interface et ses cas limites.",
    },
    result: {
      label: "Impact",
      heading: "Une plateforme qui travaille pour le business.",
      body: "La plateforme a transforme la maniere dont Greenmood presente son offre. Les commerciaux utilisent les configurateurs en rendez-vous client. Les architectes configurent et prescrivent en autonomie. Le catalogue, auparavant difficile a apprehender, est devenu un avantage concurrentiel tangible.",
    },
  },
  deliverables: [
    "Architecture d'information complete",
    "UX research et cartographie des parcours utilisateurs",
    "Wireframes et prototypes interactifs",
    "Design system modulaire et documente",
    "UX et UI des configurateurs produit",
    "Specifications fonctionnelles des configurateurs",
    "Direction artistique plateforme",
    "Guidelines de composants pour l'equipe dev",
  ],
  cta: {
    heading: "Un projet complexe a structurer ?",
    body: "On concoit des plateformes et applications qui fonctionnent pour vos utilisateurs et votre business. Parlons de votre projet.",
    serviceLink: { label: "plateformes et applications", href: "/services/application-web-mvp/" },
  },
  navigation: {
    next: { slug: "oyabun", title: "Oyabun" },
  },
  internalLinks: [
    { label: "Applications web et MVP", href: "/services/application-web-mvp/" },
  ],
};
