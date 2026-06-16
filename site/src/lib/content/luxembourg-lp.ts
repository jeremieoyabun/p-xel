import { CONTACT } from "@/lib/constants";

/**
 * Luxembourg landing page content (FR only).
 * Lead-gen focused page targeting LU SMEs eligible for SME Packages Digital/IA.
 * Sections : Hero · Pitch · Process · Eligibility · Services · Comparison · About · FAQ · Final CTA · Disclaimer.
 */
export const luxembourgLpContent = {
  meta: {
    title: "Développer une app ou un SaaS au Luxembourg, subventionné 70%",
    description:
      "Studio AI-accelerated basé à Liège. Nous concevons votre app ou SaaS sur-mesure, éligible aux SME Packages Digital et IA du Luxembourg. Audit gratuit 30 min.",
  },

  hero: {
    eyebrow: "AI Product Studio · Liège · Luxembourg",
    headingTop: "Votre app sur-mesure, livrée en semaines.",
    headingBottom:
      "L'État luxembourgeois prend en charge jusqu'à 70%.",
    subtitle:
      "Nous concevons et développons des applications web et des SaaS pour les PME du Luxembourg, éligibles aux SME Packages Digital et IA. Vous payez 30%, le ministère de l'Économie finance le reste.",
    ctaPrimary: {
      label: "Réserver un audit gratuit (30 min)",
      href: CONTACT.calendlyUrl,
    },
    ctaSecondary: {
      label: "Vérifier mon éligibilité",
      href: "#eligibilite",
    },
    trustStrip:
      "16 ans de design produit · Stack Next.js, Vercel, Claude · CTO de Projet 111",
  },

  pitch: {
    items: [
      {
        stat: "70%",
        title: "Subvention SME Package",
        body: "Vous investissez 7 500 €, votre projet en vaut 25 000 €.",
      },
      {
        stat: "6 semaines",
        title: "Délai typique",
        body: "De la maquette au déploiement, grâce à un workflow AI-accelerated avec Claude Code.",
      },
      {
        stat: "1 contact",
        title: "Senior, du brief à la livraison",
        body: "Design, développement, déploiement, accompagnement subvention. Pas d'agence, pas de sous-traitance.",
      },
    ],
  },

  process: {
    label: "Comment ça marche",
    heading: "De l'idée à l'app, financée et livrée",
    steps: [
      {
        number: "01",
        title: "Audit gratuit (30 min)",
        body: "Nous clarifions votre besoin et nous vérifions ensemble l'éligibilité au SME Package Digital ou IA. Sans engagement.",
      },
      {
        number: "02",
        title: "Devis et préanalyse",
        body: "Nous préparons un devis éligible (3 000 € à 25 000 € HTVA) et nous prenons rendez-vous à la House of Entrepreneurship pour le valider.",
      },
      {
        number: "03",
        title: "Demande de subvention",
        body: "Le dossier part au ministère de l'Économie. Nous vous accompagnons sur la partie technique du dossier.",
      },
      {
        number: "04",
        title: "Conception et développement",
        body: "Dès validation, nous démarrons. Maquettes Figma, dev Next.js, déploiement Vercel. Vous suivez en continu.",
      },
      {
        number: "05",
        title: "Livraison et accompagnement",
        body: "App déployée, formation incluse, code à vous. Support post-livraison si besoin.",
      },
    ],
    notice:
      "Le délai entre le premier contact et le démarrage du développement est généralement de 6 à 10 semaines, validation ministère incluse. Réservez votre audit dès maintenant pour ne pas perdre de temps.",
  },

  eligibility: {
    label: "Éligibilité",
    heading: "Êtes-vous éligible aux SME Packages ?",
    intro:
      "Cinq critères à valider. La plupart des PME luxembourgeoises remplissent les conditions.",
    checklist: [
      "Votre entreprise est établie au Luxembourg",
      "Vous êtes une PME (moins de 250 ETP, CA < 50 M€)",
      "Vous disposez d'une autorisation d'établissement",
      "Votre projet a un budget entre 3 000 € et 25 000 € HTVA",
      "Votre activité n'est pas dans la liste des secteurs exclus (immobilier, fiduciaires, professions libérales hors architectes et ingénieurs)",
    ],
    packages: [
      {
        title: "SME Package Digital",
        body: "70% (jusqu'à 17 500 €) pour site web, app, SaaS, outils de gestion, marketing digital.",
      },
      {
        title: "SME Package IA",
        body: "70% (jusqu'à 17 500 €) pour intégration d'IA dans vos process : automatisation, agents, traitement de données.",
      },
    ],
    note: "Cumulables sous conditions de minimis.",
    cta: {
      label: "Vérifier mon éligibilité en 30 min",
      href: CONTACT.calendlyUrl,
    },
  },

  services: {
    label: "Ce que nous livrons",
    heading: "Apps et SaaS livrés au Luxembourg",
    items: [
      {
        title: "Applications métier",
        body: "Dashboards internes, outils de gestion, workflows automatisés. Pour fluidifier ce qui vous coûte du temps aujourd'hui.",
      },
      {
        title: "SaaS B2B sur-mesure",
        body: "Plateformes multi-utilisateurs avec authentification, paiements, espaces clients. De la landing au backend.",
      },
      {
        title: "Intégrations IA",
        body: "Agents Claude, automatisations, traitement de documents. L'IA appliquée à vos vrais cas d'usage, pas du gadget.",
      },
      {
        title: "Refonte de produit existant",
        body: "Migration depuis WordPress, Wix ou stack legacy vers Next.js, Supabase, Vercel.",
      },
    ],
  },

  comparison: {
    label: "Studio vs agence",
    heading: "Pourquoi un studio AI-accelerated bat l'agence digitale Luxembourg classique",
    columnLabels: {
      dimension: "Critère",
      agency: "Agence classique",
      pxel: "P-XEL Studio",
    },
    rows: [
      {
        dimension: "Délais",
        agency: "3 à 6 mois",
        pxel: "4 à 8 semaines",
      },
      {
        dimension: "Interlocuteurs",
        agency: "Account manager, PM, designers, devs",
        pxel: "Une équipe senior, un seul contact",
      },
      {
        dimension: "Coût",
        agency: "30 000 € à 80 000 €",
        pxel: "5 000 € à 25 000 € (compatible SME Package)",
      },
      {
        dimension: "Décisions",
        agency: "Comités, allers-retours",
        pxel: "Réponse dans la journée",
      },
      {
        dimension: "Stack",
        agency: "Variable, parfois legacy",
        pxel: "Next.js, Vercel, IA-native",
      },
    ],
    conclusion:
      "Nous remplaçons une agence par un workflow où Claude Code est notre co-développeur. Résultat : moins de coûts fixes répercutés sur vous, et un délai compatible avec les vrais enjeux business.",
  },

  about: {
    label: "À propos",
    heading: "Qui est derrière P-XEL",
    photo: {
      src: "/legacy-assets/images/Fondateur.webp",
      alt: "Jeremie Kuntzinger, fondateur de P-XEL Studio",
    },
    paragraphs: [
      "16 ans de design produit, UX/UI et développement web. P-XEL Studio est basé à Liège et travaille pour des PME en Belgique et au Luxembourg.",
      "En 2026, notre fondateur est aussi CTO de Projet 111, une application de sécurité citoyenne en cours de lancement. Cela nous garde proches des réalités produit côté entrepreneur.",
      "Notre différence : nous avons intégré Claude dans tout notre workflow. Nous livrons en semaines ce que les agences livrent en trimestres, sans sacrifier la qualité.",
    ],
  },

  faq: {
    label: "Questions fréquentes",
    heading: "Questions fréquentes",
    items: [
      {
        question:
          "Comment fonctionne concrètement la subvention SME Package ?",
        answer:
          "Vous nous payez la totalité de la facture, puis l'État luxembourgeois vous rembourse 70% (jusqu'à 17 500 €) après validation du projet. Concrètement, votre coût final est de 30% du devis.",
      },
      {
        question: "Quel est le délai pour obtenir la subvention ?",
        answer:
          "Compter 6 à 10 semaines entre le premier rendez-vous House of Entrepreneurship et la validation ministère. Nous nous occupons de la partie technique du dossier avec vous.",
      },
      {
        question: "Et si nous ne sommes pas éligibles ?",
        answer:
          "Nous en discutons en audit gratuit. Si le SME Package ne passe pas, nous regardons Fit4Digital, Fit4AI, ou un devis classique adapté à votre budget.",
      },
      {
        question: "Vous êtes basés en Belgique, est-ce un problème ?",
        answer:
          "Non. Le SME Package finance la prestation, pas la nationalité du prestataire. Nos clients luxembourgeois reçoivent leur subvention normalement. Nous nous déplaçons régulièrement à Luxembourg-Ville.",
      },
      {
        question: "Quelles technologies utilisez-vous ?",
        answer:
          "Next.js, React, Vercel, Supabase, Figma, et Claude pour accélérer chaque étape. Le code reste votre propriété.",
      },
      {
        question: "Travaillez-vous en équipe ?",
        answer:
          "Notre équipe est volontairement compacte : pas de couche intermédiaire entre la décision et la livraison. Pour les projets plus larges, nous collaborons avec un réseau de freelances de confiance.",
      },
    ],
  },

  finalCta: {
    heading: "Discutons de votre projet",
    subtext:
      "Audit gratuit de 30 minutes, sans engagement. Nous validons ensemble votre éligibilité et nous cadrons votre projet.",
    cta: {
      label: "Réserver un créneau",
      href: CONTACT.calendlyUrl,
    },
    secondaryLinks: [
      {
        label: "Voir nos projets",
        href: "/work/",
      },
      {
        label: "Nous contacter",
        href: "/contact/",
      },
    ],
  },

  disclaimer:
    "P-XEL Studio n'est pas un consultant agréé Fit4Digital. Les SME Packages Digital et IA ne nécessitent pas d'agrément du prestataire : ils nécessitent une demande validée par la House of Entrepreneurship et le ministère de l'Économie. Sources : guichet.public.lu.",
} as const;

export type LuxembourgLpContent = typeof luxembourgLpContent;
