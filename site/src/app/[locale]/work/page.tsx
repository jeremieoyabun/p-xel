import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { CTA } from "@/components/CTA/CTA";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/config";
import { getWorkContent } from "@/lib/content/work";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: "Work",
    description: isFr
      ? "Applications web, plateformes SaaS, identités de marque. Cinq produits digitaux conçus, construits et livrés par P-XEL Studio. Voir les projets."
      : "Web applications, SaaS platforms, brand identities. Five digital products designed, built and shipped by P-XEL Studio. View projects.",
    alternates: { canonical: `/${locale}/work/` },
    openGraph: {
      title: "Work | P-XEL Studio",
      description: isFr
        ? "Cinq produits digitaux conçus, construits et livrés par P-XEL Studio."
        : "Five digital products designed, built and shipped by P-XEL Studio.",
      url: `/${locale}/work/`,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getWorkContent(locale as Locale);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: locale === "fr" ? "Accueil" : "Home", url: `/${locale}/` },
            { name: "Work", url: `/${locale}/work/` },
          ]),
        ]}
      />

      {/* Intro */}
      <Section>
        <FadeInUp>
          <Label>{t.workIntro.label}</Label>
          <SectionHeading
            heading={t.workIntro.heading}
            subtext={t.workIntro.subtext}
          />
        </FadeInUp>

        {/* All Projects - 2 per row */}
        <FadeInUp>
          <div className={styles.projectGrid}>
            {t.workProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/${locale}/work/${project.slug}/`}
                className={styles.projectCard}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={700}
                    height={467}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className={styles.projectImg}
                  />
                </div>
                <div className={styles.projectContent}>
                  <h2 className={styles.projectName}>{project.name}</h2>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className={styles.projectDesc}>{project.description}</p>
                  {project.result && (
                    <span className={styles.result}>{project.result}</span>
                  )}
                  <span className={styles.viewProject}>
                    {locale === "fr" ? "Voir le projet" : "View project"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section>
        <CTA
          heading={t.workCta.heading}
          subtext={t.workCta.subtext}
          primaryLabel={locale === "fr" ? "Réserver un appel" : "Book a call"}
          secondaryLabel={locale === "fr" ? "Lancer mon projet" : "Start my project"}
        />
      </Section>
    </>
  );
}
