import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36">
      <div className="pointer-events-none absolute inset-0 ambient" />
      <div className="pointer-events-none absolute inset-0 grid-lines [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 md:px-8"
      >
        <motion.div variants={item} className="flex items-center gap-3">
          <span className="mono-label inline-flex items-center gap-2 rounded-full hairline px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            Available for select engagements
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 max-w-3xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Designing the infrastructure
          <br />
          behind <span className="brand-text">modern finance.</span>
        </motion.h1>

        <motion.p variants={item} className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
          I design core banking platforms, payment systems, compliance tooling and fintech
          products — for the companies building the next generation of financial services.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-brand/12 px-5 py-3 text-sm font-medium transition-all hover:bg-brand/22"
          >
            View selected work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full hairline px-5 py-3 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
          >
            About me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl hairline sm:grid-cols-3"
        >
          {[
            { k: "9 yrs", v: "Inside banking & fintech products" },
            { k: "24+", v: "Platforms shipped to production" },
            { k: "$1.2B+", v: "Volume moving through my interfaces" },
          ].map((s) => (
            <div key={s.k} className="bg-surface/40 p-6">
              <div className="text-2xl font-semibold">{s.k}</div>
              <div className="mt-1.5 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>

        <motion.p variants={item} className="mono-label mt-10">
          Banking infrastructure • Fintech • Compliance UX
        </motion.p>
      </motion.div>
    </section>
  );
}
