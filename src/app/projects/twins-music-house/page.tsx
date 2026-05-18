"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const cormorant = Cormorant_Garamond({ weight: ["300", "400", "600"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-display" });
const spaceGrotesk = Space_Grotesk({ weight: ["300", "400", "500"], subsets: ["latin"], variable: "--font-body-project" });

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const TW = {
  bg: "#060606",
  bg2: "#0d0d0d",
  fg: "#E8E8E2",
  green: "#0E7A09",
  muted: "#4a4a46",
  border: "#141414",
};

export default function TwinsMusicHouse() {
  return (
    <SmoothScroll>
      <Navbar />
      <main
        className={`${cormorant.variable} ${spaceGrotesk.variable} min-h-screen`}
        style={{ backgroundColor: TW.bg, color: TW.fg }}
      >

        {/* ── Hero ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "grid",
            gridTemplateRows: "1fr auto",
            padding: "0 112px 60px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingTop: "160px", paddingBottom: "60px" }}>
            <motion.div
              style={{ width: "1px", height: "80px", background: `linear-gradient(to bottom, transparent, ${TW.green})`, marginBottom: "32px" }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 10vw, 140px)",
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                color: TW.fg,
              }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.5}
            >
              Twins<br />
              <em style={{ color: TW.green }}>Music</em><br />
              House
            </motion.h1>
          </div>

          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "40px",
              borderTop: `1px solid ${TW.border}`,
              paddingTop: "32px",
            }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.9}
          >
            {[
              ["Type", "Landing Page"],
              ["Role", "UX/UI Design"],
            ].map(([label, val]) => (
              <div key={label}>
                <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: TW.muted, fontFamily: "var(--font-body-project)", marginBottom: "8px" }}>{label}</p>
                <p style={{ fontSize: "15px", fontWeight: 300, color: TW.fg, fontFamily: "var(--font-body-project)" }}>{val}</p>
              </div>
            ))}
            <div>
              <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: TW.muted, fontFamily: "var(--font-body-project)", marginBottom: "8px" }}>About</p>
              <p style={{ fontSize: "14px", lineHeight: "1.8", color: TW.muted, fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
                International creative music agency — sonic branding, composition and production for advertising.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── iMac Mockup ── */}
        <section style={{ padding: "0 112px 120px", background: TW.bg2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: TW.green, fontFamily: "var(--font-body-project)", paddingTop: "80px", marginBottom: "20px" }}>Web Design</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 300, lineHeight: 1.1, color: TW.fg, marginBottom: "48px" }}>
              iMac <em style={{ color: TW.green }}>Presentation</em>
            </h2>
            <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
              <Image
                src="/projects/twins/mockup.png"
                alt="Twins Music House — iMac"
                width={1400}
                height={1050}
                className="w-full h-auto"
                style={{
                  display: "block",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0, #000 4%, #000 88%, transparent 100%), linear-gradient(to right, transparent 0, #000 2%, #000 98%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskImage: "linear-gradient(to bottom, transparent 0, #000 4%, #000 88%, transparent 100%), linear-gradient(to right, transparent 0, #000 2%, #000 98%, transparent 100%)",
                  maskComposite: "intersect",
                } as React.CSSProperties}
              />
            </div>
          </motion.div>
        </section>

        {/* ── Other Pages Split ── */}
        <section style={{ padding: "120px 112px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: TW.green, fontFamily: "var(--font-body-project)", marginBottom: "20px" }}>Interior Pages</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 300, lineHeight: 1.1, color: TW.fg, marginBottom: "60px" }}>
              Navigation &amp; <em style={{ color: TW.green }}>Content</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
              <div style={{ borderRadius: "4px", overflow: "hidden", border: `1px solid ${TW.border}` }}>
                <Image src="/projects/twins/other-pages.png" alt="Twins — Other pages" width={700} height={2100} className="w-full h-auto" style={{ filter: "brightness(0.9)" }} />
              </div>
              <div style={{ paddingTop: "40px", display: "flex", flexDirection: "column", gap: "32px" }}>
                {[
                  "Each interior page maintains visual coherence while serving a distinct purpose — from event listings to artist profiles. The grid system ensures consistency at every depth of navigation.",
                  "Content containers were designed with a related content rail that keeps users within the same section, reducing navigation friction and increasing session depth.",
                  "The unified channel approach merges three distinct content areas into a single, flowing experience — connecting live events, productions, and editorial in one cohesive environment.",
                ].map((text, i) => (
                  <p key={i} style={{ fontSize: "15px", lineHeight: "1.9", color: TW.muted, fontFamily: "var(--font-body-project)", fontWeight: 300 }}>{text}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Playlists ── */}
        <section style={{ padding: "0 112px 120px", background: TW.bg2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: TW.green, fontFamily: "var(--font-body-project)", paddingTop: "80px", marginBottom: "20px" }}>Playlists</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 300, lineHeight: 1.1, color: TW.fg, marginBottom: "60px" }}>
              Curated <em style={{ color: TW.green }}>Listening</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "40px" }}>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: TW.muted, fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
                  The playlists section gives visitors immediate access to the agency&apos;s sonic identity — curated listening experiences organized by mood, project type, and genre.
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: TW.muted, fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
                  Faculty profiles were embedded within this section, providing artistic context and establishing the credibility of the musical vision behind each curation.
                </p>
              </div>
              <div style={{ borderRadius: "4px", overflow: "hidden", border: `1px solid ${TW.border}` }}>
                <Image src="/projects/twins/playlists-page.png" alt="Twins — Playlists" width={700} height={1400} className="w-full h-auto" style={{ filter: "brightness(0.9)" }} />
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
            <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: TW.green, fontFamily: "var(--font-body-project)", marginBottom: "20px" }}>Brand Identity</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 300, lineHeight: 1.1, color: TW.fg, marginBottom: "48px" }}>Color</h2>
            <div style={{ display: "flex", height: "200px", borderRadius: "4px", overflow: "hidden" }}>
              {[
                { name: "Light Green", hex: "#0E630A", text: "#fff" },
                { name: "Pure White", hex: "#FFFFFF", text: "#060606" },
                { name: "Near Black", hex: "#0E0E0E", text: TW.fg },
              ].map((c) => (
                <div key={c.name} style={{ flex: 1, background: c.hex, color: c.text, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px", transition: "flex 0.4s ease", border: c.hex === "#000000" ? `1px solid ${TW.border}` : undefined }}>
                  <span style={{ fontSize: "13px", fontWeight: 500, fontFamily: "var(--font-body-project)", marginBottom: "2px" }}>{c.name}</span>
                  <span style={{ fontSize: "11px", fontFamily: "monospace", opacity: 0.6 }}>{c.hex}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Typography ── */}
        <section style={{ padding: "0 112px 120px", background: TW.bg2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: TW.green, fontFamily: "var(--font-body-project)", paddingTop: "80px", marginBottom: "20px" }}>Type System</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 300, lineHeight: 1.1, color: TW.fg, marginBottom: "48px" }}>
              Arial — <em style={{ color: TW.green }}>Functional</em>
            </h2>
            <div style={{ borderTop: `1px solid ${TW.border}` }}>
              {[
                { size: "48px", weight: 400, text: "Twins Music House", label: "48px · Regular" },
                { size: "32px", weight: 700, text: "Sonic Branding Agency", label: "32px · Bold" },
                { size: "22px", weight: 400, text: "Music Composition & Production", label: "22px · Regular" },
                { size: "15px", weight: 300, text: "Clean, legible, and universal — Arial provides a neutral foundation.", label: "15px · Light", muted: true },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "28px 0", borderBottom: `1px solid ${TW.border}`, gap: "24px" }}>
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: row.size, fontWeight: row.weight, color: row.muted ? TW.muted : TW.fg, flex: 1 }}>{row.text}</span>
                  <span style={{ fontSize: "10px", letterSpacing: "0.12em", fontFamily: "monospace", color: TW.muted, whiteSpace: "nowrap" }}>{row.label}</span>
                </div>
              ))}
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
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle 400px at 50% 50%, rgba(14,122,9,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(64px, 10vw, 130px)", fontWeight: 300, lineHeight: 1, color: TW.fg, letterSpacing: "-0.01em", position: "relative" }}>
            Sound<br />finds<br /><em style={{ color: TW.green }}>form.</em>
          </h2>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: TW.muted, marginTop: "28px", fontFamily: "var(--font-body-project)", position: "relative" }}>
            Twins Music House · 2023
          </p>
        </motion.section>

        {/* ── Navigation ── */}
        <section style={{ padding: "40px 112px 80px", borderTop: `1px solid ${TW.border}` }}>
          <div className="flex justify-between items-center">
            <Link href="/" style={{ fontSize: "16px", color: TW.muted }}>
              &larr; Back to Home
            </Link>
            <Link href="/projects/tresor" style={{ fontSize: "16px", color: TW.green }}>
              Next Project &rarr;
            </Link>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}
