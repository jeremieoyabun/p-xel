"use client";

import { useEffect, useCallback } from "react";
import styles from "../PXelButton/PXelButton.module.css";

const TALLY_FORM_ID = "MeeyRp";

interface TallyPopupProps {
  label: string;
  variant?: "dark" | "light";
}

export function TallyPopup({ label, variant = "dark" }: TallyPopupProps) {
  useEffect(() => {
    if (document.querySelector('script[src*="tally.so/widgets/embed.js"]')) return;

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const openPopup = useCallback(() => {
    const Tally = (window as unknown as Record<string, unknown>).Tally as
      | { openPopup?: (id: string, opts?: Record<string, unknown>) => void }
      | undefined;

    if (Tally?.openPopup) {
      Tally.openPopup(TALLY_FORM_ID, {
        layout: "modal",
        width: 700,
        autoClose: 3000,
      });
    } else {
      window.open(`https://tally.so/r/${TALLY_FORM_ID}`, "_blank");
    }
  }, []);

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[variant]}`}
      onClick={openPopup}
    >
      <span className={styles.ink} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
      <span className={styles.circle} aria-hidden="true">
        <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 12h10" />
          <path d="M13 8l4 4-4 4" />
        </svg>
      </span>
    </button>
  );
}
