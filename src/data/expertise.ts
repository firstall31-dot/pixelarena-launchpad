import { Landmark, ArrowLeftRight, ShieldCheck, LayoutPanelTop } from "lucide-react";

export const expertise = [
  {
    title: "Core Banking Systems",
    icon: Landmark,
    description:
      "Ledgers, account structures, postings and back-office operations designed for accuracy under load.",
    keywords: ["Ledger UX", "Back-office", "Data density"],
  },
  {
    title: "Payments & Money Movement",
    icon: ArrowLeftRight,
    description:
      "Authorization flows, routing logic, settlement and reconciliation surfaces that stay readable at scale.",
    keywords: ["Card rails", "ACH / SEPA", "Reconciliation"],
  },
  {
    title: "Compliance & Risk Interfaces",
    icon: ShieldCheck,
    description:
      "KYC, AML monitoring, case management and audit trails — clarity when the stakes are regulatory.",
    keywords: ["KYC / AML", "Case review", "Audit"],
  },
  {
    title: "Fintech Product Design",
    icon: LayoutPanelTop,
    description:
      "Zero-to-one product design for financial products, from positioning to shipped interface systems.",
    keywords: ["0→1", "Design systems", "Mobile"],
  },
];

export const process = [
  {
    step: "01",
    title: "Domain immersion",
    description:
      "I start inside the system — ledgers, rails, policies, regulation. No design decisions before the mechanics are understood.",
  },
  {
    step: "02",
    title: "Structure & flows",
    description:
      "Information architecture, state models and edge cases mapped with engineering before a single screen is styled.",
  },
  {
    step: "03",
    title: "Interface craft",
    description:
      "High-fidelity, token-driven interfaces built for density, accessibility and long working sessions.",
  },
  {
    step: "04",
    title: "Ship & refine",
    description:
      "Hands-on delivery with the build team, then iteration against real operator and customer behaviour.",
  },
];

export const principles = ["Clarity", "Trust", "Precision", "Scalability"];
