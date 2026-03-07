import Link from "next/link";
import { footerNav } from "@/lib/navigation";
import { CONTACT, SOCIAL } from "@/lib/constants";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              P-XEL
            </Link>
            <p className={styles.tagline}>
              Studio produit digital. On conçoit, construit et livre des
              produits digitaux premium.
            </p>
            <div className={styles.contact}>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
            </div>
          </div>

          {Object.values(footerNav).map((column) => (
            <div key={column.title} className={styles.column}>
              <h4 className={styles.columnTitle}>{column.title}</h4>
              <ul className={styles.columnList}>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <span>{CONTACT.location}</span>
            <span>&copy; {new Date().getFullYear()} P-XEL Studio</span>
          </div>
          <div className={styles.bottomRight}>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Calendly
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
