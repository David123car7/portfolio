export type ProjectCategory = "case-study" | "academic" | "personal" | "vrchat";

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  /** Optional field/category badge, e.g. "Backend", "Graphics", "VRChat" */
  subField?: string;
  status?: string;
  // The following are only used for "case-study" projects, to populate
  // the expanded case-study modal.
  problem?: string;
  role?: string;
  decisions?: string[];
  outcome?: string;
}

export const projects: Project[] = [
  {
    title: "C++ REST API",
    description:
      "A C++ REST API foundation for building HTTP applications, featuring JWT-based authentication, encrypted password storage, and PostgreSQL database connectivity — built as a reusable base/template for new backend projects.",
    category: "personal",
    subField: "Backend",
    tags: ["C++", "PostgreSQL", "JWT", "Docker", "CMake"],
    githubUrl: "https://github.com/David123car7/cpp-rest-api",
  },
  {
    title: "Space Invaders (C++)",
    description:
      "A re-creation of the classic Space Invaders arcade game, built in C++ using the raylib graphics library.",
    category: "personal",
    subField: "Graphics",
    tags: ["C++", "raylib", "CMake"],
    githubUrl: "https://github.com/David123car7/Space-Invaders",
  },
  {
    title: "Chip-8 Emulator",
    description:
      "A Chip-8 emulator built from scratch in C++, implementing the system's CPU, memory, and instruction set to run classic Chip-8 programs and games.",
    category: "personal",
    subField: "Systems",
    tags: ["C++", "CMake", "Emulation"],
    githubUrl: "https://github.com/David123car7/Chip8-Emulator",
  },
  {
    title: "Library Management System",
    description:
      "A terminal-based library management system built in C++ — my first real C++ project — supporting user management, book inventory, and the full lifecycle of loans from pickup to return, with a test suite and full documentation.",
    category: "personal",
    subField: "Backend",
    tags: ["C++", "Doctest", "Doxygen"],
    githubUrl: "https://github.com/David123car7/Library-Management",
  },
  {
    title: "CrZVRC Docs",
    description:
      "Documentation site for my VRChat asset business, built with Docusaurus and available in multiple languages (English/Japanese). Provides setup guides and full API documentation for developers integrating or extending my VRChat systems.",
    category: "vrchat",
    tags: ["Docusaurus", "TypeScript", "i18n"],
    githubUrl: "https://github.com/David123car7/crzvrc-docs",
    liveUrl: "https://docs.crzvrc.com",
  },
  {
    title: "CrZVRC",
    description:
      "My main storefront and business site for VRChat assets and systems — showcasing the services I offer, my full catalog of assets, and links to where they're available for purchase.",
    category: "vrchat",
    tags: ["Astro", "TypeScript"],
    liveUrl: "https://www.crzvrc.com/",
  },
  {
    title: "VRChat License Manager",
    description:
      "A backend system built with NestJS and TypeScript that manages licensing for my VRChat asset business. Users register an account, activate the licenses tied to assets they've purchased, and securely download the associated files — all through a custom Unity interface I built that communicates with the API. Uses PostgreSQL for data storage and Cloudflare for file hosting/delivery.",
    category: "case-study",
    subField: "Backend",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Cloudflare"],
    problem:
      "My VRChat asset business needed a way to prevent unauthorized redistribution of paid assets while giving legitimate buyers instant, self-serve access after purchase.",
    role: "Designed and built the entire backend, plus the Unity client interface that communicates with it.",
    decisions: [
      "Built the API with NestJS and TypeScript for a structured, maintainable backend",
      "Used PostgreSQL to model users, licenses, and asset ownership relationships",
      "Integrated Cloudflare for secure, fast file delivery of purchased assets",
      "Built a custom Unity interface so users can manage licenses and download assets directly without leaving VRChat's ecosystem",
    ],
    outcome:
      "Powers license management for 400+ sales across my VRChat asset catalog, giving customers instant self-serve access while protecting against unauthorized redistribution.",
  },
  {
    title: "IPCA Social Store",
    description:
      "A mobile application built for Social Action Services (SAS) staff to manage a student support initiative — centralizing beneficiary records, automating inventory and stock tracking, and handling delivery scheduling to reduce administrative errors.",
    category: "academic",
    subField: "Mobile",
    tags: ["Android", "Supabase", "Firebase"],
    githubUrl: "https://github.com/David123car7/SocialStore",
  },
  {
    title: "DoATask",
    description:
      "A web platform that centralizes and promotes volunteer opportunities within local communities — users create and join volunteer tasks, participate in communities, and earn virtual coins and points as rewards.",
    category: "academic",
    subField: "Full Stack",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/David123car7/DoATask",
  },
  {
    title: "CQL Interpreter",
    description:
      "An interpreter for CQL (Comma Query Language), a SQL-inspired language for querying and manipulating CSV files — supporting table imports/exports, SELECT queries with WHERE/LIMIT, joins, and defining reusable procedures.",
    category: "academic",
    subField: "Language Processing",
    tags: ["Python", "PLY"],
    githubUrl: "https://github.com/David123car7/cql-interpreter",
  },
  {
    title: "Coin Quantifier",
    description:
      "A computer vision application that automatically detects and counts euro coins in video footage — identifying each coin by denomination and overlaying bounding boxes, centroids, and labels on the video in real time.",
    category: "academic",
    subField: "Computer Vision",
    tags: ["C", "OpenCV"],
    githubUrl: "https://github.com/David123car7/coin-quantifier",
  },
];
