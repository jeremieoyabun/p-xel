import Link from "next/link";
import { footerNav } from "@/lib/navigation";
import { CONTACT, SOCIAL } from "@/lib/constants";
import styles from "./Footer.module.css";

function FooterLogo() {
  return (
    <svg
      viewBox="0 0 960.28 212.34"
      className={styles.logoSvg}
      aria-hidden="true"
    >
      <rect fill="#6608F9" x="56.87" y="107.19" width="42.06" height="42.06" />
      <rect fill="#6608F9" x="98.93" y="46.14" width="42.06" height="42.06" />
      <rect fill="currentColor" x="351.99" y="80.18" width="42.06" height="42.06" />
      <rect fill="#6608F9" y="65.12" width="42.06" height="42.06" />
      <polygon fill="currentColor" points="606.47 29.74 576.73 0 505.82 70.91 434.91 0 405.16 29.74 476.08 100.65 405.16 171.57 434.91 201.31 505.82 130.4 576.73 201.31 606.47 171.57 535.56 100.65 606.47 29.74" />
      <polygon fill="currentColor" points="784.42 46.14 784.42 4.08 690.6 4.08 648.53 4.08 648.53 46.14 648.53 78.05 648.53 120.11 648.53 152.03 648.53 194.09 690.6 194.09 784.42 194.09 784.42 152.03 690.6 152.03 690.6 120.11 784.42 120.11 784.42 78.05 690.6 78.05 690.6 46.14 784.42 46.14" />
      <polygon fill="currentColor" points="868.54 152.03 868.54 4.08 826.48 4.08 826.48 152.03 826.48 194.09 868.54 194.09 960.28 194.09 960.28 152.03 868.54 152.03" />
      <g>
        <rect fill="#6608F9" x="165.92" y="170.28" width="42.06" height="42.06" />
        <path fill="#6608F9" d="M250.04,4.08h-84.12v82.12h42.06v-40.06h42.06c15.48,0,28.02,12.55,28.02,28.02v5.01c0,15.48-12.54,28.02-28.02,28.02h-84.12v42.06h84.12c39.21,0,71-31.79,71-71v-3.16c0-39.21-31.79-71-71-71Z" />
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="P-XEL Studio">
              <FooterLogo />
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
