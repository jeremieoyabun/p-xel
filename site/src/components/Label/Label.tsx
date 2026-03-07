import styles from "./Label.module.css";

interface LabelProps {
  children: string;
}

export function Label({ children }: LabelProps) {
  return <span className={styles.label}>{children}</span>;
}
