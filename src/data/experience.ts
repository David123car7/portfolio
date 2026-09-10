export interface Experience {
  company: string;
  role: string;
  type: string;
  location?: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "Teletab",
    role: "Full Stack Developer",
    type: "Curricular Internship",
    location: "Braga, Portugal",
    startDate: "Feb 2026",
    endDate: "May 2026",
    bullets: [
      "Integrated external APIs (App Store Connect and Google Play Console) using C# .NET and PostgreSQL, enabling direct access to platform data and features within the company's infrastructure",
      "Developed an AI-powered solution to automatically generate responses to App Store and Google Play reviews, using C# .NET for the core logic and TypeScript for the API communicating with the AI models",
      "Built a backoffice system for user administration, with a C# .NET backend and a React + RefineCore frontend",
    ],
  },
  {
    company: "Independent Project",
    role: "Independent Software Developer",
    type: "Self-Employed",
    startDate: "2025",
    endDate: "Present",
    bullets: [
      "Designed, architected, and independently developed a full product ecosystem for the VRChat virtual reality platform",
      "Built modular, reusable C# scripts for Unity, designed for integration across different VR projects and environments",
      "Developed a licensing API in NestJS and TypeScript, using PostgreSQL for the database and Cloudflare for file hosting, allowing customers to validate licenses and download purchased assets",
      "Managed the full product lifecycle, including technical support and direct customer service for an international client base, entirely in English",
    ],
  },
  {
    company: "Inforcávado",
    role: "Technician",
    type: "Curricular Internship",
    location: "Barcelos, Portugal",
    startDate: "Feb 2023",
    endDate: "Apr 2023",
    bullets: [
      "Performed preventive and corrective maintenance on internal and client computers",
      "Developed hardware diagnostics and customer service skills",
    ],
  },
];
