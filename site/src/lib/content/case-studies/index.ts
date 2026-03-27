import { billycheck, getBillycheckContent } from "./billycheck";
import { chairsplit, getChairsplitContent } from "./chairsplit";
import { greenmood, getGreenmoodContent } from "./greenmood";
import { greenmoodMarketingOs, getGreenmoodMarketingOsContent } from "./greenmood-marketing-os";
import { oyabun, getOyabunContent } from "./oyabun";
import { arduennaGin, getArduennaGinContent } from "./arduenna-gin";
import type { CaseStudy } from "./types";
import type { Locale } from "@/lib/i18n/config";

export type { CaseStudy } from "./types";
export type { WorkProject } from "./types";

export const caseStudies: Record<string, CaseStudy> = {
  billycheck,
  chairsplit,
  greenmood,
  "greenmood-marketing-os": greenmoodMarketingOs,
  oyabun,
  "arduenna-gin": arduennaGin,
};

export const caseStudyOrder = [
  "greenmood-marketing-os",
  "billycheck",
  "chairsplit",
  "greenmood",
  "oyabun",
  "arduenna-gin",
] as const;

export function getCaseStudy(slug: string, locale?: Locale): CaseStudy | undefined {
  if (!locale || locale === "fr") {
    return caseStudies[slug];
  }
  return getCaseStudies(locale)[slug];
}

export function getCaseStudies(locale: Locale): Record<string, CaseStudy> {
  return {
    billycheck: getBillycheckContent(locale),
    chairsplit: getChairsplitContent(locale),
    greenmood: getGreenmoodContent(locale),
    "greenmood-marketing-os": getGreenmoodMarketingOsContent(locale),
    oyabun: getOyabunContent(locale),
    "arduenna-gin": getArduennaGinContent(locale),
  };
}
