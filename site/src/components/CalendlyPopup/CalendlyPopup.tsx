"use client";

import { useCallback, useEffect } from "react";
import styles from "../PXelButton/PXelButton.module.css";

const CALENDLY_URL =
  "https://calendly.com/p-xel-studio/30min?hide_gdpr_banner=1&background_color=111117&text_color=e8e8ec&primary_color=6608f9";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyApi = { initPopupWidget?: (opts: Record<string, unknown>) => void };

function getCalendly(): CalendlyApi | undefined {
  return (window as unknown as { Calendly?: CalendlyApi }).Calendly;
}

/** Loads the Calendly assets once and returns the (possibly already-loaded) script element. */
function loadCalendlyAssets(): HTMLScriptElement {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${SCRIPT_SRC}"]`
  );
  if (existing) return existing;

  const link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = SCRIPT_SRC;
  script.async = true;
  document.head.appendChild(script);
  return script;
}

interface CalendlyPopupProps {
  label: string;
  variant?: "dark" | "light";
}

export function CalendlyPopup({ label, variant = "dark" }: CalendlyPopupProps) {
  // Eagerly load Calendly once the page is idle so the popup is ready on first click,
  // including on mobile where there is no hover to trigger a preload.
  useEffect(() => {
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    const id = idle(() => loadCalendlyAssets());
    return () => {
      const cancel = (window as unknown as { cancelIdleCallback?: (h: number) => void })
        .cancelIdleCallback;
      if (cancel && typeof id === "number") cancel(id);
    };
  }, []);

  const preload = useCallback(() => {
    loadCalendlyAssets();
  }, []);

  const openPopup = useCallback(() => {
    const open = () => getCalendly()?.initPopupWidget?.({ url: CALENDLY_URL });

    if (getCalendly()?.initPopupWidget) {
      open();
      return;
    }

    // Script not ready yet: load it and open the popup as soon as it is available,
    // polling briefly. window.open is only a last resort if Calendly never loads.
    loadCalendlyAssets();
    let tries = 0;
    const timer = window.setInterval(() => {
      if (getCalendly()?.initPopupWidget) {
        window.clearInterval(timer);
        open();
      } else if (++tries > 40) {
        window.clearInterval(timer);
        window.open(CALENDLY_URL, "_blank", "noopener");
      }
    }, 100);
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
