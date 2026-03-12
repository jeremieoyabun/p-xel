import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { CalendlyPopup } from "@/components/CalendlyPopup/CalendlyPopup";
import { TallyPopup } from "@/components/TallyPopup/TallyPopup";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import {
  breadcrumbSchema,
  serviceSchema,
  localBusinessSchema,
  faqSchema,
} from "@/lib/schema";
import type { ServicePage } from "@/lib/content/services/types";
import type { CityServiceContent, CityMeta } from "@/lib/content/cities/types";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/get-path";
import styles from "./CityServicePage.module.css";

interface CityServicePageProps {
  city: CityMeta;
  service: ServicePage;
  cityContent: CityServiceContent;
  locale: Locale;
}

export function CityServicePage({
  city,
  service,
  cityContent,
  locale,
}: CityServicePageProps) {
  const isFr = locale === "fr";
  const cityName = city.name[locale];

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: isFr ? "Accueil" : "Home", url: `/${locale}/` },
            { name: cityName, url: `/${locale}/${city.slug}/` },
            {
              name: service.hero.label,
              url: `/${locale}/${city.slug}/${service.slug}/`,
            },
          ]),
          serviceSchema(
            `${service.hero.label} - ${cityName}`,
            cityContent.metaDescription
          ),
          localBusinessSchema(),
          faqSchema(cityContent.faq),
        ]}
      />

      {/* Hero */}
      <Section>
        <FadeInUp>
          <Label>{cityContent.hero.label}</Label>
          <SectionHeading
            heading={cityContent.hero.heading}
            subtext={cityContent.hero.subtext}
          />
          <div className={styles.heroCta}>
            <CalendlyPopup
              label={isFr ? "Réserver un appel" : "Book a call"}
              variant="dark"
            />
            <TallyPopup
              label={isFr ? "Lancer mon projet" : "Start my project"}
              variant="dark"
            />
          </div>
        </FadeInUp>
      </Section>

      {/* Local Context */}
      <Section>
        <FadeInUp>
          <Label>{cityContent.localContext.label}</Label>
          <SectionHeading heading={cityContent.localContext.heading} />
          <div className={styles.contextBody}>
            {cityContent.localContext.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* What We Build (from main service) */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{service.whatWeBuild.label}</Label>
          <SectionHeading heading={service.whatWeBuild.heading} />
          <p className={styles.offerIntro}>{service.whatWeBuild.intro}</p>
          <div className={styles.offerGrid}>
            {service.whatWeBuild.items.map((item) => (
              <div key={item.title} className={styles.offerItem}>
                <h3 className={styles.offerTitle}>{item.title}</h3>
                <p className={styles.offerBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Why Here */}
      <Section>
        <FadeInUp>
          <Label>{cityContent.whyHere.label}</Label>
          <SectionHeading heading={cityContent.whyHere.heading} />
          <div className={styles.whyGrid}>
            {cityContent.whyHere.points.map((point) => (
              <div key={point.title} className={styles.whyPoint}>
                <h3 className={styles.whyTitle}>{point.title}</h3>
                <p className={styles.whyBody}>{point.body}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* FAQ */}
      <Section>
        <FadeInUp>
          <Label>{isFr ? "Questions fréquentes" : "FAQ"}</Label>
          <FAQ items={cityContent.faq} />
        </FadeInUp>
      </Section>

      {/* Cross-links */}
      <Section>
        <FadeInUp>
          <div className={styles.crossLinks}>
            <Link
              href={localePath(`/${city.slug}/`, locale)}
              className={styles.crossLink}
            >
              {isFr
                ? `Tous nos services à ${cityName}`
                : `All our services in ${cityName}`}
            </Link>
            <Link
              href={localePath(`/services/${service.slug}/`, locale)}
              className={styles.crossLink}
            >
              {isFr
                ? `${service.hero.label} : page complète`
                : `${service.hero.label}: full page`}
            </Link>
          </div>
        </FadeInUp>
      </Section>

      {/* CTA */}
      <Section fullHeight>
        <CTA
          heading={cityContent.cta.heading}
          subtext={cityContent.cta.subtext}
          primaryLabel={isFr ? "Réserver un appel" : "Book a call"}
          secondaryLabel={isFr ? "Lancer mon projet" : "Start my project"}
        />
      </Section>
    </>
  );
}
