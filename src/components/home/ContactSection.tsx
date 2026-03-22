"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="text-xs tracking-[3px] text-teal-accent uppercase">
            /03
          </span>
          <div className="h-px w-8 bg-teal-accent/30" />
          <span className="text-xs tracking-[3px] text-text-muted uppercase">
            Contact
          </span>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Left: message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extralight leading-snug md:text-5xl">
              함께 일하고 싶으시다면
              <br />
              <span className="text-teal-accent">연락</span>주세요
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-text-secondary">
              사용자가 복잡한 시스템을 직관적으로 이해하고
              자연스럽게 행동할 수 있도록 UX 구조를 설계합니다
            </p>
          </motion.div>

          {/* Right: contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="space-y-6">
              <div className="group">
                <p className="mb-1 text-xs tracking-widest text-text-muted uppercase">
                  Name
                </p>
                <p className="text-lg font-light">박다솔</p>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div className="group">
                <p className="mb-1 text-xs tracking-widest text-text-muted uppercase">
                  Email
                </p>
                {/* TODO: 실제 이메일 주소로 교체 */}
                <a
                  href="mailto:contact@example.com"
                  className="text-lg font-light text-text-primary transition-colors hover:text-teal-accent"
                >
                  contact@example.com
                </a>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div className="group">
                <p className="mb-1 text-xs tracking-widest text-text-muted uppercase">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/sol_.tudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-light text-text-primary transition-colors hover:text-teal-accent"
                >
                  @sol_.tudio
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
