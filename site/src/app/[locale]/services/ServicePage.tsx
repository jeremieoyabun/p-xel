import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { ProcessStep } from "@/components/ProcessStep/ProcessStep";
import { Button } from "@/components/Button/Button";
import { CalendlyPopup } from "@/components/CalendlyPopup/CalendlyPopup";
import { TallyPopup } from "@/components/TallyPopup/TallyPopup";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import {
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/schema";
import { getArticlesForService } from "@/lib/articles";
import { SERVICE_LABELS } from "@/lib/service-labels";
import type { ServicePage as ServicePageData } from "@/lib/content/services/types";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/get-path";
import styles from "./ServicePage.module.css";

const ALL_SERVICE_SLUGS = [
  "creation-site-web",
  "application-web-mvp",
  "ux-ui-design",
  "branding-identite",
  "ai-studio",
];

interface ServicePageProps {
  service: ServicePageData;
  locale?: Locale;
}

export function ServicePage({ service, locale = "fr" }: ServicePageProps) {
  const isFr = locale === "fr";
  const relatedArticles = getArticlesForService(service.slug, locale);
  const otherServices = ALL_SERVICE_SLUGS.filter((s) => s !== service.slug).slice(0, 3);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: isFr ? "Accueil" : "Home", url: `/${locale}/` },
            { name: service.hero.label, url: `/${locale}/services/${service.slug}/` },
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
            <CalendlyPopup label={isFr ? "Réserver un appel" : "Book a call"} variant="dark" />
            <TallyPopup label={isFr ? "Lancer mon projet" : "Start my project"} variant="dark" />
          </div>
        </FadeInUp>
        {service.hero.video && (
          <FadeInUp>
            <div className={styles.heroMedia}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.heroVideo}
              >
                <source src={service.hero.video} type="video/webm" />
              </video>
            </div>
          </FadeInUp>
        )}
        {service.hero.image && !service.hero.video && (
          <FadeInUp>
            <div className={styles.heroMedia}>
              <Image
                src={service.hero.image}
                alt={service.hero.heading}
                width={1200}
                height={675}
                sizes="(max-width: 768px) 100vw, 1100px"
                className={styles.heroImage}
              />
            </div>
          </FadeInUp>
        )}
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
                <span className={styles.studyLink}>
                  {isFr ? "Voir le projet" : "View project"}
                </span>
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
            <Button variant="ghost" href={localePath("/contact/", locale)}>
              {isFr ? "Demander une estimation" : "Request a quote"}
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

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section>
          <FadeInUp>
            <Label>{isFr ? "Lectures connexes" : "Related reading"}</Label>
            <SectionHeading
              heading={isFr ? "Approfondir le sujet." : "Go deeper."}
            />
            <div className={styles.relatedGrid}>
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={localePath(`/perspectives/${article.slug}/`, locale)}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedCategory}>
                    {article.category}
                  </span>
                  <span className={styles.relatedTitle}>{article.title}</span>
                  <span className={styles.relatedTime}>
                    {article.readingTime}
                  </span>
                </Link>
              ))}
            </div>
          </FadeInUp>
        </Section>
      )}

      {/* Other Services */}
      <Section variant="accent">
        <FadeInUp>
          <Label>
            {isFr ? "Nos autres services" : "Our other services"}
          </Label>
          <div className={styles.otherServicesGrid}>
            {otherServices.map((slug) => {
              const labels = SERVICE_LABELS[slug];
              return (
                <Link
                  key={slug}
                  href={localePath(`/services/${slug}/`, locale)}
                  className={styles.otherServiceLink}
                >
                  {labels ? labels[locale] : slug}
                </Link>
              );
            })}
          </div>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={service.cta.heading}
          subtext={service.cta.subtext}
          primaryLabel={isFr ? "Réserver un appel" : "Book a call"}
          secondaryLabel={isFr ? "Lancer mon projet" : "Start my project"}
        />
      </Section>
    </>
  );
}
