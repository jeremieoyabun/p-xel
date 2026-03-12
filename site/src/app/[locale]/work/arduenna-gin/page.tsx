import type { Metadata } from "next";
import { CaseStudyPage } from "../CaseStudyPage";
import { getCaseStudy } from "@/lib/content/case-studies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const study = getCaseStudy("arduenna-gin")!;

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: `/${locale}/work/${study.slug}/` },
    openGraph: {
      title: `${study.metaTitle} | P-XEL Studio`,
      description: study.metaDescription,
      url: `/${locale}/work/${study.slug}/`,
    },
  };
}

export default async function ArduennaGinPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  void locale;
  const study = getCaseStudy("arduenna-gin")!;

  return <CaseStudyPage study={study} />;
}
