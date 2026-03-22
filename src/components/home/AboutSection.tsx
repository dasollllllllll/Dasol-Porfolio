"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Problem", desc: "문제 정의" },
  { num: "02", title: "Research", desc: "사용자 리서치" },
  { num: "03", title: "Structure", desc: "구조 설계" },
  { num: "04", title: "Flow", desc: "흐름 설계" },
  { num: "05", title: "Experience", desc: "경험 연결" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <div className="mb-20 flex items-start justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="text-xs tracking-[3px] text-black/25 uppercase">
                /01
              </span>
              <div className="h-px w-8 bg-white/10" />
              <span className="text-xs tracking-[3px] text-text-muted uppercase">
                About
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extralight md:text-5xl"
            >
              UX 설계 방식
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden max-w-xs text-sm leading-relaxed text-text-secondary md:block"
          >
            문제를 정의하고 구조화하고
            <br />
            경험으로 연결합니다
          </motion.p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-black/[0.06] bg-white/60 md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col gap-4 border-b border-black/[0.06] p-8 transition-colors hover:bg-white/60 md:border-b-0 md:border-r last:border-r-0 last:border-b-0"
            >
              <span className="text-[10px] tracking-widest text-teal-accent/40">
                {step.num}
              </span>
              <h3 className="text-lg font-light text-text-primary transition-colors group-hover:text-teal-accent">
                {step.title}
              </h3>
              <p className="text-xs text-text-muted">{step.desc}</p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-teal-accent/40 transition-all duration-500 group-hover:w-full md:bottom-auto md:top-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
