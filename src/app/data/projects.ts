export interface ProjectImage {
  url: string;
  caption: string;
  isArchitecture?: boolean;
}

export interface Project {
  id?: string;
  title: string;
  thumbnail: string;
  company: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  stack: string[];
  challenge: string;
  impact: string;
  architecture: string;
  solution: string[];
  images: ProjectImage[];
  technicalDeepDive?: {
    database?: string;
    realtime?: string;
    security?: string;
    backend?: string;
    devops?: string;
    infrastructure?: string;
    optimization?: string;
    nativeBridges?: string;
    ux?: string;
  };
  releaseStrategy?: {
    status?: string;
    testing?: string;
    storeCompliance?: string;
  };
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "lyjob-inclusive-board",
    title: "Lyjob - Inclusive Job Board",
    thumbnail: "/project/lyjob/thumb.webp",
    company: "Freelance",
    year: "2025",
    shortDescription: "Inclusive recruitment cross-platform app featuring real-time workflows and multi-role RBAC.",
    fullDescription: "Lyjob is a cross-platform professional networking app designed for French/Belgium associations. It features a complete ecosystem for job seekers and recruiters, currently in the final UAT (User Acceptance Testing) phase for Apple Store and Play Store release.",
    stack: ["Kotlin Multiplatform", "Supabase", "PostgreSQL", "Ktor", "FCM", "Brevo"],
    challenge: "Architecting a multi-role system where recruiters must undergo admin validation before accessing posting privileges, while maintaining a seamless 'Guest' experience.",
    impact: "Digitalized the inclusive hiring process for different associations. Achieved ~85% business logic sharing while integrating complex third-party services like FCM and Brevo SMTP.",
    architecture: "MVVM Architecture leveraging KMP shared modules for the domain logic. Reactive UI with Compose Multiplatform and a real-time backend synchronization using Supabase Realtime & Edge Functions for instant status updates and notifications.",
    solution: [
      "Multi-role RBAC system (admin, recruiter, candidate, guest)",
      "Real-time recruiter validation workflow with instant UI updates",
      "Cross-platform Push Notifications using FCM & KMP libraries",
      "Secure Password Recovery with Supabase Auth & Brevo SMTP integration",
      "Guest-mode job application flow with non-personalized fallback"
    ],
    images: [
      { 
        url: "/project/lyjob/ios-android-interface.webp", 
        caption: "Unified Cross-Platform UI: iOS and Android sharing 100% of UI logic via Compose Multiplatform for consistent user experience." 
      },
      { 
        url: "/project/lyjob/diagram-archi.webp", 
        caption: "Architectural Blueprint: MVVM structure featuring KMP module isolation, reactive state management, and native bridges for platform-specific services.", 
        isArchitecture: true 
      },
      { 
        url: "/project/lyjob/supabase.webp", 
        caption: "Relational Data Modeling: PostgreSQL schema optimized for multi-role RBAC (admin/recruiter/candidate) with granular Row Level Security (RLS) policies." 
      },
      { 
        url: "/project/lyjob/mail-recovery.webp", 
        caption: "Identity & Communication Flow: End-to-end authentication system integrating secure transactional emails and automated password recovery workflows." 
      }
    ],
    technicalDeepDive: {
      database: "PostgreSQL schema optimized for Role-Based Access Control. Integrated Row Level Security (RLS) to ensure recruiters can only manage their own listings, while Admins retain global CRUD permissions over users.",
      realtime: "Leveraged Supabase Realtime to push instant notifications for recruiter validation. Used FCM for background push notifications with a unified KMP interface for iOS/Android handles.",
      security: "Built a robust authentication flow including secure password recovery via recovery tokens and transactional emails configured through Brevo SMTP.",
      ux: "Implemented a hybrid onboarding: registered users get personalized recommendations based on location and interests, while a Guest mode allows applications through a simplified form."
    }
  },
  {
    id: "medical-platform",
    title: "Healthcare Secretary Hub",
    thumbnail: "/project/ocs/thumb-ocs.webp",
    company: "Freelance",
    year: "2025 - Present",
    shortDescription: "Secure SaaS platform replacing legacy systems for high-volume medical SMS & Email management.",
    fullDescription: "Developed a custom communication dashboard for a medical clinic to replace an unstable legacy tool. The platform handles real-time patient messaging, appointment follow-ups, and features a centralized email interface, significantly reducing administrative overhead.",
    stack: ["Next.js", "Supabase", "Zustand", "PostgreSQL", "Webhooks", "VPS"],
    challenge: "Migrating from a crashing legacy system to a modern architecture while ensuring real-time delivery tracking and strict data privacy for medical follow-ups.",
    impact: "Reduced phone call volume by 30% through automated follow-ups. Improved team accountability with multi-user audit logs for every message sent.",
    architecture: "Modern Serverless architecture using Next.js deployed on Vercel. Leveraging Supabase for real-time data persistence and RLS for data isolation. Integrated a custom open-source webmail solution on a dedicated Hetzner VPS.",
    solution: [
      "Professional SMS API integration with real-time Webhook tracking",
      "Dynamic SMS templates with character-limit optimization to control costs",
      "Multi-secretary authentication with granular audit logs (who sent what & when)",
      "Deployment of RoundCube on Hetzner VPS for a centralized mail hub",
      "Secure environment variable management and unit testing"
    ],
    images: [
      {
        url: "/project/ocs/ocs-dashboard.webp",
        caption: "Unified Clinical Dashboard: Real-time patient messaging interface with persistent conversation history and secure staff authentication."
      }, 
      {
        url: "/project/ocs/db-diagram.webp",
        caption: "Relational Message Schema: Custom persistence layer designed to track conversation states, message delivery status, and reusable SMS templates."
      },
      { 
        url: "/project/ocs/archi-ocs.webp", 
        caption: "High-level overview illustrating secure message orchestration, webhook-driven status updates, and real-time UI synchronization.",
        isArchitecture: true 
      }
    ],
    technicalDeepDive: {
      realtime: "Implemented Webhooks to capture SMS statuses (Sent, Received, Read) instantly, updating the UI via Zustand and Supabase subscriptions for a zero-refresh experience.",
      database: "PostgreSQL schema with Row Level Security (RLS) to ensure that only authenticated medical staff can access patient logs. Used complex queries to generate daily performance reports for the clinic manager.",
      optimization: "Built an intelligent SMS composer that calculates character segments in real-time, preventing the clinic from being billed for multiple messages on long templates.",
      infrastructure: "Configured and secured a Hetzner VPS to host a maintained open-source mail interface (RoundCube), ensuring data sovereignty and zero extra subscription costs for the client."
    }
  },
  {
    id: "solidarity-aid-platform",
    title: "Solidarity App",
    thumbnail: "/project/solidarity-app/thumb.webp",
    company: "Personal Project",
    year: "2026",
    shortDescription: "Containerized fullstack social platform orchestrated with local Kubernetes (Minikube) and automated via GitHub Actions.",
    fullDescription: "Solidarity App is a fullstack web application designed to help vulnerable populations locate social aid resources. While delivering a clean, mobile-first functional MVP, this project primarily serves as a DevOps laboratory. It demonstrates a complete pipeline from multi-stage containerization to local Kubernetes orchestration, configuration handling via native K8s Secrets, and automated CI integration, with a structured roadmap for cloud-native AWS deployment.",
    stack: [
      "Spring Boot 3",
      "Java 17",
      "PostgreSQL",
      "React",
      "Docker",
      "Kubernetes",
      "Minikube",
      "GitHub Actions",
      "AWS",
      "Terraform",
      "Ansible"
    ],
    challenge: "Evolving a standard multi-container Docker Compose application into a locally orchestrated Kubernetes cluster, implementing secure environment injection, and designing an enterprise-grade CI/CD and cloud migration path.",
    impact: "Delivered a fully operational MVP backed by a reproducible engineering workflow: automated quality gates on every push and declarative local K8s orchestration.",
    architecture: "Decoupled cloud-ready architecture. The Java backend and React frontend are completely isolated and communicate over REST/JSON. In development, the lifecycle is managed via Docker Compose. For the staging baseline, manifests deploy the components into a local Kubernetes (Minikube) cluster featuring specialized Pods, Services, and native configuration secrets.",
    solution: [
      "Public directory of social aid resources with multi-criteria filtering (city, category tags)",
      "Authenticated CRUD operations for associations and resource maintenance",
      "Multi-stage Docker optimization separating build environments from lightweight runtimes",
      "Local Kubernetes orchestration (Minikube) leveraging declarative Deployments and Services",
      "Decoupled configuration management via Kubernetes Secrets",
      "Automated CI pipeline with GitHub Actions executing backend unit tests on every push",
      "Planned IaC roadmap: Terraform provisioned AWS EKS/RDS infrastructure with Ansible configuration"
    ],
    images: [
      {
        url: "/project/solidarity-app/solidarity-app-diagram.webp",
        caption: "System Architecture: Local Kubernetes orchestration baseline (Minikube) and automated GitHub Actions CI pipeline with an explicit cloud-native AWS migration path.",
        isArchitecture: true
      },
      {
        url: "/project/solidarity-app/main-interface.webp",
        caption: "Authenticated Management: Mobile-first responsive dashboard allowing verified users to update active social resources."
      },
      {
        url: "/project/solidarity-app/solidarity-db.webp",
        caption: "Relational Schema: PostgreSQL data model optimized for tag-based queries and local persistent tracking."
      },
      {
        url: "/project/solidarity-app/solidarity-api-request.webp",
        caption: "Functional API Validation: testing the decoupled REST API with Postman, showcasing the standardized JSON response schema for the public associations directory (200 OK)."
      }
    ],
    technicalDeepDive: {
      backend: "REST API built with Spring Boot 3 using the Controller-Service-Repository pattern. Features decoupled DTO contracts and interactive OpenAPI/Swagger documentation for rapid frontend consumption.",
      database: "PostgreSQL relational instance initialized via automated seed SQL scripts, prepared for abstraction to cloud-managed databases.",
      security: "Current access validation occurs at the client level. Backend roadmap includes implementing a stateless JWT layer using Spring Security for role-based endpoint protection (RBAC).",
      infrastructure: "Engineered multi-container environments via Docker Compose for immediate local execution. Extended infrastructure complexity by writing declarative manifests for localized Kubernetes deployment.",
      devops: "Configured a GitHub Actions workflow acting as an automated quality gate running JUnit/Mockito tests. Implemented Kubernetes Secrets for decoupling database credentials from core application logic.",
      ux: "TailwindCSS layout built with a strict mobile-first constraint to accommodate emergency access conditions on low-end networks or devices."
    },
    releaseStrategy: {
      status: "MVP Deployed Locally - active DevOps pipeline expansion",
      testing: "Core business logic protected via backend unit test suites embedded inside the continuous integration pipeline to prevent functional regression.",
      storeCompliance: "Cloud infrastructure strategy - upcoming transition to Terraform for Infrastructure as Code, Ansible for node configuration, and deployment onto AWS."
    },
    githubUrl: "https://github.com/megumihfu/solidarity-app"
  },
  {
    id: "ai-job-search-agent",
    title: "AI-Powered Job Search Agent",
    thumbnail: "/project/job-search-agent/thumb.webp",
    company: "Personal Project",
    year: "2026",
    shortDescription: "Automated job hunting agent using LLMs to filter DevOps and Backend roles across EU markets.",
    fullDescription: "An intelligent automation tool designed to bridge the gap between massive job boards and specific career criteria. It scrapes, analyzes, and filters job offers in France and Germany using GPT-4o-mini, delivering a ready-to-use professional lead sheet.",
    stack: ["Python 3", "OpenAI / GPT-4o-mini", "GitHub Actions", "Openpyxl", "Pandas", "Pytest"],
    challenge: "Reducing the high cost (tokens used) of multi-agent orchestration (CrewAI) while maintaining high-precision filtering for complex technical requirements.",
    impact: "Achieved a 60% reduction in token consumption and faster execution by refactoring from a multi-agent system to a streamlined custom Python pipeline.",
    architecture: "Modular 'tool-based' architecture. Uses a sequential pipeline: data acquisition (LinkedIn API) -> Semantic analysis (LLM Screening) -> Formatted export (Excel with conditional formatting).",
    solution: [
      "Custom Python automation loop replacing heavy agentic frameworks",
      "Multi-market scraping logic for France and Germany",
      "AI-driven screening for experience, salary, and tech-stack matching",
      "Automated CI/CD pipeline with GitHub Actions",
      "Advanced Excel generation with status dropdowns and dynamic styling"
    ],
    images: [
      {
        url: "/project/job-search-agent/diagram-job-agent.webp",
        caption: "Optimization flow: transition from expensive CrewAI orchestration to a streamlined, cost-effective Python-native pipeline.",
        isArchitecture: true
      },
      {
        url: "/project/job-search-agent/agent-logs.webp",
        caption: "Automated lead generation: styled Excel report with AI-calculated valid jobs and interactive status menus."
      },
      {
        url: "/project/job-search-agent/excel-file.webp",
        caption: "Real-time execution logs showing the LLM-driven filtering process: The system intelligently rejects roles based on specific criteria."
      },
      {
        url: "/project/job-search-agent/pipelines.webp",
        caption: "Industrial quality standards: CI/CD workflow executing automated unit tests on every push to ensure agent reliability."
      }
    ],
    technicalDeepDive: {
      optimization: "Refactored the core logic from CrewAI to a custom loop. By engineering a single, dense system prompt for the LLM instead of multiple agent interactions, I drastically cut down on API tokens while implementing robust data cleaning to handle inconsistent job board schemas (N/A values, empty descriptions).",
      devops: "Implemented a full CI/CD lifecycle using GitHub Actions. The agent is protected by a suite of Pytest unit tests that mock API responses to ensure the filtering logic remains robust as job board structures change.",
      infrastructure: "Architecture follows the 'tool pattern', decoupling the data source (LinkedIn) from the brain (GPT-4o) and the output (Excel). This allows for swapping the LLM or adding new job boards without rewriting the core agent.",
      backend: "Advanced error handling and rate-limiting management to handle API constraints while maintaining a high throughput of job offer analysis."
    },
    githubUrl: "https://github.com/megumihfu/job-search-agent"
  }
];