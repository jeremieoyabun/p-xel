import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["fr", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale prefix
  const hasLocale = LOCALES.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (hasLocale) return;

  // Determine locale: cookie > Accept-Language > default
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  let locale =
    cookieLocale && LOCALES.includes(cookieLocale) ? cookieLocale : null;

  if (!locale) {
    const acceptLang = request.headers.get("accept-language") || "";
    locale = acceptLang.toLowerCase().startsWith("en") ? "en" : "fr";
  }

  // English detected on first visit: redirect to /en/
  if (locale === "en" && !cookieLocale) {
    const response = NextResponse.redirect(
      new URL(`/en${pathname}`, request.url)
    );
    response.cookies.set("NEXT_LOCALE", "en", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  // French (default): rewrite internally to /fr/...
  const url = request.nextUrl.clone();
  url.pathname = `/fr${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon|fonts|images|legacy-assets|.*\\..*).*)",
  ],
};
