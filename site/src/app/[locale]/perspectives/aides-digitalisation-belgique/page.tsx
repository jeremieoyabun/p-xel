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
      ? "Aides digitalisation Belgique 2026 : primes Bruxelles et Wallonie"
      : "Digitalization grants Belgium 2026: Brussels and Wallonia subsidies",
    description: isFr
      ? "Prime digitalisation Bruxelles (25-70%), chèque numérique Wallonie (50%). Conditions, montants et démarches pour financer votre projet digital en 2026."
      : "Brussels digitalization grant (25-70%), Wallonia digital voucher (50%). Conditions, amounts and steps to fund your digital project in 2026.",
    alternates: { canonical: `${SITE_URL}/${locale}/perspectives/aides-digitalisation-belgique/` },
    openGraph: { images: [{ url: "/legacy-assets/images/Articles-Digitalisation.webp", width: 1200, height: 630 }] },
  };
}

export default async function AidesDigitalisationBelgique({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <ArticlePage
      locale={locale}
      title="Prime digitalisation en Belgique : quelles aides pour les PME en 2026 ?"
      slug="aides-digitalisation-belgique"
      date="28 NOV. 2025"
      dateISO="2025-11-28"
      lead="En 2026, les PME, indépendants et ASBL de Bruxelles et Wallonie peuvent financer jusqu'à 70 % de leur projet digital : site web, e-commerce, automatisation, CRM, audit SEO. Ce guide clarifie les primes disponibles, les montants, les conditions et la meilleure façon de monter un dossier accepté."
      heroImage="/legacy-assets/images/Article-large_Digitalisation.webp"
      heroAlt="Prime digitalisation en Belgique pour PME et indépendants"
      tags={["Digitalisation", "PME Belgique", "Prime"]}
      readingTime="8 minutes"
      relatedArticles={getRelatedArticles("aides-digitalisation-belgique", locale as "fr" | "en")}
      relatedServices={getRelatedServices("aides-digitalisation-belgique")}
    >
      {/* Article body kept in French for both locales - full i18n of article bodies will come later */}
      <p>
        La plupart des entreprises belges savent qu&#39;il existe des aides pour la digitalisation, mais très peu savent
        réellement <strong>combien elles peuvent obtenir</strong>, ni comment structurer un dossier qui passe sans
        perdre des mois. Entre la <strong>Prime Digitalisation Bruxelles</strong> et le{" "}
        <strong>Chèque Maturité Numérique en Wallonie</strong>, il est possible de financer une grande partie de ton
        site web, de ton e-commerce ou de ton projet d&#39;automatisation.
      </p>

      <div className={articleStyles.highlight}>
        <p>
          Une PME de Bruxelles ou Wallonie peut aujourd&#39;hui obtenir entre <strong>40 % et 70 % de subside</strong>{" "}
          sur son projet digital : audit, stratégie, site web, automatisation, CRM, e-commerce, optimisation SEO,
          sécurisation... À condition de respecter quelques règles clés et de déposer le dossier au bon moment.
        </p>
      </div>

      <h2>Pourquoi la digitalisation n&#39;est plus une option en 2026</h2>

      <p>
        La digitalisation n&#39;est plus un « plus », c&#39;est une condition de survie. En Belgique francophone,
        les entreprises qui prennent le virage numérique gagnent en visibilité, en efficacité et en crédibilité,
        surtout dans les secteurs B2B, services et artisanat.
      </p>

      <h3>Des gains concrets pour les PME et indépendants</h3>
      <p>
        Un projet de digitalisation bien pensé permet de :
      </p>
      <ul>
        <li><strong>Augmenter la visibilité en ligne</strong> grâce à un site pro et au SEO.</li>
        <li><strong>Automatiser les tâches répétitives</strong> (devis, factures, relances, rendez-vous).</li>
        <li><strong>Centraliser les informations</strong> dans un CRM ou un outil métier.</li>
        <li><strong>Améliorer l&#39;image de marque</strong> et la crédibilité auprès des clients et partenaires.</li>
        <li><strong>Rendre le business scalable</strong> sans devoir recruter à chaque palier de croissance.</li>
      </ul>

      <p>
        Le rôle des aides publiques est simple : réduire le risque et le coût pour te permettre
        d&#39;investir dans une infrastructure digitale digne de 2026, au lieu de bricoler un site low-cost qui te freine.
      </p>

      <h2>Les principales aides à la digitalisation en Belgique francophone</h2>

      <p>
        En Belgique francophone, tu peux principalement t&#39;appuyer sur deux dispositifs :
        la <strong>Prime Digitalisation de la Région de Bruxelles-Capitale</strong> et le{" "}
        <strong>Chèque Maturité Numérique en Wallonie</strong>. Chacun a sa logique, ses montants et ses conditions.
      </p>

      <h3>1. Prime Digitalisation Bruxelles (anciennement Prime Web)</h3>

      <p>
        La <strong>Prime Digitalisation</strong> est gérée par Bruxelles Économie et Emploi. Elle finance une{" "}
        <strong>mission de consultance</strong> pour ton projet web ou ta digitalisation, réalisée par un consultant
        externe indépendant.
      </p>

      <p><strong>Projets typiquement éligibles :</strong></p>
      <ul>
        <li>création ou refonte d&#39;un <strong>site vitrine ou e-commerce</strong> ;</li>
        <li>audit complet de ton site actuel (UX, SEO, performance, conversion) ;</li>
        <li>définition d&#39;une <strong>stratégie e-commerce ou marketing digital</strong> ;</li>
        <li>digitalisation de processus internes (CRM, gestion de stock, facturation, planning) ;</li>
        <li>sécurisation informatique et amélioration de l&#39;infrastructure numérique.</li>
      </ul>

      <p><strong>Conditions principales :</strong></p>
      <ul>
        <li>être une <strong>PME</strong> au sens européen ;</li>
        <li>avoir au moins un <strong>siège d&#39;exploitation à Bruxelles</strong> (une des 19 communes) ;</li>
        <li>être actif dans un <strong>secteur éligible</strong> (codes NACE admis) ;</li>
        <li>ne pas être financé à plus de 75 % par les pouvoirs publics ;</li>
        <li>ne pas avoir dépassé les <strong>300 000 € d&#39;aides de minimis</strong> sur 3 ans ;</li>
        <li>introduire la demande <strong>avant le début de la mission</strong> ;</li>
        <li>mission de consultance de maximum <strong>6 mois</strong>.</li>
      </ul>

      <p><strong>Montants et taux d&#39;intervention :</strong></p>
      <ul>
        <li><strong>Taux de base :</strong> 25 % des dépenses éligibles hors TVA.</li>
        <li><strong>Majorations possibles :</strong> starter, entreprise exemplaire environnementale et/ou sociale.</li>
        <li><strong>Taux maximum :</strong> jusqu&#39;à 70 % avec les majorations cumulées.</li>
        <li><strong>Plafond :</strong> 10 000 € de subside par année civile.</li>
        <li><strong>Missions :</strong> maximum 2 missions subsidiées par an.</li>
      </ul>

      <p>
        Concrètement, une micro-entreprise bruxelloise starter qui lance un nouveau site ou une boutique en ligne
        peut activer un taux entre <strong>50 % et 70 %</strong> si le projet est bien cadré et si les critères sont remplis.
      </p>

      <h3>2. Wallonie : Chèque Maturité Numérique</h3>

      <p>
        En Wallonie, la digitalisation passe principalement par le{" "}
        <strong>chèque Maturité Numérique</strong>, accessible via la plateforme des Chèques-Entreprises.
        Il finance l&#39;<strong>accompagnement par un expert labellisé</strong>.
      </p>

      <p><strong>Ce que le chèque permet de financer :</strong></p>
      <ul>
        <li>diagnostic complet de ta maturité numérique ;</li>
        <li>analyse de tes outils actuels (site, CRM, logiciels, process) ;</li>
        <li>définition d&#39;un <strong>plan d&#39;actions digital</strong> priorisé ;</li>
        <li>rédaction d&#39;un <strong>cahier des charges</strong> pour un nouveau site ou outil métier ;</li>
        <li>accompagnement dans la mise en œuvre du plan (suivi, pilotage, choix des prestataires).</li>
      </ul>

      <p><strong>Conditions principales :</strong></p>
      <ul>
        <li>être <strong>indépendant ou PME</strong> en Wallonie ;</li>
        <li>activité principale <strong>non numérique</strong> (certains codes NACE exclus) ;</li>
        <li>prestataire <strong>labellisé</strong> par la Wallonie ;</li>
        <li>respect des plafonds des chèques numériques et du régime de minimis ;</li>
        <li>prestation réalisée dans les 12 mois suivant l&#39;accord.</li>
      </ul>

      <p><strong>Montants et plafonds :</strong></p>
      <ul>
        <li><strong>Taux :</strong> 50 % de prise en charge des honoraires HTVA de l&#39;expert.</li>
        <li><strong>Plafond chèque Maturité Numérique :</strong> 50 000 € HTVA sur 3 ans par bénéficiaire.</li>
        <li><strong>Plafond chèques numériques (maturité + cybersécurité) :</strong> 70 000 € sur 3 ans.</li>
        <li><strong>Plafond global chèques-entreprises :</strong> 100 000 € HTVA par année civile.</li>
      </ul>

      <p>
        Attention : le chèque couvre le <strong>conseil</strong>, pas le développement pur. En pratique, tu fais financer
        la stratégie, l&#39;architecture, le cahier des charges et l&#39;accompagnement, puis tu finances le développement
        via tes fonds propres ou d&#39;autres aides à l&#39;investissement.
      </p>

      <h2>Êtes-vous éligible à ces aides ?</h2>

      <p>
        Tu es probablement éligible si tu coches au moins ces cases :
      </p>
      <ul>
        <li>tu es <strong>PME, micro-entreprise ou indépendant(e)</strong> ;</li>
        <li>tu as un siège d&#39;exploitation en <strong>Bruxelles-Capitale ou Wallonie</strong> ;</li>
        <li>tu as un <strong>projet digital concret</strong> dans les 6 à 12 prochains mois ;</li>
        <li>tu n&#39;as pas saturé tes plafonds d&#39;aides de minimis ;</li>
        <li>tu n&#39;es pas une entreprise 100 % financée par les pouvoirs publics.</li>
      </ul>

      <p>
        Les cas limites (codes NACE spécifiques, situation de groupe, aides déjà reçues) se gèrent au cas par cas.
        C&#39;est typiquement là qu&#39;un accompagnement par un expert en aides publiques ou par les organismes officiels
        fait gagner beaucoup de temps.
      </p>

      <h2>Quels projets digitaux financer en priorité ?</h2>

      <p>
        Toutes les dépenses « numériques » ne se valent pas. Pour maximiser ton retour sur investissement,
        il est utile de prioriser les projets qui ont un impact direct sur le business et la structure de tes opérations.
      </p>

      <h3>1. Site web et e-commerce qui travaillent vraiment pour toi</h3>
      <p>
        Un site pro, rapide, responsive et bien structuré reste la base de ta présence en ligne. Les aides peuvent couvrir :
      </p>
      <ul>
        <li>la <strong>création ou refonte complète</strong> de ton site vitrine ;</li>
        <li>la mise en place d&#39;une <strong>boutique en ligne</strong> ou d&#39;un module de réservation ;</li>
        <li>l&#39;optimisation UX pour améliorer les conversions (formulaires, tunnel, rassurance) ;</li>
        <li>l&#39;intégration avec tes outils de facturation, de stock ou de CRM.</li>
      </ul>

      <h3>2. SEO, visibilité et stratégie d&#39;acquisition</h3>
      <p>
        Sans trafic qualifié, même le plus beau site est inutile. Les dispositifs bruxellois comme wallons
        encouragent les prestations de :
      </p>
      <ul>
        <li>audit SEO technique et sémantique ;</li>
        <li>stratégie de contenu orientée mots-clés et intention de recherche ;</li>
        <li>plan d&#39;acquisition multi-canal (Google, social, emailing) ;</li>
        <li>mesure et suivi via analytics, dashboards, objectifs.</li>
      </ul>

      <h3>3. Automatisation et outils métier</h3>
      <p>
        La vraie puissance de la digitalisation vient quand tu fais travailler les outils à ta place :
      </p>
      <ul>
        <li>mise en place d&#39;un <strong>CRM</strong> adapté à ta réalité ;</li>
        <li>automatisation des mails, relances, devis, contrats ;</li>
        <li>intégration de tes outils via <strong>Make, Zapier ou API</strong> ;</li>
        <li>portail client, extranet, gestion de projet ou de production.</li>
      </ul>

      <h2>Comment se déroule concrètement une demande de prime ?</h2>

      <p>
        Même si Bruxelles et la Wallonie utilisent des plateformes différentes, la logique reste similaire. En résumé :
      </p>

      <h3>Étape 1 : cadrer le projet et choisir le bon dispositif</h3>
      <p>
        On commence par définir clairement :
      </p>
      <ul>
        <li>les objectifs business (visibilité, leads, ventes, gain de temps) ;</li>
        <li>le périmètre du projet (site, e-commerce, outil interne, automatisation) ;</li>
        <li>le budget cible ;</li>
        <li>le dispositif adapté : Prime Digitalisation Bruxelles ou Chèque Maturité Numérique Wallonie.</li>
      </ul>

      <h3>Étape 2 : préparer un dossier solide</h3>
      <p>
        Un bon dossier contient toujours au minimum :
      </p>
      <ul>
        <li>un descriptif clair du projet et des résultats attendus ;</li>
        <li>un devis détaillé du consultant ou prestataire ;</li>
        <li>les informations administratives sur l&#39;entreprise (test PME, minimis, statuts) ;</li>
        <li>un planning réaliste.</li>
      </ul>

      <p>
        C&#39;est souvent là que beaucoup de dossiers chutent : devis trop vagues, objectifs flous, mélange entre
        consultance et développement sans distinction claire.
      </p>

      <h3>Étape 3 : dépôt en ligne, validation, mission</h3>
      <p>
        Une fois le dossier prêt :
      </p>
      <ul>
        <li>Bruxelles : dépôt via <strong>MonBEE</strong>, accusé de réception, puis décision dans les délais annoncés.</li>
        <li>Wallonie : dépôt via la plateforme des <strong>Chèques-Entreprises</strong>, vérification, paiement de ta quote-part, puis démarrage de la mission.</li>
      </ul>

      <p>
        Dans les deux cas, la règle d&#39;or reste la même :{" "}
        <strong>ne jamais commencer la mission avant l&#39;introduction de la demande</strong>, sous peine de perdre l&#39;éligibilité.
      </p>

      <h2>Comment maximiser tes chances d&#39;acceptation ?</h2>

      <p>
        Quelques principes augmentent très clairement le taux de réussite des dossiers :
      </p>
      <ul>
        <li><strong>Faire valider ton projet par un organisme officiel</strong> (House of Entrepreneurship, Chambre des Métiers, guichets wallons) avant dépôt.</li>
        <li><strong>Travailler avec un consultant expérimenté</strong> qui connaît les dispositifs et sait formuler le projet dans le langage attendu.</li>
        <li><strong>Montrer l&#39;impact</strong> sur l&#39;emploi, la durabilité, la compétitivité ou l&#39;attractivité du territoire.</li>
        <li><strong>Respecter strictement les délais</strong> et la chronologie des étapes.</li>
        <li><strong>Documenter tes choix</strong> (outils, technologies, périmètre) avec des arguments business, pas seulement techniques.</li>
      </ul>

      <div className={articleStyles.highlight}>
        <p>
          Les aides publiques ne financent pas un simple « site joli ». Elles financent une <strong>vraie montée en
          puissance digitale</strong>, cadrée, mesurable et alignée avec ta stratégie. Plus ton projet est structuré, plus
          tu augmentes ton taux de subvention et tes chances d&#39;acceptation.
        </p>
      </div>

      <h2>Prêt à lancer ton projet de digitalisation en Belgique francophone ?</h2>

      <p>
        Si tu es basé en <strong>Bruxelles-Capitale</strong> ou en <strong>Wallonie</strong>, tu as probablement droit à
        un financement conséquent pour ton site web, ton e-commerce ou ta transformation numérique. Le vrai enjeu
        n&#39;est pas seulement de connaître l&#39;existence des primes, mais de <strong>monter un projet qui tire vraiment parti
        de ces aides</strong> et fait grandir ton business.
      </p>

      <p>
        Tu peux commencer par clarifier tes objectifs, tes priorités et ton budget. Ensuite, un accompagnement expert
        permet de transformer ces idées en un dossier éligible et un projet solide : architecture UX/UI, stratégie
        SEO, automatisation, intégration d&#39;outils et mise en place d&#39;une base stable pour ta croissance.
      </p>

      <p>
        Si tu as un projet concret pour 2026, le plus intelligent est souvent de le penser directement{" "}
        <strong>avec les aides en tête</strong>, plutôt que de lancer un site en urgence et de regretter ensuite de
        ne pas avoir activé les subsides.
      </p>
    </ArticlePage>
  );
}
