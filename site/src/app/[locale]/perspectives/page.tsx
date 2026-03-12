import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { CTA } from "@/components/CTA/CTA";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { articles } from "@/lib/articles";
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
      ? "Perspectives - Prix, aides, technologie et stratégie digitale | P-XEL"
      : "Perspectives - Pricing, grants, technology and digital strategy | P-XEL",
    description: isFr
      ? "Guides et analyses par P-XEL Studio : coûts d'un site web, aides à la digitalisation, choix technologiques et stratégies produit. Des points de vue concrets pour vos projets digitaux."
      : "Guides and analysis by P-XEL Studio: website costs, digitalization grants, technology choices and product strategies. Concrete perspectives for your digital projects.",
  };
}

export default async function PerspectivesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: locale === "fr" ? "Accueil" : "Home", url: `/${locale}/` },
          { name: "Perspectives", url: `/${locale}/perspectives` },
        ])}
      />

      <Section>
        <FadeInUp>
          <Label>{locale === "fr" ? "Éditorial" : "Editorial"}</Label>
          <SectionHeading
            heading="Perspectives"
            subtext={
              locale === "fr"
                ? "Nos analyses sur les coûts, les technologies et les stratégies qui comptent. Des points de vue concrets pour vos projets digitaux."
                : "Our analysis on costs, technologies and strategies that matter. Concrete perspectives for your digital projects."
            }
          />
        </FadeInUp>

        <FadeInUp>
          <div className={styles.grid}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/${locale}/perspectives/${article.slug}`}
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={960}
                    height={540}
                    sizes="(max-width: 767px) 100vw, 580px"
                  />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.category}>{article.category}</span>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                  <span className={styles.readingTime}>
                    {article.readingTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </FadeInUp>
      </Section>

      <Section>
        <FadeInUp>
          <CTA
            heading={locale === "fr" ? "Un projet en tête ?" : "Have a project in mind?"}
            subtext={
              locale === "fr"
                ? "Discutons de votre projet digital. Premier appel gratuit, sans engagement."
                : "Let's discuss your digital project. First call free, no commitment."
            }
            primaryLabel={locale === "fr" ? "Réserver un appel" : "Book a call"}
          />
        </FadeInUp>
      </Section>
    </>
  );
}
