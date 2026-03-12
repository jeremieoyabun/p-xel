import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage/ArticlePage";
import articleStyles from "@/components/ArticlePage/ArticlePage.module.css";
import { SITE_URL } from "@/lib/constants";
import { getRelatedArticles } from "@/lib/articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: isFr
      ? "Combien coûte un site web en 2026 ? Prix et guide complet"
      : "How much does a website cost in 2026? Prices and complete guide",
    description: isFr
      ? "Prix site web en 2026 : landing page, site vitrine, e-commerce, web app. Fourchettes réalistes, facteurs de coût et conseils pour optimiser votre budget."
      : "Website pricing in 2026: landing page, showcase site, e-commerce, web app. Realistic ranges, cost factors and tips to optimize your budget.",
    alternates: { canonical: `${SITE_URL}/${locale}/perspectives/combien-coute-un-site-web/` },
    openGraph: { images: [{ url: "/legacy-assets/images/Article-large_Web-design.webp", width: 1200, height: 630 }] },
  };
}

export default async function CombienCouteUnSiteWeb({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  void locale;

  return (
    <ArticlePage
      title="Combien coûte un site web en 2026 ?"
      slug="combien-coute-un-site-web"
      date="20 NOV. 2025"
      dateISO="2025-11-20"
      lead="En 2026, le prix d'un site internet ne se résume plus au nombre de pages. UX/UI, SEO, performances, e-commerce, automatisation et IA : ce guide détaille les fourchettes de prix réalistes pour un site vitrine, un site e-commerce ou une web app professionnelle, en Belgique, France, Luxembourg et Suisse."
      heroImage="/legacy-assets/images/Article-large_Web-design.webp"
      heroAlt="Combien coûte un site web en 2026"
      tags={["Site web", "UX/UI", "Budget"]}
      readingTime="7 minutes"
      relatedArticles={getRelatedArticles("combien-coute-un-site-web")}
    >
      {/* Article body kept in French for both locales - full i18n of article bodies will come later */}
      <p>
        En 2026, poser la question <strong>« combien coûte un site web ? »</strong> revient à demander le prix
        d&#39;un bâtiment sans préciser s&#39;il s&#39;agit d&#39;un studio meublé, d&#39;un restaurant gastronomique ou d&#39;un siège social.
        Un <strong>site internet</strong> peut être une simple landing page, un site vitrine, une boutique en ligne,
        une plateforme SaaS ou une web app métier connectée à vos outils internes.
      </p>

      <div className={articleStyles.highlight}>
        <p>
          Le <strong>coût d&#39;un site web</strong> en 2026 dépend surtout de ce qu&#39;il doit accomplir pour ton activité :
          générer des leads qualifiés, vendre en ligne, rassurer des investisseurs, automatiser des tâches ou centraliser
          des données. Le budget suit la valeur créée, pas seulement le nombre d&#39;écrans.
        </p>
      </div>

      <h2>Les grandes familles de sites web en 2026</h2>

      <p>
        Pour parler prix, il faut d&#39;abord parler type de projet. La majorité des demandes de <strong>création de site web</strong>{" "}
        se regroupent en quatre catégories, qui n&#39;ont ni les mêmes objectifs ni les mêmes budgets.
      </p>

      <h3>1. Landing page ou mini site de campagne</h3>
      <p>
        C&#39;est le format idéal pour tester un marché, lancer une offre, valider un concept ou accompagner une
        campagne publicitaire. L&#39;enjeu principal : convertir un visiteur en lead ou en client.
        On travaille un message clair, un parcours ultra court, un <strong>design orienté conversion</strong> et un tracking propre.
      </p>

      <h3>2. Site vitrine professionnel</h3>
      <p>
        Le <strong>site vitrine</strong> reste la base pour une PME, un cabinet, un indépendant ou un studio.
        En 2026, un simple site « carte de visite » ne suffit plus : il doit être rapide, responsive,
        crédible, optimisé pour le <strong>référencement naturel</strong> et cohérent avec l&#39;image de marque.
        C&#39;est souvent le premier point de contact sérieux avec tes prospects.
      </p>

      <h3>3. Site e-commerce</h3>
      <p>
        Un <strong>site e-commerce</strong> moderne doit faire bien plus que proposer un bouton « Ajouter au panier ».
        Il gère la confiance (sécurité, avis, garanties), la logistique (stock, transport, TVA), les paiements,
        les retours, l&#39;emailing transactionnel, le support et parfois la personnalisation produit.
        Plus le tunnel d&#39;achat est fluide, plus la complexité technique derrière est importante.
      </p>

      <h3>4. Web app ou plateforme métier</h3>
      <p>
        Portail client, intranet, configurateur, SaaS, application métier : ici, on ne parle plus simplement de site,
        mais d&#39;outil de travail. On touche à la <strong>productivité interne</strong>, aux données sensibles et à des
        workflows complexes. Ces projets impliquent UX, UI, développement, sécurité, data, parfois intégration ERP/CRM,
        et se chiffrent souvent en dizaines de milliers d&#39;euros.
      </p>

      <h2>Les facteurs qui font vraiment varier le prix en 2026</h2>

      <p>
        Deux sites de dix pages peuvent avoir des prix qui vont du simple au triple. La différence ne vient pas tant
        du volume de contenu que de la qualité de l&#39;expérience, du niveau de personnalisation et des contraintes techniques.
      </p>

      <h3>UX/UI design et image de marque</h3>
      <p>
        L&#39;UX définit l&#39;architecture de l&#39;information, les parcours, les priorités de contenu. L&#39;UI traduit ta marque
        dans l&#39;interface : typographie, couleurs, grilles, animations, micro-interactions. Un travail sérieux
        de <strong>design UX/UI</strong> passe par des wireframes, un prototype, un <strong>design system</strong> et des
        composants réutilisables. Plus ton univers est spécifique, plus il faut de temps pour le traduire en interface.
      </p>

      <h3>Fonctionnalités, intégrations et automatisation</h3>
      <p>
        Formulaire intelligent, prise de rendez-vous, paiement en ligne, espace client, génération automatique de devis,
        synchronisation avec un CRM, marketing automation, chatbot... Chaque fonction nécessite analyse, paramétrage,
        tests et parfois des licences tierces. C&#39;est souvent là que se joue le passage d&#39;un « simple site »
        à une plateforme qui fait gagner du temps tous les jours.
      </p>

      <h3>SEO, contenu et performances</h3>
      <p>
        Un site qui ne se charge pas sur mobile ou ne ressort pas dans Google ne sert pas ton business. En 2026,
        une partie du budget est systématiquement consacrée à :
      </p>

      <ul>
        <li>la structure SEO (titres, H1/H2, maillage interne, URLs propres),</li>
        <li>la rédaction ou la réécriture de contenus optimisés sur des requêtes clés (« prix site internet », « création site web [ville] »...),</li>
        <li>l&#39;optimisation des <strong>performances web</strong> (images, scripts, cache, CDN, Core Web Vitals),</li>
        <li>la préparation aux réponses enrichies et aux aperçus IA dans les moteurs de recherche.</li>
      </ul>

      <h3>IA, personnalisation et expérience avancée</h3>
      <p>
        De plus en plus de projets intègrent une couche d&#39;IA : assistant de support, tri automatique des demandes,
        recommandation de contenus, scoring de leads, FAQ intelligente...
        Ces briques améliorent la valeur perçue du site, mais impliquent aussi des coûts d&#39;intégration, de paramétrage
        et parfois d&#39;abonnement à des API ou services spécialisés.
      </p>

      <h2>Fourchettes de prix réalistes pour un site web en 2026</h2>

      <p>
        Chaque projet a ses spécificités, mais on peut donner des <strong>ordres de grandeur</strong> pour un travail pro,
        que ce soit avec un freelance senior ou un petit studio spécialisé.
      </p>

      <ul>
        <li><strong>Landing page / one-page orientée conversion</strong> : à partir d&#39;environ 900 € et jusqu&#39;à 3 500 € selon le niveau d&#39;UX, de copywriting et d&#39;intégrations.</li>
        <li><strong>Site vitrine complet</strong> : la plupart des projets sérieux se situent entre 3 500 € et 10 000 €.</li>
        <li><strong>Site corporate ou marque premium</strong> : entre 8 000 € et 20 000 €, avec travail de contenu, UX avancée et design sur mesure.</li>
        <li><strong>Site e-commerce</strong> : rarement en dessous de 6 000 €, souvent entre 9 000 € et 30 000 € selon le catalogue et les intégrations.</li>
        <li><strong>Web app ou plateforme métier</strong> : on parle plutôt de budgets à partir de 20 000 € et pouvant dépasser largement ce montant.</li>
      </ul>

      <p>
        En dessous de ces fourchettes, on est généralement sur du thème générique, peu personnalisé, difficile à faire évoluer
        et parfois fragile en termes de performance, sécurité ou SEO. Ce n&#39;est pas forcément mauvais, mais il faut l&#39;assumer
        comme une solution d&#39;entrée de gamme ou temporaire.
      </p>

      <h2>Comment optimiser ton budget sans sacrifier la qualité ?</h2>

      <p>
        La bonne question n&#39;est pas seulement « combien coûte un site web », mais
        « comment investir au bon endroit pour obtenir un retour clair sur ce budget ».
      </p>

      <h3>Clarifier les objectifs business dès le départ</h3>
      <p>
        Un site peut servir à être trouvé, à rassurer, à vendre, à qualifier, à automatiser ou à tout cela à la fois.
        Plus tes objectifs sont précis, plus il sera facile de prioriser ce qui compte vraiment dans la première version
        et de maîtriser les coûts. C&#39;est aussi ce qui fait la différence entre un site joli et un site utile.
      </p>

      <h3>Lancer une première version, puis itérer</h3>
      <p>
        Approche recommandée en 2026 : sortir une version concentrée sur le cœur de ton offre (MVP), puis l&#39;enrichir
        en fonction des retours, des données d&#39;usage et du budget disponible. Tu évites ainsi les projets qui durent un an,
        dont la moitié des fonctionnalités ne sera jamais utilisée.
      </p>

      <h3>Investir dans un design system réutilisable</h3>
      <p>
        Un <strong>design system</strong> bien pensé fait baisser le coût de chaque nouvelle page, campagne ou fonctionnalité.
        On réutilise des blocs, des composants, des styles, au lieu de repartir de zéro. C&#39;est particulièrement pertinent
        si tu prévois d&#39;ajouter régulièrement des contenus, des modules ou des microsites.
      </p>

      <div className={articleStyles.highlight}>
        <p>
          Le prix d&#39;un site web en 2026 ne se résume pas à un devis en bas de page. Ce qui compte vraiment, c&#39;est la capacité
          du projet à <strong>soutenir ta stratégie</strong>, à <strong>renforcer ta marque</strong> et à{" "}
          <strong>évoluer sans tout refaire</strong> dès que ton business grandit.
        </p>
      </div>
    </ArticlePage>
  );
}
