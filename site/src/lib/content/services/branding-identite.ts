import type { ServicePage } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, ServicePage> = {
  fr: {
    slug: "branding-identite",
    metaTitle: "Branding & Identité Visuelle | P-XEL Studio - Belgique",
    metaDescription:
      "Branding stratégique en Belgique. Logo, identité visuelle, charte graphique et design system. Un studio senior avec 16+ ans d'expérience produit.",

    hero: {
      label: "Branding & Identité Visuelle",
      heading: "Votre marque mérite plus qu'un logo.",
      subheadline:
        "On construit des identités de marque qui structurent votre communication, différencient votre offre et soutiennent votre croissance. Du logo au design system complet.",
      image: "/images/Services_Branding.webp",
    },

    problem: {
      label: "Le problème",
      heading: "Une marque faible coûte cher.",
      intro:
        "Votre produit est solide. Votre service tient ses promesses. Mais votre image ne suit pas.",
      points: [
        "Votre identité manque de cohérence. Chaque support a un style différent. Logo, site, réseaux sociaux, présentations : rien ne se ressemble.",
        "Vous ne vous différenciez pas. Votre marque ressemble à celle de vos concurrents. Les prospects ne retiennent pas votre nom.",
        "Il y a un décalage entre votre image et votre ambition. Vous avez évolué, mais votre identité visuelle est restée au stade du premier logo fait rapidement.",
        "Vous n'avez pas de système. Chaque nouveau support est créé from scratch. Pas de charte, pas de composants, pas de règles. Le résultat est incohérent et chronophage.",
      ],
    },

    whatWeBuild: {
      label: "Ce qu'on construit",
      heading: "Une identité complète. Pas juste un logo isolé.",
      intro:
        "On construit des systèmes de marque qui fonctionnent dans la durée. Du naming au design system, chaque élément est pensé pour servir votre positionnement.",
      items: [
        {
          title: "Logo et marque verbale",
          body: "Conception du logo, du logotype et de la marque verbale. On crée un signe distinctif qui fonctionne sur tous les supports, toutes les tailles, tous les contextes.",
          icon: "hexagon",
        },
        {
          title: "Identité visuelle",
          body: "Palette de couleurs, typographie, iconographie, style photographique. Un langage visuel cohérent qui traduit votre positionnement en éléments concrets.",
          icon: "palette",
        },
        {
          title: "Direction artistique",
          body: "Définition de l'univers visuel global de la marque. Atmosphère, ton, références, principes de composition. Le cadre créatif qui guide toutes les productions.",
          icon: "eye",
        },
        {
          title: "Charte graphique",
          body: "Document de référence complet : règles d'utilisation du logo, codes couleurs, grilles typographiques, do's and don'ts. Pour que votre marque reste cohérente, même sans vous.",
          icon: "book",
        },
        {
          title: "Brand guidelines",
          body: "Au-delà du visuel : ton de voix, principes de communication, vocabulaire de marque, exemples d'application. Le guide complet pour tous les collaborateurs et prestataires.",
          icon: "compass",
        },
        {
          title: "Design system de marque",
          body: "Bibliothèque de composants visuels réutilisables dans Figma. Templates, éléments graphiques, mises en page. Pour produire des supports cohérents rapidement.",
          icon: "grid",
        },
        {
          title: "Supports digitaux et print",
          body: "Application de l'identité sur vos supports clés : cartes de visite, templates de présentation, réseaux sociaux, signatures email, papeterie.",
          icon: "printer",
        },
      ],
    },

    approach: {
      label: "Notre méthode",
      heading: "Stratégie d'abord. Identité ensuite.",
      intro:
        "On ne commence pas par dessiner un logo. On commence par comprendre votre marché, votre audience et votre positionnement. Le design est une conséquence stratégique, pas un exercice esthétique.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          body: "Compréhension de votre entreprise, de votre marché, de vos concurrents et de votre audience. On identifie ce qui vous rend unique et ce que votre marque doit communiquer.",
        },
        {
          number: "02",
          title: "Stratégie",
          body: "Définition du positionnement de marque, des valeurs, du ton de voix et des messages clés. La fondation sur laquelle tout le système visuel va reposer.",
        },
        {
          number: "03",
          title: "Exploration",
          body: "Recherche visuelle, moodboards, pistes créatives. On explore plusieurs directions avant de converger. Vous participez au choix de la direction retenue.",
        },
        {
          number: "04",
          title: "Design",
          body: "Création du logo, de l'identité visuelle et de tous les éléments graphiques. Itérations et affinage jusqu'à un résultat qui incarne parfaitement votre positionnement.",
        },
        {
          number: "05",
          title: "Construction du système",
          body: "Développement de la charte graphique, des guidelines et du design system. On transforme l'identité en un outil opérationnel utilisable par toute votre équipe.",
        },
        {
          number: "06",
          title: "Livraison",
          body: "Remise de tous les fichiers, documentation et templates. Formation à l'utilisation du système de marque. On s'assure que vous êtes autonome pour la suite.",
        },
      ],
    },

    deliverables: {
      label: "Ce que vous recevez",
      heading: "Un système de marque complet. Prêt à l'emploi.",
      intro: "Chaque projet de branding inclut :",
      items: [
        "Fichiers logo (SVG, PNG, EPS) en toutes déclinaisons",
        "Palette de couleurs complète avec codes (HEX, RGB, CMYK)",
        "Système typographique avec licences",
        "Charte graphique PDF détaillée",
        "Composants Figma réutilisables",
        "Brand guidelines complet",
        "Exemples d'application sur supports clés",
        "Fichiers sources éditables",
      ],
    },

    caseStudies: {
      label: "Résultats",
      heading: "Des marques construites. Pas juste dessinées.",
      studies: [
        {
          name: "Oyabun",
          tags: ["Branding", "Direction artistique", "Univers manga"],
          body: "Identite de marque complete pour un ecosysteme gaming Web3. Direction artistique cyber-yakuza, logo, personnages NFT, systeme visuel et declinaisons sur tous les supports.",
          href: "/work/oyabun/",
        },
      ],
    },

    investment: {
      label: "Investissement",
      heading: "Un investissement qui structure votre image pour des années.",
      body: "Le coût d'un projet de branding dépend de l'étendue du travail : logo seul, identité visuelle complète ou système de marque global avec guidelines et design system.\n\nUn projet de logo et identité de base peut démarrer à un budget accessible. Un système de marque complet avec charte, guidelines et design system représente un investissement plus conséquent. On définit le périmètre ensemble après un premier échange.",
      anchor: "Estimation gratuite sous 24h",
      note: "On fournit une estimation détaillée et gratuite avant de démarrer. Pas d'engagement, pas de surprise.",
    },

    faq: {
      label: "Questions fréquentes",
      items: [
        {
          question: "Combien de temps prend un projet de branding ?",
          answer:
            "Un projet de logo et identité de base prend 3 à 4 semaines. Une identité complète avec charte graphique entre 4 et 8 semaines. Un système de marque complet avec guidelines et design system peut prendre 8 à 12 semaines.",
        },
        {
          question: "Combien de propositions de logo recevons-nous ?",
          answer:
            "On présente généralement 2 à 3 directions créatives distinctes. Chaque direction est argumentée et alignée sur la stratégie définie ensemble. On affine ensuite la direction retenue jusqu'au résultat final.",
        },
        {
          question: "Peut-on faire évoluer notre marque sans tout refaire ?",
          answer:
            "Oui. On peut moderniser votre identité existante sans repartir de zéro. Un rafraîchissement ciblé permet de mettre à jour votre image tout en préservant la reconnaissance acquise.",
        },
        {
          question: "Les fichiers livrés sont-ils exploitables par notre équipe ?",
          answer:
            "Tous les fichiers sont livrés dans des formats standards et exploitables : SVG, PNG, EPS pour le logo, Figma pour les composants, PDF pour la charte. On inclut une formation pour garantir l'autonomie de votre équipe.",
        },
        {
          question: "Travaillez-vous aussi sur le naming ?",
          answer:
            "On peut accompagner la réflexion sur le naming dans le cadre d'un projet de branding global. Ce n'est pas notre spécialité première, mais on intègre cette étape quand elle est nécessaire.",
        },
        {
          question: "Quelle est la différence entre une charte graphique et des brand guidelines ?",
          answer:
            "La charte graphique couvre les règles visuelles : logo, couleurs, typographie, grilles. Les brand guidelines vont plus loin : ton de voix, principes de communication, exemples d'application, vocabulaire de marque. C'est le document de référence complet pour toute personne qui communique au nom de votre marque.",
        },
      ],
    },

    cta: {
      heading:
        "Votre marque mérite un système, pas juste un logo.",
      subtext:
        "Parlez-nous de votre projet. En 30 minutes, on évalue ensemble le potentiel de votre marque et les prochaines étapes.",
    },
  },

  en: {
    slug: "branding-identite",
    metaTitle: "Branding & Visual Identity | P-XEL Studio - Belgium",
    metaDescription:
      "Strategic branding in Belgium. Logo, visual identity, brand guidelines and design system. A senior studio with 16+ years of product experience.",

    hero: {
      label: "Branding & Visual Identity",
      heading: "Your brand deserves more than a logo.",
      subheadline:
        "We build brand identities that structure your communication, differentiate your offering and support your growth. From logo to complete design system.",
      image: "/images/Services_Branding.webp",
    },

    problem: {
      label: "The problem",
      heading: "A weak brand is expensive.",
      intro:
        "Your product is solid. Your service delivers on its promises. But your image doesn't keep up.",
      points: [
        "Your identity lacks consistency. Every touchpoint has a different style. Logo, website, social media, presentations: nothing looks alike.",
        "You don't stand out. Your brand looks like your competitors'. Prospects don't remember your name.",
        "There's a gap between your image and your ambition. You've evolved, but your visual identity stayed at the first logo stage.",
        "You don't have a system. Every new asset is created from scratch. No guidelines, no components, no rules. The result is inconsistent and time-consuming.",
      ],
    },

    whatWeBuild: {
      label: "What we build",
      heading: "A complete identity. Not just an isolated logo.",
      intro:
        "We build brand systems that work over time. From naming to design system, every element is designed to serve your positioning.",
      items: [
        {
          title: "Logo and wordmark",
          body: "Logo, logotype and wordmark design. We create a distinctive mark that works across all media, all sizes, all contexts.",
          icon: "hexagon",
        },
        {
          title: "Visual identity",
          body: "Color palette, typography, iconography, photographic style. A consistent visual language that translates your positioning into concrete elements.",
          icon: "palette",
        },
        {
          title: "Art direction",
          body: "Definition of the brand's overall visual universe. Atmosphere, tone, references, composition principles. The creative framework that guides all productions.",
          icon: "eye",
        },
        {
          title: "Brand style guide",
          body: "Complete reference document: logo usage rules, color codes, typographic grids, do's and don'ts. So your brand stays consistent, even without you.",
          icon: "book",
        },
        {
          title: "Brand guidelines",
          body: "Beyond the visual: tone of voice, communication principles, brand vocabulary, application examples. The complete guide for all team members and vendors.",
          icon: "compass",
        },
        {
          title: "Brand design system",
          body: "Reusable visual component library in Figma. Templates, graphic elements, layouts. To produce consistent assets quickly.",
          icon: "grid",
        },
        {
          title: "Digital and print assets",
          body: "Identity application on your key touchpoints: business cards, presentation templates, social media, email signatures, stationery.",
          icon: "printer",
        },
      ],
    },

    approach: {
      label: "Our method",
      heading: "Strategy first. Identity second.",
      intro:
        "We don't start by drawing a logo. We start by understanding your market, your audience and your positioning. Design is a strategic consequence, not an aesthetic exercise.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          body: "Understanding your company, your market, your competitors and your audience. We identify what makes you unique and what your brand needs to communicate.",
        },
        {
          number: "02",
          title: "Strategy",
          body: "Definition of brand positioning, values, tone of voice and key messages. The foundation on which the entire visual system will rest.",
        },
        {
          number: "03",
          title: "Exploration",
          body: "Visual research, moodboards, creative directions. We explore multiple directions before converging. You participate in choosing the selected direction.",
        },
        {
          number: "04",
          title: "Design",
          body: "Creation of the logo, visual identity and all graphic elements. Iterations and refinement until a result that perfectly embodies your positioning.",
        },
        {
          number: "05",
          title: "System building",
          body: "Development of the style guide, brand guidelines and design system. We transform the identity into an operational tool usable by your entire team.",
        },
        {
          number: "06",
          title: "Delivery",
          body: "Handover of all files, documentation and templates. Training on using the brand system. We make sure you're autonomous going forward.",
        },
      ],
    },

    deliverables: {
      label: "What you receive",
      heading: "A complete brand system. Ready to use.",
      intro: "Every branding project includes:",
      items: [
        "Logo files (SVG, PNG, EPS) in all variations",
        "Complete color palette with codes (HEX, RGB, CMYK)",
        "Typographic system with licenses",
        "Detailed brand style guide PDF",
        "Reusable Figma components",
        "Complete brand guidelines",
        "Application examples on key touchpoints",
        "Editable source files",
      ],
    },

    caseStudies: {
      label: "Results",
      heading: "Brands built. Not just drawn.",
      studies: [
        {
          name: "Oyabun",
          tags: ["Branding", "Art Direction", "Manga universe"],
          body: "Complete brand identity for a Web3 gaming ecosystem. Cyber-yakuza art direction, logo, NFT characters, visual system and variations across all touchpoints.",
          href: "/en/work/oyabun/",
        },
      ],
    },

    investment: {
      label: "Investment",
      heading: "An investment that structures your image for years.",
      body: "The cost of a branding project depends on the scope: logo only, complete visual identity, or global brand system with guidelines and design system.\n\nA logo and basic identity project can start at an accessible budget. A complete brand system with style guide, guidelines and design system represents a more significant investment. We define the scope together after a first conversation.",
      anchor: "Free estimate within 24h",
      note: "We provide a detailed, free estimate before starting. No commitment, no surprises.",
    },

    faq: {
      label: "Frequently asked questions",
      items: [
        {
          question: "How long does a branding project take?",
          answer:
            "A basic logo and identity project takes 3 to 4 weeks. A complete identity with style guide between 4 and 8 weeks. A full brand system with guidelines and design system can take 8 to 12 weeks.",
        },
        {
          question: "How many logo proposals do we receive?",
          answer:
            "We typically present 2 to 3 distinct creative directions. Each direction is reasoned and aligned with the strategy defined together. We then refine the chosen direction to the final result.",
        },
        {
          question: "Can we evolve our brand without starting over?",
          answer:
            "Yes. We can modernize your existing identity without starting from zero. A targeted refresh updates your image while preserving the recognition you've built.",
        },
        {
          question: "Are the delivered files usable by our team?",
          answer:
            "All files are delivered in standard, usable formats: SVG, PNG, EPS for the logo, Figma for components, PDF for the style guide. We include training to ensure your team's autonomy.",
        },
        {
          question: "Do you also work on naming?",
          answer:
            "We can support naming within a global branding project. It's not our primary specialty, but we integrate this step when it's necessary.",
        },
        {
          question: "What is the difference between a style guide and brand guidelines?",
          answer:
            "The style guide covers visual rules: logo, colors, typography, grids. Brand guidelines go further: tone of voice, communication principles, application examples, brand vocabulary. It's the complete reference document for anyone communicating on behalf of your brand.",
        },
      ],
    },

    cta: {
      heading:
        "Your brand deserves a system, not just a logo.",
      subtext:
        "Tell us about your project. In 30 minutes, we'll assess your brand's potential together and outline the next steps.",
    },
  },
} as const;

export function getBrandingIdentiteContent(locale: Locale) {
  return content[locale];
}

// Re-export default for backward compatibility
export const brandingIdentite = content.fr;
