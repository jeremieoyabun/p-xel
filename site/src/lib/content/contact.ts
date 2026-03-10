export const contactIntro = {
  label: "Contact",
  heading: "Parlons de votre projet.",
  subtext:
    "Réservez un appel de 30 minutes ou décrivez votre projet ci-dessous. On répond sous 24h.",
};

export const contactCalendly = {
  heading: "Réserver un appel",
  body: "30 minutes pour découvrir votre projet, vos objectifs et vos contraintes. Sans engagement.",
};

export const contactForm = {
  heading: "Décrire mon projet",
  body: "Pas encore prêt pour un appel ? Décrivez votre projet en quelques lignes. On revient vers vous sous 24h.",
  submitLabel: "Envoyer mon brief",
  successMessage: "Merci. On revient vers vous sous 24 heures.",
  errorMessage: "Une erreur est survenue. Veuillez réessayer.",
};

export const projectTypes = [
  "Site web",
  "Application web / SaaS",
  "Landing page",
  "Branding / Identité",
  "UX/UI Design",
  "Autre",
] as const;

export const budgetRanges = [
  "Petit projet",
  "Projet moyen",
  "Projet ambitieux",
  "Pas encore défini",
] as const;

export const timelineOptions = [
  "< 1 mois",
  "1 - 3 mois",
  "3 - 6 mois",
  "Pas de deadline",
] as const;
