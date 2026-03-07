<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Prime digitalisation en Belgique : aides pour PME en 2026 – P-XEL</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root{
      --pxel-bg:#f7f7f8;
      --pxel-text:#151515;
      --pxel-muted:#777777;
      --pxel-accent:#6608fa;
      --pxel-border:#e2e2e4;
      --pxel-max-width:1120px;

      /* Bouton CTA */
      --pxel-btn-bg:#191d28;
      --pxel-btn-violet:#6608fa;
      --pxel-btn-text:#ffffff;
    }

    /* Limiter l’impact au bloc article */
    .pxel-article-page *{
      box-sizing:border-box;
    }

    .pxel-article-page{
      min-height:100vh;
      padding:48px 5vw 72px;
      background:var(--pxel-bg);
      font-family:"Manrope",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
      color:var(--pxel-text);
      -webkit-font-smoothing:antialiased;
    }

    .pxel-article-shell{
      max-width:var(--pxel-max-width);
      margin:0 auto;
      background:#ffffff;
      border-radius:22px;
      padding:56px 56px 40px;
      box-shadow:0 18px 45px rgba(15,15,35,0.4);
      position:relative;
    }

    /* Desktop → Mobile container */
    @media (max-width:900px){
      .pxel-article-shell{
        padding:32px 22px 32px;
        border-radius:18px;
        box-shadow:0 18px 45px rgba(15,15,35,0.4);
      }
    }

    /* --- HERO STYLE --- */
    .pxel-hero-row{
      display:grid;
      grid-template-columns:minmax(0,1.1fr) minmax(0,2.3fr);
      align-items:flex-end;
      gap:72px;
      padding-bottom:56px;
    }

    .pxel-hero-author{
      font-size:11px;
      letter-spacing:0.22em;
      text-transform:uppercase;
      color:#c0c0c0;
      white-space:nowrap;
    }

    .pxel-hero-author span{
      opacity:.8;
    }

    .pxel-hero-main{
      text-align:left;
    }

    .pxel-hero-date{
      font-size:13px;
      letter-spacing:0.18em;
      text-transform:uppercase;
      color:#b0b0b0;
      margin-bottom:10px;
    }

    .pxel-hero-title{
      font-size:clamp(24px,3.3vw,32px);
      line-height:1.05;
      font-weight:600;
      margin:0 0 18px;
      color:#111111;
    }

    .pxel-hero-lead{
      max-width:640px;
      font-size:16px;
      line-height:1.7;
      color:#777777;
      margin:0;
    }

    @media (max-width:900px){
      .pxel-hero-row{
        grid-template-columns:1fr;
        gap:24px;
        padding-bottom:32px;
      }

      .pxel-hero-title{
        font-size:clamp(20px,6vw,26px);
        line-height:1.15;
      }

      .pxel-hero-lead{
        font-size:14px;
      }
    }

    @media (max-width:600px){
      .pxel-hero-title{
        font-size:clamp(18px,7vw,24px);
      }
    }

    /* --- HERO IMAGE --- */
    .pxel-article-hero-img{
      width:100%;
      margin:0 0 40px;
      border-radius:16px;
      overflow:hidden;
    }

    .pxel-article-hero-img img{
      display:block;
      width:100%;
      height:auto;
    }

    /* --- CORPS DE L’ARTICLE --- */
    .pxel-article-shell article{
      font-size:15px;
      line-height:1.8;
      color:#303030;
    }

    .pxel-article-shell article p{
      margin:0 0 16px;
      color:#7f7f7f;
    }

    .pxel-article-shell article h2{
      font-size:20px;
      margin:32px 0 12px;
      font-weight:600;
      position:relative;
    }

    .pxel-article-shell article h2::before{
      content:"";
      position:absolute;
      left:-18px;
      top:10px;
      width:6px;
      height:6px;
      background:var(--pxel-accent);
    }

    .pxel-article-shell article h3{
      font-size:16px;
      margin:24px 0 8px;
      font-weight:600;
    }

    .pxel-article-shell article ul{
      padding-left:18px;
      margin:0 0 16px;
    }

    .pxel-article-shell article li{
      margin-bottom:4px;
    }

    /* Bloc mis en avant */
    .article-highlight{
      margin:28px 0;
      padding:18px 20px;
      border-left:3px solid var(--pxel-accent);
      background:#faf7ff;
      border-radius:0 12px 12px 0;
      font-size:14px;
      color:#40395a;
    }

    /* Footer meta */
    .article-footer{
      margin-top:40px;
      padding-top:20px;
      border-top:1px solid var(--pxel-border);
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:16px;
      font-size:12px;
      color:var(--pxel-muted);
    }

    .article-tags{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
    }

    .article-tag{
      padding:4px 10px;
      border-radius:999px;
      border:1px solid var(--pxel-border);
      font-size:11px;
      text-transform:uppercase;
      letter-spacing:0.14em;
    }

    @media (max-width:600px){
      .article-footer{
        flex-direction:column;
        align-items:flex-start;
      }
    }

    /* --- CTA BUTTON --- */

    .pxel-cta {
      border: none;
      background: transparent;
      padding: 0;
      font: inherit;
      cursor: pointer;

      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;

      height: 48px;
      padding: 0 56px 0 24px;
      border-radius: 999px;

      background-color: var(--pxel-btn-bg);
      overflow: hidden;
      isolation: isolate;
      transform: translateZ(0);

      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);

      transition:
        transform 160ms cubic-bezier(0.19, 1, 0.22, 1),
        box-shadow 160ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    .pxel-cta,
    .pxel-cta * {
      color: var(--pxel-btn-text) !important;
    }

    .pxel-cta__ink {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-color: var(--pxel-btn-violet);
      transform-origin: right center;
      transform: scaleX(0);
      transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
      z-index: 0;
    }

    .pxel-cta__label {
      position: relative;
      z-index: 1;
      font-family: "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.02em;
      white-space: nowrap;
    }

    .pxel-cta__circle {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: var(--pxel-btn-violet);

      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 2;
    }

    .pxel-cta__icon {
      width: 28px;
      height: 28px;
      stroke: var(--pxel-btn-text);
      stroke-width: 2.4;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;

      transition: transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .pxel-cta:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
    }

    .pxel-cta:hover .pxel-cta__ink {
      transform: scaleX(1);
    }

    .pxel-cta:hover .pxel-cta__icon {
      transform: translateX(2px);
    }

    .pxel-cta:focus-visible {
      outline: 2px solid rgba(255, 255, 255, 0.7);
      outline-offset: 4px;
    }

    button.pxel-cta {
      background: var(--pxel-btn-bg) !important;
      border: none !important;
    }
  </style>
</head>
<body>

  <main class="pxel-article-page">
    <div class="pxel-article-shell">

      <!-- HERO -->
      <header class="pxel-hero-row">
        <div class="pxel-hero-author">
          <span>ÉCRIT PAR</span> P-XEL STUDIO
        </div>
        <div class="pxel-hero-main">
          <div class="pxel-hero-date">28 NOV. 2025</div>
          <h1 class="pxel-hero-title">
            Prime digitalisation en Belgique&nbsp;: quelles aides pour les PME en 2026&nbsp;?
          </h1>
          <p class="pxel-hero-lead">
            En 2026, les PME, indépendants et ASBL de Bruxelles et Wallonie peuvent financer jusqu’à 70&nbsp;% de leur
            projet digital&nbsp;: site web, e-commerce, automatisation, CRM, audit SEO. Ce guide clarifie les primes
            disponibles, les montants, les conditions et la meilleure façon de monter un dossier accepté.
          </p>
        </div>
      </header>

      <!-- HERO IMAGE -->
      <div class="pxel-article-hero-img">
        <img src="https://p-xel.be/wp-content/uploads/2025/11/Article-large_Digitalisation.png"
             alt="Prime digitalisation en Belgique pour PME et indépendants" />
      </div>

      <!-- CONTENU -->
      <article>

        <p>
          La plupart des entreprises belges savent qu’il existe des aides pour la digitalisation, mais très peu savent
          réellement <strong>combien elles peuvent obtenir</strong>, ni comment structurer un dossier qui passe sans
          perdre des mois. Entre la <strong>Prime Digitalisation Bruxelles</strong> et le
          <strong>Chèque Maturité Numérique en Wallonie</strong>, il est possible de financer une grande partie de ton
          site web, de ton e-commerce ou de ton projet d’automatisation.
        </p>

        <div class="article-highlight">
          Une PME de Bruxelles ou Wallonie peut aujourd’hui obtenir entre <strong>40&nbsp;% et 70&nbsp;% de subside</strong>
          sur son projet digital&nbsp;: audit, stratégie, site web, automatisation, CRM, e-commerce, optimisation SEO,
          sécurisation… À condition de respecter quelques règles clés et de déposer le dossier au bon moment.
        </div>

        <h2>Pourquoi la digitalisation n’est plus une option en 2026</h2>

        <p>
          La digitalisation n’est plus un «&nbsp;plus&nbsp;», c’est une condition de survie. En Belgique francophone,
          les entreprises qui prennent le virage numérique gagnent en visibilité, en efficacité et en crédibilité,
          surtout dans les secteurs B2B, services et artisanat.
        </p>

        <h3>Des gains concrets pour les PME et indépendants</h3>
        <p>
          Un projet de digitalisation bien pensé permet de&nbsp;:
        </p>
        <ul>
          <li><strong>Augmenter la visibilité en ligne</strong> grâce à un site pro et au SEO.</li>
          <li><strong>Automatiser les tâches répétitives</strong> (devis, factures, relances, rendez-vous).</li>
          <li><strong>Centraliser les informations</strong> dans un CRM ou un outil métier.</li>
          <li><strong>Améliorer l’image de marque</strong> et la crédibilité auprès des clients et partenaires.</li>
          <li><strong>Rendre le business scalable</strong> sans devoir recruter à chaque palier de croissance.</li>
        </ul>

        <p>
          Le rôle des aides publiques est simple&nbsp;: réduire le risque et le coût pour te permettre
          d’investir dans une infrastructure digitale digne de 2026, au lieu de bricoler un site low-cost qui te freine.
        </p>

        <h2>Les principales aides à la digitalisation en Belgique francophone</h2>

        <p>
          En Belgique francophone, tu peux principalement t’appuyer sur deux dispositifs&nbsp;:
          la <strong>Prime Digitalisation de la Région de Bruxelles-Capitale</strong> et le
          <strong>Chèque Maturité Numérique en Wallonie</strong>. Chacun a sa logique, ses montants et ses conditions.
        </p>

        <h3>1. Prime Digitalisation Bruxelles (anciennement Prime Web)</h3>

        <p>
          La <strong>Prime Digitalisation</strong> est gérée par Bruxelles Économie et Emploi. Elle finance une
          <strong>mission de consultance</strong> pour ton projet web ou ta digitalisation, réalisée par un consultant
          externe indépendant.
        </p>

        <p><strong>Projets typiquement éligibles&nbsp;:</strong></p>
        <ul>
          <li>création ou refonte d’un <strong>site vitrine ou e-commerce</strong> ;</li>
          <li>audit complet de ton site actuel (UX, SEO, performance, conversion) ;</li>
          <li>définition d’une <strong>stratégie e-commerce ou marketing digital</strong> ;</li>
          <li>digitalisation de processus internes (CRM, gestion de stock, facturation, planning) ;</li>
          <li>sécurisation informatique et amélioration de l’infrastructure numérique.</li>
        </ul>

        <p><strong>Conditions principales&nbsp;:</strong></p>
        <ul>
          <li>être une <strong>PME</strong> au sens européen ;</li>
          <li>avoir au moins un <strong>siège d’exploitation à Bruxelles</strong> (une des 19 communes) ;</li>
          <li>être actif dans un <strong>secteur éligible</strong> (codes NACE admis) ;</li>
          <li>ne pas être financé à plus de 75&nbsp;% par les pouvoirs publics ;</li>
          <li>ne pas avoir dépassé les <strong>300&nbsp;000&nbsp;€ d’aides de minimis</strong> sur 3 ans ;</li>
          <li>introduire la demande <strong>avant le début de la mission</strong> ;</li>
          <li>mission de consultance de maximum <strong>6 mois</strong>.</li>
        </ul>

        <p><strong>Montants et taux d’intervention&nbsp;:</strong></p>
        <ul>
          <li><strong>Taux de base&nbsp;:</strong> 25&nbsp;% des dépenses éligibles hors TVA.</li>
          <li><strong>Majorations possibles&nbsp;:</strong> starter, entreprise exemplaire environnementale et/ou sociale.</li>
          <li><strong>Taux maximum&nbsp;:</strong> jusqu’à 70&nbsp;% avec les majorations cumulées.</li>
          <li><strong>Plafond&nbsp;:</strong> 10&nbsp;000&nbsp;€ de subside par année civile.</li>
          <li><strong>Missions&nbsp;:</strong> maximum 2 missions subsidiées par an.</li>
        </ul>

        <p>
          Concrètement, une micro-entreprise bruxelloise starter qui lance un nouveau site ou une boutique en ligne
          peut activer un taux entre <strong>50&nbsp;% et 70&nbsp;%</strong> si le projet est bien cadré et si les critères sont remplis.
        </p>

        <h3>2. Wallonie&nbsp;: Chèque Maturité Numérique</h3>

        <p>
          En Wallonie, la digitalisation passe principalement par le
          <strong>chèque Maturité Numérique</strong>, accessible via la plateforme des Chèques-Entreprises.
          Il finance l’<strong>accompagnement par un expert labellisé</strong>.
        </p>

        <p><strong>Ce que le chèque permet de financer&nbsp;:</strong></p>
        <ul>
          <li>diagnostic complet de ta maturité numérique ;</li>
          <li>analyse de tes outils actuels (site, CRM, logiciels, process) ;</li>
          <li>définition d’un <strong>plan d’actions digital</strong> priorisé ;</li>
          <li>rédaction d’un <strong>cahier des charges</strong> pour un nouveau site ou outil métier ;</li>
          <li>accompagnement dans la mise en œuvre du plan (suivi, pilotage, choix des prestataires).</li>
        </ul>

        <p><strong>Conditions principales&nbsp;:</strong></p>
        <ul>
          <li>être <strong>indépendant ou PME</strong> en Wallonie ;</li>
          <li>activité principale <strong>non numérique</strong> (certains codes NACE exclus) ;</li>
          <li>prestataire <strong>labellisé</strong> par la Wallonie ;</li>
          <li>respect des plafonds des chèques numériques et du régime de minimis ;</li>
          <li>prestation réalisée dans les 12 mois suivant l’accord.</li>
        </ul>

        <p><strong>Montants et plafonds&nbsp;:</strong></p>
        <ul>
          <li><strong>Taux&nbsp;:</strong> 50&nbsp;% de prise en charge des honoraires HTVA de l’expert.</li>
          <li><strong>Plafond chèque Maturité Numérique&nbsp;:</strong> 50&nbsp;000&nbsp;€ HTVA sur 3 ans par bénéficiaire.</li>
          <li><strong>Plafond chèques numériques (maturité + cybersécurité)&nbsp;:</strong> 70&nbsp;000&nbsp;€ sur 3 ans.</li>
          <li><strong>Plafond global chèques-entreprises&nbsp;:</strong> 100&nbsp;000&nbsp;€ HTVA par année civile.</li>
        </ul>

        <p>
          Attention&nbsp;: le chèque couvre le <strong>conseil</strong>, pas le développement pur. En pratique, tu fais financer
          la stratégie, l’architecture, le cahier des charges et l’accompagnement, puis tu finances le développement
          via tes fonds propres ou d’autres aides à l’investissement.
        </p>

        <h2>Êtes-vous éligible à ces aides&nbsp;?</h2>

        <p>
          Tu es probablement éligible si tu coches au moins ces cases&nbsp;:
        </p>
        <ul>
          <li>tu es <strong>PME, micro-entreprise ou indépendant(e)</strong> ;</li>
          <li>tu as un siège d’exploitation en <strong>Bruxelles-Capitale ou Wallonie</strong> ;</li>
          <li>tu as un <strong>projet digital concret</strong> dans les 6 à 12 prochains mois ;</li>
          <li>tu n’as pas saturé tes plafonds d’aides de minimis ;</li>
          <li>tu n’es pas une entreprise 100&nbsp;% financée par les pouvoirs publics.</li>
        </ul>

        <p>
          Les cas limites (codes NACE spécifiques, situation de groupe, aides déjà reçues) se gèrent au cas par cas.
          C’est typiquement là qu’un accompagnement par un expert en aides publiques ou par les organismes officiels
          fait gagner beaucoup de temps.
        </p>

        <h2>Quels projets digitaux financer en priorité&nbsp;?</h2>

        <p>
          Toutes les dépenses « numériques » ne se valent pas. Pour maximiser ton retour sur investissement,
          il est utile de prioriser les projets qui ont un impact direct sur le business et la structure de tes opérations.
        </p>

        <h3>1. Site web et e-commerce qui travaillent vraiment pour toi</h3>
        <p>
          Un site pro, rapide, responsive et bien structuré reste la base de ta présence en ligne. Les aides peuvent couvrir&nbsp;:
        </p>
        <ul>
          <li>la <strong>création ou refonte complète</strong> de ton site vitrine ;</li>
          <li>la mise en place d’une <strong>boutique en ligne</strong> ou d’un module de réservation ;</li>
          <li>l’optimisation UX pour améliorer les conversions (formulaires, tunnel, rassurance) ;</li>
          <li>l’intégration avec tes outils de facturation, de stock ou de CRM.</li>
        </ul>

        <h3>2. SEO, visibilité et stratégie d’acquisition</h3>
        <p>
          Sans trafic qualifié, même le plus beau site est inutile. Les dispositifs bruxellois comme wallons
          encouragent les prestations de&nbsp;:
        </p>
        <ul>
          <li>audit SEO technique et sémantique ;</li>
          <li>stratégie de contenu orientée mots-clés et intention de recherche ;</li>
          <li>plan d’acquisition multi-canal (Google, social, emailing) ;</li>
          <li>mesure et suivi via analytics, dashboards, objectifs.</li>
        </ul>

        <h3>3. Automatisation et outils métier</h3>
        <p>
          La vraie puissance de la digitalisation vient quand tu fais travailler les outils à ta place&nbsp;:
        </p>
        <ul>
          <li>mise en place d’un <strong>CRM</strong> adapté à ta réalité ;</li>
          <li>automatisation des mails, relances, devis, contrats ;</li>
          <li>intégration de tes outils via <strong>Make, Zapier ou API</strong> ;</li>
          <li>portail client, extranet, gestion de projet ou de production.</li>
        </ul>

        <h2>Comment se déroule concrètement une demande de prime&nbsp;?</h2>

        <p>
          Même si Bruxelles et la Wallonie utilisent des plateformes différentes, la logique reste similaire. En résumé&nbsp;:
        </p>

        <h3>Étape 1&nbsp;: cadrer le projet et choisir le bon dispositif</h3>
        <p>
          On commence par définir clairement&nbsp;:
        </p>
        <ul>
          <li>les objectifs business (visibilité, leads, ventes, gain de temps) ;</li>
          <li>le périmètre du projet (site, e-commerce, outil interne, automatisation) ;</li>
          <li>le budget cible ;</li>
          <li>le dispositif adapté&nbsp;: Prime Digitalisation Bruxelles ou Chèque Maturité Numérique Wallonie.</li>
        </ul>

        <h3>Étape 2&nbsp;: préparer un dossier solide</h3>
        <p>
          Un bon dossier contient toujours au minimum&nbsp;:
        </p>
        <ul>
          <li>un descriptif clair du projet et des résultats attendus ;</li>
          <li>un devis détaillé du consultant ou prestataire ;</li>
          <li>les informations administratives sur l’entreprise (test PME, minimis, statuts) ;</li>
          <li>un planning réaliste.</li>
        </ul>

        <p>
          C’est souvent là que beaucoup de dossiers chutent&nbsp;: devis trop vagues, objectifs flous, mélange entre
          consultance et développement sans distinction claire.
        </p>

        <h3>Étape 3&nbsp;: dépôt en ligne, validation, mission</h3>
        <p>
          Une fois le dossier prêt&nbsp;:
        </p>
        <ul>
          <li>Bruxelles&nbsp;: dépôt via <strong>MonBEE</strong>, accusé de réception, puis décision dans les délais annoncés.</li>
          <li>Wallonie&nbsp;: dépôt via la plateforme des <strong>Chèques-Entreprises</strong>, vérification, paiement de ta quote-part, puis démarrage de la mission.</li>
        </ul>

        <p>
          Dans les deux cas, la règle d’or reste la même&nbsp;:
          <strong>ne jamais commencer la mission avant l’introduction de la demande</strong>, sous peine de perdre l’éligibilité.
        </p>

        <h2>Comment maximiser tes chances d’acceptation&nbsp;?</h2>

        <p>
          Quelques principes augmentent très clairement le taux de réussite des dossiers&nbsp;:
        </p>
        <ul>
          <li><strong>Faire valider ton projet par un organisme officiel</strong> (House of Entrepreneurship, Chambre des Métiers, guichets wallons) avant dépôt.</li>
          <li><strong>Travailler avec un consultant expérimenté</strong> qui connaît les dispositifs et sait formuler le projet dans le langage attendu.</li>
          <li><strong>Montrer l’impact</strong> sur l’emploi, la durabilité, la compétitivité ou l’attractivité du territoire.</li>
          <li><strong>Respecter strictement les délais</strong> et la chronologie des étapes.</li>
          <li><strong>Documenter tes choix</strong> (outils, technologies, périmètre) avec des arguments business, pas seulement techniques.</li>
        </ul>

        <div class="article-highlight">
          Les aides publiques ne financent pas un simple « site joli ». Elles financent une <strong>vraie montée en
          puissance digitale</strong>, cadrée, mesurable et alignée avec ta stratégie. Plus ton projet est structuré, plus
          tu augmentes ton taux de subvention et tes chances d’acceptation.
        </div>

        <h2>Prêt à lancer ton projet de digitalisation en Belgique francophone&nbsp;?</h2>

        <p>
          Si tu es basé en <strong>Bruxelles-Capitale</strong> ou en <strong>Wallonie</strong>, tu as probablement droit à
          un financement conséquent pour ton site web, ton e-commerce ou ta transformation numérique. Le vrai enjeu
          n’est pas seulement de connaître l’existence des primes, mais de <strong>monter un projet qui tire vraiment parti
          de ces aides</strong> et fait grandir ton business.
        </p>

        <p>
          Tu peux commencer par clarifier tes objectifs, tes priorités et ton budget. Ensuite, un accompagnement expert
          permet de transformer ces idées en un dossier éligible et un projet solide&nbsp;: architecture UX/UI, stratégie
          SEO, automatisation, intégration d’outils et mise en place d’une base stable pour ta croissance.
        </p>

        <p>
          Si tu as un projet concret pour 2025 ou 2026, le plus intelligent est souvent de le penser directement
          <strong>avec les aides en tête</strong>, plutôt que de lancer un site en urgence et de regretter ensuite de
          ne pas avoir activé les subsides.
        </p>

        <!-- CTA -->
        <p>
          <button
            class="pxel-cta"
            data-tally-open="MeeyRp"
            data-tally-align-left="1"
            data-tally-hide-title="1"
            data-tally-overlay="1"
            data-tally-auto-close="3000"
            data-tally-form-events-forwarding="1"
          >
            <span class="pxel-cta__ink"></span>
            <span class="pxel-cta__label">Mon projet</span>
            <span class="pxel-cta__circle">
              <svg class="pxel-cta__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 12h10" />
                <path d="M13 8l4 4-4 4" />
              </svg>
            </span>
          </button>
        </p>

      </article>

      <!-- FOOTER META -->
      <footer class="article-footer">
        <div>Temps de lecture estimé&nbsp;: 8&nbsp;minutes</div>
        <div class="article-tags">
          <span class="article-tag">Digitalisation</span>
          <span class="article-tag">PME Belgique</span>
          <span class="article-tag">Prime</span>
        </div>
      </footer>

    </div>
  </main>
</body>
</html>
