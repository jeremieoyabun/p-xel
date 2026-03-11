import type { Metadata } from "next";
import { ServicePage } from "../ServicePage";
import { aiStudio } from "@/lib/content/services/ai-studio";

export const metadata: Metadata = {
  title: aiStudio.metaTitle,
  description: aiStudio.metaDescription,
  alternates: { canonical: `/services/${aiStudio.slug}/` },
  openGraph: {
    title: `${aiStudio.metaTitle} | P-XEL Studio`,
    description: aiStudio.metaDescription,
    url: `/services/${aiStudio.slug}/`,
  },
};

export default function AiStudioPage() {
  return <ServicePage service={aiStudio} />;
}
