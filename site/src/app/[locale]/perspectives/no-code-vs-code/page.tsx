import type { Metadata } from "next";
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
  const isFr = locale === "fr";

  return (
    <ArticlePage
      locale={locale}
      title={isFr
        ? "No-code, low-code, full-code : comment choisir pour ton prochain produit digital ?"
        : "No-code, low-code or full-code: how to choose for your next digital product"
      }
      date={isFr ? "DÉC. 2025" : "DEC. 2025"}
      lead={isFr
        ? "Entre plateformes no-code, briques low-code et développement « full-code », beaucoup d'équipes se retrouvent bloquées au moment de choisir leur stack. Cet article t'aide à comprendre les forces et limites de chaque approche, et surtout comment les combiner intelligemment pour aller plus vite sans sacrifier la qualité."
        : "Between no-code platforms, low-code building blocks and full-code development, many teams get stuck when choosing their stack. This article helps you understand the strengths and limits of each approach, and more importantly how to combine them intelligently to move faster without sacrificing quality."
      }
      heroImage="/legacy-assets/images/Article-large_Code.webp"
      heroAlt={isFr ? "No-code, low-code, full-code : comment choisir" : "No-code, low-code or full-code: how to choose"}
      tags={isFr ? ["No-code", "Full-code", "Product design"] : ["No-code", "Full-code", "Product design"]}
      readingTime={isFr ? "8 minutes" : "8 min read"}
      slug="no-code-vs-code"
      dateISO="2025-12-01"
      relatedArticles={getRelatedArticles("no-code-vs-code", locale as "fr" | "en")}
      relatedServices={getRelatedServices("no-code-vs-code")}
    >
      {isFr ? (
        <>
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
        </>
      ) : (
        <>
          <p>
            For a long time, launching a site, an app or an internal back-office meant{" "}
            <strong>building everything from scratch</strong>. Today, the ecosystem has exploded:
            no-code builders, low-code platforms, front and back-end frameworks, SaaS automations...
            The result: more possibilities, but also more confusion.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              The real question is no longer &quot;no-code or full-code?&quot; but rather:{" "}
              <strong>which parts of your product need to be ultra-flexible and custom-coded</strong>,
              and <strong>which parts can be industrialized through no-code or low-code</strong>.
            </p>
          </div>

          <h2>Three ways to build a digital experience</h2>

          <p>
            To simplify, approaches fall into three main families:{" "}
            <strong>full-code</strong>, <strong>low-code</strong> and <strong>no-code</strong>. They don&#39;t compete -
            they complement each other.
          </p>

          <h3>Full-code: absolute custom control</h3>
          <p>
            <strong>Full-code</strong> relies on developers who write and deploy the entire
            application (back-end, front-end, APIs, infrastructure). Frameworks like React, Vue, Next,
            Laravel, Django, etc. This is the ideal approach when:
          </p>
          <ul>
            <li>you need to build a <strong>core business product</strong> (SaaS, business platform, custom algorithms);</li>
            <li>the business logic is <strong>complex or highly specific</strong>;</li>
            <li>performance, security or scalability are critical.</li>
          </ul>
          <p>
            The trade-off: every change goes through the tech team. <strong>Longer time-to-market</strong>,
            saturated roadmap, heavy dev dependency for every landing page or micro-optimization.
          </p>

          <h3>Low-code: an engine built by devs, driven by business teams</h3>
          <p>
            <strong>Low-code</strong> starts with a solid technical foundation designed by developers,
            but exposes <strong>reusable components</strong> and visual interfaces that
            marketing, product or ops teams can assemble on their own.
          </p>
          <p>
            Typically: a properly coded design system, page blocks, email templates,
            automated workflows, assembled through a drag-and-drop interface or configurators.
          </p>
          <p>
            Advantages:
          </p>
          <ul>
            <li><strong>speed</strong>: creating a new page, user flow or automated scenario becomes fast;</li>
            <li><strong>collaboration</strong>: devs build the bricks, business teams build the experiences;</li>
            <li><strong>consistency</strong>: everything rests on a single, documented and maintained technical base.</li>
          </ul>

          <h3>No-code: ultra-fast iteration</h3>
          <p>
            <strong>No-code</strong> relies entirely on visual interfaces: you assemble blocks,
            connect apps, configure rules. No line of code is needed to
            create a site, an advanced form or a simple internal tool.
          </p>
          <p>
            It&#39;s perfect for:
          </p>
          <ul>
            <li><strong>quickly testing a concept</strong> (MVP, pre-launch landing, proof of value);</li>
            <li>equipping an internal team (lightweight CRM, lead tracking, content database, automations);</li>
            <li>creating <strong>vertical interfaces</strong> around existing tools (back-office, dashboards, simple client portals).</li>
          </ul>
          <p>
            Limitations: reduced extensibility, platform dependency, costs that can escalate with usage,
            and sometimes <strong>less refined UX/UI building blocks</strong> than custom work.
          </p>

          <h2>When to go full-code</h2>

          <p>
            You need full-code as soon as your product touches the <strong>backbone of your business</strong>.
            A few clear signals:
          </p>

          <h3>1. High business logic complexity</h3>
          <p>
            Highly specific pricing, complex permissions, multi-role workflows, advanced calculations or algorithms...
            As soon as you force a no-code tool into acrobatics to handle your logic, it&#39;s a sign
            that <strong>custom code will be cleaner and more durable</strong>.
          </p>

          <h3>2. Strong performance and scalability requirements</h3>
          <p>
            If you&#39;re targeting thousands of concurrent users, real-time integrations or high data volumes,
            you need granular control over architecture, queries, caching and security.
            That&#39;s the natural territory of full-code.
          </p>

          <h3>3. Product differentiation</h3>
          <p>
            If your value proposition rests on a <strong>highly specific experience</strong> (interaction,
            visualization, recommendation engine, proprietary automation logic), no-code will
            often be too limited. Full-code lets you build exactly what makes the difference.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              Simple rule: the more your value rests on something specific, the more it makes sense
              to implement it in <strong>full-code</strong>. Conversely, anything that can be standardized can go
              no-code or low-code.
            </p>
          </div>

          <h2>When to go no-code</h2>

          <p>
            No-code is not a &quot;lazy&quot; solution - it&#39;s a strategic weapon to{" "}
            <strong>shrink the gap between an idea and a real-world test</strong>.
          </p>

          <h3>1. Building an MVP fast</h3>
          <p>
            You want to verify that a market exists, that people are willing to pay, or that your model holds up?
            In 80% of cases, you don&#39;t need a &quot;perfect&quot; product - you need a{" "}
            <strong>credible prototype</strong>, usable by real users, in a matter of weeks.
          </p>
          <p>
            In this context, no-code lets you:
          </p>
          <ul>
            <li>launch a landing page with a pre-registration form;</li>
            <li>spin up a lightweight back-office to manage your first customers;</li>
            <li>automate feedback collection and follow-up.</li>
          </ul>

          <h3>2. Equipping your team without waiting for devs</h3>
          <p>
            In-house CRM, production tracking, knowledge base, HR pipeline, sales reporting...
            A huge share of these needs can be covered by <strong>well-designed no-code</strong>.
          </p>
          <p>
            Result:
          </p>
          <ul>
            <li>devs stay focused on the core product;</li>
            <li>business teams gain autonomy;</li>
            <li>you can scrap or rebuild a tool if the process evolves, without breaking everything.</li>
          </ul>

          <h3>3. Prototyping complex experiences before coding them</h3>
          <p>
            Even for a future full-code product, no-code is extremely useful for prototyping a user flow, testing
            an experience, validating a data model. Only then do you industrialize in code.
          </p>

          <h2>Limitations to keep in mind</h2>

          <p>
            No approach is magic. The real risk is pushing a tool beyond its playing field.
          </p>

          <h3>Full-code limitations</h3>
          <ul>
            <li><strong>Longer time-to-market</strong> if devs also handle landings, emails and forms;</li>
            <li>risk of <strong>bottleneck</strong> on a small tech team;</li>
            <li>higher total cost if you reinvent standard bricks (authentication, CRM, CMS...).</li>
          </ul>

          <h3>No-code limitations</h3>
          <ul>
            <li><strong>platform lock-in</strong> (vendor lock-in, performance limits, pricing models);</li>
            <li>architecture that can be hard to evolve cleanly at scale;</li>
            <li>difficult to cover truly atypical or highly specialized needs.</li>
          </ul>

          <h2>The right approach: a hybrid stack</h2>

          <p>
            In practice, the strongest products combine all three levels:
          </p>

          <ul>
            <li><strong>Full-code</strong> for the app core, APIs, business logic, security;</li>
            <li><strong>Low-code</strong> to expose modular components and pages to business teams;</li>
            <li><strong>No-code</strong> for automations, internal tools, campaigns and rapid tests.</li>
          </ul>

          <p>
            This keeps a <strong>clean and performant architecture</strong>, while giving
            maximum latitude to non-technical teams to create, test and iterate.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              The goal is not to pick a &quot;camp,&quot; but to <strong>place code where it creates
              the most value</strong>, and use no-code/low-code for everything that can be industrialized.
            </p>
          </div>

          <h2>How to choose for your next project</h2>

          <p>
            Use this quick framework to guide your decision.
          </p>

          <h3>Ask yourself these questions</h3>
          <ul>
            <li>Does my idea need to be <strong>validated quickly on the market</strong>? → No-code / low-code.</li>
            <li>Is what I&#39;m building <strong>at the core of my competitive advantage</strong>? → Full-code.</li>
            <li>Do I have a tech team available or is it already maxed out? → If maxed out, shift as many needs as possible to no-code / low-code.</li>
            <li>Am I okay depending on a platform, ready to migrate later? → If yes, no-code MVP.</li>
          </ul>

          <h3>Concrete examples</h3>
          <ul>
            <li>
              <strong>Startup launching a new SaaS</strong>: no-code acquisition MVP (landing, onboarding, lightweight CRM),
              app core in full-code.
            </li>
            <li>
              <strong>SME digitalizing internal operations</strong>: audit + internal tools in no-code,
              a few custom integrations if needed.
            </li>
            <li>
              <strong>Scale-up with a product team</strong>: coded design system, marketing pages in low-code,
              automations in no-code, main product in full-code.
            </li>
          </ul>

          <h2>What about tomorrow?</h2>

          <p>
            No-code, low-code and full-code will continue to converge. No-code tools are becoming more powerful,
            full-code frameworks are integrating more visual generators, and AI is further blurring
            the boundaries between all three.
          </p>
          <p>
            What won&#39;t change, however, is the need to:
          </p>
          <ul>
            <li>truly <strong>understand your business</strong> before choosing a stack;</li>
            <li>maintain control over <strong>data, security and architecture</strong>;</li>
            <li>give more <strong>autonomy to teams</strong> while keeping a clear product vision.</li>
          </ul>

          <div className={articleStyles.highlight}>
            <p>
              You don&#39;t need to choose &quot;no-code&quot; versus &quot;full-code.&quot; You need
              a <strong>product that does what it needs to do</strong>, built with the right level of flexibility,
              control and speed for your exact context.
            </p>
          </div>
        </>
      )}
    </ArticlePage>
  );
}
