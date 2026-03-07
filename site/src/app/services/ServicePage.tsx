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
  serviceSchema,
  faqSchema,
} from "@/lib/schema";
import { CONTACT } from "@/lib/constants";
import type { ServicePage as ServicePageData } from "@/lib/content/services/types";
import styles from "./ServicePage.module.css";

interface ServicePageProps {
  service: ServicePageData;
}

export function ServicePage({ service }: ServicePageProps) {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: service.hero.label, url: `/services/${service.slug}/` },
          ]),
          serviceSchema(service.hero.label, service.metaDescription),
          faqSchema(service.faq.items),
        ]}
      />

      {/* Hero */}
      <Section>
        <FadeInUp>
          <Label>{service.hero.label}</Label>
          <SectionHeading
            heading={service.hero.heading}
            subtext={service.hero.subheadline}
          />
          <div className={styles.heroCta}>
            <Button variant="primary" href={CONTACT.calendlyUrl}>
              Réserver un appel
            </Button>
            <Button variant="ghost" href="/contact/">
              Lancer mon projet
            </Button>
          </div>
        </FadeInUp>
      </Section>

      {/* Problem */}
      <Section>
        <FadeInUp>
          <Label>{service.problem.label}</Label>
          <SectionHeading heading={service.problem.heading} />
          <div className={styles.problemIntro}>
            {service.problem.intro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={styles.problemPoints}>
            {service.problem.points.map((point, i) => (
              <div key={i} className={styles.problemPoint}>
                {point}
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* What We Build */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{service.whatWeBuild.label}</Label>
          <SectionHeading heading={service.whatWeBuild.heading} />
          <p className={styles.offerIntro}>{service.whatWeBuild.intro}</p>
          <div className={styles.offerGrid}>
            {service.whatWeBuild.items.map((item) => (
              <div key={item.title} className={styles.offerItem}>
                <h3 className={styles.offerTitle}>{item.title}</h3>
                <p className={styles.offerBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Approach */}
      <Section>
        <FadeInUp>
          <Label>{service.approach.label}</Label>
          <SectionHeading heading={service.approach.heading} />
          <p className={styles.approachIntro}>{service.approach.intro}</p>
          <div className={styles.approachGrid}>
            {service.approach.steps.map((step) => (
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

      {/* Deliverables */}
      <Section>
        <FadeInUp>
          <Label>{service.deliverables.label}</Label>
          <SectionHeading heading={service.deliverables.heading} />
          {service.deliverables.intro && (
            <p className={styles.deliverablesIntro}>
              {service.deliverables.intro}
            </p>
          )}
          <ul className={styles.deliverablesList}>
            {service.deliverables.items.map((item) => (
              <li key={item} className={styles.deliverableItem}>
                {item}
              </li>
            ))}
          </ul>
          {service.deliverables.note && (
            <p className={styles.deliverablesNote}>
              {service.deliverables.note}
            </p>
          )}
        </FadeInUp>
      </Section>

      {/* Case Studies */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{service.caseStudies.label}</Label>
          <SectionHeading heading={service.caseStudies.heading} />
          <div className={styles.studyGrid}>
            {service.caseStudies.studies.map((study) => (
              <Link
                key={study.name}
                href={study.href}
                className={styles.studyCard}
              >
                <h3 className={styles.studyName}>{study.name}</h3>
                <div className={styles.studyTags}>
                  {study.tags.map((tag) => (
                    <span key={tag} className={styles.studyTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={styles.studyBody}>{study.body}</p>
                <span className={styles.studyLink}>Voir le projet</span>
              </Link>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Investment */}
      <Section>
        <FadeInUp>
          <Label>{service.investment.label}</Label>
          <SectionHeading heading={service.investment.heading} />
          <div className={styles.investmentBody}>
            {service.investment.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <span className={styles.investmentAnchor}>
            {service.investment.anchor}
          </span>
          <p className={styles.investmentNote}>{service.investment.note}</p>
          <div className={styles.investmentCta}>
            <Button variant="ghost" href="/contact/">
              Demander une estimation
            </Button>
          </div>
        </FadeInUp>
      </Section>

      {/* FAQ */}
      <Section>
        <FadeInUp>
          <Label>{service.faq.label}</Label>
          <FAQ items={service.faq.items} />
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={service.cta.heading}
          subtext={service.cta.subtext}
          primaryLabel="Réserver un appel"
          primaryHref={CONTACT.calendlyUrl}
          secondaryLabel="Lancer mon projet"
          secondaryHref="/contact/"
        />
      </Section>
    </>
  );
}
