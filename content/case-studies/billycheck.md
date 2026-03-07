# Case Study: BillyCheck

## SEO Brief

- **Search intent:** Commercial. Utilisateurs cherchant un studio capable de concevoir et livrer des applications web SaaS avec integration IA.
- **Primary keyword:** application web SaaS Belgique
- **Secondary keywords:** developpement web app IA, creation SaaS, product design studio, MVP web app
- **Title tag:** BillyCheck - Application Web IA & SaaS | P-XEL Studio
- **Meta description:** Conception, design et developpement complet d'une application SaaS d'optimisation de factures avec IA. Next.js, GPT-4o Vision, Stripe. Etude de cas P-XEL Studio.
- **Schema:** WebPage, BreadcrumbList
- **URL:** /work/billycheck/

---

## Copy

---

### 1. Hero

**Client (display, large):**
BillyCheck

**Tags (JetBrains Mono, small):**
Application Web · SaaS · Intelligence Artificielle · Fintech

**One-liner (Satoshi):**
Application SaaS d'optimisation de factures energetiques. Upload, analyse IA, comparaison fournisseurs, economies en 30 secondes.

**Key Result (JetBrains Mono, accent, large):**
De l'idee au produit en production

**Periode:**
2025

---

### 2. Context

**Label (mono, small):**
Contexte

**H2:**
Un probleme reel que personne ne resolvait simplement.

En Belgique, les factures d'energie sont opaques. Les tarifs varient par region, par type de compteur, par distributeur de reseau. Comparer les offres demande de comprendre des structures tarifaires complexes que meme les consommateurs informes ne maitrisent pas. Les simulateurs existants sont longs, techniques, et demandent des dizaines de champs a remplir manuellement. BillyCheck devait resoudre ce probleme en une action : prendre une photo de sa facture et voir immediatement combien on peut economiser.

---

### 3. Challenge

**Label (mono, small):**
Probleme

**H2:**
Transformer un processus complexe en experience de 30 secondes.

Le defi n'etait pas technique au sens classique. C'etait un defi de produit. Comment reduire un processus qui demande normalement 15 minutes de saisie manuelle et une connaissance du marche energetique belge a une experience de 30 secondes ? Comment extraire des donnees fiables d'une photo de facture, les confronter a un modele de tarification reel avec des variables regionales, et afficher un resultat credible ? Et comment faire tout ça sans login, sans friction, sans tutoriel ?

---

### 4. Thinking

**Label (mono, small):**
Reflexion

**H2:**
Penser en produit, pas en fonctionnalites.

On a commence par le resultat final : l'ecran que l'utilisateur voit apres avoir scanne sa facture. C'est cet ecran qui decide si le produit a de la valeur ou non. On a conçu a rebours : d'abord l'experience de resultat, puis le flux d'upload, puis l'architecture technique pour supporter les deux. La decision cle a ete d'eliminer le login obligatoire. Un utilisateur qui decouvre le produit doit pouvoir scanner une facture et voir ses economies sans creer de compte. L'authentification intervient apres la valeur, pas avant. Ce choix a conditionne toute l'architecture technique.

---

### 5. Design / Product Approach

**Label (mono, small):**
Approche

**H2:**
Un flux en trois etapes. Zero friction.

L'interface a ete conçue autour d'un parcours lineaire : upload, analyse, resultats. Pas de dashboard complexe. Pas de menu a comprendre. L'utilisateur arrive, uploade sa facture (photo ou PDF), et l'IA fait le reste.

L'extraction des donnees repose sur GPT-4o Vision. Le modele analyse la facture, identifie les champs pertinents (consommation, tarif, distributeur, type de compteur, region) et les structure pour le moteur de comparaison. On a construit un modele de tarification qui integre les specificites du marche belge : tarifs regionaux, codes GRD, structures tarifaires mono et bi-horaires, couts de distribution variables par zone.

Le moteur de comparaison confronte les donnees extraites aux offres de plus de 15 fournisseurs d'energie belges. Le resultat affiche les economies potentielles par fournisseur, classees par pertinence. Chaque recommandation est contextuelle : elle tient compte de la region, du type de compteur et du profil de consommation reel de l'utilisateur.

Le modele economique est freemium avec Stripe. Le premier scan est gratuit. Les scans suivants sont disponibles via des credits payes. Le systeme de paiement a ete integre nativement, sans redirection, sans friction dans le flux.

---

### 6. Execution

**Label (mono, small):**
Execution

**H2:**
Full-stack. Du design au deploiement.

L'application a ete construite en Next.js 16 avec une base de donnees PostgreSQL via Prisma. L'authentification fonctionne par cookies, sans login obligatoire pour le premier scan. L'integration GPT-4o Vision gere l'extraction des donnees de facturation. Le moteur de tarification a ete construit sur mesure pour le marche energetique belge. Le paiement passe par Stripe avec un systeme de credits. L'ensemble a ete conçu, designe, developpe et deploye par P-XEL. Un seul studio. De l'idee au produit en production.

---

### 7. Result

**Label (mono, small):**
Impact

**H2:**
Un produit qui fonctionne. Pas une maquette.

BillyCheck est en production. Les utilisateurs scannent des factures, obtiennent des comparaisons et identifient des economies. Le produit fait en 30 secondes ce qui demandait 15 minutes de recherche manuelle. L'experience est fluide, l'IA est fiable, le modele de monetisation est en place. C'est exactement ce que signifie "on conçoit, on construit, on livre."

---

### 8. Deliverables

**Label (mono, small):**
Livrables

- Product design complet (UX research, parcours utilisateur, UI)
- Application web Next.js 16 en production
- Integration GPT-4o Vision pour l'extraction de factures
- Modele de tarification energetique belge (15+ fournisseurs)
- Systeme de paiement Stripe (freemium + credits)
- Base de donnees PostgreSQL / Prisma
- Deploiement et mise en production

---

### 9. Stack

**Label (mono, small):**
Technologies

Next.js 16 · React · TypeScript · PostgreSQL · Prisma · GPT-4o Vision · Stripe · Vercel

---

### 10. Navigation

**Projet suivant:**
[ChairSplit](/work/chairsplit/) ->

**CTA Block:**

**H3:**
Un produit digital a concevoir et livrer ?

**Body:**
On conçoit des [applications web et MVP](/services/application-web-mvp/) de l'idee au deploiement. Un seul studio. Zero intermediaire.

**CTA primary:**
[Reserver un appel](https://calendly.com/p-xel) ->

**CTA secondary:**
[Lancer mon projet](/contact/) ->

---

## Internal Links

- /services/application-web-mvp/ (web app, MVP mentions)
- /contact/ (CTA)
- /work/chairsplit/ (next project)

## Images

- billycheck-hero.webp (hero - app interface showing scan result)
- billycheck-flow.webp (upload > analyse > resultats flow)
- billycheck-results.webp (comparison results screen)

---

## Word Count

Estimated: ~800 words (visible copy, excluding labels and metadata).
