import type { Locale } from "@/lib/i18n/config";

const content = {
  fr: {
    contactIntro: {
      label: "Contact",
      heading: "Parlons de votre projet.",
      subtext:
        "Réservez un appel de 30\u00a0minutes ou décrivez votre projet ci-dessous. On répond sous\u00a024h.",
    },
    contactCalendly: {
      heading: "Réserver un appel",
      body: "30 minutes pour découvrir votre projet, vos objectifs et vos contraintes. Sans engagement.",
    },
    contactForm: {
      heading: "Décrire mon projet",
      body: "Pas encore prêt pour un appel ? Décrivez votre projet en quelques lignes. On revient vers vous sous 24h.",
      submitLabel: "Envoyer mon brief",
      successMessage: "Merci. On revient vers vous sous 24 heures.",
      errorMessage: "Une erreur est survenue. Veuillez réessayer.",
    },
    projectTypes: [
      "Site web",
      "Application web / SaaS",
      "Landing page",
      "Branding / Identité",
      "UX/UI Design",
      "Autre",
    ] as const,
    budgetRanges: [
      "Petit projet",
      "Projet moyen",
      "Projet ambitieux",
      "Pas encore défini",
    ] as const,
    timelineOptions: [
      "< 1 mois",
      "1 - 3 mois",
      "3 - 6 mois",
      "Pas de deadline",
    ] as const,
  },
  en: {
    contactIntro: {
      label: "Contact",
      heading: "Let\u2019s talk about your project.",
      subtext:
        "Book a 30\u2011minute call or describe your project below. We respond within\u00a024h.",
    },
    contactCalendly: {
      heading: "Book a call",
      body: "30 minutes to understand your project, goals and constraints. No commitment.",
    },
    contactForm: {
      heading: "Describe your project",
      body: "Not ready for a call yet? Describe your project in a few lines. We get back to you within 24h.",
      submitLabel: "Send my brief",
      successMessage: "Thank you. We\u2019ll get back to you within 24 hours.",
      errorMessage: "Something went wrong. Please try again.",
    },
    projectTypes: [
      "Website",
      "Web application / SaaS",
      "Landing page",
      "Branding / Identity",
      "UX/UI Design",
      "Other",
    ] as const,
    budgetRanges: [
      "Small project",
      "Mid-size project",
      "Ambitious project",
      "Not defined yet",
    ] as const,
    timelineOptions: [
      "< 1 month",
      "1 - 3 months",
      "3 - 6 months",
      "No deadline",
    ] as const,
  },
} as const;

export function getContactContent(locale: Locale) {
  return content[locale];
}

// Backward compatibility
export const contactIntro = content.fr.contactIntro;
export const contactCalendly = content.fr.contactCalendly;
export const contactForm = content.fr.contactForm;
export const projectTypes = content.fr.projectTypes;
export const budgetRanges = content.fr.budgetRanges;
export const timelineOptions = content.fr.timelineOptions;
