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
import { getBruxellesContent } from "@/lib/content/bruxelles";
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
      ? "Agence Web à Bruxelles | P-XEL Studio"
      : "Web Agency in Brussels | P-XEL Studio",
    description: isFr
      ? "Studio produit digital pour Bruxelles. Sites web, applications, MVP, branding et UX/UI. Un interlocuteur senior, du concept au produit livré."
      : "Digital product studio for Brussels. Websites, applications, MVPs, branding and UX/UI. One senior contact, from concept to shipped product.",
    alternates: { canonical: `/${locale}/bruxelles/` },
    openGraph: {
      title: isFr
        ? "Agence Web à Bruxelles | P-XEL Studio"
        : "Web Agency in Brussels | P-XEL Studio",
      description: isFr
        ? "Studio produit digital pour Bruxelles. Sites web, applications, MVP, branding et UX/UI."
        : "Digital product studio for Brussels. Websites, applications, MVPs, branding and UX/UI.",
      url: `/${locale}/bruxelles/`,
    },
  };
}

export default async function BruxellesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = getBruxellesContent(locale as Locale);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: locale === "fr" ? "Accueil" : "Home", url: `/${locale}/` },
            {
              name: locale === "fr" ? "Bruxelles" : "Brussels",
              url: `/${locale}/bruxelles/`,
            },
          ]),
          localBusinessSchema(),
          faqSchema(c.bruxellesFaq),
        ]}
      />

      {/* Opening */}
      <Section>
        <FadeInUp>
          <Label>{c.bruxellesIntro.label}</Label>
          <SectionHeading
            heading={c.bruxellesIntro.heading}
            subtext={c.bruxellesIntro.subtext}
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
          <Label>{c.bruxellesServices.label}</Label>
          <SectionHeading heading={c.bruxellesServices.heading} />
          <div className={styles.servicesGrid}>
            {c.bruxellesServices.items.map((item) => (
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
          <Label>{c.bruxellesWhy.label}</Label>
          <SectionHeading heading={c.bruxellesWhy.heading} />
          <div className={styles.whyGrid}>
            {c.bruxellesWhy.points.map((point) => (
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
          <Label>{c.bruxellesContext.label}</Label>
          <SectionHeading heading={c.bruxellesContext.heading} />
          <div className={styles.contextBody}>
            {c.bruxellesContext.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Selected Projects */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{c.bruxellesProjects.label}</Label>
          <SectionHeading heading={c.bruxellesProjects.heading} />
          <div className={styles.projectGrid}>
            {c.bruxellesProjects.studies.map((study) => (
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
          <Label>{c.bruxellesProcess.label}</Label>
          <SectionHeading heading={c.bruxellesProcess.heading} />
          <div className={styles.processGrid}>
            {c.bruxellesProcess.steps.map((step) => (
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
          <FAQ items={c.bruxellesFaq} />
        </FadeInUp>
      </Section>

      {/* Other Cities */}
      <Section>
        <FadeInUp>
          <Label>{c.bruxellesOtherCities.label}</Label>
          <p className={styles.otherCities}>{c.bruxellesOtherCities.text}</p>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={c.bruxellesCta.heading}
          subtext={c.bruxellesCta.subtext}
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
