import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, toggle, lang } = useI18n();

  const navLinks = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.faq"), href: "#faq" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#hero" className="flex items-center gap-2 text-xl font-heading font-bold">
          <Gamepad2 className="h-7 w-7 text-primary" />
          <span className="text-gradient-primary">PixelArena</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-secondary transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <Button asChild size="sm" className="glow-purple bg-primary hover:bg-primary/90">
            <a href="#contact">{t("nav.book")}</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} className="text-muted-foreground hover:text-secondary transition-colors" aria-label="Toggle language">
            <Globe className="h-5 w-5" />
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
              <Button asChild className="glow-purple bg-primary hover:bg-primary/90 w-full">
                <a href="#contact" onClick={() => setOpen(false)}>{t("nav.book")}</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
