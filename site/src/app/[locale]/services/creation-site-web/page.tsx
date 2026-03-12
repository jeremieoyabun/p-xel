import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { creationSiteWeb } from "@/lib/content/services/creation-site-web";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  void locale;

  return {
    title: creationSiteWeb.metaTitle,
    description: creationSiteWeb.metaDescription,
    alternates: { canonical: `/${locale}/services/${creationSiteWeb.slug}/` },
    openGraph: {
      title: `${creationSiteWeb.metaTitle} | P-XEL Studio`,
      description: creationSiteWeb.metaDescription,
      url: `/${locale}/services/${creationSiteWeb.slug}/`,
    },
  };
}

export default async function CreationSiteWebPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  void locale;

  return <ServicePage service={creationSiteWeb} />;
}
