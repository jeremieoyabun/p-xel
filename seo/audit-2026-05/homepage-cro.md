# Homepage CRO + French rewrites · 2026-05

État actuel : [site/src/lib/content/homepage.ts](../../site/src/lib/content/homepage.ts). Structure solide (hero, proof, logos, capability, work, why, process, FAQ, finalCta) mais le hero et plusieurs sections sous-performent pour la conversion locale.

Cible : un dirigeant de PME wallonne ou luxembourgeoise qui débarque sur la home doit comprendre en **5 secondes** : (1) ce que P-XEL fait, (2) pour qui, (3) où, (4) ce qu'il faut faire pour avancer.

---

## 10 changements à plus fort impact

| # | Changement | Pourquoi | Impact | Effort |
|---|-----------|---------|--------|--------|
| 1 | Hero headline : passer de "On conçoit. On construit. On livre." à un message clair sur la promesse + ville | "On conçoit/construit/livre" est élégant mais ne dit ni quoi, ni pour qui. Aucun signal local. | High | Low |
| 2 | Sous-titre hero : intégrer "Belgique et Luxembourg" + délai concret | Le délai est l'avantage P-XEL n°1 (cf CLAUDE.md "from idea to shipped product, fast"). Invisible aujourd'hui. | High | Low |
| 3 | Ajouter une **3ème CTA hero** dédiée subsides | Friction la plus basse possible. "Vérifier si mon projet est éligible aux aides" convertit mieux que "Réserver un appel" pour les froids. | High | Low |
| 4 | Remplacer "98% clients satisfaits" par une preuve vérifiable | Non vérifiable = peu crédible. Remplacer par "Livraison en moyenne sous X semaines" ou "Note moyenne X / 5 sur Y avis Google" (une fois GBP optimisé). | Medium | Low |
| 5 | Faire descendre les logos clients d'1 cran et les rendre cliquables vers les case studies | Aujourd'hui décoratifs. Devenir preuve interactive : clic logo → cas concret. | Medium | Low |
| 6 | Ajouter dès le hero un mini-bandeau "Disponible pour démarrer en [mois +1]" | Urgence + rareté + crédibilité opérationnelle. À actualiser mensuellement. | Medium | Low |
| 7 | "Why P-XEL" — réécrire les 3 points en mode outcome chiffré | Les corps actuels sont longs et théoriques. Compresser autour de chiffres : durée, ratio, ROI. | High | Medium |
| 8 | Unifier l'URL Calendly partout | `/p-xel` vs `/p-xel-studio/30min` est cassé. Centraliser via `CONTACT.calendlyUrl` ([constants.ts](../../site/src/lib/constants.ts)). | High | Low |
| 9 | Ajouter section "Pour qui on travaille" entre logos et capability | Filtrer l'audience explicitement (PME 5-50, fondateurs MVP, B2B service, e-commerce >100k€/an). Évite leads non qualifiés. | Medium | Medium |
| 10 | Block "Aides et subsides" dédié dans la home (avant FAQ) | Nouveau pillar lead-gen (cf subsidy-pages.md). 1 bloc avec 3 cartes Wallonie/Bruxelles/Luxembourg + CTA vers `/aides/`. | High | Medium |

---

## Hero rewrite — version FR (actuel → proposé)

### Actuel
```
Label:        Product Design Studio / Liège, BE
Headline:     On conçoit. On construit. On livre.
Subheadline:  Produits digitaux premium. Sites, applications, identités de marque.
              De la stratégie au déploiement.
CTA primary:  Réserver un appel  (href: https://calendly.com/p-xel)
CTA secondary: Voir nos projets  (href: /work/)
```

### Proposé — version A (positionnement produit)
```
Label:        Studio produit digital · Liège, Belgique
Headline:     Un studio qui livre des produits digitaux. Pas des maquettes.
Subheadline:  Sites, applications, MVP, branding. De la stratégie au déploiement.
              Belgique et Luxembourg. Un seul interlocuteur senior.
CTA primary:  Réserver un appel  (href: https://calendly.com/p-xel-studio/30min)
CTA secondary: Vérifier mes aides  (href: /aides/)
CTA tertiary: Voir nos projets  (href: /work/, treat as link discrete)
Microcopy:    Disponible pour démarrer dès [juin 2026]
```

### Proposé — version B (positionnement vitesse, plus offensif)
```
Label:        Studio produit digital · Liège, Belgique
Headline:     De l'idée au produit en ligne en quelques semaines.
Subheadline:  On conçoit et on livre des sites, des applications et des MVP pour
              des PME ambitieuses en Belgique et au Luxembourg.
CTA primary:  Réserver un appel  (href: https://calendly.com/p-xel-studio/30min)
CTA secondary: Vérifier mes aides  (href: /aides/)
Microcopy:    Délai moyen de livraison : 4 à 8 semaines selon périmètre.
```

**Recommandation** : version A. Plus en phase avec le positionnement "premium product partner" et moins vendeur. La version B fonctionne mieux pour une PME pressée mais peut paraître startup-y.

### Si version A retenue — diff exact à appliquer

[site/src/lib/content/homepage.ts](../../site/src/lib/content/homepage.ts) — section `fr.hero` :

```ts
hero: {
  label: "Studio produit digital · Liège, Belgique",
  headline: "Un studio qui livre des produits digitaux. Pas des maquettes.",
  subheadline:
    "Sites, applications, MVP, branding. De la stratégie au déploiement. Belgique et Luxembourg. Un seul interlocuteur senior.",
  ctaPrimary: { label: "Réserver un appel", href: CONTACT.calendlyUrl },
  ctaSecondary: { label: "Vérifier mes aides", href: "/aides/" },
  microcopy: "Disponible pour démarrer dès juin 2026",
},
```

Variant EN dans `en.hero` :
```ts
hero: {
  label: "Product design studio · Liege, Belgium",
  headline: "A studio that ships digital products. Not mockups.",
  subheadline:
    "Websites, apps, MVPs, branding. From strategy to deployment. Belgium and Luxembourg. One senior point of contact.",
  ctaPrimary: { label: "Book a call", href: CONTACT.calendlyUrl },
  ctaSecondary: { label: "Check grants", href: "/en/aides/" },
  microcopy: "Available to start in June 2026",
},
```

**Action dev** : ajouter le champ `microcopy?: string` dans le type Hero + afficher sous les CTAs en taille 12-13px, opacité 0.7.

---

## Proof strip — rewrite

### Actuel
```
16+ années d'expertise
49+ projets livrés
98% clients satisfaits
```

### Proposé
```
16+ années d'expertise
49+ projets livrés en Belgique et Luxembourg
4-8 semaines de livraison moyenne
```

**Pourquoi** : "98% clients satisfaits" est non vérifiable et abstrait. "4-8 semaines de livraison" est concret, différenciant et joue sur la promesse vitesse. À ajuster selon ta donnée réelle (si la moyenne est différente, écrire la moyenne réelle).

Une fois GBP optimisé et avec ≥5 avis publics, switch à :
```
16+ années d'expertise
49+ projets livrés
4,9 / 5 sur Google · 12 avis
```

---

## Section CTA finale — rewrite

### Actuel
```
Heading:   Votre projet mérite mieux qu'un template.
Subtext:   Parlez-nous de votre idée. 30 minutes pour cadrer votre projet et poser les bases.
CTA1:      Réserver un appel  → https://calendly.com/p-xel
CTA2:      Lancer mon projet  → /contact/
```

### Proposé
```
Heading:    Un projet à lancer ? On y répond dans la journée.
Subtext:    30 minutes pour cadrer le périmètre, le budget, le délai et les aides
            disponibles. Pas de présentation commerciale. Pas d'engagement.
CTA1:       Réserver un appel  → CONTACT.calendlyUrl
CTA2:       Décrire mon projet  → /contact/
Microcopy:  Réponse en moins de 24h ouvrées. Studio basé à Liège.
```

**Pourquoi** :
- "Réponse dans la journée" et "Pas de présentation commerciale" cassent les deux frictions principales (peur du suivi commercial lourd, doute sur la réactivité).
- "Décrire mon projet" est plus engageant que "Lancer mon projet" qui peut intimider quelqu'un qui hésite.

---

## Bloc preuve "Why P-XEL" — rewrite

### Actuel — point #1
```
01 — On conçoit et on exécute
La plupart des studios s'arrêtent à la maquette Figma. On va jusqu'au déploiement. Design, code, mise en ligne. Votre produit est fonctionnel, pas juste beau sur un écran de présentation.
```

### Proposé — point #1
```
01 — Du brief au déploiement, sans intermédiaire
Design, code, mise en ligne. Une équipe senior qui maîtrise toute la chaîne et qui livre. Pas de maquette qui dort dans un Figma. Pas de hand-off vers un dev externe.
```

### Actuel — point #2
```
02 — Un seul interlocuteur
Pas de compte manager. Pas de couche intermédiaire. Un studio senior qui travaille directement avec les décideurs. On comprend votre projet parce qu'on le porte du début à la fin.
```

### Proposé — point #2
```
02 — Un seul interlocuteur senior
Pas de compte manager qui transmet vos retours à une équipe junior. Vous échangez directement avec celui qui conçoit et qui livre. Décisions prises en heures, pas en semaines.
```

### Actuel — point #3
```
03 — Rapide et précis
On utilise l'IA comme levier d'exécution. Ce qui prend 3 semaines en agence classique, on le livre en 5 jours. 2 ans de CA en 2 mois pour Arduenna Gin. Un SaaS complet en production pour BillyCheck. On ne promet pas la vitesse. On la démontre.
```

### Proposé — point #3
```
03 — Vitesse mesurable, pas promise
4 à 8 semaines pour livrer un site, un MVP ou une refonte. 2 ans de chiffre d'affaires générés en 2 mois pour Arduenna Gin. Un SaaS complet en production pour BillyCheck. L'IA, on l'utilise pour exécuter plus vite, pas pour faire joli.
```

---

## Nouveau bloc à insérer — "Pour qui on travaille"

À placer entre **clientLogos** et **capability** dans la home.

```
Label:    Pour qui on travaille
Heading:  PME ambitieuses. Fondateurs avec un projet. Pas de greenfield infini.
Subtext:  On travaille avec des entreprises qui ont un budget, un besoin clair
          et une décision à prendre dans les 30 jours.

Cards (3 colonnes) :

PME 5-50 employés
Site web, refonte, plateforme métier, automatisation.
Wallonie, Bruxelles, Luxembourg.

Fondateurs / startups
MVP, SaaS, prototype investor-ready. De l'idée
au produit déployé en moins de 8 semaines.

B2B service & e-commerce
Refonte conversion, e-commerce, branding,
acquisition. Audiences haut de gamme.

CTA discret en bas du bloc :
"Votre cas n'est pas listé ? Parlez-nous quand même" → /contact/
```

**Pourquoi** : filtrer l'audience explicitement diminue les leads non-qualifiés (qui consomment du temps de Calendly sans signer). Augmente le taux de conversion Calendly → contrat.

---

## Nouveau bloc à insérer — "Aides et subsides"

À placer entre **selectedWork** et **whyPxel**.

```
Label:    Aides et financements
Heading:  Faites financer une partie de votre projet.
Subtext:  Wallonie, Bruxelles, Luxembourg. On vérifie votre éligibilité, on monte
          le dossier et on livre le projet. Jusqu'à 50% du montant cofinancé selon
          la région et le type d'aide.

Cards (3 colonnes) :

Wallonie
Chèques-entreprises : numérique, transformation, éco-climat.
Jusqu'à 15 000 € selon le chèque.
→ Voir les conditions

Bruxelles
Bourse digitale, primes Hub.brussels, aides sectorielles.
Selon le projet et le secteur.
→ Voir les conditions

Luxembourg
SME Packages Digital, Fit4Digital. Jusqu'à 50%
cofinancé pour les PME établies au LU.
→ Voir les conditions

CTA principal :
"Vérifier mon éligibilité" → /aides/eligibilite/
```

---

## FAQ — ajouts à intégrer

Compléter la FAQ existante avec 3 questions lead-gen :

```
6. Mon projet est-il éligible aux aides à la digitalisation ?
   Belgique : chèques-entreprises Wallonie, primes Hub.brussels pour Bruxelles.
   Luxembourg : SME Packages Digital pour les PME établies au LU. On vérifie
   votre éligibilité en 30 minutes et on monte le dossier si c'est confirmé.
   [Lien interne : /aides/]

7. Travaillez-vous avec des clients hors Liège ?
   Oui. On intervient en Wallonie, à Bruxelles et au Luxembourg en présentiel
   sur les phases clés. Le reste se fait en distanciel coordonné. On a des
   clients à Liège, Bruxelles, Luxembourg, Namur et Verviers.

8. Comment se passe le premier rendez-vous ?
   30 minutes en visio (Calendly) ou en présentiel à Liège. On qualifie le
   périmètre, le budget, le délai et les aides éventuelles. Vous repartez
   avec une vision claire, même si vous ne signez pas avec nous.
```

---

## Microcopy critique — à corriger

| Endroit | Actuel | Proposé | Raison |
|---------|--------|---------|--------|
| Bouton hero principal | "Réserver un appel" | "Réserver un appel · 30 min" | Réduit la friction en clarifiant la durée |
| Bouton form contact | "Envoyer" (probablement) | "Envoyer ma demande" | Plus actif, moins générique |
| Confirmation form | "Merci. On revient vers vous sous 24h." | "Reçu. Réponse personnalisée dans la journée ouvrée. Pendant ce temps, vous pouvez aussi [réserver un appel direct]." | Garde le visiteur engagé, propose conversion alternative |

---

## URL Calendly — fix de cohérence (urgent)

Inconsistance détectée :
- [site/src/lib/content/homepage.ts](../../site/src/lib/content/homepage.ts) hero ctaPrimary : `https://calendly.com/p-xel`
- [site/src/lib/constants.ts](../../site/src/lib/constants.ts) : `https://calendly.com/p-xel-studio/30min`
- Composant CalendlyEmbed : (à vérifier)

**Fix** : importer `CONTACT.calendlyUrl` dans `homepage.ts` (et tous les autres fichiers content) et remplacer toutes les URLs Calendly hardcodées par cette référence. Une seule source de vérité.

```ts
import { CONTACT } from "@/lib/constants";

// puis dans hero :
ctaPrimary: { label: "Réserver un appel · 30 min", href: CONTACT.calendlyUrl }
```

À appliquer aussi sur `work.ts`, `selectedWork`, `finalCta`, `floatingCta`, et tout fichier qui contient `calendly.com`.

---

## Mobile-first vérifications

À vérifier en preview mobile après déploiement :
- Hero : H1 ne doit pas dépasser 3 lignes sur 360px viewport (sinon le sous-titre passe sous la pliure)
- Trois CTAs hero : si trop serrés en mobile, stack vertical avec gap 12px
- Logos clients : auto-scroll horizontal infini ou grid 2x6, jamais 4 par ligne sur mobile
- Proof strip : passe à 1 colonne sous 480px, pas 3 cramés
- Cards "Pour qui on travaille" et "Aides" : 1 colonne mobile
- Sticky bottom CTA mobile : ajouter "Réserver un appel" qui apparaît après scroll 30%

**Mesure cible** : Mobile CR / Desktop CR > 0,7. Si <0,5, audit ergonomie mobile prioritaire.

---

## Cadence et tests

1. **Déployer version A** complète semaine 1.
2. **Mesurer** sur 30 jours : sessions, scroll depth, clics CTA primaire, clics CTA aides, submits form, bookings Calendly. Nécessite tracking installé (voir [tracking-plan.md](./tracking-plan.md)).
3. **A/B test** version A vs version B après 60 jours si le volume le permet (>200 sessions/jour, sinon pas de power statistique).
4. **Itération** trimestrielle sur le hero en fonction des leads qualifiés.

---

## Implémentation — checklist

- [ ] Mettre à jour [site/src/lib/content/homepage.ts](../../site/src/lib/content/homepage.ts) section `fr.hero` (version A)
- [ ] Mettre à jour `en.hero` correspondant
- [ ] Ajouter champ `microcopy?: string` dans le type Hero (si absent)
- [ ] Afficher microcopy dans le composant Hero (taille 12-13px, opacity 0.7)
- [ ] Mettre à jour proof strip avec "4-8 semaines de livraison moyenne"
- [ ] Réécrire les 3 points `whyPxel` (FR + EN)
- [ ] Insérer nouveau bloc "Pour qui on travaille"
- [ ] Insérer nouveau bloc "Aides et subsides"
- [ ] Compléter FAQ avec 3 questions (FR + EN)
- [ ] Centraliser toutes les URLs Calendly via `CONTACT.calendlyUrl`
- [ ] Vérifier mobile preview
- [ ] Déployer + observer 30 jours
