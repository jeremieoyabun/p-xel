import { ReactNode } from "react";
import Image from "next/image";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import s from "./ArticlePage.module.css";

interface ArticlePageProps {
  title: string;
  date: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  tags: string[];
  readingTime: string;
  children: ReactNode;
}

export function ArticlePage({
  title,
  date,
  lead,
  heroImage,
  heroAlt,
  tags,
  readingTime,
  children,
}: ArticlePageProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://p-xel.be",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Perspectives",
        item: "https://p-xel.be/perspectives",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
      },
    ],
  };

  return (
    <section className={s.page}>
      <SchemaScript schema={breadcrumbSchema} />

      <div className={s.shell}>
        {/* Editorial hero row */}
        <div className={s.heroRow}>
          <div className={s.authorCol}>
            <span className={s.authorLabel}>Ecrit par</span>
            <span className={s.authorName}>P-XEL Studio</span>
          </div>

          <div className={s.mainCol}>
            <time className={s.date}>{date}</time>
            <h1 className={s.title}>{title}</h1>
            <p className={s.lead}>{lead}</p>
          </div>
        </div>

        {/* Hero image */}
        <div className={s.heroImage}>
          <Image
            src={heroImage}
            alt={heroAlt}
            width={1120}
            height={630}
            sizes="(max-width: 768px) 100vw, 1120px"
            priority
          />
        </div>

        {/* Article content */}
        <article className={s.body}>{children}</article>

        {/* Footer */}
        <footer className={s.footer}>
          <span className={s.readingTime}>{readingTime}</span>
          <div className={s.tags}>
            {tags.map((tag) => (
              <span key={tag} className={s.tag}>
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <div className={s.highlight}>{children}</div>;
}
