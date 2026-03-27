import type { Locale } from "@/lib/i18n/config";

const content = {
  fr: {
    namurIntro: {
      label: "Namur",
      heading: "Un studio produit pour Namur. Sans le overhead d'agence.",
      subtext:
        "P-XEL est un studio produit basé à Liège qui accompagne les entreprises namuroises. Sites web, applications, MVP, branding. Un interlocuteur senior, de la stratégie au déploiement. Des tarifs de studio, pas de grande agence.",
    },
    namurServices: {
      label: "Ce qu'on construit pour Namur",
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
          body: "Logo, direction artistique, systèmes visuels. Des marques construites pour se démarquer dans l'écosystème wallon en pleine croissance.",
        },
        {
          title: "AI Studio",
          body: "Intégration d'IA dans vos produits et workflows. Automatisation, génération de contenu, outils intelligents. On intègre l'IA là où elle crée de la valeur réelle.",
        },
      ],
    },
    namurWhy: {
      label: "Pourquoi nous",
      heading: "Pas une agence namuroise de plus. Un studio produit qui livre.",
      points: [
        {
          title: "Un seul interlocuteur senior.",
          body: "Pas de compte manager junior qui fait tampon. Le fondateur prend le brief, conçoit le produit, supervise chaque étape. 16 ans d'expertise sur chaque projet. Vous parlez à celui qui fait.",
        },
        {
          title: "On conçoit et on livre.",
          body: "Beaucoup de prestataires livrent des maquettes Figma et vous laissent trouver un développeur. Chez P-XEL, on va du design au déploiement. Vous recevez un produit fonctionnel, pas une présentation.",
        },
        {
          title: "Des tarifs de studio, pas de grande agence.",
          body: "Pas de bureaux prestige, pas de couches intermédiaires, pas de overhead. Le budget va dans votre produit, pas dans notre structure. Vous obtenez la qualité d'une agence premium au prix d'un studio.",
        },
        {
          title: "Basés à Liège, à 45 minutes de Namur.",
          body: "Notre studio est à Liège, à 45 minutes de Namur. On se déplace pour les briefings, les ateliers et les présentations clés. Le reste se fait en remote, comme la plupart de vos projets actuels.",
        },
      ],
    },
    namurContext: {
      label: "Namur et nous",
      heading: "Une capitale wallonne en pleine transformation digitale.",
      paragraphs: [
        "Namur est la capitale de la Wallonie et un carrefour stratégique pour les institutions régionales, les PME wallonnes et un écosystème tech en pleine croissance. Le Bureau économique de la Province, le TRAKK et les incubateurs locaux créent un terreau fertile pour les projets digitaux.",
        "P-XEL propose une alternative claire aux grandes structures : un studio produit senior, sans overhead, qui livre des produits digitaux complets. On travaille avec des startups qui émergent de l'écosystème wallon, des PME qui veulent un site qui performe, des institutions régionales qui modernisent leurs outils.",
        "Que vous soyez dans le centre de Namur, à Jambes, à Erpent ou dans la province, le format est le même : un interlocuteur unique, des livrables concrets, un produit en production. Pas de slides, pas de comités. Du travail.",
      ],
    },
    namurProjects: {
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
    namurProcess: {
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
          body: "30 minutes pour comprendre vos objectifs, vos contraintes et vos attentes. On se déplace à Namur si nécessaire.",
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
    namurFaq: [
      {
        question: "Combien coûte un site web professionnel à Namur ?",
        answer:
          "Chaque projet est chiffré sur mesure. Le budget dépend du type de projet, de la complexité et de vos objectifs. On fournit une estimation gratuite et détaillée après un premier échange. Nos tarifs de studio sont significativement inférieurs à ceux des grandes agences, à qualité équivalente.",
      },
      {
        question:
          "Comment travaillez-vous avec des clients namurois si vous êtes à Liège ?",
        answer:
          "Liège et Namur sont à 45 minutes l'une de l'autre. On se déplace à Namur pour les briefings, ateliers et présentations clés. Le reste se fait en remote, en visio et via des outils collaboratifs. La plupart de nos clients préfèrent ce format hybride, plus efficace que des réunions en présentiel chaque semaine.",
      },
      {
        question: "Quel est le délai pour créer un site web à Namur ?",
        answer:
          "Landing page : 1 semaine. Site vitrine : 1 à 2 semaines. Application web : 4 semaines. On définit un calendrier précis dès le départ et on le respecte. Pas de dérives.",
      },
      {
        question:
          "Les entreprises namuroises peuvent-elles bénéficier des chèques-entreprises ?",
        answer:
          "Oui. Les entreprises wallonnes, y compris celles basées à Namur et dans la province, peuvent bénéficier des chèques-entreprises de la Région wallonne pour financer une partie de leur projet digital. P-XEL est un prestataire agréé. On vous accompagne dans la démarche si besoin.",
      },
      {
        question:
          "Quelle différence entre P-XEL et une agence web classique à Namur ?",
        answer:
          "Chez P-XEL, vous travaillez directement avec le fondateur. Pas de junior, pas de sous-traitance, pas de couches intermédiaires. On conçoit et on livre le produit complet. Le résultat : plus de qualité, moins de overhead, des délais tenus. Vous payez pour le produit, pas pour la structure.",
      },
      {
        question:
          "Quels types d'entreprises namuroises font appel à P-XEL ?",
        answer:
          "Startups issues des incubateurs wallons, PME qui veulent un site performant, institutions régionales qui modernisent leurs outils digitaux, entreprises établies qui lancent un nouveau produit ou service en ligne. On travaille avec toute structure qui a besoin d'un partenaire digital senior et réactif.",
      },
    ],
    namurOtherCities: {
      label: "On intervient aussi à",
      text: "Liège, Bruxelles, Luxembourg et partout en Belgique en remote. Notre base est à Liège, notre rayon d'action est européen.",
    },
    namurCta: {
      heading: "Un projet digital à Namur ?",
      subtext:
        "On s'appelle ou on se retrouve à Namur. 30 minutes, sans engagement.",
    },
  },
  en: {
    namurIntro: {
      label: "Namur",
      heading: "A product studio for Namur. Without the agency overhead.",
      subtext:
        "P-XEL is a product studio based in Liege that works with Namur-based businesses. Websites, applications, MVPs, branding. One senior point of contact, from strategy to deployment. Studio pricing, not big agency rates.",
    },
    namurServices: {
      label: "What we build for Namur",
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
          body: "Logo, art direction, visual systems. Brands built to stand out in Wallonia's growing tech ecosystem.",
        },
        {
          title: "AI Studio",
          body: "AI integration into your products and workflows. Automation, content generation, intelligent tools. We integrate AI where it creates real value.",
        },
      ],
    },
    namurWhy: {
      label: "Why us",
      heading: "Not another Namur agency. A product studio that ships.",
      points: [
        {
          title: "One senior point of contact.",
          body: "No junior account manager acting as a buffer. The founder takes the brief, designs the product, oversees every step. 16 years of expertise on every project. You talk to the person doing the work.",
        },
        {
          title: "We design and we ship.",
          body: "Many providers deliver Figma mockups and leave you to find a developer. At P-XEL, we go from design to deployment. You get a working product, not a presentation.",
        },
        {
          title: "Studio pricing, not big agency rates.",
          body: "No prestige offices, no middle layers, no overhead. The budget goes into your product, not our structure. You get premium agency quality at studio pricing.",
        },
        {
          title: "Based in Liege, 45 minutes from Namur.",
          body: "Our studio is in Liege, 45 minutes from Namur. We travel for briefings, workshops and key presentations. The rest happens remotely, like most of your current projects.",
        },
      ],
    },
    namurContext: {
      label: "Namur and us",
      heading: "A Walloon capital undergoing digital transformation.",
      paragraphs: [
        "Namur is the capital of Wallonia and a strategic hub for regional institutions, Walloon SMEs and a growing tech ecosystem. The Provincial Economic Bureau, TRAKK and local incubators create fertile ground for digital projects.",
        "P-XEL offers a clear alternative to large structures: a senior product studio, no overhead, that delivers complete digital products. We work with startups emerging from the Walloon ecosystem, SMEs that want a website that performs, regional institutions modernizing their tools.",
        "Whether you're in central Namur, Jambes, Erpent or elsewhere in the province, the format is the same: one point of contact, concrete deliverables, a product in production. No slides, no committees. Work.",
      ],
    },
    namurProjects: {
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
    namurProcess: {
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
          body: "30 minutes to understand your goals, constraints and expectations. We can meet in Namur if needed.",
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
    namurFaq: [
      {
        question: "How much does a professional website cost in Namur?",
        answer:
          "Every project is quoted on a custom basis. The budget depends on the type of project, complexity and your goals. We provide a free, detailed estimate after an initial conversation. Our studio rates are significantly lower than those of large agencies, at equivalent quality.",
      },
      {
        question:
          "How do you work with Namur clients if you're based in Liege?",
        answer:
          "Liege and Namur are 45 minutes apart. We travel to Namur for briefings, workshops and key presentations. The rest happens remotely, via video calls and collaborative tools. Most of our clients prefer this hybrid format, more efficient than weekly in-person meetings.",
      },
      {
        question: "What is the timeline to create a website in Namur?",
        answer:
          "Landing page: 1 week. Corporate site: 1 to 2 weeks. Web application: 4 weeks. We define a precise schedule from the start and we stick to it. No drift.",
      },
      {
        question:
          "Can Namur-based companies use the cheques-entreprises program?",
        answer:
          "Yes. Walloon-based companies, including those in Namur and the province, can use the Walloon Region's cheques-entreprises to fund part of their digital project. P-XEL is an approved provider. We guide you through the process if needed.",
      },
      {
        question:
          "What's the difference between P-XEL and a traditional web agency in Namur?",
        answer:
          "At P-XEL, you work directly with the founder. No juniors, no outsourcing, no middle layers. We design and deliver the complete product. The result: more quality, less overhead, deadlines met. You pay for the product, not the structure.",
      },
      {
        question:
          "What types of Namur-based businesses work with P-XEL?",
        answer:
          "Startups from Walloon incubators, SMEs looking for a high-performing website, regional institutions modernizing their digital tools, established companies launching a new product or online service. We work with any organization that needs a senior, responsive digital partner.",
      },
    ],
    namurOtherCities: {
      label: "We also work in",
      text: "Liege, Brussels, Luxembourg and anywhere in Belgium remotely. Our base is in Liege, our reach is European.",
    },
    namurCta: {
      heading: "A digital project in Namur?",
      subtext:
        "Let's hop on a call or meet in Namur. 30 minutes, no commitment.",
    },
  },
} as const;

export function getNamurContent(locale: Locale) {
  return content[locale];
}

// Backward compatibility
export const namurIntro = content.fr.namurIntro;
export const namurServices = content.fr.namurServices;
export const namurWhy = content.fr.namurWhy;
export const namurContext = content.fr.namurContext;
export const namurProjects = content.fr.namurProjects;
export const namurProcess = content.fr.namurProcess;
export const namurFaq = content.fr.namurFaq;
export const namurOtherCities = content.fr.namurOtherCities;
export const namurCta = content.fr.namurCta;
