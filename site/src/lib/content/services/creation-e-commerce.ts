import type { ServicePage } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, ServicePage> = {
  fr: {
    slug: "creation-e-commerce",
    metaTitle:
      "Création Site E-commerce | Boutique en Ligne sur Mesure | P-XEL Studio",
    metaDescription:
      "Création de sites e-commerce en Belgique. Shopify, headless commerce, Next.js + Stripe. Design premium, SEO produit, conversion optimisée. Studio à Liège.",

    hero: {
      label: "E-commerce",
      heading:
        "Des boutiques qui vendent. Pas juste qui existent.",
      subheadline:
        "Shopify, headless commerce, Next.js + Stripe. On conçoit des e-commerces pensés pour la conversion, le SEO et la scalabilité.",
    },

    problem: {
      label: "Le constat",
      heading: "Un template Shopify ne suffit plus.",
      intro:
        "La plupart des boutiques en ligne se ressemblent. Même template, même UX, même résultat : un taux de conversion sous les 1%.",
      points: [
        "Des templates génériques qui ne reflètent pas votre marque. Votre boutique ressemble à 10 000 autres.",
        "Pas de stratégie SEO produit. Vos fiches produit n'apparaissent pas dans Google Shopping ni dans les résultats organiques.",
        "Un tunnel d'achat mal pensé. Trop d'étapes, pas de confiance, abandon de panier massif.",
        "Aucune intégration métier. Gestion de stock manuelle, pas de connexion ERP, pas d'automatisation.",
      ],
    },

    whatWeBuild: {
      label: "Ce qu'on construit",
      heading: "E-commerce sur mesure. De la fiche produit au paiement.",
      intro:
        "On ne vend pas des thèmes. On conçoit des systèmes de vente en ligne complets.",
      items: [
        {
          title: "Shopify sur mesure",
          body: "Thème custom, branding intégré, apps configurées. Shopify reste la référence pour vendre vite avec un back-office solide.",
          icon: "cart",
        },
        {
          title: "Headless commerce",
          body: "Next.js en front, Shopify ou Stripe en back. Performance maximale, liberté totale sur le design, SEO technique parfait.",
          icon: "zap",
        },
        {
          title: "Fiches produit optimisées",
          body: "SEO produit, schema markup, images optimisées, descriptions qui convertissent. Chaque fiche est une page de vente.",
          icon: "file",
        },
        {
          title: "Tunnel de conversion",
          body: "Checkout optimisé, upsells, cross-sells, panier persistant. Chaque étape est pensée pour réduire l'abandon.",
          icon: "target",
        },
        {
          title: "Intégrations métier",
          body: "Paiement Stripe/Mollie, gestion de stock, connexion ERP, emails transactionnels, analytics e-commerce.",
          icon: "tool",
        },
      ],
    },

    approach: {
      label: "Notre méthode",
      heading: "Du catalogue au premier achat. Sans friction.",
      intro:
        "On travaille en cycles courts. Votre boutique est en ligne rapidement, puis on optimise.",
      steps: [
        {
          number: "01",
          title: "Audit et stratégie",
          body: "Analyse de votre marché, de vos concurrents et de vos produits. On définit l'architecture, le tunnel de conversion et la stratégie SEO.",
        },
        {
          number: "02",
          title: "Design UX e-commerce",
          body: "Maquettes du catalogue, des fiches produit, du panier et du checkout. Chaque écran est optimisé pour la conversion mobile.",
        },
        {
          number: "03",
          title: "Développement et intégrations",
          body: "Shopify custom ou headless Next.js. Paiement, stock, emails, analytics. Tout est connecté et testé.",
        },
        {
          number: "04",
          title: "Lancement et optimisation",
          body: "Mise en ligne, monitoring des conversions, A/B tests sur le tunnel d'achat. On optimise les performances en continu.",
        },
      ],
    },

    deliverables: {
      label: "Ce que vous recevez",
      heading: "Une boutique prête à vendre. Pas un prototype.",
      intro: "",
      items: [
        "Site e-commerce complet (Shopify custom ou headless Next.js)",
        "Design premium adapté à votre marque",
        "Fiches produit optimisées SEO avec schema markup",
        "Tunnel d'achat optimisé (panier, checkout, confirmation)",
        "Intégration paiement (Stripe, Mollie, Shopify Payments)",
        "Emails transactionnels (confirmation, expédition, abandon panier)",
        "Google Analytics 4 + tracking e-commerce",
        "Formation back-office et documentation",
      ],
      note: "Vous êtes propriétaire de tout. Code, design, données clients, catalogue.",
    },

    caseStudies: {
      label: "Projets récents",
      heading: "Ce qu'on a vendu en ligne.",
      studies: [
        {
          name: "Arduenna Gin",
          tags: ["E-commerce", "Shopify", "Facebook Ads"],
          body: "Deux sites e-commerce et 103 campagnes d'acquisition pour un gin artisanal belge. Résultat : 2 ans de chiffre d'affaires généré en 2 mois.",
          href: "/work/arduenna-gin/",
          image: "/images/case-studies/arduenna-hero.webp",
        },
      ],
    },

    investment: {
      label: "Investissement",
      heading: "Un budget calibré sur votre ambition.",
      body: "Le coût d'un e-commerce dépend de la plateforme, du nombre de produits et des intégrations nécessaires.\n\nÀ titre indicatif : boutique Shopify custom à partir de 3\u00a0500\u00a0€, e-commerce headless (Next.js + Stripe) à partir de 8\u00a0000\u00a0€. Estimation gratuite et détaillée après un premier échange.",
      anchor: "Estimation gratuite sous 24h",
      note: "On inclut toujours une estimation des coûts récurrents (hébergement, apps, paiement) pour que vous ayez une vision complète.",
    },

    faq: {
      label: "Questions fréquentes",
      items: [
        {
          question: "Shopify ou headless : comment choisir ?",
          answer:
            "Shopify est idéal pour lancer vite avec un back-office complet. Le headless (Next.js + API) offre plus de liberté design et de meilleures performances SEO. On vous conseille en fonction de votre catalogue, budget et objectifs.",
        },
        {
          question: "Combien coûte un site e-commerce en Belgique ?",
          answer:
            "Shopify custom à partir de 3 500 €. Headless commerce à partir de 8 000 €. Le prix dépend du nombre de produits, des intégrations et du niveau de personnalisation. Estimation gratuite après un premier échange.",
        },
        {
          question: "En combien de temps mon e-commerce est en ligne ?",
          answer:
            "Shopify : 1 à 2 semaines. Headless commerce : 3 à 4 semaines. On définit un planning précis dès le départ.",
        },
        {
          question: "Est-ce que le SEO est inclus ?",
          answer:
            "Oui. Structure de pages, meta tags, schema produit, sitemap, vitesse de chargement. Chaque fiche produit est optimisée pour apparaitre dans Google et Google Shopping.",
        },
        {
          question: "Peut-on migrer depuis WooCommerce ou Wix ?",
          answer:
            "Oui. On migre vos produits, clients, commandes et URLs. Redirections 301 incluses pour préserver votre SEO existant.",
        },
      ],
    },

    cta: {
      heading: "Prêt à vendre en ligne ?",
      subtext:
        "Décrivez votre projet. On vous propose une stratégie e-commerce adaptée sous 24h.",
    },
  },

  en: {
    slug: "creation-e-commerce",
    metaTitle:
      "E-commerce Website Creation | Custom Online Store | P-XEL Studio",
    metaDescription:
      "E-commerce website creation in Belgium. Shopify, headless commerce, Next.js + Stripe. Premium design, product SEO, optimized conversion. Studio in Liege.",

    hero: {
      label: "E-commerce",
      heading:
        "Stores that sell. Not just exist.",
      subheadline:
        "Shopify, headless commerce, Next.js + Stripe. We build e-commerce sites designed for conversion, SEO and scalability.",
    },

    problem: {
      label: "The reality",
      heading: "A Shopify template is no longer enough.",
      intro:
        "Most online stores look the same. Same template, same UX, same result: a conversion rate under 1%.",
      points: [
        "Generic templates that don't reflect your brand. Your store looks like 10,000 others.",
        "No product SEO strategy. Your product pages don't appear in Google Shopping or organic results.",
        "Poorly designed purchase funnel. Too many steps, no trust signals, massive cart abandonment.",
        "No business integrations. Manual stock management, no ERP connection, no automation.",
      ],
    },

    whatWeBuild: {
      label: "What we build",
      heading: "Custom e-commerce. From product page to payment.",
      intro:
        "We don't sell themes. We design complete online sales systems.",
      items: [
        {
          title: "Custom Shopify",
          body: "Custom theme, integrated branding, configured apps. Shopify remains the reference for selling fast with a solid back-office.",
          icon: "cart",
        },
        {
          title: "Headless commerce",
          body: "Next.js frontend, Shopify or Stripe backend. Maximum performance, total design freedom, perfect technical SEO.",
          icon: "zap",
        },
        {
          title: "Optimized product pages",
          body: "Product SEO, schema markup, optimized images, descriptions that convert. Each page is a sales page.",
          icon: "file",
        },
        {
          title: "Conversion funnel",
          body: "Optimized checkout, upsells, cross-sells, persistent cart. Every step designed to reduce abandonment.",
          icon: "target",
        },
        {
          title: "Business integrations",
          body: "Stripe/Mollie payment, stock management, ERP connection, transactional emails, e-commerce analytics.",
          icon: "tool",
        },
      ],
    },

    approach: {
      label: "Our method",
      heading: "From catalog to first purchase. No friction.",
      intro:
        "We work in short cycles. Your store goes live quickly, then we optimize.",
      steps: [
        {
          number: "01",
          title: "Audit and strategy",
          body: "Analysis of your market, competitors and products. We define the architecture, conversion funnel and SEO strategy.",
        },
        {
          number: "02",
          title: "E-commerce UX design",
          body: "Mockups for catalog, product pages, cart and checkout. Every screen optimized for mobile conversion.",
        },
        {
          number: "03",
          title: "Development and integrations",
          body: "Custom Shopify or headless Next.js. Payment, stock, emails, analytics. Everything connected and tested.",
        },
        {
          number: "04",
          title: "Launch and optimization",
          body: "Go live, conversion monitoring, A/B tests on the purchase funnel. We optimize performance continuously.",
        },
      ],
    },

    deliverables: {
      label: "What you receive",
      heading: "A store ready to sell. Not a prototype.",
      intro: "",
      items: [
        "Complete e-commerce site (custom Shopify or headless Next.js)",
        "Premium design tailored to your brand",
        "SEO-optimized product pages with schema markup",
        "Optimized purchase funnel (cart, checkout, confirmation)",
        "Payment integration (Stripe, Mollie, Shopify Payments)",
        "Transactional emails (confirmation, shipping, cart abandonment)",
        "Google Analytics 4 + e-commerce tracking",
        "Back-office training and documentation",
      ],
      note: "You own everything. Code, design, customer data, catalog.",
    },

    caseStudies: {
      label: "Recent projects",
      heading: "What we've sold online.",
      studies: [
        {
          name: "Arduenna Gin",
          tags: ["E-commerce", "Shopify", "Facebook Ads"],
          body: "Two e-commerce sites and 103 acquisition campaigns for a Belgian artisanal gin. Result: 2 years of revenue generated in 2 months.",
          href: "/en/work/arduenna-gin/",
          image: "/images/case-studies/arduenna-hero.webp",
        },
      ],
    },

    investment: {
      label: "Investment",
      heading: "A budget calibrated on your ambition.",
      body: "The cost of an e-commerce site depends on the platform, number of products and required integrations.\n\nAs a guide: custom Shopify store from 3,500 EUR, headless e-commerce (Next.js + Stripe) from 8,000 EUR. Free and detailed estimate after a first conversation.",
      anchor: "Free estimate within 24h",
      note: "We always include an estimate of recurring costs (hosting, apps, payment) so you have a complete picture.",
    },

    faq: {
      label: "Frequently asked questions",
      items: [
        {
          question: "Shopify or headless: how to choose?",
          answer:
            "Shopify is ideal for launching fast with a complete back-office. Headless (Next.js + API) offers more design freedom and better SEO performance. We advise based on your catalog, budget and goals.",
        },
        {
          question: "How much does an e-commerce site cost in Belgium?",
          answer:
            "Custom Shopify from 3,500 EUR. Headless commerce from 8,000 EUR. Price depends on product count, integrations and customization level. Free estimate after a first conversation.",
        },
        {
          question: "How quickly can my e-commerce go live?",
          answer:
            "Shopify: 1 to 2 weeks. Headless commerce: 3 to 4 weeks. We define a precise timeline from the start.",
        },
        {
          question: "Is SEO included?",
          answer:
            "Yes. Page structure, meta tags, product schema, sitemap, loading speed. Every product page is optimized to appear in Google and Google Shopping.",
        },
        {
          question: "Can you migrate from WooCommerce or Wix?",
          answer:
            "Yes. We migrate your products, customers, orders and URLs. 301 redirects included to preserve your existing SEO.",
        },
      ],
    },

    cta: {
      heading: "Ready to sell online?",
      subtext:
        "Describe your project. We'll propose a tailored e-commerce strategy within 24h.",
    },
  },
} as const;

export function getCreationEcommerceContent(locale: Locale) {
  return content[locale];
}

export const creationEcommerce = content.fr;
