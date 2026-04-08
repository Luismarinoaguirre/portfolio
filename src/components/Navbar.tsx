"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-20"
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between h-20 md:h-24 mt-2">
          {/* Logo — bigger */}
          <Link href="/" className="hover:opacity-70 transition-opacity duration-300 z-10">
            <Image src="/logo-dark.png" alt="LM" width={40} height={40} className="invert" />
          </Link>

          {/* Desktop — centered pill nav, bigger */}
          <div className="hidden md:flex items-center">
            <nav
              className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500 ${
                isScrolled
                  ? "bg-white/[0.10] backdrop-blur-2xl border border-white/[0.10]"
                  : "bg-white/[0.07] backdrop-blur-xl border border-white/[0.07]"
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted hover:text-foreground px-5 py-2.5 rounded-full hover:bg-white/[0.06] transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* LinkedIn icon */}
          <a
            href="https://www.linkedin.com/in/luis-bautista-marino-aguirre-28aa96203/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.07] border border-white/[0.07] hover:bg-white/[0.12] transition-all duration-300 z-10"
          >
            <svg className="w-4 h-4 text-muted" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-10"
            aria-label="Menu"
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
              className="absolute block w-6 h-[1.5px] bg-foreground"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute block w-6 h-[1.5px] bg-foreground"
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
              className="absolute block w-6 h-[1.5px] bg-foreground"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-4xl font-light text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
