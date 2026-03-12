"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { CalendlyPopup } from "@/components/CalendlyPopup/CalendlyPopup";
import s from "./FloatingCTA.module.css";

export function FloatingCTA() {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${s.bar} ${visible ? s.barVisible : ""}`}>
      <div className={s.inner}>
        <CalendlyPopup label={locale === "fr" ? "Reserver un appel" : "Book a call"} variant="light" />
      </div>
    </div>
  );
}
