import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import Image from "next/image";
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
import { luxembourgLpContent } from "@/lib/content/luxembourg-lp";
import liegeStyles from "../liege/page.module.css";
import lpStyles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  const frTitle = luxembourgLpContent.meta.title;
  const frDescription = luxembourgLpContent.meta.description;

  return {
    title: isFr
      ? frTitle
      : "Web Agency in Luxembourg | P-XEL Studio",
    description: isFr
      ? frDescription
      : "Digital product studio for Luxembourg. Websites, applications, MVPs, branding and UX/UI. Based in Liège, serving Luxembourg.",
    alternates: { canonical: `/${locale}/luxembourg/` },
    openGraph: {
      title: isFr ? frTitle : "Web Agency in Luxembourg | P-XEL Studio",
      description: isFr
        ? frDescription
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

  if (locale === "fr") {
    return <LuxembourgLandingFr />;
  }

  return <LuxembourgCityHub locale={locale as Locale} />;
}

/* ============================================================
   FR landing page — lead-gen, subvention-focused
   ============================================================ */
function LuxembourgLandingFr() {
  const c = luxembourgLpContent;

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Accueil", url: "/fr/" },
            { name: "Luxembourg", url: "/fr/luxembourg/" },
          ]),
          localBusinessSchema(),
          faqSchema(c.faq.items),
        ]}
      />

      {/* Hero */}
      <Section>
        <FadeInUp>
          <span className={lpStyles.heroEyebrow}>{c.hero.eyebrow}</span>
          <h1 className={lpStyles.heroTitle}>
            {c.hero.headingTop}
            <span className={lpStyles.accent}>{c.hero.headingBottom}</span>
          </h1>
          <p className={lpStyles.heroSubtitle}>{c.hero.subtitle}</p>
          <div className={lpStyles.heroCtas}>
            <CalendlyPopup label={c.hero.ctaPrimary.label} variant="dark" />
            <Button variant="ghost" href={c.hero.ctaSecondary.href}>
              {c.hero.ctaSecondary.label}
            </Button>
          </div>
          <p className={lpStyles.heroTrustStrip}>{c.hero.trustStrip}</p>
        </FadeInUp>
      </Section>

      {/* Pitch — 3 stats */}
      <Section variant="accent">
        <FadeInUp>
          <div className={lpStyles.pitchGrid}>
            {c.pitch.items.map((item) => (
              <div key={item.title} className={lpStyles.pitchItem}>
                <div className={lpStyles.pitchStat}>{item.stat}</div>
                <h3 className={lpStyles.pitchTitle}>{item.title}</h3>
                <p className={lpStyles.pitchBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Process */}
      <Section>
        <FadeInUp>
          <Label>{c.process.label}</Label>
          <SectionHeading heading={c.process.heading} />
          <ol className={lpStyles.processList}>
            {c.process.steps.map((step) => (
              <li key={step.number} className={lpStyles.processStep}>
                <div className={lpStyles.processStepNumber}>{step.number}</div>
                <div className={lpStyles.processStepBody}>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={lpStyles.processNotice}>
            <strong>À savoir</strong>
            {c.process.notice}
          </div>
        </FadeInUp>
      </Section>

      {/* Eligibility */}
      <Section variant="accent" id="eligibilite">
        <FadeInUp>
          <Label>{c.eligibility.label}</Label>
          <SectionHeading heading={c.eligibility.heading} />
          <p className={lpStyles.eligibilityIntro}>{c.eligibility.intro}</p>
          <ul className={lpStyles.eligibilityChecklist}>
            {c.eligibility.checklist.map((item, i) => (
              <li key={i}>
                <span className={lpStyles.eligibilityCheck}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className={lpStyles.packagesGrid}>
            {c.eligibility.packages.map((pkg) => (
              <div key={pkg.title} className={lpStyles.packageCard}>
                <h3>{pkg.title}</h3>
                <p>{pkg.body}</p>
              </div>
            ))}
          </div>
          <p className={lpStyles.packagesNote}>{c.eligibility.note}</p>
          <div className={lpStyles.eligibilityCta}>
            <CalendlyPopup label={c.eligibility.cta.label} variant="dark" />
          </div>
        </FadeInUp>
      </Section>

      {/* Services */}
      <Section>
        <FadeInUp>
          <Label>{c.services.label}</Label>
          <SectionHeading heading={c.services.heading} />
          <div className={lpStyles.lpServicesGrid}>
            {c.services.items.map((item) => (
              <div key={item.title} className={lpStyles.lpServiceCard}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Comparison vs agency */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{c.comparison.label}</Label>
          <SectionHeading heading={c.comparison.heading} />
          <div className={lpStyles.comparisonWrapper}>
            <table className={lpStyles.comparisonTable}>
              <thead>
                <tr>
                  <th scope="col">{c.comparison.columnLabels.dimension}</th>
                  <th scope="col">{c.comparison.columnLabels.agency}</th>
                  <th scope="col">{c.comparison.columnLabels.pxel}</th>
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row) => (
                  <tr key={row.dimension}>
                    <td>{row.dimension}</td>
                    <td>{row.agency}</td>
                    <td>{row.pxel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={lpStyles.comparisonConclusion}>
            {c.comparison.conclusion}
          </p>
        </FadeInUp>
      </Section>

      {/* About */}
      <Section>
        <FadeInUp>
          <Label>{c.about.label}</Label>
          <SectionHeading heading={c.about.heading} />
          <div className={lpStyles.aboutLayout}>
            <div className={lpStyles.aboutPhoto}>
              <Image
                src={c.about.photo.src}
                alt={c.about.photo.alt}
                width={280}
                height={350}
                sizes="(max-width: 800px) 240px, 280px"
              />
            </div>
            <div className={lpStyles.aboutCopy}>
              {c.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className={lpStyles.aboutLogos}>
            {c.about.logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={120}
                height={28}
                className={lpStyles.aboutLogo}
              />
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* FAQ */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{c.faq.label}</Label>
          <SectionHeading heading={c.faq.heading} />
          <FAQ items={c.faq.items} />
        </FadeInUp>
      </Section>

      {/* Final CTA */}
      <Section>
        <FadeInUp>
          <div className={lpStyles.finalCtaWrap}>
            <SectionHeading heading={c.finalCta.heading} />
            <p className={lpStyles.finalCtaSubtext}>{c.finalCta.subtext}</p>
            <CalendlyPopup label={c.finalCta.cta.label} variant="dark" />
            <div className={lpStyles.finalCtaLinks}>
              {c.finalCta.secondaryLinks.map((link) => (
                <Link key={link.href} href={`/fr${link.href}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className={lpStyles.disclaimer}>{c.disclaimer}</p>
        </FadeInUp>
      </Section>
    </>
  );
}

/* ============================================================
   EN city hub — keeps the existing layout for /en/luxembourg/
   ============================================================ */
function LuxembourgCityHub({ locale }: { locale: Locale }) {
  const c = getLuxembourgContent(locale);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Home", url: `/${locale}/` },
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
          <div className={liegeStyles.heroCta}>
            <CalendlyPopup label="Book a call" variant="dark" />
            <Button variant="ghost" href={`/${locale}/work/`}>
              View our projects
            </Button>
          </div>
        </FadeInUp>
      </Section>

      {/* Services */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{c.luxembourgServices.label}</Label>
          <SectionHeading heading={c.luxembourgServices.heading} />
          <div className={liegeStyles.servicesGrid}>
            {c.luxembourgServices.items.map((item) => (
              <div key={item.title} className={liegeStyles.serviceItem}>
                <h3 className={liegeStyles.serviceTitle}>{item.title}</h3>
                <p className={liegeStyles.serviceBody}>{item.body}</p>
                {"href" in item && item.href && (
                  <Link href={item.href} className={liegeStyles.serviceLink}>
                    Discover {item.title.toLowerCase()}
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
          <div className={liegeStyles.whyGrid}>
            {c.luxembourgWhy.points.map((point) => (
              <div key={point.title} className={liegeStyles.whyPoint}>
                <h3 className={liegeStyles.whyTitle}>{point.title}</h3>
                <p className={liegeStyles.whyBody}>{point.body}</p>
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
          <div className={liegeStyles.contextBody}>
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
          <div className={liegeStyles.projectGrid}>
            {c.luxembourgProjects.studies.map((study) => (
              <Link
                key={study.name}
                href={study.href}
                className={liegeStyles.projectCard}
              >
                <h3 className={liegeStyles.projectName}>{study.name}</h3>
                <p className={liegeStyles.projectBody}>{study.body}</p>
                <span className={liegeStyles.projectLink}>View project</span>
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
          <div className={liegeStyles.processGrid}>
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
          <Label>FAQ</Label>
          <FAQ items={c.luxembourgFaq} />
        </FadeInUp>
      </Section>

      {/* Other Cities */}
      <Section>
        <FadeInUp>
          <Label>{c.luxembourgOtherCities.label}</Label>
          <p className={liegeStyles.otherCities}>
            {c.luxembourgOtherCities.text}
          </p>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={c.luxembourgCta.heading}
          subtext={c.luxembourgCta.subtext}
          primaryLabel="Book a call"
          secondaryLabel="Start my project"
        />
      </Section>
    </>
  );
}
