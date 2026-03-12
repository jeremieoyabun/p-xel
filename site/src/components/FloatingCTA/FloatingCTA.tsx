"use client";

import { useState, useEffect } from "react";
import { CalendlyPopup } from "@/components/CalendlyPopup/CalendlyPopup";
import s from "./FloatingCTA.module.css";

export function FloatingCTA() {
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
        <span className={s.text}>Un projet en tête ?</span>
        <CalendlyPopup label="Réserver un appel" variant="light" />
      </div>
    </div>
  );
}
