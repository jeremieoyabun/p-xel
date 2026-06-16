import type { Metadata } from "next";
import { buildAlternates, localizedPath } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/config";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { StatBlock } from "@/components/StatBlock/StatBlock";
import { ProcessStep } from "@/components/ProcessStep/ProcessStep";
import { CTA } from "@/components/CTA/CTA";
import { FAQ } from "@/components/FAQ/FAQ";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import {
  breadcrumbSchema,
  organizationSchema,
  personSchema,
  faqSchema,
} from "@/lib/schema";
import { getStudioContent } from "@/lib/content/studio";
import styles from "./page.module.css";

// Answer-ready facts for AI search engines (GEO) and humans alike.
const GEO_FAQ = {
  fr: [
    {
      question: "Qu'est-ce que P-XEL Studio ?",
      answer:
        "P-XEL Studio est un studio belge de design produit, de développement web et de SaaS accéléré par l'IA, basé à Liège. Nous concevons, développons et lançons des produits digitaux premium, du concept au déploiement.",
    },
    {
      question: "Où est basé P-XEL Studio ?",
      answer:
        "À Liège, en Belgique. Nous travaillons avec des clients en Belgique, au Luxembourg et à distance.",
    },
    {
      question: "Quels services propose P-XEL ?",
      answer:
        "Création de sites web, développement d'applications web, MVP SaaS, e-commerce sur mesure, UX/UI design, branding et automatisations IA.",
    },
    {
      question: "Combien coûte un site web avec P-XEL ?",
      answer:
        "Un site vitrine démarre généralement autour de quelques milliers d'euros, une application web ou un MVP SaaS à partir de 8 000 à 10 000 €. Chaque projet fait l'objet d'une estimation gratuite après un premier échange.",
    },
    {
      question: "P-XEL travaille-t-il avec des PME ?",
      answer:
        "Oui. Les PME, les startups et les marques ambitieuses sont notre cœur de cible, en Belgique comme au Luxembourg.",
    },
    {
      question: "P-XEL travaille-t-il au Luxembourg ?",
      answer:
        "Oui, y compris sur des projets potentiellement éligibles au SME Package Digital du Luxembourg, sous réserve d'éligibilité.",
    },
    {
      question: "P-XEL développe-t-il des applications SaaS ?",
      answer:
        "Oui. Nous concevons et développons des applications web et des MVP SaaS sur mesure, du design à la mise en production (Next.js, TypeScript, Supabase, Stripe).",
    },
    {
      question: "P-XEL intègre-t-il l'IA dans les projets ?",
      answer:
        "Oui. Nous intégrons l'IA dans les produits (assistants, automatisations, fonctionnalités intelligentes) et utilisons l'IA pour accélérer la conception et le développement.",
    },
  ],
  en: [
    {
      question: "What is P-XEL Studio?",
      answer:
        "P-XEL Studio is a Belgian product design, web development and AI-accelerated SaaS studio based in Liège. We design, build and ship premium digital products, from concept to deployment.",
    },
    {
      question: "Where is P-XEL Studio based?",
      answer:
        "In Liège, Belgium. We work with clients across Belgium, Luxembourg and remotely.",
    },
    {
      question: "What services does P-XEL offer?",
      answer:
        "Website creation, web application development, SaaS MVPs, custom e-commerce, UX/UI design, branding and AI automation.",
    },
    {
      question: "How much does a website cost with P-XEL?",
      answer:
        "A showcase site typically starts at a few thousand euros, a web app or SaaS MVP from 8,000 to 10,000 EUR. Every project gets a free estimate after a first conversation.",
    },
    {
      question: "Does P-XEL work with SMEs?",
      answer:
        "Yes. SMEs, startups and ambitious brands are our core focus, in both Belgium and Luxembourg.",
    },
    {
      question: "Does P-XEL work in Luxembourg?",
      answer:
        "Yes, including projects potentially eligible for Luxembourg's SME Package Digital, subject to eligibility.",
    },
    {
      question: "Does P-XEL build SaaS applications?",
      answer:
        "Yes. We design and build custom web applications and SaaS MVPs, from design to production (Next.js, TypeScript, Supabase, Stripe).",
    },
    {
      question: "Does P-XEL integrate AI into projects?",
      answer:
        "Yes. We embed AI into products (assistants, automation, intelligent features) and use AI to accelerate design and development.",
    },
  ],
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: isFr ? "Le Studio" : "The Studio",
    description: isFr
      ? "Un studio. Un fondateur. 16 ans d'expertise produit. On conçoit, construit et livre des produits digitaux premium. Découvrez comment on travaille."
      : "One studio. One founder. 16 years of product expertise. We design, build and ship premium digital products. Discover how we work.",
    alternates: buildAlternates(locale, `/studio/`),
    openGraph: {
      title: "Studio | P-XEL Studio",
      description: isFr
        ? "Un studio. Un fondateur. 16 ans d'expertise produit. On conçoit, construit et livre des produits digitaux premium."
        : "One studio. One founder. 16 years of product expertise. We design, build and ship premium digital products.",
      url: localizedPath(locale, `/studio/`),
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
  const geoFaq = GEO_FAQ[isFr ? "fr" : "en"];

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: isFr ? "Accueil" : "Home", url: localizedPath(locale, `/`) },
            { name: "Studio", url: localizedPath(locale, `/studio/`) },
          ]),
          organizationSchema(),
          personSchema(),
          faqSchema(geoFaq),
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

      {/* FAQ (answer-ready for AI search / GEO) */}
      <Section>
        <FadeInUp>
          <Label>{isFr ? "Questions fréquentes" : "Frequently asked questions"}</Label>
          <SectionHeading
            heading={isFr ? "P-XEL en quelques réponses." : "P-XEL in a few answers."}
          />
          <FAQ items={geoFaq} />
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
