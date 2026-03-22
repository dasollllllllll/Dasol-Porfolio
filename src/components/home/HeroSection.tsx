"use client";

import { motion } from "framer-motion";
import { FloatingElements } from "@/components/ui/FloatingElements";
import { MouseGlow } from "@/components/ui/MouseGlow";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <FloatingElements count={7} />
      <MouseGlow />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs tracking-[4px] text-teal-accent uppercase"
        >
          Portfolio 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl font-light leading-relaxed md:text-5xl md:leading-relaxed"
        >
          사용자 <span className="text-teal-accent">경험</span> 구조 설계를 통해
          <br />
          <span className="text-teal-accent">문제</span>를{" "}
          <span className="text-teal-accent">발견</span>하고{" "}
          <span className="text-teal-accent">해결</span>하는 디자이너
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-lg text-text-secondary"
        >
          UX Research 기반 Product Designer
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-teal-accent/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
