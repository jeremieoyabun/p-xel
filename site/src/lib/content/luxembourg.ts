import type { Locale } from "@/lib/i18n/config";

const content = {
  fr: {
    luxembourgIntro: {
      label: "Luxembourg",
      heading: "Votre studio digital. Pour le Luxembourg.",
      subtext:
        "P-XEL est un studio produit basé à Liège, à 1h30 du Luxembourg. On conçoit, construit et livre des produits digitaux premium pour le marché luxembourgeois. Sites web, applications, MVP, branding. Un seul interlocuteur senior, de la stratégie au déploiement.",
    },
    luxembourgServices: {
      label: "Ce qu'on construit pour le Luxembourg",
      heading:
        "Des produits digitaux taillés pour un marché exigeant.",
      items: [
        {
          title: "Sites web et landing pages",
          body: "Sites corporate, multilingues, landing pages. Conçus pour le SEO, la performance et la conversion. Chaque site est construit sur mesure avec Next.js, prêt pour un marché FR/EN/DE.",
          href: "/services/creation-site-web/",
        },
        {
          title: "Applications web et MVP",
          body: "Applications web, plateformes SaaS, outils métier, MVPs. Fintech, regtech, outils internes. BillyCheck et ChairSplit : deux SaaS conçus et livrés par notre studio.",
          href: "/services/application-web-mvp/",
        },
        {
          title: "Design d'interface (UX/UI)",
          body: "UX research, UI design, design systems, prototypage. Des interfaces pensées pour des utilisateurs exigeants dans un environnement international.",
          href: "/services/design-ux-ui/",
        },
        {
          title: "Identité de marque",
          body: "Logo, direction artistique, systèmes visuels. Des marques qui tiennent la route face aux standards du marché luxembourgeois.",
          href: "/services/branding/",
        },
      ],
    },
    luxembourgWhy: {
      label: "Pourquoi nous",
      heading: "La qualité d'un studio belge. La proximité du Luxembourg.",
      points: [
        {
          title: "À 1h30 de Luxembourg-Ville.",
          body: "On n'est pas à l'autre bout de l'Europe. Liège-Luxembourg, c'est un trajet court. On se déplace pour les réunions clés, on travaille en remote le reste du temps. La flexibilité transfrontalière sans les compromis.",
        },
        {
          title: "Un seul interlocuteur senior.",
          body: "Pas de compte manager junior. Pas de sous-traitance offshore. Le fondateur prend le brief, conçoit le produit, supervise chaque étape. 16 ans d'expertise sur chaque projet.",
        },
        {
          title: "On conçoit et on livre.",
          body: "La plupart des agences s'arrêtent à la maquette Figma. On va jusqu'au déploiement. Design, code, mise en production. Vous recevez un produit fonctionnel, pas une présentation.",
        },
        {
          title: "Tarifs belges, qualité premium.",
          body: "Le positionnement tarifaire d'un studio belge avec l'exigence de qualité du marché luxembourgeois. Le budget va dans le produit, pas dans les locaux prestige.",
        },
      ],
    },
    luxembourgContext: {
      label: "Luxembourg et nous",
      heading: "Un marché qu'on comprend.",
      paragraphs: [
        "Le Luxembourg est un marché à part. Pouvoir d'achat élevé, standards internationaux, écosystème fintech et regtech en pleine croissance, institutions européennes. Les entreprises luxembourgeoises attendent de la qualité, de la fiabilité et de la rapidité d'exécution.",
        "On travaille avec des acteurs qui opèrent dans cet environnement : startups fintech, sociétés de gestion, prestataires B2B, structures liées aux institutions européennes. On sait construire des produits multilingues, conformes et performants.",
        "Notre base à Liège nous donne un avantage concret : la proximité géographique du Luxembourg avec le positionnement tarifaire de la Belgique. Pas de compromis sur la qualité, une structure légère et réactive.",
      ],
    },
    luxembourgProjects: {
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
    luxembourgProcess: {
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
          body: "30 minutes pour comprendre vos objectifs, vos contraintes et vos attentes. On se déplace au Luxembourg si le projet le justifie.",
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
    luxembourgFaq: [
      {
        question: "Comment fonctionne la collaboration transfrontalière Belgique-Luxembourg ?",
        answer:
          "On est basés à Liège, à 1h30 du Luxembourg. On se déplace pour les réunions clés (kick-off, présentations, ateliers). Le reste du suivi se fait en remote avec des outils partagés. La facturation est en euros, sans friction administrative.",
      },
      {
        question: "Quels sont vos tarifs par rapport aux agences luxembourgeoises ?",
        answer:
          "Notre positionnement est celui d'un studio belge : compétitif par rapport aux tarifs pratiqués au Luxembourg, sans compromis sur la qualité. Chaque projet est chiffré sur mesure après un premier échange. On fournit une estimation détaillée et transparente.",
      },
      {
        question: "Peut-on se rencontrer en personne au Luxembourg ?",
        answer:
          "Oui. On se déplace au Luxembourg pour les étapes clés du projet : briefing initial, présentations de maquettes, ateliers de travail. La plupart de nos clients transfrontaliers préfèrent un mix : rencontres en personne pour les moments décisifs, suivi en remote entre les jalons.",
      },
      {
        question: "Quel est le délai pour créer un site web ou une application ?",
        answer:
          "Landing page : 1 semaine. Site corporate multilingue : 2 à 4 semaines. Application web : 4 à 8 semaines. On définit un calendrier précis dès le départ et on le respecte.",
      },
      {
        question: "Pouvez-vous créer des sites multilingues pour le marché luxembourgeois ?",
        answer:
          "Oui. On construit des sites et applications multilingues (FR, EN, DE) dès le départ. L'architecture technique est pensée pour le SEO multilingue avec des URLs localisées, du contenu adapté par langue et une gestion propre des hreflang.",
      },
      {
        question: "Quels types d'entreprises luxembourgeoises travaillent avec P-XEL ?",
        answer:
          "Startups fintech et regtech, sociétés de services B2B, prestataires liés aux institutions européennes, PME en croissance qui veulent un produit digital à la hauteur de leur marché. On adapte notre approche à la taille et aux objectifs de chaque projet.",
      },
    ],
    luxembourgOtherCities: {
      label: "On intervient aussi à",
      text: "Liège, Bruxelles, Namur et partout en Belgique en remote. Notre base est à Liège, notre rayon d'action couvre la Grande Région.",
    },
    luxembourgCta: {
      heading: "Un projet digital au Luxembourg ?",
      subtext:
        "On s'appelle ou on se retrouve à Luxembourg-Ville. 30 minutes, sans engagement.",
    },
  },
  en: {
    luxembourgIntro: {
      label: "Luxembourg",
      heading: "Your digital studio. For Luxembourg.",
      subtext:
        "P-XEL is a product studio based in Liege, Belgium, 1.5 hours from Luxembourg. We design, build and deliver premium digital products for the Luxembourg market. Websites, applications, MVPs, branding. One senior point of contact, from strategy to deployment.",
    },
    luxembourgServices: {
      label: "What we build for Luxembourg",
      heading:
        "Digital products built for a demanding market.",
      items: [
        {
          title: "Websites and landing pages",
          body: "Corporate sites, multilingual, landing pages. Built for SEO, performance and conversion. Every site is custom-built with Next.js, ready for an FR/EN/DE market.",
          href: "/en/services/creation-site-web/",
        },
        {
          title: "Web applications and MVPs",
          body: "Web apps, SaaS platforms, business tools, MVPs. Fintech, regtech, internal tools. BillyCheck and ChairSplit: two SaaS products designed and shipped by our studio.",
          href: "/en/services/application-web-mvp/",
        },
        {
          title: "Interface design (UX/UI)",
          body: "UX research, UI design, design systems, prototyping. Interfaces built for demanding users in an international environment.",
          href: "/en/services/design-ux-ui/",
        },
        {
          title: "Brand identity",
          body: "Logo, art direction, visual systems. Brands that hold up against Luxembourg market standards.",
          href: "/en/services/branding/",
        },
      ],
    },
    luxembourgWhy: {
      label: "Why us",
      heading: "Belgian studio quality. Luxembourg proximity.",
      points: [
        {
          title: "1.5 hours from Luxembourg City.",
          body: "We are not on the other side of Europe. Liege to Luxembourg is a short trip. We travel for key meetings and work remotely the rest of the time. Cross-border flexibility without compromise.",
        },
        {
          title: "One senior point of contact.",
          body: "No junior account manager. No offshore outsourcing. The founder takes the brief, designs the product, oversees every step. 16 years of expertise on every project.",
        },
        {
          title: "We design and we ship.",
          body: "Most agencies stop at Figma mockups. We go all the way to deployment. Design, code, production. You get a working product, not a presentation.",
        },
        {
          title: "Belgian rates, premium quality.",
          body: "The pricing of a Belgian studio with the quality standards of the Luxembourg market. The budget goes into the product, not into prestige offices.",
        },
      ],
    },
    luxembourgContext: {
      label: "Luxembourg and us",
      heading: "A market we understand.",
      paragraphs: [
        "Luxembourg is a unique market. High purchasing power, international standards, a thriving fintech and regtech ecosystem, EU institutions. Luxembourg businesses expect quality, reliability and fast execution.",
        "We work with players who operate in this environment: fintech startups, management companies, B2B service providers, organizations connected to EU institutions. We know how to build multilingual, compliant and high-performing products.",
        "Our base in Liege gives us a concrete advantage: geographic proximity to Luxembourg with Belgian pricing. No compromise on quality, a lean and responsive structure.",
      ],
    },
    luxembourgProjects: {
      label: "Recent projects",
      heading: "What we have built recently.",
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
    luxembourgProcess: {
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
          body: "30 minutes to understand your goals, constraints and expectations. We travel to Luxembourg if the project calls for it.",
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
    luxembourgFaq: [
      {
        question: "How does the Belgium-Luxembourg cross-border collaboration work?",
        answer:
          "We are based in Liege, 1.5 hours from Luxembourg. We travel for key meetings (kick-off, presentations, workshops). The rest of the follow-up happens remotely with shared tools. Invoicing is in euros, no administrative friction.",
      },
      {
        question: "How do your rates compare to Luxembourg agencies?",
        answer:
          "We are positioned as a Belgian studio: competitive compared to Luxembourg rates, with no compromise on quality. Every project is quoted on a custom basis after an initial conversation. We provide a detailed and transparent estimate.",
      },
      {
        question: "Can we meet in person in Luxembourg?",
        answer:
          "Yes. We travel to Luxembourg for key project milestones: initial briefing, mockup presentations, working sessions. Most of our cross-border clients prefer a mix: in-person meetings for decisive moments, remote follow-up between milestones.",
      },
      {
        question: "What is the timeline to create a website or application?",
        answer:
          "Landing page: 1 week. Multilingual corporate site: 2 to 4 weeks. Web application: 4 to 8 weeks. We define a precise schedule from the start and we stick to it.",
      },
      {
        question: "Can you build multilingual sites for the Luxembourg market?",
        answer:
          "Yes. We build multilingual websites and applications (FR, EN, DE) from the ground up. The technical architecture is designed for multilingual SEO with localized URLs, language-adapted content and proper hreflang management.",
      },
      {
        question: "What types of Luxembourg businesses work with P-XEL?",
        answer:
          "Fintech and regtech startups, B2B service companies, providers connected to EU institutions, growing SMEs that need a digital product on par with their market. We adapt our approach to the size and goals of every project.",
      },
    ],
    luxembourgOtherCities: {
      label: "We also work in",
      text: "Liege, Brussels, Namur and anywhere in Belgium remotely. Our base is in Liege, our reach covers the Greater Region.",
    },
    luxembourgCta: {
      heading: "A digital project in Luxembourg?",
      subtext:
        "Let's hop on a call or meet in Luxembourg City. 30 minutes, no commitment.",
    },
  },
} as const;

export function getLuxembourgContent(locale: Locale) {
  return content[locale];
}

// Backward compatibility
export const luxembourgIntro = content.fr.luxembourgIntro;
export const luxembourgServices = content.fr.luxembourgServices;
export const luxembourgWhy = content.fr.luxembourgWhy;
export const luxembourgContext = content.fr.luxembourgContext;
export const luxembourgProjects = content.fr.luxembourgProjects;
export const luxembourgProcess = content.fr.luxembourgProcess;
export const luxembourgFaq = content.fr.luxembourgFaq;
export const luxembourgOtherCities = content.fr.luxembourgOtherCities;
export const luxembourgCta = content.fr.luxembourgCta;
