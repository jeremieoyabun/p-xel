export const headerNav = [
  { label: "Work", href: "/work/" },
  { label: "Perspectives", href: "/perspectives/" },
  { label: "Studio", href: "/studio/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const footerNav = {
  work: {
    title: "Work",
    links: [
      { label: "BillyCheck", href: "/work/billycheck/" },
      { label: "ChairSplit", href: "/work/chairsplit/" },
      { label: "Greenmood", href: "/work/greenmood/" },
      { label: "Oyabun", href: "/work/oyabun/" },
      { label: "Arduenna Gin", href: "/work/arduenna-gin/" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { label: "AI Studio", href: "/services/ai-studio/" },
      { label: "Sites web", href: "/services/creation-site-web/" },
      { label: "Applications & MVP", href: "/services/application-web-mvp/" },
      { label: "UX/UI Design", href: "/services/ux-ui-design/" },
      { label: "Branding & Identité", href: "/services/branding-identite/" },
    ],
  },
  perspectives: {
    title: "Perspectives",
    links: [
      { label: "Tous les articles", href: "/perspectives/" },
      { label: "Combien coûte un site web", href: "/perspectives/combien-coute-un-site-web/" },
      { label: "Aides à la digitalisation", href: "/perspectives/aides-digitalisation-belgique/" },
      { label: "No-code vs full-code", href: "/perspectives/no-code-vs-code/" },
    ],
  },
  studio: {
    title: "Studio",
    links: [
      { label: "Le studio", href: "/studio/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  local: {
    title: "Liège",
    links: [{ label: "Agence web Liège", href: "/liege/" }],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales/" },
      {
        label: "Politique de confidentialité",
        href: "/politique-confidentialite/",
      },
    ],
  },
} as const;
