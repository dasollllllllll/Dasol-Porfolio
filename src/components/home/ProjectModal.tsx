"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { YouTubeEmbed } from "@/components/project/YouTubeEmbed";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total slides = images + each video as separate slide
  const totalImages = project?.images ?? 0;
  const videoCount = project?.videos.length ?? 0;
  const totalSlides = totalImages + videoCount;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project?.slug]);

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose, goNext, goPrev]);

  const isVideoSlide = currentIndex >= totalImages;
  const videoIndex = currentIndex - totalImages;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative flex h-full w-full flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs tracking-[3px] uppercase"
                  style={{ color: project.color }}
                >
                  {project.number}
                </span>
                <span className="text-sm text-text-primary font-medium">
                  {project.title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-text-muted">
                  {currentIndex + 1} / {totalSlides}
                </span>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Slide content */}
            <div className="relative flex h-full w-full items-center justify-center px-16 py-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-full w-full items-center justify-center"
                >
                  {!isVideoSlide ? (
                    <div className="relative h-full w-full max-w-6xl">
                      <Image
                        src={`/images/${project.slug}/${(currentIndex + 1).toString().padStart(2, "0")}.png`}
                        alt={`${project.title} - page ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        quality={90}
                        priority
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-4xl">
                      <p
                        className="text-xs tracking-[3px] uppercase text-center mb-6"
                        style={{ color: project.color }}
                      >
                        Video {videoCount > 1 ? videoIndex + 1 : ""}
                      </p>
                      <YouTubeEmbed
                        url={project.videos[videoIndex]}
                        title={`${project.title} 영상 ${videoIndex + 1}`}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            {currentIndex > 0 && (
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition-colors"
                aria-label="Previous"
              >
                ←
              </button>
            )}
            {currentIndex < totalSlides - 1 && (
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition-colors"
                aria-label="Next"
              >
                →
              </button>
            )}

            {/* Progress dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="transition-all"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div
                    className="rounded-full transition-all"
                    style={{
                      width: currentIndex === i ? 20 : 6,
                      height: 6,
                      background:
                        currentIndex === i
                          ? project.color
                          : "rgba(255,255,255,0.3)",
                    }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
