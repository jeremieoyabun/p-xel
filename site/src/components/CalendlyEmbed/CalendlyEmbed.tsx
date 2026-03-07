"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CalendlyEmbed.module.css";

interface CalendlyEmbedProps {
  url: string;
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    if (!loaded || !containerRef.current) return;

    const calendly = (window as unknown as Record<string, unknown>).Calendly as
      | { initInlineWidget?: (opts: Record<string, unknown>) => void }
      | undefined;

    if (calendly?.initInlineWidget) {
      calendly.initInlineWidget({
        url: `${url}?hide_gdpr_banner=1&background_color=111117&text_color=e8e8ec&primary_color=6608f9`,
        parentElement: containerRef.current,
      });
    }
  }, [loaded, url]);

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} style={{ width: "100%", minHeight: "660px" }}>
        {!loaded && (
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
