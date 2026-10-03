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
      "Integrated 5 external APIs, including App Store Connect and Google Play Console, into ASOAGENT, the company's platform, giving it direct access to store data and features",
      "Built an AI solution for ASOAGENT that automatically generates replies to App Store and Google Play reviews based on a set of predefined rules, reducing the time the team spends responding to users",
      "Developed the ASOAGENT back-office for user management, letting staff manage accounts on their own and laying the foundation for future features",
      "Tech: C#/.NET, TypeScript, React (Refine), PostgreSQL",
    ],
  },
  {
    company: "Independent Project",
    role: "Independent Software Developer",
    type: "Self-Employed",
    startDate: "2025",
    endDate: "Present",
    bullets: [
      "Build and distribute modular C# scripts for Unity, aimed at VRChat creators, reaching 400+ downloads from international customers",
      "Developed a centralized licensing system that protects the products from unauthorized use and lets customers download and update their assets from one place",
      "Provide direct technical support to international customers, entirely in English",
      "Tech: C# (Unity), TypeScript, NestJS, PostgreSQL, Cloudflare",
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
