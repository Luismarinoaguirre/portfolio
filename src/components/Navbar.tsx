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
        className="fixed top-0 left-0 right-0 z-50"
        style={{ paddingLeft: "112px", paddingRight: "112px" }}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between h-20 md:h-28 mt-4">
          {/* Logo — left */}
          <Link href="/" className="hover:opacity-70 transition-opacity duration-300 z-10 flex-shrink-0">
            <Image src="/logo-dark.png" alt="LM" width={52} height={52} className="invert" />
          </Link>

          {/* Desktop — centered pill nav */}
          <div className="hidden md:flex items-center">
            <nav
              style={{ padding: "5px 6px", gap: "6px" }}
              className={`flex items-center rounded-full transition-all duration-500 ${
                isScrolled
                  ? "bg-white/[0.10] backdrop-blur-2xl border border-white/[0.10]"
                  : "bg-white/[0.07] backdrop-blur-xl border border-white/[0.07]"
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{ padding: "14px 32px", fontSize: "18px" }}
                  className="text-muted hover:text-accent rounded-full hover:bg-white/[0.06] transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Spacer to balance logo — keeps pill centered */}
          <div className="hidden md:block" style={{ width: "52px" }} />

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
