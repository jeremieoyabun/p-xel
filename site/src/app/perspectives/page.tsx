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

export const metadata: Metadata = {
  title:
    "Perspectives - Prix, aides, technologie et stratégie digitale | P-XEL",
  description:
    "Guides et analyses par P-XEL Studio : coûts d'un site web, aides à la digitalisation, choix technologiques et stratégies produit. Des points de vue concrets pour vos projets digitaux.",
};

export default function PerspectivesPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Perspectives", url: "/perspectives" },
        ])}
      />

      <Section>
        <FadeInUp>
          <Label>Éditorial</Label>
          <SectionHeading
            heading="Perspectives"
            subtext="Nos analyses sur les coûts, les technologies et les stratégies qui comptent. Des points de vue concrets pour vos projets digitaux."
          />
        </FadeInUp>

        <FadeInUp>
          <div className={styles.grid}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/perspectives/${article.slug}`}
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
            heading="Un projet en tête ?"
            subtext="Discutons de votre projet digital. Premier appel gratuit, sans engagement."
            primaryLabel="Réserver un appel"
          />
        </FadeInUp>
      </Section>
    </>
  );
}
