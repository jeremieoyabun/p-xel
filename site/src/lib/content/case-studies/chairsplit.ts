import type { CaseStudy } from "./types";

export const chairsplit: CaseStudy = {
  slug: "chairsplit",
  title: "ChairSplit",
  metaTitle: "ChairSplit - Plateforme SaaS de Gestion",
  metaDescription:
    "Conception et developpement d'une plateforme SaaS de gestion pour barbershops. Multi-tenant, PWA, Stripe, role-based. Etude de cas P-XEL Studio.",
  tags: ["SaaS", "Plateforme Metier", "PWA", "Multi-Tenant"],
  tagline:
    "Plateforme SaaS de gestion complete pour barbershops. Revenus, commissions, equipes, clients, depenses, fiches de paie.",
  keyResult: "Produit SaaS complet en production",
  period: "2025",
  heroImage: "/images/case-studies/chairsplit-hero.webp",
  beats: {
    context: {
      label: "Contexte",
      heading: "Un metier qui tourne encore sur papier et tableurs.",
      body: "La gestion d'un barbershop multi-barbers est un casse-tete operationnel. Les proprietaires jonglent entre feuilles Excel, notes papier et calculs manuels pour suivre les revenus par coiffeur, calculer les commissions, gerer les depenses et produire les fiches de paie. Chaque erreur de calcul cree de la friction avec l'equipe. Les outils generiques (comptabilite, CRM, planning) existent mais aucun ne couvre le workflow specifique d'un salon avec plusieurs barbers independants qui partagent l'espace et les revenus. ChairSplit devait etre l'outil qui manquait.",
    },
    challenge: {
      label: "Probleme",
      heading: "Construire un produit metier complet, pas une feature isolee.",
      body: "Le defi n'etait pas de creer une app de prise de rendez-vous. C'etait de construire un systeme de gestion complet qui couvre l'ensemble du workflow d'un salon multi-barbers : enregistrement des visites, calcul automatique des commissions selon des regles configurables par barber, suivi des depenses, generation de fiches de paie, gestion client, et reporting. Le tout accessible sur mobile, utilisable entre deux coupes, avec des niveaux d'acces differents pour le proprietaire, le manager et le barber. Un vrai produit metier, pas un prototype.",
    },
    thinking: {
      label: "Reflexion",
      heading: "Un systeme de roles, pas une interface unique.",
      body: "On a commence par cartographier les utilisateurs. Trois roles, trois besoins differents. Le proprietaire veut la vue d'ensemble : revenus totaux, commissions versees, rentabilite par barber, depenses du salon. Le manager veut gerer les operations : enregistrer les visites, suivre la caisse, generer les fiches de paie. Le barber veut voir ses propres chiffres : ses visites, ses revenus, sa commission. Chaque role voit la meme donnee sous un angle different. L'architecture de l'application a ete concue autour de ce systeme de permissions, pas comme une surcouche ajoutee apres coup.",
    },
    approach: {
      label: "Approche",
      heading: "Mobile-first. Utilisable entre deux clients.",
      body: "L'interface a ete concue comme une PWA mobile-first. Un barber entre un client dans le systeme en quelques taps entre deux coupes. Pas de formulaire complexe. Pas de navigation profonde. Les actions les plus frequentes (enregistrer une visite, consulter ses revenus du jour) sont accessibles en un tap depuis l'ecran principal.\n\nLe systeme de commissions est le coeur technique du produit. Chaque barber a son propre taux de commission, configurable par le proprietaire. Les commissions sont calculees automatiquement a chaque visite enregistree. Les fiches de paie sont generees automatiquement a partir des donnees de commissions et de visites sur la periode selectionnee.\n\nLe module de depenses permet de tracker les couts du salon (loyer, produits, equipement) et de les integrer dans le calcul de rentabilite globale. Le CRM client enregistre l'historique des visites, les preferences et les notes par client.\n\nL'architecture multi-tenant permet a chaque salon d'avoir son propre espace isole avec ses donnees, ses barbers et sa configuration. Le modele de monetisation passe par Stripe avec des abonnements mensuels et un essai gratuit de 14 jours.",
    },
    execution: {
      label: "Execution",
      heading: "Full-stack. Conception, code et deploiement.",
      body: "L'application a ete construite en Next.js avec Supabase pour la base de donnees et l'authentification. Le systeme de roles (Owner, Manager, Barber) gere les permissions a chaque niveau. L'integration Google Calendar synchronise les rendez-vous. Stripe gere les abonnements avec facturation automatique. L'application est deployee comme PWA, installable sur mobile sans passer par un app store. L'ensemble a ete concu, designe, developpe et deploye par P-XEL.",
    },
    result: {
      label: "Impact",
      heading: "Un produit SaaS complet. En production.",
      body: "ChairSplit est un produit SaaS fonctionnel, pas un MVP inacheve. Gestion des visites, calcul des commissions, fiches de paie, CRM client, suivi des depenses, reporting. Le tout dans une interface mobile-first utilisable au quotidien par des barbers qui n'ont pas le temps de naviguer dans un logiciel complexe. Le produit est en production avec un modele de monetisation actif.",
    },
  },
  deliverables: [
    "Product design complet (UX research, user flows, UI design)",
    "Application web Next.js (PWA) en production",
    "Architecture multi-tenant avec systeme de roles",
    "Module de commissions et calcul automatique",
    "Generation de fiches de paie",
    "CRM client avec historique de visites",
    "Module de suivi des depenses",
    "Integration Stripe (abonnements + essai gratuit)",
    "Integration Google Calendar",
    "Deploiement et mise en production",
  ],
  stack: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "PWA", "Google Calendar API"],
  cta: {
    heading: "Un produit SaaS a concevoir et livrer ?",
    body: "On concoit des applications web et SaaS de l'idee au deploiement. Architecture, design, code, mise en production.",
    serviceLink: { label: "applications web et SaaS", href: "/services/application-web-mvp/" },
  },
  navigation: {
    next: { slug: "greenmood", title: "Greenmood" },
  },
  internalLinks: [
    { label: "Applications web et MVP", href: "/services/application-web-mvp/" },
  ],
};
