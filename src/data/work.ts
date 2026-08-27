export interface WorkItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  featured?: boolean;
  visual: {
    /** small chart / metric preview content */
    metric: string;
    metricLabel: string;
    rows: { label: string; value: string }[];
  };
}

export const work: WorkItem[] = [
  {
    id: "core-banking",
    title: "Core Banking Platform Redesign",
    description:
      "Rebuilt the operator console of a tier-2 bank's core ledger — accounts, postings, and end-of-day reconciliation in one calm surface.",
    tags: ["Core Banking", "Design System", "Dashboard"],
    year: "2025",
    role: "Lead Product Designer",
    featured: true,
    visual: {
      metric: "1.4M",
      metricLabel: "Daily postings",
      rows: [
        { label: "Ledger", value: "Balanced" },
        { label: "EOD cycle", value: "−41% time" },
        { label: "Ops errors", value: "−63%" },
      ],
    },
  },
  {
    id: "payments-infra",
    title: "Payment Infrastructure Console",
    description:
      "Observability and routing control for a cross-border payment processor handling 40+ acquirer connections.",
    tags: ["Payments", "Observability"],
    year: "2025",
    role: "Product Design",
    visual: {
      metric: "84ms",
      metricLabel: "p95 authorization",
      rows: [
        { label: "Routes", value: "128 active" },
        { label: "Auth rate", value: "+12.4%" },
      ],
    },
  },
  {
    id: "kyc-onboarding",
    title: "KYC & Compliance Onboarding",
    description:
      "A risk-aware onboarding flow that keeps applicants moving while giving compliance officers a full audit trail.",
    tags: ["Compliance", "Onboarding", "Risk"],
    year: "2024",
    role: "UX Lead",
    visual: {
      metric: "94%",
      metricLabel: "Pass rate",
      rows: [
        { label: "Drop-off", value: "−38%" },
        { label: "Review queue", value: "Real-time" },
      ],
    },
  },
  {
    id: "digital-banking-app",
    title: "Digital Banking Mobile App",
    description:
      "Retail banking app for a challenger bank: instant onboarding, card controls, and clear spending narratives.",
    tags: ["Mobile", "Retail Banking"],
    year: "2024",
    role: "End-to-end Design",
    visual: {
      metric: "320K",
      metricLabel: "Active users",
      rows: [
        { label: "Onboarding", value: "< 4 min" },
        { label: "App rating", value: "4.8" },
      ],
    },
  },
  {
    id: "card-issuing",
    title: "Card Issuing & Management System",
    description:
      "Issuer-side tooling for programs, BIN ranges, and card lifecycle — built for operators who work in it all day.",
    tags: ["Cards", "Operations"],
    year: "2023",
    role: "Product Design",
    visual: {
      metric: "6 mins",
      metricLabel: "Program setup",
      rows: [
        { label: "Programs", value: "72 live" },
        { label: "Manual steps", value: "−55%" },
      ],
    },
  },
  {
    id: "lending-decisioning",
    title: "Lending Decisioning Interface",
    description:
      "Underwriting workspace that makes model output, policy rules, and human judgement legible in one view.",
    tags: ["Lending", "Decisioning", "Dashboard"],
    year: "2023",
    role: "Design Consultant",
    featured: true,
    visual: {
      metric: "−68%",
      metricLabel: "Decision time",
      rows: [
        { label: "Policies", value: "Versioned" },
        { label: "Default rate", value: "−31%" },
        { label: "Cases / day", value: "2.1K" },
      ],
    },
  },
];
