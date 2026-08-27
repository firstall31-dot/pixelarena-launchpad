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
              <AnimatePresence mode="wait">
                <motion.article
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  className="glass overflow-hidden rounded-3xl shadow-[var(--shadow-deep)]"
                >
                  <div className="relative h-44 md:h-56" style={{ background: current.accent }}>
                    <div className="grid-lines absolute inset-0 opacity-40" />
                    <div className="absolute inset-0 flex items-end justify-between p-5">
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white/85 backdrop-blur-md">
                        {current.category}
                      </span>
                      <span className="mono-label text-white/60">Case study</span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold md:text-2xl">{current.title}</h3>
                      <a
                        href="#contact"
                        aria-label={`Discuss ${current.title}`}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-[var(--surface-2)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--brand)]"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-border p-4">
                      {current.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="brand-text text-base font-bold md:text-lg">{m.value}</div>
                          <div className="mt-1 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {current.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
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
