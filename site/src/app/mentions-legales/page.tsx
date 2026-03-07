import type { Metadata } from "next";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site p-xel.be. Informations sur l'éditeur, l'hébergement et les conditions d'utilisation.",
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
            { name: "Mentions légales", url: "/mentions-legales/" },
          ]),
        ]}
      />

      <Section>
        <Label>Legal</Label>
        <SectionHeading heading="Mentions légales" />
        <div className={styles.content}>
          <div className={styles.block}>
            <h2>Éditeur du site</h2>
            <p>
              P-XEL Studio<br />
              Liège, Belgique<br />
              Email :{" "}
              <a href="mailto:hello@p-xel.be">hello@p-xel.be</a><br />
              Téléphone :{" "}
              <a href="tel:+32497382954">+32 497 38 29 54</a>
            </p>
          </div>

          <div className={styles.block}>
            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes,
              logo, icônes, code source) est la propriété exclusive de P-XEL
              Studio, sauf mention contraire. Toute reproduction,
              représentation, modification ou exploitation non autorisée est
              interdite.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Responsabilité</h2>
            <p>
              P-XEL Studio s'efforce de fournir des informations exactes et à
              jour. Toutefois, aucune garantie n'est donnée quant à l'exactitude
              ou l'exhaustivité des informations publiées sur ce site. P-XEL
              Studio ne saurait être tenu responsable des dommages directs ou
              indirects liés à l'utilisation du site.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. P-XEL
              Studio n'exerce aucun contrôle sur le contenu de ces sites et
              décline toute responsabilité les concernant.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit belge.
              Tout litige relatif à l'utilisation du site sera soumis à la
              compétence exclusive des tribunaux de Liège.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
