import type { CaseStudy } from "./types";

export const chairsplit: CaseStudy = {
  slug: "chairsplit",
  title: "ChairSplit",
  metaTitle: "ChairSplit - Plateforme SaaS de Gestion",
  metaDescription:
    "Conception et développement d'une plateforme SaaS de gestion pour barbershops. Multi-tenant, PWA, Stripe, role-based. Étude de cas P-XEL Studio.",
  tags: ["SaaS", "Plateforme Métier", "PWA", "Multi-Tenant"],
  tagline:
    "Plateforme SaaS de gestion complète pour barbershops. Revenus, commissions, équipes, clients, dépenses, fiches de paie.",
  keyResult: "Produit SaaS complet en production",
  period: "2025",
  heroImage: "/images/case-studies/chairsplit-hero.webp",
  beats: {
    context: {
      label: "Contexte",
      heading: "Un métier qui tourne encore sur papier et tableurs.",
      body: "La gestion d'un barbershop multi-barbers est un casse-tête opérationnel. Les propriétaires jonglent entre feuilles Excel, notes papier et calculs manuels pour suivre les revenus par coiffeur, calculer les commissions, gérer les dépenses et produire les fiches de paie. Chaque erreur de calcul crée de la friction avec l'équipe. Les outils génériques (comptabilité, CRM, planning) existent mais aucun ne couvre le workflow spécifique d'un salon avec plusieurs barbers indépendants qui partagent l'espace et les revenus. ChairSplit devait être l'outil qui manquait.",
    },
    challenge: {
      label: "Problème",
      heading: "Construire un produit métier complet, pas une feature isolée.",
      body: "Le défi n'était pas de créer une app de prise de rendez-vous. C'était de construire un système de gestion complet qui couvre l'ensemble du workflow d'un salon multi-barbers : enregistrement des visites, calcul automatique des commissions selon des règles configurables par barber, suivi des dépenses, génération de fiches de paie, gestion client, et reporting. Le tout accessible sur mobile, utilisable entre deux coupes, avec des niveaux d'accès différents pour le propriétaire, le manager et le barber. Un vrai produit métier, pas un prototype.",
    },
    thinking: {
      label: "Réflexion",
      heading: "Un système de rôles, pas une interface unique.",
      body: "On a commencé par cartographier les utilisateurs. Trois rôles, trois besoins différents. Le propriétaire veut la vue d'ensemble : revenus totaux, commissions versées, rentabilité par barber, dépenses du salon. Le manager veut gérer les opérations : enregistrer les visites, suivre la caisse, générer les fiches de paie. Le barber veut voir ses propres chiffres : ses visites, ses revenus, sa commission. Chaque rôle voit la même donnée sous un angle différent. L'architecture de l'application a été conçue autour de ce système de permissions, pas comme une surcouche ajoutée après coup.",
    },
    approach: {
      label: "Approche",
      heading: "Mobile-first. Utilisable entre deux clients.",
      body: "L'interface a été conçue comme une PWA mobile-first. Un barber entre un client dans le système en quelques taps entre deux coupes. Pas de formulaire complexe. Pas de navigation profonde. Les actions les plus fréquentes (enregistrer une visite, consulter ses revenus du jour) sont accessibles en un tap depuis l'écran principal.\n\nLe système de commissions est le coeur technique du produit. Chaque barber a son propre taux de commission, configurable par le propriétaire. Les commissions sont calculées automatiquement à chaque visite enregistrée. Les fiches de paie sont générées automatiquement à partir des données de commissions et de visites sur la période sélectionnée.\n\nLe module de dépenses permet de tracker les coûts du salon (loyer, produits, équipement) et de les intégrer dans le calcul de rentabilité globale. Le CRM client enregistre l'historique des visites, les préférences et les notes par client.\n\nL'architecture multi-tenant permet à chaque salon d'avoir son propre espace isolé avec ses données, ses barbers et sa configuration. Le modèle de monétisation passe par Stripe avec des abonnements mensuels et un essai gratuit de 14 jours.",
    },
    execution: {
      label: "Exécution",
      heading: "Full-stack. Conception, code et déploiement.",
      body: "L'application a été construite en Next.js avec Supabase pour la base de données et l'authentification. Le système de rôles (Owner, Manager, Barber) gère les permissions à chaque niveau. L'intégration Google Calendar synchronise les rendez-vous. Stripe gère les abonnements avec facturation automatique. L'application est déployée comme PWA, installable sur mobile sans passer par un app store. L'ensemble a été conçu, designé, développé et déployé par P-XEL.",
    },
    result: {
      label: "Impact",
      heading: "Un produit SaaS complet. En production.",
      body: "ChairSplit est un produit SaaS fonctionnel, pas un MVP inachevé. Gestion des visites, calcul des commissions, fiches de paie, CRM client, suivi des dépenses, reporting. Le tout dans une interface mobile-first utilisable au quotidien par des barbers qui n'ont pas le temps de naviguer dans un logiciel complexe. Le produit est en production avec un modèle de monétisation actif.",
    },
  },
  deliverables: [
    "Product design complet (UX research, user flows, UI design)",
    "Application web Next.js (PWA) en production",
    "Architecture multi-tenant avec système de rôles",
    "Module de commissions et calcul automatique",
    "Génération de fiches de paie",
    "CRM client avec historique de visites",
    "Module de suivi des dépenses",
    "Intégration Stripe (abonnements + essai gratuit)",
    "Intégration Google Calendar",
    "Déploiement et mise en production",
  ],
  stack: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "PWA", "Google Calendar API"],
  cta: {
    heading: "Un produit SaaS à concevoir et livrer ?",
    body: "On conçoit des applications web et SaaS de l'idée au déploiement. Architecture, design, code, mise en production.",
    serviceLink: { label: "applications web et SaaS", href: "/services/application-web-mvp/" },
  },
  navigation: {
    next: { slug: "greenmood", title: "Greenmood" },
  },
  internalLinks: [
    { label: "Applications web et MVP", href: "/services/application-web-mvp/" },
  ],
};
