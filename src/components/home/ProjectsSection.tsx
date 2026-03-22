"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "@/components/home/ProjectModal";

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8 }}
    >
      <button onClick={onClick} className="group w-full text-left">
        <div
          className={`grid gap-8 md:gap-16 items-center ${
            isReversed ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"
          }`}
        >
          {/* Image with parallax */}
          <div
            className={`relative overflow-hidden rounded-xl ${
              isReversed ? "md:order-2" : ""
            }`}
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[16/10]"
            >
              <Image
                src={project.thumbnail || `/images/${project.slug}/01.png`}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
              />
            </motion.div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
              <motion.span
                initial={false}
                className="rounded-full border border-white/60 bg-black/30 px-8 py-3 text-sm tracking-wider text-white backdrop-blur-md"
              >
                View Project →
              </motion.span>
            </div>

            {/* Project number overlay */}
            <span
              className="absolute bottom-4 right-4 text-6xl font-extralight opacity-20 transition-opacity group-hover:opacity-40"
              style={{ color: project.color }}
            >
              {project.number}
            </span>
          </div>

          {/* Info */}
          <div
            className={`flex flex-col gap-5 ${
              isReversed ? "md:order-1 md:text-right md:items-end" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`flex items-center gap-3 ${isReversed ? "flex-row-reverse" : ""}`}
            >
              <span
                className="text-[10px] tracking-[4px] uppercase"
                style={{ color: project.color }}
              >
                Project {project.number}
              </span>
              <div className="h-px w-12 bg-white/[0.08]" />
              <span className="text-[10px] tracking-[2px] text-text-muted uppercase">
                {project.category}
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-extralight tracking-tight transition-colors duration-300 group-hover:text-teal-accent/70 md:text-5xl"
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-md text-sm leading-relaxed text-text-secondary"
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={`flex flex-wrap gap-2 ${isReversed ? "justify-end" : ""}`}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/[0.06] px-3 py-1 text-[11px] text-text-muted transition-colors group-hover:border-black/[0.12]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </button>

      {/* Divider */}
      {index < projects.length - 1 && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 h-px origin-left bg-gradient-to-r from-black/[0.06] via-black/[0.03] to-transparent"
        />
      )}
    </motion.div>
  );
}

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
          className="mb-24 flex items-center gap-4"
        >
          <span className="text-xs tracking-[3px] text-black/25 uppercase">
            /02
          </span>
          <div className="h-px w-8 bg-black/5" />
          <span className="text-xs tracking-[3px] text-text-muted uppercase">
            Selected Work
          </span>
        </motion.div>

        {/* Marquee */}
        <div className="mb-20 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="mr-8 text-[clamp(3rem,8vw,7rem)] font-extralight tracking-tight text-black/[0.04]"
              >
                CurioCity — GROUNDED — HCI — CurioCity — GROUNDED — HCI —{" "}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
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
