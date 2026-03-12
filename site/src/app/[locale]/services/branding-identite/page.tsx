import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { brandingIdentite } from "@/lib/content/services/branding-identite";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  void locale;

  return {
    title: brandingIdentite.metaTitle,
    description: brandingIdentite.metaDescription,
    alternates: { canonical: `/${locale}/services/${brandingIdentite.slug}/` },
    openGraph: {
      title: `${brandingIdentite.metaTitle} | P-XEL Studio`,
      description: brandingIdentite.metaDescription,
      url: `/${locale}/services/${brandingIdentite.slug}/`,
    },
  };
}

export default async function BrandingIdentitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  void locale;

  return <ServicePage service={brandingIdentite} />;
}
