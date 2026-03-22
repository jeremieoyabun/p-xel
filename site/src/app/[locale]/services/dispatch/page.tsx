import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section/Section";
import { Label } from "@/components/Label/Label";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { ProcessStep } from "@/components/ProcessStep/ProcessStep";
import { CalendlyPopup } from "@/components/CalendlyPopup/CalendlyPopup";
import { TallyPopup } from "@/components/TallyPopup/TallyPopup";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
import { FadeInUp } from "@/components/FadeInUp/FadeInUp";
import { SchemaScript } from "@/components/SchemaScript/SchemaScript";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { SERVICE_LABELS } from "@/lib/service-labels";
import { localePath } from "@/lib/i18n/get-path";
import type { Locale } from "@/lib/i18n/config";
import styles from "./page.module.css";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const content = (locale: Locale) => {
  const isFr = locale === "fr";

  return {
    meta: {
      title: isFr
        ? "Dispatch — Coordination de contenu multi-marchés | P-XEL"
        : "Dispatch — Multi-Market Content Coordination | P-XEL",
      description: isFr
        ? "Centralisez la création de contenu, distribuez-le à vos marchés régionaux, gardez le contrôle de votre marque. Plateforme + onboarding accompagné."
        : "Centralize content creation, distribute it to your regional markets, and keep brand control. Platform + guided onboarding.",
    },

    hero: {
      label: "Content Operations Platform",
      heading: isFr
        ? "Un HQ. Dix marchés. Zéro chaos."
        : "One HQ. Ten markets. Zero chaos.",
      subheadline: isFr
        ? "Dispatch centralise votre contenu marketing et le distribue à vos équipes régionales. Calendrier, validation, adaptation locale. Tout dans une seule interface."
        : "Dispatch centralizes your marketing content and distributes it to your regional teams. Calendar, approval, local adaptation. All in one interface.",
    },

    problem: {
      label: isFr ? "Le contexte" : "The context",
      heading: isFr
        ? "Votre contenu se perd entre le siège et le terrain."
        : "Your content gets lost between HQ and the field.",
      intro: isFr
        ? "Vous opérez sur plusieurs marchés. Chaque région a ses comptes sociaux, ses contraintes, son audience. Et entre le HQ qui produit et le terrain qui publie, c'est le même scénario qui se répète."
        : "You operate across multiple markets. Each region has its own social accounts, constraints, and audience. Between HQ producing and the field publishing, the same scenario repeats.",
      points: isFr
        ? [
            "Le contenu arrive par email, par WeTransfer, par WhatsApp. Personne ne sait quelle version est la bonne.",
            "Les équipes régionales n'ont pas le contexte. Elles publient en retard, hors marque, ou pas du tout.",
            "Le HQ n'a aucune visibilité sur ce qui a été publié, adapté ou ignoré.",
            "Chaque marché réinvente la roue au lieu de localiser ce qui fonctionne déjà.",
          ]
        : [
            "Content arrives via email, WeTransfer, WhatsApp. Nobody knows which version is the right one.",
            "Regional teams lack context. They publish late, off-brand, or not at all.",
            "HQ has zero visibility on what was published, adapted, or ignored.",
            "Each market reinvents the wheel instead of localizing what already works.",
          ],
    },

    features: {
      label: isFr ? "Ce qu'on a construit" : "What we built",
      heading: isFr
        ? "Une plateforme pensée pour les équipes multi-marchés."
        : "A platform built for multi-market teams.",
      items: isFr
        ? [
            {
              title: "Calendrier centralisé",
              body: "Chaque marché voit ses posts planifiés. Captions, hashtags, visuels, timing. Tout est prêt, rien n'est à deviner.",
              icon: "grid",
            },
            {
              title: "Workflow de validation",
              body: "Le contenu passe du HQ aux équipes locales avec un circuit d'approbation clair. Approuver, demander des modifications, commenter. Pas d'email perdu.",
              icon: "workflow",
            },
            {
              title: "Adaptation locale",
              body: "Le master content est créé une fois. Chaque marché reçoit une version adaptée à son ton, sa langue et ses hashtags. Les équipes locales ajustent et valident.",
              icon: "globe",
            },
            {
              title: "Bibliothèque d'assets",
              body: "Un espace partagé où les équipes terrain uploadent leurs photos locales et où le HQ dépose les assets de marque.",
              icon: "layers",
            },
            {
              title: "Suivi de performance",
              body: "Visibilité sur ce qui a été publié, approuvé ou bloqué. Par marché, par période, par type de contenu.",
              icon: "eye",
            },
          ]
        : [
            {
              title: "Centralized calendar",
              body: "Each market sees its scheduled posts. Captions, hashtags, visuals, timing. Everything is ready, nothing to guess.",
              icon: "grid",
            },
            {
              title: "Approval workflow",
              body: "Content flows from HQ to local teams with a clear approval circuit. Approve, request changes, comment. No lost emails.",
              icon: "workflow",
            },
            {
              title: "Local adaptation",
              body: "Master content is created once. Each market receives a version adapted to its tone, language, and hashtags. Local teams adjust and validate.",
              icon: "globe",
            },
            {
              title: "Asset library",
              body: "A shared space where field teams upload their local photos and HQ drops brand assets.",
              icon: "layers",
            },
            {
              title: "Performance tracking",
              body: "Visibility on what was published, approved, or blocked. By market, period, or content type.",
              icon: "eye",
            },
          ],
    },

    process: {
      label: isFr ? "Notre méthode" : "Our method",
      heading: isFr
        ? "Du brief au post publié. Sans friction."
        : "From brief to published post. Zero friction.",
      steps: isFr
        ? [
            { number: "01", title: "Le HQ crée", body: "Le contenu master est produit centralement. Textes, visuels, stratégie. Un seul point de vérité." },
            { number: "02", title: "Dispatch distribue", body: "Chaque post est adapté et routé vers le bon marché. Ton, hashtags, timing local. Automatiquement." },
            { number: "03", title: "Les équipes valident", body: "Les responsables régionaux reçoivent le contenu dans leur dashboard. Ils approuvent, ajustent ou commentent." },
            { number: "04", title: "Le contenu est publié", body: "Une fois validé, le contenu part en publication. Le HQ garde la visibilité sur tout ce qui sort." },
          ]
        : [
            { number: "01", title: "HQ creates", body: "Master content is produced centrally. Copy, visuals, strategy. A single source of truth." },
            { number: "02", title: "Dispatch distributes", body: "Each post is adapted and routed to the right market. Tone, hashtags, local timing. Automatically." },
            { number: "03", title: "Teams validate", body: "Regional managers receive content in their dashboard. They approve, adjust, or comment." },
            { number: "04", title: "Content goes live", body: "Once validated, content goes to publication. HQ keeps visibility on everything that goes out." },
          ],
    },

    caseStudy: {
      label: isFr ? "En production" : "In production",
      heading: isFr
        ? "Déjà déployé chez Greenmood."
        : "Already deployed at Greenmood.",
      blocks: isFr
        ? [
            { label: "Contexte", body: "Greenmood opère sur 9 marchés (US, BE, UK, UAE, FR, PL, KR, DE, SE) avec des équipes marketing régionales et des comptes sociaux locaux." },
            { label: "Avant Dispatch", body: "Le contenu circulait par email et documents partagés. Les équipes régionales publiaient en décalé, sans cohérence de marque. Le HQ n'avait pas de visibilité sur ce qui était publié localement." },
            { label: "Avec Dispatch", body: "Le calendrier est centralisé, chaque marché a son dashboard, les validations se font dans la plateforme. Le temps de coordination a été divisé par trois." },
          ]
        : [
            { label: "Context", body: "Greenmood operates across 9 markets (US, BE, UK, UAE, FR, PL, KR, DE, SE) with regional marketing teams and local social accounts." },
            { label: "Before Dispatch", body: "Content was shared via email and documents. Regional teams published late, off-brand. HQ had no visibility on what was published locally." },
            { label: "With Dispatch", body: "The calendar is centralized, each market has its dashboard, approvals happen in the platform. Coordination time was cut by three." },
          ],
      cta: isFr
        ? "Voir comment Dispatch s'adapte à votre entreprise"
        : "See how Dispatch adapts to your business",
    },

    audience: {
      label: isFr ? "Pour qui" : "Who it's for",
      heading: isFr
        ? "Conçu pour les entreprises qui opèrent sur 3+ marchés."
        : "Built for companies operating across 3+ markets.",
      body: isFr
        ? [
            "PME et ETI B2B avec des équipes marketing régionales ou des distributeurs locaux. Secteurs : design, architecture, matériaux, mobilier, lifestyle, industrie. Le profil type : un HQ qui produit le contenu, des marchés qui l'adaptent et le diffusent localement.",
            "Si vous coordonnez le contenu entre un siège et le terrain par email et tableurs, Dispatch est fait pour vous.",
          ]
        : [
            "B2B SMEs and mid-caps with regional marketing teams or local distributors. Sectors: design, architecture, materials, furniture, lifestyle, industry. Typical profile: a HQ that produces content, markets that adapt and distribute it locally.",
            "If you're coordinating content between headquarters and the field via email and spreadsheets, Dispatch is made for you.",
          ],
    },

    pricing: {
      label: isFr ? "Investissement" : "Investment",
      heading: isFr
        ? "Un produit, pas un abonnement SaaS générique."
        : "A product, not a generic SaaS subscription.",
      intro: isFr
        ? "Dispatch n'est pas un outil freemium avec 200 fonctionnalités dont vous n'utiliserez jamais la moitié. C'est une plateforme configurée pour votre structure, vos marchés et vos workflows."
        : "Dispatch is not a freemium tool with 200 features you'll never use half of. It's a platform configured for your structure, markets, and workflows.",
      cards: isFr
        ? [
            {
              label: "Setup + onboarding",
              amount: "à partir de 4 000 €",
              body: "Configuration de la plateforme pour vos marchés, import de votre calendrier de contenu existant, formation de vos équipes régionales, 30 jours d'accompagnement.",
            },
            {
              label: "Abonnement mensuel",
              amount: "à partir de 300 €/mois",
              body: "Hébergement, maintenance, support, mises à jour. Le prix varie selon le nombre de marchés et le volume de contenu.",
            },
          ]
        : [
            {
              label: "Setup + onboarding",
              amount: "from €4,000",
              body: "Platform configuration for your markets, import of your existing content calendar, training for your regional teams, 30 days of support.",
            },
            {
              label: "Monthly subscription",
              amount: "from €300/month",
              body: "Hosting, maintenance, support, updates. Price varies based on number of markets and content volume.",
            },
          ],
      note: isFr
        ? "Estimation gratuite et détaillée après un premier échange. Pas de surprise, pas d'engagement minimum."
        : "Free detailed estimate after an initial call. No surprises, no minimum commitment.",
      cta: isFr ? "Demander une estimation" : "Request a quote",
    },

    faq: {
      label: isFr ? "Questions fréquentes" : "Frequently asked questions",
      items: isFr
        ? [
            { question: "Combien de marchés peut-on gérer avec Dispatch ?", answer: "Il n'y a pas de limite technique. La plateforme est conçue pour scaler de 3 à 20+ marchés. Chaque marché a son propre dashboard et ses propres workflows de validation." },
            { question: "Est-ce qu'on peut connecter Dispatch à nos outils de publication ?", answer: "L'intégration avec des outils comme Buffer, Hootsuite ou la publication directe vers Meta Business Suite est prévue dans la roadmap. En attendant, le contenu validé est prêt à copier-coller en un clic." },
            { question: "Qui crée le contenu ?", answer: "Vous. Dispatch est un outil de coordination, pas de création. Votre équipe HQ produit le contenu master, Dispatch le distribue et coordonne la validation avec vos marchés." },
            { question: "Est-ce que nos équipes régionales ont besoin de compétences techniques ?", answer: "Non. L'interface est pensée pour des profils marketing, pas des développeurs. Voir le calendrier, approuver un post, uploader une photo : tout se fait en quelques clics." },
            { question: "Comment se passe l'onboarding ?", answer: "On configure la plateforme ensemble en 1 à 2 semaines. On importe votre calendrier existant, on crée les accès pour chaque marché, et on forme vos équipes. Pendant les 30 premiers jours, on est disponible pour ajuster ce qui doit l'être." },
          ]
        : [
            { question: "How many markets can Dispatch handle?", answer: "There's no technical limit. The platform is designed to scale from 3 to 20+ markets. Each market has its own dashboard and approval workflows." },
            { question: "Can we connect Dispatch to our publishing tools?", answer: "Integration with tools like Buffer, Hootsuite, or direct publishing to Meta Business Suite is on the roadmap. In the meantime, validated content is ready to copy-paste in one click." },
            { question: "Who creates the content?", answer: "You do. Dispatch is a coordination tool, not a creation tool. Your HQ team produces master content, Dispatch distributes it and coordinates validation with your markets." },
            { question: "Do our regional teams need technical skills?", answer: "No. The interface is designed for marketing profiles, not developers. Viewing the calendar, approving a post, uploading a photo — everything is a few clicks away." },
            { question: "How does onboarding work?", answer: "We configure the platform together in 1 to 2 weeks. We import your existing calendar, create access for each market, and train your teams. During the first 30 days, we're available to adjust what needs adjusting." },
          ],
    },

    finalCta: {
      heading: isFr
        ? "Votre contenu mérite d'arriver à destination."
        : "Your content deserves to reach its destination.",
      subtext: isFr
        ? "Décrivez votre setup multi-marchés en quelques lignes. On vous montre comment Dispatch s'adapte à votre structure."
        : "Describe your multi-market setup in a few lines. We'll show you how Dispatch adapts to your structure.",
    },
  };
};

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = content(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}/services/dispatch/`,
      languages: { fr: "/fr/services/dispatch/", en: "/en/services/dispatch/" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `/${locale}/services/dispatch/`,
      siteName: "P-XEL Studio",
      locale: locale === "fr" ? "fr_BE" : "en_US",
      type: "website",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const OTHER_SERVICES = [
  "creation-site-web",
  "application-web-mvp",
  "ux-ui-design",
  "branding-identite",
  "ai-studio",
];

export default async function DispatchPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isFr = locale === "fr";
  const t = content(locale);

  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: isFr ? "Accueil" : "Home", url: `/${locale}/` },
            { name: "Dispatch", url: `/${locale}/services/dispatch/` },
          ]),
          serviceSchema("Dispatch", t.meta.description),
          faqSchema(t.faq.items),
        ]}
      />

      {/* Hero */}
      <Section>
        <FadeInUp>
          <Label>{t.hero.label}</Label>
          <SectionHeading
            heading={t.hero.heading}
            subtext={t.hero.subheadline}
          />
          <div className={styles.heroCta}>
            <CalendlyPopup
              label={isFr ? "Réserver un appel" : "Book a call"}
              variant="dark"
            />
            <TallyPopup
              label={isFr ? "Voir la démo" : "See the demo"}
              variant="dark"
            />
          </div>
        </FadeInUp>
      </Section>

      {/* Problem */}
      <Section>
        <FadeInUp>
          <Label>{t.problem.label}</Label>
          <SectionHeading heading={t.problem.heading} />
          <p className={styles.sectionIntro}>{t.problem.intro}</p>
          <div className={styles.problemsGrid}>
            {t.problem.points.map((point, i) => (
              <div key={i} className={styles.problemCard}>
                <span className={styles.problemX} aria-hidden="true">
                  ×
                </span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Features */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{t.features.label}</Label>
          <SectionHeading heading={t.features.heading} />
          <div className={styles.featuresGrid}>
            {t.features.items.map((item) => (
              <div key={item.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Process */}
      <Section>
        <FadeInUp>
          <Label>{t.process.label}</Label>
          <SectionHeading heading={t.process.heading} />
          <div className={styles.processGrid}>
            {t.process.steps.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.body}
              />
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Case Study */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{t.caseStudy.label}</Label>
          <SectionHeading heading={t.caseStudy.heading} />
          <div className={styles.caseGrid}>
            {t.caseStudy.blocks.map((block) => (
              <div key={block.label} className={styles.caseBlock}>
                <span className={styles.caseLabel}>{block.label}</span>
                <p className={styles.caseBody}>{block.body}</p>
              </div>
            ))}
          </div>
          <div className={styles.caseCta}>
            <CalendlyPopup label={t.caseStudy.cta} variant="dark" />
          </div>
        </FadeInUp>
      </Section>

      {/* Audience */}
      <Section>
        <FadeInUp>
          <Label>{t.audience.label}</Label>
          <SectionHeading heading={t.audience.heading} />
          <div className={styles.audienceBody}>
            {t.audience.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeInUp>
      </Section>

      {/* Pricing */}
      <Section>
        <FadeInUp>
          <Label>{t.pricing.label}</Label>
          <SectionHeading heading={t.pricing.heading} />
          <p className={styles.sectionIntro}>{t.pricing.intro}</p>
          <div className={styles.pricingGrid}>
            {t.pricing.cards.map((card) => (
              <div key={card.label} className={styles.pricingCard}>
                <span className={styles.pricingLabel}>{card.label}</span>
                <span className={styles.pricingAmount}>{card.amount}</span>
                <p className={styles.pricingBody}>{card.body}</p>
              </div>
            ))}
          </div>
          <p className={styles.pricingNote}>{t.pricing.note}</p>
          <div className={styles.pricingCta}>
            <CalendlyPopup label={t.pricing.cta} variant="dark" />
          </div>
        </FadeInUp>
      </Section>

      {/* FAQ */}
      <Section>
        <FadeInUp>
          <Label>{t.faq.label}</Label>
          <FAQ items={t.faq.items} />
        </FadeInUp>
      </Section>

      {/* Other Services */}
      <Section variant="accent">
        <FadeInUp>
          <Label>{isFr ? "Nos autres services" : "Our other services"}</Label>
          <div className={styles.otherServicesGrid}>
            {OTHER_SERVICES.map((slug) => {
              const labels = SERVICE_LABELS[slug];
              return (
                <Link
                  key={slug}
                  href={localePath(`/services/${slug}/`, locale)}
                  className={styles.otherServiceLink}
                >
                  {labels ? labels[locale] : slug}
                </Link>
              );
            })}
          </div>
        </FadeInUp>
      </Section>

      {/* Final CTA */}
      <Section fullHeight>
        <CTA
          heading={t.finalCta.heading}
          subtext={t.finalCta.subtext}
          primaryLabel={isFr ? "Réserver un appel" : "Book a call"}
          secondaryLabel={isFr ? "Demander une démo" : "Request a demo"}
        />
      </Section>
    </>
  );
}
