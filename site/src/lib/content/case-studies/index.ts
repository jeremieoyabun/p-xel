import { billycheck } from "./billycheck";
import { chairsplit } from "./chairsplit";
import { greenmood } from "./greenmood";
import { oyabun } from "./oyabun";
import { arduennaGin } from "./arduenna-gin";
import type { CaseStudy } from "./types";

export type { CaseStudy } from "./types";
export type { WorkProject } from "./types";

export const caseStudies: Record<string, CaseStudy> = {
  billycheck,
  chairsplit,
  greenmood,
  oyabun,
  "arduenna-gin": arduennaGin,
};

export const caseStudyOrder = [
  "billycheck",
  "chairsplit",
  "greenmood",
  "oyabun",
  "arduenna-gin",
] as const;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
