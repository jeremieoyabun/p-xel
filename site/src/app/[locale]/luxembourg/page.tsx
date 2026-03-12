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
import { getLuxembourgContent } from "@/lib/content/luxembourg";
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
      ? "Agence Web au Luxembourg | P-XEL Studio"
      : "Web Agency in Luxembourg | P-XEL Studio",
    description: isFr
      ? "Studio produit digital pour le Luxembourg. Sites web, applications, MVP, branding et UX/UI. Basé à Liège, on intervient au Luxembourg."
      : "Digital product studio for Luxembourg. Websites, applications, MVPs, branding and UX/UI. Based in Liège, serving Luxembourg.",
    alternates: { canonical: `/${locale}/luxembourg/` },
    openGraph: {
      title: isFr
        ? "Agence Web au Luxembourg | P-XEL Studio"
        : "Web Agency in Luxembourg | P-XEL Studio",
      description: isFr
        ? "Studio produit digital pour le Luxembourg. Sites web, applications, MVP, branding et UX/UI."
        : "Digital product studio for Luxembourg. Websites, applications, MVPs, branding and UX/UI.",
      url: `/${locale}/luxembourg/`,
    },
  };
}

export default async function LuxembourgPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = getLuxembourgContent(locale as Locale);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: locale === "fr" ? "Accueil" : "Home", url: `/${locale}/` },
            { name: "Luxembourg", url: `/${locale}/luxembourg/` },
          ]),
          localBusinessSchema(),
          faqSchema(c.luxembourgFaq),
        ]}
      />

      {/* Opening */}
      <Section>
        <FadeInUp>
          <Label>{c.luxembourgIntro.label}</Label>
          <SectionHeading
            heading={c.luxembourgIntro.heading}
            subtext={c.luxembourgIntro.subtext}
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
          <Label>{c.luxembourgServices.label}</Label>
          <SectionHeading heading={c.luxembourgServices.heading} />
          <div className={styles.servicesGrid}>
            {c.luxembourgServices.items.map((item) => (
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
          <Label>{c.luxembourgWhy.label}</Label>
          <SectionHeading heading={c.luxembourgWhy.heading} />
          <div className={styles.whyGrid}>
            {c.luxembourgWhy.points.map((point) => (
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
          <Label>{c.luxembourgContext.label}</Label>
          <SectionHeading heading={c.luxembourgContext.heading} />
          <div className={styles.contextBody}>
            {c.luxembourgContext.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Selected Projects */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{c.luxembourgProjects.label}</Label>
          <SectionHeading heading={c.luxembourgProjects.heading} />
          <div className={styles.projectGrid}>
            {c.luxembourgProjects.studies.map((study) => (
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
          <Label>{c.luxembourgProcess.label}</Label>
          <SectionHeading heading={c.luxembourgProcess.heading} />
          <div className={styles.processGrid}>
            {c.luxembourgProcess.steps.map((step) => (
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
          <FAQ items={c.luxembourgFaq} />
        </FadeInUp>
      </Section>

      {/* Other Cities */}
      <Section>
        <FadeInUp>
          <Label>{c.luxembourgOtherCities.label}</Label>
          <p className={styles.otherCities}>
            {c.luxembourgOtherCities.text}
          </p>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={c.luxembourgCta.heading}
          subtext={c.luxembourgCta.subtext}
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
