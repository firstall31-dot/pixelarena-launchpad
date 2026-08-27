import { useState } from "react";
import { Reveal } from "./Reveal";
import { projects } from "@/data/projects";
import {
  ArrowUpRight,
  Banknote,
  CreditCard,
  Landmark,
  LineChart,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const icons: LucideIcon[] = [Landmark, CreditCard, LineChart, Banknote, Wallet];

export function Projects() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="mono-label inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                Featured work
              </span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight md:text-6xl">
                this is not a portfolio.
                <br />
                <span className="brand-text">it&apos;s the foundation.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base lg:mt-14">
              Banking cores, payment rails, and developer-first tooling — architected end
              to end and shipped to production for the next generation of fintech.
            </p>
          </Reveal>
        </div>

        {/* Body */}
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* Capability list */}
          <div className="flex flex-col">
            {projects.map((p, i) => {
              const Icon = icons[i % icons.length];
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className="group border-t border-border py-5 text-left last:border-b"
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        isActive ? "text-[var(--brand)]" : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={`font-display text-base uppercase tracking-[0.14em] transition-colors md:text-lg ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {p.category}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pl-9 pr-2 pt-3 text-sm leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Preview panel */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 ambient rounded-[2rem] opacity-70" />

              {/* stacked layers behind the window */}
              <div className="pointer-events-none absolute -top-4 left-6 right-6 h-16 rounded-t-[1.4rem] bg-white/10" />
              <div className="pointer-events-none absolute -top-2 left-3 right-3 h-16 rounded-t-[1.6rem] bg-white/[0.16]" />

              <AnimatePresence mode="wait">
                <motion.article
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  className="relative overflow-hidden rounded-[1.6rem] bg-white text-[#111] shadow-[var(--shadow-deep)] ring-1 ring-black/10"
                >
                  <div className="grid md:grid-cols-2">
                    {/* left pane */}
                    <div className="border-b border-black/[0.07] p-5 md:border-b-0 md:border-r md:p-6">
                      <div className="flex items-center gap-2 text-[11px] text-black/50">
                        <ArrowUpRight className="h-3.5 w-3.5 -rotate-135" />
                        <span className="h-4 w-4 rounded-full" style={{ background: current.accent }} />
                        <span className="font-medium text-black/70">{current.category}</span>
                      </div>

                      <p className="mt-6 text-[11px] text-black/45">{current.title.split("—")[0].trim()}</p>
                      <p className="mt-1 text-xl font-semibold tracking-tight">
                        {current.metrics[0].value}
                      </p>

                      <div
                        className="mt-4 aspect-square w-full rounded-md"
                        style={{ background: current.accent }}
                      >
                        <div className="grid-lines h-full w-full rounded-md opacity-30" />
                      </div>

                      <div className="mt-4 flex items-center gap-1.5 text-[9px] text-black/40">
                        <span>Powered by</span>
                        <span className="font-semibold text-black/70">{current.tech[0]}</span>
                        <span className="ml-auto">Terms · Privacy</span>
                      </div>
                    </div>

                    {/* right pane */}
                    <div className="p-5 md:p-6">
                      <p className="text-[11px] font-medium text-black/70">Project overview</p>

                      <div className="mt-3 space-y-2 rounded-md border border-black/[0.08] p-3">
                        {current.metrics.map((m) => (
                          <div key={m.label} className="flex items-start justify-between gap-3">
                            <span className="text-[10px] uppercase tracking-wider text-black/40">
                              {m.label}
                            </span>
                            <span className="text-[11px] font-medium text-black/80">{m.value}</span>
                          </div>
                        ))}
                        <div className="flex items-start justify-between gap-3 border-t border-black/[0.06] pt-2">
                          <span className="text-[10px] uppercase tracking-wider text-black/40">Stack</span>
                          <span className="max-w-[60%] text-right text-[11px] leading-snug text-black/70">
                            {current.tech.join(", ")}
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 line-clamp-3 text-[11px] leading-relaxed text-black/50">
                        {current.description}
                      </p>

                      <a
                        href="#contact"
                        className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#111] text-[12px] font-medium text-white transition-opacity hover:opacity-90"
                      >
                        Discuss this project
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <p className="mt-2 text-center text-[10px] text-black/40">View full case study</p>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
