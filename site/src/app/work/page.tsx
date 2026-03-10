import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Work",
  description:
    "Applications web, plateformes SaaS, identités de marque. Cinq produits digitaux conçus, construits et livrés par P-XEL Studio. Voir les projets.",
  alternates: { canonical: "/work/" },
  openGraph: {
    title: "Work | P-XEL Studio",
    description:
      "Cinq produits digitaux conçus, construits et livrés par P-XEL Studio.",
    url: "/work/",
  },
};

export default function WorkPage() {
  const featured = workProjects.filter((p) => p.tier === "featured");
  const secondary = workProjects.filter((p) => p.tier === "secondary");

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Work", url: "/work/" },
          ]),
        ]}
      />

      {/* Intro */}
      <Section>
        <FadeInUp>
          <Label>{workIntro.label}</Label>
          <SectionHeading
            heading={workIntro.heading}
            subtext={workIntro.subtext}
          />
        </FadeInUp>
      </Section>

      {/* Featured Projects - Full viewport each */}
      {featured.map((project) => (
        <Section key={project.slug}>
          <FadeInUp>
            <Link
              href={`/work/${project.slug}/`}
              className={styles.featuredCard}
            >
              <div className={styles.featuredImage}>
                <span className={styles.featuredImageText}>
                  {project.name}
                </span>
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
                  Voir le projet
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
                href={`/work/${project.slug}/`}
                className={styles.secondaryCard}
              >
                <div className={styles.secondaryImage}>
                  <span className={styles.secondaryImageText}>
                    {project.name}
                  </span>
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
                    Voir le projet
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={workCta.heading}
          subtext={workCta.subtext}
          primaryLabel="Réserver un appel"
          secondaryLabel="Lancer mon projet"
        />
      </Section>
    </>
  );
}
