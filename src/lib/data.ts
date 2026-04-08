export const siteConfig = {
  name: "Taiyeba Islam",
  role: "Full Stack Developer",
  description:
    "Backend-focused developer building scalable APIs and full-stack applications using Node.js, MongoDB, and Next.js. Experienced in authentication, payments, and cloud integrations. Currently seeking internship opportunities in backend/full-stack development.",
  location: "Dhaka, Bangladesh",
  email: "islamtaiyeba38@gmail.com",
  socials: {
    github: "https://github.com/taiyeba-software",
    linkedin: "https://www.linkedin.com/in/taiyeba-islam-7232752a1/",
    twitter: "https://x.com",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Engineering", href: "#backend" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
}

export const aboutData = {
  paragraphs: [
    "I'm a developer passionate about crafting clean, performant user interfaces that blend thoughtful design with robust engineering.",
    "My work spans across front-end and back-end development, with a focus on building full-stack applications using React, Next.js, Node.js, and modern cloud infrastructure.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or reading about system design.",
  ],
}

export interface Project {
  company: string
  title: string
  subtitle: string
  description: string
  problem?: string
  solution?: string
  features?: string[] // ADD THIS
  tags: string[]
  image: string
  githubLink: string
  liveDemoLink?: string
  status?: "Live" | "Upcoming"
}

export const projectsData: Project[] = [
  {
    company: "Rajkonna",
    title: "Production-Ready E-commerce Backend API",
    subtitle: "Scalable backend with authentication, orders & payments",
    problem:
      "E-commerce systems often fail to maintain consistent pricing, inventory, and secure user access during checkout.",
    solution:
      "Built a scalable Node.js backend API with authentication, cart, and order management. Implemented price snapshotting (priceAt), discount logic, and inventory control to ensure consistency during checkout.",
    description:
      "Built a scalable e-commerce backend API solving inconsistent pricing and order reliability issues during checkout.\n\nImplemented authentication, cart, and order management with price snapshotting (priceAt) to ensure pricing consistency. Designed discount and delivery logic, and added inventory control to prevent overselling.\n\nTech decisions: Used Node.js + Express for modular API design, MongoDB for flexible product schema, and Redis caching for performance optimization.\n\nKey Features:\n• JWT authentication & role-based access\n• Order system with price snapshot (priceAt)\n• Discount + delivery charge logic\n• Inventory reservation system",
    features: [
      "JWT authentication & role-based access",
      "Order system with price snapshot (priceAt)",
      "Discount + delivery charge logic",
      "Inventory reservation system",
      "Pagination & filtering APIs",
    ],
    tags: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "Render"],
    image: "/projects/rajkonna-backend.png",
    githubLink: "https://github.com/taiyeba-software/Backend-Rajkonna",
    liveDemoLink: "https://backend-rajkonna.onrender.com",
    status: "Live",
  },
  {
    company: "Rajkonna",
    title: "Full-Stack E-commerce Frontend",
    subtitle: "Responsive shopping experience with authentication & cart system",
    description:
      "Built a responsive e-commerce frontend to solve fragmented user shopping experience across devices.\n\nDeveloped authentication flow, product browsing, and cart system with protected routes and state management using Context API.\n\nTech decisions: Used React for component-driven UI, Tailwind CSS for fast styling, and integrated with a REST API backend for real-time data.\n\nKey Features:\n• Authentication & protected routes\n• Cart + checkout flow\n• Global state with Context API\n• Responsive UI design",
    tags: ["React", "React Router", "Tailwind CSS", "Context API"],
    image: "/projects/rajkonna-frontend.png",
    githubLink: "https://github.com/taiyeba-software/rajkonna",
    liveDemoLink: "https://frontend-rajkonna.vercel.app/",
    status: "Live",
  },
  {
    company: "SparkleLab",
    title: "AI Image Editing SaaS (MVP)",
    subtitle: "Cloud-native image processing with secure authentication",
    description:
      "Built an AI-powered image editing SaaS to solve manual image processing and workflow inefficiencies.\n\nImplemented secure authentication, image upload pipeline, and Cloudinary-based AI transformations with MongoDB persistence for tracking user-generated assets.\n\nTech decisions: Used Next.js App Router with TypeScript for full-stack type safety, Clerk for authentication, and Cloudinary for scalable image processing.\n\nKey Features:\n• Clerk authentication & protected routes\n• Cloudinary AI background removal\n• MongoDB image + user data persistence\n• Typed server actions & API routes",
    tags: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Clerk"],
    image: "/projects/sparklelab.png",
    githubLink: "https://github.com/taiyeba-software/SparkleLab",
    liveDemoLink: "https://sparkle-lab-mj8z.vercel.app/",
    status: "Live",
  },
  {
    company: "VerbaScope",
    title: "AI-Assisted Early Emotional Signal Detection Platform",
    subtitle: "Upcoming research-driven NLP system for Bangla code-mixed text",
    description:
      "Building an AI-assisted platform to detect early emotional signals in Bangla-English code-mixed text during content creation.\n\nDesigned a modular system combining frontend UI, backend APIs, and an ML service for probabilistic sentiment and sarcasm detection.\n\nTech decisions: Used Next.js for frontend, Node.js for API layer, and FastAPI for ML processing to enable scalable microservice architecture.\n\nKey Features:\n• NLP-based sentiment detection\n• Microservice architecture (Node + FastAPI)\n• Real-time text analysis\n• Research-driven system design",
    tags: ["Next.js", "Node.js", "FastAPI", "MongoDB", "NLP", "Microservices"],
    image: "/projects/verbascope.png",
    githubLink: "https://github.com/taiyeba-software/verbascope-social-ml",
    liveDemoLink: "#",
    status: "Upcoming",
  }
]

export interface SkillCluster {
  title: string
  description: string
  technologies: string[]
  icon: string
}

export const skillsData: SkillCluster[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible UIs with modern frameworks and component design patterns.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    icon: "Code",
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side logic with RESTful APIs, authentication, and authorization layers.",
    technologies: ["Node.js", "Express", "REST APIs", "JWT", "Environment Configuration"],
    icon: "Server",
  },
  {
    title: "Database & Data Modeling",
    description: "Designing scalable data structures and managing persistence with modern document databases.",
    technologies: ["MongoDB", "Mongoose", "MongoDB Atlas", "Data Modeling"],
    icon: "Database",
  },
  {
    title: "System Architecture",
    description: "Architecting layered, maintainable systems with role-based access and service orientation.",
    technologies: ["Layered Design", "RBAC", "Service-Oriented Architecture", "Microservices"],
    icon: "Layers",
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying applications to production with environment-driven configuration and monitoring.",
    technologies: ["Render", "Vercel", "Environment Configuration", "CI/CD Basics"],
    icon: "Cloud",
  },
  {
    title: "AI & Applied Learning",
    description: "Building AI-assisted features and exploring practical machine learning applications.",
    technologies: ["FastAPI", "NLP Basics", "Cloudinary AI", "AI Integration"],
    icon: "Sparkles",
  },
]

export const engineeringFoundations = [
  "Git & GitHub Workflow",
  "API Documentation",
  "Jest + Supertest Testing",
  "Production Debugging",
  "Environment Variable Safety",
  "AI-assisted Development (GitHub Copilot, Blackbox AI)",
]
