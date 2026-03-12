import type { Locale } from "@/lib/i18n/config";

const content = {
  fr: {
    liegeIntro: {
      label: "Liège",
      heading: "Votre studio digital. À Liège.",
      subtext:
        "P-XEL est un studio produit basé à Liège. On conçoit, construit et livre des produits digitaux premium. Sites web, applications, MVP, branding. Un seul interlocuteur, de la stratégie au déploiement.",
    },
    liegeServices: {
      label: "Ce qu'on construit à Liège",
      heading:
        "Tout ce qu'il faut pour lancer et faire grandir un produit digital.",
      items: [
        {
          title: "Sites web et landing pages",
          body: "Sites vitrines, e-commerce, landing pages. Conçus pour le SEO, la performance et la génération de leads. Chaque site est construit sur mesure avec Next.js.",
          href: "/services/creation-site-web/",
        },
        {
          title: "Applications web et MVP",
          body: "Applications web, plateformes SaaS, outils métier, MVPs. De l'idée au produit déployé. BillyCheck et ChairSplit : deux SaaS conçus et livrés par notre studio.",
          href: "/services/application-web-mvp/",
        },
        {
          title: "Design d'interface (UX/UI)",
          body: "UX research, UI design, design systems, prototypage. Des interfaces pensées pour l'usage, pas pour la décoration.",
        },
        {
          title: "Identité de marque",
          body: "Logo, direction artistique, systèmes visuels. Des marques construites pour durer et pour scaler.",
        },
      ],
    },
    liegeWhy: {
      label: "Pourquoi nous",
      heading: "Pas une agence de plus. Un studio produit basé ici.",
      points: [
        {
          title: "Basé à Liège. Vraiment.",
          body: "On n'est pas une agence bruxelloise qui couvre Liège sur le papier. Notre studio est ici. On connaît l'écosystème, les acteurs, le terrain. On se rencontre quand vous voulez.",
        },
        {
          title: "Un seul interlocuteur senior.",
          body: "Pas de compte manager junior. Pas de sous-traitance à l'autre bout du monde. Le fondateur prend le brief, conçoit le produit, supervise chaque étape. 16 ans d'expertise sur chaque projet.",
        },
        {
          title: "On conçoit et on livre.",
          body: "La plupart des studios s'arrêtent à la maquette Figma. On va jusqu'au déploiement. Design, code, mise en production. Vous recevez un produit fonctionnel, pas une présentation.",
        },
        {
          title: "Des tarifs de studio, pas d'agence.",
          body: "Pas de locaux prestige, pas de couches intermédiaires, pas d'overhead inutile. Le budget va dans le produit, pas dans la structure.",
        },
      ],
    },
    liegeContext: {
      label: "Liège et nous",
      heading: "Un écosystème qu'on connaît de l'intérieur.",
      paragraphs: [
        "Liège se transforme. L'écosystème tech grandit, les startups émergent, les PME se digitalisent. P-XEL fait partie de ce mouvement depuis plus d'une décennie.",
        "On travaille avec des startups accompagnées par VentureLab et Leansquare. On conçoit des outils pour des PME soutenues par le SPI et Noshaq. On comprend les enjeux des entreprises liégeoises parce qu'on les vit.",
        "Que vous soyez un fondateur qui sort de HEC Liège avec un MVP à construire, une PME de la Province qui a besoin d'un site performant, ou une structure établie qui veut moderniser ses outils digitaux, on a le bon format pour votre projet.",
      ],
    },
    liegeProjects: {
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
    liegeProcess: {
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
          body: "30 minutes pour comprendre vos objectifs, vos contraintes et vos attentes. On se rencontre à Liège si vous préférez.",
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
    liegeFaq: [
      {
        question: "Combien coûte un site web professionnel à Liège ?",
        answer:
          "Chaque projet est chiffré sur mesure. Le budget dépend du type de projet, de la complexité et de vos objectifs. On fournit une estimation gratuite et détaillée après un premier échange. Pas de surprise, pas d'engagement.",
      },
      {
        question: "P-XEL travaille-t-il avec des startups liégeoises ?",
        answer:
          "Oui. On a l'habitude de travailler avec des startups en phase de lancement : MVPs, prototypes, premières versions de produits SaaS. On comprend les contraintes de budget et de vitesse. Si vous êtes accompagné par VentureLab, Leansquare ou un autre accélérateur, on adapte notre approche à votre stade de développement.",
      },
      {
        question: "Peut-on se rencontrer en personne à Liège ?",
        answer:
          "Oui. On est basés à Liège. On peut se rencontrer pour un briefing, un atelier de travail ou une présentation de maquettes. La plupart de nos clients préfèrent un mix : une première rencontre en personne, puis un suivi en remote.",
      },
      {
        question: "Quel est le délai pour créer un site web à Liège ?",
        answer:
          "Landing page : 1 à 2 semaines. Site vitrine : 3 à 6 semaines. Application web : 6 à 12 semaines. On définit un calendrier précis dès le départ et on le respecte.",
      },
      {
        question: "P-XEL peut-il m'aider avec les chèques-entreprises ?",
        answer:
          "Oui. Les chèques-entreprises de la Région wallonne peuvent couvrir une partie significative du coût de votre projet digital. On connaît le dispositif et on vous aide à structurer votre demande.",
      },
      {
        question:
          "Quels types d'entreprises liégeoises font appel à P-XEL ?",
        answer:
          "Startups en phase de lancement, PME qui veulent un site performant, structures établies qui modernisent leurs outils digitaux, indépendants qui ont besoin d'une présence en ligne crédible. On adapte notre approche à la taille et aux objectifs de chaque projet.",
      },
    ],
    liegeOtherCities: {
      label: "On intervient aussi à",
      text: "Bruxelles, Namur, Luxembourg et partout en Belgique en remote. Notre base est à Liège, notre rayon d'action est européen.",
    },
    liegeCta: {
      heading: "Un projet digital à Liège ?",
      subtext:
        "On se retrouve autour d'un café ou on s'appelle. 30 minutes, sans engagement.",
    },
  },
  en: {
    liegeIntro: {
      label: "Liege",
      heading: "Your digital studio. In Liege.",
      subtext:
        "P-XEL is a product studio based in Liege. We design, build and deliver premium digital products. Websites, applications, MVPs, branding. One point of contact, from strategy to deployment.",
    },
    liegeServices: {
      label: "What we build in Liege",
      heading:
        "Everything you need to launch and grow a digital product.",
      items: [
        {
          title: "Websites and landing pages",
          body: "Corporate sites, e-commerce, landing pages. Built for SEO, performance and lead generation. Every site is custom-built with Next.js.",
          href: "/en/services/creation-site-web/",
        },
        {
          title: "Web applications and MVPs",
          body: "Web apps, SaaS platforms, business tools, MVPs. From idea to deployed product. BillyCheck and ChairSplit: two SaaS products designed and shipped by our studio.",
          href: "/en/services/application-web-mvp/",
        },
        {
          title: "Interface design (UX/UI)",
          body: "UX research, UI design, design systems, prototyping. Interfaces built for usability, not decoration.",
        },
        {
          title: "Brand identity",
          body: "Logo, art direction, visual systems. Brands built to last and to scale.",
        },
      ],
    },
    liegeWhy: {
      label: "Why us",
      heading: "Not another agency. A product studio based here.",
      points: [
        {
          title: "Based in Liege. For real.",
          body: "We\u2019re not a Brussels agency covering Liege on paper. Our studio is here. We know the ecosystem, the players, the ground. We meet whenever you want.",
        },
        {
          title: "One senior point of contact.",
          body: "No junior account manager. No outsourcing to the other side of the world. The founder takes the brief, designs the product, oversees every step. 16 years of expertise on every project.",
        },
        {
          title: "We design and we ship.",
          body: "Most studios stop at Figma mockups. We go all the way to deployment. Design, code, production. You get a working product, not a presentation.",
        },
        {
          title: "Studio pricing, not agency pricing.",
          body: "No prestige offices, no middle layers, no unnecessary overhead. The budget goes into the product, not into the structure.",
        },
      ],
    },
    liegeContext: {
      label: "Liege and us",
      heading: "An ecosystem we know from the inside.",
      paragraphs: [
        "Liege is transforming. The tech ecosystem is growing, startups are emerging, SMEs are going digital. P-XEL has been part of this movement for over a decade.",
        "We work with startups supported by VentureLab and Leansquare. We build tools for SMEs backed by SPI and Noshaq. We understand the challenges of Liege-based businesses because we live them.",
        "Whether you\u2019re a founder coming out of HEC Liege with an MVP to build, an SME in the province that needs a high-performing website, or an established organization looking to modernize its digital tools, we have the right format for your project.",
      ],
    },
    liegeProjects: {
      label: "Recent projects",
      heading: "What we\u2019ve built recently.",
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
          body: "B2B platform for Europe\u2019s leading acoustic design company. Information architecture, UX/UI and product configurators.",
          href: "/en/work/greenmood/",
        },
      ],
    },
    liegeProcess: {
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
          body: "30 minutes to understand your goals, constraints and expectations. We can meet in Liege if you prefer.",
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
    liegeFaq: [
      {
        question: "How much does a professional website cost in Liege?",
        answer:
          "Every project is quoted on a custom basis. The budget depends on the type of project, complexity and your goals. We provide a free, detailed estimate after an initial conversation. No surprises, no commitment.",
      },
      {
        question: "Does P-XEL work with Liege-based startups?",
        answer:
          "Yes. We regularly work with early-stage startups: MVPs, prototypes, first versions of SaaS products. We understand budget and speed constraints. If you\u2019re supported by VentureLab, Leansquare or another accelerator, we adapt our approach to your stage of development.",
      },
      {
        question: "Can we meet in person in Liege?",
        answer:
          "Yes. We\u2019re based in Liege. We can meet for a briefing, a working session or a mockup presentation. Most of our clients prefer a mix: an initial in-person meeting, then remote follow-up.",
      },
      {
        question: "What is the timeline to create a website in Liege?",
        answer:
          "Landing page: 1 to 2 weeks. Corporate site: 3 to 6 weeks. Web application: 6 to 12 weeks. We define a precise schedule from the start and we stick to it.",
      },
      {
        question: "Can P-XEL help me with Belgian business vouchers (cheques-entreprises)?",
        answer:
          "Yes. The Walloon Region\u2019s business vouchers can cover a significant portion of your digital project cost. We know the program and help you structure your application.",
      },
      {
        question:
          "What types of Liege-based businesses work with P-XEL?",
        answer:
          "Early-stage startups, SMEs looking for a high-performing website, established organizations modernizing their digital tools, independents who need a credible online presence. We adapt our approach to the size and goals of every project.",
      },
    ],
    liegeOtherCities: {
      label: "We also work in",
      text: "Brussels, Namur, Luxembourg and anywhere in Belgium remotely. Our base is in Liege, our reach is European.",
    },
    liegeCta: {
      heading: "A digital project in Liege?",
      subtext:
        "Let\u2019s meet over coffee or hop on a call. 30 minutes, no commitment.",
    },
  },
} as const;

export function getLiegeContent(locale: Locale) {
  return content[locale];
}

// Backward compatibility
export const liegeIntro = content.fr.liegeIntro;
export const liegeServices = content.fr.liegeServices;
export const liegeWhy = content.fr.liegeWhy;
export const liegeContext = content.fr.liegeContext;
export const liegeProjects = content.fr.liegeProjects;
export const liegeProcess = content.fr.liegeProcess;
export const liegeFaq = content.fr.liegeFaq;
export const liegeOtherCities = content.fr.liegeOtherCities;
export const liegeCta = content.fr.liegeCta;
