import type { Metadata } from "next";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  return {
    title: isFr ? "Mentions Légales" : "Legal Notice",
    description: isFr
      ? "Mentions légales du site p-xel.be. Informations sur l'éditeur, l'hébergement et les conditions d'utilisation."
      : "Legal notice for p-xel.be. Information about the publisher, hosting and terms of use.",
    alternates: { canonical: `/${locale}/mentions-legales/` },
    robots: { index: true, follow: true },
  };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: locale === "fr" ? "Accueil" : "Home", url: `/${locale}/` },
            { name: locale === "fr" ? "Mentions légales" : "Legal Notice", url: `/${locale}/mentions-legales/` },
          ]),
        ]}
      />

      <Section>
        <Label>Legal</Label>
        <SectionHeading heading={locale === "fr" ? "Mentions légales" : "Legal Notice"} />
        <div className={styles.content}>
          <div className={styles.block}>
            <h2>{locale === "fr" ? "Éditeur du site" : "Site Publisher"}</h2>
            <p>
              P-XEL Studio<br />
              Liège, Belgique<br />
              Email :{" "}
              <a href="mailto:hello@p-xel.be">hello@p-xel.be</a><br />
              {locale === "fr" ? "Téléphone" : "Phone"} :{" "}
              <a href="tel:+32497382954">+32 497 38 29 54</a>
            </p>
          </div>

          <div className={styles.block}>
            <h2>{locale === "fr" ? "Hébergement" : "Hosting"}</h2>
            <p>
              {locale === "fr"
                ? "Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis."
                : "This site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>{locale === "fr" ? "Propriété intellectuelle" : "Intellectual Property"}</h2>
            <p>
              {locale === "fr"
                ? "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, code source) est la propriété exclusive de P-XEL Studio, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation non autorisée est interdite."
                : "All content on this site (text, images, graphics, logo, icons, source code) is the exclusive property of P-XEL Studio, unless otherwise stated. Any unauthorized reproduction, representation, modification or exploitation is prohibited."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>{locale === "fr" ? "Responsabilité" : "Liability"}</h2>
            <p>
              {locale === "fr"
                ? "P-XEL Studio s'efforce de fournir des informations exactes et à jour. Toutefois, aucune garantie n'est donnée quant à l'exactitude ou l'exhaustivité des informations publiées sur ce site. P-XEL Studio ne saurait être tenu responsable des dommages directs ou indirects liés à l'utilisation du site."
                : "P-XEL Studio strives to provide accurate and up-to-date information. However, no guarantee is given as to the accuracy or completeness of the information published on this site. P-XEL Studio cannot be held responsible for any direct or indirect damages related to the use of the site."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>{locale === "fr" ? "Liens externes" : "External Links"}</h2>
            <p>
              {locale === "fr"
                ? "Ce site peut contenir des liens vers des sites tiers. P-XEL Studio n'exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité les concernant."
                : "This site may contain links to third-party websites. P-XEL Studio has no control over the content of these sites and disclaims all responsibility regarding them."}
            </p>
          </div>

          <div className={styles.block}>
            <h2>{locale === "fr" ? "Droit applicable" : "Applicable Law"}</h2>
            <p>
              {locale === "fr"
                ? "Les présentes mentions légales sont régies par le droit belge. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux de Liège."
                : "These legal notices are governed by Belgian law. Any dispute relating to the use of the site shall be subject to the exclusive jurisdiction of the courts of Liège."}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
