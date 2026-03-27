import type { Locale } from "@/lib/i18n/config";
import type { ServicePage } from "./types";
import { getCreationSiteWebContent } from "./creation-site-web";
import { getApplicationWebMvpContent } from "./application-web-mvp";
import { getUxUiDesignContent } from "./ux-ui-design";
import { getBrandingIdentiteContent } from "./branding-identite";
import { getAiStudioContent } from "./ai-studio";
import { getRefonteSiteWebContent } from "./refonte-site-web";
import { getCreationEcommerceContent } from "./creation-e-commerce";

const getters: Record<string, (locale: Locale) => ServicePage> = {
  "creation-site-web": getCreationSiteWebContent,
  "application-web-mvp": getApplicationWebMvpContent,
  "ux-ui-design": getUxUiDesignContent,
  "branding-identite": getBrandingIdentiteContent,
  "ai-studio": getAiStudioContent,
  "refonte-site-web": getRefonteSiteWebContent,
  "creation-e-commerce": getCreationEcommerceContent,
};

export function getServiceBySlug(slug: string, locale: Locale): ServicePage | null {
  const getter = getters[slug];
  return getter ? getter(locale) : null;
}
