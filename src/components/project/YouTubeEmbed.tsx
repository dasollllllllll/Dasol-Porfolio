"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function getYouTubeId(url: string): string {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?#]+)/
  );
  return match?.[1] ?? "";
}

export function YouTubeEmbed({
  url,
  title,
}: {
  url: string;
  title?: string;
}) {
  const videoId = getYouTubeId(url);
  const [loaded, setLoaded] = useState(false);

  if (!videoId) {
    return (
      <div className="rounded-xl border border-white/5 bg-bg-secondary p-8 text-center">
        <p className="text-text-secondary">영상을 불러올 수 없습니다</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-teal-accent hover:underline"
        >
          YouTube에서 직접 보기 →
        </a>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-xl border border-white/5 aspect-video"
    >
      {!loaded ? (
        <button
          onClick={() => setLoaded(true)}
          className="group relative flex h-full w-full items-center justify-center"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-accent/90 transition-transform group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="h-6 w-6 translate-x-0.5"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          {title && (
            <p className="absolute bottom-4 left-4 z-10 text-sm text-white/80">
              {title}
            </p>
          )}
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title || "YouTube video"}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="h-full w-full"
        />
      )}
    </motion.div>
  );
}
