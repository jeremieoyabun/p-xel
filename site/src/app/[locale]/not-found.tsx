import { Section } from "@/components/Section/Section";
import { Button } from "@/components/Button/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  // Note: Next.js not-found pages don't receive params directly.
  // Locale-aware content can be added once middleware/layout passes locale.
  return (
    <Section fullHeight>
      <div className={styles.container}>
        <span className={styles.code}>404</span>
        <h1 className={styles.heading}>Page introuvable.</h1>
        <p className={styles.body}>
          Cette page n&apos;existe pas ou a ete deplacee.
        </p>
        <div className={styles.actions}>
          <Button variant="primary" href="/">
            Retour a l&apos;accueil
          </Button>
          <Button variant="ghost" href="/contact/">
            Nous contacter
          </Button>
        </div>
      </div>
    </Section>
  );
}
