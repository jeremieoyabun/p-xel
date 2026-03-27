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
      ? "Chèques-entreprises Wallonie : guide complet pour financer votre site web"
      : "Wallonia Business Vouchers: Complete Guide to Funding Your Website",
    description: isFr
      ? "Tout savoir sur les chèques-entreprises en Wallonie : conditions, montants, démarches et types de projets digitaux éligibles. P-XEL vous accompagne de A à Z."
      : "Everything you need to know about Wallonia business vouchers: eligibility, amounts, process and eligible digital projects. P-XEL guides you from A to Z.",
    alternates: { canonical: `${SITE_URL}/${locale}/perspectives/cheques-entreprises-wallonie/` },
    openGraph: { images: [{ url: "/legacy-assets/images/Articles-Digitalisation.webp", width: 1200, height: 630 }] },
  };
}

export default async function ChequesEntreprisesWallonie({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <ArticlePage
      locale={locale}
      title={isFr ? "Chèques-entreprises Wallonie : guide complet pour financer votre site web" : "Wallonia Business Vouchers: Complete Guide to Funding Your Website"}
      slug="cheques-entreprises-wallonie"
      date={isFr ? "27 MAR. 2026" : "MAR. 27, 2026"}
      dateISO="2026-03-27"
      lead={isFr
        ? "Les chèques-entreprises sont l&apos;un des dispositifs les plus accessibles pour financer un projet digital en Wallonie. Site web, application, branding, stratégie digitale : jusqu&apos;à 75 % de vos coûts peuvent être couverts. Ce guide détaille les conditions, les montants, les démarches et la manière dont P-XEL vous accompagne dans le processus."
        : "Wallonia business vouchers are one of the most accessible schemes to fund a digital project in Belgium. Website, application, branding, digital strategy: up to 75% of your costs can be covered. This guide details eligibility, amounts, the process and how P-XEL supports you every step of the way."
      }
      heroImage="/legacy-assets/images/Articles-Digitalisation.webp"
      heroAlt={isFr ? "Chèques-entreprises Wallonie pour financer votre projet digital" : "Wallonia business vouchers to fund your digital project"}
      tags={isFr ? ["Subsides", "Wallonie", "Chèques-entreprises"] : ["Subsidies", "Wallonia", "Business vouchers"]}
      readingTime={isFr ? "8 minutes" : "8 min read"}
      relatedArticles={getRelatedArticles("cheques-entreprises-wallonie", locale as "fr" | "en")}
      relatedServices={getRelatedServices("cheques-entreprises-wallonie")}
    >
      {isFr ? (
        <>
          <p>
            En Wallonie, les <strong>chèques-entreprises</strong> permettent aux PME de financer une partie significative
            de leurs projets de transformation digitale. Que vous souhaitiez créer un site web, développer une application
            ou structurer votre stratégie numérique, ce dispositif régional peut couvrir jusqu&apos;à <strong>75 % des coûts</strong>,
            à condition de travailler avec un prestataire agréé.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              Le principe est simple : la Région wallonne prend en charge une large part du budget de votre projet digital,
              vous ne payez que le solde. C&apos;est un levier concret pour investir dans un site performant, une application
              métier ou une refonte de marque sans supporter l&apos;intégralité du coût.
            </p>
          </div>

          <h2>Qu&apos;est-ce que les chèques-entreprises ?</h2>

          <p>
            Les <strong>chèques-entreprises</strong> sont un mécanisme de subvention mis en place par la Région wallonne
            pour soutenir le développement des PME. Ils couvrent plusieurs thématiques : transformation digitale,
            création d&apos;entreprise, croissance, économie circulaire, internationalisation et plus encore.
          </p>

          <p>
            Dans le cadre de la <strong>transformation digitale</strong>, les chèques permettent de financer des prestations
            de conseil, de conception et de réalisation liées à votre présence en ligne, à vos outils numériques
            ou à votre stratégie digitale. On parle ici de projets concrets : création de site web, développement
            d&apos;application, audit UX, branding, SEO, automatisation de processus.
          </p>

          <h2>Qui peut en bénéficier ?</h2>

          <p>
            Le dispositif s&apos;adresse aux <strong>petites et moyennes entreprises</strong> établies en Wallonie. Voici les
            principales conditions d&apos;éligibilité :
          </p>

          <ul>
            <li>Être une <strong>PME</strong> au sens européen du terme (moins de 250 employés, chiffre d&apos;affaires annuel
              inférieur à 50 millions d&apos;euros ou total du bilan inférieur à 43 millions d&apos;euros).</li>
            <li>Avoir un <strong>siège d&apos;exploitation en Wallonie</strong>.</li>
            <li>Être inscrit à la Banque-Carrefour des Entreprises (BCE).</li>
            <li>Être en règle avec ses obligations sociales et fiscales.</li>
            <li>Ne pas être une entreprise en difficulté au sens de la réglementation européenne.</li>
          </ul>

          <p>
            Les indépendants, les starters, les TPE comme les PME plus établies peuvent introduire une demande.
            Le dispositif est volontairement large pour toucher un maximum d&apos;entreprises wallonnes en croissance
            ou en transformation.
          </p>

          <h2>Quels types de projets sont couverts ?</h2>

          <p>
            Les chèques-entreprises couvrent un éventail large de projets liés à la <strong>digitalisation</strong>.
            Voici les cas de figure les plus courants :
          </p>

          <ul>
            <li><strong>Création de site web</strong> : site vitrine, site corporate, landing page orientée conversion.</li>
            <li><strong>Développement d&apos;application web</strong> : plateforme métier, portail client, outil interne, MVP SaaS.</li>
            <li><strong>E-commerce</strong> : mise en place d&apos;une boutique en ligne avec paiement, gestion de stock et logistique.</li>
            <li><strong>Branding et identité visuelle</strong> : logo, charte graphique, design system appliqué au digital.</li>
            <li><strong>Stratégie digitale</strong> : audit de présence en ligne, plan d&apos;action numérique, positionnement.</li>
            <li><strong>UX/UI design</strong> : conception d&apos;interfaces, wireframes, prototypes, tests utilisateurs.</li>
            <li><strong>SEO et visibilité</strong> : audit technique, stratégie de contenu, référencement local.</li>
          </ul>

          <p>
            En résumé, si votre projet vise à améliorer votre présence numérique, à automatiser des processus
            ou à créer un outil digital pour votre activité, il y a de fortes chances qu&apos;il soit éligible.
          </p>

          <h2>Quel montant peut-on obtenir ?</h2>

          <p>
            Le taux d&apos;intervention varie selon la thématique, mais pour les chèques liés à la <strong>transformation
            digitale</strong>, la Région wallonne prend en charge jusqu&apos;à <strong>75 % du coût</strong> de la prestation,
            avec un plafond qui dépend du type de chèque sollicité.
          </p>

          <ul>
            <li><strong>Chèque diagnostic</strong> : pour un audit ou une analyse de besoins. Intervention jusqu&apos;à 75 %,
              avec un plafond généralement fixé à quelques milliers d&apos;euros.</li>
            <li><strong>Chèque accompagnement</strong> : pour la réalisation du projet (développement, design, intégration).
              Intervention jusqu&apos;à 50 à 75 % selon le type de prestation, avec des plafonds pouvant atteindre
              plusieurs dizaines de milliers d&apos;euros.</li>
          </ul>

          <p>
            Concrètement, pour un projet de <strong>création de site web</strong> à 8 000 euros, la Région peut
            en couvrir jusqu&apos;à 6 000 euros. Pour une <strong>application métier</strong> à 25 000 euros, le subside
            peut représenter plusieurs milliers d&apos;euros d&apos;économie directe. Les montants exacts dépendent
            du type de chèque et du plafond annuel disponible pour votre entreprise.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              Avec les chèques-entreprises, un projet digital de qualité professionnelle devient accessible
              à des budgets qui semblaient hors de portée. C&apos;est l&apos;occasion d&apos;investir dans un site
              ou une application qui génère vraiment de la valeur, sans porter tout le poids financier seul.
            </p>
          </div>

          <h2>Comment ça fonctionne ?</h2>

          <p>
            Le processus est structuré en plusieurs étapes claires. Il demande un peu de rigueur administrative,
            mais reste accessible avec le bon accompagnement.
          </p>

          <h3>1. Vérifier votre éligibilité</h3>
          <p>
            Avant toute chose, assurez-vous que votre entreprise remplit les conditions listées plus haut.
            Vous pouvez vérifier directement sur la plateforme officielle des chèques-entreprises
            ou nous contacter pour un pré-diagnostic rapide.
          </p>

          <h3>2. Choisir un prestataire agréé</h3>
          <p>
            La Région wallonne impose de travailler avec un <strong>prestataire agréé</strong> référencé
            dans leur catalogue. C&apos;est une garantie de qualité pour le bénéficiaire : le prestataire
            a été validé sur ses compétences, ses références et sa méthodologie.
          </p>

          <h3>3. Introduire la demande en ligne</h3>
          <p>
            La demande se fait via la plateforme officielle. Vous sélectionnez le type de chèque,
            le prestataire et vous décrivez brièvement votre projet. L&apos;acceptation est généralement rapide.
          </p>

          <h3>4. Réaliser le projet</h3>
          <p>
            Une fois le chèque accordé, le projet peut démarrer. Le prestataire réalise la mission
            selon le périmètre défini : conception, développement, livraison, accompagnement.
          </p>

          <h3>5. Clôture et paiement</h3>
          <p>
            À la fin du projet, le prestataire soumet les livrables et la facturation sur la plateforme.
            La Région verse sa part directement. Vous ne payez que votre quote-part (25 à 50 % selon le cas).
          </p>

          <h2>P-XEL est-il un prestataire agréé ?</h2>

          <p>
            <strong>Oui.</strong> P-XEL est référencé comme prestataire agréé pour les chèques-entreprises
            en Wallonie. Cela signifie que vous pouvez utiliser vos chèques pour financer vos projets
            avec nous : site web, application, UX/UI, branding, stratégie digitale.
          </p>

          <p>
            Mais au-delà du statut, ce qui fait la différence, c&apos;est l&apos;accompagnement. Nous ne nous
            contentons pas de livrer un site : nous vous aidons à cadrer le projet en amont,
            à préparer la demande de chèque, à structurer le périmètre pour maximiser le financement
            et à gérer les étapes administratives jusqu&apos;à la clôture.
          </p>

          <ul>
            <li><strong>Pré-diagnostic gratuit</strong> : on évalue ensemble l&apos;éligibilité de votre projet.</li>
            <li><strong>Aide à la demande</strong> : on vous guide dans la constitution du dossier.</li>
            <li><strong>Réalisation complète</strong> : design, développement, contenu, SEO, lancement.</li>
            <li><strong>Suivi administratif</strong> : soumission des livrables, facturation conforme, clôture propre.</li>
          </ul>

          <h2>Exemples concrets de projets financés</h2>

          <p>
            Pour donner une idée concrète de ce que les chèques-entreprises permettent, voici quelques
            scénarios typiques :
          </p>

          <h3>Site vitrine pour un cabinet de conseil</h3>
          <p>
            Un cabinet wallon souhaitait un site professionnel avec une identité visuelle forte, un référencement
            local optimisé et une prise de rendez-vous en ligne. Budget total : 7 500 euros. Grâce au chèque,
            le cabinet n&apos;a payé que 1 875 euros de sa poche. Le site génère aujourd&apos;hui des demandes
            de contact qualifiées chaque semaine.
          </p>

          <h3>Application métier pour une PME industrielle</h3>
          <p>
            Une PME avait besoin d&apos;un outil interne pour gérer les commandes, suivre la production et générer
            des rapports. Budget total : 22 000 euros. Le chèque a couvert une part significative du coût,
            rendant le projet viable sans compromettre la trésorerie. L&apos;outil fait gagner plusieurs heures
            par semaine à l&apos;équipe.
          </p>

          <h3>Branding et site web pour une startup</h3>
          <p>
            Une jeune entreprise technologique avait besoin d&apos;une identité visuelle complète et d&apos;un site
            de lancement pour convaincre ses premiers clients et investisseurs. Budget total : 12 000 euros.
            Le financement a permis de s&apos;offrir un travail de qualité professionnelle dès le départ,
            sans sacrifier le budget marketing restant.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              Les chèques-entreprises ne sont pas un bonus administratif abstrait. C&apos;est un levier concret
              pour investir dans un outil digital qui soutient votre croissance, avec un reste à charge
              nettement réduit. Si vous êtes une PME wallonne avec un projet digital en tête,
              c&apos;est le moment d&apos;en profiter.
            </p>
          </div>

          <h2>Parlez-nous de votre projet</h2>

          <p>
            Vous avez un projet de site web, d&apos;application ou de branding ? Vous voulez savoir
            si les chèques-entreprises peuvent le financer ? Contactez-nous pour un premier échange
            sans engagement. On évalue votre éligibilité, on estime le montant du subside possible
            et on vous accompagne dans toutes les démarches.
          </p>

          <p>
            <strong>P-XEL est prestataire agréé.</strong> On s&apos;occupe du projet et de l&apos;administratif.
            Vous vous concentrez sur votre activité.
          </p>
        </>
      ) : (
        <>
          <p>
            In Wallonia, <strong>business vouchers</strong> (chèques-entreprises) allow SMEs to fund a significant
            portion of their digital transformation projects. Whether you want to create a website, develop an
            application or structure your digital strategy, this regional scheme can cover up to <strong>75% of costs</strong>,
            provided you work with an approved service provider.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              The principle is straightforward: the Walloon Region covers a large share of your digital project
              budget, and you only pay the remainder. It is a concrete lever to invest in a high-performance
              website, a business application or a brand overhaul without bearing the full financial burden alone.
            </p>
          </div>

          <h2>What are business vouchers?</h2>

          <p>
            <strong>Business vouchers</strong> (chèques-entreprises) are a subsidy mechanism set up by the Walloon Region
            to support SME development. They cover several themes: digital transformation, business creation,
            growth, circular economy, internationalization and more.
          </p>

          <p>
            For <strong>digital transformation</strong>, the vouchers fund consulting, design and implementation services
            related to your online presence, digital tools or digital strategy. We are talking about concrete
            projects: website creation, application development, UX audit, branding, SEO, process automation.
          </p>

          <h2>Who is eligible?</h2>

          <p>
            The scheme targets <strong>small and medium-sized enterprises</strong> based in Wallonia. Here are the main
            eligibility conditions:
          </p>

          <ul>
            <li>Be an <strong>SME</strong> as defined by the European Union (fewer than 250 employees, annual turnover
              below 50 million euros or total balance sheet below 43 million euros).</li>
            <li>Have an <strong>operational headquarters in Wallonia</strong>.</li>
            <li>Be registered with the Crossroads Bank for Enterprises (BCE).</li>
            <li>Be in good standing with social and tax obligations.</li>
            <li>Not be a company in difficulty as defined by European regulations.</li>
          </ul>

          <p>
            Freelancers, startups, micro-businesses and more established SMEs can all apply.
            The scheme is deliberately broad to reach as many growing or transforming Walloon businesses as possible.
          </p>

          <h2>What types of projects are covered?</h2>

          <p>
            Business vouchers cover a wide range of <strong>digitalization</strong> projects. Here are the most
            common use cases:
          </p>

          <ul>
            <li><strong>Website creation</strong>: showcase site, corporate site, conversion-oriented landing page.</li>
            <li><strong>Web application development</strong>: business platform, client portal, internal tool, SaaS MVP.</li>
            <li><strong>E-commerce</strong>: setting up an online store with payment, inventory management and logistics.</li>
            <li><strong>Branding and visual identity</strong>: logo, brand guidelines, design system applied to digital.</li>
            <li><strong>Digital strategy</strong>: online presence audit, digital action plan, positioning.</li>
            <li><strong>UX/UI design</strong>: interface design, wireframes, prototypes, user testing.</li>
            <li><strong>SEO and visibility</strong>: technical audit, content strategy, local search optimization.</li>
          </ul>

          <p>
            In short, if your project aims to improve your digital presence, automate processes
            or create a digital tool for your business, there is a strong chance it qualifies.
          </p>

          <h2>How much funding can you get?</h2>

          <p>
            The subsidy rate varies by theme, but for vouchers related to <strong>digital transformation</strong>,
            the Walloon Region covers up to <strong>75% of the service cost</strong>, with a ceiling that depends
            on the type of voucher requested.
          </p>

          <ul>
            <li><strong>Diagnostic voucher</strong>: for an audit or needs analysis. Coverage up to 75%,
              with a ceiling typically set at a few thousand euros.</li>
            <li><strong>Support voucher</strong>: for project execution (development, design, integration).
              Coverage of 50 to 75% depending on the type of service, with ceilings that can reach
              several tens of thousands of euros.</li>
          </ul>

          <p>
            In practice, for a <strong>website creation</strong> project costing 8,000 euros, the Region can
            cover up to 6,000 euros. For a <strong>business application</strong> at 25,000 euros, the subsidy
            can represent several thousand euros in direct savings. Exact amounts depend on the voucher type
            and the annual ceiling available for your company.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              With business vouchers, a professional-quality digital project becomes accessible at budgets
              that once seemed out of reach. It is the opportunity to invest in a website or application
              that truly generates value, without bearing the full financial weight alone.
            </p>
          </div>

          <h2>How does the process work?</h2>

          <p>
            The process is structured in several clear steps. It requires some administrative rigor,
            but remains accessible with the right support.
          </p>

          <h3>1. Check your eligibility</h3>
          <p>
            First, make sure your company meets the conditions listed above.
            You can verify directly on the official business vouchers platform
            or contact us for a quick pre-assessment.
          </p>

          <h3>2. Choose an approved service provider</h3>
          <p>
            The Walloon Region requires you to work with an <strong>approved service provider</strong> listed
            in their catalog. This is a quality guarantee for the beneficiary: the provider has been
            validated on their skills, references and methodology.
          </p>

          <h3>3. Submit the application online</h3>
          <p>
            The application is made through the official platform. You select the voucher type,
            the service provider and briefly describe your project. Approval is generally fast.
          </p>

          <h3>4. Execute the project</h3>
          <p>
            Once the voucher is granted, the project can begin. The service provider carries out the mission
            according to the defined scope: design, development, delivery, support.
          </p>

          <h3>5. Closure and payment</h3>
          <p>
            At the end of the project, the provider submits deliverables and invoicing through the platform.
            The Region pays its share directly. You only pay your portion (25 to 50% depending on the case).
          </p>

          <h2>Is P-XEL an approved provider?</h2>

          <p>
            <strong>Yes.</strong> P-XEL is listed as an approved service provider for business vouchers
            in Wallonia. This means you can use your vouchers to fund your projects with us:
            website, application, UX/UI, branding, digital strategy.
          </p>

          <p>
            But beyond the status, what makes the difference is the support. We do not just deliver
            a website: we help you scope the project upfront, prepare the voucher application,
            structure the scope to maximize funding and manage the administrative steps through to closure.
          </p>

          <ul>
            <li><strong>Free pre-assessment</strong>: we evaluate your project&apos;s eligibility together.</li>
            <li><strong>Application guidance</strong>: we walk you through the file preparation.</li>
            <li><strong>Full execution</strong>: design, development, content, SEO, launch.</li>
            <li><strong>Administrative follow-up</strong>: deliverable submission, compliant invoicing, clean closure.</li>
          </ul>

          <h2>Concrete examples of funded projects</h2>

          <p>
            To give a concrete idea of what business vouchers make possible, here are a few
            typical scenarios:
          </p>

          <h3>Showcase site for a consulting firm</h3>
          <p>
            A Walloon consulting firm wanted a professional website with a strong visual identity,
            optimized local SEO and online appointment booking. Total budget: 7,500 euros. Thanks to the voucher,
            the firm only paid 1,875 euros out of pocket. The site now generates qualified contact requests
            every week.
          </p>

          <h3>Business application for an industrial SME</h3>
          <p>
            An SME needed an internal tool to manage orders, track production and generate reports.
            Total budget: 22,000 euros. The voucher covered a significant share of the cost,
            making the project viable without compromising cash flow. The tool saves the team
            several hours per week.
          </p>

          <h3>Branding and website for a startup</h3>
          <p>
            A young tech company needed a complete visual identity and a launch site to convince
            its first clients and investors. Total budget: 12,000 euros. The funding made it possible
            to afford professional-quality work from the start, without sacrificing the remaining
            marketing budget.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              Business vouchers are not some abstract administrative bonus. They are a concrete lever
              to invest in a digital tool that supports your growth, with a significantly reduced
              out-of-pocket cost. If you are a Walloon SME with a digital project in mind,
              now is the time to take advantage.
            </p>
          </div>

          <h2>Tell us about your project</h2>

          <p>
            Do you have a website, application or branding project? Want to know if business vouchers
            can fund it? Get in touch for a no-commitment initial conversation. We assess your eligibility,
            estimate the possible subsidy amount and support you through every step.
          </p>

          <p>
            <strong>P-XEL is an approved provider.</strong> We handle the project and the paperwork.
            You focus on your business.
          </p>
        </>
      )}
    </ArticlePage>
  );
}
