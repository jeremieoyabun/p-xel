import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { ProcessStep } from "@/components/ProcessStep/ProcessStep";
import { Button } from "@/components/Button/Button";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import {
  breadcrumbSchema,
  localBusinessSchema,
  faqSchema,
} from "@/lib/schema";
import { CONTACT } from "@/lib/constants";
import {
  liegeIntro,
  liegeServices,
  liegeWhy,
  liegeContext,
  liegeProjects,
  liegeProcess,
  liegeFaq,
  liegeOtherCities,
  liegeCta,
} from "@/lib/content/liege";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Agence Web à Liège | P-XEL Studio",
  description:
    "Studio digital basé à Liège. Sites web, applications, MVP, branding et UX/UI. Du concept au produit livré. 16+ ans d'expertise. Réservez un appel.",
  alternates: { canonical: "/liege/" },
  openGraph: {
    title: "Agence Web à Liège | P-XEL Studio",
    description:
      "Studio digital basé à Liège. Sites web, applications, MVP, branding et UX/UI. Du concept au produit livré.",
    url: "/liege/",
  },
};

export default function LiegePage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Liège", url: "/liege/" },
          ]),
          localBusinessSchema(),
          faqSchema(liegeFaq),
        ]}
      />

      {/* Opening */}
      <Section>
        <FadeInUp>
          <Label>{liegeIntro.label}</Label>
          <SectionHeading
            heading={liegeIntro.heading}
            subtext={liegeIntro.subtext}
          />
          <div className={styles.heroCta}>
            <Button variant="primary" href={CONTACT.calendlyUrl}>
              Réserver un appel
            </Button>
            <Button variant="ghost" href="/work/">
              Voir nos projets
            </Button>
          </div>
        </FadeInUp>
      </Section>

      {/* Services */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{liegeServices.label}</Label>
          <SectionHeading heading={liegeServices.heading} />
          <div className={styles.servicesGrid}>
            {liegeServices.items.map((item) => (
              <div key={item.title} className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceBody}>{item.body}</p>
                {item.href && (
                  <Link href={item.href} className={styles.serviceLink}>
                    En savoir plus
                  </Link>
                )}
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Why P-XEL */}
      <Section>
        <FadeInUp>
          <Label>{liegeWhy.label}</Label>
          <SectionHeading heading={liegeWhy.heading} />
          <div className={styles.whyGrid}>
            {liegeWhy.points.map((point) => (
              <div key={point.title} className={styles.whyPoint}>
                <h3 className={styles.whyTitle}>{point.title}</h3>
                <p className={styles.whyBody}>{point.body}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Local Context */}
      <Section>
        <FadeInUp>
          <Label>{liegeContext.label}</Label>
          <SectionHeading heading={liegeContext.heading} />
          <div className={styles.contextBody}>
            {liegeContext.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Selected Projects */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{liegeProjects.label}</Label>
          <SectionHeading heading={liegeProjects.heading} />
          <div className={styles.projectGrid}>
            {liegeProjects.studies.map((study) => (
              <Link
                key={study.name}
                href={study.href}
                className={styles.projectCard}
              >
                <h3 className={styles.projectName}>{study.name}</h3>
                <p className={styles.projectBody}>{study.body}</p>
                <span className={styles.projectLink}>Voir le projet</span>
              </Link>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Process */}
      <Section>
        <FadeInUp>
          <Label>{liegeProcess.label}</Label>
          <SectionHeading heading={liegeProcess.heading} />
          <div className={styles.processGrid}>
            {liegeProcess.steps.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.body}
              />
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* FAQ */}
      <Section>
        <FadeInUp>
          <Label>Questions fréquentes</Label>
          <FAQ items={liegeFaq} />
        </FadeInUp>
      </Section>

      {/* Other Cities */}
      <Section>
        <FadeInUp>
          <Label>{liegeOtherCities.label}</Label>
          <p className={styles.otherCities}>{liegeOtherCities.text}</p>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={liegeCta.heading}
          subtext={liegeCta.subtext}
          primaryLabel="Réserver un appel"
          primaryHref={CONTACT.calendlyUrl}
          secondaryLabel="Lancer mon projet"
          secondaryHref="/contact/"
        />
      </Section>
    </>
  );
}
