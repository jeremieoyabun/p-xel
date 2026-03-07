import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CaseStudyNav.module.css";

interface CaseStudyNavProps {
  nextSlug: string;
  nextTitle: string;
}

export function CaseStudyNav({ nextSlug, nextTitle }: CaseStudyNavProps) {
  return (
    <div className={styles.nav}>
      <span className={styles.label}>Projet suivant</span>
      <Link href={`/work/${nextSlug}/`} className={styles.link}>
        <span className={styles.title}>{nextTitle}</span>
        <ArrowRight size={24} className={styles.arrow} />
      </Link>
    </div>
  );
}
