"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export function ProjectNav({
  prev,
  next,
}: {
  prev: Project | null;
  next: Project | null;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-white/5 py-16"
    >
      <div className="mx-auto max-w-4xl px-6 flex justify-between items-center">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col items-start gap-1"
          >
            <span className="text-xs text-text-muted">← Previous</span>
            <span className="text-lg text-text-primary group-hover:text-teal-accent transition-colors">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/#projects"
          className="text-sm text-text-muted hover:text-teal-accent transition-colors"
        >
          All Projects
        </Link>

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end gap-1"
          >
            <span className="text-xs text-text-muted">Next →</span>
            <span className="text-lg text-text-primary group-hover:text-teal-accent transition-colors">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </motion.div>
  );
}
