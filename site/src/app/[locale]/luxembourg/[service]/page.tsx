import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { CityServicePage } from "@/components/CityServicePage/CityServicePage";
import { CITIES } from "@/lib/content/cities";
import { SERVICE_SLUGS } from "@/lib/content/cities/types";
import { getLuxembourgCityService } from "@/lib/content/cities/luxembourg-services";
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
  const cityContent = getLuxembourgCityService(
    service as (typeof SERVICE_SLUGS)[number],
    locale as Locale
  );
  if (!cityContent) return {};

  return {
    title: cityContent.metaTitle,
    description: cityContent.metaDescription,
    alternates: { canonical: `/${locale}/luxembourg/${service}/` },
    openGraph: {
      title: cityContent.metaTitle,
      description: cityContent.metaDescription,
      url: `/${locale}/luxembourg/${service}/`,
    },
  };
}

export default async function LuxembourgServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service: serviceSlug } = await params;
  const loc = locale as Locale;

  const serviceData = getServiceBySlug(serviceSlug, loc);
  const cityContent = getLuxembourgCityService(
    serviceSlug as (typeof SERVICE_SLUGS)[number],
    loc
  );

  if (!serviceData || !cityContent) notFound();

  return (
    <CityServicePage
      city={CITIES.luxembourg}
      service={serviceData}
      cityContent={cityContent}
      locale={loc}
    />
  );
}
