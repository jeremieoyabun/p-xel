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
    reassurance: [
      "Réponse sous 24 à 48h.",
      "Basé à Liège, disponible en Belgique, au Luxembourg et à distance.",
      "Premier échange simple, sans engagement.",
    ] as const,
    projectTypes: [
      "Site internet",
      "Landing page",
      "Refonte de site",
      "Application web",
      "MVP SaaS",
      "E-commerce sur mesure",
      "Automatisation IA",
      "Branding / UX-UI",
      "Autre",
    ] as const,
    budgetRanges: [
      "Moins de 3 000 €",
      "3 000 à 5 000 €",
      "5 000 à 10 000 €",
      "10 000 à 25 000 €",
      "25 000 € et plus",
      "Je ne sais pas encore",
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
    reassurance: [
      "Reply within 24 to 48h.",
      "Based in Liège, available in Belgium, Luxembourg and remotely.",
      "A simple first conversation, no commitment.",
    ] as const,
    projectTypes: [
      "Website",
      "Landing page",
      "Website redesign",
      "Web application",
      "SaaS MVP",
      "Custom e-commerce",
      "AI automation",
      "Branding / UX-UI",
      "Other",
    ] as const,
    budgetRanges: [
      "Under €3,000",
      "€3,000 to €5,000",
      "€5,000 to €10,000",
      "€10,000 to €25,000",
      "€25,000+",
      "Not sure yet",
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
