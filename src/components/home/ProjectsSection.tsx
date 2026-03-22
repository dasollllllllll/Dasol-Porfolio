"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ProjectModal } from "@/components/home/ProjectModal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              <button
                onClick={() => setSelectedProject(project)}
                className="h-full w-full text-left"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-bg-card transition-all duration-300 hover:border-teal-accent/30 hover:shadow-[0_0_40px_rgba(0,173,181,0.1)] hover:-translate-y-2">
                  {/* Thumbnail: first PDF page */}
                  <div className="relative h-48 w-full shrink-0 overflow-hidden">
                    <Image
                      src={project.thumbnail || `/images/${project.slug}/01.png`}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
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

                    <div className="mt-auto pt-4 flex items-center gap-2 text-sm text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
                      <span>자세히 보기</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
