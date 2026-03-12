import type { Locale } from "@/lib/i18n/config";

const content = {
  fr: {
    studioIntro: {
      label: "Studio",
      heading: "Un studio. Pas une agence.",
      subtext:
        "P-XEL est un studio produit fondé et dirigé par un designer-développeur senior avec plus de 16 ans d'expérience.",
      manifesto:
        "On ne vend pas des heures. On ne livre pas des maquettes. On conçoit, construit et déploie des produits digitaux complets. Un seul interlocuteur, du premier brief au dernier deploy.",
    },
    studioFounder: {
      label: "Le fondateur",
      heading: "16 ans à concevoir des produits qui tournent en production.",
      body: `J'ai commencé par le design produit, puis le web, puis le code. Au fil des années, la frontière entre ces disciplines a disparu. Ce qui est resté, c'est la conviction qu'un bon produit digital ne peut pas être conçu par quelqu'un qui ne sait pas le construire, et ne peut pas être construit par quelqu'un qui ne sait pas le penser.

P-XEL existe parce que trop de projets meurent entre le Figma et la mise en production. Les agences livrent des maquettes. Les freelances livrent du code. Les clients se retrouvent à coordonner trois prestataires qui ne se parlent pas. Ici, c'est un seul studio. Un seul interlocuteur. Du premier brief au dernier deploy.

J'ai conçu des plateformes B2B pour le leader européen du design biophilique, lancé deux SaaS en production, et généré deux ans de chiffre d'affaires en deux mois pour une marque de gin artisanal. Ce ne sont pas des projets. Ce sont des produits qui tournent.`,
    },
    studioPhilosophy: {
      label: "Comment on pense",
      heading: "Le produit d'abord. Tout le reste en découle.",
      principles: [
        {
          number: "01",
          title: "On pense en produit, pas en livrables.",
          body: "Chaque projet commence par la question : qu'est-ce que ce produit doit accomplir ? Pas par un cahier des charges de 50 pages ou une liste de fonctionnalités. On conçoit des systèmes qui fonctionnent, pas des fichiers qui s'empilent.",
        },
        {
          number: "02",
          title: "On conçoit et on exécute. Pas l'un ou l'autre.",
          body: "La plupart des studios s'arrêtent au Figma. On va jusqu'au déploiement. Design, code, mise en production. Le client reçoit un produit fonctionnel, pas une présentation.",
        },
        {
          number: "03",
          title: "Un seul interlocuteur, de A à Z.",
          body: "Pas de compte manager. Pas de sous-traitance. Le fondateur est impliqué dans chaque projet du premier brief au dernier deploy. La qualité ne se dilue pas dans une chaîne de délégation.",
        },
      ],
    },
    studioCapabilities: {
      label: "Ce qu'on construit",
      heading: "Du concept au produit qui tourne.",
      items: [
        {
          title: "Applications web et SaaS",
          body: "De l'idée au produit en production. BillyCheck, ChairSplit : deux SaaS conçus, construits et déployés par notre studio.",
          links: [
            { label: "BillyCheck", href: "/work/billycheck/" },
            { label: "ChairSplit", href: "/work/chairsplit/" },
          ],
          serviceHref: "/services/application-web-mvp/",
        },
        {
          title: "Sites web et e-commerce",
          body: "Sites vitrines, plateformes, e-commerce. Optimisés pour le SEO, la vitesse et la conversion.",
          links: [],
          serviceHref: "/services/creation-site-web/",
        },
        {
          title: "Design d'interface",
          body: "UX research, UI design, design systems. Des interfaces pensées pour l'usage, pas pour la décoration.",
          links: [],
          serviceHref: "/services/ux-ui-design/",
        },
        {
          title: "Identité de marque",
          body: "Logo, direction artistique, systèmes visuels. Des marques construites pour durer.",
          links: [],
          serviceHref: "/services/branding-identite/",
        },
      ],
    },
    studioStats: [
      { value: 16, suffix: "+", label: "années d'expertise" },
      { value: 49, suffix: "+", label: "projets livrés" },
      { value: 98, suffix: "%", label: "clients satisfaits" },
      { value: 5, suffix: "", label: "produits en production" },
    ],
    studioProcess: {
      label: "Comment on travaille",
      heading: "Du brief au lancement. Sans friction.",
      steps: [
        {
          number: "01",
          title: "Premier contact",
          body: "Décrivez votre projet en quelques lignes via le formulaire ou par email. On répond sous 24h avec un premier retour.",
        },
        {
          number: "02",
          title: "Appel découverte",
          body: "30 minutes pour comprendre vos objectifs, vos contraintes et vos attentes. On valide ensemble si le projet est un bon fit.",
        },
        {
          number: "03",
          title: "Proposition claire",
          body: "Périmètre, livrables, planning et budget. Tout est posé noir sur blanc. Pas de surprises, pas de zones grises.",
        },
        {
          number: "04",
          title: "On construit",
          body: "Design, développement, itérations. Vous suivez l'avancement en temps réel. On livre un produit fini, pas un draft.",
        },
      ],
    },
    studioCta: {
      heading: "Prêt à construire ?",
      subtext:
        "30 minutes pour cadrer votre projet et poser les bases.",
    },
  },
  en: {
    studioIntro: {
      label: "Studio",
      heading: "A studio. Not an agency.",
      subtext:
        "P-XEL is a product studio founded and led by a senior designer-developer with 16+ years of experience.",
      manifesto:
        "We don\u2019t sell hours. We don\u2019t deliver mockups. We design, build and deploy complete digital products. One point of contact, from first brief to final deploy.",
    },
    studioFounder: {
      label: "The founder",
      heading: "16 years designing products that run in production.",
      body: `I started with product design, then web, then code. Over the years, the boundary between these disciplines disappeared. What remained is the conviction that a good digital product cannot be designed by someone who doesn\u2019t know how to build it, and cannot be built by someone who doesn\u2019t know how to think it through.

P-XEL exists because too many projects die between Figma and production. Agencies deliver mockups. Freelancers deliver code. Clients end up coordinating three vendors who don\u2019t talk to each other. Here, it\u2019s one studio. One point of contact. From first brief to final deploy.

I\u2019ve designed B2B platforms for Europe\u2019s leading biophilic design company, launched two SaaS products into production, and generated two years of revenue in two months for a craft gin brand. These aren\u2019t projects. They\u2019re products that run.`,
    },
    studioPhilosophy: {
      label: "How we think",
      heading: "Product first. Everything else follows.",
      principles: [
        {
          number: "01",
          title: "We think in products, not deliverables.",
          body: "Every project starts with the question: what does this product need to achieve? Not with a 50-page spec or a feature list. We design systems that work, not files that pile up.",
        },
        {
          number: "02",
          title: "We design and we ship. Not one or the other.",
          body: "Most studios stop at Figma. We go all the way to deployment. Design, code, production. The client gets a working product, not a presentation.",
        },
        {
          number: "03",
          title: "One point of contact, end to end.",
          body: "No account manager. No outsourcing. The founder is involved in every project from first brief to final deploy. Quality doesn\u2019t dilute through a chain of delegation.",
        },
      ],
    },
    studioCapabilities: {
      label: "What we build",
      heading: "From concept to shipped product.",
      items: [
        {
          title: "Web applications and SaaS",
          body: "From idea to product in production. BillyCheck, ChairSplit: two SaaS products designed, built and deployed by our studio.",
          links: [
            { label: "BillyCheck", href: "/en/work/billycheck/" },
            { label: "ChairSplit", href: "/en/work/chairsplit/" },
          ],
          serviceHref: "/en/services/application-web-mvp/",
        },
        {
          title: "Websites and e-commerce",
          body: "Corporate sites, platforms, e-commerce. Optimized for SEO, speed and conversion.",
          links: [],
          serviceHref: "/en/services/creation-site-web/",
        },
        {
          title: "Interface design",
          body: "UX research, UI design, design systems. Interfaces built for usability, not decoration.",
          links: [],
          serviceHref: "/en/services/ux-ui-design/",
        },
        {
          title: "Brand identity",
          body: "Logo, art direction, visual systems. Brands built to last.",
          links: [],
          serviceHref: "/en/services/branding-identite/",
        },
      ],
    },
    studioStats: [
      { value: 16, suffix: "+", label: "years of expertise" },
      { value: 49, suffix: "+", label: "projects delivered" },
      { value: 98, suffix: "%", label: "satisfied clients" },
      { value: 5, suffix: "", label: "products in production" },
    ],
    studioProcess: {
      label: "How we work",
      heading: "From brief to launch. No friction.",
      steps: [
        {
          number: "01",
          title: "First contact",
          body: "Describe your project in a few lines via the form or by email. We respond within 24h with initial feedback.",
        },
        {
          number: "02",
          title: "Discovery call",
          body: "30 minutes to understand your goals, constraints and expectations. We validate together whether the project is a good fit.",
        },
        {
          number: "03",
          title: "Clear proposal",
          body: "Scope, deliverables, timeline and budget. Everything laid out in black and white. No surprises, no grey areas.",
        },
        {
          number: "04",
          title: "We build",
          body: "Design, development, iterations. You follow progress in real time. We deliver a finished product, not a draft.",
        },
      ],
    },
    studioCta: {
      heading: "Ready to build?",
      subtext:
        "30 minutes to scope your project and lay the groundwork.",
    },
  },
} as const;

export function getStudioContent(locale: Locale) {
  return content[locale];
}

// Backward compatibility
export const studioIntro = content.fr.studioIntro;
export const studioFounder = content.fr.studioFounder;
export const studioPhilosophy = content.fr.studioPhilosophy;
export const studioCapabilities = content.fr.studioCapabilities;
export const studioStats = content.fr.studioStats;
export const studioProcess = content.fr.studioProcess;
export const studioCta = content.fr.studioCta;
