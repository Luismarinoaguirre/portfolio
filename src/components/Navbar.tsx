"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GooeyInput } from "./ui/gooey-input";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "About Me", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function subscribeTheme(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
function getThemeSnapshot() {
  return document.documentElement.getAttribute("data-theme") === "dark";
}
const getThemeServerSnapshot = () => false;

function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  };

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Switch theme"
      style={{
        position: "relative",
        zIndex: 60,
        width: "50px",
        height: "28px",
        padding: "2px",
        borderRadius: "999px",
        border: "none",
        background: isDark ? "var(--accent)" : "var(--fg-20)",
        flexShrink: 0,
        cursor: "pointer",
        transition: "background 0.3s",
      }}
    >
      <span
        style={{
          display: "block",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          transform: isDark ? "translateX(22px)" : "translateX(0)",
          transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
          pointerEvents: "none",
        }}
      />
    </button>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      if (currentY > 100) {
        setIsHidden(currentY > lastY);
      } else {
        setIsHidden(false);
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
        animate={{ y: isHidden && !isMobileOpen ? "-200%" : 0 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 left-0 right-0 z-50 section-px"
      >
        <div className="section-container flex items-center justify-between h-20 md:h-28 mt-4">
          {/* Logo — left */}
          <Link
            href="/#top"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "12px",
              border: "1.5px solid var(--foreground)",
              background: "var(--glass-soft)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "18px",
              color: "var(--foreground)",
              textDecoration: "none",
              flexShrink: 0,
              transition: "opacity 0.3s",
            }}
          >
            LM
          </Link>

          {/* Desktop — centered pill nav */}
          <div className="hidden md:flex items-center">
            <nav
              style={{
                padding: "5px 6px",
                gap: "6px",
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                background: isScrolled ? "var(--glass-strong)" : "var(--glass)",
                backdropFilter: isScrolled ? "blur(24px)" : "blur(16px)",
                WebkitBackdropFilter: isScrolled ? "blur(24px)" : "blur(16px)",
                border: "1px solid var(--border)",
                transition: "all 0.5s",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    padding: "clamp(10px, 1.5vw, 14px) clamp(16px, 2.5vw, 28px)",
                    fontSize: "clamp(14px, 1.4vw, 16px)",
                    whiteSpace: "nowrap",
                    color: "var(--muted)",
                    borderRadius: "999px",
                    textDecoration: "none",
                    transition: "color 0.3s, background 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.background = "var(--glass-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side: Search + Theme Toggle */}
          <div className="hidden md:flex items-center" style={{ gap: "12px" }}>
            <GooeyInput placeholder="Search..." />
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-10"
            aria-label="Menu"
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
              className="absolute block w-6 bg-foreground"
              style={{ height: "1.5px" }}
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute block w-6 bg-foreground"
              style={{ height: "1.5px" }}
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
              className="absolute block w-6 bg-foreground"
              style={{ height: "1.5px" }}
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
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{ backgroundColor: "var(--background)" }}
          >
            <nav className="flex flex-col items-center" style={{ gap: "40px" }}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    style={{
                      fontSize: "36px",
                      fontWeight: 300,
                      color: "var(--foreground)",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: "16px" }}
              >
                <ThemeToggle />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
