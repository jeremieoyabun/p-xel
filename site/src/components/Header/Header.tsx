"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { headerNav } from "@/lib/navigation";
import styles from "./Header.module.css";

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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect when header overlaps a dark or accent section
  useEffect(() => {
    const checkOverlap = () => {
      const darkSections = document.querySelectorAll(
        '[data-theme="dark"], [data-theme="accent"]'
      );
      const headerBottom = 72;
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

  return (
    <header className={headerClass}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="P-XEL Studio - Accueil">
          <Logo />
        </Link>

        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {headerNav.map((item) =>
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
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className={styles.mobileNav} aria-label="Navigation mobile">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
