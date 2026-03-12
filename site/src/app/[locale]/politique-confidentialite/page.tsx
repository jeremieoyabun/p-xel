import type { Metadata } from "next";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "../mentions-legales/page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: isFr ? "Politique de Confidentialité" : "Privacy Policy",
    description: isFr
      ? "Politique de confidentialité de P-XEL Studio. Comment vos données sont collectées, utilisées et protégées."
      : "Privacy policy of P-XEL Studio. How your data is collected, used and protected.",
    alternates: { canonical: `/${locale}/politique-confidentialite/` },
    robots: { index: true, follow: true },
  };
}

export default async function PolitiqueConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: isFr ? "Accueil" : "Home", url: `/${locale}/` },
            {
              name: isFr ? "Politique de confidentialité" : "Privacy Policy",
              url: `/${locale}/politique-confidentialite/`,
            },
          ]),
        ]}
      />

      <Section>
        <Label>Legal</Label>
        <SectionHeading heading={isFr ? "Politique de confidentialité" : "Privacy Policy"} />
        <div className={styles.content}>
          <div className={styles.block}>
            <h2>{isFr ? "Responsable du traitement" : "Data Controller"}</h2>
            <p>
              {isFr
                ? "P-XEL Studio, basé à Liège, Belgique, est responsable du traitement des données personnelles collectées via ce site."
                : "P-XEL Studio, based in Liège, Belgium, is responsible for processing the personal data collected via this site."}{" "}
              Contact :{" "}
              <a href="mailto:hello@p-xel.be">hello@p-xel.be</a>
            </p>
          </div>

          <div className={styles.block}>
            <h2>{isFr ? "Données collectées" : "Data Collected"}</h2>
            <p>
              {isFr
                ? "Nous collectons les données que vous fournissez volontairement via le formulaire de contact : nom, adresse email, type de projet, budget estimatif (optionnel), délai souhaité (optionnel) et message. Ces données sont utilisées exclusivement pour répondre à votre demande et vous recontacter."
                : "We collect data you voluntarily provide via the contact form: name, email address, project type, estimated budget (optional), desired timeline (optional) and message. This data is used exclusively to respond to your request and contact you back."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>{isFr ? "Base légale" : "Legal Basis"}</h2>
            <p>
              {isFr
                ? "Le traitement de vos données repose sur votre consentement (envoi volontaire du formulaire) et sur notre intérêt légitime à répondre aux demandes de prospects. Vous pouvez retirer votre consentement à tout moment en nous contactant."
                : "The processing of your data is based on your consent (voluntary submission of the form) and our legitimate interest in responding to prospect inquiries. You may withdraw your consent at any time by contacting us."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>{isFr ? "Destinataires" : "Recipients"}</h2>
            <p>
              {isFr
                ? "Vos données sont transmises à Resend (service d'envoi d'emails) pour la notification par email. Elles ne sont ni vendues, ni cédées, ni partagées avec des tiers à des fins commerciales."
                : "Your data is transmitted to Resend (email sending service) for email notifications. It is neither sold, transferred, nor shared with third parties for commercial purposes."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>{isFr ? "Durée de conservation" : "Retention Period"}</h2>
            <p>
              {isFr
                ? "Les données du formulaire de contact sont conservées pendant une durée maximale de 24 mois à compter de la dernière interaction. Au-delà, elles sont supprimées."
                : "Contact form data is retained for a maximum of 24 months from the last interaction. After that, it is deleted."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>Cookies</h2>
            <p>
              {isFr
                ? "Ce site n'utilise pas de cookies de suivi ou publicitaires. Le widget Calendly, chargé sur la page de contact, peut utiliser ses propres cookies. Consultez la "
                : "This site does not use tracking or advertising cookies. The Calendly widget, loaded on the contact page, may use its own cookies. See the "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isFr ? "politique de confidentialité de Calendly" : "Calendly privacy policy"}
              </a>{" "}
              {isFr ? "pour plus d'informations." : "for more information."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>{isFr ? "Vos droits" : "Your Rights"}</h2>
            <p>
              {isFr
                ? "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation du traitement, de portabilité et d'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à "
                : "In accordance with GDPR, you have the right to access, rectify, delete, restrict processing, data portability and object to processing of your personal data. To exercise these rights, contact us at "}
              <a href="mailto:hello@p-xel.be">hello@p-xel.be</a>.{" "}
              {isFr
                ? "Vous avez également le droit d'introduire une réclamation auprès de l'Autorité de protection des données (APD) belge."
                : "You also have the right to lodge a complaint with the Belgian Data Protection Authority (DPA)."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>{isFr ? "Sécurité" : "Security"}</h2>
            <p>
              {isFr
                ? "Nous mettons en oeuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute modification, divulgation ou destruction."
                : "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, modification, disclosure or destruction."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>Modifications</h2>
            <p>
              {isFr
                ? "Cette politique de confidentialité peut être mise à jour. La date de dernière modification sera indiquée en haut de cette page. Dernière mise à jour : mars 2026."
                : "This privacy policy may be updated. The date of last modification will be indicated at the top of this page. Last updated: March 2026."}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
