import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

/*
 * Font loading: Self-hosted WOFF2 files via next/font/local.
 * Uncomment and replace when font files are added to public/fonts/.
 *
 * import localFont from "next/font/local";
 *
 * const spaceGrotesk = localFont({
 *   src: [
 *     { path: "../../public/fonts/SpaceGrotesk-Medium.woff2", weight: "500" },
 *     { path: "../../public/fonts/SpaceGrotesk-Bold.woff2", weight: "700" },
 *   ],
 *   variable: "--font-heading",
 *   display: "swap",
 *   preload: true,
 * });
 *
 * const satoshi = localFont({
 *   src: [
 *     { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400" },
 *     { path: "../../public/fonts/Satoshi-Medium.woff2", weight: "500" },
 *     { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700" },
 *   ],
 *   variable: "--font-body",
 *   display: "swap",
 *   preload: true,
 * });
 *
 * const jetbrainsMono = localFont({
 *   src: [{ path: "../../public/fonts/JetBrainsMono-Regular.woff2", weight: "400" }],
 *   variable: "--font-mono",
 *   display: "swap",
 *   preload: false,
 * });
 */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | P-XEL Studio",
    default: `${SITE_NAME} | Studio Digital à Liège`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    site: "@pxelstudio",
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
    canonical: SITE_URL,
  },
  verification: {
    // Add Google Search Console verification code when available
    // google: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // When fonts are loaded, add font CSS variable classes to <html>:
  // className={`${spaceGrotesk.variable} ${satoshi.variable} ${jetbrainsMono.variable}`}
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
