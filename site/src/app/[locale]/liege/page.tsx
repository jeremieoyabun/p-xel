import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { ProcessStep } from "@/components/ProcessStep/ProcessStep";
import { Button } from "@/components/Button/Button";
import { CalendlyPopup } from "@/components/CalendlyPopup/CalendlyPopup";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import {
  breadcrumbSchema,
  localBusinessSchema,
  faqSchema,
} from "@/lib/schema";
import type { Locale } from "@/lib/i18n/config";
import { getLiegeContent } from "@/lib/content/liege";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: isFr
      ? "Agence Web à Liège | P-XEL Studio"
      : "Web Agency in Liège | P-XEL Studio",
    description: isFr
      ? "Studio digital basé à Liège. Sites web, applications, MVP, branding et UX/UI. Du concept au produit livré. 16+ ans d'expertise. Réservez un appel."
      : "Digital studio based in Liège. Websites, applications, MVPs, branding and UX/UI. From concept to shipped product. 16+ years of expertise. Book a call.",
    alternates: { canonical: `/${locale}/liege/` },
    openGraph: {
      title: isFr
        ? "Agence Web à Liège | P-XEL Studio"
        : "Web Agency in Liège | P-XEL Studio",
      description: isFr
        ? "Studio digital basé à Liège. Sites web, applications, MVP, branding et UX/UI. Du concept au produit livré."
        : "Digital studio based in Liège. Websites, applications, MVPs, branding and UX/UI. From concept to shipped product.",
      url: `/${locale}/liege/`,
    },
  };
}

export default async function LiegePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getLiegeContent(locale as Locale);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: locale === "fr" ? "Accueil" : "Home", url: `/${locale}/` },
            { name: "Liège", url: `/${locale}/liege/` },
          ]),
          localBusinessSchema(),
          faqSchema(t.liegeFaq),
        ]}
      />

      {/* Opening */}
      <Section>
        <FadeInUp>
          <Label>{t.liegeIntro.label}</Label>
          <SectionHeading
            heading={t.liegeIntro.heading}
            subtext={t.liegeIntro.subtext}
          />
          <div className={styles.heroCta}>
            <CalendlyPopup label={locale === "fr" ? "Réserver un appel" : "Book a call"} variant="dark" />
            <Button variant="ghost" href={`/${locale}/work/`}>
              {locale === "fr" ? "Voir nos projets" : "View our projects"}
            </Button>
          </div>
        </FadeInUp>
      </Section>

      {/* Services */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{t.liegeServices.label}</Label>
          <SectionHeading heading={t.liegeServices.heading} />
          <div className={styles.servicesGrid}>
            {t.liegeServices.items.map((item) => (
              <div key={item.title} className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceBody}>{item.body}</p>
                {"href" in item && item.href && (
                  <Link href={item.href} className={styles.serviceLink}>
                    {locale === "fr" ? "En savoir plus" : "Learn more"}
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
          <Label>{t.liegeWhy.label}</Label>
          <SectionHeading heading={t.liegeWhy.heading} />
          <div className={styles.whyGrid}>
            {t.liegeWhy.points.map((point) => (
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
          <Label>{t.liegeContext.label}</Label>
          <SectionHeading heading={t.liegeContext.heading} />
          <div className={styles.contextBody}>
            {t.liegeContext.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Selected Projects */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{t.liegeProjects.label}</Label>
          <SectionHeading heading={t.liegeProjects.heading} />
          <div className={styles.projectGrid}>
            {t.liegeProjects.studies.map((study) => (
              <Link
                key={study.name}
                href={study.href}
                className={styles.projectCard}
              >
                <h3 className={styles.projectName}>{study.name}</h3>
                <p className={styles.projectBody}>{study.body}</p>
                <span className={styles.projectLink}>
                  {locale === "fr" ? "Voir le projet" : "View project"}
                </span>
              </Link>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Process */}
      <Section>
        <FadeInUp>
          <Label>{t.liegeProcess.label}</Label>
          <SectionHeading heading={t.liegeProcess.heading} />
          <div className={styles.processGrid}>
            {t.liegeProcess.steps.map((step) => (
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
          <Label>{locale === "fr" ? "Questions fréquentes" : "FAQ"}</Label>
          <FAQ items={t.liegeFaq} />
        </FadeInUp>
      </Section>

      {/* Other Cities */}
      <Section>
        <FadeInUp>
          <Label>{t.liegeOtherCities.label}</Label>
          <p className={styles.otherCities}>{t.liegeOtherCities.text}</p>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={t.liegeCta.heading}
          subtext={t.liegeCta.subtext}
          primaryLabel={locale === "fr" ? "Réserver un appel" : "Book a call"}
          secondaryLabel={locale === "fr" ? "Lancer mon projet" : "Start my project"}
        />
      </Section>
    </>
  );
}
