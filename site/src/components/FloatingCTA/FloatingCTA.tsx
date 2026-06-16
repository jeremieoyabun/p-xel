"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { CalendlyPopup } from "@/components/CalendlyPopup/CalendlyPopup";
import { getConsent } from "@/components/CookieBanner/CookieBanner";
import s from "./FloatingCTA.module.css";

export function FloatingCTA() {
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  // The cookie banner sits at the bottom-center and would overlap (and block)
  // this CTA. Only show the floating bar once consent has been decided.
  const [consentDecided, setConsentDecided] = useState(true);

  useEffect(() => {
    setConsentDecided(getConsent() !== null);
    const onConsent = () => setConsentDecided(true);
    window.addEventListener("pxel:consent", onConsent);

    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("pxel:consent", onConsent);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const visible = scrolled && consentDecided;

  return (
    <div className={`${s.bar} ${visible ? s.barVisible : ""}`}>
      <div className={s.inner}>
        <CalendlyPopup label={locale === "fr" ? "Réserver un appel" : "Book a call"} variant="light" />
      </div>
    </div>
  );
}
