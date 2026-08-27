import { useMemo, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projects, categories, type ProjectCategory } from "@/data/projects";
import { ArrowUpRight, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Filter = (typeof categories)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === (filter as ProjectCategory))),
    [filter]
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title={<>Projects shaping the <span className="gold-text">future of finance</span></>}
          description="A selection of banking and fintech platforms shipped from architecture to production."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative rounded-full border px-4 py-2 text-sm transition-all ${
                  active
                    ? "border-gold/50 text-primary-foreground"
                    : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[var(--gradient-gold)]"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group glass rounded-3xl overflow-hidden hover-lift"
              >
                <div
                  className="relative h-52 overflow-hidden"
                  style={{ background: p.accent }}
                >
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay"
                       style={{
                         backgroundImage:
                           "radial-gradient(circle at 30% 20%, rgba(232,197,71,0.5), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15), transparent 40%)",
                       }}
                  />
                  <div className="absolute inset-0 flex items-end justify-between p-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] text-white/90">
                      <Lock className="h-3 w-3" /> {p.category}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-white/70">Case study</span>
                  </div>
                  <div className="pointer-events-none absolute -inset-x-10 -top-10 h-40 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <a
                      href="#contact"
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface/60 group-hover:bg-[var(--gradient-gold)] group-hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                  <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl border border-border bg-surface/40 p-4">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-base md:text-lg font-bold gold-text">{m.value}</div>
                        <div className="text-[10.5px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface/60 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
