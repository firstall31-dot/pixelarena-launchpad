import { Code2, Server, Banknote, Database, Shield } from "lucide-react";

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "Java / Spring Boot", "GraphQL", "REST APIs"],
  },
  {
    title: "FinTech Specialization",
    icon: Banknote,
    items: [
      "Stripe", "Razorpay", "Plaid", "Core Banking APIs",
      "Digital Wallets", "Loan Management", "KYC / AML", "Open Banking",
    ],
  },
  {
    title: "Databases & Cache",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Elasticsearch"],
  },
  {
    title: "Security & Cloud",
    icon: Shield,
    items: ["OAuth2", "JWT", "End-to-End Encryption", "AWS", "Azure", "Docker", "Kubernetes", "Microservices"],
  },
];
