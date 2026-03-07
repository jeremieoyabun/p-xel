export const contactIntro = {
  label: "Contact",
  heading: "Parlons de votre projet.",
  subtext:
    "Reservez un appel de 30 minutes ou decrivez votre projet ci-dessous. On repond sous 24h.",
};

export const contactCalendly = {
  heading: "Reserver un appel",
  body: "30 minutes pour decouvrir votre projet, vos objectifs et vos contraintes. Sans engagement.",
};

export const contactForm = {
  heading: "Decrire mon projet",
  body: "Pas encore pret pour un appel ? Decrivez votre projet en quelques lignes. On revient vers vous sous 24h.",
  submitLabel: "Envoyer mon brief",
  successMessage: "Merci. On revient vers vous sous 24 heures.",
  errorMessage: "Une erreur est survenue. Veuillez reessayer.",
};

export const projectTypes = [
  "Site web",
  "Application web / SaaS",
  "Landing page",
  "Branding / Identite",
  "UX/UI Design",
  "Autre",
] as const;

export const budgetRanges = [
  "< 5 000 EUR",
  "5 000 - 15 000 EUR",
  "15 000 - 30 000 EUR",
  "30 000 - 50 000 EUR",
  "> 50 000 EUR",
  "Pas encore defini",
] as const;

export const timelineOptions = [
  "< 1 mois",
  "1 - 3 mois",
  "3 - 6 mois",
  "Pas de deadline",
] as const;
