import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { applicationWebMvp } from "@/lib/content/services/application-web-mvp";

export const metadata: Metadata = {
  title: applicationWebMvp.metaTitle,
  description: applicationWebMvp.metaDescription,
  alternates: { canonical: `/services/${applicationWebMvp.slug}/` },
  openGraph: {
    title: `${applicationWebMvp.metaTitle} | P-XEL Studio`,
    description: applicationWebMvp.metaDescription,
    url: `/services/${applicationWebMvp.slug}/`,
  },
};

export default function ApplicationWebMvpPage() {
  return <ServicePage service={applicationWebMvp} />;
}
