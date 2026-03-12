export interface ArticleMeta {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  image: string;
  dateISO: string;
  relatedServices: string[];
  relatedArticles: string[];
}

export const articles: ArticleMeta[] = [
  {
    slug: "combien-coute-un-site-web",
    category: "Budget",
    title: "Combien coûte un site web en 2026 ?",
    excerpt: "Landing page, site vitrine, e-commerce, refonte. Les vrais prix du marché et les variables qui font la différence.",
    readingTime: "7 min",
    image: "/legacy-assets/images/Article-large_Web-design.webp",
    dateISO: "2025-11-20",
    relatedServices: ["creation-site-web", "ux-ui-design"],
    relatedArticles: ["combien-coute-application-web", "refonte-site-web", "agence-web-vs-freelance"],
  },
  {
    slug: "aides-digitalisation-belgique",
    category: "Aides",
    title: "Aides à la digitalisation en Belgique",
    excerpt: "Primes Bruxelles, chèques Wallonie. Les subsides pour financer votre projet digital en 2026.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-Digitalisation.webp",
    dateISO: "2025-11-28",
    relatedServices: ["creation-site-web", "application-web-mvp"],
    relatedArticles: ["combien-coute-un-site-web", "combien-coute-application-web", "agence-web-vs-freelance"],
  },
  {
    slug: "no-code-vs-code",
    category: "Technologie",
    title: "No-code, low-code ou full-code : comment choisir",
    excerpt: "Webflow, Bubble ou sur mesure ? Les critères concrets pour choisir selon votre projet, budget et ambition.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-No-code.webp",
    dateISO: "2025-12-01",
    relatedServices: ["application-web-mvp", "creation-site-web"],
    relatedArticles: ["lancer-mvp-rapidement", "combien-coute-application-web", "ia-creation-produit-digital"],
  },
  {
    slug: "ia-creation-produit-digital",
    category: "IA",
    title: "Comment l'IA accélère la création de votre produit digital",
    excerpt: "Prototypage rapide, génération d'assets, automatisation. Ce que l'IA change concrètement dans la livraison d'un produit.",
    readingTime: "9 min",
    image: "/legacy-assets/images/Articles-AI.webp",
    dateISO: "2025-10-17",
    relatedServices: ["ai-studio", "application-web-mvp"],
    relatedArticles: ["tendances-ux-ui-2026", "lancer-mvp-rapidement", "no-code-vs-code"],
  },
  {
    slug: "tendances-ux-ui-2026",
    category: "UX/UI",
    title: "Tendances UX/UI 2026",
    excerpt: "Interfaces prédictives, IA intégrée, accessibilité universelle, design durable. Les évolutions à anticiper.",
    readingTime: "7 min",
    image: "/legacy-assets/images/Article-large_UI.webp",
    dateISO: "2025-11-02",
    relatedServices: ["ux-ui-design", "ai-studio"],
    relatedArticles: ["ia-creation-produit-digital", "refonte-site-web", "no-code-vs-code"],
  },
  {
    slug: "refonte-site-web",
    category: "Stratégie",
    title: "Refonte de site web : quand et pourquoi refaire son site",
    excerpt: "Les signes qu'il est temps, les erreurs à éviter et la méthode pour une refonte qui booste vos résultats.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Article-large_Web-design.webp",
    dateISO: "2026-01-15",
    relatedServices: ["creation-site-web", "ux-ui-design", "branding-identite"],
    relatedArticles: ["combien-coute-un-site-web", "tendances-ux-ui-2026", "agence-web-vs-freelance"],
  },
  {
    slug: "lancer-mvp-rapidement",
    category: "Produit",
    title: "MVP : comment lancer un produit digital en 4 semaines",
    excerpt: "La méthode pour passer de l'idée au premier produit testable. Cadrage, design, build, lancement.",
    readingTime: "9 min",
    image: "/legacy-assets/images/Articles-No-code.webp",
    dateISO: "2026-02-01",
    relatedServices: ["application-web-mvp", "ux-ui-design", "ai-studio"],
    relatedArticles: ["combien-coute-application-web", "no-code-vs-code", "ia-creation-produit-digital"],
  },
  {
    slug: "agence-web-vs-freelance",
    category: "Stratégie",
    title: "Agence web vs freelance : comment choisir",
    excerpt: "Freelance, agence, studio digital. Forces, limites et critères concrets pour choisir le bon partenaire.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-Digitalisation.webp",
    dateISO: "2026-03-01",
    relatedServices: ["creation-site-web", "application-web-mvp"],
    relatedArticles: ["combien-coute-un-site-web", "aides-digitalisation-belgique", "refonte-site-web"],
  },
  {
    slug: "combien-coute-application-web",
    category: "Budget",
    title: "Combien coûte une application web en 2026 ?",
    excerpt: "MVP, SaaS, plateforme métier. Les fourchettes de prix réalistes et les facteurs qui font varier le budget.",
    readingTime: "9 min",
    image: "/legacy-assets/images/Articles-AI.webp",
    dateISO: "2026-03-01",
    relatedServices: ["application-web-mvp", "ai-studio"],
    relatedArticles: ["combien-coute-un-site-web", "lancer-mvp-rapidement", "aides-digitalisation-belgique"],
  },
];

/** Return curated related articles for a given slug */
export function getRelatedArticles(currentSlug: string, count = 3) {
  const current = articles.find((a) => a.slug === currentSlug);
  if (!current) {
    return articles.slice(0, count).map(toRelated);
  }

  const curated = current.relatedArticles
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as ArticleMeta[];

  if (curated.length >= count) {
    return curated.slice(0, count).map(toRelated);
  }

  const remaining = articles.filter(
    (a) => a.slug !== currentSlug && !current.relatedArticles.includes(a.slug)
  );
  return [...curated, ...remaining].slice(0, count).map(toRelated);
}

/** Return related service slugs for a given article */
export function getRelatedServices(articleSlug: string) {
  const current = articles.find((a) => a.slug === articleSlug);
  return current?.relatedServices ?? [];
}

/** Return articles related to a given service slug */
export function getArticlesForService(serviceSlug: string, count = 3) {
  return articles
    .filter((a) => a.relatedServices.includes(serviceSlug))
    .slice(0, count)
    .map(toRelated);
}

function toRelated(a: ArticleMeta) {
  return {
    slug: a.slug,
    title: a.title,
    category: a.category,
    readingTime: a.readingTime,
  };
}
