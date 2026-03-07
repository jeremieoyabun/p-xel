import Link from "next/link";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  name: string;
  tags: string[];
  description: string;
  result?: string;
  href: string;
  image?: string;
}

export function ProjectCard({
  name,
  tags,
  description,
  result,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <span className={styles.placeholderText}>{name}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className={styles.description}>{description}</p>
        {result && <span className={styles.result}>{result}</span>}
      </div>
    </Link>
  );
}
