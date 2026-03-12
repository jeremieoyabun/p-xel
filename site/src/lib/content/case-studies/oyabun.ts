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
      "Jeu mobile Web3 dans un univers manga cyber-yakuza. Combats, missions de rue, NFTs et token OYAB. Un produit gaming concu pour durer.",
    keyResult: "Un ecosysteme gaming Web3 complet, du concept au lancement",
    period: "2024-2025",
    heroImage: "/images/case-studies/oyabun-hero.webp",
    beats: {
      context: {
        label: "Contexte",
        heading: "Un jeu mobile Web3 ancre dans un univers manga.",
        body: "Oyabun est un jeu mobile play-to-earn plonge dans un univers manga cyber-yakuza. Les joueurs incarnent des personnages NFT, grimpent dans la hierarchie des clans, combattent en PvE et PvP, et parcourent les rues pour accumuler des tokens OYAB. Le projet ne se limitait pas a \"faire un jeu\". Il fallait concevoir un ecosysteme complet : game design, economie de tokens equilibree, systeme de progression par NFT, direction artistique immersive, et une experience mobile pensee pour des sessions courtes mais addictives.",
      },
      challenge: {
        label: "Probleme",
        heading: "Creer un jeu qui tient ses joueurs. Pas un projet crypto deguise.",
        body: "Le Web3 gaming souffre d'un probleme de credibilite. Trop de projets mettent la speculation avant le gameplay. Oyabun devait prouver le contraire : un vrai jeu d'abord, avec une couche blockchain qui enrichit l'experience sans la compliquer. Le defi etait triple. Concevoir des mecaniques de combat et d'exploration engageantes. Construire une economie de tokens qui ne s'effondre pas apres trois mois. Et integrer les NFTs comme moteur de progression, pas comme produit financier. Le joueur devait ouvrir l'app, jouer en 10 minutes, et avoir envie de revenir le lendemain.",
      },
      thinking: {
        label: "Reflexion",
        heading: "Le game loop avant les ecrans.",
        body: "On a commence par la boucle de jeu. Deux piliers : les Fight Missions (combats automatises contre l'IA ou d'autres joueurs, avec gains d'XP et de tokens OYAB) et les Street Missions (marche en ville pour patrouiller des territoires, generer des revenus et obtenir des loot boxes). Chaque pilier a ses propres mecaniques d'energie, de recompense et de progression. Le systeme NFT a ete pense comme un moteur de jeu : plus de personnages NFT = plus d'energie quotidienne = plus de combats et de missions. Le recrutement de nouveaux personnages se fait par fusion de deux existants. L'amelioration par fusion de trois personnages de meme rarete. Ce sont des mecaniques de jeu, pas de la speculation. L'economie OYAB a ete modelisee avec des entrees et des sorties equilibrees pour eviter l'inflation. Le joueur gagne, depense, progresse, et le systeme reste stable.",
      },
      approach: {
        label: "Approche",
        heading: "Un univers visuel qui donne envie de rester.",
        body: "La direction artistique plonge le joueur dans un Japon futuriste et sombre. Esthetique manga, contrastes brutaux, palette noire rehaussee de neons. Chaque element visuel sert l'univers : les avatars cyber-yakuza, les ecrans de combat, les animations de loot, les badges de clan.\n\nL'interface mobile a ete concue pour des sessions rapides. Navigation a un pouce, hierarchie visuelle nette, actions principales en un tap. Le joueur lance un combat, patrouille un quartier, ameliore un personnage, le tout en quelques minutes.\n\nLe systeme de clans structure toute la dimension sociale. Les joueurs rejoignent un clan, grimpent du rang de Kobun jusqu'au titre d'Oyabun, participent a des ligues collectives. Cette couche sociale cree de la retention a long terme et transforme un jeu solo en experience communautaire.\n\nLe systeme de scholarship prevu permet aux joueurs experimentes de preter des NFTs aux nouveaux. Un mecanisme qui elargit la base de joueurs sans diluer la valeur des actifs.",
      },
      execution: {
        label: "Execution",
        heading: "Direction artistique, game design et systemes.",
        body: "P-XEL a concu l'ensemble du produit sur deux applications (Telegram et Unity) : direction artistique complete, design des personnages NFT, mecaniques de combat et d'exploration, economie de tokens OYAB, systeme de clans et de hierarchie, interfaces mobiles. UX/UI et app design des deux plateformes. Coordination dev/design pour garantir la coherence entre les equipes. Creation et validation de tous les visuels : assets sociaux, visuels NFT, videos promotionnelles. Branding et communication : identite de marque, systeme visuel, declinaisons sur tous les canaux. Web design du site vitrine de l'ecosysteme.",
      },
      result: {
        label: "Impact",
        heading: "Un ecosysteme gaming Web3 pret a deployer.",
        body: "Oyabun est un produit complet : univers manga construit, mecaniques de jeu specifiees (combats PvE/PvP, missions de rue, fusion de personnages), economie de tokens modelisee, systeme de clans et de progression NFT. Le projet demontre la capacite de P-XEL a concevoir des produits complexes qui depassent le cadre classique du web : game design, worldbuilding, tokenomics, systemes NFT. Du product design applique a un domaine ou la plupart des studios ne vont pas.",
      },
    },
    deliverables: [
      "Direction artistique complete (univers manga cyber-yakuza, personnages, worldbuilding)",
      "UX/UI et app design (Telegram + Unity)",
      "Game design (fight missions, street missions, boucle de jeu)",
      "Architecture economie de tokens OYAB",
      "Systeme de progression et fusion NFT",
      "Creation visuels NFT, assets sociaux et videos promotionnelles",
      "Branding, communication et web design",
      "Coordination dev/design",
    ],
    stack: ["Figma", "Unity", "Web3", "NFT", "Token Economy Design"],
    cta: {
      heading: "Un produit digital ambitieux a concevoir ?",
      body: "On concoit des applications et produits digitaux qui sortent du cadre. Direction artistique, product design, systemes complexes.",
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
      },
      approach: {
        label: "Approach",
        heading: "A visual universe that makes you want to stay.",
        body: "The art direction immerses the player in a dark, futuristic Japan. Manga aesthetics, brutal contrasts, black palette with neon highlights. Every visual element serves the universe: cyber-yakuza avatars, combat screens, loot animations, clan badges.\n\nThe mobile interface was designed for quick sessions. One-thumb navigation, clear visual hierarchy, main actions in one tap. The player launches a fight, patrols a district, upgrades a character, all in a few minutes.\n\nThe clan system structures the entire social dimension. Players join a clan, climb from Kobun rank to the Oyabun title, participate in collective leagues. This social layer creates long-term retention and transforms a solo game into a community experience.\n\nThe planned scholarship system allows experienced players to lend NFTs to newcomers. A mechanism that expands the player base without diluting asset value.",
      },
      execution: {
        label: "Execution",
        heading: "Art direction, game design and systems.",
        body: "P-XEL designed the entire product across two applications (Telegram and Unity): complete art direction, NFT character design, combat and exploration mechanics, OYAB token economy, clan and hierarchy system, mobile interfaces. UX/UI and app design for both platforms. Dev/design coordination to ensure consistency across teams. Creation and validation of all visuals: social assets, NFT artwork, promotional videos. Branding and communication: brand identity, visual system, variations across all channels. Web design for the ecosystem's showcase site.",
      },
      result: {
        label: "Impact",
        heading: "A Web3 gaming ecosystem ready to deploy.",
        body: "Oyabun is a complete product: built manga universe, specified game mechanics (PvE/PvP combat, street missions, character fusion), modeled token economy, clan system and NFT progression. The project demonstrates P-XEL's ability to design complex products beyond the classic web scope: game design, worldbuilding, tokenomics, NFT systems. Product design applied to a domain where most studios don't go.",
      },
    },
    deliverables: [
      "Complete art direction (manga cyber-yakuza universe, characters, worldbuilding)",
      "UX/UI and app design (Telegram + Unity)",
      "Game design (fight missions, street missions, game loop)",
      "OYAB token economy architecture",
      "NFT progression and fusion system",
      "NFT artwork, social assets and promotional videos",
      "Branding, communication and web design",
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
