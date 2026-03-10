import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { CaseStudyNav } from "@/components/CaseStudyNav/CaseStudyNav";
import { CalendlyPopup } from "@/components/CalendlyPopup/CalendlyPopup";
import { TallyPopup } from "@/components/TallyPopup/TallyPopup";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import type { CaseStudy } from "@/lib/content/case-studies";
import styles from "./CaseStudyPage.module.css";

interface CaseStudyPageProps {
  study: CaseStudy;
}

export function CaseStudyPage({ study }: CaseStudyPageProps) {
  const { beats } = study;

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Work", url: "/work/" },
            { name: study.title, url: `/work/${study.slug}/` },
          ]),
        ]}
      />

      {/* Hero */}
      <Section>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{study.title}</h1>
            <div className={styles.heroTags}>
              {study.tags.map((tag) => (
                <span key={tag} className={styles.heroTag}>
                  {tag}
                </span>
              ))}
            </div>
            <p className={styles.heroTagline}>{study.tagline}</p>
            {study.keyResult && (
              <span className={styles.heroResult}>{study.keyResult}</span>
            )}
            <span className={styles.heroPeriod}>{study.period}</span>
          </div>
          <div className={styles.heroImage}>
            <span className={styles.heroImageText}>{study.title}</span>
          </div>
        </div>
      </Section>

      {/* Beats */}
      {Object.entries(beats).map(([key, beat]) => (
        <Section key={key}>
          <FadeInUp>
            <div className={styles.beat}>
              <Label>{beat.label}</Label>
              <SectionHeading heading={beat.heading} />
              <div className={styles.beatBody}>
                {beat.body.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeInUp>
        </Section>
      ))}

      {/* Deliverables */}
      <Section variant="accent">
        <FadeInUp>
          <div className={styles.deliverables}>
            <Label>Livrables</Label>
            <ul className={styles.deliverablesList}>
              {study.deliverables.map((item) => (
                <li key={item} className={styles.deliverableItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeInUp>

        {study.stack && (
          <FadeInUp>
            <div className={styles.stack}>
              <Label>Technologies</Label>
              <div className={styles.stackList}>
                {study.stack.map((tech) => (
                  <span key={tech} className={styles.stackItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>
        )}
      </Section>

      {/* Navigation + CTA */}
      <Section>
        <CaseStudyNav
          nextSlug={study.navigation.next.slug}
          nextTitle={study.navigation.next.title}
        />

        <div className={styles.ctaBlock}>
          <h3 className={styles.ctaHeading}>{study.cta.heading}</h3>
          <p className={styles.ctaBody}>
            {study.cta.body}{" "}
            <Link
              href={study.cta.serviceLink.href}
              className={styles.ctaServiceLink}
            >
              En savoir plus
            </Link>
          </p>
          <div className={styles.ctaActions}>
            <CalendlyPopup label="Réserver un appel" variant="dark" />
            <TallyPopup label="Lancer mon projet" variant="dark" />
          </div>
        </div>
      </Section>
    </>
  );
}
