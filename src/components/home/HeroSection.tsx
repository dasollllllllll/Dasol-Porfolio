"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MouseGlow } from "@/components/ui/MouseGlow";

const titleChars = "사용자 경험 구조 설계를 통해".split("");
const subtitleChars = "문제를 발견하고 해결하는".split("");

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[85vh] items-end overflow-hidden pb-16 md:pb-24"
    >
      <MouseGlow />

      {/* Animated grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Multiple gradient orbs */}
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute -top-20 right-[10%] h-[500px] w-[500px] rounded-full bg-active-blue/[0.05] blur-[150px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute top-[40%] left-[5%] h-[300px] w-[300px] rounded-full bg-teal-accent/[0.03] blur-[120px]"
      />

      {/* Large background number */}
      <motion.div
        style={{ y: y1, opacity }}
        className="pointer-events-none absolute right-[5%] top-[15%] select-none"
      >
        <span className="text-[20vw] font-extralight leading-none text-black/[0.03]">
          UX
        </span>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-8">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center gap-4 overflow-hidden"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px w-16 origin-left bg-teal-accent/20"
            />
            <span className="text-xs tracking-[6px] text-teal-accent/50 uppercase">
              UX/UI Designer — Portfolio 2026
            </span>
          </motion.div>

          {/* Main title with stagger */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-[clamp(2.2rem,5.5vw,5rem)] font-extralight leading-[1.1] tracking-tight"
            >
              <span className="block overflow-hidden">
                {titleChars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + i * 0.03,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`inline-block ${
                      ["경", "험"].includes(char)
                        ? "text-teal-accent font-semibold"
                        : ""
                    }`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>

              <span className="block overflow-hidden mt-2">
                {subtitleChars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.0 + i * 0.03,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`inline-block ${
                      ["문", "제", "발", "견", "해", "결"].includes(char)
                        ? "text-teal-accent font-semibold"
                        : ""
                    }`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </div>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-4 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-sm leading-[1.8] text-text-secondary">
              복잡한 시스템을 직관적으로 이해하고
              <br />
              자연스럽게 행동할 수 있도록 UX 구조를 설계합니다
            </p>

            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-black/5" />
              <span className="text-xs tracking-[2px] text-text-muted uppercase">
                박다솔 — Product Designer
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[3px] text-text-muted uppercase">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-teal-accent/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
