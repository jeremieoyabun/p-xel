import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { brandingIdentite } from "@/lib/content/services/branding-identite";

export const metadata: Metadata = {
  title: brandingIdentite.metaTitle,
  description: brandingIdentite.metaDescription,
  alternates: { canonical: `/services/${brandingIdentite.slug}/` },
  openGraph: {
    title: `${brandingIdentite.metaTitle} | P-XEL Studio`,
    description: brandingIdentite.metaDescription,
    url: `/services/${brandingIdentite.slug}/`,
  },
};

export default function BrandingIdentitePage() {
  return <ServicePage service={brandingIdentite} />;
}
