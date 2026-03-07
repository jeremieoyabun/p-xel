import type { Metadata } from "next";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "../mentions-legales/page.module.css";

export const metadata: Metadata = {
  title: "Politique de Confidentialite",
  description:
    "Politique de confidentialite de P-XEL Studio. Comment vos donnees sont collectees, utilisees et protegees.",
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
              name: "Politique de confidentialite",
              url: "/politique-confidentialite/",
            },
          ]),
        ]}
      />

      <Section>
        <Label>Legal</Label>
        <SectionHeading heading="Politique de confidentialite" />
        <div className={styles.content}>
          <div className={styles.block}>
            <h2>Responsable du traitement</h2>
            <p>
              P-XEL Studio, base a Liege, Belgique, est responsable du
              traitement des donnees personnelles collectees via ce site.
              Contact :{" "}
              <a href="mailto:hello@p-xel.be">hello@p-xel.be</a>
            </p>
          </div>

          <div className={styles.block}>
            <h2>Donnees collectees</h2>
            <p>
              Nous collectons les donnees que vous fournissez volontairement
              via le formulaire de contact : nom, adresse email, type de
              projet, budget estimatif (optionnel), delai souhaite
              (optionnel) et message. Ces donnees sont utilisees
              exclusivement pour repondre a votre demande et vous
              recontacter.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Base legale</h2>
            <p>
              Le traitement de vos donnees repose sur votre consentement
              (envoi volontaire du formulaire) et sur notre interet legitime
              a repondre aux demandes de prospects. Vous pouvez retirer
              votre consentement a tout moment en nous contactant.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Destinataires</h2>
            <p>
              Vos donnees sont transmises a Resend (service d'envoi
              d'emails) pour la notification par email. Elles ne sont ni
              vendues, ni cedees, ni partagees avec des tiers a des fins
              commerciales.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Duree de conservation</h2>
            <p>
              Les donnees du formulaire de contact sont conservees pendant
              une duree maximale de 24 mois a compter de la derniere
              interaction. Au-dela, elles sont supprimees.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de suivi ou publicitaires. Le
              widget Calendly, charge sur la page de contact, peut utiliser
              ses propres cookies. Consultez la{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                politique de confidentialite de Calendly
              </a>{" "}
              pour plus d'informations.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Vos droits</h2>
            <p>
              Conformement au RGPD, vous disposez d'un droit d'acces, de
              rectification, de suppression, de limitation du traitement, de
              portabilite et d'opposition concernant vos donnees
              personnelles. Pour exercer ces droits, contactez-nous a{" "}
              <a href="mailto:hello@p-xel.be">hello@p-xel.be</a>. Vous
              avez egalement le droit d'introduire une reclamation aupres
              de l'Autorite de protection des donnees (APD) belge.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Securite</h2>
            <p>
              Nous mettons en oeuvre des mesures techniques et
              organisationnelles appropriees pour proteger vos donnees
              personnelles contre tout acces non autorise, toute
              modification, divulgation ou destruction.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Modifications</h2>
            <p>
              Cette politique de confidentialite peut etre mise a jour. La
              date de derniere modification sera indiquee en haut de cette
              page. Derniere mise a jour : mars 2026.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
