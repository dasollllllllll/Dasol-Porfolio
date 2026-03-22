"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FloatingElementProps {
  count?: number;
}

export function FloatingElements({ count = 5 }: FloatingElementProps) {
  const [elements] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: 40 + Math.random() * 80,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full border border-teal-accent/10 bg-teal-accent/5"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `${el.y}%`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
