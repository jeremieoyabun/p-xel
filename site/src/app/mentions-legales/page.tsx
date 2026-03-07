import type { Metadata } from "next";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mentions Legales",
  description:
    "Mentions legales du site p-xel.be. Informations sur l'editeur, l'hebergement et les conditions d'utilisation.",
  alternates: { canonical: "/mentions-legales/" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Mentions legales", url: "/mentions-legales/" },
          ]),
        ]}
      />

      <Section>
        <Label>Legal</Label>
        <SectionHeading heading="Mentions legales" />
        <div className={styles.content}>
          <div className={styles.block}>
            <h2>Editeur du site</h2>
            <p>
              P-XEL Studio<br />
              Liege, Belgique<br />
              Email :{" "}
              <a href="mailto:hello@p-xel.be">hello@p-xel.be</a><br />
              Telephone :{" "}
              <a href="tel:+32497382954">+32 497 38 29 54</a>
            </p>
          </div>

          <div className={styles.block}>
            <h2>Hebergement</h2>
            <p>
              Ce site est heberge par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, Etats-Unis.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Propriete intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes,
              logo, icones, code source) est la propriete exclusive de P-XEL
              Studio, sauf mention contraire. Toute reproduction,
              representation, modification ou exploitation non autorisee est
              interdite.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Responsabilite</h2>
            <p>
              P-XEL Studio s'efforce de fournir des informations exactes et a
              jour. Toutefois, aucune garantie n'est donnee quant a l'exactitude
              ou l'exhaustivite des informations publiees sur ce site. P-XEL
              Studio ne saurait etre tenu responsable des dommages directs ou
              indirects lies a l'utilisation du site.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. P-XEL
              Studio n'exerce aucun controle sur le contenu de ces sites et
              decline toute responsabilite les concernant.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Droit applicable</h2>
            <p>
              Les presentes mentions legales sont regies par le droit belge.
              Tout litige relatif a l'utilisation du site sera soumis a la
              competence exclusive des tribunaux de Liege.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
