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
    id: "red-cross-staff-map",
    title: "Red Cross Staff Map",
    thumbnail: "/project/red-cross/thumb-red-cross.webp",
    company: "French Red Cross (Volunteer)",
    year: "2025 - Present",
    shortDescription: "Internal enterprise platform for real-time personnel mapping and professional contact centralization.",
    fullDescription: "Currently developing a fullstack solution to streamline communication between Family Assistants (AF) within a Red Cross establishment. The platform centralizes contact data and professional locations onto an interactive map, replacing manual processes with a secure, searchable digital hub.",
    stack: ["Spring Boot 3", "Java 17", "PostgreSQL", "Angular", "Docker", "GitHub Actions"],
    challenge: "Designing a robust data isolation strategy and a whitelist-based access system to ensure sensitive professional data is only accessible to verified personnel.",
    impact: "Digitalizing staff directories for 100+ members, aiming to reduce internal search time through advanced filtering and geolocation.",
    architecture: "Building a modular monolith with a clean separation of concerns. The backend follows a Layered Architecture (Controller-Service-Repository) secured by custom domain-validation filters in Spring Security. The project prioritizes high-availability and clean API contracts via the DTO pattern.",
    solution: [
      "Secure REST API with Spring Boot & Java 17",
      "Whitelist-based security for professional email validation",
      "Decoupled PostgreSQL schema for staff & assistant isolation",
      "Upcoming: Interactive Map integration, Dockerization and automated tests"
    ],
    images: [
      {
        url: "/project/red-cross/archi-red-cross.webp",
        caption: "System Architecture: A high-level view of the secure Spring Boot backend, highlighting the dual-authentication strategy and data isolation layer designed for sensitive personnel mapping.",
        isArchitecture: true 
      }, 
      {
        url: "/project/red-cross/endpoint-test.webp",
        caption: "Functional API Validation: Demonstrating real-time REST endpoint responses with Postman, featuring advanced filtering for geolocated personnel and standardized JSON data structures."
      },
      { 
        url: "/project/red-cross/security-conf.webp", 
        caption: "Security-First Implementation: A look at the Spring Security configuration, showing explicit request matching and the strict isolation between public search routes and protected staff areas."
      }
    ],
    technicalDeepDive: {
      database: "Engineered a decoupled data model using PostgreSQL. By strictly isolating Family Assistants and Administrative Staff entities, data integrity is ensured and the system is prepared for scalable role-based access control (RBAC).",
      security: "Implementing a strict access policy: Family Assistants have read-only access verified against a professional email whitelist, while management staff holds CRUD permissions via JWT-backed authentication.",
      backend: "Standardizing data exchange using DTO (Data Transfer Objects) patterns to decouple the persistence layer from the API layer, ensuring long-term maintainability and secure data exposure.",
      devops: "Preparing a CI/CD workflow using GitHub Actions to automate JUnit/Mockito testing and Docker image builds upon every push to ensure industrial-grade deployment standards."
    }
  }, 
  {
    id: "solidarity-aid-platform",
    title: "Solidarity App",
    thumbnail: "/project/solidarity-app/thumb.webp",
    company: "Personal Project",
    year: "2026",
    shortDescription:"Mobile-first fullstack web platform providing a public directory of local social aid resources with authenticated content management.",
    fullDescription:"Solidarity Aid Platform is a fullstack web application designed to help homeless people quickly discover local social aid resources such as food distribution points, shelters, hygiene services, and essential information. The platform prioritizes accessibility, mobile usability, and fast discovery, while enabling authenticated users to manage associations and informational content through a structured CRUD interface.",
    stack: ["Spring Boot 3","Java 17","PostgreSQL","React","Vite","TailwindCSS","Docker","Swagger/OpenAPI"],
    challenge:"Designing a clean MVP architecture that balances public accessibility with controlled data management, while supporting scalable search capabilities and a mobile-first user experience.",
    impact:"Delivered a functional, mobile-friendly MVP featuring a public resource directory, authenticated content management, and a fully documented REST API within a reproducible Docker environment.",
    architecture: "Dockerized layered monolith architecture. The backend follows a Controller-Service-Repository pattern with DTO-based API contracts. The frontend is a mobile-first React application consuming the REST API via a centralized HTTP client. Frontend and backend are fully decoupled and communicate exclusively through JSON over REST.",
    solution: [
      "Public directory of social aid resources with multi-criteria filtering (city, category tags, associations)",
      "Future integration with external French communes API to retrieve geographic coordinates",
      "Future map-based visualization of aid resources using geolocation data",
      "Mobile-first responsive UI optimized for quick and emergency access",
      "Authenticated CRUD operations for associations and informational content",
      "Docker Compose orchestration for backend, frontend, and database",
      "Interactive OpenAPI/Swagger documentation for API exploration"
    ],
    images: [
      {
        url: "/project/solidarity-app/main-interface.webp",
        caption: "Authenticated content management: interface enabling logged-in users to create, edit, and maintain associations and informational resources"
      },
      {
        url: "/project/solidarity-app/solidarity-db.webp",
        caption: "Relational architecture designed for the Solidarity MVP, focusing on clear separation between public resources, informational content, and secure user management"
      },
      {
        url: "/project/solidarity-app/solidarity-app-diagram.webp",
        caption: "System Architecture: dockerized setup illustrating the separation between the React frontend, Spring Boot REST API, and PostgreSQL database",
        isArchitecture: true
      }
    ],

    technicalDeepDive: {
      backend: "Implemented a REST API using Spring Boot with DTO-based contracts. The backend will integrates an external French communes API to enrich resources with geographic coordinates, enabling map-based visualization and future spatial features.",      
      database: "Designed a relational PostgreSQL schema optimized for tag-based filtering and association queries, initialized via automated SQL seed scripts.",
      security: "Current MVP relies on frontend-level access control. Planned upgrade includes JWT-based authentication and role enforcement using Spring Security.",
      infrastructure: "Built a multi-container Docker environment using Docker Compose, ensuring reproducible local development and a clear migration path to AWS.",
      ux: "Adopted a mobile-first approach with responsive layouts to ensure usability in low-attention or emergency contexts."
    },
    releaseStrategy: {
      status: "MVP Delivered – Active Development",
      testing:   "Implemented basic unit tests using JUnit and Mockito to validate core service logic and demonstrate test-driven practices",
      storeCompliance: "Web Platform – AWS deployment planned with external API integrations"
    },
    githubUrl: "https://github.com/megumihfu/solidarity-app"
  }
];