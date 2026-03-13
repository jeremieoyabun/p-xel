export interface ArticleMeta {
  slug: string;
  category: { fr: string; en: string };
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  readingTime: string;
  image: string;
  dateISO: string;
  relatedServices: string[];
  relatedArticles: string[];
}

export type Locale = "fr" | "en";

export const articles: ArticleMeta[] = [
  {
    slug: "combien-coute-un-site-web",
    category: { fr: "Budget", en: "Budget" },
    title: { fr: "Combien coûte un site web en 2026 ?", en: "How much does a website cost in 2026?" },
    excerpt: { fr: "Landing page, site vitrine, e-commerce, refonte. Les vrais prix du marché et les variables qui font la différence.", en: "Landing page, showcase site, e-commerce, redesign. Real market prices and the variables that make the difference." },
    readingTime: "7 min",
    image: "/legacy-assets/images/Article-large_Web-design.webp",
    dateISO: "2025-11-20",
    relatedServices: ["creation-site-web", "ux-ui-design"],
    relatedArticles: ["combien-coute-application-web", "refonte-site-web", "agence-web-vs-freelance"],
  },
  {
    slug: "aides-digitalisation-belgique",
    category: { fr: "Aides", en: "Grants" },
    title: { fr: "Aides à la digitalisation en Belgique", en: "Digitalization grants in Belgium" },
    excerpt: { fr: "Primes Bruxelles, chèques Wallonie. Les subsides pour financer votre projet digital en 2026.", en: "Brussels premiums, Wallonia vouchers. Subsidies to fund your digital project in 2026." },
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-Digitalisation.webp",
    dateISO: "2025-11-28",
    relatedServices: ["creation-site-web", "application-web-mvp"],
    relatedArticles: ["combien-coute-un-site-web", "combien-coute-application-web", "agence-web-vs-freelance"],
  },
  {
    slug: "no-code-vs-code",
    category: { fr: "Technologie", en: "Technology" },
    title: { fr: "No-code, low-code ou full-code : comment choisir", en: "No-code, low-code or full-code: how to choose" },
    excerpt: { fr: "Webflow, Bubble ou sur mesure ? Les critères concrets pour choisir selon votre projet, budget et ambition.", en: "Webflow, Bubble or custom-built? Concrete criteria to choose based on your project, budget and ambition." },
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-No-code.webp",
    dateISO: "2025-12-01",
    relatedServices: ["application-web-mvp", "creation-site-web"],
    relatedArticles: ["lancer-mvp-rapidement", "combien-coute-application-web", "ia-creation-produit-digital"],
  },
  {
    slug: "ia-creation-produit-digital",
    category: { fr: "IA", en: "AI" },
    title: { fr: "Comment l'IA accélère la création de votre produit digital", en: "How AI accelerates the creation of your digital product" },
    excerpt: { fr: "Prototypage rapide, génération d'assets, automatisation. Ce que l'IA change concrètement dans la livraison d'un produit.", en: "Rapid prototyping, asset generation, automation. What AI concretely changes in product delivery." },
    readingTime: "9 min",
    image: "/legacy-assets/images/Articles-AI.webp",
    dateISO: "2025-10-17",
    relatedServices: ["ai-studio", "application-web-mvp"],
    relatedArticles: ["tendances-ux-ui-2026", "lancer-mvp-rapidement", "no-code-vs-code"],
  },
  {
    slug: "tendances-ux-ui-2026",
    category: { fr: "UX/UI", en: "UX/UI" },
    title: { fr: "Tendances UX/UI 2026", en: "UX/UI Trends 2026" },
    excerpt: { fr: "Interfaces prédictives, IA intégrée, accessibilité universelle, design durable. Les évolutions à anticiper.", en: "Predictive interfaces, integrated AI, universal accessibility, sustainable design. The evolutions to anticipate." },
    readingTime: "7 min",
    image: "/legacy-assets/images/Article-large_UI.webp",
    dateISO: "2025-11-02",
    relatedServices: ["ux-ui-design", "ai-studio"],
    relatedArticles: ["ia-creation-produit-digital", "refonte-site-web", "no-code-vs-code"],
  },
  {
    slug: "refonte-site-web",
    category: { fr: "Stratégie", en: "Strategy" },
    title: { fr: "Refonte de site web : quand et pourquoi refaire son site", en: "Website redesign: when and why to redo your site" },
    excerpt: { fr: "Les signes qu'il est temps, les erreurs à éviter et la méthode pour une refonte qui booste vos résultats.", en: "The signs it's time, mistakes to avoid and the method for a redesign that boosts your results." },
    readingTime: "8 min",
    image: "/legacy-assets/images/Article_web-rework.png",
    dateISO: "2026-01-15",
    relatedServices: ["creation-site-web", "ux-ui-design", "branding-identite"],
    relatedArticles: ["combien-coute-un-site-web", "tendances-ux-ui-2026", "agence-web-vs-freelance"],
  },
  {
    slug: "lancer-mvp-rapidement",
    category: { fr: "Produit", en: "Product" },
    title: { fr: "MVP : comment lancer un produit digital en 4 semaines", en: "MVP: how to launch a digital product in 4 weeks" },
    excerpt: { fr: "La méthode pour passer de l'idée au premier produit testable. Cadrage, design, build, lancement.", en: "The method to go from idea to first testable product. Scoping, design, build, launch." },
    readingTime: "9 min",
    image: "/legacy-assets/images/Article_MVP.png",
    dateISO: "2026-02-01",
    relatedServices: ["application-web-mvp", "ux-ui-design", "ai-studio"],
    relatedArticles: ["combien-coute-application-web", "no-code-vs-code", "ia-creation-produit-digital"],
  },
  {
    slug: "agence-web-vs-freelance",
    category: { fr: "Stratégie", en: "Strategy" },
    title: { fr: "Agence web vs freelance : comment choisir", en: "Web agency vs freelancer: how to choose" },
    excerpt: { fr: "Freelance, agence, studio digital. Forces, limites et critères concrets pour choisir le bon partenaire.", en: "Freelancer, agency, digital studio. Strengths, limits and concrete criteria to choose the right partner." },
    readingTime: "8 min",
    image: "/legacy-assets/images/Article_freelance.png",
    dateISO: "2026-03-01",
    relatedServices: ["creation-site-web", "application-web-mvp"],
    relatedArticles: ["combien-coute-un-site-web", "aides-digitalisation-belgique", "refonte-site-web"],
  },
  {
    slug: "combien-coute-application-web",
    category: { fr: "Budget", en: "Budget" },
    title: { fr: "Combien coûte une application web en 2026 ?", en: "How much does a web app cost in 2026?" },
    excerpt: { fr: "MVP, SaaS, plateforme métier. Les fourchettes de prix réalistes et les facteurs qui font varier le budget.", en: "MVP, SaaS, business platform. Realistic price ranges and factors that affect the budget." },
    readingTime: "9 min",
    image: "/legacy-assets/images/Articles-AI.webp",
    dateISO: "2026-03-01",
    relatedServices: ["application-web-mvp", "ai-studio"],
    relatedArticles: ["combien-coute-un-site-web", "lancer-mvp-rapidement", "aides-digitalisation-belgique"],
  },
];

/** Return curated related articles for a given slug */
export function getRelatedArticles(currentSlug: string, locale: Locale = "fr", count = 3) {
  const current = articles.find((a) => a.slug === currentSlug);
  if (!current) {
    return articles.slice(0, count).map((a) => toRelated(a, locale));
  }

  const curated = current.relatedArticles
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as ArticleMeta[];

  if (curated.length >= count) {
    return curated.slice(0, count).map((a) => toRelated(a, locale));
  }

  const remaining = articles.filter(
    (a) => a.slug !== currentSlug && !current.relatedArticles.includes(a.slug)
  );
  return [...curated, ...remaining].slice(0, count).map((a) => toRelated(a, locale));
}

/** Return related service slugs for a given article */
export function getRelatedServices(articleSlug: string) {
  const current = articles.find((a) => a.slug === articleSlug);
  return current?.relatedServices ?? [];
}

/** Return articles related to a given service slug */
export function getArticlesForService(serviceSlug: string, locale: Locale = "fr", count = 3) {
  return articles
    .filter((a) => a.relatedServices.includes(serviceSlug))
    .slice(0, count)
    .map((a) => toRelated(a, locale));
}

function toRelated(a: ArticleMeta, locale: Locale) {
  return {
    slug: a.slug,
    title: a.title[locale],
    category: a.category[locale],
    readingTime: a.readingTime,
  };
}
