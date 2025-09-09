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
    title: "Modern E-commerce Platform",
    description: "A full-featured e-commerce solution with advanced product management and seamless checkout experience.",
    longDescription: "Built a comprehensive e-commerce platform from scratch featuring advanced product filtering, real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles high traffic volumes and provides excellent user experience across all devices.",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "E-commerce",
    url: "https://example-ecommerce.com",
    github: "https://github.com/example/ecommerce",
    completedDate: "2024-01-15",
    client: "TechStore Inc.",
    features: [
      "Advanced product search and filtering",
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Responsive design for all devices",
      "Admin dashboard with analytics",
      "Multi-language support"
    ]
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Analytics Dashboard",
    description: "A comprehensive dashboard for healthcare professionals to track patient data and medical insights.",
    longDescription: "Developed a sophisticated healthcare analytics platform that enables medical professionals to visualize patient data, track treatment outcomes, and generate comprehensive reports. The system ensures HIPAA compliance while providing intuitive data visualization tools.",
    image: "/lovable-uploads/4521cbc6-e2bf-48a3-b9aa-e0cba7be060e.png",
    technologies: ["React", "D3.js", "Python", "FastAPI", "MongoDB", "Chart.js"],
    category: "Healthcare",
    url: "https://healthcare-dashboard.com",
    completedDate: "2023-11-20",
    client: "MedTech Solutions",
    features: [
      "Real-time patient data visualization",
      "HIPAA compliant data handling",
      "Interactive charts and graphs",
      "Automated report generation",
      "Role-based access control",
      "Mobile-responsive interface"
    ]
  },
  {
    id: "fintech-app",
    title: "Personal Finance Management App",
    description: "A modern fintech application for personal budget tracking and financial goal management.",
    longDescription: "Created a comprehensive personal finance application that helps users track expenses, set financial goals, and gain insights into their spending patterns. The app features bank-level security, real-time transaction categorization, and intelligent financial recommendations.",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    technologies: ["React Native", "TypeScript", "Firebase", "Plaid API", "Redux", "Expo"],
    category: "Fintech",
    url: "https://financeapp.com",
    github: "https://github.com/example/finance-app",
    completedDate: "2024-02-28",
    client: "FinanceFlow LLC",
    features: [
      "Bank account integration via Plaid",
      "Automatic transaction categorization",
      "Budget tracking and alerts",
      "Financial goal setting",
      "Expense analytics and insights",
      "Cross-platform mobile app"
    ]
  },
  {
    id: "restaurant-pos",
    title: "Restaurant POS System",
    description: "A complete point-of-sale system designed specifically for restaurants and food service businesses.",
    longDescription: "Developed a comprehensive POS system tailored for restaurants, featuring table management, order tracking, inventory control, and staff management. The system integrates with kitchen displays and payment processors to streamline restaurant operations.",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    technologies: ["Vue.js", "Node.js", "Express", "MySQL", "Socket.io", "Square API"],
    category: "Restaurant",
    url: "https://restaurant-pos.com",
    completedDate: "2023-09-10",
    client: "Bistro Management Group",
    features: [
      "Table management and reservations",
      "Real-time order tracking",
      "Inventory management",
      "Staff scheduling and payroll",
      "Kitchen display integration",
      "Payment processing with Square"
    ]
  },
  {
    id: "education-platform",
    title: "Online Learning Platform",
    description: "An interactive e-learning platform with video courses, quizzes, and progress tracking.",
    longDescription: "Built a comprehensive online learning management system that supports video courses, interactive quizzes, student progress tracking, and instructor tools. The platform scales to support thousands of concurrent users while maintaining excellent performance.",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
    category: "Education",
    url: "https://learnplatform.com",
    github: "https://github.com/example/learning-platform",
    completedDate: "2024-03-15",
    client: "EduTech Academy",
    features: [
      "Video course streaming",
      "Interactive quizzes and assessments",
      "Student progress tracking",
      "Instructor dashboard",
      "Certificate generation",
      "Payment integration for courses"
    ]
  },
  {
    id: "real-estate-crm",
    title: "Real Estate CRM Platform",
    description: "A customer relationship management system specifically designed for real estate professionals.",
    longDescription: "Developed a specialized CRM platform for real estate agents and brokers, featuring lead management, property listings, client communication tools, and automated marketing campaigns. The system integrates with MLS data and provides comprehensive analytics.",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    technologies: ["React", "TypeScript", "Django", "PostgreSQL", "Redis", "Celery"],
    category: "Real Estate",
    url: "https://realestatecrm.com",
    completedDate: "2023-12-05",
    client: "Premier Realty Group",
    features: [
      "Lead management and tracking",
      "Property listing management",
      "Client communication tools",
      "Automated email campaigns",
      "MLS integration",
      "Sales analytics and reporting"
    ]
  }
];

export const projectCategories = [
  "All",
  "E-commerce",
  "Healthcare",
  "Fintech",
  "Restaurant",
  "Education",
  "Real Estate"
];