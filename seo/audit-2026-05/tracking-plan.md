# Tracking plan · 2026-05

**Constat** : aucun tracking n'est installé sur le site. Aucun GA4, aucun event, aucune mesure de conversion. C'est le blocage n°1 pour toute optimisation lead-gen — on ne peut pas savoir quelles pages, quels canaux et quels CTAs convertissent.

Cette doc est implémentation-ready. Objectif : mettre tout en place en moins d'une demi-journée de dev.

---

## 1. Stack recommandée

**Décision** : GA4 + Vercel Web Analytics + Vercel Speed Insights.

**Raison** :
- **GA4** : gratuit, standard, intégration Search Console native, events custom, audiences, conversions, attribution multi-touch.
- **Vercel Web Analytics** : déjà disponible (le site est sur Vercel), trafic agrégé fiable, RGPD-friendly, complément aux events GA4.
- **Vercel Speed Insights** : Core Web Vitals réels (utilisateurs), essentiel pour SEO 2026.

**Non recommandé maintenant** : Plausible/Umami (coût mensuel + manque events poussés), Posthog (overkill pour un studio solo), GTM (couche d'abstraction inutile à ce stade).

---

## 2. Variables d'environnement

À ajouter dans Vercel project settings → Environment Variables (Production + Preview) :

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Récupérer le `G-...` depuis https://analytics.google.com → Admin → Data Streams → Create stream → Web.

---

## 3. Implémentation GA4

### Fichier : `site/src/components/Analytics/GoogleAnalytics.tsx` (nouveau)

```tsx
"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!GA_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
```

### Helper events : `site/src/lib/analytics.ts` (nouveau)

```ts
type EventParams = Record<string, string | number | boolean>;

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", name, params);
}
```

### Injection dans le layout : `site/src/app/[locale]/layout.tsx`

Ajouter `<GoogleAnalytics />` + `<Analytics />` (Vercel) + `<SpeedInsights />` (Vercel) dans le `<body>`.

```tsx
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/Analytics/GoogleAnalytics";

// dans le body :
<GoogleAnalytics />
<Analytics />
<SpeedInsights />
```

Install :
```
pnpm add @vercel/analytics @vercel/speed-insights
```

---

## 4. Events à tracker

Liste exhaustive, prioritisée par valeur pour la qualification de lead. Chaque event suit la convention `snake_case` GA4.

### Tier 1 — Conversions principales (à marquer "Conversion" dans GA4)

| Event name | Trigger | Params | Où implémenter |
|------------|---------|--------|----------------|
| `lead_form_submit` | Submit OK du form contact | `project_type`, `budget`, `timeline`, `locale` | [ContactForm.tsx](../../site/src/components/ContactForm/ContactForm.tsx) handler `onSuccess` |
| `calendly_click` | Clic sur tout CTA Calendly | `cta_location` (hero/header/footer/floating/finalCta), `locale` | [CalendlyPopup.tsx](../../site/src/components/CalendlyPopup/CalendlyPopup.tsx) onClick |
| `calendly_booking_completed` | Event posté par widget Calendly (postMessage) | `event_type_uuid` | Listener dans `CalendlyPopup.tsx` (voir doc Calendly « event_scheduled ») |
| `email_click` | Clic sur tout `mailto:hello@p-xel.be` | `cta_location` | Wrap des `<a href="mailto:">` dans helper component |
| `phone_click` | Clic sur tout `tel:` | `cta_location` | Idem |

### Tier 2 — Engagement de qualification

| Event name | Trigger | Params | Où implémenter |
|------------|---------|--------|----------------|
| `service_cta_click` | Clic CTA depuis page service | `service_slug`, `cta_label`, `locale` | Composant CTA des pages services |
| `case_study_cta_click` | Clic CTA depuis case study | `case_slug`, `cta_label` | CaseStudyPage CTA |
| `subsidy_eligibility_check_start` | Clic « Vérifier mon éligibilité » sur page subside | `subsidy_type` (cheques-entreprises, sme-packages-digital, prime-bruxelles) | Pages subsides (à créer) |
| `pricing_section_view` | Section pricing visible 3+ sec (IntersectionObserver) | `page_slug` | Sur pages services + perspectives prix |
| `scroll_75` | 75% de profondeur de page | `page_slug` | Layout / hook custom |

### Tier 3 — Acquisition & navigation

| Event name | Trigger | Params | Où implémenter |
|------------|---------|--------|----------------|
| `outbound_click_linkedin` | Clic vers LinkedIn | `cta_location` | Helper outbound |
| `case_study_view` | Page case study chargée (page_view custom) | `case_slug` | CaseStudyPage useEffect |
| `service_page_view` | Page service chargée | `service_slug` | Service page useEffect |
| `city_page_view` | Page ville chargée | `city_slug`, `service_slug?` | Pages ville |

---

## 5. UTM pour GBP et campagnes

Toutes les URLs sortantes depuis sources externes (GBP, LinkedIn, signatures email, articles externes) doivent porter UTM. Convention :

```
?utm_source=gbp&utm_medium=organic&utm_campaign=local_liege&utm_content=cta_principal
?utm_source=linkedin&utm_medium=social&utm_campaign=post_2026_05&utm_content=case_billycheck
?utm_source=email_signature&utm_medium=email&utm_campaign=evergreen
```

GBP spécifiquement :
- Site web principal : `https://www.p-xel.be/?utm_source=gbp&utm_medium=organic&utm_campaign=local_liege&utm_content=primary_url`
- Bouton « Réserver » : Calendly avec `?utm_source=gbp&utm_medium=organic&utm_campaign=local_liege&utm_content=booking`
- Posts GBP (chaque post) : URL avec `utm_content=post_[slug]`

---

## 6. Conversions à configurer dans GA4

Admin → Events → Marquer comme conversion :
1. `lead_form_submit`
2. `calendly_click`
3. `calendly_booking_completed` (la vraie conversion finale)
4. `email_click`
5. `phone_click`
6. `subsidy_eligibility_check_start`

---

## 7. Audiences à créer dans GA4

| Audience | Définition | Usage |
|----------|-----------|-------|
| **Leads qualifiés** | A déclenché `lead_form_submit` OU `calendly_booking_completed` | Exclusion ads remarketing (déjà clients potentiels) |
| **Subside-aware** | A visité page subside | Remarketing campagne "votre projet est éligible" |
| **Visiteurs Luxembourg** | Country = Luxembourg | Personnalisation contenu, mesure intent LU |
| **Hot prospects** | Scroll 75%+ sur service OU case study + 2 pages vues | Remarketing focus, signal qualification |
| **Abandons form** | A vu page contact mais pas de `lead_form_submit` après 60s | Identifier friction form |

---

## 8. Search Console + GA4 linking

Une fois GA4 actif :
1. GSC → Settings → Associations → Add → choisir property GA4
2. Cela rend les requêtes search visibles dans GA4 > Reports > Acquisition > Search Console
3. Linker aussi Google Ads (même si pas de campagne active, pour conversion tracking si lancement futur)

---

## 9. Rapport mensuel à consulter

Setup une vue/dashboard GA4 avec ces 8 chiffres minimum :

| Métrique | Quoi regarder | Action si en baisse |
|----------|---------------|---------------------|
| Sessions organiques BE+LU | Volume + tendance | Audit SERP + GBP |
| `lead_form_submit` count | Total + par page d'entrée | Audit form + page convertit le moins |
| `calendly_booking_completed` count | Total + sources | Audit Calendly + CTA |
| Conversion rate global | Conversions / sessions | Hero clarity + CTA top 5 pages |
| Top 10 pages d'entrée organique | Quelles pages tirent | Renforcer celles qui convertissent, audit zéro-conv |
| Bounce sur pages services | <60% = sain | Si >70% : check intent matching |
| Mobile share + mobile CR | Belgique 70% mobile | Si mobile CR < 50% desktop CR : audit mobile UX |
| Avg engagement time | >2 min = lecture sérieuse | Si <30s sur perspectives : problème intro |

---

## 10. Implémentation — checklist dev

- [ ] Créer property GA4, copier `G-...`
- [ ] Ajouter `NEXT_PUBLIC_GA_MEASUREMENT_ID` dans Vercel (prod + preview)
- [ ] `pnpm add @vercel/analytics @vercel/speed-insights`
- [ ] Créer `site/src/components/Analytics/GoogleAnalytics.tsx`
- [ ] Créer `site/src/lib/analytics.ts`
- [ ] Injecter `<GoogleAnalytics /><Analytics /><SpeedInsights />` dans `[locale]/layout.tsx`
- [ ] Modifier `ContactForm.tsx` : appeler `trackEvent("lead_form_submit", {...})` sur succès
- [ ] Modifier `CalendlyPopup.tsx` : `trackEvent("calendly_click", { cta_location })` au clic + listener postMessage pour `calendly_booking_completed`
- [ ] Créer composant wrapper `<MailtoLink />` et `<TelLink />` qui trackent
- [ ] Marquer 6 events comme conversions dans GA4 Admin
- [ ] Créer 5 audiences listées
- [ ] Linker GSC + GA4
- [ ] Configurer UTM sur GBP (après création GBP ou audit)
- [ ] Vérifier RGPD : la bannière cookies doit gérer le consent. Voir si tu utilises déjà CookieYes / Axeptio / autre. Si absent → ajouter consent mode v2 Google.

**Note RGPD critique** : Belgique = APD strict. Sans consent mode v2 GA4, les chiffres sont incomplets et le risque légal existe. À ajouter dans le sprint semaine 1.

---

## 11. Phase 2 — ce que ce tracking débloque

Une fois ces events live + 30 jours de data :
- Connaître la **valeur lead par page d'entrée** (action 1 du top 10 ROI)
- Identifier les pages services qui amènent du trafic mais zéro lead → rewrite priority
- Voir si la friction est sur le form, sur Calendly, ou sur la page service elle-même
- Mesurer si les pages subside (action 2 et 5) génèrent les leads attendus
- Optimiser GBP en sachant quel post → quelle URL → quel lead
