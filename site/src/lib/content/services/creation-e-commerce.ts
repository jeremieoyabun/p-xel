import type { ServicePage } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, ServicePage> = {
  fr: {
    slug: "creation-e-commerce",
    metaTitle:
      "E-commerce sur mesure : boutique 100% propriétaire, sans commission",
    metaDescription:
      "Boutique e-commerce développée sur mesure, dont vous êtes 100% propriétaire. Pas d'abonnement de plateforme, pas de commission sur les ventes. Web + caisse magasin (POS). Next.js, Medusa, Stripe. Studio à Liège.",

    hero: {
      label: "E-commerce sur mesure",
      heading: "On ne vous loue pas un site. On vous construit le moteur de votre commerce.",
      subheadline:
        "Une boutique développée sur mesure, dont vous êtes 100% propriétaire : du code au design jusqu'aux données. Pas de commission sur vos ventes, pas de limite de thème. Web et caisse magasin réunis.",
    },

    problem: {
      label: "Le constat",
      heading: "La plupart des boutiques sont louées. Pas la vôtre.",
      intro:
        "Un template, une commission prélevée sur chaque vente, et des blocages dès que le business sort du cadre. Vous payez plus cher à mesure que vous vendez, sans jamais rien posséder.",
      points: [
        "Vous louez. Un abonnement de plateforme qui grimpe avec le chiffre d'affaires, plus une commission sur chaque vente.",
        "Vous êtes limité. « Ce n'est pas possible avec notre thème » dès qu'une fonctionnalité sort du cadre.",
        "Vous dépendez d'apps tierces. Chaque besoin métier devient une app de plus à payer et à maintenir.",
        "Votre boutique physique est un outil séparé, à payer en plus, jamais vraiment synchronisé avec le web.",
      ],
    },

    whatWeBuild: {
      label: "Les modules",
      heading: "Le moteur complet de votre commerce. Web et magasin.",
      intro:
        "Chaque fonctionnalité est construite autour de votre métier, pas l'inverse. Et ce socle est pensé pour être répliqué et adapté à d'autres marques.",
      items: [
        {
          title: "Une boutique premium",
          body: "Catalogue multi-collections, fiches produits riches (galeries, variantes, avis clients, cross-sell), recherche instantanée et design haut de gamme animé.",
          icon: "cart",
        },
        {
          title: "Un checkout 100% sur mesure",
          body: "Carte bancaire (Stripe) et paiement local, panier intelligent, suivi de commande en temps réel, e-mails automatiques (confirmation, expédition, relance avis).",
          icon: "target",
        },
        {
          title: "Une caisse en magasin (POS)",
          body: "Le même système gère les ventes physiques : encaissement espèces, carte ou QR, impression de tickets, remises, scanner code-barres, historique du jour.",
          icon: "tool",
        },
        {
          title: "Un tableau de bord business",
          body: "Chiffre d'affaires, marge, coûts, bénéfice, alertes de stock et suivi des prix, en direct. Web et magasin pilotés depuis une seule interface qui vous appartient.",
          icon: "file",
        },
        {
          title: "Une vraie gestion de stock",
          body: "Inventaire synchronisé site et magasin, ouverture de boîtes scellées en unités, produits gradés, précommandes et « coming soon ».",
          icon: "zap",
        },
        {
          title: "Local et marketing intégrés",
          body: "Site multilingue, paiements et conformité adaptés au pays, SEO complet, Meta Ads, pixel de conversion et analytics. Branché à l'acquisition dès le jour 1.",
          icon: "target",
        },
      ],
    },

    approach: {
      label: "Notre méthode",
      heading: "De votre métier au premier achat. Sans friction.",
      intro:
        "On part de votre réalité commerçante, puis on construit le socle qui s'y adapte. Cycles courts, mise en ligne rapide, optimisation continue.",
      steps: [
        {
          number: "01",
          title: "Cadrage métier",
          body: "On modélise votre catalogue, vos canaux de vente (web et magasin), vos flux de stock et vos contraintes. C'est votre métier qui définit le système.",
        },
        {
          number: "02",
          title: "Design UX e-commerce",
          body: "Catalogue, fiches produit, panier, checkout et caisse magasin. Chaque écran est pensé pour la conversion et pour la rapidité d'usage en boutique.",
        },
        {
          number: "03",
          title: "Développement sur mesure",
          body: "Boutique, checkout, POS, tableau de bord et stock, sur un socle Next.js + Medusa. Paiement, e-mails, analytics : tout est connecté et testé.",
        },
        {
          number: "04",
          title: "Lancement et acquisition",
          body: "Mise en ligne, branchement Meta Ads et analytics, suivi des conversions. On optimise le tunnel et les performances en continu.",
        },
      ],
    },

    deliverables: {
      label: "Ce que vous recevez",
      heading: "Une boutique que vous possédez à 100%.",
      intro: "",
      items: [
        "Boutique e-commerce complète, développée sur mesure (Next.js + Medusa)",
        "Checkout custom (Stripe + paiement local) et e-mails transactionnels automatisés",
        "Caisse magasin (POS) intégrée nativement : espèces, carte, QR, tickets",
        "Tableau de bord business : chiffre d'affaires, marge, bénéfice, alertes de stock",
        "Gestion de stock synchronisée entre le site et le magasin",
        "Site multilingue, SEO produit complet et schema markup",
        "Marketing branché : Meta Ads, pixel de conversion, Google Analytics",
        "Code, design et données : vous êtes propriétaire de tout",
      ],
      note: "Pas de taxe de plateforme. Pas de commission sur vos ventes. Stack moderne et éprouvée : Next.js, TypeScript, Tailwind, Medusa, PostgreSQL, Stripe, Meilisearch, Vercel.",
    },

    caseStudies: {
      label: "Projets récents",
      heading: "Ce qu'on a construit pour vendre.",
      studies: [
        {
          name: "Arduenna Gin",
          tags: ["E-commerce", "Acquisition", "Facebook Ads"],
          body: "Deux boutiques en ligne et 103 campagnes d'acquisition pour un gin artisanal belge. Résultat : deux ans de chiffre d'affaires générés en deux mois.",
          href: "/work/arduenna-gin/",
          image: "/images/case-studies/arduenna-hero.webp",
        },
      ],
    },

    investment: {
      label: "Investissement",
      heading: "Un investissement, pas une location.",
      body: "Un socle e-commerce sur mesure demande un investissement initial plus élevé qu'un template, mais sans abonnement de plateforme ni commission sur vos ventes. Sur la durée, vous payez moins et vous possédez tout.\n\nÀ titre indicatif : boutique sur mesure à partir de 8 000 €, socle complet web + caisse magasin sur devis. Estimation gratuite et détaillée après un premier échange.",
      anchor: "Estimation gratuite sous 24h",
      note: "On chiffre aussi vos coûts récurrents réels (hébergement, paiement) pour une vision complète. Sans commission sur vos ventes.",
    },

    faq: {
      label: "Questions fréquentes",
      items: [
        {
          question: "Pourquoi du sur-mesure plutôt que Shopify ?",
          answer:
            "Avec une plateforme louée, vous payez un abonnement qui grimpe avec votre chiffre d'affaires, une commission sur chaque vente, et vous êtes limité par le thème. En sur-mesure, vous possédez le code, le design et les données, sans commission, et chaque fonctionnalité est construite autour de votre métier.",
        },
        {
          question: "La caisse en magasin est-elle vraiment incluse ?",
          answer:
            "Oui. Le même système gère le web et le magasin : encaissement espèces, carte ou QR, impression de tickets, remises, scanner code-barres et historique. Votre stock et vos ventes sont synchronisés entre les deux canaux.",
        },
        {
          question: "Combien coûte un e-commerce sur mesure ?",
          answer:
            "À partir de 8 000 € pour une boutique sur mesure. Un socle complet web + caisse magasin se chiffre sur devis selon vos besoins. Pas d'abonnement de plateforme ni de commission sur vos ventes. Estimation gratuite après un premier échange.",
        },
        {
          question: "Suis-je vraiment propriétaire de tout ?",
          answer:
            "Oui, à 100% : le code, le design, les données clients et le catalogue vous appartiennent. Vous pouvez faire évoluer la boutique dans n'importe quelle direction, sur votre propre moteur.",
        },
        {
          question: "Peut-on migrer depuis Shopify, WooCommerce ou Wix ?",
          answer:
            "Oui. On migre vos produits, clients, commandes et URLs, avec les redirections 301 pour préserver votre SEO existant.",
        },
      ],
    },

    cta: {
      heading: "Prêt à posséder votre commerce ?",
      subtext:
        "Décrivez votre projet. On vous propose un socle e-commerce sur mesure adapté à votre métier sous 24h.",
    },
  },

  en: {
    slug: "creation-e-commerce",
    metaTitle:
      "Custom e-commerce: a store you own 100%, with no commission",
    metaDescription:
      "A fully custom e-commerce store you own 100%, from code to design to data. No platform subscription, no commission on sales. Web + in-store POS. Next.js, Medusa, Stripe. Studio in Liège.",

    hero: {
      label: "Custom e-commerce",
      heading: "We don't rent you a website. We build the engine of your business.",
      subheadline:
        "A fully custom store you own 100%, from code to design to data. No commission on your sales, no theme limits. Web and in-store checkout, unified.",
    },

    problem: {
      label: "The reality",
      heading: "Most stores are rented. Yours won't be.",
      intro:
        "A template, a commission on every sale, and roadblocks the moment your business steps outside the box. You pay more as you sell more, and you never own anything.",
      points: [
        "You rent. A platform subscription that grows with revenue, plus a commission on every sale.",
        "You're limited. \"That's not possible with our theme\" the moment a feature steps outside the box.",
        "You depend on third-party apps. Every business need becomes one more app to pay for and maintain.",
        "Your physical store is a separate tool, paid for on top, never truly synced with the web.",
      ],
    },

    whatWeBuild: {
      label: "The modules",
      heading: "The full engine of your business. Web and store.",
      intro:
        "Every feature is built around your business, not the other way around. And this foundation is designed to be replicated and adapted to other brands.",
      items: [
        {
          title: "A premium storefront",
          body: "Multi-collection catalog, rich product pages (galleries, variants, reviews, cross-sell), instant search and an animated high-end design.",
          icon: "cart",
        },
        {
          title: "A 100% custom checkout",
          body: "Card (Stripe) and local payment, smart cart, real-time order tracking, automated emails (confirmation, shipping, review request).",
          icon: "target",
        },
        {
          title: "In-store checkout (POS)",
          body: "The same system runs physical sales: cash, card or QR payment, receipt printing, discounts, barcode scanner and daily history.",
          icon: "tool",
        },
        {
          title: "A business dashboard",
          body: "Revenue, margin, costs, profit, stock alerts and price tracking, live. Web and store run from a single interface that you own.",
          icon: "file",
        },
        {
          title: "Real inventory management",
          body: "Stock synced between site and store, opening sealed boxes into units, graded products, pre-orders and \"coming soon\".",
          icon: "zap",
        },
        {
          title: "Local & marketing built in",
          body: "Multilingual site, country-adapted payments and compliance, full SEO, Meta Ads, conversion pixel and analytics. Wired to acquisition from day one.",
          icon: "target",
        },
      ],
    },

    approach: {
      label: "Our method",
      heading: "From your business to the first purchase. No friction.",
      intro:
        "We start from your real-world operations, then build the foundation that fits. Short cycles, fast launch, continuous optimization.",
      steps: [
        {
          number: "01",
          title: "Business scoping",
          body: "We model your catalog, sales channels (web and store), stock flows and constraints. Your business defines the system.",
        },
        {
          number: "02",
          title: "E-commerce UX design",
          body: "Catalog, product pages, cart, checkout and in-store POS. Every screen is built for conversion and for speed of use in the store.",
        },
        {
          number: "03",
          title: "Custom development",
          body: "Storefront, checkout, POS, dashboard and stock on a Next.js + Medusa foundation. Payment, emails, analytics: all connected and tested.",
        },
        {
          number: "04",
          title: "Launch and acquisition",
          body: "Go live, Meta Ads and analytics wired in, conversion tracking. We optimize the funnel and performance continuously.",
        },
      ],
    },

    deliverables: {
      label: "What you receive",
      heading: "A store you own 100%.",
      intro: "",
      items: [
        "Complete, fully custom e-commerce store (Next.js + Medusa)",
        "Custom checkout (Stripe + local payment) and automated transactional emails",
        "Natively integrated in-store POS: cash, card, QR, receipts",
        "Business dashboard: revenue, margin, profit, stock alerts",
        "Inventory synced between site and store",
        "Multilingual site, full product SEO and schema markup",
        "Marketing wired in: Meta Ads, conversion pixel, Google Analytics",
        "Code, design and data: you own everything",
      ],
      note: "No platform fee. No commission on your sales. Modern, proven stack: Next.js, TypeScript, Tailwind, Medusa, PostgreSQL, Stripe, Meilisearch, Vercel.",
    },

    caseStudies: {
      label: "Recent projects",
      heading: "What we've built to sell.",
      studies: [
        {
          name: "Arduenna Gin",
          tags: ["E-commerce", "Acquisition", "Facebook Ads"],
          body: "Two online stores and 103 acquisition campaigns for a Belgian artisanal gin. Result: two years of revenue generated in two months.",
          href: "/en/work/arduenna-gin/",
          image: "/images/case-studies/arduenna-hero.webp",
        },
      ],
    },

    investment: {
      label: "Investment",
      heading: "An investment, not a rental.",
      body: "A custom e-commerce foundation requires a higher upfront investment than a template, but with no platform subscription and no commission on your sales. Over time, you pay less and you own everything.\n\nAs a guide: custom store from 8,000 EUR, full web + in-store POS foundation on quote. Free and detailed estimate after a first conversation.",
      anchor: "Free estimate within 24h",
      note: "We also estimate your real recurring costs (hosting, payment) for a complete picture. No commission on your sales.",
    },

    faq: {
      label: "Frequently asked questions",
      items: [
        {
          question: "Why custom rather than Shopify?",
          answer:
            "With a rented platform you pay a subscription that grows with revenue, a commission on every sale, and you're limited by the theme. With custom, you own the code, design and data, with no commission, and every feature is built around your business.",
        },
        {
          question: "Is the in-store POS really included?",
          answer:
            "Yes. The same system runs web and store: cash, card or QR payment, receipt printing, discounts, barcode scanner and history. Your stock and sales are synced across both channels.",
        },
        {
          question: "How much does custom e-commerce cost?",
          answer:
            "From 8,000 EUR for a custom store. A full web + in-store POS foundation is quoted based on your needs. No platform subscription and no commission on your sales. Free estimate after a first conversation.",
        },
        {
          question: "Do I really own everything?",
          answer:
            "Yes, 100%: the code, design, customer data and catalog are yours. You can evolve the store in any direction, on your own engine.",
        },
        {
          question: "Can you migrate from Shopify, WooCommerce or Wix?",
          answer:
            "Yes. We migrate your products, customers, orders and URLs, with 301 redirects to preserve your existing SEO.",
        },
      ],
    },

    cta: {
      heading: "Ready to own your business?",
      subtext:
        "Describe your project. We'll propose a custom e-commerce foundation tailored to your business within 24h.",
    },
  },
} as const;

export function getCreationEcommerceContent(locale: Locale) {
  return content[locale];
}

export const creationEcommerce = content.fr;
