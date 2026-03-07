"use client";

import styles from "./SlideButton.module.css";

interface SlideButtonProps {
  label: string;
  hoverLabel?: string;
  href: string;
  variant?: "dark" | "light";
}

export function SlideButton({
  label,
  hoverLabel = "C'est parti",
  href,
  variant = "dark",
}: SlideButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[variant]}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <span className={styles.track} />
      <span className={styles.orb} aria-hidden="true">
        <span className={styles.dot} />
        <svg
          className={styles.arrow}
          viewBox="0 0 22 22"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 11h12M12 6l5 5-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={styles.texts}>
        <span className={`${styles.text} ${styles.textDefault}`}>{label}</span>
        <span className={`${styles.text} ${styles.textHover}`}>
          {hoverLabel}
        </span>
      </span>
      <span className={styles.underglow} aria-hidden="true" />
    </a>
  );
}
