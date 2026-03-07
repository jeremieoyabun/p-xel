import type { Metadata } from "next";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "../mentions-legales/page.module.css";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité de P-XEL Studio. Comment vos données sont collectées, utilisées et protégées.",
  alternates: { canonical: "/politique-confidentialite/" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            {
              name: "Politique de confidentialité",
              url: "/politique-confidentialite/",
            },
          ]),
        ]}
      />

      <Section>
        <Label>Legal</Label>
        <SectionHeading heading="Politique de confidentialité" />
        <div className={styles.content}>
          <div className={styles.block}>
            <h2>Responsable du traitement</h2>
            <p>
              P-XEL Studio, basé à Liège, Belgique, est responsable du
              traitement des données personnelles collectées via ce site.
              Contact :{" "}
              <a href="mailto:hello@p-xel.be">hello@p-xel.be</a>
            </p>
          </div>

          <div className={styles.block}>
            <h2>Données collectées</h2>
            <p>
              Nous collectons les données que vous fournissez volontairement
              via le formulaire de contact : nom, adresse email, type de
              projet, budget estimatif (optionnel), délai souhaité
              (optionnel) et message. Ces données sont utilisées
              exclusivement pour répondre à votre demande et vous
              recontacter.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Base légale</h2>
            <p>
              Le traitement de vos données repose sur votre consentement
              (envoi volontaire du formulaire) et sur notre intérêt légitime
              à répondre aux demandes de prospects. Vous pouvez retirer
              votre consentement à tout moment en nous contactant.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Destinataires</h2>
            <p>
              Vos données sont transmises à Resend (service d'envoi
              d'emails) pour la notification par email. Elles ne sont ni
              vendues, ni cédées, ni partagées avec des tiers à des fins
              commerciales.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Durée de conservation</h2>
            <p>
              Les données du formulaire de contact sont conservées pendant
              une durée maximale de 24 mois à compter de la dernière
              interaction. Au-delà, elles sont supprimées.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de suivi ou publicitaires. Le
              widget Calendly, chargé sur la page de contact, peut utiliser
              ses propres cookies. Consultez la{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                politique de confidentialité de Calendly
              </a>{" "}
              pour plus d'informations.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de
              rectification, de suppression, de limitation du traitement, de
              portabilité et d'opposition concernant vos données
              personnelles. Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:hello@p-xel.be">hello@p-xel.be</a>. Vous
              avez également le droit d'introduire une réclamation auprès
              de l'Autorité de protection des données (APD) belge.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Sécurité</h2>
            <p>
              Nous mettons en oeuvre des mesures techniques et
              organisationnelles appropriées pour protéger vos données
              personnelles contre tout accès non autorisé, toute
              modification, divulgation ou destruction.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Modifications</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour. La
              date de dernière modification sera indiquée en haut de cette
              page. Dernière mise à jour : mars 2026.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
