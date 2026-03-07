import styles from "./PXelButton.module.css";

interface PXelButtonProps {
  label: string;
  href: string;
  variant?: "dark" | "light";
}

export function PXelButton({
  label,
  href,
  variant = "dark",
}: PXelButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[variant]}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
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
