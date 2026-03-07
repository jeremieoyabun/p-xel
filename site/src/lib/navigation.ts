export const headerNav = [
  { label: "Work", href: "/work/" },
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
      { label: "Sites web", href: "/services/creation-site-web/" },
      { label: "Applications & MVP", href: "/services/application-web-mvp/" },
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
