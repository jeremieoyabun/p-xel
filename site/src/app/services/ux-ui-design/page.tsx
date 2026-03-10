import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { uxUiDesign } from "@/lib/content/services/ux-ui-design";

export const metadata: Metadata = {
  title: uxUiDesign.metaTitle,
  description: uxUiDesign.metaDescription,
  alternates: { canonical: `/services/${uxUiDesign.slug}/` },
  openGraph: {
    title: `${uxUiDesign.metaTitle} | P-XEL Studio`,
    description: uxUiDesign.metaDescription,
    url: `/services/${uxUiDesign.slug}/`,
  },
};

export default function UxUiDesignPage() {
  return <ServicePage service={uxUiDesign} />;
}
