"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: "--font-body-project" });

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const FA = {
  bg: "#F5F5F7",
  bgWhite: "#FFFFFF",
  fg: "#1D1D1F",
  blue: "#0071E3",
  blueLight: "#E8F1FB",
  green: "#6BC5A0",
  muted: "#6E6E73",
  border: "#D2D2D7",
};

const features = [
  { icon: "📋", bg: FA.blueLight, title: "Task Assignment", desc: "Parents create and assign household chores with due dates, difficulty levels, and visual guides for younger kids." },
  { icon: "⭐", bg: "#E8F8F0", title: "Reward System", desc: "Children earn points and unlock rewards for completing tasks — motivating participation through positive reinforcement." },
  { icon: "🔒", bg: "#FFF3E8", title: "Parental Controls", desc: "Face ID gating, child mode toggle, and a separate parent dashboard keep the app safe and age-appropriate." },
];

const palette = [
  { name: "Primary Blue", hex: "#3366FF", text: "#fff" },
  { name: "Soft Green", hex: "#6BC5A0", text: "#fff" },
  { name: "System Gray", hex: "#F5F5F7", text: FA.fg, border: FA.border },
  { name: "Near Black", hex: "#1D1D1F", text: "#fff" },
];

export default function FamilyProject() {
  return (
    <SmoothScroll>
      <Navbar />
      <main
        className={`${inter.variable} min-h-screen`}
        style={{ backgroundColor: FA.bg, color: FA.fg, fontFamily: "var(--font-body-project)" }}
      >

        {/* ── Hero ── */}
        <section
          style={{
            minHeight: "100vh",
            padding: "120px 112px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            background: FA.bgWhite,
          }}
        >
          {/* Radial glow */}
          <div style={{ position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", background: `radial-gradient(circle, rgba(0,113,227,0.05) 0%, rgba(107,197,160,0.03) 50%, transparent 70%)`, pointerEvents: "none" }} />

          <motion.span
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: FA.blueLight, color: FA.blue, borderRadius: "100px", padding: "6px 14px 6px 10px", fontSize: "13px", fontWeight: 500, marginBottom: "32px" }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.1}
          >
            <span style={{ width: "6px", height: "6px", background: FA.blue, borderRadius: "50%", display: "inline-block" }} />
            UX/UI · Mobile App · 2023
          </motion.span>

          <motion.h1
            style={{ fontSize: "clamp(52px, 8vw, 96px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: FA.fg, marginBottom: "24px" }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.3}
          >
            FAMIL<span style={{ color: FA.blue }}>Y</span>
          </motion.h1>

          <motion.p
            style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 300, color: FA.muted, maxWidth: "520px", lineHeight: 1.55, letterSpacing: "-0.01em", marginBottom: "48px" }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.5}
          >
            A family task app that brings everyone together. Parents assign chores, kids earn rewards.
            Accessible from age 4, with full parental controls.
          </motion.p>

          <motion.div
            style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "64px" }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.7}
          >
            {["UX/UI Design", "Mobile App", "iOS", "2023"].map((t) => (
              <span key={t} style={{ padding: "8px 16px", borderRadius: "100px", background: FA.bg, border: `0.5px solid ${FA.border}`, fontSize: "13px", fontWeight: 500, color: FA.muted }}>
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Image
              src="/projects/family/iPhone 13 Mockup.png"
              alt="Family App — Hero"
              width={280}
              height={560}
              className="h-auto"
              style={{ width: "280px", filter: `drop-shadow(0 40px 80px rgba(0,0,0,0.12)) drop-shadow(0 8px 24px rgba(0,113,227,0.1))` }}
            />
          </motion.div>
        </section>

        {/* ── Features ── */}
        <section style={{ padding: "80px 112px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", color: FA.blue, marginBottom: "12px", textAlign: "center" }}>Core Features</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.025em", color: FA.fg, textAlign: "center", marginBottom: "16px" }}>
              Designed for every family member
            </h2>
            <p style={{ fontSize: "17px", fontWeight: 300, color: FA.muted, textAlign: "center", maxWidth: "440px", margin: "0 auto 60px", lineHeight: 1.6 }}>
              From toddlers to parents — one app that works for everyone.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {features.map((f) => (
                <div key={f.title} style={{ background: FA.bgWhite, borderRadius: "20px", padding: "32px", border: `0.5px solid ${FA.border}` }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: f.bg, marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontSize: "17px", fontWeight: 600, color: FA.fg, letterSpacing: "-0.01em", marginBottom: "8px" }}>{f.title}</h3>
                  <p style={{ fontSize: "14px", fontWeight: 300, color: FA.muted, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Final Design ── */}
        <section style={{ padding: "0 112px 80px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", color: FA.blue, marginBottom: "12px", textAlign: "center" }}>Final Design</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.025em", color: FA.fg, textAlign: "center", marginBottom: "16px" }}>
              Every screen, considered
            </h2>
            <p style={{ fontSize: "17px", fontWeight: 300, color: FA.muted, textAlign: "center", maxWidth: "380px", margin: "0 auto 48px", lineHeight: 1.6 }}>
              Clean, playful, and purposeful.
            </p>
            <div style={{ background: FA.fg, borderRadius: "24px", overflow: "hidden" }}>
              <Image src="/projects/family/51 1.png" alt="Family App — Final design" width={1400} height={900} className="w-full h-auto" />
            </div>
          </motion.div>
        </section>

        {/* ── Process ── */}
        <section style={{ padding: "80px 112px", background: FA.bgWhite }}>
          <motion.div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <div>
              <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", color: FA.blue, marginBottom: "12px" }}>Design Process</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.025em", color: FA.fg, marginBottom: "16px", lineHeight: 1.1 }}>
                Research-led, user-first
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.75, color: FA.muted, fontWeight: 300, marginBottom: "16px" }}>
                The design began with two proto-personas: Pedro, a busy parent needing visibility
                into household contributions, and Julieta, a child motivated by play and recognition.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.75, color: FA.muted, fontWeight: 300 }}>
                Five structured phases — Empathize, Define, Ideate, Prototype, Test — guided every
                decision, from information architecture to the visual reward animations.
              </p>
            </div>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: `0.5px solid ${FA.border}`, background: FA.bg }}>
              <Image src="/projects/family/Group 18.png" alt="Family — Design process" width={700} height={200} className="w-full h-auto" />
            </div>
          </motion.div>
        </section>

        {/* ── Key Screens ── */}
        <section style={{ padding: "80px 112px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", color: FA.blue, marginBottom: "12px", textAlign: "center" }}>Key Screens</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.025em", color: FA.fg, textAlign: "center", marginBottom: "48px" }}>
              The moments that matter
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { src: "/projects/family/21 3.png", alt: "Family — Face ID screen" },
                { src: "/projects/family/24 1.png", alt: "Family — Home screen" },
              ].map(({ src, alt }) => (
                <div key={src} style={{ background: FA.bgWhite, borderRadius: "20px", overflow: "hidden", border: `0.5px solid ${FA.border}` }}>
                  <Image src={src} alt={alt} width={700} height={500} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Color Palette ── */}
        <section style={{ padding: "0 112px 80px", background: FA.bgWhite }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", color: FA.blue, paddingTop: "80px", marginBottom: "12px" }}>Brand Identity</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.025em", color: FA.fg, marginBottom: "48px" }}>
              Color System
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
              {palette.map((c) => (
                <div key={c.name} style={{ borderRadius: "20px", overflow: "hidden", border: `0.5px solid ${FA.border}` }}>
                  <div style={{ height: "100px", background: c.hex, border: c.border ? `0.5px solid ${c.border}` : undefined }} />
                  <div style={{ padding: "16px", background: FA.bgWhite }}>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: FA.fg, letterSpacing: "-0.01em", marginBottom: "2px" }}>{c.name}</p>
                    <p style={{ fontSize: "12px", fontFamily: "monospace", color: FA.muted }}>{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Usability Testing ── */}
        <section style={{ padding: "80px 112px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", color: FA.blue, marginBottom: "12px", textAlign: "center" }}>Validation</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.025em", color: FA.fg, textAlign: "center", marginBottom: "48px" }}>
              Usability Testing
            </h2>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: `0.5px solid ${FA.border}`, background: FA.bgWhite }}>
              <Image src="/projects/family/44 1.png" alt="Family — Usability testing" width={1400} height={900} className="w-full h-auto" />
            </div>
          </motion.div>
        </section>

        {/* ── Closing ── */}
        <motion.section
          style={{ padding: "100px 112px", background: `linear-gradient(180deg, ${FA.bgWhite} 0%, ${FA.bg} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <h2 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, letterSpacing: "-0.03em", color: FA.fg, marginBottom: "16px", lineHeight: 1.1 }}>
            Every chore<br /><span style={{ color: FA.blue }}>well done.</span>
          </h2>
          <p style={{ fontSize: "17px", color: FA.muted, fontWeight: 300, marginBottom: "40px", maxWidth: "360px", lineHeight: 1.6 }}>
            Making family collaboration feel rewarding for everyone involved.
          </p>
          <span style={{ display: "inline-block", background: FA.blue, color: "#fff", borderRadius: "100px", padding: "12px 28px", fontSize: "15px", fontWeight: 600, letterSpacing: "-0.01em" }}>
            Family App · 2023
          </span>
        </motion.section>

        {/* ── Navigation ── */}
        <section style={{ padding: "40px 112px 80px", borderTop: `0.5px solid ${FA.border}`, background: FA.bgWhite }}>
          <div className="flex justify-between items-center">
            <Link href="/" style={{ fontSize: "14px", fontWeight: 500, color: FA.blue }}>
              &larr; Back to Home
            </Link>
            <Link href="/projects/twins-music-house" style={{ fontSize: "14px", fontWeight: 500, color: FA.blue }}>
              Next Project &rarr;
            </Link>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}
