export interface ArticleMeta {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  image: string;
  dateISO: string;
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
  },
  {
    slug: "aides-digitalisation-belgique",
    category: "Aides",
    title: "Aides à la digitalisation en Belgique",
    excerpt: "Primes Bruxelles, chèques Wallonie. Les subsides pour financer votre projet digital en 2026.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-Digitalisation.webp",
    dateISO: "2025-11-28",
  },
  {
    slug: "no-code-vs-code",
    category: "Technologie",
    title: "No-code, low-code ou full-code : comment choisir",
    excerpt: "Webflow, Bubble ou sur mesure ? Les critères concrets pour choisir selon votre projet, budget et ambition.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-No-code.webp",
    dateISO: "2025-12-01",
  },
  {
    slug: "ia-creation-produit-digital",
    category: "IA",
    title: "Comment l'IA accélère la création de votre produit digital",
    excerpt: "Prototypage rapide, génération d'assets, automatisation. Ce que l'IA change concrètement dans la livraison d'un produit.",
    readingTime: "9 min",
    image: "/legacy-assets/images/Articles-AI.webp",
    dateISO: "2025-10-17",
  },
  {
    slug: "tendances-ux-ui-2026",
    category: "UX/UI",
    title: "Tendances UX/UI 2026",
    excerpt: "Interfaces prédictives, IA intégrée, accessibilité universelle, design durable. Les évolutions à anticiper.",
    readingTime: "7 min",
    image: "/legacy-assets/images/Article-large_UI.webp",
    dateISO: "2025-11-02",
  },
  {
    slug: "refonte-site-web",
    category: "Stratégie",
    title: "Refonte de site web : quand et pourquoi refaire son site",
    excerpt: "Les signes qu'il est temps, les erreurs à éviter et la méthode pour une refonte qui booste vos résultats.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Article-large_Web-design.webp",
    dateISO: "2026-01-15",
  },
  {
    slug: "lancer-mvp-rapidement",
    category: "Produit",
    title: "MVP : comment lancer un produit digital en 4 semaines",
    excerpt: "La méthode pour passer de l'idée au premier produit testable. Cadrage, design, build, lancement.",
    readingTime: "9 min",
    image: "/legacy-assets/images/Articles-No-code.webp",
    dateISO: "2026-02-01",
  },
  {
    slug: "agence-web-vs-freelance",
    category: "Stratégie",
    title: "Agence web vs freelance : comment choisir",
    excerpt: "Freelance, agence, studio digital. Forces, limites et critères concrets pour choisir le bon partenaire.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-Digitalisation.webp",
    dateISO: "2026-03-01",
  },
  {
    slug: "combien-coute-application-web",
    category: "Budget",
    title: "Combien coûte une application web en 2026 ?",
    excerpt: "MVP, SaaS, plateforme métier. Les fourchettes de prix réalistes et les facteurs qui font varier le budget.",
    readingTime: "9 min",
    image: "/legacy-assets/images/Articles-AI.webp",
    dateISO: "2026-03-01",
  },
];

/** Return 3 related articles (excluding the current one) */
export function getRelatedArticles(currentSlug: string, count = 3) {
  return articles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, count)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      category: a.category,
      readingTime: a.readingTime,
    }));
}
