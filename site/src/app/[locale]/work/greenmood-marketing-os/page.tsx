import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { CaseStudyPage } from "../CaseStudyPage";
import { getCaseStudy } from "@/lib/content/case-studies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const study = getCaseStudy("greenmood-marketing-os", locale as Locale)!;

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

export default async function GreenmoodMarketingOsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const study = getCaseStudy("greenmood-marketing-os", locale as Locale)!;

  return <CaseStudyPage study={study} locale={locale} />;
}
