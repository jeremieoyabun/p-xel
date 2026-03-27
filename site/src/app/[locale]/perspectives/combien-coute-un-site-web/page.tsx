import type { Metadata } from "next";
import Image from "next/image";
import { ArticlePage } from "@/components/ArticlePage/ArticlePage";
import articleStyles from "@/components/ArticlePage/ArticlePage.module.css";
import { SITE_URL } from "@/lib/constants";
import { getRelatedArticles, getRelatedServices } from "@/lib/articles";

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
  const isFr = locale === "fr";

  return (
    <ArticlePage
      locale={locale}
      title={isFr ? "Combien coûte un site web en 2026 ?" : "How much does a website cost in 2026?"}
      slug="combien-coute-un-site-web"
      date={isFr ? "20 NOV. 2025" : "NOV. 20, 2025"}
      dateISO="2025-11-20"
      lead={isFr
        ? "En 2026, le prix d'un site internet ne se résume plus au nombre de pages. UX/UI, SEO, performances, e-commerce, automatisation et IA : ce guide détaille les fourchettes de prix réalistes pour un site vitrine, un site e-commerce ou une web app professionnelle, en Belgique, France, Luxembourg et Suisse."
        : "In 2026, the cost of a website goes far beyond page count. UX/UI, SEO, performance, e-commerce, automation and AI: this guide breaks down realistic price ranges for a showcase site, an e-commerce store or a professional web app in Belgium and across Europe."
      }
      heroImage="/legacy-assets/images/Article-large_Web-design.webp"
      heroAlt={isFr ? "Combien coûte un site web en 2026" : "How much does a website cost in 2026"}
      tags={isFr ? ["Site web", "UX/UI", "Budget"] : ["Website", "UX/UI", "Budget"]}
      readingTime={isFr ? "7 minutes" : "7 min read"}
      relatedArticles={getRelatedArticles("combien-coute-un-site-web", locale as "fr" | "en")}
      relatedServices={getRelatedServices("combien-coute-un-site-web")}
    >
      {isFr ? (
        <>
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

          <figure style={{ margin: '2rem 0' }}>
            <Image
              src="/images/case-studies/arduenna-hero.webp"
              alt="Site e-commerce Arduenna concu par P-XEL Studio"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <figcaption style={{ fontSize: '0.875rem', color: '#8A8A9A', marginTop: '0.5rem' }}>
              Arduenna : un site e-commerce sur mesure concu et developpe par P-XEL Studio.
            </figcaption>
          </figure>

          <h3>4. Web app ou plateforme métier</h3>
          <p>
            Portail client, intranet, configurateur, SaaS, application métier : ici, on ne parle plus simplement de site,
            mais d&#39;outil de travail. On touche à la <strong>productivité interne</strong>, aux données sensibles et à des
            workflows complexes. Ces projets impliquent UX, UI, développement, sécurité, data, parfois intégration ERP/CRM,
            et se chiffrent souvent en dizaines de milliers d&#39;euros.
          </p>

          <figure style={{ margin: '2rem 0' }}>
            <Image
              src="/images/case-studies/greenmood-hero.webp"
              alt="Plateforme Greenmood concue par P-XEL Studio"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <figcaption style={{ fontSize: '0.875rem', color: '#8A8A9A', marginTop: '0.5rem' }}>
              Greenmood : une plateforme web sur mesure avec gestion de contenu, calendrier et analytics.
            </figcaption>
          </figure>

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
        </>
      ) : (
        <>
          <p>
            In 2026, asking <strong>&quot;how much does a website cost?&quot;</strong> is like asking
            the price of a building without specifying whether it&#39;s a furnished studio, a fine-dining
            restaurant or a corporate headquarters. A <strong>website</strong> can be a simple landing page,
            a showcase site, an online store, a SaaS platform or a custom web app connected to your internal tools.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              The <strong>cost of a website</strong> in 2026 depends primarily on what it needs to accomplish
              for your business: generate qualified leads, sell online, build investor confidence, automate tasks
              or centralize data. The budget follows the value created, not just the number of screens.
            </p>
          </div>

          <h2>The main categories of websites in 2026</h2>

          <p>
            Before talking price, you need to talk project type. Most <strong>website creation</strong> requests
            fall into four categories, each with different goals and different budgets.
          </p>

          <h3>1. Landing page or campaign mini site</h3>
          <p>
            The ideal format for testing a market, launching an offer, validating a concept or supporting
            an ad campaign. The core challenge: converting a visitor into a lead or customer.
            This means a sharp message, an ultra-short user journey, <strong>conversion-focused design</strong> and clean tracking.
          </p>

          <h3>2. Professional showcase site</h3>
          <p>
            The <strong>showcase site</strong> remains the foundation for SMEs, consultancies, freelancers and studios.
            In 2026, a basic &quot;business card&quot; site no longer cuts it: it must be fast, responsive,
            credible, optimized for <strong>organic search</strong> and consistent with your brand identity.
            It&#39;s often the first serious touchpoint with your prospects.
          </p>

          <h3>3. E-commerce site</h3>
          <p>
            A modern <strong>e-commerce site</strong> must do far more than display an &quot;Add to cart&quot; button.
            It handles trust (security, reviews, guarantees), logistics (inventory, shipping, VAT), payments,
            returns, transactional emails, support and sometimes product customization.
            The smoother the purchase funnel, the greater the technical complexity behind it.
          </p>

          <figure style={{ margin: '2rem 0' }}>
            <Image
              src="/images/case-studies/arduenna-hero.webp"
              alt="Arduenna e-commerce website designed by P-XEL Studio"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <figcaption style={{ fontSize: '0.875rem', color: '#8A8A9A', marginTop: '0.5rem' }}>
              Arduenna: a custom e-commerce site designed and developed by P-XEL Studio.
            </figcaption>
          </figure>

          <h3>4. Web app or business platform</h3>
          <p>
            Client portal, intranet, configurator, SaaS, business application: here we&#39;re no longer talking
            about a site, but about a working tool. It touches <strong>internal productivity</strong>, sensitive data
            and complex workflows. These projects involve UX, UI, development, security, data, sometimes
            ERP/CRM integration, and often run into tens of thousands of euros.
          </p>

          <figure style={{ margin: '2rem 0' }}>
            <Image
              src="/images/case-studies/greenmood-hero.webp"
              alt="Greenmood platform designed by P-XEL Studio"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <figcaption style={{ fontSize: '0.875rem', color: '#8A8A9A', marginTop: '0.5rem' }}>
              Greenmood: a custom web platform with content management, calendar and analytics.
            </figcaption>
          </figure>

          <h2>The factors that actually drive pricing in 2026</h2>

          <p>
            Two ten-page sites can vary in price by a factor of three. The difference is not so much
            about content volume as it is about experience quality, customization level and technical constraints.
          </p>

          <h3>UX/UI design and brand identity</h3>
          <p>
            UX defines information architecture, user flows and content priorities. UI translates your brand
            into the interface: typography, colors, grids, animations, micro-interactions. Serious{" "}
            <strong>UX/UI design</strong> work involves wireframes, a prototype, a <strong>design system</strong> and
            reusable components. The more distinctive your brand, the more time it takes to translate into an interface.
          </p>

          <h3>Features, integrations and automation</h3>
          <p>
            Smart forms, booking systems, online payments, client portals, automated quote generation,
            CRM sync, marketing automation, chatbots... Each feature requires analysis, configuration,
            testing and sometimes third-party licenses. This is often where a &quot;simple site&quot;
            becomes a platform that saves time every single day.
          </p>

          <h3>SEO, content and performance</h3>
          <p>
            A site that won&#39;t load on mobile or doesn&#39;t show up on Google isn&#39;t serving your business. In 2026,
            part of the budget is systematically allocated to:
          </p>

          <ul>
            <li>SEO structure (headings, H1/H2, internal linking, clean URLs),</li>
            <li>writing or rewriting content optimized for key queries (&quot;website pricing&quot;, &quot;web design [city]&quot;...),</li>
            <li>optimizing <strong>web performance</strong> (images, scripts, caching, CDN, Core Web Vitals),</li>
            <li>preparing for rich results and AI-powered search previews.</li>
          </ul>

          <h3>AI, personalization and advanced experiences</h3>
          <p>
            More and more projects integrate an AI layer: support assistants, automatic request triage,
            content recommendations, lead scoring, intelligent FAQ...
            These components enhance the site&#39;s perceived value but also carry integration, configuration
            and sometimes subscription costs for specialized APIs or services.
          </p>

          <h2>Realistic price ranges for a website in 2026</h2>

          <p>
            Every project has its specifics, but here are <strong>ballpark figures</strong> for professional work,
            whether with a senior freelancer or a specialized boutique studio.
          </p>

          <ul>
            <li><strong>Conversion-focused landing page / one-pager</strong>: starting from around 900 EUR up to 3,500 EUR depending on UX depth, copywriting and integrations.</li>
            <li><strong>Full showcase site</strong>: most serious projects fall between 3,500 EUR and 10,000 EUR.</li>
            <li><strong>Corporate or premium brand site</strong>: between 8,000 EUR and 20,000 EUR, with content work, advanced UX and bespoke design.</li>
            <li><strong>E-commerce site</strong>: rarely below 6,000 EUR, typically between 9,000 EUR and 30,000 EUR depending on catalog size and integrations.</li>
            <li><strong>Web app or business platform</strong>: budgets starting at 20,000 EUR and often exceeding that significantly.</li>
          </ul>

          <p>
            Below these ranges, you&#39;re generally looking at generic templates, limited customization, hard to scale
            and sometimes fragile in terms of performance, security or SEO. That&#39;s not necessarily bad, but it should
            be understood as an entry-level or temporary solution.
          </p>

          <h2>How to optimize your budget without sacrificing quality</h2>

          <p>
            The right question is not just &quot;how much does a website cost&quot;, but
            &quot;how to invest in the right areas for a clear return on that budget&quot;.
          </p>

          <h3>Clarify business goals from the start</h3>
          <p>
            A site can serve to be found, to reassure, to sell, to qualify, to automate, or all of the above.
            The sharper your goals, the easier it is to prioritize what truly matters in the first version
            and keep costs under control. That&#39;s also what makes the difference between a pretty site and a useful one.
          </p>

          <h3>Ship a first version, then iterate</h3>
          <p>
            The recommended approach in 2026: release a version focused on the core of your offer (MVP), then enrich it
            based on feedback, usage data and available budget. This avoids year-long projects
            where half the features never get used.
          </p>

          <h3>Invest in a reusable design system</h3>
          <p>
            A well-designed <strong>design system</strong> lowers the cost of every new page, campaign or feature.
            You reuse blocks, components and styles instead of starting from scratch. This is especially relevant
            if you plan to regularly add content, modules or microsites.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              The price of a website in 2026 is not just a number at the bottom of a quote. What truly matters
              is the project&#39;s ability to <strong>support your strategy</strong>, to <strong>strengthen your brand</strong> and to{" "}
              <strong>evolve without a full rebuild</strong> as your business grows.
            </p>
          </div>
        </>
      )}
    </ArticlePage>
  );
}
