import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { aiStudio } from "@/lib/content/services/ai-studio";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  void locale;

  return {
    title: aiStudio.metaTitle,
    description: aiStudio.metaDescription,
    alternates: { canonical: `/${locale}/services/${aiStudio.slug}/` },
    openGraph: {
      title: `${aiStudio.metaTitle} | P-XEL Studio`,
      description: aiStudio.metaDescription,
      url: `/${locale}/services/${aiStudio.slug}/`,
    },
  };
}

export default async function AiStudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  void locale;

  return <ServicePage service={aiStudio} />;
}
