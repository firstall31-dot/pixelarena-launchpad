import { useMemo } from "react";
import { motion } from "framer-motion";

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        dur: Math.random() * 6 + 4,
        delay: Math.random() * 4,
        color: i % 3 === 0 ? "bg-primary/40" : i % 3 === 1 ? "bg-secondary/40" : "bg-neon-green/30",
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute rounded-full ${p.color}`}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() > 0.5 ? 15 : -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default Particles;
