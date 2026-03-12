"use client";

import { useEffect, useRef } from "react";
import styles from "./ScrollReveal.module.css";

interface ScrollRevealProps {
  text: string;
}

export function ScrollReveal({ text }: ScrollRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const spansRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const spans = spansRef.current;
    if (spans.length === 0) return;

    const BASE_OPACITY = 0.12;
    const FEATHER = 12;

    function render() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.7;
      const end = -(rect.height - vh * 0.3);
      const y = start - rect.top;
      const progress = Math.min(1, Math.max(0, y / (start - end)));

      const N = spans.length;
      const frontier = progress * (N - 1);

      for (let i = 0; i < N; i++) {
        const d = i - frontier;
        let opacity: number;
        let glow = "";
        if (d <= 0) {
          opacity = 1;
          // Tight violet laser trail just after reveal
          if (d > -FEATHER * 0.8) {
            const t = -d / (FEATHER * 0.8);
            const g = 1.0 * (1 - t);
            glow = `0 0 4px rgba(130,20,255,${g.toFixed(2)}), 0 0 8px rgba(130,20,255,${(g * 0.7).toFixed(2)}), 0 0 16px rgba(102,8,249,${(g * 0.4).toFixed(2)})`;
          }
        } else if (d < FEATHER * 0.5) {
          const t = d / (FEATHER * 0.5);
          const eased = 1 - (1 - t) * (1 - t);
          opacity = BASE_OPACITY + (1 - BASE_OPACITY) * (1 - eased);
          // Sharp leading laser glow
          const g = 0.9 * (1 - t);
          glow = `0 0 3px rgba(130,20,255,${g.toFixed(2)}), 0 0 8px rgba(130,20,255,${(g * 0.6).toFixed(2)})`;
        } else {
          opacity = BASE_OPACITY;
        }
        spans[i].style.color = `rgba(255,255,255,${opacity})`;
        spans[i].style.textShadow = glow;
      }
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          render();
          ticking = false;
        });
        ticking = true;
      }
    }

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Split text into spans for per-character opacity control
  const chars = text.split("");

  return (
    <p ref={containerRef} className={styles.text}>
      {chars.map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) spansRef.current[i] = el;
          }}
          style={{ color: "rgba(255,255,255,0.12)" }}
        >
          {char}
        </span>
      ))}
    </p>
  );
}
