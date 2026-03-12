import type { CaseStudy } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, CaseStudy> = {
  fr: {
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
  },

  en: {
    slug: "oyabun",
    title: "Oyabun",
    metaTitle: "Oyabun - Gaming & Web3 Application",
    metaDescription:
      "Design of a Web3 gaming application with Telegram integration. Art direction, product design and complete game system. P-XEL Studio case study.",
    tags: ["Product Design", "Gaming", "Web3", "Telegram"],
    tagline:
      "Web3 gaming application with token economy, clan system and Telegram integration. A complete universe designed to engage and retain.",
    keyResult: "A complete gaming product, from concept to launch",
    period: "2024-2025",
    heroImage: "/images/case-studies/oyabun-hero.webp",
    beats: {
      context: {
        label: "Context",
        heading: "A gaming product at the crossroads of Web3 and mobile.",
        body: "Oyabun is a Web3 gaming project rooted in a narrative universe inspired by yakuza culture. The product needed to combine game mechanics (progression, rewards, clan hierarchies), a token economy, and distribution via Telegram to capture an audience already present on the platform. The challenge wasn't to \"make a game.\" It was to design a complete digital product: a game system, a functional economy, a strong visual identity, and a user experience that fits within a mobile interface accessible from a Telegram bot.",
      },
      challenge: {
        label: "Challenge",
        heading: "Building a complete game universe in a channel not designed for it.",
        body: "Telegram is not a gaming platform. It's a messaging tool. Yet the Telegram Mini Apps ecosystem opens a massive distribution surface with millions of active users. The challenge was to design an immersive gaming experience within the constraints of an embedded web interface: no app store, no download, no complex onboarding. The user opens a link and enters the game. In parallel, we needed to design a credible economic system: tokens, rewards, progression, without falling into the speculative patterns that discredit Web3 gaming. The product had to be a game before being a crypto project.",
      },
      thinking: {
        label: "Thinking",
        heading: "Thinking in systems, not in screens.",
        body: "We started with the game loop, not the interface. What brings a player back? What is the progression? What are the reward tiers? How does the clan system create social retention? These game design questions conditioned every interface decision. The token economy was designed as a closed system with balanced inputs and outputs. Players earn tokens through in-game activity, spend them to progress, and the system stays stable without inflation. We mapped everything before drawing the first screen. Art direction was treated as a product pillar, not a decorative layer. The visual universe had to carry immersion as much as the game mechanics.",
      },
      approach: {
        label: "Approach",
        heading: "A visual universe that carries the product.",
        body: "The art direction draws from neo-Japanese aesthetics: strong contrasts, bold typography, dark palette with vivid accents. Every visual element serves the worldbuilding. Avatars, clan badges, progression screens, reward animations: everything contributes to a cohesive universe that gives the player the feeling of being in a built product, not a prototype.\n\nThe interface was designed to work within Telegram Mini Apps constraints. Simplified navigation, clear visual hierarchy, main actions accessible in one tap. The player doesn't read a manual. They open the app, understand the mechanic, and play.\n\nThe clan system is the social engine of the product. Players join clans, climb the hierarchy (from Kobun to Oyabun), participate in collective events. This social layer transforms an individual game into a community experience with long-term retention.\n\nThe reward system ties individual progression to the token economy. Every in-game action has value in the economic system. The player progresses, earns, spends, and stays engaged in a cohesive loop.",
      },
      execution: {
        label: "Execution",
        heading: "Art direction, product design and game systems.",
        body: "P-XEL designed the entire product: complete art direction, interface design, progression system, token economy, clan hierarchy, and Telegram integration. The visual identity was created from scratch: logo, palette, typography, interface components, worldbuilding elements. The product design covers all user flows: onboarding, daily game loop, progression, clan interactions, rewards. Every system was documented and specified for development.",
      },
      result: {
        label: "Impact",
        heading: "A gaming product ready to deploy. Not a concept.",
        body: "Oyabun is a complete product with a built visual universe, specified game mechanics, a balanced token economy and a user experience designed for Telegram. The project demonstrates P-XEL's ability to work on complex products that go beyond the classic web framework: game design, worldbuilding, economic systems, distribution on unconventional channels. This is product design applied to a domain where most design studios don't go.",
      },
    },
    deliverables: [
      "Complete art direction (logo, palette, typography, worldbuilding)",
      "Product design (UX research, user flows, UI design)",
      "Progression system and game loop",
      "Token economy architecture",
      "Clan system and social hierarchy",
      "Interface design for Telegram Mini Apps",
      "Functional specifications for development",
    ],
    stack: ["Figma", "Telegram Mini Apps", "Web3", "Token Economy Design"],
    cta: {
      heading: "An ambitious digital product to design?",
      body: "We design web applications and digital products that go beyond the norm. Art direction, product design, complex systems.",
      serviceLink: { label: "web applications and digital products", href: "/en/services/application-web-mvp/" },
    },
    navigation: {
      next: { slug: "arduenna-gin", title: "Arduenna Gin" },
    },
    internalLinks: [
      { label: "Web applications and MVPs", href: "/en/services/application-web-mvp/" },
    ],
  },
} as const;

export function getOyabunContent(locale: Locale) {
  return content[locale];
}

// Re-export default for backward compatibility
export const oyabun = content.fr;
