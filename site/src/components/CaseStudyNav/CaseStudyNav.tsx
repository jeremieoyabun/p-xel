import Link from "next/link";
import { localePath } from "@/lib/i18n/get-path";
import { ArrowRight } from "lucide-react";
import styles from "./CaseStudyNav.module.css";

interface CaseStudyNavProps {
  nextSlug: string;
  nextTitle: string;
  locale: string;
}

export function CaseStudyNav({ nextSlug, nextTitle, locale }: CaseStudyNavProps) {
  return (
    <div className={styles.nav}>
      <span className={styles.label}>{locale === "fr" ? "Projet suivant" : "Next project"}</span>
      <Link href={localePath(`/work/${nextSlug}/`, locale)} className={styles.link}>
        <span className={styles.title}>{nextTitle}</span>
        <ArrowRight size={24} className={styles.arrow} />
      </Link>
    </div>
  );
}
