import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { CTA } from "@/components/CTA/CTA";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { CONTACT } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "Perspectives - Prix, aides, technologie et stratégie digitale | P-XEL",
  description:
    "Guides et analyses par P-XEL Studio : coûts d'un site web, aides à la digitalisation, choix technologiques et stratégies produit. Des points de vue concrets pour vos projets digitaux.",
};

const articles = [
  {
    slug: "combien-coute-un-site-web",
    category: "Budget",
    title: "Combien coûte un site web en 2026 ?",
    excerpt:
      "Landing page, site vitrine, e-commerce, refonte. Les vrais prix du marché et les variables qui font la différence.",
    readingTime: "7 min",
    image: "/legacy-assets/images/Article-large_Web-design.webp",
    featured: true,
  },
  {
    slug: "aides-digitalisation-belgique",
    category: "Aides",
    title: "Aides à la digitalisation en Belgique",
    excerpt:
      "Primes Bruxelles, chèques Wallonie. Les subsides pour financer votre projet digital en 2026.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-Digitalisation.webp",
  },
  {
    slug: "no-code-vs-code",
    category: "Technologie",
    title: "No-code, low-code ou full-code : comment choisir",
    excerpt:
      "Webflow, Bubble ou sur mesure ? Les critères concrets pour choisir selon votre projet, budget et ambition.",
    readingTime: "8 min",
    image: "/legacy-assets/images/Articles-No-code.webp",
  },
  {
    slug: "ia-creation-produit-digital",
    category: "IA",
    title: "Comment l'IA accélère la création de votre produit digital",
    excerpt:
      "Prototypage rapide, génération d'assets, automatisation. Ce que l'IA change concrètement dans la livraison d'un produit.",
    readingTime: "9 min",
    image: "/legacy-assets/images/Articles-AI.webp",
  },
];

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
                className={[
                  styles.card,
                  article.featured ? styles.featured : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={960}
                    height={540}
                    sizes={
                      article.featured
                        ? "(max-width: 767px) 100vw, 1200px"
                        : "(max-width: 767px) 100vw, 580px"
                    }
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
            primaryHref={CONTACT.calendlyUrl}
          />
        </FadeInUp>
      </Section>
    </>
  );
}
