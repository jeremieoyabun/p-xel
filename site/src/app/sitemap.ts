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
    { url: "/studio/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact/", priority: 0.9, changeFrequency: "yearly" as const },
    { url: "/services/creation-site-web/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/application-web-mvp/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/liege/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/mentions-legales/", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/politique-confidentialite/", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
