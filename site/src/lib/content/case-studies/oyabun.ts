import type { CaseStudy } from "./types";

export const oyabun: CaseStudy = {
  slug: "oyabun",
  title: "Oyabun",
  metaTitle: "Oyabun - Application Gaming & Web3",
  metaDescription:
    "Conception et design d'une application gaming Web3 avec integration Telegram. Direction artistique, product design et systeme de jeu complet. Etude de cas P-XEL Studio.",
  tags: ["Product Design", "Gaming", "Web3", "Telegram"],
  tagline:
    "Application gaming Web3 avec economie de tokens, systeme de clans et integration Telegram. Un univers complet concu pour engager et retenir.",
  keyResult: "Un produit gaming complet, du concept au lancement",
  period: "2024-2025",
  heroImage: "/images/case-studies/oyabun-hero.webp",
  beats: {
    context: {
      label: "Contexte",
      heading: "Un produit gaming a la croisee du Web3 et du mobile.",
      body: "Oyabun est un projet de gaming Web3 ancre dans un univers narratif inspire des yakuzas. Le produit devait combiner des mecaniques de jeu (progression, recompenses, hierarchies de clans), une economie de tokens, et une distribution via Telegram pour capter une audience deja presente sur la plateforme. Le defi n'etait pas de \"faire un jeu\". C'etait de concevoir un produit digital complet : un systeme de jeu, une economie fonctionnelle, une identite visuelle forte, et une experience utilisateur qui tient dans une interface mobile accessible depuis un bot Telegram.",
    },
    challenge: {
      label: "Probleme",
      heading: "Construire un univers de jeu complet dans un canal qui n'est pas fait pour ca.",
      body: "Telegram n'est pas une plateforme de jeu. C'est un outil de messagerie. Pourtant, l'ecosysteme Telegram Mini Apps ouvre une surface de distribution massive avec des millions d'utilisateurs actifs. Le defi etait de concevoir une experience de jeu immersive dans les contraintes d'une interface web embarquee : pas d'app store, pas de telechargement, pas de onboarding complexe. L'utilisateur ouvre un lien, entre dans le jeu. En parallele, il fallait concevoir un systeme economique credible : tokens, recompenses, progression, sans tomber dans les schemas speculatifs qui discreditent le Web3 gaming. Le produit devait etre un jeu avant d'etre un projet crypto.",
    },
    thinking: {
      label: "Reflexion",
      heading: "Penser en systeme, pas en ecrans.",
      body: "On a commence par la boucle de jeu, pas par l'interface. Qu'est-ce qui fait revenir un joueur ? Quelle est la progression ? Quels sont les paliers de recompense ? Comment le systeme de clans cree de la retention sociale ? Ces questions de game design ont conditionne chaque decision d'interface. L'economie de tokens a ete concue comme un systeme ferme avec des entrees et des sorties equilibrees. Les joueurs gagnent des tokens par l'activite in-game, les depensent pour progresser, et le systeme reste stable sans inflation. On a cartographie l'ensemble avant de dessiner le premier ecran. La direction artistique a ete traitee comme un pilier de produit, pas comme une couche decorative. L'univers visuel devait porter l'immersion autant que les mecaniques de jeu.",
    },
    approach: {
      label: "Approche",
      heading: "Un univers visuel qui porte le produit.",
      body: "La direction artistique s'inspire de l'esthetique neo-japonaise : contrastes marques, typographie forte, palette sombre avec des accents vifs. Chaque element visuel sert le worldbuilding. Les avatars, les badges de clan, les ecrans de progression, les animations de recompense : tout participe a un univers coherent qui donne au joueur l'impression d'etre dans un produit construit, pas dans un prototype.\n\nL'interface a ete concue pour fonctionner dans les contraintes de Telegram Mini Apps. Navigation simplifiee, hierarchie visuelle claire, actions principales accessibles en un tap. Le joueur ne lit pas un mode d'emploi. Il ouvre l'app, comprend la mecanique, et joue.\n\nLe systeme de clans est le moteur social du produit. Les joueurs rejoignent des clans, grimpent dans la hierarchie (du Kobun au Oyabun), participent a des evenements collectifs. Cette couche sociale transforme un jeu individuel en experience communautaire avec de la retention a long terme.\n\nLe systeme de recompenses lie la progression individuelle a l'economie de tokens. Chaque action in-game a une valeur dans le systeme economique. Le joueur progresse, gagne, depense, et reste engage dans une boucle coherente.",
    },
    execution: {
      label: "Execution",
      heading: "Direction artistique, product design et systemes de jeu.",
      body: "P-XEL a concu l'ensemble du produit : direction artistique complete, design d'interface, systeme de progression, economie de tokens, hierarchie de clans, et integration Telegram. L'identite visuelle a ete creee de zero : logo, palette, typographie, composants d'interface, elements de worldbuilding. Le product design couvre l'ensemble des flux utilisateur : onboarding, boucle de jeu quotidienne, progression, interactions de clan, recompenses. Chaque systeme a ete documente et specifie pour le developpement.",
    },
    result: {
      label: "Impact",
      heading: "Un produit gaming pret a deployer. Pas un concept.",
      body: "Oyabun est un produit complet avec un univers visuel construit, des mecaniques de jeu specifiees, une economie de tokens equilibree et une experience utilisateur concue pour Telegram. Le projet demontre la capacite de P-XEL a travailler sur des produits complexes qui depassent le cadre classique du web : game design, worldbuilding, systemes economiques, distribution sur des canaux non-conventionnels. C'est du product design applique a un domaine ou la plupart des studios de design ne vont pas.",
    },
  },
  deliverables: [
    "Direction artistique complete (logo, palette, typographie, worldbuilding)",
    "Product design (UX research, user flows, UI design)",
    "Systeme de progression et boucle de jeu",
    "Architecture de l'economie de tokens",
    "Systeme de clans et hierarchie sociale",
    "Design d'interface pour Telegram Mini Apps",
    "Specifications fonctionnelles pour le developpement",
  ],
  stack: ["Figma", "Telegram Mini Apps", "Web3", "Token Economy Design"],
  cta: {
    heading: "Un produit digital ambitieux a concevoir ?",
    body: "On concoit des applications web et produits digitaux qui sortent du cadre. Direction artistique, product design, systemes complexes.",
    serviceLink: { label: "applications web et produits digitaux", href: "/services/application-web-mvp/" },
  },
  navigation: {
    next: { slug: "arduenna-gin", title: "Arduenna Gin" },
  },
  internalLinks: [
    { label: "Applications web et MVP", href: "/services/application-web-mvp/" },
  ],
};
