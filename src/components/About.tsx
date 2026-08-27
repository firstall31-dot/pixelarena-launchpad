import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { principles } from "@/data/expertise";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="About"
          title={<>I design for trust at scale.</>}
        />

        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            <p>
              Financial software carries weight that most products don't. A misread number is
              someone's payroll. An unclear state is a failed settlement. A missing audit trail is a
              regulatory finding. That constraint is what I design inside every day.
            </p>
            <p>
              My work sits between two audiences at once: engineers who need the model to be exact,
              and operators or customers who need the surface to be obvious. I spend the early part
              of every engagement inside the domain — rails, ledgers, policy, regulation — so the
              interface reflects how the system actually behaves rather than how it looks in a deck.
            </p>
            <p>
              The result is quiet software: dense where it must be, generous where it can be, and
              predictable under pressure. Nine years, twenty-four platforms, and a strong preference
              for substance over decoration.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl hairline bg-surface/35 p-7 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full hairline bg-brand/10 font-mono text-sm text-brand-soft">
                  AR
                </div>
                <div>
                  <div className="font-semibold">Alex Rivera</div>
                  <div className="text-sm text-muted-foreground">Banking &amp; Fintech Product Design</div>
                </div>
              </div>

              <div className="mono-label mt-8">Principles</div>
              <div className="mt-4 grid gap-px overflow-hidden rounded-xl hairline sm:grid-cols-2">
                {principles.map((p) => (
                  <div key={p} className="bg-background/50 px-4 py-4 text-sm">
                    {p}
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Based in</span>
                  <span className="text-foreground">Remote — CET</span>
                </div>
                <div className="flex justify-between">
                  <span>Engagements</span>
                  <span className="text-foreground">Advisory · Embedded</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
