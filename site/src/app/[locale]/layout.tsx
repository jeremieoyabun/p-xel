import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CustomCursor } from "@/components/CustomCursor/CustomCursor";
import { FloatingCTA } from "@/components/FloatingCTA/FloatingCTA";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { locales, type Locale } from "@/lib/i18n/config";
import { SetHtmlLang } from "@/lib/i18n/set-lang";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: "%s | P-XEL Studio",
      default: isFr
        ? `${SITE_NAME} | Studio Digital à Liège`
        : `${SITE_NAME} | Digital Product Studio`,
    },
    description: isFr
      ? "Studio produit digital à Liège. Sites web, applications, MVP, branding et UX/UI. Du concept au produit livré."
      : "Digital product studio in Liege, Belgium. Websites, web apps, MVPs, branding and UX/UI. From concept to shipped product.",
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: isFr ? "fr_BE" : "en_US",
      siteName: SITE_NAME,
      url: SITE_URL,
      images: [
        {
          url: `${SITE_URL}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: isFr
            ? "P-XEL Studio - Studio Digital à Liège"
            : "P-XEL Studio - Digital Product Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pxelstudio",
      images: [`${SITE_URL}/${locale}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: isFr ? SITE_URL : `${SITE_URL}/en`,
      languages: {
        fr: SITE_URL,
        en: `${SITE_URL}/en`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <LocaleProvider locale={locale as Locale}>
      <SetHtmlLang locale={locale} />
      <CustomCursor />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingCTA />
    </LocaleProvider>
  );
}
