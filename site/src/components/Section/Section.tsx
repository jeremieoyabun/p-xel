import { type ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  variant?: "dark" | "light" | "accent";
  id?: string;
  className?: string;
  narrow?: boolean;
  fullHeight?: boolean;
}

export function Section({
  children,
  variant = "dark",
  id,
  className,
  narrow,
  fullHeight,
}: SectionProps) {
  return (
    <section
      id={id}
      data-theme={variant}
      className={[
        styles.section,
        styles[variant],
        narrow && styles.narrow,
        fullHeight && styles.fullHeight,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
