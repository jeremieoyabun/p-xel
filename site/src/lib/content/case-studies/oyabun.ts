import type { CaseStudy } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, CaseStudy> = {
  fr: {
    slug: "oyabun",
    title: "Oyabun",
    metaTitle: "Oyabun - Jeu Mobile Web3 Play-to-Earn",
    metaDescription:
      "Conception et design d'un jeu mobile Web3 play-to-earn dans un univers manga cyber-yakuza. Direction artistique, game design, NFTs et tokenomics. Étude de cas P-XEL Studio.",
    tags: ["Product Design", "Gaming", "Web3", "NFT"],
    tagline:
      "Jeu mobile Web3 dans un univers manga cyber-yakuza. Fight Missions, Street Missions, NFTs et token OYAB. Un produit gaming conçu pour durer.",
    keyResult: "Un écosystème gaming Web3 complet, du concept au lancement",
    period: "2024-2025",
    heroImage: "/images/case-studies/oyabun-hero.webp",
    beats: {
      context: {
        label: "Contexte",
        heading: "Un jeu mobile Web3 ancré dans un univers manga.",
        body: "Oyabun est un jeu mobile play-to-earn plongé dans un univers manga cyber-yakuza. Les joueurs incarnent des personnages NFT, grimpent dans la hiérarchie des clans, enchaînent les Fight Missions en PvE et PvP, et parcourent les rues en Street Missions pour accumuler des tokens OYAB. Le projet ne se limitait pas à \"faire un jeu\". Il fallait concevoir un écosystème complet : game design, économie de tokens équilibrée, système de progression par NFT, direction artistique immersive, et une expérience mobile pensée pour des sessions courtes mais addictives.",
      },
      challenge: {
        label: "Problème",
        heading: "Créer un jeu qui retient ses joueurs. Pas un projet crypto déguisé.",
        body: "Le Web3 gaming souffre d'un problème de crédibilité. Trop de projets mettent la spéculation avant le gameplay. Oyabun devait prouver le contraire : un vrai jeu d'abord, avec une couche blockchain qui enrichit l'expérience sans la compliquer. Le défi était triple. Concevoir des Fight Missions et des Street Missions engageantes. Construire une tokenomics qui ne s'effondre pas après trois mois. Et intégrer les NFTs comme moteur de progression, pas comme produit financier. Le joueur devait ouvrir l'app, jouer en 10 minutes, et avoir envie de revenir le lendemain.",
      },
      thinking: {
        label: "Réflexion",
        heading: "Le game loop avant les écrans.",
        body: "On a commencé par la boucle de jeu. Deux piliers : les Fight Missions (combats automatisés contre l'IA ou d'autres joueurs, avec gains d'XP et de tokens OYAB) et les Street Missions (marche en ville pour patrouiller des territoires, générer des revenus et obtenir des loot boxes). Chaque pilier a ses propres mécaniques d'énergie, de récompense et de progression. Le système NFT a été pensé comme un moteur de jeu : plus de personnages NFT = plus d'énergie quotidienne = plus de combats et de missions. Le recrutement de nouveaux personnages se fait par fusion de deux existants. L'amélioration par fusion de trois personnages de même rareté. Ce sont des mécaniques de jeu, pas de la spéculation. L'économie OYAB a été modélisée avec des entrées et des sorties équilibrées pour éviter l'inflation. Le joueur gagne, dépense, progresse, et le système reste stable.",
        image: "/images/case-studies/P-xel_work_Oyabun-01.webp",
      },
      approach: {
        label: "Approche",
        heading: "Un univers visuel qui donne envie de rester.",
        body: "La direction artistique plonge le joueur dans un Japon futuriste et sombre. Esthétique manga, contrastes brutaux, palette noire rehaussée de néons. Chaque élément visuel sert l'univers : les avatars cyber-yakuza, les écrans de combat, les animations de loot, les badges de clan.\n\nL'interface mobile a été conçue pour des sessions rapides. Navigation à un pouce, hiérarchie visuelle nette, actions principales en un tap. Le joueur lance un combat, patrouille un quartier, améliore un personnage, le tout en quelques minutes.\n\nLe système de clans structure toute la dimension sociale. Les joueurs rejoignent un clan, grimpent du rang de Kobun jusqu'au titre d'Oyabun, participent à des ligues collectives. Cette couche sociale crée de la rétention à long terme et transforme un jeu solo en expérience communautaire.\n\nLe système de scholarship prévu permet aux joueurs expérimentés de prêter des NFTs aux nouveaux. Un mécanisme qui élargit la base de joueurs sans diluer la valeur des actifs.",
        image: "/images/case-studies/P-xel_work_Oyabun-02.webp",
      },
      execution: {
        label: "Exécution",
        heading: "Direction artistique, game design et systèmes.",
        body: "P-XEL a conçu l'ensemble du produit sur deux applications (Telegram et Unity) : direction artistique complète, design des personnages NFT, Fight Missions, Street Missions, tokenomics OYAB, système de clans et de hiérarchie, interfaces mobiles. UX/UI et app design des deux plateformes. Coordination dev/design pour garantir la cohérence entre les équipes. Création et validation de tous les visuels : assets sociaux, visuels NFT, vidéos promotionnelles. Branding et communication : identité de marque, système visuel, déclinaisons sur tous les canaux. Web design du site vitrine de l'écosystème.",
        image: "/images/case-studies/P-xel_work_Oyabun-03.webp",
      },
      result: {
        label: "Impact",
        heading: "Un écosystème gaming Web3 prêt à déployer.",
        body: "Oyabun est un produit complet : univers manga construit, mécaniques de jeu spécifiées (Fight Missions PvE/PvP, Street Missions, fusion de personnages), tokenomics modélisée, système de clans et de progression NFT. Le projet démontre la capacité de P-XEL à concevoir des produits complexes qui dépassent le cadre classique du web : game design, worldbuilding, tokenomics, systèmes NFT. Du product design appliqué à un domaine où la plupart des studios ne vont pas.",
        image: "/images/case-studies/P-xel_work_Oyabun-04.webp",
      },
    },
    deliverables: [
      "Direction artistique complète (univers manga cyber-yakuza, personnages, worldbuilding)",
      "UX/UI et app design (Telegram + Unity)",
      "Création visuels NFT, assets sociaux et vidéos promotionnelles",
      "Branding, communication et web design",
      "Pitch deck",
      "Animations motion design",
      "Coordination dev/design",
    ],
    stack: ["Figma", "Unity", "Web3", "NFT", "Token Economy Design"],
    cta: {
      heading: "Un produit digital ambitieux à concevoir ?",
      body: "On conçoit des applications et produits digitaux qui sortent du cadre. Direction artistique, product design, systèmes complexes.",
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
    metaTitle: "Oyabun - Web3 Play-to-Earn Mobile Game",
    metaDescription:
      "Design of a Web3 play-to-earn mobile game set in a manga cyber-yakuza universe. Art direction, game design, NFTs and tokenomics. P-XEL Studio case study.",
    tags: ["Product Design", "Gaming", "Web3", "NFT"],
    tagline:
      "Web3 mobile game in a manga cyber-yakuza universe. Fights, street missions, NFTs and OYAB token. A gaming product built to last.",
    keyResult: "A complete Web3 gaming ecosystem, from concept to launch",
    period: "2024-2025",
    heroImage: "/images/case-studies/oyabun-hero.webp",
    beats: {
      context: {
        label: "Context",
        heading: "A Web3 mobile game rooted in a manga universe.",
        body: "Oyabun is a play-to-earn mobile game set in a manga cyber-yakuza universe. Players embody NFT characters, climb clan hierarchies, fight in PvE and PvP battles, and patrol streets to earn OYAB tokens. The project went beyond \"making a game.\" It required designing a complete ecosystem: game design, balanced token economy, NFT-driven progression, immersive art direction, and a mobile experience built for short but addictive sessions.",
      },
      challenge: {
        label: "Challenge",
        heading: "Building a game that keeps players. Not a crypto project in disguise.",
        body: "Web3 gaming has a credibility problem. Too many projects put speculation before gameplay. Oyabun had to prove the opposite: a real game first, with a blockchain layer that enhances the experience without complicating it. The challenge was threefold. Design engaging combat and exploration mechanics. Build a token economy that doesn't collapse after three months. And integrate NFTs as a progression engine, not a financial product. The player had to open the app, play for 10 minutes, and want to come back tomorrow.",
      },
      thinking: {
        label: "Thinking",
        heading: "The game loop before the screens.",
        body: "We started with the game loop. Two pillars: Fight Missions (automated combat against AI or other players, earning XP and OYAB tokens) and Street Missions (walking through the city to patrol territories, generate revenue and collect loot boxes). Each pillar has its own energy, reward and progression mechanics. The NFT system was designed as a game engine: more NFT characters = more daily energy = more fights and missions. Recruiting new characters is done by fusing two existing ones. Upgrading by fusing three characters of the same rarity. These are game mechanics, not speculation. The OYAB economy was modeled with balanced inputs and outputs to prevent inflation. The player earns, spends, progresses, and the system stays stable.",
        image: "/images/case-studies/P-xel_work_Oyabun-01.webp",
      },
      approach: {
        label: "Approach",
        heading: "A visual universe that makes you want to stay.",
        body: "The art direction immerses the player in a dark, futuristic Japan. Manga aesthetics, brutal contrasts, black palette with neon highlights. Every visual element serves the universe: cyber-yakuza avatars, combat screens, loot animations, clan badges.\n\nThe mobile interface was designed for quick sessions. One-thumb navigation, clear visual hierarchy, main actions in one tap. The player launches a fight, patrols a district, upgrades a character, all in a few minutes.\n\nThe clan system structures the entire social dimension. Players join a clan, climb from Kobun rank to the Oyabun title, participate in collective leagues. This social layer creates long-term retention and transforms a solo game into a community experience.\n\nThe planned scholarship system allows experienced players to lend NFTs to newcomers. A mechanism that expands the player base without diluting asset value.",
        image: "/images/case-studies/P-xel_work_Oyabun-02.webp",
      },
      execution: {
        label: "Execution",
        heading: "Art direction, game design and systems.",
        body: "P-XEL designed the entire product across two applications (Telegram and Unity): complete art direction, NFT character design, combat and exploration mechanics, OYAB token economy, clan and hierarchy system, mobile interfaces. UX/UI and app design for both platforms. Dev/design coordination to ensure consistency across teams. Creation and validation of all visuals: social assets, NFT artwork, promotional videos. Branding and communication: brand identity, visual system, variations across all channels. Web design for the ecosystem's showcase site.",
        image: "/images/case-studies/P-xel_work_Oyabun-03.webp",
      },
      result: {
        label: "Impact",
        heading: "A Web3 gaming ecosystem ready to deploy.",
        body: "Oyabun is a complete product: built manga universe, specified game mechanics (PvE/PvP combat, street missions, character fusion), modeled token economy, clan system and NFT progression. The project demonstrates P-XEL's ability to design complex products beyond the classic web scope: game design, worldbuilding, tokenomics, NFT systems. Product design applied to a domain where most studios don't go.",
        image: "/images/case-studies/P-xel_work_Oyabun-04.webp",
      },
    },
    deliverables: [
      "Complete art direction (manga cyber-yakuza universe, characters, worldbuilding)",
      "UX/UI and app design (Telegram + Unity)",
      "NFT artwork, social assets and promotional videos",
      "Branding, communication and web design",
      "Pitch deck",
      "Motion design animations",
      "Dev/design coordination",
    ],
    stack: ["Figma", "Unity", "Web3", "NFT", "Token Economy Design"],
    cta: {
      heading: "An ambitious digital product to design?",
      body: "We design applications and digital products that go beyond the norm. Art direction, product design, complex systems.",
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
