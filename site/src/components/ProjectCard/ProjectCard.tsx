import Image from "next/image";
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
  image,
}: ProjectCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <Image
          src={image || "/images/case-studies/placeholder.webp"}
          alt={name}
          width={700}
          height={467}
          sizes="(max-width: 767px) 100vw, 50vw"
          className={styles.cardImg}
        />
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
