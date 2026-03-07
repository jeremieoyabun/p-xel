import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  heading: string;
  subtext?: string;
}

export function SectionHeading({ heading, subtext }: SectionHeadingProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
    </div>
  );
}
