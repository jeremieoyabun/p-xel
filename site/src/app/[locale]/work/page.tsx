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
import { workIntro, workProjects, workCta } from "@/lib/content/work";
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
  const featured = workProjects.filter((p) => p.tier === "featured");
  const secondary = workProjects.filter((p) => p.tier === "secondary");

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
              <Label>{workIntro.label}</Label>
              <SectionHeading
                heading={workIntro.heading}
                subtext={workIntro.subtext}
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
          heading={workCta.heading}
          subtext={workCta.subtext}
          primaryLabel={locale === "fr" ? "Réserver un appel" : "Book a call"}
          secondaryLabel={locale === "fr" ? "Lancer mon projet" : "Start my project"}
        />
      </Section>
    </>
  );
}
