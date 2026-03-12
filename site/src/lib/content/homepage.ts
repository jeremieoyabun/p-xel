import type { Locale } from "@/lib/i18n/config";

const content = {
  fr: {
    hero: {
      label: "Product Design Studio / Liege, BE",
      headline: "On concoit. On construit. On livre.",
      subheadline:
        "Produits digitaux premium. Sites, applications, identites de marque. De la strategie au deploiement.",
      ctaPrimary: { label: "Reserver un appel", href: "https://calendly.com/p-xel" },
      ctaSecondary: { label: "Voir nos projets", href: "/work/" },
    },
    proofStrip: [
      { value: 16, suffix: "+", label: "annees d'expertise" },
      { value: 49, suffix: "+", label: "projets livres" },
      { value: 98, suffix: "%", label: "clients satisfaits" },
    ],
    clientLogos: [
      { name: "Greenmood", src: "/legacy-assets/logos/Logo_Greenmood.png" },
      { name: "Kokoro", src: "/legacy-assets/logos/Kokoro-logo.webp" },
      { name: "Globodai", src: "/legacy-assets/logos/Globodai-b.webp" },
      { name: "DO", src: "/legacy-assets/logos/Logo_DODS.png" },
      { name: "PN3DLG", src: "/legacy-assets/logos/PN3DLG-Logo.webp" },
      { name: "Kalibre", src: "/legacy-assets/logos/KALIBRE_logo.webp" },
      { name: "Modular", src: "/legacy-assets/logos/Modular-logo.webp" },
      { name: "ND", src: "/legacy-assets/logos/ND_Logo.webp" },
      { name: "Hopscotch", src: "/legacy-assets/logos/Hopscotch-Logo.webp" },
      { name: "Entourage", src: "/legacy-assets/logos/Entourage-logo.webp" },
      { name: "Oyabun", src: "/legacy-assets/logos/OYABUN_New-Logo_black.webp" },
      { name: "Naturovape", src: "/legacy-assets/logos/Naturovape-logo.webp" },
    ],
    capability: {
      label: "Ce qu'on construit",
      heading: "Du produit. Pas des livrables.",
      subtext:
        "On ne vend pas des heures. On concoit des produits digitaux complets, de l'idee au lancement. Un seul studio. Zero intermediaire.",
      items: [
        {
          title: "Sites web",
          description:
            "Sites vitrines, e-commerce, plateformes corporate. Rapides, optimises SEO, construits pour convertir.",
          href: "/services/creation-site-web/",
        },
        {
          title: "Applications web et MVP",
          description:
            "Outils metier, plateformes SaaS, prototypes fonctionnels, integrations IA. Du concept au produit qui tourne en production.",
          href: "/services/application-web-mvp/",
        },
        {
          title: "Design d'interface",
          description:
            "UX research, UI design, design systems, prototypage. Des interfaces pensees pour l'usage, pas pour la decoration.",
          href: "/services/ux-ui-design/",
        },
        {
          title: "Identite de marque",
          description:
            "Logo, direction artistique, systemes visuels. Des marques construites pour durer et pour scaler.",
          href: "/services/branding-identite/",
        },
      ],
    },
    selectedWork: {
      label: "Ce qu'on a livre",
      heading: "Derniers projets",
      projects: [
        {
          name: "BillyCheck",
          tags: ["Application Web", "SaaS", "Intelligence Artificielle", "Fintech"],
          description:
            "Application SaaS d'optimisation de factures energetiques. Upload, analyse IA, comparaison de 15+ fournisseurs. De l'idee au produit en production.",
          result: "30 secondes pour trouver des economies",
          href: "/work/billycheck/",
          image: "/images/case-studies/billycheck-hero.webp",
        },
        {
          name: "ChairSplit",
          tags: ["SaaS", "Plateforme Metier", "PWA", "Multi-Tenant"],
          description:
            "Plateforme SaaS de gestion pour barbershops. Revenus, commissions, equipes, fiches de paie. Multi-tenant, mobile-first.",
          result: "Produit SaaS complet en production",
          href: "/work/chairsplit/",
          image: "/images/case-studies/chairsplit-hero.webp",
        },
        {
          name: "Greenmood",
          tags: ["UX/UI", "Plateforme B2B", "Configurateur produit", "Design System"],
          description:
            "Plateforme B2B pour le leader europeen du design acoustique et biophilique. Architecture d'information, UX/UI et configurateurs produit.",
          result: "Site B2B multidomaines",
          href: "/work/greenmood/",
          image: "/images/case-studies/greenmood-hero.webp",
        },
        {
          name: "Arduenna",
          tags: ["Branding", "E-commerce", "Campagnes Ads", "Direction Artistique"],
          description:
            "Identite de marque, e-commerce et campagnes digitales pour un gin bio ardennais. Branding, Shopify, Meta Ads.",
          result: "2 ans de CA en 2 mois",
          href: "/work/arduenna/",
          image: "/images/case-studies/arduenna-hero.webp",
        },
        {
          name: "Oyabun",
          tags: ["Game Design", "Web3", "NFT", "Play-to-Earn"],
          description:
            "Jeu mobile Web3 dans un univers manga cyber-yakuza. Game design, direction artistique, tokenomics OYAB, Fight Missions et Street Missions.",
          result: "Ecosysteme gaming Web3 complet",
          href: "/work/oyabun/",
          image: "/images/case-studies/oyabun-hero.webp",
        },
      ],
      cta: { label: "Voir tous les projets", href: "/work/" },
    },
    whyPxel: {
      label: "Pourquoi nous",
      heading: "On ne livre pas des maquettes. On livre des produits.",
      points: [
        {
          number: "01",
          title: "On concoit et on execute",
          body: "La plupart des studios s'arretent a la maquette Figma. On va jusqu'au deploiement. Design, code, mise en ligne. Votre produit est fonctionnel, pas juste beau sur un ecran de presentation.",
        },
        {
          number: "02",
          title: "Un seul interlocuteur",
          body: "Pas de compte manager. Pas de couche intermediaire. Un studio senior qui travaille directement avec les decideurs. On comprend votre projet parce qu'on le porte du debut a la fin.",
        },
        {
          number: "03",
          title: "Rapide et precis",
          body: "On utilise l'IA comme levier d'execution. Ce qui prend 3 semaines en agence classique, on le livre en 5 jours. 2 ans de CA en 2 mois pour Arduenna Gin. Un SaaS complet en production pour BillyCheck. On ne promet pas la vitesse. On la demontre.",
        },
      ],
    },
    process: {
      label: "Comment on travaille",
      heading: "Du brief au lancement. Sans friction.",
      steps: [
        {
          number: "01",
          title: "Premier contact",
          description: "Decrivez votre projet en quelques lignes. On repond sous 24h.",
        },
        {
          number: "02",
          title: "Appel decouverte",
          description:
            "30 minutes pour comprendre vos objectifs, vos contraintes et vos attentes.",
        },
        {
          number: "03",
          title: "Proposition claire",
          description:
            "Perimetre, livrables, planning, budget. Tout est pose. Pas de surprises.",
        },
        {
          number: "04",
          title: "On construit",
          description:
            "Design, developpement, iterations. Vous suivez l'avancement en temps reel.",
        },
      ],
    },
    faq: {
      label: "Questions frequentes",
      items: [
        {
          question: "Quels types de projets prenez-vous en charge ?",
          answer:
            "Sites web, applications web, MVP, landing pages, e-commerce, branding et identites visuelles. On travaille avec des startups, des PME et des marques ambitieuses en Belgique, au Luxembourg et en Europe.",
        },
        {
          question: "Combien coute un projet avec P-XEL ?",
          answer:
            "Chaque projet est chiffre sur mesure en fonction du perimetre, de la complexite et de vos objectifs. A titre indicatif : landing page a partir de 1\u00a0500\u00a0\u20ac, site vitrine a partir de 3\u00a0500\u00a0\u20ac, MVP a partir de 5\u00a0000\u00a0\u20ac. On fournit une estimation detaillee et gratuite apres un premier echange. Pas de surprise, pas d'engagement.",
        },
        {
          question: "Quelle est la duree moyenne d'un projet ?",
          answer:
            "Landing page : 1 a 2 semaines. Site vitrine : 3 a 6 semaines. Application web : 6 a 12 semaines. On adapte le planning a vos contraintes.",
        },
        {
          question:
            "Est-ce que vous developpez aussi ou uniquement du design ?",
          answer:
            "On concoit et on developpe. Design, code et deploiement. Vous recevez un produit fonctionnel, pas une maquette.",
        },
        {
          question: "Ou etes-vous bases ?",
          answer:
            "A Liege, en Belgique. On travaille avec des clients en Wallonie, a Bruxelles, au Luxembourg et partout en Europe en remote.",
        },
      ],
    },
    finalCta: {
      heading: "Votre projet merite mieux qu'un template.",
      subtext:
        "Parlez-nous de votre idee. 30 minutes pour cadrer votre projet et poser les bases.",
      ctaPrimary: { label: "Reserver un appel", href: "https://calendly.com/p-xel" },
      ctaSecondary: { label: "Lancer mon projet", href: "/contact/" },
    },
    scrollRevealText:
      "On concoit, construit et livre des produits digitaux qui comptent.",
    testimonials: {
      label: "Retours clients",
    },
  },
  en: {
    hero: {
      label: "Product Design Studio / Liege, BE",
      headline: "We design. We build. We ship.",
      subheadline:
        "Premium digital products. Websites, apps, brand identities. From strategy to deployment.",
      ctaPrimary: { label: "Book a call", href: "https://calendly.com/p-xel" },
      ctaSecondary: { label: "View our work", href: "/en/work/" },
    },
    proofStrip: [
      { value: 16, suffix: "+", label: "years of expertise" },
      { value: 49, suffix: "+", label: "projects shipped" },
      { value: 98, suffix: "%", label: "satisfied clients" },
    ],
    clientLogos: [
      { name: "Greenmood", src: "/legacy-assets/logos/Logo_Greenmood.png" },
      { name: "Kokoro", src: "/legacy-assets/logos/Kokoro-logo.webp" },
      { name: "Globodai", src: "/legacy-assets/logos/Globodai-b.webp" },
      { name: "DO", src: "/legacy-assets/logos/Logo_DODS.png" },
      { name: "PN3DLG", src: "/legacy-assets/logos/PN3DLG-Logo.webp" },
      { name: "Kalibre", src: "/legacy-assets/logos/KALIBRE_logo.webp" },
      { name: "Modular", src: "/legacy-assets/logos/Modular-logo.webp" },
      { name: "ND", src: "/legacy-assets/logos/ND_Logo.webp" },
      { name: "Hopscotch", src: "/legacy-assets/logos/Hopscotch-Logo.webp" },
      { name: "Entourage", src: "/legacy-assets/logos/Entourage-logo.webp" },
      { name: "Oyabun", src: "/legacy-assets/logos/OYABUN_New-Logo_black.webp" },
      { name: "Naturovape", src: "/legacy-assets/logos/Naturovape-logo.webp" },
    ],
    capability: {
      label: "What we build",
      heading: "Products. Not deliverables.",
      subtext:
        "We don't sell hours. We design complete digital products, from idea to launch. One studio. Zero middlemen.",
      items: [
        {
          title: "Websites",
          description:
            "Showcase sites, e-commerce, corporate platforms. Fast, SEO-optimized, built to convert.",
          href: "/en/services/creation-site-web/",
        },
        {
          title: "Web apps & MVPs",
          description:
            "Business tools, SaaS platforms, functional prototypes, AI integrations. From concept to production-ready product.",
          href: "/en/services/application-web-mvp/",
        },
        {
          title: "Interface design",
          description:
            "UX research, UI design, design systems, prototyping. Interfaces designed for use, not decoration.",
          href: "/en/services/ux-ui-design/",
        },
        {
          title: "Brand identity",
          description:
            "Logo, art direction, visual systems. Brands built to last and scale.",
          href: "/en/services/branding-identite/",
        },
      ],
    },
    selectedWork: {
      label: "What we've shipped",
      heading: "Recent projects",
      projects: [
        {
          name: "BillyCheck",
          tags: ["Web App", "SaaS", "Artificial Intelligence", "Fintech"],
          description:
            "SaaS app for energy bill optimization. Upload, AI analysis, comparison of 15+ providers. From idea to production.",
          result: "30 seconds to find savings",
          href: "/en/work/billycheck/",
          image: "/images/case-studies/billycheck-hero.webp",
        },
        {
          name: "ChairSplit",
          tags: ["SaaS", "Business Platform", "PWA", "Multi-Tenant"],
          description:
            "SaaS management platform for barbershops. Revenue, commissions, teams, payroll. Multi-tenant, mobile-first.",
          result: "Full SaaS product in production",
          href: "/en/work/chairsplit/",
          image: "/images/case-studies/chairsplit-hero.webp",
        },
        {
          name: "Greenmood",
          tags: ["UX/UI", "B2B Platform", "Product Configurator", "Design System"],
          description:
            "B2B platform for Europe's leading acoustic and biophilic design company. Information architecture, UX/UI and product configurators.",
          result: "Multi-domain B2B website",
          href: "/en/work/greenmood/",
          image: "/images/case-studies/greenmood-hero.webp",
        },
        {
          name: "Arduenna",
          tags: ["Branding", "E-commerce", "Ad Campaigns", "Art Direction"],
          description:
            "Brand identity, e-commerce and digital campaigns for an organic Ardennes gin. Branding, Shopify, Meta Ads.",
          result: "2 years revenue in 2 months",
          href: "/en/work/arduenna/",
          image: "/images/case-studies/arduenna-hero.webp",
        },
        {
          name: "Oyabun",
          tags: ["Game Design", "Web3", "NFT", "Play-to-Earn"],
          description:
            "Web3 mobile game in a manga cyber-yakuza universe. Game design, art direction, OYAB tokenomics and NFT progression system.",
          result: "Complete Web3 gaming ecosystem",
          href: "/en/work/oyabun/",
          image: "/images/case-studies/oyabun-hero.webp",
        },
      ],
      cta: { label: "View all projects", href: "/en/work/" },
    },
    whyPxel: {
      label: "Why us",
      heading: "We don't deliver mockups. We deliver products.",
      points: [
        {
          number: "01",
          title: "We design and we execute",
          body: "Most studios stop at the Figma mockup. We go all the way to deployment. Design, code, launch. Your product is functional, not just pretty on a presentation screen.",
        },
        {
          number: "02",
          title: "One point of contact",
          body: "No account manager. No middle layer. A senior studio working directly with decision-makers. We understand your project because we carry it from start to finish.",
        },
        {
          number: "03",
          title: "Fast and precise",
          body: "We use AI as an execution lever. What takes 3 weeks at a traditional agency, we deliver in 5 days. 2 years of revenue in 2 months for Arduenna Gin. A full SaaS in production for BillyCheck. We don't promise speed. We prove it.",
        },
      ],
    },
    process: {
      label: "How we work",
      heading: "From brief to launch. No friction.",
      steps: [
        {
          number: "01",
          title: "First contact",
          description: "Describe your project in a few lines. We respond within 24h.",
        },
        {
          number: "02",
          title: "Discovery call",
          description:
            "30 minutes to understand your goals, constraints and expectations.",
        },
        {
          number: "03",
          title: "Clear proposal",
          description:
            "Scope, deliverables, timeline, budget. Everything is laid out. No surprises.",
        },
        {
          number: "04",
          title: "We build",
          description:
            "Design, development, iterations. You follow progress in real time.",
        },
      ],
    },
    faq: {
      label: "Frequently asked questions",
      items: [
        {
          question: "What types of projects do you handle?",
          answer:
            "Websites, web apps, MVPs, landing pages, e-commerce, branding and visual identities. We work with startups, SMEs and ambitious brands in Belgium, Luxembourg and across Europe.",
        },
        {
          question: "How much does a project with P-XEL cost?",
          answer:
            "Every project is priced based on scope, complexity and your goals. As a guide: landing page from \u20ac1,500, showcase website from \u20ac3,500, MVP from \u20ac5,000. We provide a free detailed estimate after an initial exchange. No surprises, no commitment.",
        },
        {
          question: "What is the average project duration?",
          answer:
            "Landing page: 1 to 2 weeks. Showcase website: 3 to 6 weeks. Web application: 6 to 12 weeks. We adapt the timeline to your constraints.",
        },
        {
          question: "Do you also develop or only design?",
          answer:
            "We design and develop. Design, code and deployment. You receive a functional product, not a mockup.",
        },
        {
          question: "Where are you based?",
          answer:
            "In Liege, Belgium. We work with clients in Wallonia, Brussels, Luxembourg and across Europe remotely.",
        },
      ],
    },
    finalCta: {
      heading: "Your project deserves better than a template.",
      subtext:
        "Tell us about your idea. 30 minutes to scope your project and set the foundations.",
      ctaPrimary: { label: "Book a call", href: "https://calendly.com/p-xel" },
      ctaSecondary: { label: "Start my project", href: "/en/contact/" },
    },
    scrollRevealText:
      "We design, build and ship digital products that matter.",
    testimonials: {
      label: "Client feedback",
    },
  },
} as const;

export function getHomepageContent(locale: Locale) {
  return content[locale];
}

// Re-export for backward compatibility during migration
export const hero = content.fr.hero;
export const proofStrip = content.fr.proofStrip;
export const clientLogos = content.fr.clientLogos;
export const capability = content.fr.capability;
export const selectedWork = content.fr.selectedWork;
export const whyPxel = content.fr.whyPxel;
export const process = content.fr.process;
export const faq = content.fr.faq;
export const finalCta = content.fr.finalCta;
