import { SITE_URL } from "./constants";

/**
 * Removes trailing slash(es). The site serves the NO-trailing-slash URL as 200;
 * the trailing-slash variant 308-redirects. Canonicals and sitemap URLs must
 * therefore be slash-free (root "/" excepted) to avoid pointing at redirects.
 */
function trimTrailingSlash(path: string): string {
  return path.replace(/\/+$/, "");
}

/**
 * Returns the canonical URL path for a locale.
 * French is the default and lives WITHOUT a prefix (the `/fr` prefix 301-redirects).
 * English lives under `/en`. No trailing slash (root excepted).
 *
 * @param locale "fr" | "en"
 * @param path   route path, e.g. "/services/creation-site-web/" or "/" for home
 */
export function localizedPath(locale: string, path: string): string {
  const base = trimTrailingSlash(path); // "" for root
  if (locale === "en") return `/en${base}`; // "/en" for root
  return base || "/";
}

/**
 * Builds Next.js `alternates` (canonical + hreflang languages) for a page.
 * Guarantees the canonical points to a 200 URL (no redirect) and emits fr/en/x-default hreflang.
 */
export function buildAlternates(locale: string, path: string) {
  const frUrl = `${SITE_URL}${localizedPath("fr", path)}`;
  const enUrl = `${SITE_URL}${localizedPath("en", path)}`;
  return {
    canonical: locale === "en" ? enUrl : frUrl,
    languages: {
      fr: frUrl,
      en: enUrl,
      "x-default": frUrl,
    },
  };
}
