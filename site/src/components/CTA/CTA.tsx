import { CalendlyPopup } from "../CalendlyPopup/CalendlyPopup";
import { TallyPopup } from "../TallyPopup/TallyPopup";
import styles from "./CTA.module.css";

interface CTAProps {
  heading: string;
  subtext?: string;
  primaryLabel: string;
  secondaryLabel?: string;
}

export function CTA({
  heading,
  subtext,
  primaryLabel,
  secondaryLabel,
}: CTAProps) {
  return (
    <div className={styles.cta}>
      <h2 className={styles.heading}>{heading}</h2>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
      <div className={styles.actions}>
        <CalendlyPopup label={primaryLabel} variant="dark" />
        {secondaryLabel && (
          <TallyPopup label={secondaryLabel} variant="dark" />
        )}
      </div>
    </div>
  );
}
