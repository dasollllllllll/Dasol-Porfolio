"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";

const steps = [
  { num: 1, title: "Problem", desc: "문제 정의" },
  { num: 2, title: "Research", desc: "사용자 리서치" },
  { num: 3, title: "Structure", desc: "구조 설계" },
  { num: 4, title: "Flow", desc: "흐름 설계" },
  { num: 5, title: "Experience", desc: "경험 연결" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedText>
          <p className="text-sm text-text-muted uppercase tracking-widest mb-4">
            About
          </p>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="text-3xl font-light md:text-4xl">UX 설계 방식</h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="mt-4 text-text-secondary text-lg">
            문제를 정의하고 구조화하고 경험으로 연결합니다
          </p>
        </AnimatedText>

        <div className="mt-20 flex flex-col md:flex-row items-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-center"
            >
              <div className="group flex flex-col items-center">
                <div className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-teal-light border border-teal-accent/20 transition-all group-hover:border-teal-accent/50 group-hover:shadow-[0_0_30px_rgba(0,173,181,0.15)]">
                  <div className="text-center">
                    <p className="text-xs text-teal-accent mb-1">{step.num}</p>
                    <p className="text-sm font-medium text-teal-accent">
                      {step.title}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-text-secondary">{step.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                  className="hidden md:block mx-4 h-px w-12 bg-gradient-to-r from-teal-accent/50 to-teal-accent/10 origin-left"
                />
              )}

              {i < steps.length - 1 && (
                <div className="md:hidden h-6 w-px bg-gradient-to-b from-teal-accent/50 to-teal-accent/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
