import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
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
import { getCharleroiContent } from "@/lib/content/charleroi";
import styles from "../liege/page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: isFr
      ? "Agence Web à Charleroi | P-XEL Studio"
      : "Web Agency in Charleroi | P-XEL Studio",
    description: isFr
      ? "Studio produit digital pour Charleroi. Sites web, applications, MVP, branding et UX/UI. Un interlocuteur senior, du concept au produit livré."
      : "Digital product studio for Charleroi. Websites, applications, MVPs, branding and UX/UI. One senior contact, from concept to shipped product.",
    alternates: { canonical: `/${locale}/charleroi/` },
    openGraph: {
      title: isFr
        ? "Agence Web à Charleroi | P-XEL Studio"
        : "Web Agency in Charleroi | P-XEL Studio",
      description: isFr
        ? "Studio produit digital pour Charleroi. Sites web, applications, MVP, branding et UX/UI."
        : "Digital product studio for Charleroi. Websites, applications, MVPs, branding and UX/UI.",
      url: `/${locale}/charleroi/`,
    },
  };
}

export default async function CharleroiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = getCharleroiContent(locale as Locale);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: locale === "fr" ? "Accueil" : "Home", url: `/${locale}/` },
            {
              name: "Charleroi",
              url: `/${locale}/charleroi/`,
            },
          ]),
          localBusinessSchema(),
          faqSchema(c.charleroiFaq),
        ]}
      />

      {/* Opening */}
      <Section>
        <FadeInUp>
          <Label>{c.charleroiIntro.label}</Label>
          <SectionHeading
            heading={c.charleroiIntro.heading}
            subtext={c.charleroiIntro.subtext}
          />
          <div className={styles.heroCta}>
            <CalendlyPopup
              label={locale === "fr" ? "Réserver un appel" : "Book a call"}
              variant="dark"
            />
            <Button variant="ghost" href={`/${locale}/work/`}>
              {locale === "fr" ? "Voir nos projets" : "View our projects"}
            </Button>
          </div>
        </FadeInUp>
      </Section>

      {/* Services */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{c.charleroiServices.label}</Label>
          <SectionHeading heading={c.charleroiServices.heading} />
          <div className={styles.servicesGrid}>
            {c.charleroiServices.items.map((item) => (
              <div key={item.title} className={styles.serviceItem}>
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceBody}>{item.body}</p>
                {"href" in item && item.href && (
                  <Link href={item.href} className={styles.serviceLink}>
                    {locale === "fr" ? "Découvrir" : "Discover"} {item.title.toLowerCase()}
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
          <Label>{c.charleroiWhy.label}</Label>
          <SectionHeading heading={c.charleroiWhy.heading} />
          <div className={styles.whyGrid}>
            {c.charleroiWhy.points.map((point) => (
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
          <Label>{c.charleroiContext.label}</Label>
          <SectionHeading heading={c.charleroiContext.heading} />
          <div className={styles.contextBody}>
            {c.charleroiContext.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Selected Projects */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{c.charleroiProjects.label}</Label>
          <SectionHeading heading={c.charleroiProjects.heading} />
          <div className={styles.projectGrid}>
            {c.charleroiProjects.studies.map((study) => (
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
          <Label>{c.charleroiProcess.label}</Label>
          <SectionHeading heading={c.charleroiProcess.heading} />
          <div className={styles.processGrid}>
            {c.charleroiProcess.steps.map((step) => (
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
          <FAQ items={c.charleroiFaq} />
        </FadeInUp>
      </Section>

      {/* Other Cities */}
      <Section>
        <FadeInUp>
          <Label>{c.charleroiOtherCities.label}</Label>
          <p className={styles.otherCities}>{c.charleroiOtherCities.text}</p>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={c.charleroiCta.heading}
          subtext={c.charleroiCta.subtext}
          primaryLabel={
            locale === "fr" ? "Réserver un appel" : "Book a call"
          }
          secondaryLabel={
            locale === "fr" ? "Lancer mon projet" : "Start my project"
          }
        />
      </Section>
    </>
  );
}
