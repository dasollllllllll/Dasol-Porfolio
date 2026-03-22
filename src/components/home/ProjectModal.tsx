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
  const [direction, setDirection] = useState(1);

  const totalImages = project?.images ?? 0;
  const videoCount = project?.videos.length ?? 0;
  const totalSlides = totalImages + videoCount;

  const goNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, totalSlides]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(0);
    setDirection(1);
  }, [project?.slug]);

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

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      rotateY: dir > 0 ? 15 : -15,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      rotateY: dir > 0 ? -15 : 15,
      scale: 0.9,
    }),
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative flex h-full w-full flex-col items-center justify-center"
            style={{ perspective: "1200px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/60 to-transparent">
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
            <div className="relative flex h-full w-full items-center justify-center px-16 py-20">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex h-full w-full items-center justify-center"
                >
                  {!isVideoSlide ? (
                    <div className="relative h-full w-full max-w-6xl rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                      <Image
                        src={`/images/${project.slug}/${(currentIndex + 1).toString().padStart(2, "0")}.png`}
                        alt={`${project.title} - page ${currentIndex + 1}`}
                        fill
                        className="object-contain bg-bg-secondary"
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
                      <div className="rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                        <YouTubeEmbed
                          url={project.videos[videoIndex]}
                          title={`${project.title} 영상 ${videoIndex + 1}`}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            {currentIndex > 0 && (
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20 hover:scale-110 transition-all"
                aria-label="Previous"
              >
                ←
              </button>
            )}
            {currentIndex < totalSlides - 1 && (
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20 hover:scale-110 transition-all"
                aria-label="Next"
              >
                →
              </button>
            )}

            {/* Progress bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className="transition-all"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: currentIndex === i ? 24 : 6,
                      height: 6,
                      background:
                        currentIndex === i
                          ? project.color
                          : "rgba(255,255,255,0.25)",
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
