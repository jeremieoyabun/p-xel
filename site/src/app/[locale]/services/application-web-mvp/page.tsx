import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { applicationWebMvp } from "@/lib/content/services/application-web-mvp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  void locale;

  return {
    title: applicationWebMvp.metaTitle,
    description: applicationWebMvp.metaDescription,
    alternates: { canonical: `/${locale}/services/${applicationWebMvp.slug}/` },
    openGraph: {
      title: `${applicationWebMvp.metaTitle} | P-XEL Studio`,
      description: applicationWebMvp.metaDescription,
      url: `/${locale}/services/${applicationWebMvp.slug}/`,
    },
  };
}

export default async function ApplicationWebMvpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  void locale;

  return <ServicePage service={applicationWebMvp} />;
}
