"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedText>
          <p className="text-sm text-text-muted uppercase tracking-widest mb-4">
            Projects
          </p>
        </AnimatedText>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-bg-card transition-all duration-300 hover:border-teal-accent/30 hover:shadow-[0_0_40px_rgba(0,173,181,0.1)] hover:-translate-y-2">
                  <div
                    className="h-48 w-full"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                    }}
                  >
                    <div className="flex h-full items-center justify-center">
                      <span
                        className="text-4xl font-light opacity-20"
                        style={{ color: project.color }}
                      >
                        {project.number}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p
                      className="text-xs font-medium tracking-widest mb-2"
                      style={{ color: project.color }}
                    >
                      {project.number}
                    </p>
                    <h3 className="text-xl font-medium text-text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {project.subtitle}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-3 py-1 text-xs"
                          style={{
                            background: `${project.color}15`,
                            color: project.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
                      <span>자세히 보기</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
