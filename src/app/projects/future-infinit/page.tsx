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

        {/* ── Desktop Mockup (iMac) ── */}
        <motion.section
          style={{ padding: "100px 112px 120px", position: "relative" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%", height: "60%",
              background: "radial-gradient(ellipse, rgba(196,30,30,0.08) 0%, transparent 70%)",
              pointerEvents: "none", filter: "blur(40px)",
            }} />

            <div style={{
              background: "linear-gradient(180deg, #3a3a3c 0%, #2c2c2e 50%, #1c1c1e 100%)",
              borderRadius: "18px 18px 2px 2px",
              padding: "12px 12px 0 12px",
              boxShadow: "0 60px 120px rgba(0,0,0,0.6), 0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", top: "5px", left: "50%", transform: "translateX(-50%)",
                width: "4px", height: "4px", borderRadius: "50%",
                background: "#0a0a0a", boxShadow: "inset 0 0 2px rgba(255,255,255,0.15)", zIndex: 2,
              }} />
              <div style={{ borderRadius: "4px", overflow: "hidden", position: "relative", background: "#000" }}>
                <video src="/videos/future-infinit-hero.mp4" autoPlay loop muted playsInline style={{ width: "100%", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%)", pointerEvents: "none" }} />
              </div>
            </div>

            <div style={{
              height: "28px",
              background: "linear-gradient(180deg, #2c2c2e, #3a3a3c)",
              borderRadius: "0 0 18px 18px",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }} />
            <div style={{
              width: "100px", height: "70px", margin: "0 auto",
              background: "linear-gradient(90deg, #2c2c2e, #3a3a3c, #2c2c2e)",
              clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)",
            }} />
            <div style={{
              width: "220px", height: "8px", margin: "-1px auto 0",
              background: "linear-gradient(180deg, #3a3a3c, #2c2c2e)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }} />

            <span style={{
              position: "absolute", top: "-20px", right: "-40px",
              fontFamily: "var(--font-display)", fontSize: "80px",
              color: FI.red, lineHeight: 1, opacity: 0.15,
            }}>
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
          <div style={{
            position: "relative", overflow: "hidden", background: "#111",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "60px 40px",
          }}>
            <div style={{ width: "260px", position: "relative" }}>
              <div style={{ position: "absolute", right: "-3px", top: "120px", width: "3px", height: "58px", background: "linear-gradient(to right, #3a3a3c, #48484a)", borderRadius: "0 2px 2px 0", boxShadow: "1px 0 2px rgba(0,0,0,0.6)" }} />
              <div style={{ position: "absolute", left: "-3px", top: "90px", width: "3px", height: "28px", background: "linear-gradient(to left, #3a3a3c, #48484a)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 2px rgba(0,0,0,0.6)" }} />
              <div style={{ position: "absolute", left: "-3px", top: "132px", width: "3px", height: "48px", background: "linear-gradient(to left, #3a3a3c, #48484a)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 2px rgba(0,0,0,0.6)" }} />
              <div style={{ position: "absolute", left: "-3px", top: "190px", width: "3px", height: "48px", background: "linear-gradient(to left, #3a3a3c, #48484a)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 2px rgba(0,0,0,0.6)" }} />

              <div style={{
                borderRadius: "46px", padding: "2px",
                background: "linear-gradient(145deg, #4a4a4c 0%, #2a2a2c 40%, #3a3a3c 70%, #1c1c1e 100%)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 15px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}>
                <div style={{
                  borderRadius: "44px", padding: "9px", background: "#1c1c1e",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 2px 4px rgba(0,0,0,0.8)",
                }}>
                  <div style={{ borderRadius: "36px", overflow: "hidden", position: "relative", background: "#000" }}>
                    <div style={{
                      position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)",
                      width: "90px", height: "26px", background: "#000", borderRadius: "20px",
                      zIndex: 3, boxShadow: "0 0 0 1px rgba(255,255,255,0.04)",
                    }} />
                    <video src="/videos/future-infinit-mockup-composite.mp4" autoPlay loop muted playsInline style={{ width: "100%", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)", pointerEvents: "none", zIndex: 2, borderRadius: "36px" }} />
                    <div style={{ position: "absolute", bottom: "6px", left: "50%", transform: "translateX(-50%)", width: "90px", height: "4px", background: "rgba(255,255,255,0.3)", borderRadius: "2px", zIndex: 3 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Mobile ── */}
        <section style={{ padding: "120px 112px", display: "flex", alignItems: "center", gap: "80px" }}>
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
            style={{ flexShrink: 0, width: "320px", position: "relative" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.3}
          >
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200%", height: "120%",
              background: "radial-gradient(ellipse, rgba(196,30,30,0.1) 0%, transparent 60%)",
              pointerEvents: "none", filter: "blur(30px)",
            }} />

            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", right: "-3px", top: "140px", width: "3px", height: "65px", background: "linear-gradient(to right, #3a3a3c, #48484a)", borderRadius: "0 2px 2px 0", boxShadow: "1px 0 3px rgba(0,0,0,0.7)" }} />
              <div style={{ position: "absolute", left: "-3px", top: "105px", width: "3px", height: "30px", background: "linear-gradient(to left, #3a3a3c, #48484a)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 3px rgba(0,0,0,0.7)" }} />
              <div style={{ position: "absolute", left: "-3px", top: "152px", width: "3px", height: "55px", background: "linear-gradient(to left, #3a3a3c, #48484a)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 3px rgba(0,0,0,0.7)" }} />
              <div style={{ position: "absolute", left: "-3px", top: "218px", width: "3px", height: "55px", background: "linear-gradient(to left, #3a3a3c, #48484a)", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 3px rgba(0,0,0,0.7)" }} />

              <div style={{
                borderRadius: "52px", padding: "2px",
                background: "linear-gradient(145deg, #58585a 0%, #3a3a3c 30%, #2a2a2c 60%, #48484a 80%, #1c1c1e 100%)",
                boxShadow: "0 50px 100px rgba(0,0,0,0.8), 0 25px 50px rgba(0,0,0,0.5), 0 20px 40px rgba(196,30,30,0.12), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}>
                <div style={{
                  borderRadius: "50px", padding: "10px", background: "#1c1c1e",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 2px 6px rgba(0,0,0,0.9)",
                }}>
                  <div style={{ borderRadius: "42px", overflow: "hidden", position: "relative", background: "#000" }}>
                    <div style={{
                      position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)",
                      width: "95px", height: "28px", background: "#000", borderRadius: "20px",
                      zIndex: 3, boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 1px 3px rgba(0,0,0,0.5)",
                    }}>
                      <div style={{
                        position: "absolute", right: "18px", top: "50%", transform: "translateY(-50%)",
                        width: "8px", height: "8px", borderRadius: "50%",
                        background: "radial-gradient(circle, #1a1a2e 40%, #0a0a0a 60%)",
                        boxShadow: "inset 0 0 2px rgba(255,255,255,0.1)",
                      }} />
                    </div>

                    <video src="/videos/future-infinit-mobile.mp4" autoPlay loop muted playsInline style={{ width: "100%", display: "block" }} />

                    <div style={{ position: "absolute", inset: 0, borderRadius: "42px", boxShadow: "inset 0 0 0 0.5px rgba(255,255,255,0.08)", pointerEvents: "none", zIndex: 2 }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)", pointerEvents: "none", zIndex: 2, borderRadius: "42px" }} />
                    <div style={{ position: "absolute", bottom: "7px", left: "50%", transform: "translateX(-50%)", width: "105px", height: "4px", background: "rgba(255,255,255,0.35)", borderRadius: "2px", zIndex: 3 }} />
                  </div>
                </div>
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
