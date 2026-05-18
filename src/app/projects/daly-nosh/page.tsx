"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const lora = Lora({ weight: ["400", "600"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-display" });
const jakarta = Plus_Jakarta_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"], variable: "--font-body-project" });

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const DN = {
  bg: "#FDFCF8",
  bg2: "#F5F2EC",
  fg: "#1A1714",
  orange: "#E8863A",
  green: "#4A7A32",
  muted: "#8A8075",
  border: "#E8E2D9",
};

const paletteColors = [
  { name: "Orange", hex: "#E8863A" },
  { name: "Green", hex: "#5B8C3E" },
  { name: "Maroon", hex: "#4A2040" },
  { name: "Light Blue", hex: "#B8D8E8" },
];

function HandMockup() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 60, damping: 18 });
  const springRy = useSpring(ry, { stiffness: 60, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(x * 14);
    rx.set(-y * 10);
  };

  const handleMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", perspective: "1400px", cursor: "grab" }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute",
        inset: "10% 5% -5% 5%",
        background: "radial-gradient(ellipse at 50% 60%, rgba(232,134,58,0.20), transparent 60%)",
        filter: "blur(30px)",
        zIndex: 0,
        pointerEvents: "none",
      }} />
      <motion.div
        style={{
          rotateX: springRx,
          rotateY: springRy,
          transformStyle: "preserve-3d",
          position: "relative",
          zIndex: 1,
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/projects/daly-nosh/hand.png"
          alt="Daly Nosh — in hand"
          width={700}
          height={520}
          className="w-full h-auto"
          style={{ display: "block" }}
        />
      </motion.div>
    </div>
  );
}

export default function DalyNosh() {
  return (
    <SmoothScroll>
      <Navbar />
      <main
        className={`${lora.variable} ${jakarta.variable} min-h-screen`}
        style={{ backgroundColor: DN.bg, color: DN.fg }}
      >

        {/* ── Hero ── */}
        <section
          style={{
            padding: "140px 112px 100px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "flex-end",
            minHeight: "100vh",
          }}
        >
          {/* Left */}
          <div>
            <motion.span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
                fontWeight: 500,
                fontFamily: "var(--font-body-project)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: DN.orange,
                marginBottom: "28px",
              }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.1}
            >
              <span style={{ width: "24px", height: "1px", background: DN.orange, display: "inline-block" }} />
              UX/UI · Mobile App · 2024
            </motion.span>

            <motion.h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 7vw, 96px)",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: DN.fg,
                marginBottom: "28px",
              }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.3}
            >
              Daly<br />
              <em style={{ color: DN.orange }}>Nosh</em>
            </motion.h1>

            <motion.p
              style={{ fontSize: "16px", lineHeight: "1.8", color: DN.muted, maxWidth: "440px", fontFamily: "var(--font-body-project)", fontWeight: 300 }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.5}
            >
              A healthy food delivery app designed from scratch — from user research and
              personas to a complete interface with search, maps, cart, and profile.
              Built during the Open Bootcamp.
            </motion.p>

            <motion.div
              style={{ display: "flex", gap: "32px", marginTop: "48px" }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.7}
            >
              {[["Type", "Mobile App"], ["Role", "UX/UI Design"], ["Year", "2024"]].map(([label, val]) => (
                <div key={label}>
                  <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: DN.muted, fontFamily: "var(--font-body-project)", marginBottom: "4px" }}>{label}</p>
                  <p style={{ fontSize: "15px", fontWeight: 500, color: DN.fg, fontFamily: "var(--font-body-project)" }}>{val}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Phone */}
          <motion.div
            style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image
              src="/projects/daly-nosh/splash.png"
              alt="Daly Nosh — Splash Screen"
              width={260}
              height={520}
              className="h-auto"
              style={{
                width: "260px",
                transform: "rotate(3deg)",
                filter: `drop-shadow(0 40px 80px rgba(232,134,58,0.20)) drop-shadow(0 8px 24px rgba(0,0,0,0.12))`,
              }}
            />
          </motion.div>
        </section>

        {/* ── App Screens ── */}
        <section style={{ padding: "80px 112px 100px", background: DN.bg2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: DN.orange, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>
              App Screens
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.15, color: DN.fg, marginBottom: "48px" }}>
              A complete<br />mobile experience
            </h2>
            <div style={{ borderRadius: "24px", overflow: "hidden", border: `1px solid ${DN.border}`, background: DN.bg }}>
              <Image
                src="/projects/daly-nosh/screens.png"
                alt="Daly Nosh — App screens"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </section>

        {/* ── Hand Mockup + Text (3D tilt) ── */}
        <section style={{ padding: "100px 112px" }}>
          <motion.div
            style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "clamp(40px, 6vw, 100px)", alignItems: "center" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <HandMockup />
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: DN.orange, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>
                In Context
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600, lineHeight: 1.15, color: DN.fg, marginBottom: "24px" }}>
                Designed for<br />real people
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.9", color: DN.muted, fontFamily: "var(--font-body-project)", fontWeight: 300, marginBottom: "24px" }}>
                The app needed to feel approachable for everyday users — not clinical or cold.
                Every screen was validated through user testing with personas built from real research.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.9", color: DN.muted, fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
                From the onboarding splash to the checkout flow, each interaction was optimized
                for clarity and warmth — consistent with the brand&apos;s healthy, positive identity.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── Color Palette ── */}
        <section style={{ padding: "80px 112px 100px", background: DN.bg2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: DN.orange, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>
              Brand Identity
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.15, color: DN.fg, marginBottom: "48px" }}>
              Color Palette
            </h2>
            <div style={{ display: "flex", gap: "12px" }}>
              {paletteColors.map((c) => (
                <div key={c.name} style={{ flex: 1, borderRadius: "16px", overflow: "hidden" }}>
                  <div style={{ height: "120px", background: c.hex, border: c.hex === "#B8D8E8" ? `1px solid ${DN.border}` : undefined }} />
                  <div style={{ padding: "16px", background: DN.bg, border: `1px solid ${DN.border}`, borderTop: "none", borderRadius: "0 0 16px 16px" }}>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: DN.fg, fontFamily: "var(--font-body-project)", marginBottom: "2px" }}>{c.name}</p>
                    <p style={{ fontSize: "12px", fontFamily: "monospace", color: DN.muted }}>{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Logotype with anatomy grid ── */}
        <section style={{ padding: "100px 112px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: DN.orange, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>
              Brand Identity
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.15, color: DN.fg, marginBottom: "48px" }}>
              Logotype
            </h2>

            {/* Logo anatomy card */}
            <div style={{
              position: "relative",
              background: "#fff",
              border: `1px solid ${DN.border}`,
              borderRadius: "24px",
              padding: "100px 80px 96px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "760px",
              margin: "0 auto",
              overflow: "hidden",
            }}>
              {/* Corner marks */}
              {[
                { top: "22px", left: "22px", borderTop: "1.5px solid rgba(232,134,58,0.75)", borderLeft: "1.5px solid rgba(232,134,58,0.75)" },
                { top: "22px", right: "22px", borderTop: "1.5px solid rgba(232,134,58,0.75)", borderRight: "1.5px solid rgba(232,134,58,0.75)" },
                { bottom: "22px", left: "22px", borderBottom: "1.5px solid rgba(232,134,58,0.75)", borderLeft: "1.5px solid rgba(232,134,58,0.75)" },
                { bottom: "22px", right: "22px", borderBottom: "1.5px solid rgba(232,134,58,0.75)", borderRight: "1.5px solid rgba(232,134,58,0.75)" },
              ].map((style, i) => (
                <div key={i} style={{ position: "absolute", width: "14px", height: "14px", pointerEvents: "none", ...style }} />
              ))}

              {/* Meta labels */}
              <span style={{ position: "absolute", top: "26px", left: "56px", fontFamily: "var(--font-body-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,134,58,0.8)", pointerEvents: "none", zIndex: 1 }}>
                Construction
              </span>
              <span style={{ position: "absolute", bottom: "26px", right: "56px", fontFamily: "var(--font-body-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,134,58,0.8)", pointerEvents: "none", zIndex: 1 }}>
                Type Anatomy
              </span>

              {/* Anatomy grid overlay */}
              <div style={{ position: "absolute", inset: "56px", pointerEvents: "none", zIndex: 1 }}>
                {/* Horizontal rails */}
                {[
                  { top: "6%", opacity: 0.45 },
                  { top: "16%", opacity: 0.45, label: "Cap" },
                  { top: "30%", opacity: 0.7, label: "x-Top" },
                  { top: "72%", opacity: 0.7, label: "Baseline" },
                  { top: "86%", opacity: 0.45, label: "Desc." },
                  { top: "96%", opacity: 0.45 },
                ].map((rail, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: rail.top,
                      height: "1px",
                      background: `rgba(232,134,58,${rail.opacity})`,
                    }}
                  >
                    {rail.label && (
                      <span style={{
                        position: "absolute",
                        left: "-42px",
                        transform: "translateY(-50%)",
                        fontFamily: "var(--font-body-project)",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(232,134,58,0.85)",
                        whiteSpace: "nowrap",
                      }}>
                        {rail.label}
                      </span>
                    )}
                  </div>
                ))}

                {/* Vertical center dashed line */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "50%",
                  width: "1px",
                  background: "repeating-linear-gradient(to bottom, rgba(232,134,58,0.5) 0 4px, transparent 4px 8px)",
                }} />

                {/* Bowl ring */}
                <div style={{
                  position: "absolute",
                  top: "42%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  border: "1px solid rgba(74,122,50,0.55)",
                }} />
                <div style={{
                  position: "absolute",
                  top: "42%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "112px",
                  height: "112px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(74,122,50,0.35)",
                }} />

                {/* Cross-hair at bowl center */}
                <div style={{ position: "absolute", top: "42%", left: "50%", transform: "translate(-50%, -50%)", width: "12px", height: "12px" }}>
                  <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "rgba(74,122,50,0.9)", transform: "translateX(-0.5px)" }} />
                  <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "rgba(74,122,50,0.9)", transform: "translateY(-0.5px)" }} />
                </div>
              </div>

              {/* Logo image */}
              <Image
                src="/projects/daly-nosh/logo-handoff.png"
                alt="Daly Nosh — Logo"
                width={460}
                height={180}
                className="w-full h-auto"
                style={{ maxWidth: "460px", position: "relative", zIndex: 2 }}
              />
            </div>
          </motion.div>
        </section>

        {/* ── Moodboard ── */}
        <section style={{ padding: "80px 112px 100px", background: DN.bg2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: DN.orange, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>
              Visual Direction
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.15, color: DN.fg, marginBottom: "48px" }}>
              Moodboard
            </h2>
            <div style={{ borderRadius: "24px", overflow: "hidden", border: `1px solid ${DN.border}` }}>
              <Image src="/projects/daly-nosh/moodboard.png" alt="Daly Nosh — Moodboard" width={1400} height={900} className="w-full h-auto" />
            </div>
          </motion.div>
        </section>

        {/* ── Closing ── */}
        <motion.section
          style={{ padding: "120px 112px", background: DN.fg, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 600, lineHeight: 1.1, color: DN.bg }}>
            Eat well,<br />
            <em style={{ color: DN.orange }}>live better.</em>
          </h2>
          <p style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(253,252,248,0.35)", fontFamily: "var(--font-body-project)" }}>
            Daly Nosh · Open Bootcamp · 2024
          </p>
        </motion.section>

        {/* ── Navigation ── */}
        <section style={{ padding: "40px 112px 80px", borderTop: `1px solid ${DN.border}`, background: DN.bg }}>
          <div className="flex justify-between items-center">
            <Link href="/" style={{ fontSize: "16px", color: DN.muted }}>
              &larr; Back to Home
            </Link>
            <Link href="/projects/twins-music-house" style={{ fontSize: "16px", color: DN.orange }}>
              Next Project &rarr;
            </Link>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}
