import type { CaseStudy } from "./types";

export const oyabun: CaseStudy = {
  slug: "oyabun",
  title: "Oyabun",
  metaTitle: "Oyabun - Application Gaming & Web3",
  metaDescription:
    "Conception et design d'une application gaming Web3 avec intégration Telegram. Direction artistique, product design et système de jeu complet. Étude de cas P-XEL Studio.",
  tags: ["Product Design", "Gaming", "Web3", "Telegram"],
  tagline:
    "Application gaming Web3 avec économie de tokens, système de clans et intégration Telegram. Un univers complet conçu pour engager et retenir.",
  keyResult: "Un produit gaming complet, du concept au lancement",
  period: "2024-2025",
  heroImage: "/images/case-studies/oyabun-hero.webp",
  beats: {
    context: {
      label: "Contexte",
      heading: "Un produit gaming à la croisée du Web3 et du mobile.",
      body: "Oyabun est un projet de gaming Web3 ancré dans un univers narratif inspiré des yakuzas. Le produit devait combiner des mécaniques de jeu (progression, récompenses, hiérarchies de clans), une économie de tokens, et une distribution via Telegram pour capter une audience déjà présente sur la plateforme. Le défi n'était pas de \"faire un jeu\". C'était de concevoir un produit digital complet : un système de jeu, une économie fonctionnelle, une identité visuelle forte, et une expérience utilisateur qui tient dans une interface mobile accessible depuis un bot Telegram.",
    },
    challenge: {
      label: "Problème",
      heading: "Construire un univers de jeu complet dans un canal qui n'est pas fait pour ça.",
      body: "Telegram n'est pas une plateforme de jeu. C'est un outil de messagerie. Pourtant, l'écosystème Telegram Mini Apps ouvre une surface de distribution massive avec des millions d'utilisateurs actifs. Le défi était de concevoir une expérience de jeu immersive dans les contraintes d'une interface web embarquée : pas d'app store, pas de téléchargement, pas de onboarding complexe. L'utilisateur ouvre un lien, entre dans le jeu. En parallèle, il fallait concevoir un système économique crédible : tokens, récompenses, progression, sans tomber dans les schémas spéculatifs qui discréditent le Web3 gaming. Le produit devait être un jeu avant d'être un projet crypto.",
    },
    thinking: {
      label: "Réflexion",
      heading: "Penser en système, pas en écrans.",
      body: "On a commencé par la boucle de jeu, pas par l'interface. Qu'est-ce qui fait revenir un joueur ? Quelle est la progression ? Quels sont les paliers de récompense ? Comment le système de clans crée de la rétention sociale ? Ces questions de game design ont conditionné chaque décision d'interface. L'économie de tokens a été conçue comme un système fermé avec des entrées et des sorties équilibrées. Les joueurs gagnent des tokens par l'activité in-game, les dépensent pour progresser, et le système reste stable sans inflation. On a cartographié l'ensemble avant de dessiner le premier écran. La direction artistique a été traitée comme un pilier de produit, pas comme une couche décorative. L'univers visuel devait porter l'immersion autant que les mécaniques de jeu.",
    },
    approach: {
      label: "Approche",
      heading: "Un univers visuel qui porte le produit.",
      body: "La direction artistique s'inspire de l'esthétique néo-japonaise : contrastes marqués, typographie forte, palette sombre avec des accents vifs. Chaque élément visuel sert le worldbuilding. Les avatars, les badges de clan, les écrans de progression, les animations de récompense : tout participe à un univers cohérent qui donne au joueur l'impression d'être dans un produit construit, pas dans un prototype.\n\nL'interface a été conçue pour fonctionner dans les contraintes de Telegram Mini Apps. Navigation simplifiée, hiérarchie visuelle claire, actions principales accessibles en un tap. Le joueur ne lit pas un mode d'emploi. Il ouvre l'app, comprend la mécanique, et joue.\n\nLe système de clans est le moteur social du produit. Les joueurs rejoignent des clans, grimpent dans la hiérarchie (du Kobun au Oyabun), participent à des événements collectifs. Cette couche sociale transforme un jeu individuel en expérience communautaire avec de la rétention à long terme.\n\nLe système de récompenses lie la progression individuelle à l'économie de tokens. Chaque action in-game a une valeur dans le système économique. Le joueur progresse, gagne, dépense, et reste engagé dans une boucle cohérente.",
    },
    execution: {
      label: "Exécution",
      heading: "Direction artistique, product design et systèmes de jeu.",
      body: "P-XEL a conçu l'ensemble du produit : direction artistique complète, design d'interface, système de progression, économie de tokens, hiérarchie de clans, et intégration Telegram. L'identité visuelle a été créée de zéro : logo, palette, typographie, composants d'interface, éléments de worldbuilding. Le product design couvre l'ensemble des flux utilisateur : onboarding, boucle de jeu quotidienne, progression, interactions de clan, récompenses. Chaque système a été documenté et spécifié pour le développement.",
    },
    result: {
      label: "Impact",
      heading: "Un produit gaming prêt à déployer. Pas un concept.",
      body: "Oyabun est un produit complet avec un univers visuel construit, des mécaniques de jeu spécifiées, une économie de tokens équilibrée et une expérience utilisateur conçue pour Telegram. Le projet démontre la capacité de P-XEL à travailler sur des produits complexes qui dépassent le cadre classique du web : game design, worldbuilding, systèmes économiques, distribution sur des canaux non-conventionnels. C'est du product design appliqué à un domaine où la plupart des studios de design ne vont pas.",
    },
  },
  deliverables: [
    "Direction artistique complète (logo, palette, typographie, worldbuilding)",
    "Product design (UX research, user flows, UI design)",
    "Système de progression et boucle de jeu",
    "Architecture de l'économie de tokens",
    "Système de clans et hiérarchie sociale",
    "Design d'interface pour Telegram Mini Apps",
    "Spécifications fonctionnelles pour le développement",
  ],
  stack: ["Figma", "Telegram Mini Apps", "Web3", "Token Economy Design"],
  cta: {
    heading: "Un produit digital ambitieux à concevoir ?",
    body: "On conçoit des applications web et produits digitaux qui sortent du cadre. Direction artistique, product design, systèmes complexes.",
    serviceLink: { label: "applications web et produits digitaux", href: "/services/application-web-mvp/" },
  },
  navigation: {
    next: { slug: "arduenna-gin", title: "Arduenna Gin" },
  },
  internalLinks: [
    { label: "Applications web et MVP", href: "/services/application-web-mvp/" },
  ],
};
