# Subsidy-led acquisition pages · 2026-05

**Pourquoi prioriser ces pages** : l'intent "aide + projet web" est commercial à 95%. Un dirigeant qui cherche "chèque entreprise site web Wallonie" a un projet en tête, un budget partiel, et il cherche un prestataire qui sait monter le dossier. C'est l'audience la moins concurrentielle et la plus qualifiée du SEO francophone.

P-XEL a actuellement **2 articles** dans `/perspectives/` qui touchent ce sujet :
- [aides-digitalisation-belgique](../../site/src/app/[locale]/perspectives/aides-digitalisation-belgique/page.tsx)
- [cheques-entreprises-wallonie](../../site/src/app/[locale]/perspectives/cheques-entreprises-wallonie/page.tsx)

Mais ce sont des articles éditoriaux, pas des landing pages transactionnelles. Ils répondent à "comment ça marche" mais pas à "je veux lancer un projet subventionné maintenant".

Cette doc spécifie **5 nouvelles pages** dans une nouvelle section `/aides/` :

| URL | Cible | Statut |
|-----|-------|--------|
| `/aides/` | Hub aides Belgique + Luxembourg | À créer |
| `/aides/cheques-entreprises-wallonie/` | Wallonie — chèques numériques | À créer |
| `/aides/prime-digitalisation-bruxelles/` | Bruxelles — primes RBC | À créer |
| `/aides/sme-packages-digital-luxembourg/` | Luxembourg — SME Packages Digital + Fit4Digital | À créer |
| `/aides/eligibilite/` | Calculateur d'éligibilité (form intelligent) | À créer |

Les articles existants `/perspectives/aides-digitalisation-belgique` et `/perspectives/cheques-entreprises-wallonie` restent — ils gardent l'intent informational. Les nouvelles pages `/aides/*` portent l'intent transactionnel et reçoivent les CTAs forts + form d'éligibilité.

**Avertissement légal critique** : tous les montants, plafonds, conditions et liens officiels doivent être **vérifiés avant publication**. Les barèmes changent chaque année. Je donne les chiffres connus à date pour 2026 mais ils doivent être confirmés sur les sites officiels (Wallonie : economie.wallonie.be ; Bruxelles : 1819.brussels ; Luxembourg : guichet.lu).

---

## Page 1 — Hub `/aides/`

**Search intent** : qualifier sa région et identifier les aides disponibles avant de lancer un projet.

**Cible** : dirigeant PME ou indépendant qui a un projet web/app/refonte/MVP et qui cherche s'il peut le faire subventionner.

**Slug** : `/aides/`

**Title tag** : `Aides digitalisation PME Belgique et Luxembourg | P-XEL` (≤60 chars)

**Meta description** : `Vérifiez votre éligibilité aux aides digitalisation Wallonie, Bruxelles et Luxembourg. On monte le dossier et on livre votre projet. Studio à Liège.` (≤155 chars)

**H1** : `Faites financer votre projet digital. On s'occupe du dossier.`

**Structure** :
1. **Hero** : H1 + sous-titre `Wallonie, Bruxelles, Luxembourg. Trois régions, plusieurs aides. On vérifie votre éligibilité gratuitement et on construit le dossier.` + CTA principal "Vérifier mon éligibilité" → `/aides/eligibilite/` + CTA secondaire "Réserver un appel" → Calendly
2. **Bandeau preuve** : "Aides instruites · Projets livrés · Taux d'acceptation des dossiers". Donner chiffres réels uniquement (sinon ne pas afficher).
3. **3 cartes région** : Wallonie / Bruxelles / Luxembourg. Chaque carte : nom de l'aide phare, plafond, "à quoi ça s'applique", bouton vers la page régionale.
4. **Comment on travaille** : 4 étapes
   - 01 — Diagnostic gratuit (30 min, appel)
   - 02 — On monte le dossier (devis détaillé, justificatifs, calendrier)
   - 03 — On livre le projet (design, dev, déploiement)
   - 04 — Vous récupérez l'aide (facture conforme, dossier de clôture)
5. **Cas concret** : 1 client (anonymisé si nécessaire) qui a obtenu une aide pour son site/app. Montant aide, montant projet, durée instruction, ROI.
6. **FAQ** : 8 questions clés (voir section dédiée plus bas).
7. **CTA final** : double — "Vérifier mon éligibilité" + "Parler à un expert".

**Conversion path** : Hub → page régionale → calculateur éligibilité → form pré-qualifié OU Calendly.

**Lead magnet idée** : *Checklist 2026 — Aides digitalisation PME : Belgique + Luxembourg.* PDF de 4 pages avec barèmes, deadlines, justificatifs. Échange contre email. Permet remarketing email.

**Internal links** :
- → `/aides/cheques-entreprises-wallonie/`
- → `/aides/prime-digitalisation-bruxelles/`
- → `/aides/sme-packages-digital-luxembourg/`
- → `/services/creation-site-web/`
- → `/services/application-web-mvp/`

**FAQ schema** :
- Combien de temps prend l'obtention d'une aide ?
- Qui peut nous aider à monter le dossier ?
- Faut-il avancer le montant total ?
- Quelle aide pour quel type de projet ?
- Peut-on cumuler plusieurs aides ?
- Que faire si le dossier est refusé ?
- Quels justificatifs préparer ?
- Le studio facture-t-il le montage de dossier ?

---

## Page 2 — `/aides/cheques-entreprises-wallonie/`

**Search intent** : trouver un prestataire web qui accepte les chèques-entreprises et monte le dossier Wallonie.

**Mot-clé principal** : `chèques entreprises Wallonie site web`
**Secondaires** : `chèque numérique Wallonie`, `subvention site web PME Wallonie`, `aide digitalisation entreprise Wallonie`, `prestataire labellisé chèques entreprises`

**Slug** : `/aides/cheques-entreprises-wallonie/`

**Title tag** : `Chèques-entreprises Wallonie pour site web et app | P-XEL` (≤60)

**Meta description** : `Studio labellisable chèques-entreprises. On monte votre dossier Wallonie, on livre votre site, application ou refonte. Devis conforme inclus.` (≤155)

**H1** : `Chèques-entreprises Wallonie. On monte le dossier, on livre le projet.`

**Angle d'offre** : pas un article qui explique. Une page qui *fait*. Le visiteur comprend en 10 secondes : (1) son projet est éligible, (2) P-XEL connaît la procédure, (3) il peut réserver un diagnostic gratuit.

**Structure** :
1. **Hero** : H1 + sous-titre `Chèque numérique, chèque transformation, chèque éco-climat : on traduit votre projet en dossier conforme et on l'instruit avec vous.` + CTA "Vérifier mon éligibilité" (form 4 champs : entreprise, secteur, projet, budget). Sous le form : "Réponse sous 24h. Diagnostic gratuit."
2. **Quelles aides couvrent quoi (tableau)** :

   | Aide | Pour quoi | Plafond indicatif* | Ce qu'on livre |
   |------|-----------|--------------------|----------------|
   | Chèque numérique | Site web, app, e-commerce, refonte | jusqu'à 15 000 € | Site, refonte, landing, e-commerce |
   | Chèque transformation | Outils métier, automatisation, CRM | jusqu'à 50 000 € | App web, MVP, SaaS, automatisation |
   | Chèque éco-climat | Éco-conception web, performance | jusqu'à 10 000 € | Audit + refonte performance |

   *à vérifier annuellement sur economie.wallonie.be*

3. **Conditions clés** : taille entreprise (PME < 250 ETP), siège en Wallonie, projet futur (pas rétroactif), prestataire labellisé/agréé pour certains chèques. Lien "Voir les conditions complètes" vers source officielle.
4. **Pourquoi P-XEL est un bon choix pour ces dossiers** :
   - On rédige le devis conforme (avec phasage, livrables, prix HTVA)
   - On fournit les justificatifs (KBIS, attestations TVA et sociales sur demande)
   - On suit les paliers de validation
   - On n'est jamais payé en chèques avant livraison conforme
5. **Cas réel** (anonymisé si besoin) : PME Wallonne, projet site + e-commerce, montant total X, aide obtenue Y, délai instruction Z mois.
6. **CTA milieu** : "Diagnostic gratuit 30 min" → Calendly
7. **FAQ ciblée** :
   - Quel chèque pour mon projet ? (matrice secteur × projet)
   - P-XEL est-il labellisé prestataire numérique ?
   - Combien d'aides peut-on cumuler ?
   - Délai entre dépôt et notification ?
   - Que faire si le dossier est incomplet ?
   - Le studio facture-t-il l'aide au montage ?
   - Peut-on lancer le projet avant l'accord ?
   - Quel format de devis Wallonie attend-elle ?
8. **CTA final** : form pré-rempli si visiteur vient du calculateur, sinon form vide.

**Lead magnet** : *Modèle de devis conforme chèques-entreprises Wallonie 2026* (PDF). Téléchargement en échange email + acceptation marketing.

**Conversion path** : Page → form 4 champs OU Calendly → diagnostic 30 min → proposition + dossier → signature.

**Internal links** : `/aides/`, `/services/creation-site-web/`, `/services/application-web-mvp/`, `/services/refonte-site-web/`, `/perspectives/cheques-entreprises-wallonie/`.

---

## Page 3 — `/aides/prime-digitalisation-bruxelles/`

**Search intent** : prime ou subvention pour site web / app à Bruxelles.

**Mot-clé principal** : `prime digitalisation Bruxelles PME`
**Secondaires** : `aide site web Bruxelles`, `subvention digitalisation Bruxelles`, `prime Brussels Capital site web`, `aide PME RBC`

**Slug** : `/aides/prime-digitalisation-bruxelles/`

**Title tag** : `Prime digitalisation Bruxelles pour PME | P-XEL Studio` (≤60)

**Meta description** : `Aides digitalisation Région bruxelloise pour PME. On qualifie votre projet, on monte le dossier, on livre. Studio à Liège, intervention Bruxelles.` (≤155)

**H1** : `Prime digitalisation à Bruxelles. On qualifie, on livre.`

**Angle** : Bruxelles a plusieurs aides (Hub.brussels, Bourse digitale, primes secteur), souvent moins connues que les chèques wallons. P-XEL se positionne comme le studio qui sait s'y retrouver.

**Structure** :
1. **Hero** : H1 + sous-titre `Bourse digitale, primes sectorielles, aides Hub.brussels. On identifie l'aide adaptée à votre projet et on construit le dossier.`
2. **Carte des aides accessibles** :
   - Bourse digitale (Hub.brussels) — accompagnement digitalisation
   - Prime énergie / éco-rénovation digitale (selon secteur)
   - Aides 1819 pour starters
   - Aides régionales sectorielles
   *Pour chaque : pour qui, quoi, plafond indicatif, lien officiel.*
3. **Comment on intervient (process)** : diagnostic → choix de l'aide → montage dossier → suivi instruction → livraison projet → clôture.
4. **Cas concret** : PME bruxelloise (anonymisée).
5. **FAQ** :
   - Faut-il être domicilié à Bruxelles ?
   - Quel délai d'instruction ?
   - Peut-on cumuler Région et fédéral ?
   - Quel type de projet est prioritaire ?
   - P-XEL est-il référencé Hub.brussels ?
   - Quelle TVA s'applique ?
6. **CTA** : form 4 champs + Calendly.

**Lead magnet** : *Panorama 2026 — Aides digitalisation Région bruxelloise* (PDF 4 pages).

**Conversion path** : identique aux autres pages aides.

**Internal links** : `/aides/`, `/services/creation-site-web/`, `/services/application-web-mvp/`, `/bruxelles/`.

---

## Page 4 — `/aides/sme-packages-digital-luxembourg/`

**Search intent** : SME Packages Digital, Fit4Digital, aides digitalisation PME Luxembourg.

**Mot-clé principal** : `SME Packages Digital Luxembourg`
**Secondaires** : `Fit4Digital Luxembourg`, `aide digitalisation PME Luxembourg`, `subvention site web Luxembourg`, `aide House of Entrepreneurship`, `chambre des métiers digitalisation`.

**Slug** : `/aides/sme-packages-digital-luxembourg/`

**Title tag** : `SME Packages Digital Luxembourg : aide PME | P-XEL` (≤60)

**Meta description** : `SME Packages Digital, Fit4Digital, aides PME Luxembourg. On vérifie votre éligibilité, on monte le dossier et on livre votre projet digital.` (≤155)

**H1** : `SME Packages Digital. Le studio qui livre, pas qui parle.`

**Angle** : Le programme SME Packages Digital (anciennement Fit4Digital) cofinance jusqu'à 50% des projets digitalisation des PME luxembourgeoises, plafonné. C'est l'aide la plus claire et la plus utilisée. P-XEL est basé à Liège, à 1h30 du Kirchberg : on capitalise sur la proximité géographique.

**Structure** :
1. **Hero** : H1 + sous-titre `Site web, application, refonte, automatisation. Jusqu'à 50% cofinancé. On qualifie, on dépose, on livre.` + CTA `Vérifier mon éligibilité`
2. **Conditions résumées** :
   - PME luxembourgeoise (siège ou établissement stable au LU)
   - Inscription au Registre de Commerce
   - Projet digitalisation (matériel + immatériel selon volet)
   - Plafond et taux à confirmer sur guichet.lu (volet « SME Packages — Digital »)
3. **Ce que P-XEL livre dans le périmètre éligible** :
   - Sites web et e-commerce
   - Applications web et plateformes métier
   - Refonte de sites obsolètes
   - Intégration CRM / outils métier
   - Automatisations IA en complément (selon volet)
4. **Avantage géographique** : "Basés à Liège, on intervient régulièrement au Luxembourg. Visites sur site possibles à Kirchberg, Belval, Strassen. Coordination en français."
5. **Process** : 4 étapes (idem hub).
6. **Cas concret LU** (anonymisé).
7. **FAQ** :
   - Quel est le plafond actuel SME Packages Digital ?
   - Faut-il un siège au Luxembourg ?
   - Peut-on commencer le projet avant l'accord ?
   - Qui dépose le dossier ?
   - Quel délai d'instruction ?
   - Quel est l'écart entre Fit4Digital et SME Packages Digital ?
   - P-XEL facture-t-il en EUR / TVA LU ?
8. **CTA final** : form ou Calendly.

**Lead magnet** : *Checklist SME Packages Digital 2026 — Conditions, plafonds, justificatifs* (PDF).

**Internal links** : `/aides/`, `/services/creation-site-web/`, `/services/application-web-mvp/`, `/luxembourg/`, `/luxembourg/creation-site-web/`.

---

## Page 5 — `/aides/eligibilite/`

**Search intent** : pas une page SEO. C'est l'outil de qualification central qui collecte les leads des 4 pages précédentes.

**Mot-clé principal** : aucun ciblé. La page est `noindex` (pas de valeur SEO).

**Slug** : `/aides/eligibilite/`

**Title tag** : `Vérifier mon éligibilité aux aides | P-XEL`

**Meta robots** : `noindex, follow`

**H1** : `Vérifions ensemble. 4 questions, 90 secondes.`

**Form intelligent (multi-étapes)** :

**Étape 1 — Où êtes-vous basé ?**
- Wallonie
- Bruxelles
- Flandre *(message : "P-XEL travaille principalement avec la Wallonie, Bruxelles et le Luxembourg. Contactez-nous pour un projet flamand")*
- Luxembourg
- Autre

**Étape 2 — Quel est votre projet ?**
- Création de site web
- Refonte de site existant
- Application web / SaaS / outil métier
- E-commerce
- Branding / identité
- Automatisation / IA
- Pas encore défini

**Étape 3 — Quelle taille d'entreprise ?**
- Indépendant / micro
- 1-9 employés
- 10-49 employés
- 50-249 employés
- 250+ *(message : "Au-delà de 250 ETP, vous n'êtes pas PME au sens UE — la plupart des aides ne s'appliquent pas. On peut quand même cadrer un projet : réservez un appel.")*

**Étape 4 — Coordonnées**
- Nom *
- Email *
- Téléphone (optionnel)
- Société
- Quand pensez-vous lancer le projet ?
  - Dans le mois
  - 1-3 mois
  - 3-6 mois
  - 6+ mois / pas pressé

**Résultat affiché immédiat** :
> Selon vos réponses, vous semblez éligible à **[aide]**. Plafond indicatif : [montant]. On revient vers vous sous 24h avec un diagnostic personnalisé et les prochaines étapes.
>
> [CTA] Réserver un appel maintenant (Calendly) — gagnez 24h.

**Side panel** : pendant que l'utilisateur remplit, on affiche la liste des aides détectées potentielles avec icône verte (éligible probable) / orange (à confirmer).

**Tracking** :
- `subsidy_eligibility_check_start` à l'étape 1
- `subsidy_eligibility_check_step` à chaque étape avec param `step_number`, `region`, `project_type`
- `subsidy_eligibility_check_complete` au submit final
- Marqué conversion dans GA4

**Backend** : POST vers même endpoint que `/contact` mais avec champ `source: "eligibility-check"` pour distinction dans la boîte mail.

**Confirmation message** :
> Merci. On a reçu vos réponses. Réponse personnalisée sous 24h.
>
> Pendant ce temps : voici [le PDF Checklist 2026 — Aides correspondant à votre région] et la possibilité de réserver un créneau direct.

---

## Implémentation — priorité d'ordre

**Semaine 1** :
1. Hub `/aides/` (page squelette + CTA vers Calendly)
2. Page `/aides/cheques-entreprises-wallonie/` (plus gros volume FR-BE)
3. Page `/aides/sme-packages-digital-luxembourg/` (intent transactionnel pur)

**Semaine 2** :
4. Page `/aides/prime-digitalisation-bruxelles/`
5. Page `/aides/eligibilite/` avec form multi-étapes
6. PDFs lead magnets (3 fichiers)

**Semaine 3** :
7. Internal linking depuis services existants vers `/aides/`
8. Update `/perspectives/aides-digitalisation-belgique/` et `/perspectives/cheques-entreprises-wallonie/` pour pointer vers leurs landing pages soeurs
9. Ajout au sitemap et hreflang FR-only (les aides sont locales, pas besoin de EN)

**Semaine 4** :
10. Lancement 4 posts GBP dédiés aides (voir `gbp-plan.md`)
11. 1 post LinkedIn par semaine avec lien vers landing
12. Test conversion + ajustement

---

## Métriques de succès (à 90 jours après lancement)

| Métrique | Objectif réaliste 90j |
|----------|----------------------|
| Sessions organiques `/aides/*` | 200-500 / mois |
| Submissions formulaire éligibilité | 15-40 / mois |
| Calendly bookings issus de `/aides/*` | 5-15 / mois |
| Diagnostics → propositions envoyées | 30-50% des Calendly |
| Propositions → contrats signés | 20-35% (conversion top of funnel élevée car ultra-qualifié) |

Ces fourchettes deviennent fiables une fois GA4 + tracking installés (action #1 du top 10) et après 30 jours de mesure.

---

## Risques

- **Variation annuelle des aides** : prévoir un cron annuel (janvier) de revue + mise à jour des montants. Si les chèques wallons changent, ces pages perdent de la pertinence vite.
- **Saisonnalité budgétaire** : les aides sont souvent épuisées en T3/T4. Mentionner sur la page "enveloppes annuelles, dépôt dossier conseillé en début d'année".
- **Risque de qualification** : si trop de leads non éligibles, le calculateur doit pré-filtrer plus strictement (étape 3 sur taille + secteur).
- **Conformité légale** : ne pas promettre l'obtention de l'aide. Toujours dire "éligibilité indicative, instruction soumise à l'administration compétente".
