import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed/CalendlyEmbed";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { CONTACT, SOCIAL } from "@/lib/constants";
import { getContactContent } from "@/lib/content/contact";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: "Contact",
    description: isFr
      ? "Réservez un appel de 30 minutes ou décrivez votre projet. On répond sous 24h. P-XEL Studio, Liège, Belgique."
      : "Book a 30-minute call or describe your project. We reply within 24h. P-XEL Studio, Liège, Belgium.",
    alternates: { canonical: `/${locale}/contact/` },
    openGraph: {
      title: "Contact | P-XEL Studio",
      description: isFr
        ? "Réservez un appel de 30 minutes ou décrivez votre projet. On répond sous 24h."
        : "Book a 30-minute call or describe your project. We reply within 24h.",
      url: `/${locale}/contact/`,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getContactContent(locale as Locale);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: locale === "fr" ? "Accueil" : "Home", url: `/${locale}/` },
            { name: "Contact", url: `/${locale}/contact/` },
          ]),
          localBusinessSchema(),
        ]}
      />

      {/* Opening + Two Paths */}
      <Section>
        <FadeInUp>
          <Label>{content.contactIntro.label}</Label>
          <SectionHeading
            heading={content.contactIntro.heading}
            subtext={content.contactIntro.subtext}
          />
        </FadeInUp>
        <FadeInUp>
          <div className={styles.paths}>
            {/* Path A: Calendly */}
            <div className={styles.path}>
              <h2 className={styles.pathHeading}>
                {content.contactCalendly.heading}
              </h2>
              <p className={styles.pathBody}>{content.contactCalendly.body}</p>
              <CalendlyEmbed url={CONTACT.calendlyUrl} />
            </div>

            {/* Path B: Form */}
            <div className={styles.path}>
              <h2 className={styles.pathHeading}>
                {content.contactForm.heading}
              </h2>
              <p className={styles.pathBody}>{content.contactForm.body}</p>
              <ContactForm />
            </div>
          </div>
        </FadeInUp>
      </Section>

      {/* Direct Contact */}
      <Section>
        <FadeInUp>
          <Label>{locale === "fr" ? "Coordonnées" : "Contact details"}</Label>
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
              <span className={styles.contactLabel}>
                {locale === "fr" ? "Téléphone" : "Phone"}
              </span>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className={styles.contactLink}
              >
                {CONTACT.phone}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>
                {locale === "fr" ? "Localisation" : "Location"}
              </span>
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
