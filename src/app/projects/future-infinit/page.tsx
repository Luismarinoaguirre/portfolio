"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue, DM_Mono, DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const dmMono = DM_Mono({ weight: ["300", "400"], subsets: ["latin"], variable: "--font-mono-project" });
const dmSans = DM_Sans({ weight: ["300", "400", "500"], subsets: ["latin"], variable: "--font-body-project" });

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const colors = [
  { name: "Mars Red", hex: "#C41E1E", text: "#fff" },
  { name: "Mars Yellow", hex: "#F5A623", text: "#080808" },
  { name: "Pure White", hex: "#FFFFFF", text: "#080808" },
  { name: "Pure Black", hex: "#000000", text: "#ebebeb" },
];

const FI = {
  bg: "#080808",
  fg: "#ebebeb",
  red: "#C41E1E",
  muted: "#555555",
  border: "#1a1a1a",
};

export default function FutureInfinit() {
  return (
    <SmoothScroll>
      <Navbar />
      <main
        className={`${bebas.variable} ${dmMono.variable} ${dmSans.variable} min-h-screen`}
        style={{ backgroundColor: FI.bg, color: FI.fg }}
      >

        {/* ── Hero ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 112px 60px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background ghost text */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(120px, 20vw, 280px)",
              color: FI.red,
              opacity: 0.07,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            FUTURE
          </span>

          <motion.p
            style={{
              fontFamily: "var(--font-mono-project)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: FI.red,
              marginBottom: "24px",
            }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.1}
          >
            UX/UI · E-Commerce · 2024
          </motion.p>

          <motion.h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(80px, 14vw, 200px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: FI.fg,
            }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.3}
          >
            Future<br />
            <span style={{ color: FI.red }}>Infinit</span>
          </motion.h1>

          <motion.div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: "48px",
            }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.6}
          >
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: FI.muted, maxWidth: "480px", fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
              A disruptive sneaker e-commerce for urban self-lacing shoes. Where technology
              meets street culture — a shopping platform as bold as the product it sells.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
              {["UX/UI Design", "E-Commerce", "Web"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono-project)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: FI.muted,
                    border: `1px solid ${FI.border}`,
                    padding: "4px 12px",
                    borderRadius: "2px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ height: "1px", background: `linear-gradient(to right, ${FI.red}, transparent)`, marginTop: "40px" }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.9}
          />
        </section>

        {/* ── Website Demo Video (full-bleed) ── */}
        <motion.section
          style={{ position: "relative", overflow: "hidden" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ position: "relative", width: "100%", height: "85vh", overflow: "hidden" }}>
            <video
              src="/videos/future-infinit-hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
            />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 60%, ${FI.bg} 100%)` }} />
            <span
              style={{
                position: "absolute",
                bottom: "40px",
                right: "112px",
                fontFamily: "var(--font-display)",
                fontSize: "80px",
                color: FI.red,
                lineHeight: 1,
                opacity: 0.9,
              }}
            >
              01
            </span>
          </div>
        </motion.section>

        {/* ── Mockup Split ── */}
        <motion.div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "80vh" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          custom={0.1}
        >
          {/* Red panel */}
          <div style={{ padding: "80px 112px", display: "flex", flexDirection: "column", justifyContent: "center", background: FI.red }}>
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "20px" }}>
              Product Presentation
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1, color: "#fff", marginBottom: "24px" }}>
              Mockups
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", maxWidth: "380px", fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
              Each product was carefully presented in a natural environment, conveying the
              connection between urban technology and organic elements that inspire the brand.
            </p>
          </div>
          {/* Video panel */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <video
              src="/videos/future-infinit-mockup.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </motion.div>

        {/* ── Mobile ── */}
        <section style={{ padding: "120px 112px", display: "flex", alignItems: "flex-start", gap: "80px" }}>
          <motion.div
            style={{ flex: 1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: FI.red, marginBottom: "20px" }}>
              Mobile Experience
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1, marginBottom: "24px" }}>
              Responsive Design
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: FI.muted, maxWidth: "400px", fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
              The mobile version preserves the full editorial energy of the desktop — bold
              typography, full-bleed imagery, and a purchase flow built for speed.
            </p>
          </motion.div>
          <motion.div
            style={{ flexShrink: 0, width: "300px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.3}
          >
            {/* Phone mockup shell */}
            <div style={{ position: "relative", filter: "drop-shadow(0 40px 80px rgba(196,30,30,0.25))" }}>
              {/* Side buttons */}
              <div style={{ position: "absolute", right: "-4px", top: "110px", width: "4px", height: "44px", background: "#2c2c2e", borderRadius: "0 3px 3px 0" }} />
              <div style={{ position: "absolute", left: "-4px", top: "88px", width: "4px", height: "32px", background: "#2c2c2e", borderRadius: "3px 0 0 3px" }} />
              <div style={{ position: "absolute", left: "-4px", top: "132px", width: "4px", height: "56px", background: "#2c2c2e", borderRadius: "3px 0 0 3px" }} />

              {/* Frame + screen */}
              <div
                style={{
                  border: "10px solid #1c1c1e",
                  borderRadius: "44px",
                  overflow: "hidden",
                  background: "#000",
                  boxShadow: "inset 0 0 0 1px #3a3a3a",
                  position: "relative",
                }}
              >
                {/* Dynamic Island */}
                <div style={{
                  position: "absolute", top: 0, left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px", height: "26px",
                  background: "#1c1c1e",
                  borderRadius: "0 0 18px 18px",
                  zIndex: 2,
                }} />
                <video
                  src="/videos/future-infinit-mobile.mp4"
                  autoPlay loop muted playsInline
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Color Palette ── */}
        <section style={{ padding: "0 0 0", background: "#0d0d0d" }}>
          <motion.div
            style={{ padding: "80px 112px 40px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: FI.red, marginBottom: "20px" }}>
              Brand Identity
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 5vw, 72px)", lineHeight: 1, marginBottom: "48px" }}>
              Color
            </h2>
          </motion.div>
          <motion.div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.2}
          >
            {colors.map((c) => (
              <div
                key={c.name}
                style={{
                  aspectRatio: "1",
                  background: c.hex,
                  color: c.text,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px",
                  border: c.hex === "#000000" ? `1px solid ${FI.border}` : undefined,
                }}
              >
                <span style={{ fontFamily: "var(--font-mono-project)", fontSize: "12px", letterSpacing: "0.1em", opacity: 0.7 }}>
                  {c.hex}
                </span>
                <span style={{ fontFamily: "var(--font-body-project)", fontSize: "14px", fontWeight: 500, marginTop: "4px" }}>
                  {c.name}
                </span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Typography ── */}
        <section style={{ padding: "120px 112px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: FI.red, marginBottom: "20px" }}>
              Type System
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(60px, 10vw, 140px)", lineHeight: 1, marginBottom: "60px" }}>
              Bebas Neue
            </p>
            <div style={{ maxWidth: "900px" }}>
              {[
                { label: "Display", size: "50px", text: "Future Infinit" },
                { label: "Heading", size: "36px", text: "Self-Lacing Technology" },
                { label: "Subheading", size: "24px", text: "Urban Sneaker Collection" },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "20px 0", borderTop: `1px solid ${FI.border}` }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: row.size }}>{row.text}</span>
                  <span style={{ fontFamily: "var(--font-mono-project)", fontSize: "11px", color: FI.muted, letterSpacing: "0.1em" }}>
                    {row.size} · {row.label}
                  </span>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "20px 0", borderTop: `1px solid ${FI.border}`, borderBottom: `1px solid ${FI.border}` }}>
                <span style={{ fontFamily: "var(--font-body-project)", fontSize: "15px", color: FI.muted, fontWeight: 300, maxWidth: "600px", lineHeight: 1.6 }}>
                  DM Sans — body text, descriptions, labels, and supporting copy throughout the interface.
                </span>
                <span style={{ fontFamily: "var(--font-mono-project)", fontSize: "11px", color: FI.muted, letterSpacing: "0.1em", flexShrink: 0, marginLeft: "24px" }}>
                  15px · Body
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Closing ── */}
        <motion.section
          style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 112px", position: "relative", overflow: "hidden" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(196,30,30,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(80px, 18vw, 240px)", lineHeight: 1, position: "relative" }}>
            MOVE<br />
            <span style={{ color: FI.red }}>FAST.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: FI.muted, marginTop: "24px", position: "relative" }}>
            Future Infinit · 2024
          </p>
        </motion.section>

        {/* ── Navigation ── */}
        <section style={{ padding: "40px 112px 80px", borderTop: `1px solid ${FI.border}` }}>
          <div className="flex justify-between items-center">
            <Link href="/" className="text-muted hover:text-foreground transition-colors" style={{ fontSize: "16px" }}>
              &larr; Back to Home
            </Link>
            <Link href="/projects/daly-nosh" style={{ fontSize: "16px", color: FI.red }}>
              Next Project &rarr;
            </Link>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}
