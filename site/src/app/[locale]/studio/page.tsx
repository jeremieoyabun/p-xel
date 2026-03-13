import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { StatBlock } from "@/components/StatBlock/StatBlock";
import { ProcessStep } from "@/components/ProcessStep/ProcessStep";
import { CTA } from "@/components/CTA/CTA";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema, organizationSchema, personSchema } from "@/lib/schema";
import { getStudioContent } from "@/lib/content/studio";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: "Studio",
    description: isFr
      ? "Un studio. Un fondateur. 16 ans d'expertise produit. On conçoit, construit et livre des produits digitaux premium. Découvrez comment on travaille."
      : "One studio. One founder. 16 years of product expertise. We design, build and ship premium digital products. Discover how we work.",
    alternates: { canonical: `/${locale}/studio/` },
    openGraph: {
      title: "Studio | P-XEL Studio",
      description: isFr
        ? "Un studio. Un fondateur. 16 ans d'expertise produit. On conçoit, construit et livre des produits digitaux premium."
        : "One studio. One founder. 16 years of product expertise. We design, build and ship premium digital products.",
      url: `/${locale}/studio/`,
    },
  };
}

export default async function StudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFr = locale === "fr";
  const t = getStudioContent(locale as Locale);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: isFr ? "Accueil" : "Home", url: `/${locale}/` },
            { name: "Studio", url: `/${locale}/studio/` },
          ]),
          organizationSchema(),
          personSchema(),
        ]}
      />

      {/* Opening */}
      <Section>
        <FadeInUp>
          <Label>{t.studioIntro.label}</Label>
          <SectionHeading
            heading={t.studioIntro.heading}
            subtext={t.studioIntro.subtext}
          />
        </FadeInUp>
        <FadeInUp>
          <div className={styles.introGrid}>
            <p className={styles.manifesto}>{t.studioIntro.manifesto}</p>
            <div className={styles.introStats}>
              {t.studioStats.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </FadeInUp>
      </Section>

      {/* Founder */}
      <Section>
        <FadeInUp>
          <Label>{t.studioFounder.label}</Label>
          <SectionHeading heading={t.studioFounder.heading} />
          <div className={styles.founder}>
            <div className={styles.founderText}>
              <div className={styles.founderBody}>
                {t.studioFounder.body.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className={styles.founderImage}>
              <Image
                src="/legacy-assets/images/Fondateur.webp"
                alt={isFr ? "Fondateur de P-XEL Studio" : "P-XEL Studio Founder"}
                width={400}
                height={533}
                sizes="(max-width: 767px) 100vw, 400px"
                className={styles.founderImg}
              />
            </div>
          </div>
        </FadeInUp>
      </Section>

      {/* Philosophy */}
      <Section>
        <FadeInUp>
          <Label>{t.studioPhilosophy.label}</Label>
          <SectionHeading heading={t.studioPhilosophy.heading} />
          <div className={styles.principles}>
            {t.studioPhilosophy.principles.map((principle) => (
              <div key={principle.number} className={styles.principle}>
                <span className={styles.principleNumber}>
                  {principle.number}
                </span>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleBody}>{principle.body}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Capabilities */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{t.studioCapabilities.label}</Label>
          <SectionHeading heading={t.studioCapabilities.heading} />
          <div className={styles.capabilities}>
            {t.studioCapabilities.items.map((item) => (
              <div key={item.title} className={styles.capability}>
                <h3 className={styles.capabilityTitle}>{item.title}</h3>
                <p className={styles.capabilityBody}>{item.body}</p>
                {item.serviceHref && (
                  <Link
                    href={item.serviceHref}
                    className={styles.capabilityLink}
                  >
                    {isFr ? "Découvrir" : "Discover"} {item.title.toLowerCase()}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Process */}
      <Section>
        <FadeInUp>
          <Label>{t.studioProcess.label}</Label>
          <SectionHeading heading={t.studioProcess.heading} />
          <div className={styles.processGrid}>
            {t.studioProcess.steps.map((step) => (
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

      {/* CTA */}
      <Section>
        <CTA
          heading={t.studioCta.heading}
          subtext={t.studioCta.subtext}
          primaryLabel={isFr ? "Réserver un appel" : "Book a call"}
          secondaryLabel={isFr ? "Lancer mon projet" : "Start my project"}
        />
      </Section>
    </>
  );
}
