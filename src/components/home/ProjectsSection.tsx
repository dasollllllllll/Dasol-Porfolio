"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "@/components/home/ProjectModal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="text-xs tracking-[3px] text-teal-accent uppercase">
            /02
          </span>
          <div className="h-px w-8 bg-teal-accent/30" />
          <span className="text-xs tracking-[3px] text-text-muted uppercase">
            Selected Work
          </span>
        </motion.div>

        {/* Project list */}
        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="group w-full text-left"
              >
                <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                  {/* Image */}
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-lg ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.thumbnail || `/images/${project.slug}/01.png`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />

                    {/* View overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm text-white backdrop-blur-sm">
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`flex flex-col gap-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs tracking-[3px] uppercase"
                        style={{ color: project.color }}
                      >
                        {project.number}
                      </span>
                      <div className="h-px flex-1 bg-white/[0.06]" />
                      <span className="text-xs text-text-muted">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-extralight transition-colors group-hover:text-teal-accent md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-text-secondary">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-text-muted transition-colors group-hover:text-teal-accent">
                      <span>View Project</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
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
