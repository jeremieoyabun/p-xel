# Acquisition audit · 2026-05

P-XEL Studio — audit complet acquisition lead-gen pour la Belgique et le Luxembourg.

Cet audit est basé sur l'état réel du repo et du site live au 11 mai 2026.
Il ne fabrique aucune donnée. Les sections qui exigent des données externes (Search Console, Google Business Profile, SEMrush, traffic réel) sont marquées **données manquantes** avec instructions précises.

---

## TL;DR — Top 10 actions classées par impact lead

| # | Action | Impact | Effort | Délai résultat | Page/asset |
|---|--------|--------|--------|----------------|------------|
| 1 | **Installer GA4 + tracking events** (form, Calendly, CTAs) | High | Low | Immédiat (mesure) | Site global — voir [tracking-plan.md](./tracking-plan.md) |
| 2 | **Page Luxembourg SME Packages Digital** dédiée | High | Medium | 30-60j | `/perspectives/sme-packages-digital-luxembourg/` ou `/luxembourg/sme-packages-digital/` — voir [subsidy-pages.md](./subsidy-pages.md) |
| 3 | **Refonte hero homepage** clarté offre + ville + preuve | High | Low | 7-30j | [site/src/lib/content/homepage.ts](../../site/src/lib/content/homepage.ts) — voir [homepage-cro.md](./homepage-cro.md) |
| 4 | **Optimiser / créer Google Business Profile** Liège | High | Medium | 30-90j | GBP — voir [gbp-plan.md](./gbp-plan.md) |
| 5 | **Page Chèques-entreprises Wallonie** dédiée landing (pas seulement article) | High | Medium | 30-60j | `/aides/cheques-entreprises-wallonie/` ou `/wallonie/cheques-entreprises/` — voir [subsidy-pages.md](./subsidy-pages.md) |
| 6 | **Unifier l'URL Calendly** sur tout le site (inconsistance détectée) | Medium | Low | Immédiat | [site/src/lib/content/homepage.ts](../../site/src/lib/content/homepage.ts), [site/src/lib/constants.ts](../../site/src/lib/constants.ts) |
| 7 | **Ajouter compteur de preuve dynamique** (post-publication, post-livré, dernière mission) homepage | Medium | Medium | 14-30j | Homepage proofStrip |
| 8 | **Pages Service+Ville manquantes** : Bruxelles AI, Namur création-site, Charleroi création-site, Verviers, Esch-sur-Alzette, Strassen | Medium-High | High | 60-90j | Voir [city-service-gaps.md](./city-service-gaps.md) — à livrer phase 2 |
| 9 | **Rewrite metadata 8 pages services** (titres/descriptions sous 60/155 char optimisés FR pour intent commercial) | Medium | Low | 7-30j | `site/src/lib/content/services/*.ts` |
| 10 | **Form contact : ajouter option "Je veux vérifier l'éligibilité aux aides"** + tracking submission | Medium | Low | 7-14j | [site/src/components/ContactForm/ContactForm.tsx](../../site/src/components/ContactForm/ContactForm.tsx) |

**Impact attendu cumulé sur 90 jours** : tracking + 2 pages subsides + GBP optimisé + hero rewrite = base réaliste pour 3 à 8 leads qualifiés/mois additionnels en Belgique francophone, 1 à 4 leads/mois Luxembourg. Ces fourchettes deviennent fiables une fois les données GSC disponibles.

---

## Données manquantes à fournir

Sans ces données, certaines sections du brief restent prescriptives mais non chiffrables :

| Donnée | Où la récupérer | Sections bloquées sans ça |
|--------|-----------------|---------------------------|
| Google Search Console — export 90 derniers jours (requêtes, pages, CTR, position) | https://search.google.com/search-console > exporter CSV | Quick wins GSC, opportunités positions 4-30, pages CTR faible |
| Google Business Profile — accès au profil actuel ou confirmation absence | https://business.google.com/ | GBP audit réel vs GBP from-scratch — voir gbp-plan.md |
| Analytics live (s'il y en a un externe à GA4) | Plausible / Umami / autre | Pages à fort potentiel sous-converties |
| SEMrush / Ahrefs (si abonnement) | Export keywords + backlinks | Volumes réels FR-BE et concurrence backlinks |
| Liste leads 12 derniers mois | Email/CRM | Canaux qui convertissent réellement |
| Calendly stats (taux de booking, no-show) | https://calendly.com/event_types | Optimisation friction Calendly |

**Action immédiate côté client** : envoie au moins le CSV GSC (90 derniers jours, toutes requêtes, niveau page) et confirme si GBP existe. Ces deux infos débloquent 60% des sections restantes.

---

## Vue d'ensemble par section du brief

### 1. Local SEO foundation
**État** : 5 villes en place (Liège, Bruxelles, Namur, Charleroi, Luxembourg). Liège + Bruxelles + Luxembourg ont les variantes service (5 chacun). Namur + Charleroi n'ont que la page hub.

**Trous prioritaires** :
- **Verviers** : aucune page (mentionné dans tes objectifs)
- **Esch-sur-Alzette** : aucune page (Luxembourg #2)
- **Strassen** : aucune page (zone d'affaires LU)
- **Bruxelles + Namur + Charleroi** : pas de variante `ai-studio`, `e-commerce`, `refonte-site-web`
- **Liège refonte-site-web** : manquant aussi
- **Aides/subsides** : aucune page hub `/aides/` ou `/subsides/`

→ Plan détaillé livré dans [city-service-gaps.md](./city-service-gaps.md) (phase 2 de l'audit).

### 2. Language and international SEO
**État** : i18n configuré (fr default, en sur `/en/`). Hreflang dans sitemap. Canonical via metadata. Robots OK.

**Fix list** :
- Vérifier que `<link rel="alternate" hreflang="fr-BE">` et `hreflang="fr-LU">` sont émis pour les pages Luxembourg (actuellement `fr` générique — Google préfère un signal régional). À tester côté code.
- Pages Luxembourg : exposer FR explicitement comme version primaire (recherche LU se fait en FR/EN).
- Article `/aides-digitalisation-belgique` : confirmer présence canonical FR + alternate EN. Vérifier le contenu EN existe vraiment ou pointe sur l'EN (sinon retirer l'alternate).
- robots.ts : ajouter ligne `Host` est obsolète, OK. Ajouter sitemap location absolue.

→ Détails dans [hreflang-audit.md](./hreflang-audit.md) (phase 2).

### 3. Homepage conversion audit
**État** : structure solide (hero, proof strip, logos, capability, selected work, why, process, FAQ, finalCta), mais hero générique ("On conçoit. On construit. On livre.") et CTA secondaire pointe sur `/work/` au lieu d'un signal de friction-réduite.

**Top 10 changements + rewrites complets en FR** : voir [homepage-cro.md](./homepage-cro.md).

### 4. Service page audit
**État** : 8 services en place avec contenu bilingue. Mais audits SEO précis (titre <60, meta <155, H2 hiérarchie, FAQ schema, objections) n'ont pas encore été refaits selon les keywords money réels.

**Phase 2** : audit fichier par fichier livré dans [service-pages-rewrite.md](./service-pages-rewrite.md). Phase 1 = appliquer les 10 actions ci-dessus, débloquer GSC, puis cibler en priorité les 3 services à plus haut LTV : `application-web-mvp`, `ai-studio`, `creation-site-web`.

### 5. City/service page builder
**État** : 15 combinaisons live (3 villes × 5 services + 2 hubs).

**Plan extension** : voir [city-service-gaps.md](./city-service-gaps.md).

### 6. Subsidy-led acquisition pages
**État critique** : 2 articles existent (`aides-digitalisation-belgique`, `cheques-entreprises-wallonie`) mais ce sont des articles `/perspectives/`, pas des landing pages transactionnelles. L'intent "subside + projet web" est commercial : il faut des pages avec CTA fort, calculateur d'éligibilité, formulaire pré-qualifié.

**5 pages à créer / convertir** : voir [subsidy-pages.md](./subsidy-pages.md). Impact lead-gen le plus rapide.

### 7. Google Business Profile
**État** : inconnu. À confirmer avec accès.

**Plan complet (audit + setup from scratch + 12 posts + scripts review)** : voir [gbp-plan.md](./gbp-plan.md).

### 8. Competitor SEO and positioning teardown
**État** : pas de teardown live encore (besoin de fetch concurrent par concurrent + cross-référence avec rankings réels).

**Méthodologie + checklist** : phase 2 dans [competitors-teardown.md](./competitors-teardown.md). Nécessite GSC pour validation rankings.

### 9. Google Search Console quick wins
**État** : bloqué — voir données manquantes.

**Méthodologie** : à recevoir CSV GSC. Une fois reçu, livraison < 48h de :
- Top 30 mots-clés positions 4-15 (push to top 3)
- Top 30 mots-clés positions 11-30 (push to top 10)
- Pages 1000+ impressions / CTR < 2% (rewrite metadata)
- Pages 0 clics 90j avec impressions (questions cannibalisation ou inadéquation)
- Cannibalisation EN/FR sur termes locaux (problème probable)

### 10. Content gap and editorial plan
**État** : 15 articles déjà publiés (forte base). Plan 90j à orienter top-funnel→bottom-funnel.

**Plan détaillé 12 articles 90j priorisés par LTV lead** : voir [content-90d.md](./content-90d.md) (phase 2).

### 11. Case study CRO audit
**État** : 6 case studies (Marketing OS, BillyCheck, ChairSplit, Greenmood, Oyabun, Arduenna). Marketing OS vient de recevoir nouveaux visuels (commit 68d29f2).

**Audit détaillé + rewrites intros + maillage interne** : voir [case-studies-cro.md](./case-studies-cro.md) (phase 2).

### 12. Lead capture and form audit
**État** : formulaire en place (nom, email, type, budget, timeline, message), Calendly intégré popup + embed. Inconsistance URL Calendly (`/p-xel` vs `/p-xel-studio/30min`).

**Recommandations top 10** + form rewrite : voir [contact-form-rewrite.md](./contact-form-rewrite.md) (phase 2). En attendant, fix immédiat dans top 10 actions point #6 et #10.

### 13. Tracking plan
**État critique** : aucun tracking installé. C'est le point de blocage n°1 de tout le reste.

**Plan complet implémentation-ready** : voir [tracking-plan.md](./tracking-plan.md).

### 14. Final outputs
A. **Immediate fixes (cette semaine)** : top 10 actions 1, 3, 6, 9, 10
B. **30-day sprint** : actions 2, 4, 5 + activation tracking + 1er post GBP
C. **90-day plan** : action 8 + content 90j + GBP cadence + audit GSC follow-up
D. **Page architecture** : ajouts dans [city-service-gaps.md](./city-service-gaps.md) et [subsidy-pages.md](./subsidy-pages.md)
E. **GBP plan** : [gbp-plan.md](./gbp-plan.md)
F. **French copy rewrites** : [homepage-cro.md](./homepage-cro.md) (phase 1), service pages phase 2
G. **Internal linking map** : phase 2 — [internal-linking-map.md](./internal-linking-map.md)
H. **Competitor comparison** : phase 2 — nécessite fetch concurrents
I. **Tracking plan** : [tracking-plan.md](./tracking-plan.md)
J. **Top 10 actions ranked** : section TL;DR ci-dessus

---

## Cadence recommandée

**Semaine 1 (immédiat)**
- Action 1 : GA4 + events (½ jour dev)
- Action 6 : URL Calendly unifiée (15 min)
- Action 3 : Hero rewrite + déploiement (½ jour)
- Action 9 : Metadata 8 services rewrite (½ jour)
- Action 10 : Form contact option "aides" + tracking submission (1h)

**Semaines 2-4 (30-day sprint)**
- Action 2 : Page Luxembourg SME Packages Digital
- Action 5 : Page Chèques-entreprises Wallonie landing
- Action 4 : GBP optimisation complète + 1ère vague 4 posts

**Semaines 5-12 (90-day plan)**
- Action 8 : 6 nouvelles pages city/service prioritaires
- Cadence GBP : 1 post/semaine pendant 8 semaines
- Phase 2 audit avec GSC : quick wins SERP
- Phase 2 content : 4 articles bottom-funnel

---

## Risques et garde-fous

- **Ne pas dupliquer thin** : les pages city/service doivent avoir du contenu spécifique (proof local, références secteurs locaux, FAQ ville). Sinon Google les classe en duplicate.
- **Hiérarchie d'intent** : `/aides/` = transactionnel, `/perspectives/` = informational. Ne pas mélanger.
- **Calendly friction** : si data Calendly montre <10% completion rate après clic, switch popup → contact form avec option "réserver un appel" en suivi.
- **AI hype** : sur la page `/services/ai-studio/`, ancrer dans des outcomes mesurables (cf Marketing OS : 60+ posts/mois, 0% erreur). Pas de "powered by AI" générique.
