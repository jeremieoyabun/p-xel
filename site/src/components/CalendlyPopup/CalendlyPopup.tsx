"use client";

import { useCallback, useRef } from "react";
import styles from "../PXelButton/PXelButton.module.css";

const CALENDLY_URL =
  "https://calendly.com/p-xel-studio/30min?hide_gdpr_banner=1&background_color=111117&text_color=e8e8ec&primary_color=6608f9";

function loadCalendlyAssets() {
  if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) return;

  const link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.head.appendChild(script);
}

interface CalendlyPopupProps {
  label: string;
  variant?: "dark" | "light";
}

export function CalendlyPopup({ label, variant = "dark" }: CalendlyPopupProps) {
  const preloaded = useRef(false);

  const preload = useCallback(() => {
    if (preloaded.current) return;
    preloaded.current = true;
    loadCalendlyAssets();
  }, []);

  const openPopup = useCallback(() => {
    loadCalendlyAssets();

    const calendly = (window as unknown as Record<string, unknown>).Calendly as
      | { initPopupWidget?: (opts: Record<string, unknown>) => void }
      | undefined;

    if (calendly?.initPopupWidget) {
      calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  }, []);

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[variant]}`}
      onClick={openPopup}
      onMouseEnter={preload}
      onFocus={preload}
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
