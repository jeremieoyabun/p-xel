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
  const featured = t.workProjects.filter((p) => p.tier === "featured");
  const secondary = t.workProjects.filter((p) => p.tier === "secondary");

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

      {/* Intro + Featured Projects */}
      {featured.map((project, i) => (
        <Section key={project.slug}>
          {i === 0 && (
            <FadeInUp>
              <Label>{t.workIntro.label}</Label>
              <SectionHeading
                heading={t.workIntro.heading}
                subtext={t.workIntro.subtext}
              />
            </FadeInUp>
          )}
          <FadeInUp>
            <Link
              href={`/${locale}/work/${project.slug}/`}
              className={styles.featuredCard}
            >
              <div className={styles.featuredImage}>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1400}
                  height={788}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.projectImg}
                />
              </div>
              <div className={styles.featuredContent}>
                <h2 className={styles.featuredName}>{project.name}</h2>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={styles.featuredDesc}>{project.description}</p>
                {project.result && (
                  <span className={styles.result}>{project.result}</span>
                )}
                <span className={styles.viewProject}>
                  {locale === "fr" ? "Voir le projet" : "View project"}
                </span>
              </div>
            </Link>
          </FadeInUp>
        </Section>
      ))}

      {/* Secondary Projects - Side by side */}
      <Section>
        <FadeInUp>
          <div className={styles.secondaryGrid}>
            {secondary.map((project) => (
              <Link
                key={project.slug}
                href={`/${locale}/work/${project.slug}/`}
                className={styles.secondaryCard}
              >
                <div className={styles.secondaryImage}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={700}
                    height={467}
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className={styles.projectImg}
                  />
                </div>
                <div className={styles.secondaryContent}>
                  <h3 className={styles.secondaryName}>{project.name}</h3>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className={styles.secondaryDesc}>
                    {project.description}
                  </p>
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
