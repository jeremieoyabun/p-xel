import type { Locale } from "@/lib/i18n/config";

const content = {
  fr: {
    bruxellesIntro: {
      label: "Bruxelles",
      heading: "Un studio produit pour Bruxelles. Sans le overhead d'agence.",
      subtext:
        "P-XEL est un studio produit basé à Liège qui accompagne les entreprises bruxelloises. Sites web, applications, MVP, branding. Un interlocuteur senior, de la stratégie au déploiement. Des tarifs de studio, pas de grande agence.",
    },
    bruxellesServices: {
      label: "Ce qu'on construit pour Bruxelles",
      heading:
        "Les services qu'il faut pour lancer, scaler ou moderniser un produit digital.",
      items: [
        {
          title: "Sites web et landing pages",
          body: "Sites vitrines, e-commerce, landing pages. Construits pour le SEO, la performance et la conversion. Chaque site est développé sur mesure avec Next.js.",
          href: "/services/creation-site-web/",
        },
        {
          title: "Applications web et MVP",
          body: "Applications web, plateformes SaaS, outils métier, MVPs. De l'idée au produit déployé. BillyCheck et ChairSplit : deux SaaS conçus et livrés par notre studio.",
          href: "/services/application-web-mvp/",
        },
        {
          title: "Design d'interface (UX/UI)",
          body: "UX research, UI design, design systems, prototypage. Des interfaces pensées pour l'usage réel, pas pour impressionner en réunion.",
        },
        {
          title: "Identité de marque",
          body: "Logo, direction artistique, systèmes visuels. Des marques construites pour se démarquer dans un marché bruxellois saturé.",
        },
        {
          title: "AI Studio",
          body: "Intégration d'IA dans vos produits et workflows. Automatisation, génération de contenu, outils intelligents. On intègre l'IA là où elle crée de la valeur réelle.",
        },
      ],
    },
    bruxellesWhy: {
      label: "Pourquoi nous",
      heading: "Pas une agence bruxelloise de plus. Un studio produit qui livre.",
      points: [
        {
          title: "Un seul interlocuteur senior.",
          body: "Pas de compte manager junior qui fait tampon. Le fondateur prend le brief, conçoit le produit, supervise chaque étape. 16 ans d'expertise sur chaque projet. Vous parlez à celui qui fait.",
        },
        {
          title: "On conçoit et on livre.",
          body: "Beaucoup d'agences bruxelloises livrent des maquettes Figma et vous laissent trouver un développeur. Chez P-XEL, on va du design au déploiement. Vous recevez un produit fonctionnel, pas une présentation.",
        },
        {
          title: "Des tarifs de studio, pas de grande agence.",
          body: "Pas de bureaux prestige avenue Louise, pas de couches intermédiaires, pas de overhead. Le budget va dans votre produit, pas dans notre structure. Vous obtenez la qualité d'une agence premium au prix d'un studio.",
        },
        {
          title: "Basés à Liège, disponibles à Bruxelles.",
          body: "Notre studio est à Liège, à 1h de Bruxelles. On se déplace pour les briefings, les ateliers et les présentations clés. Le reste se fait en remote, comme la plupart de vos projets actuels.",
        },
      ],
    },
    bruxellesContext: {
      label: "Bruxelles et nous",
      heading: "Un marché qu'on comprend.",
      paragraphs: [
        "Bruxelles concentre le plus gros de l'écosystème digital belge. Startups, scale-ups, corporates, institutions européennes, agences fédérales. La demande est là. Mais les tarifs des grandes agences bruxelloises ne correspondent pas toujours à la valeur livrée.",
        "P-XEL propose une alternative claire : un studio produit senior, sans overhead, qui livre des produits digitaux complets. On travaille avec des startups qui sortent d'accélérateurs, des PME qui veulent un site qui performe, des scale-ups qui ont besoin d'un MVP solide sans engager une équipe interne.",
        "Que vous soyez à Ixelles, dans le quartier européen ou à Auderghem, le format est le même : un interlocuteur unique, des livrables concrets, un produit en production. Pas de slides, pas de comités. Du travail.",
      ],
    },
    bruxellesProjects: {
      label: "Projets récents",
      heading: "Ce qu'on a construit récemment.",
      studies: [
        {
          name: "BillyCheck",
          body: "Application SaaS d'optimisation de factures énergétiques. IA, Next.js, Stripe. De l'idée au produit en production.",
          href: "/work/billycheck/",
        },
        {
          name: "ChairSplit",
          body: "Plateforme SaaS de gestion pour barbershops. Multi-tenant, PWA, Supabase, Stripe. Produit complet en production.",
          href: "/work/chairsplit/",
        },
        {
          name: "Greenmood",
          body: "Plateforme B2B pour le leader européen du design acoustique. Architecture d'information, UX/UI et configurateurs produit.",
          href: "/work/greenmood/",
        },
      ],
    },
    bruxellesProcess: {
      label: "Comment on travaille",
      heading: "Du brief au lancement. Sans friction.",
      steps: [
        {
          number: "01",
          title: "Premier contact",
          body: "Décrivez votre projet en quelques lignes. On répond sous 24h avec un premier retour.",
        },
        {
          number: "02",
          title: "Appel découverte",
          body: "30 minutes pour comprendre vos objectifs, vos contraintes et vos attentes. On se déplace à Bruxelles si nécessaire.",
        },
        {
          number: "03",
          title: "Proposition claire",
          body: "Périmètre, livrables, planning et budget. Tout est posé noir sur blanc. Pas de surprises.",
        },
        {
          number: "04",
          title: "On construit",
          body: "Design, développement, itérations. Vous suivez l'avancement en temps réel. On livre un produit fini.",
        },
      ],
    },
    bruxellesFaq: [
      {
        question: "Combien coûte un site web professionnel à Bruxelles ?",
        answer:
          "Chaque projet est chiffré sur mesure. Le budget dépend du type de projet, de la complexité et de vos objectifs. On fournit une estimation gratuite et détaillée après un premier échange. Nos tarifs de studio sont significativement inférieurs à ceux des grandes agences bruxelloises, à qualité équivalente.",
      },
      {
        question:
          "Comment travaillez-vous avec des clients bruxellois si vous êtes à Liège ?",
        answer:
          "On se déplace à Bruxelles pour les briefings, ateliers et présentations clés. Le reste se fait en remote, en visio et via des outils collaboratifs. Liège est à 1h de Bruxelles. La plupart de nos clients préfèrent ce format hybride, plus efficace que des réunions en présentiel chaque semaine.",
      },
      {
        question: "Quel est le délai pour créer un site web à Bruxelles ?",
        answer:
          "Landing page : 1 semaine. Site vitrine : 1 à 2 semaines. Application web : 4 semaines. On définit un calendrier précis dès le départ et on le respecte. Pas de dérives.",
      },
      {
        question:
          "Quelle différence entre P-XEL et une grande agence bruxelloise ?",
        answer:
          "Chez P-XEL, vous travaillez directement avec le fondateur. Pas de junior, pas de sous-traitance, pas de couches intermédiaires. On conçoit et on livre le produit complet. Le résultat : plus de qualité, moins de overhead, des délais tenus. Vous payez pour le produit, pas pour la structure.",
      },
      {
        question:
          "Les entreprises bruxelloises peuvent-elles bénéficier des chèques-entreprises ?",
        answer:
          "Les chèques-entreprises de la Région wallonne sont réservées aux entreprises wallonnes. Si votre siège social est en Région bruxelloise, d'autres dispositifs existent. On vous oriente vers les bons mécanismes de financement selon votre situation.",
      },
      {
        question:
          "Quels types d'entreprises bruxelloises font appel à P-XEL ?",
        answer:
          "Startups qui sortent d'accélérateurs, PME qui veulent un site performant, scale-ups qui ont besoin d'un MVP ou d'un outil métier, entreprises établies qui modernisent leur présence digitale. On travaille aussi avec des structures proches des institutions européennes et des agences fédérales qui cherchent un partenaire agile.",
      },
    ],
    bruxellesOtherCities: {
      label: "On intervient aussi à",
      text: "Liège, Namur, Luxembourg et partout en Belgique en remote. Notre base est à Liège, notre rayon d'action est européen.",
    },
    bruxellesCta: {
      heading: "Un projet digital à Bruxelles ?",
      subtext:
        "On s'appelle ou on se retrouve à Bruxelles. 30 minutes, sans engagement.",
    },
  },
  en: {
    bruxellesIntro: {
      label: "Brussels",
      heading: "A product studio for Brussels. Without the agency overhead.",
      subtext:
        "P-XEL is a product studio based in Liege that works with Brussels-based businesses. Websites, applications, MVPs, branding. One senior point of contact, from strategy to deployment. Studio pricing, not big agency rates.",
    },
    bruxellesServices: {
      label: "What we build for Brussels",
      heading:
        "The services you need to launch, scale or modernize a digital product.",
      items: [
        {
          title: "Websites and landing pages",
          body: "Corporate sites, e-commerce, landing pages. Built for SEO, performance and conversion. Every site is custom-built with Next.js.",
          href: "/en/services/creation-site-web/",
        },
        {
          title: "Web applications and MVPs",
          body: "Web apps, SaaS platforms, business tools, MVPs. From idea to deployed product. BillyCheck and ChairSplit: two SaaS products designed and shipped by our studio.",
          href: "/en/services/application-web-mvp/",
        },
        {
          title: "Interface design (UX/UI)",
          body: "UX research, UI design, design systems, prototyping. Interfaces built for real-world usability, not to impress in meetings.",
        },
        {
          title: "Brand identity",
          body: "Logo, art direction, visual systems. Brands built to stand out in a saturated Brussels market.",
        },
        {
          title: "AI Studio",
          body: "AI integration into your products and workflows. Automation, content generation, intelligent tools. We integrate AI where it creates real value.",
        },
      ],
    },
    bruxellesWhy: {
      label: "Why us",
      heading: "Not another Brussels agency. A product studio that ships.",
      points: [
        {
          title: "One senior point of contact.",
          body: "No junior account manager acting as a buffer. The founder takes the brief, designs the product, oversees every step. 16 years of expertise on every project. You talk to the person doing the work.",
        },
        {
          title: "We design and we ship.",
          body: "Many Brussels agencies deliver Figma mockups and leave you to find a developer. At P-XEL, we go from design to deployment. You get a working product, not a presentation.",
        },
        {
          title: "Studio pricing, not big agency rates.",
          body: "No prestige offices on Avenue Louise, no middle layers, no overhead. The budget goes into your product, not our structure. You get premium agency quality at studio pricing.",
        },
        {
          title: "Based in Liege, available in Brussels.",
          body: "Our studio is in Liege, 1 hour from Brussels. We travel for briefings, workshops and key presentations. The rest happens remotely, like most of your current projects.",
        },
      ],
    },
    bruxellesContext: {
      label: "Brussels and us",
      heading: "A market we understand.",
      paragraphs: [
        "Brussels concentrates the bulk of Belgium's digital ecosystem. Startups, scale-ups, corporates, EU institutions, federal agencies. The demand is there. But the rates of large Brussels agencies don't always match the value delivered.",
        "P-XEL offers a clear alternative: a senior product studio, no overhead, that delivers complete digital products. We work with startups coming out of accelerators, SMEs that want a website that performs, scale-ups that need a solid MVP without hiring an internal team.",
        "Whether you're in Ixelles, the European quarter or Auderghem, the format is the same: one point of contact, concrete deliverables, a product in production. No slides, no committees. Work.",
      ],
    },
    bruxellesProjects: {
      label: "Recent projects",
      heading: "What we've built recently.",
      studies: [
        {
          name: "BillyCheck",
          body: "SaaS application for energy bill optimization. AI, Next.js, Stripe. From idea to product in production.",
          href: "/en/work/billycheck/",
        },
        {
          name: "ChairSplit",
          body: "SaaS management platform for barbershops. Multi-tenant, PWA, Supabase, Stripe. Complete product in production.",
          href: "/en/work/chairsplit/",
        },
        {
          name: "Greenmood",
          body: "B2B platform for Europe's leading acoustic design company. Information architecture, UX/UI and product configurators.",
          href: "/en/work/greenmood/",
        },
      ],
    },
    bruxellesProcess: {
      label: "How we work",
      heading: "From brief to launch. No friction.",
      steps: [
        {
          number: "01",
          title: "First contact",
          body: "Describe your project in a few lines. We respond within 24h with initial feedback.",
        },
        {
          number: "02",
          title: "Discovery call",
          body: "30 minutes to understand your goals, constraints and expectations. We can meet in Brussels if needed.",
        },
        {
          number: "03",
          title: "Clear proposal",
          body: "Scope, deliverables, timeline and budget. Everything laid out in black and white. No surprises.",
        },
        {
          number: "04",
          title: "We build",
          body: "Design, development, iterations. You follow progress in real time. We deliver a finished product.",
        },
      ],
    },
    bruxellesFaq: [
      {
        question: "How much does a professional website cost in Brussels?",
        answer:
          "Every project is quoted on a custom basis. The budget depends on the type of project, complexity and your goals. We provide a free, detailed estimate after an initial conversation. Our studio rates are significantly lower than those of large Brussels agencies, at equivalent quality.",
      },
      {
        question:
          "How do you work with Brussels clients if you're based in Liege?",
        answer:
          "We travel to Brussels for briefings, workshops and key presentations. The rest happens remotely, via video calls and collaborative tools. Liege is 1 hour from Brussels. Most of our clients prefer this hybrid format, more efficient than weekly in-person meetings.",
      },
      {
        question: "What is the timeline to create a website in Brussels?",
        answer:
          "Landing page: 1 week. Corporate site: 1 to 2 weeks. Web application: 4 weeks. We define a precise schedule from the start and we stick to it. No drift.",
      },
      {
        question:
          "What's the difference between P-XEL and a large Brussels agency?",
        answer:
          "At P-XEL, you work directly with the founder. No juniors, no outsourcing, no middle layers. We design and deliver the complete product. The result: more quality, less overhead, deadlines met. You pay for the product, not the structure.",
      },
      {
        question:
          "Can Brussels-based companies use the cheques-entreprises program?",
        answer:
          "The Walloon Region's cheques-entreprises are reserved for Walloon-based companies. If your headquarters are in the Brussels Region, other funding mechanisms exist. We help you navigate toward the right options for your situation.",
      },
      {
        question:
          "What types of Brussels-based businesses work with P-XEL?",
        answer:
          "Startups coming out of accelerators, SMEs looking for a high-performing website, scale-ups that need an MVP or business tool, established companies modernizing their digital presence. We also work with organizations close to EU institutions and federal agencies looking for an agile partner.",
      },
    ],
    bruxellesOtherCities: {
      label: "We also work in",
      text: "Liege, Namur, Luxembourg and anywhere in Belgium remotely. Our base is in Liege, our reach is European.",
    },
    bruxellesCta: {
      heading: "A digital project in Brussels?",
      subtext:
        "Let's hop on a call or meet in Brussels. 30 minutes, no commitment.",
    },
  },
} as const;

export function getBruxellesContent(locale: Locale) {
  return content[locale];
}

// Backward compatibility
export const bruxellesIntro = content.fr.bruxellesIntro;
export const bruxellesServices = content.fr.bruxellesServices;
export const bruxellesWhy = content.fr.bruxellesWhy;
export const bruxellesContext = content.fr.bruxellesContext;
export const bruxellesProjects = content.fr.bruxellesProjects;
export const bruxellesProcess = content.fr.bruxellesProcess;
export const bruxellesFaq = content.fr.bruxellesFaq;
export const bruxellesOtherCities = content.fr.bruxellesOtherCities;
export const bruxellesCta = content.fr.bruxellesCta;
