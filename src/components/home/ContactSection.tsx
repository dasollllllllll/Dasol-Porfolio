"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "100%"]);

  return (
    <section ref={ref} id="contact" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="text-xs tracking-[3px] text-black/25 uppercase">
            /03
          </span>
          <div className="h-px w-8 bg-black/5" />
          <span className="text-xs tracking-[3px] text-text-muted uppercase">
            Contact
          </span>
        </motion.div>

        {/* Big CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-extralight leading-[1.15] tracking-tight">
            함께 <span className="text-teal-accent font-semibold">일하고</span> 싶으시다면
            <br />
            편하게 <span className="text-teal-accent font-semibold">연락</span>주세요
          </h2>
        </motion.div>

        {/* Animated line */}
        <motion.div
          style={{ width: lineWidth }}
          className="mb-16 h-px bg-gradient-to-r from-teal-accent/30 via-active-blue/10 to-transparent"
        />

        {/* Contact grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              label: "Email",
              value: "dasoll9613@gmail.com",
              href: "mailto:dasoll9613@gmail.com",
              note: "TODO: 실제 이메일",
            },
            {
              label: "Instagram",
              value: "@sol_.tudio",
              href: "https://www.instagram.com/sol_.tudio",
              external: true,
            },
            {
              label: "Name",
              value: "박다솔",
              sub: "UX Research 기반 Product Designer",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <p className="mb-3 text-[10px] tracking-[4px] text-black/25 uppercase">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block text-xl font-light text-text-primary transition-colors duration-300 hover:text-teal-accent md:text-2xl"
                >
                  {item.value}
                  <motion.span
                    className="ml-2 inline-block text-teal-accent/0 transition-colors group-hover:text-teal-accent"
                  >
                    ↗
                  </motion.span>
                </a>
              ) : (
                <div>
                  <p className="text-xl font-light md:text-2xl">{item.value}</p>
                  {item.sub && (
                    <p className="mt-2 text-xs text-text-muted">{item.sub}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
