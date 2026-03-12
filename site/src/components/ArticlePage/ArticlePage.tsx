import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { SITE_URL } from "@/lib/constants";
import s from "./ArticlePage.module.css";

interface RelatedArticle {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
}

interface ArticlePageProps {
  title: string;
  slug: string;
  date: string;
  dateISO: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  tags: string[];
  readingTime: string;
  relatedArticles?: RelatedArticle[];
  children: ReactNode;
}

export function ArticlePage({
  title,
  slug,
  date,
  dateISO,
  lead,
  heroImage,
  heroAlt,
  tags,
  readingTime,
  relatedArticles,
  children,
}: ArticlePageProps) {
  const articleUrl = `${SITE_URL}/perspectives/${slug}`;
  const imageUrl = `${SITE_URL}${heroImage}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Perspectives",
        item: `${SITE_URL}/perspectives`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: lead,
    image: imageUrl,
    datePublished: dateISO,
    dateModified: dateISO,
    url: articleUrl,
    author: {
      "@type": "Organization",
      name: "P-XEL Studio",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "P-XEL Studio",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    keywords: tags.join(", "),
  };

  return (
    <section className={s.page}>
      <SchemaScript schema={breadcrumbSchema} />
      <SchemaScript schema={blogPostingSchema} />

      <Link href="/perspectives" className={s.backButton} aria-label="Retour aux articles">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        <span>Retour</span>
      </Link>

      <div className={s.shell}>
        {/* Editorial hero row */}
        <div className={s.heroRow}>
          <div className={s.authorCol}>
            <span className={s.authorLabel}>Ecrit par</span>
            <span className={s.authorName}>P-XEL Studio</span>
          </div>

          <div className={s.mainCol}>
            <time className={s.date} dateTime={dateISO}>{date}</time>
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

        {/* Related articles */}
        {relatedArticles && relatedArticles.length > 0 && (
          <div className={s.related}>
            <h2 className={s.relatedHeading}>Articles lies</h2>
            <div className={s.relatedGrid}>
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/perspectives/${article.slug}`}
                  className={s.relatedCard}
                >
                  <span className={s.relatedCategory}>{article.category}</span>
                  <span className={s.relatedTitle}>{article.title}</span>
                  <span className={s.relatedTime}>{article.readingTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <div className={s.highlight}>{children}</div>;
}
