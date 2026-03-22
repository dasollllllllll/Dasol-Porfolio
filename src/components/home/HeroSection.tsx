"use client";

import { motion } from "framer-motion";
import { MouseGlow } from "@/components/ui/MouseGlow";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden pb-24 md:pb-32"
    >
      <MouseGlow />

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orb */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-teal-accent/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-teal-accent/50" />
            <span className="text-xs tracking-[4px] text-teal-accent uppercase">
              UX/UI Designer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-extralight leading-[1.1] tracking-tight"
          >
            사용자 <span className="text-teal-accent font-light">경험</span>
            <br className="hidden md:block" /> 구조 설계를 통해
            <br />
            <span className="text-teal-accent font-light">문제</span>를 발견하고{" "}
            <span className="text-teal-accent font-light">해결</span>하는
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-text-secondary">
              복잡한 시스템을 직관적으로 이해하고
              <br />
              자연스럽게 행동할 수 있도록 UX 구조를 설계합니다
            </p>

            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span>박다솔</span>
              <span className="text-teal-accent/30">—</span>
              <span>Product Designer</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-10 w-px bg-gradient-to-b from-teal-accent/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
