"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { localePath } from "@/lib/i18n/get-path";
import s from "./CookieBanner.module.css";

const CONSENT_KEY = "pxel_cookie_consent";

export type ConsentValue = "accepted" | "declined" | null;

export function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const val = localStorage.getItem(CONSENT_KEY);
  if (val === "accepted" || val === "declined") return val;
  return null;
}

export function CookieBanner() {
  const locale = useLocale();
  const isFr = locale === "fr";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner only if no consent has been recorded
    const consent = getConsent();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = useCallback((choice: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, choice);
    setVisible(false);
    window.dispatchEvent(new CustomEvent("pxel:consent", { detail: choice }));
  }, []);

  return (
    <div
      className={`${s.banner} ${visible ? s.bannerVisible : ""}`}
      role="dialog"
      aria-label={isFr ? "Consentement cookies" : "Cookie consent"}
    >
      <p className={s.text}>
        {isFr
          ? "Ce site utilise des cookies d'analyse pour mesurer les performances et améliorer votre expérience. Aucun cookie publicitaire. "
          : "This site uses analytics cookies to measure performance and improve your experience. No advertising cookies. "}
        <Link href={localePath("/politique-confidentialite/", locale)}>
          {isFr ? "Politique de confidentialité" : "Privacy policy"}
        </Link>
      </p>
      <div className={s.actions}>
        <button
          className={s.accept}
          onClick={() => handleChoice("accepted")}
        >
          {isFr ? "Accepter" : "Accept"}
        </button>
        <button
          className={s.decline}
          onClick={() => handleChoice("declined")}
        >
          {isFr ? "Refuser" : "Decline"}
        </button>
      </div>
    </div>
  );
}
