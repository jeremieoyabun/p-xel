import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { Button } from "@/components/Button/Button";
import { StatBlock } from "@/components/StatBlock/StatBlock";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { ProcessStep } from "@/components/ProcessStep/ProcessStep";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { HeroVideo } from "@/components/HeroVideo/HeroVideo";
import { BackgroundVideo } from "@/components/BackgroundVideo/BackgroundVideo";
import { ScrollReveal } from "@/components/ScrollReveal/ScrollReveal";
import { CalendlyPopup } from "@/components/CalendlyPopup/CalendlyPopup";
import { TallyPopup } from "@/components/TallyPopup/TallyPopup";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  breadcrumbSchema,
  faqSchema,
  aggregateRatingSchema,
} from "@/lib/schema";
import { getHomepageContent } from "@/lib/content/homepage";
import type { Locale } from "@/lib/i18n/config";
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
      ? "P-XEL Studio | Design, Code & Lancement de Produits Digitaux"
      : "P-XEL Studio | Design, Code & Digital Product Launch",
    description: isFr
      ? "Studio digital a Liege. On concoit, construit et livre des produits digitaux premium. Sites, applications, MVP, branding. Reservez un appel."
      : "Digital studio in Liege. We design, build and ship premium digital products. Websites, apps, MVPs, branding. Book a call.",
    alternates: { canonical: isFr ? "/" : "/en/" },
    openGraph: {
      title: isFr
        ? "P-XEL Studio | Design, Code & Lancement de Produits Digitaux"
        : "P-XEL Studio | Design, Code & Digital Product Launch",
      description: isFr
        ? "Studio digital a Liege. On concoit, construit et livre des produits digitaux premium."
        : "Digital studio in Liege. We design, build and ship premium digital products.",
      url: isFr ? "/" : "/en/",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getHomepageContent(locale as Locale);
  const isFr = locale === "fr";

  const heroLines = isFr
    ? ["On concoit", "On construit", "On livre"]
    : ["We design", "We build", "We ship"];

  const heroSub = isFr
    ? ["Produits digitaux premium. Sites, applications, identites de marque.", "De la strategie au deploiement."]
    : ["Premium digital products. Websites, apps, brand identities.", "From strategy to deployment."];

  const scrollText = isFr
    ? "On concoit, construit et livre des produits digitaux complets. Un seul studio. Zero intermediaire.\n\nSites, applications, MVP, identites de marque. De la strategie au deploiement, chaque projet est pense pour performer."
    : "We design, build and ship complete digital products. One studio. Zero middlemen.\n\nWebsites, apps, MVPs, brand identities. From strategy to deployment, every project is built to perform.";

  const processCta = isFr
    ? {
        heading: "Pret a demarrer ?",
        text: "Decrivez votre projet en quelques lignes. On revient vers vous sous 24h.",
        tally: "Lancer mon projet",
        calendly: "Reserver un appel",
      }
    : {
        heading: "Ready to start?",
        text: "Describe your project in a few lines. We'll get back to you within 24h.",
        tally: "Start my project",
        calendly: "Book a call",
      };

  const capabilityLinkText = isFr ? "En savoir plus" : "Learn more";

  const testimonialsData = isFr
    ? { label: "Retours clients", heading: "Ce qu'ils en disent." }
    : { label: "Client feedback", heading: "What they say." };

  return (
    <>
      <SchemaScript
        schema={[
          organizationSchema(),
          localBusinessSchema(),
          webSiteSchema(),
          breadcrumbSchema([{ name: isFr ? "Accueil" : "Home", url: "/" }]),
          faqSchema(t.faq.items),
          aggregateRatingSchema([
            { name: "Mehdi A.", role: "Co-fondateur", company: "BillyCheck", quote: "P-XEL a transforme notre idee en produit fonctionnel en quelques semaines." },
            { name: "Julien D.", role: "CEO", company: "ChairSplit", quote: "P-XEL a livre une plateforme complete, operationnelle, que nos equipes utilisent au quotidien." },
            { name: "Martin B.", role: "Fondateur", company: "Arduenna Gin", quote: "En deux mois, on avait un site et une strategie d'acquisition qui ont genere deux ans de chiffre d'affaires." },
          ]),
        ]}
      />

      {/* Beat 1: Video Hero */}
      <section className={styles.heroSection}>
        <HeroVideo />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>{t.hero.label}</span>
          <h1 className={styles.heroHeadline}>
            {heroLines.map((line) => (
              <span key={line} className={styles.heroLine}>
                {line}
                <span className={styles.heroDot} aria-hidden="true" />
              </span>
            ))}
          </h1>
          <p className={styles.heroSub}>
            {heroSub[0]}
            <br />
            {heroSub[1]}
          </p>
          <div className={styles.heroActions}>
            <CalendlyPopup label={t.hero.ctaPrimary.label} variant="light" />
            <Button variant="secondaryLight" href={t.hero.ctaSecondary.href}>
              {t.hero.ctaSecondary.label}
            </Button>
          </div>
        </div>
        <div className={styles.heroBottom}>
          <span className={styles.heroAnchor}>Liege, BE</span>
          <span className={styles.heroAnchorSep} aria-hidden="true" />
          <span className={styles.heroAnchor}>Since 2008</span>
        </div>
      </section>

      {/* Beat 1b: Scroll Reveal Text */}
      <section className={styles.scrollRevealSection} data-theme="dark">
        <ScrollReveal text={scrollText} />
      </section>

      {/* Beat 2: Proof Strip + Client Logos */}
      <Section>
        <div className={styles.proofStrip}>
          {t.proofStrip.map((stat) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
        <div className={styles.logos}>
          {t.clientLogos.map((logo) => (
            <div key={logo.name} className={styles.logoItem}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={48}
                sizes="160px"
                loading="lazy"
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Beat 4: Capability */}
      <Section variant="light">
        <FadeInUp>
          <Label>{t.capability.label}</Label>
          <SectionHeading
            heading={t.capability.heading}
            subtext={t.capability.subtext}
          />
        </FadeInUp>
        <div className={styles.capabilities}>
          {t.capability.items.map((item) => (
            <FadeInUp key={item.title}>
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityAccent} aria-hidden="true" />
                <h3 className={styles.capabilityTitle}>{item.title}</h3>
                <p className={styles.capabilityDesc}>{item.description}</p>
                {item.href && (
                  <a href={item.href} className={styles.capabilityLink}>
                    {capabilityLinkText}
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
          <Label>{t.selectedWork.label}</Label>
          <SectionHeading heading={t.selectedWork.heading} />
        </FadeInUp>
        <FadeInUp>
          <div className={styles.projectsGrid}>
            {t.selectedWork.projects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                tags={[...project.tags]}
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
            <Button variant="ghost" href={t.selectedWork.cta.href}>
              {t.selectedWork.cta.label}
            </Button>
          </div>
        </FadeInUp>
      </Section>

      {/* Beat 6: Why P-XEL */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{t.whyPxel.label}</Label>
          <SectionHeading heading={t.whyPxel.heading} />
        </FadeInUp>
        <div className={styles.differentiators}>
          {t.whyPxel.points.map((point) => (
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

      {/* Beat 6b: Testimonials */}
      <Section>
        <FadeInUp>
          <Label>{testimonialsData.label}</Label>
          <SectionHeading heading={testimonialsData.heading} />
        </FadeInUp>
        <Testimonials />
      </Section>

      {/* Beat 7: Process */}
      <div className={styles.processWrapper} data-theme="dark">
        <BackgroundVideo src="/legacy-assets/videos/Digital.webm" />
        <div className={styles.processOverlay} />
        <Section className={styles.processSection}>
          <FadeInUp>
            <Label>{t.process.label}</Label>
            <SectionHeading heading={t.process.heading} />
          </FadeInUp>
          <div className={styles.processLayout}>
            <FadeInUp stagger>
              <div className={styles.processSteps}>
                {t.process.steps.map((step) => (
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
                <h3 className={styles.processCtaHeading}>
                  {processCta.heading}
                </h3>
                <p className={styles.processCtaText}>{processCta.text}</p>
                <TallyPopup label={processCta.tally} variant="dark" />
                <CalendlyPopup label={processCta.calendly} variant="dark" />
              </div>
            </FadeInUp>
          </div>
        </Section>
      </div>

      {/* Beat 8: FAQ */}
      <Section>
        <FadeInUp>
          <Label>{t.faq.label}</Label>
        </FadeInUp>
        <FadeInUp>
          <FAQ items={[...t.faq.items]} />
        </FadeInUp>
      </Section>

      {/* Beat 9: Final CTA */}
      <Section>
        <CTA
          heading={t.finalCta.heading}
          subtext={t.finalCta.subtext}
          primaryLabel={t.finalCta.ctaPrimary.label}
          secondaryLabel={t.finalCta.ctaSecondary.label}
        />
      </Section>
    </>
  );
}
