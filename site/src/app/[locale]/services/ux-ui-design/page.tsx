import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { uxUiDesign } from "@/lib/content/services/ux-ui-design";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  void locale;

  return {
    title: uxUiDesign.metaTitle,
    description: uxUiDesign.metaDescription,
    alternates: { canonical: `/${locale}/services/${uxUiDesign.slug}/` },
    openGraph: {
      title: `${uxUiDesign.metaTitle} | P-XEL Studio`,
      description: uxUiDesign.metaDescription,
      url: `/${locale}/services/${uxUiDesign.slug}/`,
    },
  };
}

export default async function UxUiDesignPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  void locale;

  return <ServicePage service={uxUiDesign} />;
}
