import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/work/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/work/billycheck/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/work/chairsplit/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/work/greenmood/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/work/oyabun/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/work/arduenna-gin/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/work/greenmood-marketing-os/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/studio/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact/", priority: 0.9, changeFrequency: "yearly" as const },
    { url: "/services/creation-site-web/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/application-web-mvp/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/ux-ui-design/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/branding-identite/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/ai-studio/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/dispatch/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/refonte-site-web/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/liege/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/liege/creation-site-web/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/liege/application-web-mvp/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/liege/ux-ui-design/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/liege/branding-identite/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/liege/ai-studio/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/bruxelles/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/bruxelles/creation-site-web/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/bruxelles/application-web-mvp/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/bruxelles/ux-ui-design/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/bruxelles/branding-identite/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/bruxelles/ai-studio/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/namur/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/charleroi/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/luxembourg/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/luxembourg/creation-site-web/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/luxembourg/application-web-mvp/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/luxembourg/ux-ui-design/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/luxembourg/branding-identite/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/luxembourg/ai-studio/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/perspectives/", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/perspectives/combien-coute-un-site-web/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/perspectives/aides-digitalisation-belgique/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/perspectives/no-code-vs-code/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/perspectives/ia-creation-produit-digital/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/perspectives/tendances-ux-ui-2026/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/perspectives/refonte-site-web/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/perspectives/lancer-mvp-rapidement/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/perspectives/agence-web-vs-freelance/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/perspectives/combien-coute-application-web/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/mentions-legales/", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/politique-confidentialite/", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // Generate entries for both FR (default) and EN locales with hreflang alternates
  return pages.flatMap((page) => [
    {
      url: `${SITE_URL}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          fr: `${SITE_URL}${page.url}`,
          en: `${SITE_URL}/en${page.url}`,
        },
      },
    },
    {
      url: `${SITE_URL}/en${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority * 0.9,
      alternates: {
        languages: {
          fr: `${SITE_URL}${page.url}`,
          en: `${SITE_URL}/en${page.url}`,
        },
      },
    },
  ]);
}
