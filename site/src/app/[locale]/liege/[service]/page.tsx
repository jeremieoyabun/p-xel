import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { CityServicePage } from "@/components/CityServicePage/CityServicePage";
import { CITIES } from "@/lib/content/cities";
import { SERVICE_SLUGS } from "@/lib/content/cities/types";
import { getLiegeCityService } from "@/lib/content/cities/liege-services";
import { getServiceBySlug } from "@/lib/content/services/get-by-slug";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  const cityContent = getLiegeCityService(
    service as (typeof SERVICE_SLUGS)[number],
    locale as Locale
  );
  if (!cityContent) return {};

  return {
    title: cityContent.metaTitle,
    description: cityContent.metaDescription,
    alternates: { canonical: `/${locale}/liege/${service}/` },
    openGraph: {
      title: cityContent.metaTitle,
      description: cityContent.metaDescription,
      url: `/${locale}/liege/${service}/`,
    },
  };
}

export default async function LiegeServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service: serviceSlug } = await params;
  const loc = locale as Locale;

  const serviceData = getServiceBySlug(serviceSlug, loc);
  const cityContent = getLiegeCityService(
    serviceSlug as (typeof SERVICE_SLUGS)[number],
    loc
  );

  if (!serviceData || !cityContent) notFound();

  return (
    <CityServicePage
      city={CITIES.liege}
      service={serviceData}
      cityContent={cityContent}
      locale={loc}
    />
  );
}
