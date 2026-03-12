"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { getHeaderNav } from "@/lib/navigation";
import { localePath } from "@/lib/i18n/get-path";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";
import bannerStyles from "../TopBanner/TopBanner.module.css";

function Logo() {
  return (
    <svg
      viewBox="0 0 960.28 212.34"
      className={styles.logoSvg}
      aria-hidden="true"
    >
      <rect className={styles.logoAccent} x="56.87" y="107.19" width="42.06" height="42.06" />
      <rect className={styles.logoAccent} x="98.93" y="46.14" width="42.06" height="42.06" />
      <rect className={styles.logoFill} x="351.99" y="80.18" width="42.06" height="42.06" />
      <rect className={styles.logoAccent} y="65.12" width="42.06" height="42.06" />
      <polygon className={styles.logoFill} points="606.47 29.74 576.73 0 505.82 70.91 434.91 0 405.16 29.74 476.08 100.65 405.16 171.57 434.91 201.31 505.82 130.4 576.73 201.31 606.47 171.57 535.56 100.65 606.47 29.74" />
      <polygon className={styles.logoFill} points="784.42 46.14 784.42 4.08 690.6 4.08 648.53 4.08 648.53 46.14 648.53 78.05 648.53 120.11 648.53 152.03 648.53 194.09 690.6 194.09 784.42 194.09 784.42 152.03 690.6 152.03 690.6 120.11 784.42 120.11 784.42 78.05 690.6 78.05 690.6 46.14 784.42 46.14" />
      <polygon className={styles.logoFill} points="868.54 152.03 868.54 4.08 826.48 4.08 826.48 152.03 826.48 194.09 868.54 194.09 960.28 194.09 960.28 152.03 868.54 152.03" />
      <g>
        <rect className={styles.logoAccent} x="165.92" y="170.28" width="42.06" height="42.06" />
        <path className={styles.logoAccent} d="M250.04,4.08h-84.12v82.12h42.06v-40.06h42.06c15.48,0,28.02,12.55,28.02,28.02v5.01c0,15.48-12.54,28.02-28.02,28.02h-84.12v42.06h84.12c39.21,0,71-31.79,71-71v-3.16c0-39.21-31.79-71-71-71Z" />
      </g>
    </svg>
  );
}

export function Header() {
  const locale = useLocale();
  const headerRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  const isFr = locale === "fr";
  const nav = getHeaderNav(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const checkOverlap = () => {
      const darkSections = document.querySelectorAll(
        '[data-theme="dark"], [data-theme="accent"]'
      );
      const headerEl = headerRef.current;
      const headerBottom = headerEl
        ? headerEl.getBoundingClientRect().bottom
        : 72;
      let found = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerBottom && rect.bottom > 0) {
          found = true;
        }
      });
      setOverDark(found);
    };

    checkOverlap();
    window.addEventListener("scroll", checkOverlap, { passive: true });
    window.addEventListener("resize", checkOverlap, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkOverlap);
      window.removeEventListener("resize", checkOverlap);
    };
  }, []);

  const headerClass = [
    styles.header,
    scrolled && styles.headerScrolled,
    overDark && styles.headerDark,
  ]
    .filter(Boolean)
    .join(" ");

  const bannerText = isFr
    ? { pre: "On prend ", strong: "2-3 nouveaux projets", post: " par mois. ", link: "Verifier la disponibilite", close: "Fermer le bandeau" }
    : { pre: "We take ", strong: "2-3 new projects", post: " per month. ", link: "Check availability", close: "Close banner" };

  return (
    <header ref={headerRef} className={headerClass}>
      {bannerVisible && (
        <div className={bannerStyles.banner}>
          <div className={bannerStyles.inner}>
            <span className={bannerStyles.dot} aria-hidden="true" />
            <span className={bannerStyles.text}>
              {bannerText.pre}<strong>{bannerText.strong}</strong>{bannerText.post}{" "}
              <Link href={localePath("/contact", locale)} className={bannerStyles.link}>
                {bannerText.link}
              </Link>
            </span>
            <button
              className={bannerStyles.close}
              onClick={() => setBannerVisible(false)}
              aria-label={bannerText.close}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className={styles.navBar} style={{ backdropFilter: 'blur(24px) saturate(1.6)', WebkitBackdropFilter: 'blur(24px) saturate(1.6)' }}>
      <div className={styles.inner}>
        <Link href={localePath("/", locale)} className={styles.logo} aria-label="P-XEL Studio">
          <Logo />
        </Link>

        <nav className={styles.desktopNav} aria-label={isFr ? "Navigation principale" : "Main navigation"}>
          {nav.map((item) =>
            item.label === "Contact" ? (
              <Link key={item.href} href={item.href} className={`${styles.navLink} ${styles.contactLink}`}>
                <span className={styles.contactSquare} aria-hidden="true" />
                {item.label}
              </Link>
            ) : (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            )
          )}
          <LanguageSwitcher />
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? (isFr ? "Fermer le menu" : "Close menu") : (isFr ? "Ouvrir le menu" : "Open menu")}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>

      {isOpen && (
        <nav className={styles.mobileNav} aria-label={isFr ? "Navigation mobile" : "Mobile navigation"}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      )}
    </header>
  );
}
