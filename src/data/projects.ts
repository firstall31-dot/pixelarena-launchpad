export type ProjectCategory =
  | "Digital Banking"
  | "Payment Systems"
  | "Loan Management"
  | "Core Banking"
  | "Wallets";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  metrics: { label: string; value: string }[];
  accent: string; // CSS gradient string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "NorthBank — Digital Banking Platform",
    description:
      "End-to-end retail banking suite with mobile + web clients, instant onboarding, card controls, and real-time spending insights for 320k+ active users.",
    category: "Digital Banking",
    tech: ["React Native", "Next.js", "NestJS", "PostgreSQL", "Kafka", "AWS"],
    metrics: [
      { label: "Active users", value: "320K+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Onboarding", value: "< 4 min" },
    ],
    accent: "linear-gradient(135deg, #1f2a44, #0b1220)",
  },
  {
    id: "2",
    title: "FluxPay — Real-time Payment Gateway",
    description:
      "PCI-DSS compliant payment orchestration layer with smart routing, reconciliation engine and 3DS2 authentication across 40+ acquirers.",
    category: "Payment Systems",
    tech: ["Node.js", "Go", "Kafka", "Redis", "PostgreSQL", "Kubernetes"],
    metrics: [
      { label: "Processed", value: "$45M+/mo" },
      { label: "Auth rate", value: "+12.4%" },
      { label: "Latency", value: "84ms p95" },
    ],
    accent: "linear-gradient(135deg, #2a1f44, #120b22)",
  },
  {
    id: "3",
    title: "LendCore — Loan Origination System",
    description:
      "Smart loan origination + servicing platform with AI risk scoring, automated KYC, e-signature and dynamic underwriting rules.",
    category: "Loan Management",
    tech: ["NestJS", "Python", "PostgreSQL", "Redis", "AWS Lambda"],
    metrics: [
      { label: "Approval time", value: "−68%" },
      { label: "Default rate", value: "−31%" },
      { label: "Loans / month", value: "12K+" },
    ],
    accent: "linear-gradient(135deg, #44331f, #221608)",
  },
  {
    id: "4",
    title: "Treasura — Corporate Treasury Dashboard",
    description:
      "Multi-entity treasury & cash management cockpit with multi-currency accounts, FX hedging, intraday liquidity and SWIFT MT/MX integration.",
    category: "Core Banking",
    tech: ["React", "TypeScript", "Spring Boot", "Oracle", "Kafka"],
    metrics: [
      { label: "Cash visibility", value: "Real-time" },
      { label: "Entities", value: "180+" },
      { label: "FX volume", value: "$1.2B" },
    ],
    accent: "linear-gradient(135deg, #1f4439, #08221a)",
  },
  {
    id: "5",
    title: "Vaulto — Secure Digital Wallet",
    description:
      "Biometric-secured digital wallet with tokenized card storage, P2P transfers, KYC/AML pipeline and on-device fraud detection.",
    category: "Wallets",
    tech: ["React Native", "Node.js", "MongoDB", "Redis", "Azure"],
    metrics: [
      { label: "Fraud blocked", value: "−78%" },
      { label: "KYC pass rate", value: "94%" },
      { label: "Transfers", value: "8M+" },
    ],
    accent: "linear-gradient(135deg, #44291f, #220f08)",
  },
];

export const categories = [
  "All",
  "Digital Banking",
  "Payment Systems",
  "Loan Management",
  "Core Banking",
  "Wallets",
] as const;
