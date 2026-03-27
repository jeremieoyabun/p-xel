import type { ServicePage } from "./types";
import type { Locale } from "@/lib/i18n/config";

const content: Record<Locale, ServicePage> = {
  fr: {
    slug: "refonte-site-web",
    metaTitle:
      "Refonte de Site Web | Moderniser votre site internet | P-XEL Studio",
    metaDescription:
      "Refonte de site web en Belgique. Audit, redesign, migration et optimisation SEO. Modernisez votre site pour convertir plus. Studio à Liège.",

    hero: {
      label: "Refonte de site web",
      heading:
        "Votre site a vieilli. Vos concurrents, non.",
      subheadline:
        "Audit complet, redesign, migration et relancement. On transforme un site qui stagne en machine à convertir. Sans perdre votre SEO.",
    },

    problem: {
      label: "Le constat",
      heading: "Un site qui date coûte plus cher qu'une refonte.",
      intro:
        "Votre site a été bien construit. Mais le web évolue vite. Ce qui fonctionnait il y a 3 ans pénalise aujourd'hui votre business.",
      points: [
        "Design daté qui ne reflète plus votre positionnement. Les visiteurs jugent votre crédibilité en 3 secondes.",
        "Performances dégradées. Temps de chargement lent, Core Web Vitals dans le rouge, pénalité Google.",
        "Pas responsive, pas accessible. 60%+ de votre trafic est mobile. Si l'expérience mobile est mauvaise, vous perdez des clients.",
        "SEO en déclin. Contenu obsolète, structure technique inadaptée, concurrents qui vous dépassent.",
      ],
    },

    whatWeBuild: {
      label: "Ce qu'on refait",
      heading: "Une refonte complète. Pas un lifting cosmétique.",
      intro:
        "On ne change pas juste les couleurs. On repense le produit, l'architecture, la performance et le SEO.",
      items: [
        {
          title: "Audit et diagnostic",
          body: "Analyse complète de votre site actuel : performance, SEO, UX, contenu, conversion. On identifie ce qui fonctionne et ce qui freine.",
          icon: "search",
        },
        {
          title: "Redesign UX/UI",
          body: "Nouvelle architecture d'information, nouveaux parcours utilisateur, nouveau design. Pensé pour convertir, pas juste pour être joli.",
          icon: "layout",
        },
        {
          title: "Développement Next.js",
          body: "Migration vers une stack moderne. Next.js, TypeScript, déploiement Vercel. Performance optimale, SEO technique irréprochable.",
          icon: "zap",
        },
        {
          title: "Migration de contenu",
          body: "Transfert de votre contenu existant, redirections 301, préservation de votre autorité SEO. Aucune page orpheline.",
          icon: "refresh",
        },
        {
          title: "Optimisation SEO",
          body: "Refonte de la structure de pages, meta tags, schema markup, maillage interne. Votre nouveau site est pensé pour ranker.",
          icon: "target",
        },
      ],
    },

    approach: {
      label: "Notre méthode",
      heading: "De l'audit au relancement. Méthodique.",
      intro:
        "On ne refait pas un site à l'aveugle. Chaque décision est basée sur des données.",
      steps: [
        {
          number: "01",
          title: "Audit complet",
          body: "Performance, SEO, analytics, heatmaps, parcours utilisateur. On pose un diagnostic clair avant de toucher quoi que ce soit.",
        },
        {
          number: "02",
          title: "Stratégie de refonte",
          body: "Architecture d'information, priorisation des pages, plan de migration, objectifs de conversion. Tout est validé avant le design.",
        },
        {
          number: "03",
          title: "Design et développement",
          body: "Maquettes, prototypage, développement itératif. Vous voyez le nouveau site prendre forme chaque semaine.",
        },
        {
          number: "04",
          title: "Migration et lancement",
          body: "Redirections 301, transfert de contenu, tests cross-browser, monitoring post-lancement. Zéro perte de trafic.",
        },
      ],
    },

    deliverables: {
      label: "Ce que vous recevez",
      heading: "Un site neuf. Pas juste un nouveau thème.",
      intro: "",
      items: [
        "Audit complet de votre site actuel (performance, SEO, UX, contenu)",
        "Nouvelle architecture d'information et wireframes",
        "Design UI complet (desktop, tablette, mobile)",
        "Développement Next.js avec SSG/SSR",
        "Migration de contenu et plan de redirections 301",
        "SEO on-page (meta tags, schema markup, maillage interne)",
        "Optimisation Core Web Vitals (LCP, CLS, INP)",
        "Formation et documentation",
      ],
      note: "Vous êtes propriétaire de tout. Code, design, contenu, hébergement.",
    },

    caseStudies: {
      label: "Projets récents",
      heading: "Ce qu'on a reconstruit.",
      studies: [
        {
          name: "Greenmood",
          tags: ["UX/UI", "Plateforme B2B", "Design System"],
          body: "Refonte complète de la plateforme B2B du leader européen du design biophilique. Architecture d'information, UX/UI et configurateurs produit.",
          href: "/work/greenmood/",
          image: "/images/case-studies/greenmood-hero.webp",
        },
      ],
    },

    investment: {
      label: "Investissement",
      heading: "Un budget calibré sur l'impact.",
      body: "Le coût d'une refonte dépend de la taille du site, de la complexité de la migration et de vos objectifs de conversion.\n\nÀ titre indicatif : refonte d'un site vitrine à partir de 3\u00a0500\u00a0€, refonte d'une plateforme ou application à partir de 8\u00a0000\u00a0€. Estimation gratuite et détaillée après un premier échange.",
      anchor: "Estimation gratuite sous 24h",
      note: "On calcule aussi le ROI estimé de la refonte pour justifier l'investissement auprès de vos décideurs.",
    },

    faq: {
      label: "Questions fréquentes",
      items: [
        {
          question: "Quand faut-il refaire son site web ?",
          answer:
            "Si votre site a plus de 3 ans, que le design paraît daté, que les performances sont mauvaises (Core Web Vitals en rouge), que le taux de conversion est bas ou que votre SEO recule, c'est le moment.",
        },
        {
          question: "Est-ce qu'on perd son référencement lors d'une refonte ?",
          answer:
            "Non, si c'est bien fait. On met en place un plan de redirections 301, on préserve la structure des URLs autant que possible, et on améliore le SEO technique. La plupart de nos refontes aboutissent à un gain de positions.",
        },
        {
          question: "Combien de temps prend une refonte ?",
          answer:
            "Site vitrine : 1 à 2 semaines. Plateforme ou application : 4 semaines. On définit un planning précis dès le départ.",
        },
        {
          question: "Peut-on garder le contenu existant ?",
          answer:
            "Oui. On audite votre contenu, on identifie ce qui performe et ce qui doit être réécrit. La migration est incluse dans le projet.",
        },
        {
          question: "Quelle technologie utilisez-vous ?",
          answer:
            "Next.js avec TypeScript, déployé sur Vercel. C'est la stack la plus performante pour le SEO et les Core Web Vitals. On migre depuis WordPress, Wix, Squarespace ou tout autre CMS.",
        },
      ],
    },

    cta: {
      heading: "Votre site mérite mieux que son état actuel.",
      subtext:
        "Décrivez votre projet. On vous envoie un diagnostic gratuit sous 24h.",
    },
  },

  en: {
    slug: "refonte-site-web",
    metaTitle:
      "Website Redesign | Modernize Your Website | P-XEL Studio",
    metaDescription:
      "Website redesign in Belgium. Audit, redesign, migration and SEO optimization. Modernize your site to convert more. Studio in Liege, Belgium.",

    hero: {
      label: "Website redesign",
      heading:
        "Your site aged. Your competitors didn't.",
      subheadline:
        "Full audit, redesign, migration and relaunch. We transform a stagnating site into a conversion machine. Without losing your SEO.",
    },

    problem: {
      label: "The reality",
      heading: "An outdated site costs more than a redesign.",
      intro:
        "Your site was well built. But the web moves fast. What worked 3 years ago is now hurting your business.",
      points: [
        "Dated design that no longer reflects your positioning. Visitors judge your credibility in 3 seconds.",
        "Degraded performance. Slow load times, Core Web Vitals in the red, Google penalty.",
        "Not responsive, not accessible. 60%+ of your traffic is mobile. Poor mobile experience means lost clients.",
        "Declining SEO. Outdated content, inadequate technical structure, competitors overtaking you.",
      ],
    },

    whatWeBuild: {
      label: "What we rebuild",
      heading: "A complete redesign. Not a cosmetic facelift.",
      intro:
        "We don't just change colors. We rethink the product, architecture, performance and SEO.",
      items: [
        {
          title: "Audit and diagnosis",
          body: "Full analysis of your current site: performance, SEO, UX, content, conversion. We identify what works and what holds you back.",
          icon: "search",
        },
        {
          title: "UX/UI redesign",
          body: "New information architecture, new user journeys, new design. Built to convert, not just to look pretty.",
          icon: "layout",
        },
        {
          title: "Next.js development",
          body: "Migration to a modern stack. Next.js, TypeScript, Vercel deployment. Optimal performance, flawless technical SEO.",
          icon: "zap",
        },
        {
          title: "Content migration",
          body: "Transfer of your existing content, 301 redirects, preservation of your SEO authority. No orphaned pages.",
          icon: "refresh",
        },
        {
          title: "SEO optimization",
          body: "Page structure redesign, meta tags, schema markup, internal linking. Your new site is built to rank.",
          icon: "target",
        },
      ],
    },

    approach: {
      label: "Our method",
      heading: "From audit to relaunch. Methodical.",
      intro:
        "We don't redesign blindly. Every decision is data-driven.",
      steps: [
        {
          number: "01",
          title: "Full audit",
          body: "Performance, SEO, analytics, heatmaps, user journeys. We establish a clear diagnosis before touching anything.",
        },
        {
          number: "02",
          title: "Redesign strategy",
          body: "Information architecture, page prioritization, migration plan, conversion goals. Everything validated before design starts.",
        },
        {
          number: "03",
          title: "Design and development",
          body: "Mockups, prototyping, iterative development. You see the new site take shape every week.",
        },
        {
          number: "04",
          title: "Migration and launch",
          body: "301 redirects, content transfer, cross-browser testing, post-launch monitoring. Zero traffic loss.",
        },
      ],
    },

    deliverables: {
      label: "What you receive",
      heading: "A new site. Not just a new theme.",
      intro: "",
      items: [
        "Full audit of your current site (performance, SEO, UX, content)",
        "New information architecture and wireframes",
        "Complete UI design (desktop, tablet, mobile)",
        "Next.js development with SSG/SSR",
        "Content migration and 301 redirect plan",
        "On-page SEO (meta tags, schema markup, internal linking)",
        "Core Web Vitals optimization (LCP, CLS, INP)",
        "Training and documentation",
      ],
      note: "You own everything. Code, design, content, hosting.",
    },

    caseStudies: {
      label: "Recent projects",
      heading: "What we've rebuilt.",
      studies: [
        {
          name: "Greenmood",
          tags: ["UX/UI", "B2B Platform", "Design System"],
          body: "Complete redesign of the B2B platform for Europe's leading biophilic design company. Information architecture, UX/UI and product configurators.",
          href: "/en/work/greenmood/",
          image: "/images/case-studies/greenmood-hero.webp",
        },
      ],
    },

    investment: {
      label: "Investment",
      heading: "A budget calibrated on impact.",
      body: "The cost of a redesign depends on site size, migration complexity and your conversion goals.\n\nAs a guide: showcase site redesign from 3,500 EUR, platform or application redesign from 8,000 EUR. Free and detailed estimate after a first conversation.",
      anchor: "Free estimate within 24h",
      note: "We also calculate the estimated ROI of the redesign to justify the investment to your stakeholders.",
    },

    faq: {
      label: "Frequently asked questions",
      items: [
        {
          question: "When should you redesign your website?",
          answer:
            "If your site is more than 3 years old, the design looks dated, performance is poor (Core Web Vitals in the red), conversion rate is low, or your SEO is declining, it's time.",
        },
        {
          question: "Do you lose SEO rankings during a redesign?",
          answer:
            "Not if it's done properly. We implement a 301 redirect plan, preserve URL structure where possible, and improve technical SEO. Most of our redesigns result in ranking improvements.",
        },
        {
          question: "How long does a redesign take?",
          answer:
            "Showcase site: 1 to 2 weeks. Platform or application: 4 weeks. We define a precise timeline from the start.",
        },
        {
          question: "Can we keep existing content?",
          answer:
            "Yes. We audit your content, identify what performs and what needs rewriting. Migration is included in the project.",
        },
        {
          question: "What technology do you use?",
          answer:
            "Next.js with TypeScript, deployed on Vercel. It's the most performant stack for SEO and Core Web Vitals. We migrate from WordPress, Wix, Squarespace or any other CMS.",
        },
      ],
    },

    cta: {
      heading: "Your site deserves better than its current state.",
      subtext:
        "Describe your project. We'll send you a free diagnosis within 24h.",
    },
  },
} as const;

export function getRefonteSiteWebContent(locale: Locale) {
  return content[locale];
}

export const refonteSiteWeb = content.fr;
