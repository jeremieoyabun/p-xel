"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CalendlyEmbed.module.css";

interface CalendlyEmbedProps {
  url: string;
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Load CSS if not already present
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Poll until window.Calendly is available
    const waitForCalendly = () => {
      const c = (window as unknown as Record<string, unknown>).Calendly;
      if (c) {
        setReady(true);
      } else {
        setTimeout(waitForCalendly, 150);
      }
    };

    // Check if script already loaded
    const existing = document.querySelector(
      'script[src*="calendly.com/assets/external/widget.js"]'
    );
    if (existing) {
      waitForCalendly();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => waitForCalendly();
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!ready || !containerRef.current) return;

    const calendly = (window as unknown as Record<string, unknown>).Calendly as
      | { initInlineWidget?: (opts: Record<string, unknown>) => void }
      | undefined;

    if (calendly?.initInlineWidget) {
      calendly.initInlineWidget({
        url: `${url}?hide_gdpr_banner=1&background_color=111117&text_color=e8e8ec&primary_color=6608f9`,
        parentElement: containerRef.current,
      });
    }
  }, [ready, url]);

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} style={{ width: "100%", minHeight: "700px" }}>
        {!ready && (
          <div className={styles.placeholder}>
            <span className={styles.placeholderText}>
              Chargement du calendrier...
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.fallbackLink}
            >
              Ouvrir Calendly
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
