import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { Button } from "@/components/Button/Button";
import { PXelButton } from "@/components/PXelButton/PXelButton";
import { StatBlock } from "@/components/StatBlock/StatBlock";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { ProcessStep } from "@/components/ProcessStep/ProcessStep";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { HeroVideo } from "@/components/HeroVideo/HeroVideo";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import { CONTACT } from "@/lib/constants";
import {
  hero,
  proofStrip,
  clientLogos,
  capability,
  selectedWork,
  whyPxel,
  process,
  faq,
  finalCta,
} from "@/lib/content/homepage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "P-XEL Studio | Design, Code & Lancement de Produits Digitaux",
  description:
    "Studio digital à Liège. On conçoit, construit et livre des produits digitaux premium. Sites, applications, MVP, branding. Réservez un appel.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "P-XEL Studio | Design, Code & Lancement de Produits Digitaux",
    description:
      "Studio digital à Liège. On conçoit, construit et livre des produits digitaux premium.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <SchemaScript
        schema={[
          organizationSchema(),
          localBusinessSchema(),
          webSiteSchema(),
          breadcrumbSchema([{ name: "Accueil", url: "/" }]),
          faqSchema(faq.items),
        ]}
      />

      {/* Beat 1: Video Hero */}
      <section className={styles.heroSection}>
        <HeroVideo />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>{hero.label}</span>
          <h1 className={styles.heroHeadline}>
            <span className={styles.heroLine}>On conçoit<span className={styles.heroDot}>.</span></span>
            <span className={styles.heroLine}>On construit<span className={styles.heroDot}>.</span></span>
            <span className={styles.heroLine}>On livre<span className={styles.heroDot}>.</span></span>
          </h1>
          <p className={styles.heroSub}>{hero.subheadline}</p>
          <div className={styles.heroActions}>
            <PXelButton
              label={hero.ctaPrimary.label}
              href={hero.ctaPrimary.href}
              variant="light"
            />
            <Button variant="secondaryLight" href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </div>
        <div className={styles.heroBottom}>
          <span className={styles.heroAnchor}>Liège, BE</span>
          <span className={styles.heroAnchorSep} aria-hidden="true" />
          <span className={styles.heroAnchor}>Since 2008</span>
        </div>
      </section>

      {/* Beat 1b: Scroll Reveal Text */}
      <section className={styles.scrollRevealSection}>
        <ScrollReveal
          text={"On conçoit, construit et livre des produits digitaux complets. Un seul studio. Zéro intermédiaire.\n\nSites, applications, MVP, identités de marque. De la stratégie au déploiement, chaque projet est pensé pour performer."}
        />
      </section>

      {/* Beat 2: Proof Strip + Client Logos */}
      <Section>
        <div className={styles.proofStrip}>
          {proofStrip.map((stat) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
        <div className={styles.logos}>
          {clientLogos.map((logo) => (
            <div key={logo.name} className={styles.logoItem}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={48}
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Beat 4: Capability - Light section for contrast */}
      <Section variant="light">
        <FadeInUp>
          <Label>{capability.label}</Label>
          <SectionHeading
            heading={capability.heading}
            subtext={capability.subtext}
          />
        </FadeInUp>
        <div className={styles.capabilities}>
          {capability.items.map((item) => (
            <FadeInUp key={item.title}>
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityAccent} aria-hidden="true" />
                <h3 className={styles.capabilityTitle}>{item.title}</h3>
                <p className={styles.capabilityDesc}>{item.description}</p>
                {item.href && (
                  <a href={item.href} className={styles.capabilityLink}>
                    En savoir plus
                  </a>
                )}
              </div>
            </FadeInUp>
          ))}
        </div>
      </Section>

      {/* Beat 5: Selected Work */}
      <Section>
        <FadeInUp>
          <Label>{selectedWork.label}</Label>
          <SectionHeading heading={selectedWork.heading} />
        </FadeInUp>
        <FadeInUp>
          <div className={styles.projectsGrid}>
            {selectedWork.projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                tags={project.tags}
                description={project.description}
                result={project.result}
                href={project.href}
                image={project.image}
              />
            ))}
          </div>
        </FadeInUp>
        <FadeInUp>
          <div className={styles.workCta}>
            <Button variant="ghost" href={selectedWork.cta.href}>
              {selectedWork.cta.label}
            </Button>
          </div>
        </FadeInUp>
      </Section>

      {/* Beat 6: Why P-XEL */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{whyPxel.label}</Label>
          <SectionHeading heading={whyPxel.heading} />
        </FadeInUp>
        <div className={styles.differentiators}>
          {whyPxel.points.map((point) => (
            <FadeInUp key={point.number}>
              <div className={styles.diffPoint}>
                <span className={styles.diffNumber}>{point.number}</span>
                <div>
                  <h3 className={styles.diffTitle}>{point.title}</h3>
                  <p className={styles.diffBody}>{point.body}</p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </Section>

      {/* Beat 7: Process */}
      <div className={styles.processWrapper}>
        <video
          className={styles.processVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/legacy-assets/videos/Digital.webm"
            type="video/webm"
          />
        </video>
        <div className={styles.processOverlay} />
        <Section className={styles.processSection}>
          <FadeInUp>
            <Label>{process.label}</Label>
            <SectionHeading heading={process.heading} />
          </FadeInUp>
          <FadeInUp stagger>
            <div className={styles.processSteps}>
              {process.steps.map((step) => (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className={styles.processCta}>
              <PXelButton
                label="Réserver un appel"
                href={CONTACT.calendlyUrl}
                variant="dark"
              />
            </div>
          </FadeInUp>
        </Section>
      </div>

      {/* Beat 8: FAQ */}
      <Section>
        <FadeInUp>
          <Label>{faq.label}</Label>
        </FadeInUp>
        <FadeInUp>
          <FAQ items={faq.items} />
        </FadeInUp>
      </Section>

      {/* Beat 9: Final CTA */}
      <Section fullHeight>
        <CTA
          heading={finalCta.heading}
          subtext={finalCta.subtext}
          primaryLabel={finalCta.ctaPrimary.label}
          primaryHref={finalCta.ctaPrimary.href}
          secondaryLabel={finalCta.ctaSecondary.label}
          secondaryHref={finalCta.ctaSecondary.href}
        />
      </Section>
    </>
  );
}
