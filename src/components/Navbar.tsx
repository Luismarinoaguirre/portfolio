"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GooeyInput } from "./ui/gooey-input";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "About Me", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio-theme") as "light" | "dark") || "light";
    }
    return "light";
  });

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        backgroundColor: "var(--foreground)",
        color: "var(--background)",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--foreground)";
        e.currentTarget.style.transform = "none";
      }}
    >
      {theme === "light" ? (
        /* Moon icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z" />
        </svg>
      ) : (
        /* Sun icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
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
