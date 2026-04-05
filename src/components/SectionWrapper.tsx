import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, subtitle, children, className = "" }: Props) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gradient-primary mb-4">{title}</h2>
        {subtitle && <p className="text-muted-foreground text-lg max-w-xl mx-auto">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
