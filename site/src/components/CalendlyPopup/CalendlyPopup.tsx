import styles from "../PXelButton/PXelButton.module.css";

const CALENDLY_URL = "https://calendly.com/p-xel-studio/30min";

interface CalendlyPopupProps {
  label: string;
  variant?: "dark" | "light";
}

/**
 * Book-a-call button.
 *
 * Intentionally a plain link that opens Calendly in a new tab. A previous
 * implementation injected Calendly's widget.js and opened an in-page popup,
 * which could fail or freeze the page in some browsers (blocked script, stuck
 * overlay). A link is bulletproof: no injected script, nothing to crash.
 */
export function CalendlyPopup({ label, variant = "dark" }: CalendlyPopupProps) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.btn} ${styles[variant]}`}
      data-cta="book-call"
    >
      <span className={styles.ink} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
      <span className={styles.circle} aria-hidden="true">
        <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 12h10" />
          <path d="M13 8l4 4-4 4" />
        </svg>
      </span>
    </a>
  );
}
