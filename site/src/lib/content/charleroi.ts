import type { Locale } from "@/lib/i18n/config";

const content = {
  fr: {
    charleroiIntro: {
      label: "Charleroi",
      heading: "Un studio produit pour Charleroi. Sans le overhead d'agence.",
      subtext:
        "P-XEL est un studio produit basé à Liège qui accompagne les entreprises de Charleroi. Sites web, applications, MVP, branding. Un interlocuteur senior, de la stratégie au déploiement. Des tarifs de studio, pas de grande agence.",
    },
    charleroiServices: {
      label: "Ce qu'on construit pour Charleroi",
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
          body: "Logo, direction artistique, systèmes visuels. Des marques construites pour se démarquer dans un écosystème carolo en pleine mutation.",
        },
        {
          title: "AI Studio",
          body: "Intégration d'IA dans vos produits et workflows. Automatisation, génération de contenu, outils intelligents. On intègre l'IA là où elle crée de la valeur réelle.",
        },
      ],
    },
    charleroiWhy: {
      label: "Pourquoi nous",
      heading: "Pas une agence de plus. Un studio produit qui livre.",
      points: [
        {
          title: "Un seul interlocuteur senior.",
          body: "Pas de compte manager junior qui fait tampon. Le fondateur prend le brief, conçoit le produit, supervise chaque étape. 16 ans d'expertise sur chaque projet. Vous parlez à celui qui fait.",
        },
        {
          title: "On conçoit et on livre.",
          body: "Beaucoup d'agences livrent des maquettes Figma et vous laissent trouver un développeur. Chez P-XEL, on va du design au déploiement. Vous recevez un produit fonctionnel, pas une présentation.",
        },
        {
          title: "Des tarifs de studio, pas de grande agence.",
          body: "Pas de bureaux prestige, pas de couches intermédiaires, pas de overhead. Le budget va dans votre produit, pas dans notre structure. Vous obtenez la qualité d'une agence premium au prix d'un studio.",
        },
        {
          title: "Basés à Liège, disponibles à Charleroi.",
          body: "Notre studio est à Liège, à environ 1h de Charleroi. On se déplace pour les briefings, les ateliers et les présentations clés. Le reste se fait en remote, comme la plupart de vos projets actuels.",
        },
      ],
    },
    charleroiContext: {
      label: "Charleroi et nous",
      heading: "Une ville en transformation. On comprend le terrain.",
      paragraphs: [
        "Charleroi est la deuxième ville de Wallonie et vit une transformation digitale accélérée. Avec des pôles comme A6K et Catch, la ville attire startups tech, PME innovantes et organisations qui modernisent leurs outils. La demande en produits digitaux de qualité est réelle, mais l'offre locale reste limitée.",
        "P-XEL propose une alternative claire : un studio produit senior, sans overhead, qui livre des produits digitaux complets. On travaille avec des PME industrielles qui digitalisent leurs processus, des startups tech qui ont besoin d'un MVP solide, des organisations en transformation digitale qui veulent un partenaire agile.",
        "Charleroi bénéficie aussi de sa proximité avec Bruxelles, ce qui ouvre l'accès à un bassin de clients et de talents élargi. Que vous soyez dans le centre-ville, à Marchienne-au-Pont ou dans le Biopôle, le format est le même : un interlocuteur unique, des livrables concrets, un produit en production.",
      ],
    },
    charleroiProjects: {
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
    charleroiProcess: {
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
          body: "30 minutes pour comprendre vos objectifs, vos contraintes et vos attentes. On se déplace à Charleroi si nécessaire.",
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
    charleroiFaq: [
      {
        question: "Combien coûte un site web professionnel à Charleroi ?",
        answer:
          "Chaque projet est chiffré sur mesure. Le budget dépend du type de projet, de la complexité et de vos objectifs. On fournit une estimation gratuite et détaillée après un premier échange. Nos tarifs de studio sont significativement inférieurs à ceux des grandes agences, à qualité équivalente.",
      },
      {
        question:
          "Comment travaillez-vous avec des clients de Charleroi si vous êtes à Liège ?",
        answer:
          "On se déplace à Charleroi pour les briefings, ateliers et présentations clés. Le reste se fait en remote, en visio et via des outils collaboratifs. Liège est à environ 1h de Charleroi par autoroute. La plupart de nos clients préfèrent ce format hybride, plus efficace que des réunions en présentiel chaque semaine.",
      },
      {
        question: "Quel est le délai pour créer un site web à Charleroi ?",
        answer:
          "Landing page : 1 semaine. Site vitrine : 1 à 2 semaines. Application web : 4 semaines. On définit un calendrier précis dès le départ et on le respecte. Pas de dérives.",
      },
      {
        question:
          "Quelle différence entre P-XEL et une agence web classique ?",
        answer:
          "Chez P-XEL, vous travaillez directement avec le fondateur. Pas de junior, pas de sous-traitance, pas de couches intermédiaires. On conçoit et on livre le produit complet. Le résultat : plus de qualité, moins de overhead, des délais tenus. Vous payez pour le produit, pas pour la structure.",
      },
      {
        question:
          "Les entreprises de Charleroi peuvent-elles bénéficier des chèques-entreprises ?",
        answer:
          "Oui. Charleroi est en Région wallonne. Les chèques-entreprises de la Wallonie permettent de financer une partie de vos projets digitaux : conseil, création de site web, stratégie numérique. P-XEL est un prestataire qualifié. On vous accompagne dans la démarche pour maximiser votre financement.",
      },
      {
        question:
          "Quels types d'entreprises de Charleroi font appel à P-XEL ?",
        answer:
          "PME industrielles qui digitalisent leurs processus, startups tech issues d'incubateurs comme A6K, organisations en transformation digitale, entreprises qui veulent un site performant ou un MVP solide. On travaille aussi avec des structures qui profitent de la proximité Charleroi-Bruxelles pour adresser les deux marchés.",
      },
    ],
    charleroiOtherCities: {
      label: "On intervient aussi à",
      text: "Liège, Bruxelles, Namur, Luxembourg et partout en Belgique en remote. Notre base est à Liège, notre rayon d'action est européen.",
    },
    charleroiCta: {
      heading: "Un projet digital à Charleroi ?",
      subtext:
        "On s'appelle ou on se retrouve à Charleroi. 30 minutes, sans engagement.",
    },
  },
  en: {
    charleroiIntro: {
      label: "Charleroi",
      heading: "A product studio for Charleroi. Without the agency overhead.",
      subtext:
        "P-XEL is a product studio based in Liege that works with Charleroi-based businesses. Websites, applications, MVPs, branding. One senior point of contact, from strategy to deployment. Studio pricing, not big agency rates.",
    },
    charleroiServices: {
      label: "What we build for Charleroi",
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
          body: "Logo, art direction, visual systems. Brands built to stand out in Charleroi's rapidly evolving ecosystem.",
        },
        {
          title: "AI Studio",
          body: "AI integration into your products and workflows. Automation, content generation, intelligent tools. We integrate AI where it creates real value.",
        },
      ],
    },
    charleroiWhy: {
      label: "Why us",
      heading: "Not another agency. A product studio that ships.",
      points: [
        {
          title: "One senior point of contact.",
          body: "No junior account manager acting as a buffer. The founder takes the brief, designs the product, oversees every step. 16 years of expertise on every project. You talk to the person doing the work.",
        },
        {
          title: "We design and we ship.",
          body: "Many agencies deliver Figma mockups and leave you to find a developer. At P-XEL, we go from design to deployment. You get a working product, not a presentation.",
        },
        {
          title: "Studio pricing, not big agency rates.",
          body: "No prestige offices, no middle layers, no overhead. The budget goes into your product, not our structure. You get premium agency quality at studio pricing.",
        },
        {
          title: "Based in Liege, available in Charleroi.",
          body: "Our studio is in Liege, about 1 hour from Charleroi. We travel for briefings, workshops and key presentations. The rest happens remotely, like most of your current projects.",
        },
      ],
    },
    charleroiContext: {
      label: "Charleroi and us",
      heading: "A city in transformation. We understand the ground.",
      paragraphs: [
        "Charleroi is Wallonia's second largest city and is undergoing an accelerated digital transformation. With hubs like A6K and Catch, the city attracts tech startups, innovative SMEs and organizations modernizing their tools. The demand for quality digital products is real, but the local supply remains limited.",
        "P-XEL offers a clear alternative: a senior product studio, no overhead, that delivers complete digital products. We work with industrial SMEs digitizing their processes, tech startups that need a solid MVP, organizations in digital transformation looking for an agile partner.",
        "Charleroi also benefits from its proximity to Brussels, opening access to a wider pool of clients and talent. Whether you're in the city center, Marchienne-au-Pont or the Biopole, the format is the same: one point of contact, concrete deliverables, a product in production.",
      ],
    },
    charleroiProjects: {
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
    charleroiProcess: {
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
          body: "30 minutes to understand your goals, constraints and expectations. We can meet in Charleroi if needed.",
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
    charleroiFaq: [
      {
        question: "How much does a professional website cost in Charleroi?",
        answer:
          "Every project is quoted on a custom basis. The budget depends on the type of project, complexity and your goals. We provide a free, detailed estimate after an initial conversation. Our studio rates are significantly lower than those of large agencies, at equivalent quality.",
      },
      {
        question:
          "How do you work with Charleroi clients if you're based in Liege?",
        answer:
          "We travel to Charleroi for briefings, workshops and key presentations. The rest happens remotely, via video calls and collaborative tools. Liege is about 1 hour from Charleroi by motorway. Most of our clients prefer this hybrid format, more efficient than weekly in-person meetings.",
      },
      {
        question: "What is the timeline to create a website in Charleroi?",
        answer:
          "Landing page: 1 week. Corporate site: 1 to 2 weeks. Web application: 4 weeks. We define a precise schedule from the start and we stick to it. No drift.",
      },
      {
        question:
          "What's the difference between P-XEL and a traditional web agency?",
        answer:
          "At P-XEL, you work directly with the founder. No juniors, no outsourcing, no middle layers. We design and deliver the complete product. The result: more quality, less overhead, deadlines met. You pay for the product, not the structure.",
      },
      {
        question:
          "Can Charleroi-based companies use the cheques-entreprises program?",
        answer:
          "Yes. Charleroi is in the Walloon Region. The Walloon cheques-entreprises allow you to fund part of your digital projects: consulting, website creation, digital strategy. P-XEL is a qualified provider. We guide you through the process to maximize your funding.",
      },
      {
        question:
          "What types of Charleroi-based businesses work with P-XEL?",
        answer:
          "Industrial SMEs digitizing their processes, tech startups from incubators like A6K, organizations in digital transformation, companies that want a high-performing website or a solid MVP. We also work with businesses leveraging the Charleroi-Brussels proximity to address both markets.",
      },
    ],
    charleroiOtherCities: {
      label: "We also work in",
      text: "Liege, Brussels, Namur, Luxembourg and anywhere in Belgium remotely. Our base is in Liege, our reach is European.",
    },
    charleroiCta: {
      heading: "A digital project in Charleroi?",
      subtext:
        "Let's hop on a call or meet in Charleroi. 30 minutes, no commitment.",
    },
  },
} as const;

export function getCharleroiContent(locale: Locale) {
  return content[locale];
}

// Backward compatibility
export const charleroiIntro = content.fr.charleroiIntro;
export const charleroiServices = content.fr.charleroiServices;
export const charleroiWhy = content.fr.charleroiWhy;
export const charleroiContext = content.fr.charleroiContext;
export const charleroiProjects = content.fr.charleroiProjects;
export const charleroiProcess = content.fr.charleroiProcess;
export const charleroiFaq = content.fr.charleroiFaq;
export const charleroiOtherCities = content.fr.charleroiOtherCities;
export const charleroiCta = content.fr.charleroiCta;
