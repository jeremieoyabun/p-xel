import type { Metadata } from "next";
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
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import {
  studioIntro,
  studioFounder,
  studioPhilosophy,
  studioCapabilities,
  studioStats,
  studioProcess,
  studioCta,
} from "@/lib/content/studio";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Un studio. Un fondateur. 16 ans d'expertise produit. On conçoit, construit et livre des produits digitaux premium. Découvrez comment on travaille.",
  alternates: { canonical: "/studio/" },
  openGraph: {
    title: "Studio | P-XEL Studio",
    description:
      "Un studio. Un fondateur. 16 ans d'expertise produit. On conçoit, construit et livre des produits digitaux premium.",
    url: "/studio/",
  },
};

export default function StudioPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Studio", url: "/studio/" },
          ]),
          organizationSchema(),
        ]}
      />

      {/* Opening */}
      <Section>
        <FadeInUp>
          <Label>{studioIntro.label}</Label>
          <SectionHeading
            heading={studioIntro.heading}
            subtext={studioIntro.subtext}
          />
        </FadeInUp>
        <FadeInUp>
          <div className={styles.introGrid}>
            <p className={styles.manifesto}>{studioIntro.manifesto}</p>
            <div className={styles.introStats}>
              {studioStats.map((stat) => (
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
          <Label>{studioFounder.label}</Label>
          <SectionHeading heading={studioFounder.heading} />
          <div className={styles.founder}>
            <div className={styles.founderText}>
              <div className={styles.founderBody}>
                {studioFounder.body.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className={styles.founderImage}>
              <Image
                src="/legacy-assets/images/Fondateur.webp"
                alt="Fondateur de P-XEL Studio"
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
          <Label>{studioPhilosophy.label}</Label>
          <SectionHeading heading={studioPhilosophy.heading} />
          <div className={styles.principles}>
            {studioPhilosophy.principles.map((principle) => (
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
          <Label>{studioCapabilities.label}</Label>
          <SectionHeading heading={studioCapabilities.heading} />
          <div className={styles.capabilities}>
            {studioCapabilities.items.map((item) => (
              <div key={item.title} className={styles.capability}>
                <h3 className={styles.capabilityTitle}>{item.title}</h3>
                <p className={styles.capabilityBody}>{item.body}</p>
                {item.serviceHref && (
                  <Link
                    href={item.serviceHref}
                    className={styles.capabilityLink}
                  >
                    En savoir plus
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
          <Label>{studioProcess.label}</Label>
          <SectionHeading heading={studioProcess.heading} />
          <div className={styles.processGrid}>
            {studioProcess.steps.map((step) => (
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
          heading={studioCta.heading}
          subtext={studioCta.subtext}
          primaryLabel="Réserver un appel"
          secondaryLabel="Lancer mon projet"
        />
      </Section>
    </>
  );
}
