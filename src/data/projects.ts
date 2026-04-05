import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  featured?: boolean;
  role: string;
  timeline: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    slug: "nebula-design-system",
    title: "Nebula Design System",
    description: "A comprehensive design system built for scale. Tokens, components, and patterns for modern product teams.",
    longDescription:
      "Nebula is a living design system that bridges the gap between design and engineering. It includes a robust token architecture, a library of 60+ accessible components, and detailed documentation that keeps teams aligned. Built to scale from startup to enterprise, Nebula has been adopted by multiple product squads and reduced UI inconsistencies by 80%.",
    tags: ["React", "TypeScript", "Figma"],
    image: project1,
    featured: true,
    role: "Lead Designer & Frontend Engineer",
    timeline: "2024 — Present",
    highlights: [
      "60+ accessible, themeable components",
      "Design token pipeline from Figma to code",
      "Reduced UI inconsistencies by 80%",
      "Adopted by 5 product teams across the org",
    ],
  },
  {
    slug: "aperias-analytics",
    title: "Aperias Analytics",
    description: "Real-time analytics dashboard with rich data visualizations and intelligent insights.",
    longDescription:
      "Aperias is a next-generation analytics platform that transforms raw data into actionable stories. Featuring real-time streaming dashboards, AI-powered anomaly detection, and a composable widget system, the platform empowers product and growth teams to make faster, data-driven decisions without writing SQL.",
    tags: ["Next.js", "D3", "PostgreSQL"],
    image: project2,
    role: "Full-Stack Developer",
    timeline: "2023 — 2024",
    highlights: [
      "Real-time streaming with WebSocket pipelines",
      "AI-powered anomaly detection engine",
      "Composable drag-and-drop widget builder",
      "50% faster insight discovery vs. legacy tool",
    ],
  },
  {
    slug: "pulse-mobile-app",
    title: "Pulse Mobile App",
    description: "Health & wellness companion app with beautiful animations and an intuitive UX.",
    longDescription:
      "Pulse is a mobile-first wellness platform designed to make healthy habits feel effortless. With buttery-smooth animations, personalized onboarding, and a gamified streak system, Pulse achieved a 4.8-star rating and 40% higher Day-30 retention compared to competitors in the category.",
    tags: ["React Native", "Node.js", "Figma"],
    image: project3,
    role: "Product Designer & Mobile Developer",
    timeline: "2023",
    highlights: [
      "4.8★ App Store rating",
      "40% higher D30 retention vs. competitors",
      "Gamified streak & reward system",
      "Personalized onboarding with adaptive UI",
    ],
  },
];

export default projects;
