export const siteConfig = {
  name: "Taiyeba Islam",
  role: "Full Stack Developer",
  description:
    "I build accessible, performant web applications with modern technologies. Passionate about clean code, great user experiences, and solving complex problems.",
  location: "Dhaka, Bangladesh",
  email: "islamtaiyeba38@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
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

export type Project = {
  title: string
  description: string
  tags: string[]
  link: string
}

export const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory, Stripe payments, and an admin dashboard built with Next.js and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
  },
  {
    title: "Developer Blog",
    description:
      "A performant, SEO-optimized blog platform with MDX support, syntax highlighting, and a custom CMS.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts, custom reports, and data export capabilities.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    link: "#",
  },
]

export type Skill = {
  category: string
  items: string[]
}

export const skillsData: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Redis"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel"],
  },
]
