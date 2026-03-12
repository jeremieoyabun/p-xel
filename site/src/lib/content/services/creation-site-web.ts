import type { ServicePage } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, ServicePage> = {
  fr: {
    slug: "creation-site-web",
    metaTitle: "Création Site Web | P-XEL Studio - Belgique",
    metaDescription:
      "Sites web performants, e-commerce et landing pages. Design sur mesure, SEO intégré, Core Web Vitals optimisés. Réservez un appel. Studio à Liège.",

    hero: {
      label: "Sites Web & Landing Pages",
      heading: "Des sites web qui convertissent. Pas juste qui existent.",
      subheadline:
        "Sites vitrines, e-commerce, landing pages. Conçus pour le SEO, la performance et la génération de leads. De la stratégie au déploiement.",
    },

    problem: {
      label: "Le problème",
      heading: "La plupart des sites web ne servent à rien.",
      intro:
        "Votre site est en ligne. Il est joli. Mais il ne génère aucun lead. Il ne remonte pas sur Google. Il met 6 seconds à charger sur mobile. Les visiteurs partent avant de comprendre ce que vous faites.\n\nC'est le résultat prévisible d'un site construit sans stratégie. Un design sans réflexion UX. Un développement sans optimisation SEO. Un lancement sans suivi de performance.",
      points: [
        "Temps de chargement excessif sur mobile",
        "Aucune visibilité sur Google pour les recherches clés",
        "Taux de rebond supérieur à 70%",
        "Zéro appels ou demandes de devis générés par le site",
        "Un design daté qui ne reflète plus la valeur de l'entreprise",
      ],
    },

    whatWeBuild: {
      label: "Ce qu'on construit",
      heading: "Chaque site est conçu pour un objectif précis.",
      intro:
        "On ne construit pas des sites génériques. Chaque projet démarre par une question : qu'est-ce que ce site doit accomplir pour votre business ?",
      items: [
        {
          title: "Site vitrine professionnel",
          body: "Pour les entreprises qui veulent une présence en ligne crédible, claire et optimisée. Structure pensée pour le SEO, design aligné sur votre positionnement, contenu orienté conversion.",
        },
        {
          title: "Site e-commerce",
          body: "Boutiques en ligne conçues pour vendre. Architecture produit, tunnel d'achat optimisé, intégration paiement, gestion de stock. On construit des e-commerces qui performent, pas juste des catalogues en ligne.",
        },
        {
          title: "Landing pages",
          body: "Pages de conversion uniques, conçues pour des campagnes spécifiques. Chaque élément est testé et optimisé : titre, structure, CTA, preuve sociale, vitesse de chargement.",
        },
        {
          title: "Refonte de site web",
          body: "Votre site actuel ne performe plus ? On audite, on identifie les problèmes, on reconstruit sur des bases solides. Migration SEO incluse pour protéger votre trafic existant.",
        },
        {
          title: "Sites multi-pages et corporate",
          body: "Pour les entreprises avec des besoins complexes. Architecture d'information structurée, multiple entrées SEO, pages de service, contenu éditorial, intégration CRM.",
        },
      ],
    },

    approach: {
      label: "Notre méthode",
      heading: "Stratégie d'abord. Design ensuite. Performance toujours.",
      intro:
        "On ne commence jamais par ouvrir Figma. On commence par comprendre votre marché, vos concurrents et vos objectifs business. Le design vient après. Et chaque décision de design sert un objectif mesurable.",
      steps: [
        {
          number: "01",
          title: "Stratégie et recherche",
          body: "Analyse de votre marché, de vos concurrents et de votre audience. Définition des mots-clés cibles, de la structure du site et des objectifs de conversion.",
        },
        {
          number: "02",
          title: "Architecture UX",
          body: "Structure des pages, hiérarchie de l'information, parcours utilisateur. On définit comment chaque visiteur va naviguer et où il va convertir.",
        },
        {
          number: "03",
          title: "Design sur mesure",
          body: "Direction artistique alignée sur votre marque. Typographie distinctive, système visuel cohérent, composants réutilisables.",
        },
        {
          number: "04",
          title: "Développement Next.js",
          body: "Rendu côté serveur, chargement optimisé des images, code propre et maintenable. Pas de builders lents ou de templates modifiés.",
        },
        {
          number: "05",
          title: "SEO technique et contenu",
          body: "Balisage sémantique, schema markup, méta données, sitemap, robots.txt, structure des URLs, maillage interne. Le SEO est intégré dans le code.",
        },
        {
          number: "06",
          title: "Tests et optimisation",
          body: "Audit Core Web Vitals, tests cross-browser, validation mobile, vérification des temps de chargement. On ne livre que quand les métriques sont au vert.",
        },
        {
          number: "07",
          title: "Lancement et suivi",
          body: "Mise en ligne, configuration analytics, soumission Search Console, vérification du bon fonctionnement. On reste disponible après le lancement.",
        },
      ],
    },

    deliverables: {
      label: "Ce que vous recevez",
      heading: "Des livrables concrets. Pas des promesses.",
      intro: "Chaque projet de création de site web inclut :",
      items: [
        "Audit de l'existant (si refonte)",
        "Stratégie SEO et mots-clés cibles",
        "Architecture du site et wireframes UX",
        "Design haute fidélité (Figma)",
        "Développement front-end et back-end",
        "Optimisation des images et des assets",
        "Intégration du contenu",
        "Configuration SEO technique (balisage, schema, méta, sitemap)",
        "Tests de performance et compatibilité",
        "Formation à l'utilisation du CMS (si applicable)",
        "Mise en ligne et configuration analytics",
        "Support post-lancement (30 jours inclus)",
      ],
    },

    caseStudies: {
      label: "Résultats",
      heading: "Des projets. Des chiffres. Des résultats réels.",
      studies: [
        {
          name: "Arduenna Gin",
          tags: ["E-commerce", "Marketing Digital", "Campagnes Ads"],
          body: "Conception et développement de deux sites e-commerce. Stratégie d'acquisition digitale. 103 campagnes Facebook Ads. Résultat : 2 ans de chiffre d'affaires réalisés en 2 mois.",
          href: "/work/arduenna-gin/",
        },
      ],
    },

    investment: {
      label: "Investissement",
      heading: "Chaque projet est sur mesure. Le budget aussi.",
      body: "On ne travaille pas avec des packages. Chaque site est conçu en fonction de vos objectifs, de votre marché et de votre ambition. Le budget est défini ensemble après un premier échange, sur la base d'un périmètre clair : nombre de pages, complexité des fonctionnalités, volume de contenu, niveau d'optimisation SEO.\n\nLe budget inclut la stratégie, le design, le développement, le SEO technique et le lancement.",
      anchor: "Estimation gratuite sous 24h",
      note: "On fournit une estimation détaillée et gratuite avant de démarrer. Pas d'engagement, pas de surprise.",
    },

    faq: {
      label: "Questions fréquentes",
      items: [
        {
          question: "Combien de temps faut-il pour créer un site web ?",
          answer:
            "Une landing page prend 1 à 2 semaines. Un site vitrine professionnel entre 3 et 6 semaines. Un site e-commerce entre 6 et 10 semaines. Le planning exact dépend de la complexité du projet et de la rapidité des retours.",
        },
        {
          question: "Quel CMS utilisez-vous ?",
          answer:
            "On développe principalement avec Next.js couplé à un CMS headless (Sanity, Strapi ou Contentful selon les besoins). Pour les projets e-commerce, on travaille aussi avec Shopify.",
        },
        {
          question: "Le SEO est-il inclus dans la création du site ?",
          answer:
            "Oui. Le SEO technique est intégré dans chaque projet : structure des URLs, balisage sémantique, schema markup, méta données, sitemap, performance. Le SEO n'est pas un supplément : c'est une fondation.",
        },
        {
          question:
            "Proposez-vous de la maintenance après le lancement ?",
          answer:
            "On inclut 30 jours de support post-lancement dans chaque projet. Au-delà, on propose des contrats de maintenance mensuels pour les mises à jour de contenu, les correctifs et le suivi de performance.",
        },
        {
          question: "Les sites sont-ils responsive et adaptés au mobile ?",
          answer:
            "Chaque site est conçu et développé en mobile-first. Le design part du mobile et s'enrichit vers le desktop. On teste sur les principaux appareils et navigateurs avant la mise en ligne.",
        },
        {
          question: "Comment se passe une refonte de site existant ?",
          answer:
            "On commence par un audit complet : performance, SEO, UX, contenu, analytics. On planifie la migration SEO pour préserver votre trafic et vos positions existantes. Puis on reconstruit sur des bases solides.",
        },
      ],
    },

    cta: {
      heading:
        "Votre site devrait travailler pour vous. Pas l'inverse.",
      subtext:
        "Parlez-nous de votre projet. On vous dit en 30 minutes si on peut vous aider et comment.",
    },
  },

  en: {
    slug: "creation-site-web",
    metaTitle: "Website Creation | P-XEL Studio - Belgium",
    metaDescription:
      "High-performance websites, e-commerce and landing pages. Custom design, built-in SEO, optimized Core Web Vitals. Book a call. Studio in Liege, Belgium.",

    hero: {
      label: "Websites & Landing Pages",
      heading: "Websites that convert. Not just exist.",
      subheadline:
        "Business websites, e-commerce, landing pages. Built for SEO, performance and lead generation. From strategy to deployment.",
    },

    problem: {
      label: "The problem",
      heading: "Most websites are useless.",
      intro:
        "Your site is live. It looks nice. But it generates zero leads. It doesn't rank on Google. It takes 6 seconds to load on mobile. Visitors leave before they understand what you do.\n\nThis is the predictable outcome of a website built without strategy. Design without UX thinking. Development without SEO optimization. A launch without performance tracking.",
      points: [
        "Excessive load times on mobile",
        "Zero Google visibility for key searches",
        "Bounce rate above 70%",
        "Zero calls or quote requests generated by the site",
        "An outdated design that no longer reflects the company's value",
      ],
    },

    whatWeBuild: {
      label: "What we build",
      heading: "Every site is built for a specific goal.",
      intro:
        "We don't build generic websites. Every project starts with one question: what does this site need to accomplish for your business?",
      items: [
        {
          title: "Professional business website",
          body: "For companies that want a credible, clear and optimized online presence. SEO-driven structure, design aligned with your positioning, conversion-focused content.",
        },
        {
          title: "E-commerce website",
          body: "Online stores built to sell. Product architecture, optimized checkout flow, payment integration, inventory management. We build e-commerce that performs, not just online catalogs.",
        },
        {
          title: "Landing pages",
          body: "Single-purpose conversion pages, designed for specific campaigns. Every element is tested and optimized: headline, structure, CTA, social proof, load speed.",
        },
        {
          title: "Website redesign",
          body: "Your current site isn't performing? We audit, identify the issues, and rebuild on solid foundations. SEO migration included to protect your existing traffic.",
        },
        {
          title: "Multi-page and corporate sites",
          body: "For companies with complex needs. Structured information architecture, multiple SEO entry points, service pages, editorial content, CRM integration.",
        },
      ],
    },

    approach: {
      label: "Our method",
      heading: "Strategy first. Design second. Performance always.",
      intro:
        "We never start by opening Figma. We start by understanding your market, your competitors and your business goals. Design comes after. And every design decision serves a measurable objective.",
      steps: [
        {
          number: "01",
          title: "Strategy and research",
          body: "Analysis of your market, competitors and audience. Definition of target keywords, site structure and conversion goals.",
        },
        {
          number: "02",
          title: "UX architecture",
          body: "Page structure, information hierarchy, user journeys. We define how each visitor will navigate and where they will convert.",
        },
        {
          number: "03",
          title: "Custom design",
          body: "Art direction aligned with your brand. Distinctive typography, consistent visual system, reusable components.",
        },
        {
          number: "04",
          title: "Next.js development",
          body: "Server-side rendering, optimized image loading, clean and maintainable code. No slow builders or modified templates.",
        },
        {
          number: "05",
          title: "Technical SEO and content",
          body: "Semantic markup, schema markup, meta data, sitemap, robots.txt, URL structure, internal linking. SEO is built into the code.",
        },
        {
          number: "06",
          title: "Testing and optimization",
          body: "Core Web Vitals audit, cross-browser testing, mobile validation, load time verification. We only deliver when the metrics are green.",
        },
        {
          number: "07",
          title: "Launch and monitoring",
          body: "Go live, analytics setup, Search Console submission, functionality verification. We stay available after launch.",
        },
      ],
    },

    deliverables: {
      label: "What you receive",
      heading: "Concrete deliverables. Not promises.",
      intro: "Every website project includes:",
      items: [
        "Audit of existing site (if redesign)",
        "SEO strategy and target keywords",
        "Site architecture and UX wireframes",
        "High-fidelity design (Figma)",
        "Front-end and back-end development",
        "Image and asset optimization",
        "Content integration",
        "Technical SEO setup (markup, schema, meta, sitemap)",
        "Performance and compatibility testing",
        "CMS training (if applicable)",
        "Go live and analytics configuration",
        "Post-launch support (30 days included)",
      ],
    },

    caseStudies: {
      label: "Results",
      heading: "Real projects. Real numbers. Real results.",
      studies: [
        {
          name: "Arduenna Gin",
          tags: ["E-commerce", "Digital Marketing", "Ad Campaigns"],
          body: "Design and development of two e-commerce sites. Digital acquisition strategy. 103 Facebook Ads campaigns. Result: 2 years of revenue achieved in 2 months.",
          href: "/en/work/arduenna-gin/",
        },
      ],
    },

    investment: {
      label: "Investment",
      heading: "Every project is custom. So is the budget.",
      body: "We don't work with packages. Every site is designed based on your goals, your market and your ambition. The budget is defined together after a first conversation, based on a clear scope: number of pages, feature complexity, content volume, SEO optimization level.\n\nThe budget includes strategy, design, development, technical SEO and launch.",
      anchor: "Free estimate within 24h",
      note: "We provide a detailed, free estimate before starting. No commitment, no surprises.",
    },

    faq: {
      label: "Frequently asked questions",
      items: [
        {
          question: "How long does it take to build a website?",
          answer:
            "A landing page takes 1 to 2 weeks. A professional business website between 3 and 6 weeks. An e-commerce site between 6 and 10 weeks. The exact timeline depends on project complexity and feedback speed.",
        },
        {
          question: "What CMS do you use?",
          answer:
            "We primarily develop with Next.js coupled with a headless CMS (Sanity, Strapi or Contentful depending on requirements). For e-commerce projects, we also work with Shopify.",
        },
        {
          question: "Is SEO included in the website build?",
          answer:
            "Yes. Technical SEO is integrated into every project: URL structure, semantic markup, schema markup, meta data, sitemap, performance. SEO is not an add-on: it's a foundation.",
        },
        {
          question:
            "Do you offer maintenance after launch?",
          answer:
            "We include 30 days of post-launch support in every project. Beyond that, we offer monthly maintenance contracts for content updates, fixes and performance monitoring.",
        },
        {
          question: "Are the websites responsive and mobile-friendly?",
          answer:
            "Every site is designed and developed mobile-first. The design starts from mobile and scales up to desktop. We test on major devices and browsers before going live.",
        },
        {
          question: "How does an existing site redesign work?",
          answer:
            "We start with a full audit: performance, SEO, UX, content, analytics. We plan the SEO migration to preserve your existing traffic and rankings. Then we rebuild on solid foundations.",
        },
      ],
    },

    cta: {
      heading:
        "Your website should work for you. Not the other way around.",
      subtext:
        "Tell us about your project. We'll tell you in 30 minutes if we can help and how.",
    },
  },
} as const;

export function getCreationSiteWebContent(locale: Locale) {
  return content[locale];
}

// Re-export default for backward compatibility
export const creationSiteWeb = content.fr;
