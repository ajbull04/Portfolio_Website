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
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    slug: "trybl",
    title: "Trybl",
    description:
      "Full-stack social platform for universities with a React Native client, JWT auth, and a high-performance Go/Python API.",
    longDescription:
      "Trybl is a production-grade social networking platform built for campus communities. I architected the system end to end: a React Native and Expo mobile experience for 6,000+ users, dual-language backend services in Python and Go with 30+ REST endpoints, and PostgreSQL tuned for sub-millisecond queries. Security and integrations include JWT with refresh, plus OAuth 2.0 for Google and Apple Calendar.",
    tags: [
      "TypeScript",
      "React Native",
      "Expo",
      "Python",
      "Go",
      "PostgreSQL",
      "Docker",
      "Django",
    ],
    image: project1,
    featured: true,
    role: "Founding engineer & architect",
    timeline: "2023 — Present",
    highlights: [
      "Served 6,000+ university users from a React Native mobile client",
      "Built 30+ REST API endpoints in Python and Go for auth, messaging, discovery, and calendar",
      "JWT authentication with automatic refresh; OAuth 2.0 for Google and Apple Calendar",
      "Cut backend query latency from 100ms+ to under 1ms with 20+ PostgreSQL indexes",
    ],
  },
  {
    slug: "publisher-accounting-system",
    title: "Publisher Accounting System",
    description:
      "Full-stack accounting product that automates sales tracking and royalty payouts, replacing spreadsheet workflows.",
    longDescription:
      "A Next.js and TypeScript platform for publishers to model books, authors, sales, and royalties with a normalized PostgreSQL schema via Prisma. The app uses server-rendered tables with URL-driven state and server mutations for refresh-safe caching. Infrastructure includes Docker, Nginx, GitHub Actions CI/CD to QA and production, and Vitest for confidence in changes.",
    tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Docker", "Nginx", "Vitest"],
    image: project2,
    role: "Full-stack developer",
    timeline: "2024 — Present",
    highlights: [
      "Replaced manual spreadsheets with automated sales and royalty tracking",
      "Deployed with Docker, Nginx, and GitHub Actions to QA and production",
      "Designed normalized PostgreSQL schema (books, authors, sales, royalties) with Prisma",
      "Server-rendered tables with URL state and server-side mutations for reliable caching",
    ],
  },
  {
    slug: "smart-basketball-game",
    title: "Smart Basketball Game",
    description:
      "FPGA arcade basketball game with custom pipelined CPU, I²C color sensing, VGA output, and MIPS assembly game logic.",
    longDescription:
      "A hardware–software capstone that combines digital design and computer architecture. The system includes a custom 16-bit, 100MHz pipelined RISC CPU with memory-mapped I/O, a Verilog FSM and I²C driver for a rim-mounted RGB sensor, VGA display timing, and game logic written in MIPS assembly running on the custom ISA.",
    tags: ["Verilog", "FPGA", "Assembly", "I²C", "VGA", "Computer architecture"],
    image: project3,
    role: "Designer & implementer",
    timeline: "2024",
    highlights: [
      "Integrated sensors, buttons, and VGA for real-time arcade gameplay",
      "Custom I²C driver and FSM in Verilog for a rim-mounted RGB color sensor",
      "16-bit 100MHz pipelined CPU with custom RISC ISA and memory-mapped I/O",
      "Game logic in MIPS assembly: scoring, timing, and display control",
    ],
  },
];

export default projects;
