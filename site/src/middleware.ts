import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // English pages are served as-is under the /en prefix.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return;
  }

  // Everything else is French (the default). Render the /fr segment
  // internally without exposing a /fr prefix in the URL.
  //
  // No language auto-redirect: French is always served at the root, for
  // every visitor and for Googlebot. English is an explicit opt-in via /en
  // (the language switcher). Auto-redirecting by Accept-Language would let
  // English-browser users and crawlers land on the English version at the
  // canonical root, which breaks French SEO.
  const url = request.nextUrl.clone();
  url.pathname = `/fr${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon|fonts|images|legacy-assets|.*\\..*).*)"],
};
