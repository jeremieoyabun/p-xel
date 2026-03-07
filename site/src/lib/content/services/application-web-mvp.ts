import type { ServicePage } from "./types";

export const applicationWebMvp: ServicePage = {
  slug: "application-web-mvp",
  metaTitle:
    "Developpement Application Web & MVP | P-XEL Studio - Belgique",
  metaDescription:
    "Applications web, MVPs et plateformes sur mesure. De la strategie au deploiement. Studio produit a Liege. 16+ ans d'experience. Reservez un appel.",

  hero: {
    label: "Applications Web & MVPs",
    heading:
      "On construit des produits digitaux qui fonctionnent. Pas des prototypes qui restent dans un tiroir.",
    subheadline:
      "Applications web, plateformes SaaS, outils metier, MVPs. De la strategie produit au deploiement. Un seul studio. Un seul interlocuteur.",
  },

  problem: {
    label: "Le probleme",
    heading: "Pourquoi la plupart des projets d'applications echouent.",
    intro:
      "Vous avez une idee de produit digital. Vous savez ce que vous voulez construire. Mais entre l'idee et le produit fonctionnel, il y a un gouffre.",
    points: [
      "Trop d'interlocuteurs, pas assez de resultats. Quatre prestataires. Quatre agendas. Quatre factures. Et personne ne porte la vision produit.",
      "Des mois de developpement sans rien a montrer. Six mois apres le kickoff, vous avez des specs, des wireframes, des sprints en retard. Mais rien de deployable.",
      "Un MVP qui n'est ni minimum, ni viable. Soit on vous livre un prototype inutilisable. Soit on vous facture le prix d'un produit complet pour un MVP qui ne valide rien.",
    ],
  },

  whatWeBuild: {
    label: "Ce qu'on construit",
    heading: "Applications web. Plateformes. Outils. MVPs.",
    intro:
      "On concoit et developpe des produits digitaux sur mesure. Chaque projet commence par un objectif business clair et se termine par un produit deploye.",
    items: [
      {
        title: "Applications web sur mesure",
        body: "Interfaces complexes, logiques metier specifiques, gestion de donnees. On construit des applications web qui repondent a des besoins que les solutions standard ne couvrent pas.",
      },
      {
        title: "Plateformes SaaS",
        body: "De l'architecture a l'interface, on concoit des plateformes pensees pour scaler. Gestion utilisateurs, abonnements, tableaux de bord, APIs.",
      },
      {
        title: "Outils metier",
        body: "CRM internes, outils de gestion, configurateurs produit, plateformes de commande. Des outils construits autour de vos processus, pas l'inverse.",
      },
      {
        title: "MVPs pour validation marche",
        body: "Un produit fonctionnel, deploye et utilisable en quelques semaines. Suffisamment solide pour valider votre marche. Suffisamment leger pour iterer vite.",
      },
      {
        title: "Plateformes et ecosystemes digitaux",
        body: "Ecosystemes multi-interfaces : web, mobile, integrations tierces. On concoit l'architecture globale et on livre les composants un par un.",
      },
    ],
  },

  approach: {
    label: "Notre approche",
    heading: "De la strategie au deploiement. Sans friction.",
    intro:
      "On ne separe pas le design du developpement. Chaque etape alimente la suivante. Le resultat : un produit coherent, livre plus vite, avec moins de friction.",
    steps: [
      {
        number: "01",
        title: "Strategie produit",
        body: "On definit ensemble le perimetre, les utilisateurs cibles, les fonctionnalites prioritaires et les metriques de succes. Un document de cadrage clair et actionnable.",
      },
      {
        number: "02",
        title: "UX Research & Architecture",
        body: "On structure les parcours utilisateur, l'architecture d'information et les flux de donnees. On identifie les risques techniques avant d'ecrire une ligne de code.",
      },
      {
        number: "03",
        title: "Design UI",
        body: "Maquettes haute fidelite dans Figma. Design system reutilisable. Chaque ecran est concu pour fonctionner, pas juste pour impressionner dans une presentation.",
      },
      {
        number: "04",
        title: "Developpement",
        body: "Front-end et back-end, en parallele quand c'est possible. Livraisons incrementales. Vous voyez le produit avancer chaque semaine.",
      },
      {
        number: "05",
        title: "Deploiement & Lancement",
        body: "Mise en production, configuration serveur, monitoring. Le produit est en ligne, accessible a vos utilisateurs.",
      },
      {
        number: "06",
        title: "Iteration",
        body: "Apres le lancement, on analyse les donnees reelles et on itere. Les meilleures decisions produit viennent des vrais utilisateurs, pas des hypotheses.",
      },
    ],
  },

  deliverables: {
    label: "Ce que vous recevez",
    heading: "Des livrables concrets. Pas des promesses.",
    intro: "",
    items: [
      "Document de cadrage (perimetre, objectifs, planning)",
      "Wireframes & flux utilisateur",
      "Maquettes UI haute fidelite (Figma, desktop et mobile)",
      "Design system (composants, typographie, couleurs, spacing)",
      "Code source (front-end et back-end, versionne, documente)",
      "Application deployee en production",
      "Documentation technique (architecture, APIs, deploiement)",
      "Formation pour votre equipe",
    ],
    note: "Vous etes proprietaire de tout. Code, design, domaine, hebergement. Rien n'est retenu.",
  },

  caseStudies: {
    label: "Projets recents",
    heading: "Ce qu'on a construit pour nos clients.",
    studies: [
      {
        name: "Greenmood",
        tags: ["UX/UI", "Plateforme B2B", "Configurateur produit"],
        body: "Plateforme B2B complete pour le leader international du design acoustique. Catalogue de 200+ produits, configurateurs interactifs, espace revendeur et back-office sur mesure.",
        href: "/work/greenmood/",
      },
      {
        name: "Oyabun",
        tags: ["Web3", "Unity", "Application Telegram"],
        body: "Ecosysteme Web3 complet. Site web, application Telegram avec mecaniques de jeu, integration Unity pour les elements 3D, architecture blockchain.",
        href: "/work/oyabun/",
      },
    ],
  },

  investment: {
    label: "Investissement",
    heading: "Un budget adapte a votre ambition produit.",
    body: "Le cout d'une application web depend de ce qu'elle doit accomplir. Un MVP de validation marche et une plateforme SaaS complete ne demandent pas le meme investissement. On definit le budget avec vous, sur la base d'un perimetre valide : fonctionnalites prioritaires, complexite technique, nombre d'interfaces, integrations tierces.\n\nOn travaille en forfait ou en regie selon la nature du projet. La plupart de nos projets d'applications web demarrent a partir de 8 000 EUR pour un MVP et montent en fonction de la complexite.",
    anchor: "A partir de 8 000 EUR",
    note: "Chaque projet commence par une estimation gratuite et detaillee. Perimetre, planning et budget sont valides ensemble avant de demarrer.",
  },

  faq: {
    label: "Questions frequentes",
    items: [
      {
        question:
          "Comment definissez-vous le perimetre d'un projet ?",
        answer:
          "On commence par un appel de 30 minutes pour comprendre vos objectifs, vos contraintes et vos utilisateurs. Ensuite, on redige un document de cadrage avec le perimetre exact, les fonctionnalites prioritaires, le planning et le budget. Vous validez avant qu'on commence.",
      },
      {
        question: "Quels sont les delais pour un MVP ?",
        answer:
          "Un MVP fonctionnel est generalement livre en 4 a 8 semaines. On privilegie une premiere version deployable rapidement, puis des iterations basees sur les retours utilisateurs.",
      },
      {
        question: "Quelles technologies utilisez-vous ?",
        answer:
          "On choisit la stack en fonction du projet. Front-end : React, Next.js, Vue.js. Back-end : Node.js, Python. Bases de donnees : PostgreSQL, MongoDB. Deploiement : Vercel, AWS, DigitalOcean.",
      },
      {
        question:
          "Est-ce que je suis proprietaire du code et du produit ?",
        answer:
          "Oui. A 100%. Le code source, les fichiers de design, le domaine, l'hebergement. Tout vous appartient. On ne retient rien.",
      },
      {
        question:
          "Proposez-vous de la maintenance apres le lancement ?",
        answer:
          "Oui. On propose des contrats de maintenance mensuels pour les mises a jour, les corrections, le monitoring et les evolutions fonctionnelles. Le contrat est flexible.",
      },
      {
        question:
          "Comment se deroule la collaboration au quotidien ?",
        answer:
          "On travaille avec des livraisons incrementales sur des cycles d'une a deux semaines. Vous avez acces a un espace de suivi en temps reel. Des demos regulieres du produit en cours.",
      },
    ],
  },

  cta: {
    heading: "Vous avez un produit a construire.",
    subtext:
      "Parlez-nous de votre projet. On vous envoie une estimation gratuite en 48h.",
  },
};
