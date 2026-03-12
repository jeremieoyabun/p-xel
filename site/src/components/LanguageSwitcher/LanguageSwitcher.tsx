"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/locale-context";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const switchTo = locale === "fr" ? "en" : "fr";

  // Strip any existing locale prefix (/fr or /en) to get the clean path
  const cleanPath = pathname.replace(/^\/(fr|en)(\/|$)/, "/") || "/";

  let targetPath: string;
  if (switchTo === "en") {
    targetPath = `/en${cleanPath === "/" ? "/" : cleanPath}`;
  } else {
    targetPath = cleanPath;
  }

  const handleClick = () => {
    document.cookie = `NEXT_LOCALE=${switchTo};path=/;max-age=${60 * 60 * 24 * 365}`;
  };

  return (
    <a
      href={targetPath}
      onClick={handleClick}
      className={styles.switcher}
      aria-label={switchTo === "en" ? "Switch to English" : "Passer en francais"}
    >
      {switchTo.toUpperCase()}
    </a>
  );
}
