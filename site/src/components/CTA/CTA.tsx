import { Button } from "../Button/Button";
import styles from "./CTA.module.css";

interface CTAProps {
  heading: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <div className={styles.cta}>
      <h2 className={styles.heading}>{heading}</h2>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
      <div className={styles.actions}>
        <Button variant="primary" href={primaryHref}>
          {primaryLabel}
        </Button>
        {secondaryLabel && secondaryHref && (
          <Button variant="ghost" href={secondaryHref}>
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
