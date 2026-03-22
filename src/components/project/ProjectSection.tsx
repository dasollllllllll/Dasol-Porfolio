"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";
import type { ProjectSection as ProjectSectionType } from "@/data/projects";

export function ProjectSection({
  section,
  color,
}: {
  section: ProjectSectionType;
  color: string;
}) {
  return (
    <section id={section.id} className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs tracking-[3px] uppercase mb-4"
            style={{ color }}
          >
            {section.label}
          </p>

          <h2 className="text-2xl font-light md:text-3xl leading-relaxed">
            {section.title}
          </h2>

          {section.content && (
            <p className="mt-6 text-text-secondary leading-relaxed">
              {section.content}
            </p>
          )}

          {section.bullets && (
            <ul className="mt-6 space-y-3">
              {section.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: color }}
                  />
                  {bullet}
                </motion.li>
              ))}
            </ul>
          )}

          {section.stats && (
            <div className="mt-10 flex gap-12">
              {section.stats.map((stat) => (
                <div key={stat.label}>
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    className="text-5xl font-light"
                    duration={2}
                  />
                  <p className="mt-2 text-sm text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {section.quotes && (
            <div className="mt-8 space-y-4">
              {section.quotes.map((quote, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-lg border border-white/5 bg-bg-secondary px-6 py-4 text-text-secondary italic"
                >
                  &ldquo;{quote}&rdquo;
                </motion.blockquote>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
