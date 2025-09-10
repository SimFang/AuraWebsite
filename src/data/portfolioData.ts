export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  url?: string;
  github?: string;
  completedDate: string;
  client: string;
  features: string[];
}

export const portfolioProjects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Plateforme E-commerce Moderne",
    description: "Une solution e-commerce complète avec gestion avancée des produits et expérience de commande fluide.",
    longDescription: "Développement d'une plateforme e-commerce complète avec filtrage avancé des produits, gestion d'inventaire en temps réel, traitement sécurisé des paiements et tableau de bord administrateur intuitif. La plateforme gère un trafic élevé et offre une excellente expérience utilisateur sur tous les appareils.",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "E-commerce",
    url: "https://example-ecommerce.com",
    github: "https://github.com/example/ecommerce",
    completedDate: "2024-01-15",
    client: "TechStore Inc.",
    features: [
      "Recherche et filtrage avancés des produits",
      "Gestion d'inventaire en temps réel",
      "Traitement sécurisé des paiements avec Stripe",
      "Design responsive pour tous les appareils",
      "Tableau de bord administrateur avec analytics",
      "Support multi-langues"
    ]
  },
  {
    id: "healthcare-dashboard",
    title: "Tableau de Bord Analytique Médical",
    description: "Un tableau de bord complet pour les professionnels de santé pour suivre les données patients et insights médicaux.",
    longDescription: "Développement d'une plateforme d'analyse médicale sophistiquée permettant aux professionnels de santé de visualiser les données patients, suivre les résultats de traitement et générer des rapports complets. Le système assure la conformité HIPAA tout en fournissant des outils de visualisation de données intuitifs.",
    image: "/lovable-uploads/4521cbc6-e2bf-48a3-b9aa-e0cba7be060e.png",
    technologies: ["React", "D3.js", "Python", "FastAPI", "MongoDB", "Chart.js"],
    category: "Santé",
    url: "https://healthcare-dashboard.com",
    completedDate: "2023-11-20",
    client: "MedTech Solutions",
    features: [
      "Visualisation des données patients en temps réel",
      "Gestion des données conforme HIPAA",
      "Graphiques et diagrammes interactifs",
      "Génération automatisée de rapports",
      "Contrôle d'accès basé sur les rôles",
      "Interface responsive mobile"
    ]
  },
  {
    id: "fintech-app",
    title: "Application de Gestion Financière Personnelle",
    description: "Une application fintech moderne pour le suivi budgétaire personnel et la gestion d'objectifs financiers.",
    longDescription: "Création d'une application de finance personnelle complète qui aide les utilisateurs à suivre leurs dépenses, définir des objectifs financiers et obtenir des insights sur leurs habitudes de dépense. L'application offre une sécurité de niveau bancaire, une catégorisation automatique des transactions et des recommandations financières intelligentes.",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    technologies: ["React Native", "TypeScript", "Firebase", "Plaid API", "Redux", "Expo"],
    category: "Fintech",
    url: "https://financeapp.com",
    github: "https://github.com/example/finance-app",
    completedDate: "2024-02-28",
    client: "FinanceFlow LLC",
    features: [
      "Intégration de comptes bancaires via Plaid",
      "Catégorisation automatique des transactions",
      "Suivi budgétaire et alertes",
      "Définition d'objectifs financiers",
      "Analytics et insights des dépenses",
      "Application mobile cross-platform"
    ]
  },
  {
    id: "restaurant-pos",
    title: "Système de Caisse Restaurant",
    description: "Un système de point de vente complet conçu spécifiquement pour les restaurants et entreprises de restauration.",
    longDescription: "Développement d'un système de caisse complet adapté aux restaurants, avec gestion des tables, suivi des commandes, contrôle d'inventaire et gestion du personnel. Le système s'intègre avec les écrans de cuisine et processeurs de paiement pour optimiser les opérations du restaurant.",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    technologies: ["Vue.js", "Node.js", "Express", "MySQL", "Socket.io", "Square API"],
    category: "Restaurant",
    url: "https://restaurant-pos.com",
    completedDate: "2023-09-10",
    client: "Bistro Management Group",
    features: [
      "Gestion des tables et réservations",
      "Suivi des commandes en temps réel",
      "Gestion d'inventaire",
      "Planification du personnel et paie",
      "Intégration écran de cuisine",
      "Traitement des paiements avec Square"
    ]
  },
  {
    id: "education-platform",
    title: "Plateforme d'Apprentissage en Ligne",
    description: "Une plateforme e-learning interactive avec cours vidéo, quiz et suivi de progression.",
    longDescription: "Développement d'un système de gestion d'apprentissage en ligne complet qui supporte les cours vidéo, quiz interactifs, suivi de progression des étudiants et outils pour instructeurs. La plateforme peut gérer des milliers d'utilisateurs simultanés tout en maintenant d'excellentes performances.",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
    category: "Éducation",
    url: "https://learnplatform.com",
    github: "https://github.com/example/learning-platform",
    completedDate: "2024-03-15",
    client: "EduTech Academy",
    features: [
      "Streaming de cours vidéo",
      "Quiz et évaluations interactifs",
      "Suivi de progression des étudiants",
      "Tableau de bord instructeur",
      "Génération de certificats",
      "Intégration de paiement pour les cours"
    ]
  },
  {
    id: "real-estate-crm",
    title: "Plateforme CRM Immobilier",
    description: "Un système de gestion de relation client spécialement conçu pour les professionnels de l'immobilier.",
    longDescription: "Développement d'une plateforme CRM spécialisée pour agents et courtiers immobiliers avec gestion de prospects, annonces de propriétés, outils de communication client et campagnes marketing automatisées. Le système s'intègre avec les données MLS et fournit des analytics complets.",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    technologies: ["React", "TypeScript", "Django", "PostgreSQL", "Redis", "Celery"],
    category: "Immobilier",
    url: "https://realestatecrm.com",
    completedDate: "2023-12-05",
    client: "Premier Realty Group",
    features: [
      "Gestion et suivi des prospects",
      "Gestion des annonces immobilières",
      "Outils de communication client",
      "Campagnes email automatisées",
      "Intégration MLS",
      "Analytics et rapports de vente"
    ]
  }
];

export const projectCategories = [
  "Tous",
  "E-commerce",
  "Santé",
  "Fintech",
  "Restaurant",
  "Éducation",
  "Immobilier"
];