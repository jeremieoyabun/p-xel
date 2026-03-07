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
    title: "Liege",
    links: [{ label: "Agence web Liege", href: "/liege/" }],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Mentions legales", href: "/mentions-legales/" },
      {
        label: "Politique de confidentialite",
        href: "/politique-confidentialite/",
      },
    ],
  },
} as const;
