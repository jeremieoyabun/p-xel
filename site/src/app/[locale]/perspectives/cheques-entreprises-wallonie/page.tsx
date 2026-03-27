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
      ? "Chèques-entreprises Wallonie : guide complet pour financer votre site web"
      : "Wallonia Business Vouchers: complete guide to funding your website",
    description: isFr
      ? "Chèques-entreprises Wallonie : jusqu'à 75 % de subsides pour votre site web, UX, stratégie digitale. Conditions, montants, démarches et conseils concrets."
      : "Wallonia Business Vouchers: up to 75% subsidies for your website, UX, digital strategy. Conditions, amounts, process and practical advice.",
    alternates: { canonical: `${SITE_URL}/${locale}/perspectives/cheques-entreprises-wallonie/` },
    openGraph: { images: [{ url: "/images/perspectives/cheques-wallonie.webp", width: 1200, height: 630 }] },
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
      title={isFr
        ? "Chèques-entreprises Wallonie : guide complet pour financer votre site web"
        : "Wallonia Business Vouchers: complete guide to funding your website"
      }
      slug="cheques-entreprises-wallonie"
      date={isFr ? "27 MARS 2026" : "MAR. 27, 2026"}
      dateISO="2026-03-27"
      lead={isFr
        ? "Les chèques-entreprises sont le principal levier de financement public pour les PME wallonnes qui veulent investir dans un site web, une stratégie digitale ou un accompagnement UX. Jusqu'à 75 % de remboursement sur les prestations éligibles. Ce guide détaille les conditions, les montants, la procédure pas à pas et les meilleures pratiques pour maximiser votre subside."
        : "Business vouchers are the main public funding lever for Walloon SMEs looking to invest in a website, digital strategy or UX consulting. Up to 75% reimbursement on eligible services. This guide covers the conditions, amounts, step-by-step process and best practices to maximize your subsidy."
      }
      heroImage="/images/perspectives/cheques-wallonie.webp"
      heroAlt={isFr
        ? "Chèques-entreprises Wallonie pour financer un site web"
        : "Wallonia business vouchers to fund a website"
      }
      tags={isFr ? ["Subsides", "Wallonie", "Site web"] : ["Subsidies", "Wallonia", "Website"]}
      readingTime={isFr ? "10 minutes" : "10 min read"}
      relatedArticles={getRelatedArticles("cheques-entreprises-wallonie", locale as "fr" | "en")}
      relatedServices={getRelatedServices("cheques-entreprises-wallonie")}
    >
      {isFr ? (
        <>
          <p>
            Tu es indépendant, PME ou ASBL en Wallonie et tu veux créer ou refaire ton site web ?
            Bonne nouvelle : la Région wallonne propose un système de <strong>chèques-entreprises</strong>{" "}
            qui peut couvrir une part importante de ton investissement digital. Le problème, c&#39;est que
            le dispositif reste mal connu, souvent mal utilisé, et beaucoup d&#39;entreprises passent à côté
            de milliers d&#39;euros de subsides simplement par manque d&#39;information.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              Avec les chèques-entreprises, une PME wallonne peut obtenir jusqu&#39;à{" "}
              <strong>75 % de remboursement</strong> sur des prestations de conseil en stratégie digitale,
              création de site web, UX design et accompagnement numérique. Le tout via une plateforme
              en ligne, avec un processus structuré et des prestataires labellisés.
            </p>
          </div>

          <h2>Qu&#39;est-ce que les chèques-entreprises ?</h2>

          <p>
            Les <strong>chèques-entreprises</strong> sont un dispositif de la Région wallonne qui permet
            aux PME, indépendants et ASBL de bénéficier d&#39;un accompagnement professionnel subsidié.
            Concrètement, la Wallonie prend en charge une partie des honoraires d&#39;un prestataire
            labellisé pour des missions de conseil, d&#39;audit ou de stratégie.
          </p>

          <p>
            Le système fonctionne via une <strong>plateforme en ligne</strong> (cheques-entreprises.be)
            où l&#39;entreprise sélectionne le type de chèque adapté à son besoin, choisit un prestataire
            labellisé et soumet sa demande. Une fois la demande validée, l&#39;entreprise paie uniquement
            sa quote-part (la part non subsidiée) et le prestataire reçoit le complément directement
            de la Région.
          </p>

          <p>
            Ce n&#39;est pas un crédit d&#39;impôt ni une prime après coup : c&#39;est un{" "}
            <strong>financement direct et immédiat</strong> qui réduit le coût réel de ta prestation
            dès le départ.
          </p>

          <h2>Qui est éligible aux chèques-entreprises ?</h2>

          <p>
            Les conditions d&#39;éligibilité sont accessibles pour la grande majorité des entreprises
            wallonnes :
          </p>

          <ul>
            <li>être une <strong>PME au sens européen</strong> (moins de 250 employés, chiffre d&#39;affaires inférieur à 50 millions d&#39;euros) ;</li>
            <li>avoir un <strong>siège d&#39;exploitation en Wallonie</strong> ;</li>
            <li>être inscrit à la <strong>Banque-Carrefour des Entreprises</strong> (BCE) ;</li>
            <li>ne pas être une entreprise en difficulté au sens européen ;</li>
            <li>respecter le <strong>plafond de minimis</strong> (300 000 euros sur 3 exercices fiscaux).</li>
          </ul>

          <p>
            Les <strong>indépendants en personne physique</strong>, les <strong>ASBL</strong> et les{" "}
            <strong>starters</strong> sont également éligibles, ce qui élargit considérablement le
            public concerné. En revanche, certaines activités sont exclues (secteur financier,
            immobilier, certaines activités numériques pures selon les codes NACE).
          </p>

          <h3>Un point souvent négligé : le test PME</h3>

          <p>
            Avant de soumettre ta demande, la plateforme effectue un <strong>test PME automatique</strong>{" "}
            basé sur les données de la BCE. Si ton entreprise fait partie d&#39;un groupe ou a des liens
            avec d&#39;autres entités, les seuils PME s&#39;appliquent au niveau consolidé. C&#39;est un point
            qui bloque parfois des dossiers : vérifie ta situation en amont.
          </p>

          <h2>Combien peut-on obtenir ? Les montants concrets</h2>

          <p>
            Les taux de remboursement varient selon le type de chèque, mais pour les prestations
            liées au digital et au web, voici les montants clés :
          </p>

          <h3>Chèque Maturité Numérique</h3>
          <ul>
            <li><strong>Taux de base :</strong> 50 % des honoraires HTVA du prestataire labellisé.</li>
            <li><strong>Taux majoré :</strong> jusqu&#39;à 75 % pour les starters (entreprise de moins de 5 ans) ou les petites entreprises répondant à certains critères.</li>
            <li><strong>Plafond :</strong> 50 000 euros HTVA sur 3 ans par bénéficiaire.</li>
          </ul>

          <h3>Chèque stratégie numérique et croissance</h3>
          <ul>
            <li><strong>Taux :</strong> 50 % à 75 % selon le profil de l&#39;entreprise.</li>
            <li><strong>Plafond global chèques numériques :</strong> 70 000 euros sur 3 ans (maturité + cybersécurité combinés).</li>
            <li><strong>Plafond global chèques-entreprises :</strong> 100 000 euros HTVA par année civile, toutes thématiques confondues.</li>
          </ul>

          <div className={articleStyles.highlight}>
            <p>
              <strong>Exemple concret :</strong> une PME wallonne investit 10 000 euros HTVA dans une
              mission de stratégie digitale et de cahier des charges pour un nouveau site web. Avec
              un taux de 75 % (starter), elle ne paie que 2 500 euros de sa poche. La Région wallonne
              couvre les 7 500 euros restants.
            </p>
          </div>

          <h2>Quels chèques pour un projet web ?</h2>

          <p>
            C&#39;est la question la plus fréquente. Les chèques-entreprises couvrent plusieurs
            thématiques, mais pour un projet de site web ou de digitalisation, trois types de
            chèques sont particulièrement pertinents :
          </p>

          <h3>1. Chèque Maturité Numérique</h3>
          <p>
            C&#39;est le chèque le plus utilisé pour les projets web. Il finance :
          </p>
          <ul>
            <li>le <strong>diagnostic de ta maturité numérique</strong> (état des lieux de tes outils, site, processus) ;</li>
            <li>la définition d&#39;un <strong>plan d&#39;actions digital</strong> priorisé ;</li>
            <li>la rédaction d&#39;un <strong>cahier des charges</strong> pour un site web, un e-commerce ou un outil métier ;</li>
            <li>l&#39;<strong>accompagnement UX/UI</strong> : architecture de l&#39;information, wireframes, parcours utilisateur ;</li>
            <li>la <strong>stratégie SEO</strong> : audit sémantique, plan de contenu, architecture du site ;</li>
            <li>le pilotage de projet et le suivi de la mise en œuvre.</li>
          </ul>

          <h3>2. Chèque Stratégie et Croissance</h3>
          <p>
            Pour les projets plus larges qui intègrent le web dans une réflexion stratégique globale :
          </p>
          <ul>
            <li>définition du <strong>positionnement digital</strong> de l&#39;entreprise ;</li>
            <li>stratégie d&#39;acquisition en ligne (SEO, SEA, réseaux sociaux) ;</li>
            <li>plan de croissance intégrant les outils numériques.</li>
          </ul>

          <h3>3. Chèque Cybersécurité</h3>
          <p>
            Si ton projet inclut la sécurisation de ton site ou de tes données :
          </p>
          <ul>
            <li>audit de sécurité de ton infrastructure web ;</li>
            <li>mise en conformité RGPD ;</li>
            <li>plan de protection des données et de continuité d&#39;activité.</li>
          </ul>

          <p>
            <strong>Important :</strong> les chèques financent le <strong>conseil et l&#39;accompagnement</strong>,
            pas le développement technique pur (le code, l&#39;hébergement, les licences logicielles).
            En pratique, tu fais financer la stratégie, l&#39;architecture, le cahier des charges et le
            pilotage, puis tu finances le développement via tes fonds propres.
          </p>

          <h2>La procédure pas à pas</h2>

          <p>
            Le processus est entièrement dématérialisé. Voici les étapes concrètes :
          </p>

          <h3>Étape 1 : définir ton besoin</h3>
          <p>
            Avant toute démarche administrative, clarifie ce que tu veux accomplir :
          </p>
          <ul>
            <li>création d&#39;un nouveau site ou refonte de l&#39;existant ?</li>
            <li>quel périmètre : site vitrine, e-commerce, application métier ?</li>
            <li>as-tu besoin d&#39;une stratégie en amont ou directement d&#39;un cahier des charges ?</li>
            <li>quel est ton budget global (la partie subsidiée + ta quote-part) ?</li>
          </ul>

          <h3>Étape 2 : choisir un prestataire labellisé</h3>
          <p>
            C&#39;est une condition non négociable : le prestataire doit être{" "}
            <strong>labellisé par la Région wallonne</strong> pour le type de chèque concerné.
            Tu peux consulter la liste des prestataires labellisés sur la plateforme
            cheques-entreprises.be. Vérifie que le prestataire est labellisé pour la bonne
            thématique (maturité numérique, stratégie, cybersécurité).
          </p>

          <p>
            <strong>P-XEL est prestataire labellisé</strong> pour les chèques-entreprises en Wallonie.
            Nous accompagnons les PME wallonnes dans la définition de leur stratégie digitale,
            la rédaction de cahiers des charges, l&#39;architecture UX/UI et le pilotage de projets web.
          </p>

          <h3>Étape 3 : créer ton compte et soumettre la demande</h3>
          <ul>
            <li>crée un compte sur <strong>cheques-entreprises.be</strong> (avec ton numéro BCE) ;</li>
            <li>sélectionne le type de chèque adapté ;</li>
            <li>renseigne les informations sur ta mission (description, objectifs, planning) ;</li>
            <li>sélectionne ton prestataire labellisé ;</li>
            <li>soumets la demande en ligne.</li>
          </ul>

          <h3>Étape 4 : validation et paiement de ta quote-part</h3>
          <p>
            La plateforme vérifie automatiquement ton éligibilité (test PME, minimis, NACE).
            Une fois la demande validée, tu reçois une notification et tu paies ta quote-part
            (25 % à 50 % selon le taux obtenu). Le prestataire peut ensuite démarrer la mission.
          </p>

          <h3>Étape 5 : réalisation de la mission et clôture</h3>
          <p>
            La prestation doit être réalisée dans les <strong>12 mois</strong> suivant l&#39;accord.
            À la fin de la mission, le prestataire clôture le chèque sur la plateforme et
            reçoit le paiement du subside directement de la Région.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              <strong>Règle d&#39;or :</strong> ne commence jamais la mission avant d&#39;avoir soumis
              ta demande sur la plateforme. Les prestations réalisées avant la date de demande
              ne sont pas éligibles. C&#39;est la première cause de refus.
            </p>
          </div>

          <h2>Comment P-XEL accompagne les PME wallonnes</h2>

          <p>
            En tant que <strong>prestataire labellisé</strong>, P-XEL accompagne les entreprises
            wallonnes sur toute la partie éligible aux chèques-entreprises :
          </p>

          <ul>
            <li><strong>Audit et diagnostic numérique :</strong> état des lieux de ton site actuel, de tes outils et de tes processus.</li>
            <li><strong>Stratégie digitale :</strong> positionnement, architecture du site, plan SEO, stratégie de contenu.</li>
            <li><strong>Cahier des charges :</strong> spécifications fonctionnelles et techniques pour ton futur site ou application.</li>
            <li><strong>Architecture UX/UI :</strong> wireframes, parcours utilisateur, maquettes haute fidélité.</li>
            <li><strong>Pilotage de projet :</strong> suivi de la mise en œuvre, coordination avec les développeurs, contrôle qualité.</li>
          </ul>

          <p>
            L&#39;avantage de travailler avec un studio comme P-XEL, c&#39;est que la phase de conseil
            subsidiée débouche naturellement sur la phase de réalisation. Tu ne perds pas de temps
            à briefer un deuxième prestataire : le studio qui a pensé la stratégie et l&#39;architecture
            est le même qui construit le produit final.
          </p>

          <figure style={{ margin: '2rem 0' }}>
            <Image
              src="/images/case-studies/greenmood-hero.webp"
              alt="Plateforme Greenmood, projet finance via cheques-entreprises et realise par P-XEL"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <figcaption style={{ fontSize: '0.875rem', color: '#8A8A9A', marginTop: '0.5rem' }}>
              Greenmood : un projet de plateforme web incluant strategie, UX/UI et developpement.
            </figcaption>
          </figure>

          <h2>Conseils pour maximiser ton subside</h2>

          <p>
            Après avoir accompagné de nombreuses PME dans ce processus, voici les bonnes pratiques
            qui font la différence :
          </p>

          <h3>1. Sépare clairement conseil et développement</h3>
          <p>
            Le chèque finance le conseil, pas le code. Structure ta mission pour que le périmètre
            subsidié soit clairement identifié : diagnostic, stratégie, cahier des charges, wireframes,
            accompagnement. Le développement technique est financé séparément, sur tes fonds propres.
          </p>

          <h3>2. Prépare un descriptif de mission précis</h3>
          <p>
            Les demandes vagues se font rejeter. Décris concrètement ce que le prestataire va faire,
            les livrables attendus, le planning et les objectifs mesurables. Un bon descriptif prend
            30 minutes à rédiger et fait gagner des semaines sur le traitement du dossier.
          </p>

          <h3>3. Vérifie ton éligibilité en amont</h3>
          <p>
            Avant de lancer le processus, assure-toi que :
          </p>
          <ul>
            <li>tes codes NACE sont éligibles ;</li>
            <li>tu n&#39;as pas dépassé le plafond de minimis ;</li>
            <li>ton entreprise passe le test PME (y compris en cas de liens avec d&#39;autres entités) ;</li>
            <li>ton prestataire est bien labellisé pour la bonne thématique.</li>
          </ul>

          <h3>4. Combine les chèques si nécessaire</h3>
          <p>
            Tu peux utiliser plusieurs types de chèques pour un même projet global. Par exemple :
            un chèque maturité numérique pour le diagnostic et le cahier des charges, puis un
            chèque cybersécurité pour l&#39;audit de sécurité de ton futur site. L&#39;important est
            de respecter les plafonds cumulés.
          </p>

          <h3>5. Pense au timing</h3>
          <p>
            Les validations prennent en général quelques jours à quelques semaines. Intègre
            ce délai dans ton planning global. Si tu veux lancer ton site en septembre, commence
            les démarches chèques-entreprises en mai ou juin au plus tard.
          </p>

          <figure style={{ margin: '2rem 0' }}>
            <Image
              src="/images/case-studies/arduenna-hero.webp"
              alt="Site e-commerce Arduenna, exemple de projet web realise par P-XEL"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <figcaption style={{ fontSize: '0.875rem', color: '#8A8A9A', marginTop: '0.5rem' }}>
              Arduenna : un site e-commerce sur mesure, de la strategie au lancement.
            </figcaption>
          </figure>

          <h2>Questions fréquentes</h2>

          <h3>Le chèque finance-t-il la création du site en elle-même ?</h3>
          <p>
            Non. Le chèque finance la <strong>partie conseil</strong> : stratégie, cahier des charges,
            architecture UX, pilotage. Le développement technique (code, intégration, mise en ligne)
            est à ta charge. Mais la phase de conseil représente souvent 30 à 40 % du budget total
            d&#39;un projet web, ce qui reste un levier financier considérable.
          </p>

          <h3>Faut-il une facture séparée pour la partie subsidiée ?</h3>
          <p>
            Oui. Le prestataire labellisé facture ses prestations via la plateforme
            chèques-entreprises. Les montants doivent correspondre exactement à ce qui a été
            déclaré dans la demande. La facturation est gérée directement via le système.
          </p>

          <h3>Peut-on cumuler les chèques-entreprises avec d&#39;autres aides ?</h3>
          <p>
            Oui, dans la limite du plafond de minimis (300 000 euros sur 3 exercices fiscaux).
            Les chèques-entreprises sont cumulables avec d&#39;autres dispositifs wallons ou fédéraux,
            tant que le cumul ne dépasse pas ce seuil. C&#39;est un point à vérifier si tu as déjà
            bénéficié d&#39;autres aides publiques récemment.
          </p>

          <h3>Combien de temps dure le processus complet ?</h3>
          <p>
            De la demande en ligne à la clôture de la mission, il faut compter entre{" "}
            <strong>3 et 12 mois</strong> selon l&#39;ampleur du projet. La validation de la demande
            prend généralement quelques jours. La mission elle-même doit être finalisée dans les
            12 mois suivant l&#39;accord.
          </p>

          <h2>Prêt à financer ton projet web via les chèques-entreprises ?</h2>

          <p>
            Si tu es basé en Wallonie et que tu envisages de créer ou refaire ton site web, les
            chèques-entreprises sont un levier financier concret et accessible. Le dispositif
            existe, les fonds sont disponibles, et la procédure est plus simple qu&#39;on ne le pense.
          </p>

          <p>
            La clé, c&#39;est de bien structurer ton projet en amont : séparer le conseil du
            développement, choisir un prestataire labellisé qui comprend ton activité, et
            déposer une demande claire avec des objectifs précis.
          </p>

          <p>
            Chez P-XEL, nous accompagnons les PME wallonnes de A à Z : du diagnostic initial
            au site livré. La phase de stratégie et de conception est éligible aux
            chèques-entreprises. La phase de réalisation est assurée par la même équipe,
            sans perte de temps ni de contexte.
          </p>

          <p>
            Si tu as un projet digital en 2026, le plus malin est de commencer par explorer
            les chèques-entreprises <strong>avant de signer quoi que ce soit</strong>. Tu pourrais
            économiser plusieurs milliers d&#39;euros sur un projet que tu allais de toute façon réaliser.
          </p>
        </>
      ) : (
        <>
          <p>
            Are you a freelancer, SME or non-profit in Wallonia looking to build or redesign your
            website? Good news: the Walloon Region offers a{" "}
            <strong>business voucher system (chèques-entreprises)</strong> that can cover a
            significant portion of your digital investment. The problem is that the scheme remains
            poorly understood, often misused, and many businesses miss out on thousands of euros
            in subsidies simply due to lack of information.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              With business vouchers, a Walloon SME can receive up to{" "}
              <strong>75% reimbursement</strong> on consulting services for digital strategy,
              website creation, UX design and digital guidance. All through an online platform,
              with a structured process and certified providers.
            </p>
          </div>

          <h2>What are business vouchers (chèques-entreprises)?</h2>

          <p>
            <strong>Business vouchers</strong> are a Walloon Region scheme that allows SMEs,
            freelancers and non-profits to benefit from subsidized professional guidance.
            In practice, Wallonia covers part of the fees charged by a certified provider
            for consulting, auditing or strategy missions.
          </p>

          <p>
            The system works through an <strong>online platform</strong> (cheques-entreprises.be)
            where the business selects the appropriate voucher type, chooses a certified provider
            and submits the application. Once approved, the business only pays its share
            (the non-subsidized portion) and the provider receives the balance directly
            from the Region.
          </p>

          <p>
            This is not a tax credit or a retroactive premium: it is{" "}
            <strong>direct and immediate funding</strong> that reduces the actual cost of your
            service from the start.
          </p>

          <h2>Who is eligible for business vouchers?</h2>

          <p>
            Eligibility conditions are accessible for the vast majority of Walloon businesses:
          </p>

          <ul>
            <li>be an <strong>SME under the European definition</strong> (fewer than 250 employees, turnover below 50 million euros);</li>
            <li>have an <strong>operating site in Wallonia</strong>;</li>
            <li>be registered with the <strong>Crossroads Bank for Enterprises</strong> (BCE);</li>
            <li>not be a company in difficulty under the European definition;</li>
            <li>comply with the <strong>de minimis ceiling</strong> (300,000 euros over 3 fiscal years).</li>
          </ul>

          <p>
            <strong>Sole proprietors</strong>, <strong>non-profits</strong> and{" "}
            <strong>startups</strong> are also eligible, which significantly broadens the target
            audience. However, some activities are excluded (financial sector, real estate,
            certain pure digital activities depending on NACE codes).
          </p>

          <h3>An often overlooked point: the SME test</h3>

          <p>
            Before submitting your application, the platform runs an <strong>automatic SME test</strong>{" "}
            based on BCE data. If your company is part of a group or has links with other entities,
            the SME thresholds apply at the consolidated level. This sometimes blocks applications:
            check your situation beforehand.
          </p>

          <h2>How much can you get? Concrete amounts</h2>

          <p>
            Reimbursement rates vary by voucher type, but for digital and web-related services,
            here are the key figures:
          </p>

          <h3>Digital Maturity Voucher</h3>
          <ul>
            <li><strong>Base rate:</strong> 50% of the certified provider&#39;s fees excl. VAT.</li>
            <li><strong>Enhanced rate:</strong> up to 75% for startups (companies under 5 years old) or small businesses meeting certain criteria.</li>
            <li><strong>Cap:</strong> 50,000 euros excl. VAT over 3 years per beneficiary.</li>
          </ul>

          <h3>Digital strategy and growth voucher</h3>
          <ul>
            <li><strong>Rate:</strong> 50% to 75% depending on the company profile.</li>
            <li><strong>Overall digital voucher cap:</strong> 70,000 euros over 3 years (maturity + cybersecurity combined).</li>
            <li><strong>Overall business voucher cap:</strong> 100,000 euros excl. VAT per calendar year, all themes combined.</li>
          </ul>

          <div className={articleStyles.highlight}>
            <p>
              <strong>Concrete example:</strong> a Walloon SME invests 10,000 euros excl. VAT in a
              digital strategy and specification mission for a new website. With a 75% rate (startup),
              the company only pays 2,500 euros out of pocket. The Walloon Region covers the
              remaining 7,500 euros.
            </p>
          </div>

          <h2>Which vouchers apply to web projects?</h2>

          <p>
            This is the most common question. Business vouchers cover several themes, but for
            a website or digitalization project, three voucher types are particularly relevant:
          </p>

          <h3>1. Digital Maturity Voucher</h3>
          <p>
            This is the most commonly used voucher for web projects. It funds:
          </p>
          <ul>
            <li><strong>digital maturity assessment</strong> (review of your tools, website, processes);</li>
            <li>definition of a prioritized <strong>digital action plan</strong>;</li>
            <li>drafting of <strong>project specifications</strong> for a website, e-commerce store or business tool;</li>
            <li><strong>UX/UI guidance</strong>: information architecture, wireframes, user journeys;</li>
            <li><strong>SEO strategy</strong>: semantic audit, content plan, site architecture;</li>
            <li>project management and implementation oversight.</li>
          </ul>

          <h3>2. Strategy and Growth Voucher</h3>
          <p>
            For broader projects that integrate web within a global strategic vision:
          </p>
          <ul>
            <li>defining the company&#39;s <strong>digital positioning</strong>;</li>
            <li>online acquisition strategy (SEO, SEA, social media);</li>
            <li>growth plan integrating digital tools.</li>
          </ul>

          <h3>3. Cybersecurity Voucher</h3>
          <p>
            If your project includes securing your website or data:
          </p>
          <ul>
            <li>security audit of your web infrastructure;</li>
            <li>GDPR compliance;</li>
            <li>data protection and business continuity planning.</li>
          </ul>

          <p>
            <strong>Important:</strong> vouchers fund <strong>consulting and guidance</strong>,
            not pure technical development (code, hosting, software licenses).
            In practice, you get funding for strategy, architecture, specifications and
            project management. Technical development is funded separately, from your own resources.
          </p>

          <h2>Step-by-step process</h2>

          <p>
            The entire process is handled online. Here are the concrete steps:
          </p>

          <h3>Step 1: define your needs</h3>
          <p>
            Before any administrative steps, clarify what you want to achieve:
          </p>
          <ul>
            <li>creating a new site or redesigning an existing one?</li>
            <li>what scope: showcase site, e-commerce, business application?</li>
            <li>do you need upstream strategy or directly a specification document?</li>
            <li>what is your total budget (subsidized portion + your share)?</li>
          </ul>

          <h3>Step 2: choose a certified provider</h3>
          <p>
            This is a non-negotiable condition: the provider must be{" "}
            <strong>certified by the Walloon Region</strong> for the relevant voucher type.
            You can browse the list of certified providers on the cheques-entreprises.be
            platform. Make sure the provider is certified for the right theme (digital maturity,
            strategy, cybersecurity).
          </p>

          <p>
            <strong>P-XEL is a certified provider</strong> for business vouchers in Wallonia.
            We support Walloon SMEs in defining their digital strategy, drafting project
            specifications, UX/UI architecture and web project management.
          </p>

          <h3>Step 3: create your account and submit the application</h3>
          <ul>
            <li>create an account on <strong>cheques-entreprises.be</strong> (with your BCE number);</li>
            <li>select the appropriate voucher type;</li>
            <li>fill in mission details (description, objectives, timeline);</li>
            <li>select your certified provider;</li>
            <li>submit the application online.</li>
          </ul>

          <h3>Step 4: validation and payment of your share</h3>
          <p>
            The platform automatically verifies your eligibility (SME test, de minimis, NACE).
            Once approved, you receive a notification and pay your share (25% to 50% depending
            on the rate obtained). The provider can then start the mission.
          </p>

          <h3>Step 5: mission delivery and closure</h3>
          <p>
            The service must be delivered within <strong>12 months</strong> of approval.
            At the end of the mission, the provider closes the voucher on the platform and
            receives the subsidy payment directly from the Region.
          </p>

          <div className={articleStyles.highlight}>
            <p>
              <strong>Golden rule:</strong> never start the mission before submitting your
              application on the platform. Services delivered before the application date are
              not eligible. This is the number one cause of rejection.
            </p>
          </div>

          <h2>How P-XEL supports Walloon SMEs</h2>

          <p>
            As a <strong>certified provider</strong>, P-XEL supports Walloon businesses on
            all aspects eligible for business vouchers:
          </p>

          <ul>
            <li><strong>Digital audit and assessment:</strong> review of your current site, tools and processes.</li>
            <li><strong>Digital strategy:</strong> positioning, site architecture, SEO plan, content strategy.</li>
            <li><strong>Project specifications:</strong> functional and technical specifications for your future site or application.</li>
            <li><strong>UX/UI architecture:</strong> wireframes, user journeys, high-fidelity mockups.</li>
            <li><strong>Project management:</strong> implementation oversight, developer coordination, quality control.</li>
          </ul>

          <p>
            The advantage of working with a studio like P-XEL is that the subsidized consulting
            phase naturally leads into the execution phase. You don&#39;t waste time briefing a
            second provider: the studio that designed the strategy and architecture is the same
            one that builds the final product.
          </p>

          <figure style={{ margin: '2rem 0' }}>
            <Image
              src="/images/case-studies/greenmood-hero.webp"
              alt="Greenmood platform, a web project including strategy, UX/UI and development by P-XEL"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <figcaption style={{ fontSize: '0.875rem', color: '#8A8A9A', marginTop: '0.5rem' }}>
              Greenmood: a web platform project including strategy, UX/UI and development.
            </figcaption>
          </figure>

          <h2>Tips to maximize your subsidy</h2>

          <p>
            After guiding many SMEs through this process, here are the best practices that
            make the difference:
          </p>

          <h3>1. Clearly separate consulting and development</h3>
          <p>
            The voucher funds consulting, not code. Structure your mission so the subsidized
            scope is clearly identified: assessment, strategy, specifications, wireframes,
            guidance. Technical development is funded separately, from your own resources.
          </p>

          <h3>2. Prepare a precise mission description</h3>
          <p>
            Vague applications get rejected. Describe concretely what the provider will do,
            the expected deliverables, the timeline and measurable objectives. A good description
            takes 30 minutes to write and saves weeks on processing.
          </p>

          <h3>3. Check your eligibility beforehand</h3>
          <p>
            Before starting the process, make sure that:
          </p>
          <ul>
            <li>your NACE codes are eligible;</li>
            <li>you have not exceeded the de minimis ceiling;</li>
            <li>your company passes the SME test (including if linked to other entities);</li>
            <li>your provider is certified for the right theme.</li>
          </ul>

          <h3>4. Combine vouchers if needed</h3>
          <p>
            You can use multiple voucher types for the same overall project. For example:
            a digital maturity voucher for the assessment and specifications, then a
            cybersecurity voucher for the security audit of your future site. The key is
            to respect the cumulative caps.
          </p>

          <h3>5. Think about timing</h3>
          <p>
            Approvals typically take a few days to a few weeks. Factor this delay into your
            overall timeline. If you want to launch your site in September, start the business
            voucher process in May or June at the latest.
          </p>

          <figure style={{ margin: '2rem 0' }}>
            <Image
              src="/images/case-studies/arduenna-hero.webp"
              alt="Arduenna e-commerce website, a web project example by P-XEL"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
            <figcaption style={{ fontSize: '0.875rem', color: '#8A8A9A', marginTop: '0.5rem' }}>
              Arduenna: a custom e-commerce site, from strategy to launch.
            </figcaption>
          </figure>

          <h2>Frequently asked questions</h2>

          <h3>Does the voucher fund the website creation itself?</h3>
          <p>
            No. The voucher funds the <strong>consulting portion</strong>: strategy, specifications,
            UX architecture, project management. Technical development (code, integration, deployment)
            is your responsibility. However, the consulting phase often represents 30 to 40% of
            the total budget for a web project, which is still a significant financial lever.
          </p>

          <h3>Is a separate invoice needed for the subsidized portion?</h3>
          <p>
            Yes. The certified provider invoices through the business voucher platform.
            Amounts must match exactly what was declared in the application. Billing is
            managed directly through the system.
          </p>

          <h3>Can business vouchers be combined with other grants?</h3>
          <p>
            Yes, within the de minimis ceiling (300,000 euros over 3 fiscal years).
            Business vouchers can be combined with other Walloon or federal schemes, as long
            as the total does not exceed this threshold. This is worth checking if you have
            already received other public grants recently.
          </p>

          <h3>How long does the full process take?</h3>
          <p>
            From the online application to mission closure, expect{" "}
            <strong>3 to 12 months</strong> depending on the project scope. Application
            validation typically takes a few days. The mission itself must be completed
            within 12 months of approval.
          </p>

          <h2>Ready to fund your web project through business vouchers?</h2>

          <p>
            If you are based in Wallonia and considering building or redesigning your website,
            business vouchers are a concrete and accessible financial lever. The scheme exists,
            funds are available, and the process is simpler than most people think.
          </p>

          <p>
            The key is to structure your project properly from the start: separate consulting
            from development, choose a certified provider who understands your business, and
            submit a clear application with precise objectives.
          </p>

          <p>
            At P-XEL, we support Walloon SMEs from A to Z: from initial assessment to the
            delivered website. The strategy and design phase is eligible for business vouchers.
            The execution phase is handled by the same team, with no lost time or context.
          </p>

          <p>
            If you have a digital project in 2026, the smartest move is to explore business
            vouchers <strong>before signing anything</strong>. You could save several thousand
            euros on a project you were going to carry out anyway.
          </p>
        </>
      )}
    </ArticlePage>
  );
}
