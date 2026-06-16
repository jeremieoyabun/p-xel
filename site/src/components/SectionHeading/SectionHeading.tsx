"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  heading: string;
  subtext?: string;
  /** Heading level. Use "h1" for the page's main (hero) heading. Defaults to "h2". */
  as?: "h1" | "h2";
}

export function SectionHeading({ heading, subtext, as = "h2" }: SectionHeadingProps) {
  const Heading = as;
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.headingMask}>
        <Heading className={[styles.heading, revealed ? styles.revealed : ""].join(" ")}>
          {heading}
        </Heading>
      </div>
      {subtext && (
        <p className={[styles.subtext, revealed ? styles.subtextRevealed : ""].join(" ")}>
          {subtext}
        </p>
      )}
    </div>
  );
}
