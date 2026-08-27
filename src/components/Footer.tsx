import { ShieldCheck, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--gradient-gold)] text-primary-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
          </span>
          <span className="font-display font-semibold">Aaron<span className="gold-text">.fin</span></span>
          <span className="text-muted-foreground ml-2">© {new Date().getFullYear()} — Built with discretion.</span>
        </div>
        <div className="flex items-center gap-2">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 hover:text-gold hover:border-gold/40 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
