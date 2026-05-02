"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Barlow_Condensed, Barlow } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const barlowCondensed = Barlow_Condensed({ weight: ["700", "900"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-display" });
const barlow = Barlow({ weight: ["300", "400"], subsets: ["latin"], variable: "--font-body-project" });

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const TR = {
  bg: "#000000", bg2: "#0a0a0a",
  fg: "#FFFFFF", red: "#E20612",
  muted: "#555555", border: "#141414",
};

const typeSizes = [
  { size: "50px", rem: "2.488rem", weight: 700 },
  { size: "41px", rem: "2.074rem", weight: 700 },
  { size: "35px", rem: "1.728rem", weight: 700 },
  { size: "29px", rem: "1.440rem", weight: 700 },
  { size: "24px", rem: "1.200rem", weight: 700 },
  { size: "20px", rem: "1rem",     weight: 700 },
  { size: "17px", rem: "0.833rem", weight: 700 },
  { size: "14px", rem: "0.694rem", weight: 700 },
];

export default function Tresor() {
  return (
    <SmoothScroll>
      <Navbar />
      <main
        className={`${barlowCondensed.variable} ${barlow.variable} min-h-screen`}
        style={{ backgroundColor: TR.bg, color: TR.fg, fontFamily: "var(--font-body-project)" }}
      >

        {/* ── Hero ── */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 112px 56px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Red ticker */}
          <div style={{ position: "absolute", top: "72px", left: 0, right: 0, height: "36px", background: TR.red, display: "flex", alignItems: "center", overflow: "hidden" }}>
            <motion.div
              style={{ display: "flex", whiteSpace: "nowrap" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <span key={i} style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", padding: "0 28px" }}>
                  {["TRESOR BERLIN", "UNDER CLUB", "ADVERTISING", "GRAPHIC DESIGN"][i % 4]}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.p
            style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: TR.muted, marginBottom: "16px" }}
            initial="hidden" animate="visible" variants={fadeIn} custom={0.1}
          >
            Graphic Design · Advertising · 2022
          </motion.p>

          <motion.h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(100px,18vw,260px)", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.01em", textTransform: "uppercase", color: TR.fg }}
            initial="hidden" animate="visible" variants={fadeIn} custom={0.3}
          >
            TRE<span style={{ color: TR.red }}>S</span><br />OR
          </motion.h1>

          <motion.div
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: "40px" }}
            initial="hidden" animate="visible" variants={fadeIn} custom={0.6}
          >
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: TR.muted, maxWidth: "460px", fontWeight: 300 }}>
              Diseño gráfico para la fecha especial de Tresor Berlin en Under Club Buenos Aires.
              Advertising completo: flyer, afiche, cartelería y piezas digitales.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
              {["Diseño Gráfico", "Advertising", "2022"].map((t) => (
                <span key={t} style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: TR.muted, border: `1px solid ${TR.border}`, padding: "4px 12px" }}>{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ height: "1px", background: `linear-gradient(to right, ${TR.red}, transparent)`, marginTop: "36px" }}
            initial="hidden" animate="visible" variants={fadeIn} custom={0.9}
          />
        </section>

        {/* ── Billboard 1 — 30 Horas Techno ── */}
        <section style={{ padding: "80px 112px", background: TR.bg2 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}>
            <p style={{ fontFamily: "var(--font-body-project)", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: TR.red, marginBottom: "16px" }}>Pieza 01 — Outdoor</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px,8vw,110px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, letterSpacing: "-0.01em", marginBottom: "48px" }}>
              30 Horas<br /><span style={{ color: TR.red }}>Techno</span>
            </h2>
            {/* /public/projects/tresor/s1-hero.png */}
            <div style={{ borderRadius: "12px", overflow: "hidden" }}>
              <Image src="/projects/tresor/s1-hero.png" alt="Tresor — 30 Horas Techno" width={1400} height={1050} className="w-full h-auto" />
            </div>
          </motion.div>
        </section>

        {/* ── Billboard 2 — Tresor Berlin ── */}
        <section style={{ padding: "100px 112px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: TR.red, marginBottom: "16px" }}>Pieza 02 — Tresor Berlin</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px,8vw,110px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, letterSpacing: "-0.01em", marginBottom: "48px" }}>
              Under Club<br /><span style={{ color: TR.red }}>× Tresor</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "48px" }}>
              {/* Reconstructed Tresor logo */}
              <div style={{ background: "#000", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "420px", border: `1px solid ${TR.border}`, padding: "48px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                    <circle cx="70" cy="70" r="62" stroke="white" strokeWidth="10" />
                    <circle cx="70" cy="70" r="14" fill="white" />
                  </svg>
                  <div style={{ width: "140px", height: "10px", background: "#fff", margin: "4px 0 8px" }} />
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "52px", fontWeight: 900, letterSpacing: "0.18em", textTransform: "uppercase", color: "#fff", lineHeight: 1 }}>TRESOR</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 400, letterSpacing: "0.55em", textTransform: "uppercase", color: "#fff", opacity: 0.85 }}>BERLIN</span>
                  <div style={{ marginTop: "20px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "20px", width: "100%" }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 700, letterSpacing: "0.06em", color: "#fff", lineHeight: 1.7, whiteSpace: "nowrap" }}>
                      13.08.22 ASUNCIÓN &nbsp;|&nbsp; 14.08.22 BUENOS AIRES
                    </p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginTop: "4px" }}>UNDER CLUB</p>
                  </div>
                </div>
              </div>
              {/* /public/projects/tresor/s2-billboard.png */}
              <div style={{ borderRadius: "12px", overflow: "hidden" }}>
                <Image src="/projects/tresor/s2-billboard.png" alt="Tresor — Billboard mockup" width={700} height={700} className="w-full h-auto" />
              </div>
            </div>
            <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.8", color: TR.muted, fontWeight: 300 }}>
                This piece was carefully crafted to capture attention quickly and effectively, featuring bold typography,
                striking visuals, and a clean layout. Its purpose was to communicate the event details clearly while
                reflecting the energy and essence of the collaboration between &ldquo;Under Club&rdquo; and &ldquo;Tresor.&rdquo;
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── Red panel ── */}
        <motion.section
          style={{ padding: "100px 112px", background: TR.red }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}
        >
          <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "16px" }}>Campaign</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px,8vw,110px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, color: "#fff", marginBottom: "24px" }}>
            Outdoor<br />Advertising
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(255,255,255,0.7)", maxWidth: "520px", fontWeight: 300 }}>
            By positioning the pieces in high-visibility areas, the design aimed to maximize audience engagement
            and drive interest in the event. Negro. Rojo. Tresor.
          </p>
        </motion.section>

        {/* ── Color Palette ── */}
        <section style={{ padding: "100px 112px", background: TR.bg2 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: TR.red, marginBottom: "16px" }}>Paleta</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px,8vw,110px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, marginBottom: "48px" }}>Color</h2>
            <div style={{ display: "flex", gap: "2px", borderRadius: "4px", overflow: "hidden" }}>
              {[
                { name: "Near Black", hex: "#1D1D1F", bg: "#1D1D1F", color: "#fff" },
                { name: "Tresor Red",  hex: "#E20612", bg: TR.red,    color: "#fff" },
                { name: "Light Gray",  hex: "#EFEFEF", bg: "#EFEFEF",  color: "#1D1D1F" },
                { name: "Off White",   hex: "#E3E3E3", bg: "#E3E3E3",  color: "#1D1D1F" },
              ].map((c) => (
                <div key={c.hex} style={{ flex: 1, minHeight: "160px", background: c.bg, color: c.color, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px" }}>
                  <span style={{ fontFamily: "monospace", fontSize: "14px", fontWeight: 700 }}>{c.hex}</span>
                  <span style={{ fontSize: "12px", marginTop: "4px", opacity: 0.55 }}>{c.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Typography ── */}
        <section style={{ padding: "100px 112px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: TR.red, marginBottom: "16px" }}>Tipografía</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px,8vw,110px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.9, marginBottom: "48px" }}>
              Type<br /><span style={{ color: TR.red }}>System</span>
            </h2>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "32px" }}>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: TR.muted }}>Arial, sometimes referred to as Arial MT, is a contemporary sans-serif typeface.</p>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: TR.muted }}><strong>Functional and Simple Style:</strong> Arial features a functional and simple style.</p>
              </div>
              <div style={{ background: "#1D1D1F", padding: "16px 28px", borderRadius: "8px 8px 0 0", textAlign: "center" }}>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff", letterSpacing: "0.08em" }}>Arial</span>
              </div>
              <div style={{ background: TR.red, padding: "36px 28px", borderRadius: "0 0 8px 8px" }}>
                {typeSizes.map((t) => (
                  <p key={t.size} style={{ fontFamily: "Arial, sans-serif", fontSize: t.size, fontWeight: t.weight, color: "#1D1D1F", lineHeight: "1.4", paddingBottom: "4px" }}>
                    The quick brown fox jumps over the lazy dog ({t.rem}/{t.size})
                  </p>
                ))}
              </div>
              <div style={{ marginTop: "32px", textAlign: "center" }}>
                <p style={{ fontSize: "14px", color: TR.muted }}><strong>Readability:</strong> Thanks to its clean and unadorned design, Arial is highly readable in both small and large sizes.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Closing ── */}
        <motion.section
          style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 112px", position: "relative", overflow: "hidden" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}
        >
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(226,6,18,0.12) 0%, transparent 70%)`, pointerEvents: "none" }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(80px,18vw,240px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.88, letterSpacing: "-0.01em", color: TR.fg, position: "relative" }}>
            BERLI<span style={{ color: TR.red }}>N</span><br />EN BA.
          </h2>
          <p style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: TR.muted, marginTop: "24px", position: "relative" }}>
            Tresor · Under Club · 2022
          </p>
        </motion.section>

        {/* ── Navigation ── */}
        <section style={{ padding: "40px 112px 80px", borderTop: `1px solid ${TR.border}` }}>
          <div className="flex justify-between items-center">
            <Link href="/" style={{ fontSize: "16px", color: TR.muted }}>← Back to Home</Link>
            <Link href="/projects/future-infinit" style={{ fontSize: "16px", color: TR.red }}>Next Project →</Link>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}
