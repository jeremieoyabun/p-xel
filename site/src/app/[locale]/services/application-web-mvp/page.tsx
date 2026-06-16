import type { Metadata } from "next";
import { buildAlternates, localizedPath } from "@/lib/seo";
import { ServicePage } from "../ServicePage";
import { getApplicationWebMvpContent } from "@/lib/content/services/application-web-mvp";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const service = getApplicationWebMvpContent(locale as Locale);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: buildAlternates(locale, `/services/${service.slug}/`),
    openGraph: {
      title: `${service.metaTitle} | P-XEL Studio`,
      description: service.metaDescription,
      url: localizedPath(locale, `/services/${service.slug}/`),
    },
  };
}

export default async function ApplicationWebMvpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const service = getApplicationWebMvpContent(locale as Locale);

  return <ServicePage service={service} locale={locale as Locale} />;
}
