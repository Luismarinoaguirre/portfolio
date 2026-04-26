"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
              src="/projects/daly-nosh/Untitled 2.png"
              alt="Daly Nosh — Splash Screen"
              width={260}
              height={520}
              className="h-auto"
              style={{
                width: "260px",
                transform: "rotate(3deg)",
                filter: `drop-shadow(0 40px 80px rgba(232,134,58,0.18)) drop-shadow(0 8px 24px rgba(0,0,0,0.10))`,
              }}
            />
          </motion.div>
        </section>

        {/* ── App Screens ── */}
        <section style={{ padding: "0 112px 120px", background: DN.bg2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: DN.orange, fontFamily: "var(--font-body-project)", paddingTop: "80px", marginBottom: "16px" }}>
              App Screens
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.15, color: DN.fg, marginBottom: "48px" }}>
              A complete mobile experience
            </h2>
            <div style={{ borderRadius: "24px", overflow: "hidden", border: `1px solid ${DN.border}`, background: DN.bg }}>
              <Image
                src="/projects/daly-nosh/195shots_so 1.png"
                alt="Daly Nosh — App screens"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </section>

        {/* ── Hand Mockup Split ── */}
        <section style={{ padding: "120px 112px" }}>
          <motion.div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <div style={{ borderRadius: "16px", overflow: "hidden" }}>
              <Image
                src="/projects/daly-nosh/iPhone14 Pro in Hand Mockup 1.png"
                alt="Daly Nosh — In Hand"
                width={700}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: DN.orange, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>
                In Context
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 600, lineHeight: 1.15, color: DN.fg, marginBottom: "24px" }}>
                Designed for real people
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: DN.muted, fontFamily: "var(--font-body-project)", fontWeight: 300, marginBottom: "16px" }}>
                The app needed to feel approachable for everyday users — not clinical or cold.
                Every screen was validated through user testing with personas built from real research.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: DN.muted, fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
                From the onboarding splash to the checkout flow, each interaction was optimized
                for clarity and warmth — consistent with the brand&apos;s healthy, positive identity.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── Personas ── */}
        <section style={{ padding: "0 112px 120px", background: DN.bg2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: DN.orange, fontFamily: "var(--font-body-project)", paddingTop: "80px", marginBottom: "16px" }}>
              User Research
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.15, color: DN.fg, marginBottom: "48px" }}>
              Personas
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: `1px solid ${DN.border}` }}>
                <Image src="/projects/daly-nosh/foodie-persona2-ddd00a759d5af552ec8449c15fda2782 1.png" alt="Persona — Gabrielle" width={1400} height={900} className="w-full h-auto" />
              </div>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: `1px solid ${DN.border}` }}>
                <Image src="/projects/daly-nosh/foodie-persona-636974f86dba21c1068e41a158a40efe 1.png" alt="Persona — April" width={1400} height={900} className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Color Palette ── */}
        <section style={{ padding: "120px 112px" }}>
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

        {/* ── Logotype ── */}
        <section style={{ padding: "0 112px 120px", background: DN.bg2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: DN.orange, fontFamily: "var(--font-body-project)", paddingTop: "80px", marginBottom: "16px" }}>
              Brand Identity
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, lineHeight: 1.15, color: DN.fg, marginBottom: "48px" }}>
              Logotype
            </h2>
            <div style={{ background: "#fff", border: `1px solid ${DN.border}`, borderRadius: "24px", padding: "64px", display: "flex", justifyContent: "center", maxWidth: "600px", margin: "0 auto" }}>
              <Image src="/projects/daly-nosh/Group 1.png" alt="Daly Nosh — Logo" width={320} height={120} className="w-full h-auto" style={{ maxWidth: "320px" }} />
            </div>
          </motion.div>
        </section>

        {/* ── Moodboard ── */}
        <section style={{ padding: "120px 112px" }}>
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
              <Image src="/projects/daly-nosh/Frame 2416.png" alt="Daly Nosh — Moodboard" width={1400} height={900} className="w-full h-auto" />
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
            <Link href="/projects/malba-plus" style={{ fontSize: "16px", color: DN.orange }}>
              Next Project &rarr;
            </Link>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}
