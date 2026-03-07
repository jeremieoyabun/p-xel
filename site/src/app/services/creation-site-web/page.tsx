import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { creationSiteWeb } from "@/lib/content/services/creation-site-web";

export const metadata: Metadata = {
  title: creationSiteWeb.metaTitle,
  description: creationSiteWeb.metaDescription,
  alternates: { canonical: `/services/${creationSiteWeb.slug}/` },
  openGraph: {
    title: `${creationSiteWeb.metaTitle} | P-XEL Studio`,
    description: creationSiteWeb.metaDescription,
    url: `/services/${creationSiteWeb.slug}/`,
  },
};

export default function CreationSiteWebPage() {
  return <ServicePage service={creationSiteWeb} />;
}
