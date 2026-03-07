import type { Metadata } from "next";
import { CaseStudyPage } from "../CaseStudyPage";
import { getCaseStudy } from "@/lib/content/case-studies";

const study = getCaseStudy("arduenna-gin")!;

export const metadata: Metadata = {
  title: study.metaTitle,
  description: study.metaDescription,
  alternates: { canonical: `/work/${study.slug}/` },
  openGraph: {
    title: `${study.metaTitle} | P-XEL Studio`,
    description: study.metaDescription,
    url: `/work/${study.slug}/`,
  },
};

export default function ArduennaGinPage() {
  return <CaseStudyPage study={study} />;
}
