import type { Locale } from "./config";

export function localePath(path: string, locale: Locale): string {
  if (locale === "fr") return path;
  return `/en${path}`;
}
