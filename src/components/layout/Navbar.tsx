"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-black/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link
            href="/"
            className="text-sm font-medium tracking-[3px] text-text-primary uppercase hover:text-white/80 transition-colors"
          >
            Dasol Park
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {isHome
              ? navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-xs tracking-[2px] text-text-muted uppercase transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </button>
                ))
              : (
                <Link
                  href="/"
                  className="text-xs tracking-[2px] text-text-muted uppercase transition-colors hover:text-text-primary"
                >
                  ← Back
                </Link>
              )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-5 bg-text-primary"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[1px] w-5 bg-text-primary"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-5 bg-text-primary"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-bg-primary/95 backdrop-blur-xl"
          >
            {isHome &&
              navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-extralight tracking-widest text-text-primary uppercase hover:text-white/80 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
