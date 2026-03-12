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
      ? "No-code, low-code ou full-code : quel choix pour votre projet en 2026"
      : "No-code, low-code or full-code: which choice for your project in 2026",
    description: isFr
      ? "No-code, low-code ou développement sur mesure ? Forces, limites et critères concrets pour choisir la bonne approche selon votre projet et votre budget."
      : "No-code, low-code or custom development? Strengths, limitations and concrete criteria to choose the right approach for your project and budget.",
    alternates: { canonical: `${SITE_URL}/${locale}/perspectives/no-code-vs-code/` },
    openGraph: { images: [{ url: "/legacy-assets/images/Articles-No-code.webp", width: 1200, height: 630 }] },
  };
}

export default async function NoCodeVsCode({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  void locale;

  return (
    <ArticlePage
      title="No-code, low-code, full-code : comment choisir pour ton prochain produit digital ?"
      date="DÉC. 2025"
      lead="Entre plateformes no-code, briques low-code et développement « full-code », beaucoup d'équipes se retrouvent bloquées au moment de choisir leur stack. Cet article t'aide à comprendre les forces et limites de chaque approche, et surtout comment les combiner intelligemment pour aller plus vite sans sacrifier la qualité."
      heroImage="/legacy-assets/images/Article-large_Code.webp"
      heroAlt="No-code, low-code, full-code : comment choisir"
      tags={["No-code", "Full-code", "Product design"]}
      readingTime="8 minutes"
      slug="no-code-vs-code"
      dateISO="2025-12-01"
      relatedArticles={getRelatedArticles("no-code-vs-code")}
    >
      {/* Article body kept in French for both locales - full i18n of article bodies will come later */}
      <p>
        Pendant longtemps, lancer un site, une app ou un back-office interne signifiait forcément{" "}
        <strong>développer tout sur mesure</strong>. Aujourd&#39;hui, l&#39;écosystème a explosé :
        builders no-code, plateformes low-code, frameworks front et back, automatisations SaaS...
        Résultat : on gagne en possibilités, mais aussi en confusion.
      </p>

      <div className={articleStyles.highlight}>
        <p>
          La vraie question n&#39;est plus « no-code ou full-code ? », mais :{" "}
          <strong>quelles parties de ton produit doivent être ultra-flexibles et codées sur mesure</strong>,
          et <strong>quelles parties peuvent être industrialisées via du no-code ou du low-code</strong>.
        </p>
      </div>

      <h2>Trois façons de construire une expérience digitale</h2>

      <p>
        Pour simplifier, on peut regrouper les approches en trois grandes familles :{" "}
        <strong>full-code</strong>, <strong>low-code</strong> et <strong>no-code</strong>. Elles ne s&#39;opposent pas,
        elles se complètent.
      </p>

      <h3>Full-code : le sur-mesure absolu</h3>
      <p>
        Le <strong>full-code</strong> repose sur des développeurs qui écrivent et déploient l&#39;ensemble
        de l&#39;application (back, front, API, infra). On utilise des frameworks comme React, Vue, Next,
        Laravel, Django, etc. C&#39;est l&#39;approche idéale quand :
      </p>
      <ul>
        <li>tu dois bâtir un <strong>produit cœur de business</strong> (SaaS, plateforme métier, algos custom) ;</li>
        <li>la logique métier est <strong>complexe ou très spécifique</strong> ;</li>
        <li>la performance, la sécurité ou la scalabilité sont critiques.</li>
      </ul>
      <p>
        En contrepartie, chaque évolution passe par l&#39;équipe tech : <strong>time-to-market plus long</strong>,
        roadmap saturée, dépendance forte aux devs pour la moindre landing ou micro-optimisation.
      </p>

      <h3>Low-code : un moteur construit par les devs, piloté par les équipes métier</h3>
      <p>
        Le <strong>low-code</strong> part d&#39;une base technique solide, conçue par des développeurs,
        mais expose des <strong>composants réutilisables</strong> et des interfaces visuelles que
        les équipes marketing, produit ou ops peuvent assembler seules.
      </p>
      <p>
        Typiquement : un design system codé proprement, des blocs de page, des templates d&#39;emails,
        des workflows automatisés, qu&#39;on assemble ensuite via une interface drag-and-drop ou des configurateurs.
      </p>
      <p>
        Avantages :
      </p>
      <ul>
        <li><strong>vitesse</strong> : créer une nouvelle page, un nouveau parcours ou un scénario automatisé devient rapide ;</li>
        <li><strong>collaboration</strong> : les devs construisent les briques, les équipes métier construisent les expériences ;</li>
        <li><strong>cohérence</strong> : tout repose sur une base technique unique, documentée et maintenue.</li>
      </ul>

      <h3>No-code : l&#39;itération ultra-rapide</h3>
      <p>
        Le <strong>no-code</strong> utilise uniquement des interfaces visuelles : on assemble des blocs,
        on connecte des apps, on configure des règles. Aucune ligne de code n&#39;est nécessaire pour
        créer un site, un formulaire avancé ou un outil interne simple.
      </p>
      <p>
        C&#39;est parfait pour :
      </p>
      <ul>
        <li><strong>tester rapidement un concept</strong> (MVP, landing de pré-lancement, preuve de valeur) ;</li>
        <li>outiller une équipe en interne (CRM léger, suivi de leads, base de contenus, automatisations) ;</li>
        <li>créer des <strong>interfaces verticales</strong> autour d&#39;outils existants (back-office, dashboards, portails clients simples).</li>
      </ul>
      <p>
        Limites : extensibilité réduite, dépendance à une plateforme, coûts qui peuvent grimper à l&#39;usage,
        et parfois des <strong>briques UX/UI moins fines</strong> que du sur-mesure.
      </p>

      <h2>Quand privilégier le full-code ?</h2>

      <p>
        Tu as besoin de full-code dès que ton produit touche à la <strong>colonne vertébrale de ton business</strong>.
        Quelques signaux clairs :
      </p>

      <h3>1. Complexité métier élevée</h3>
      <p>
        Pricing très spécifique, permissions complexes, workflows multi-rôles, calculs ou algorithmes pointus...
        Dès que tu forces un outil no-code à faire des acrobaties pour gérer ta logique, c&#39;est un indicateur
        que le <strong>sur-mesure sera plus propre et plus durable</strong>.
      </p>

      <h3>2. Exigences fortes en performance et scalabilité</h3>
      <p>
        Si tu vises des milliers d&#39;utilisateurs concurrents, des intégrations temps réel ou des volumes de data
        importants, tu as besoin de contrôler finement l&#39;architecture, les requêtes, le caching, la sécurité.
        C&#39;est le terrain naturel du full-code.
      </p>

      <h3>3. Différenciation produit</h3>
      <p>
        Si ta proposition de valeur repose sur une <strong>expérience très spécifique</strong> (interaction,
        visualisation, moteur de recommandation, logique d&#39;automatisation propriétaire), le no-code sera
        souvent trop limité. Le full-code te permet de construire exactement ce qui fera la différence.
      </p>

      <div className={articleStyles.highlight}>
        <p>
          Règle simple : plus ta valeur repose sur quelque chose de spécifique, plus il est intéressant
          de l&#39;implémenter en <strong>full-code</strong>. À l&#39;inverse, tout ce qui est standardisable peut partir
          en no-code ou low-code.
        </p>
      </div>

      <h2>Quand privilégier le no-code ?</h2>

      <p>
        Le no-code n&#39;est pas une solution de « fainéant », c&#39;est une arme stratégique pour{" "}
        <strong>réduire le temps entre une idée et un test réel sur le terrain</strong>.
      </p>

      <h3>1. Construire un MVP rapidement</h3>
      <p>
        Tu veux vérifier qu&#39;un marché existe, que des gens sont prêts à payer, ou que ton modèle tient la route ?
        Dans 80 % des cas, tu n&#39;as pas besoin d&#39;un produit « parfait », tu as besoin d&#39;un{" "}
        <strong>prototype crédible</strong>, utilisable par de vrais utilisateurs, en quelques semaines.
      </p>
      <p>
        Dans ce contexte, le no-code te permet de :
      </p>
      <ul>
        <li>mettre en ligne une landing avec un formulaire de pré-inscription ;</li>
        <li>créer un petit back-office pour gérer les premiers clients ;</li>
        <li>automatiser la collecte de feedback et le suivi.</li>
      </ul>

      <h3>2. Outiller ton équipe sans attendre les devs</h3>
      <p>
        CRM maison, suivi de production, base de connaissances, pipeline RH, reporting commercial...
        Une immense partie de ces besoins peut être couverte par du <strong>no-code bien pensé</strong>.
      </p>
      <p>
        Résultat :
      </p>
      <ul>
        <li>les devs se concentrent sur le produit cœur ;</li>
        <li>les équipes métier gagnent en autonomie ;</li>
        <li>tu peux jeter / refondre un outil si le process évolue, sans tout casser.</li>
      </ul>

      <h3>3. Prototyper des expériences complexes avant de les coder</h3>
      <p>
        Même pour un futur produit full-code, le no-code est très utile pour prototyper un parcours, tester
        une expérience, valider un modèle de données. Ensuite seulement, on industrialise en code.
      </p>

      <h2>Les limites à garder en tête</h2>

      <p>
        Aucune approche n&#39;est magique. Le risque, c&#39;est surtout de pousser un outil au-delà de son terrain de jeu.
      </p>

      <h3>Les limites du full-code</h3>
      <ul>
        <li><strong>Time-to-market</strong> plus long si les devs gèrent aussi les landings, emails, formulaires ;</li>
        <li>risque de <strong>bouteille d&#39;étranglement</strong> sur une petite équipe tech ;</li>
        <li>coût total plus élevé si tu réinventes des briques standard (authentification, CRM, CMS...).</li>
      </ul>

      <h3>Les limites du no-code</h3>
      <ul>
        <li><strong>verrouillage plateforme</strong> (vendor lock-in, limites de perfs, modèle de pricing) ;</li>
        <li>architecture parfois difficile à faire évoluer proprement à grande échelle ;</li>
        <li>difficile de couvrir des besoins vraiment atypiques ou très pointus.</li>
      </ul>

      <h2>La bonne approche : une stack hybride</h2>

      <p>
        Dans la pratique, les produits les plus solides combinent les trois niveaux :
      </p>

      <ul>
        <li><strong>Full-code</strong> pour le cœur de l&#39;app, les API, la logique métier, la sécurité ;</li>
        <li><strong>Low-code</strong> pour exposer des composants et pages modulaires aux équipes métier ;</li>
        <li><strong>No-code</strong> pour les automatisations, les outils internes, les campagnes et tests rapides.</li>
      </ul>

      <p>
        Cela permet de garder une <strong>architecture propre et performante</strong>, tout en donnant
        un maximum de latitude aux équipes non techniques pour créer, tester et itérer.
      </p>

      <div className={articleStyles.highlight}>
        <p>
          L&#39;objectif n&#39;est pas de choisir un « camp », mais de <strong>placer le code là où il crée
          le plus de valeur</strong>, et d&#39;utiliser le no-code/low-code pour tout ce qui peut être industrialisé.
        </p>
      </div>

      <h2>Comment choisir pour ton prochain projet ?</h2>

      <p>
        Tu peux utiliser cette grille rapide pour orienter ton choix.
      </p>

      <h3>Pose-toi ces questions</h3>
      <ul>
        <li>Mon idée doit-elle être <strong>validée rapidement sur le marché</strong> ? → No-code / low-code.</li>
        <li>Ce que je construis est-il <strong>au cœur de mon avantage compétitif</strong> ? → Full-code.</li>
        <li>Ai-je une équipe tech disponible ou déjà saturée ? → Si saturée, déplacer un maximum de besoins vers le no-code / low-code.</li>
        <li>Est-ce que j&#39;accepte d&#39;être dépendant d&#39;un outil, quitte à migrer plus tard ? → si oui, MVP no-code.</li>
      </ul>

      <h3>Exemples concrets</h3>
      <ul>
        <li>
          <strong>Startup qui lance un nouveau SaaS</strong> : MVP d&#39;acquisition en no-code (landing, onboarding, CRM léger),
          cœur d&#39;app en full-code.
        </li>
        <li>
          <strong>PME qui veut digitaliser sa gestion interne</strong> : audit + outils internes en no-code,
          quelques intégrations custom si nécessaire.
        </li>
        <li>
          <strong>Scale-up avec équipe produit</strong> : design system codé, pages marketing en low-code,
          automatisations en no-code, produit principal en full-code.
        </li>
      </ul>

      <h2>Et demain ?</h2>

      <p>
        No-code, low-code et full-code vont continuer à se rapprocher. Les outils no-code deviennent plus puissants,
        les frameworks full-code intègrent de plus en plus de générateurs visuels, et l&#39;IA vient encore brouiller
        les frontières entre les trois.
      </p>
      <p>
        Ce qui ne changera pas, en revanche, c&#39;est la nécessité de :
      </p>
      <ul>
        <li>bien <strong>comprendre ton business</strong> avant de choisir une stack ;</li>
        <li>garder le contrôle sur les <strong>données, la sécurité et l&#39;architecture</strong> ;</li>
        <li>donner plus d&#39;<strong>autonomie aux équipes</strong> tout en gardant une vision produit claire.</li>
      </ul>

      <div className={articleStyles.highlight}>
        <p>
          Tu n&#39;as pas besoin de choisir « no-code » contre « full-code ». Tu as besoin
          d&#39;un <strong>produit qui fait ce qu&#39;il doit faire</strong>, construit avec le bon niveau de flexibilité,
          de contrôle et de vitesse pour ton contexte précis.
        </p>
      </div>
    </ArticlePage>
  );
}
