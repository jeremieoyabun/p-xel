import type { Metadata } from "next";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed/CalendlyEmbed";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { CONTACT, SOCIAL } from "@/lib/constants";
import { contactIntro, contactCalendly, contactForm as contactFormContent } from "@/lib/content/contact";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Réservez un appel de 30 minutes ou décrivez votre projet. On répond sous 24h. P-XEL Studio, Liège, Belgique.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact | P-XEL Studio",
    description:
      "Réservez un appel de 30 minutes ou décrivez votre projet. On répond sous 24h.",
    url: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Contact", url: "/contact/" },
          ]),
          localBusinessSchema(),
        ]}
      />

      {/* Opening + Two Paths */}
      <Section>
        <FadeInUp>
          <Label>{contactIntro.label}</Label>
          <SectionHeading
            heading={contactIntro.heading}
            subtext={contactIntro.subtext}
          />
        </FadeInUp>
        <FadeInUp>
          <div className={styles.paths}>
            {/* Path A: Calendly */}
            <div className={styles.path}>
              <h2 className={styles.pathHeading}>
                {contactCalendly.heading}
              </h2>
              <p className={styles.pathBody}>{contactCalendly.body}</p>
              <CalendlyEmbed url={CONTACT.calendlyUrl} />
            </div>

            {/* Path B: Form */}
            <div className={styles.path}>
              <h2 className={styles.pathHeading}>
                {contactFormContent.heading}
              </h2>
              <p className={styles.pathBody}>{contactFormContent.body}</p>
              <ContactForm />
            </div>
          </div>
        </FadeInUp>
      </Section>

      {/* Direct Contact */}
      <Section>
        <FadeInUp>
          <Label>Coordonnées</Label>
          <div className={styles.directContact}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a
                href={`mailto:${CONTACT.email}`}
                className={styles.contactLink}
              >
                {CONTACT.email}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Téléphone</span>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className={styles.contactLink}
              >
                {CONTACT.phone}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Localisation</span>
              <span className={styles.contactValue}>
                {CONTACT.location}
              </span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>LinkedIn</span>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                P-XEL Studio
              </a>
            </div>
          </div>
        </FadeInUp>
      </Section>
    </>
  );
}
