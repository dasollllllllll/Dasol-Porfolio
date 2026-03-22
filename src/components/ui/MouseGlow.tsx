"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useEffect, useState } from "react";

export function MouseGlow() {
  const { x, y } = useMousePosition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 h-[400px] w-[400px] rounded-full bg-teal-accent/5 blur-[100px]"
      animate={{ x: x - 200, y: y - 200 }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  );
}
