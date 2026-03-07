import { Button } from "../Button/Button";
import { SlideButton } from "../SlideButton/SlideButton";
import styles from "./CTA.module.css";

interface CTAProps {
  heading: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  primaryHoverLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  primaryHoverLabel = "C'est parti",
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <div className={styles.cta}>
      <h2 className={styles.heading}>{heading}</h2>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
      <div className={styles.actions}>
        <SlideButton
          label={primaryLabel}
          hoverLabel={primaryHoverLabel}
          href={primaryHref}
          variant="dark"
        />
        {secondaryLabel && secondaryHref && (
          <Button variant="ghost" href={secondaryHref}>
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
