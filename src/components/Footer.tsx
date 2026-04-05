import { Gamepad2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Gamepad2 className="h-5 w-5 text-primary" />
        <span className="font-heading font-bold text-gradient-primary">PixelArena</span>
      </div>
      <p className="text-muted-foreground text-sm">© 2026 بيكسل أرينا. جميع الحقوق محفوظة.</p>
      <div className="flex gap-4">
        {["الرئيسية", "المميزات", "الأسعار", "تواصل معنا"].map((l) => (
          <a key={l} href={`#${l === "الرئيسية" ? "hero" : l === "المميزات" ? "features" : l === "الأسعار" ? "pricing" : "contact"}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
