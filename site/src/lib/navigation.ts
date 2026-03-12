import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/get-path";

export function getHeaderNav(locale: Locale) {
  return [
    { label: "Work", href: localePath("/work/", locale) },
    { label: "Perspectives", href: localePath("/perspectives/", locale) },
    { label: "Studio", href: localePath("/studio/", locale) },
    { label: "Contact", href: localePath("/contact/", locale) },
  ];
}

export function getFooterNav(locale: Locale) {
  const isFr = locale === "fr";
  const lp = (path: string) => localePath(path, locale);

  return {
    work: {
      title: "Work",
      links: [
        { label: "BillyCheck", href: lp("/work/billycheck/") },
        { label: "ChairSplit", href: lp("/work/chairsplit/") },
        { label: "Greenmood", href: lp("/work/greenmood/") },
        { label: "Oyabun", href: lp("/work/oyabun/") },
        { label: "Arduenna Gin", href: lp("/work/arduenna-gin/") },
      ],
    },
    services: {
      title: "Services",
      links: [
        { label: "AI Studio", href: lp("/services/ai-studio/") },
        { label: isFr ? "Sites web" : "Websites", href: lp("/services/creation-site-web/") },
        { label: isFr ? "Applications & MVP" : "Apps & MVPs", href: lp("/services/application-web-mvp/") },
        { label: "UX/UI Design", href: lp("/services/ux-ui-design/") },
        { label: isFr ? "Branding & Identite" : "Branding & Identity", href: lp("/services/branding-identite/") },
      ],
    },
    perspectives: {
      title: "Perspectives",
      links: [
        { label: isFr ? "Tous les articles" : "All articles", href: lp("/perspectives/") },
        { label: isFr ? "Combien coute un site web" : "How much does a website cost", href: lp("/perspectives/combien-coute-un-site-web/") },
        { label: isFr ? "Aides a la digitalisation" : "Digitalization grants", href: lp("/perspectives/aides-digitalisation-belgique/") },
        { label: isFr ? "No-code vs full-code" : "No-code vs full-code", href: lp("/perspectives/no-code-vs-code/") },
      ],
    },
    studio: {
      title: "Studio",
      links: [
        { label: isFr ? "Le studio" : "The studio", href: lp("/studio/") },
        { label: "Contact", href: lp("/contact/") },
      ],
    },
    local: {
      title: "Liege",
      links: [{ label: isFr ? "Agence web Liege" : "Web agency Liege", href: lp("/liege/") }],
    },
    legal: {
      title: "Legal",
      links: [
        { label: isFr ? "Mentions legales" : "Legal notice", href: lp("/mentions-legales/") },
        { label: isFr ? "Politique de confidentialite" : "Privacy policy", href: lp("/politique-confidentialite/") },
      ],
    },
  };
}

// Backward compatibility
export const headerNav = [
  { label: "Work", href: "/work/" },
  { label: "Perspectives", href: "/perspectives/" },
  { label: "Studio", href: "/studio/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const footerNav = getFooterNav("fr");
