"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const dmSerif = DM_Serif_Display({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-display" });
const dmSans  = DM_Sans({ weight: ["300", "400", "500"], subsets: ["latin"], variable: "--font-body-project" });

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const MA = {
  bg: "#FFFFFF", bg2: "#F4F1EC",
  navy: "#0D0F1C", rose: "#BD4240",
  muted: "#6B6B6B", border: "#E2DDD6",
};

const typeSizes = [
  { label: "Display", size: "50px", weight: 400,  specs: "50 / Regular" },
  { label: "H1",      size: "41px", weight: 700,  specs: "41 / Bold" },
  { label: "H2",      size: "35px", weight: 700,  specs: "35 / Bold" },
  { label: "H3",      size: "29px", weight: 700,  specs: "29 / Bold" },
  { label: "H4",      size: "24px", weight: 600,  specs: "24 / Semibold" },
  { label: "Lead",    size: "20px", weight: 500,  specs: "20 / Medium" },
  { label: "Body",    size: "17px", weight: 400,  specs: "17 / Regular" },
  { label: "Caption", size: "14px", weight: 400,  specs: "14 / Regular" },
];

export default function MalbaPlus() {
  return (
    <SmoothScroll>
      <Navbar />
      <main
        className={`${dmSerif.variable} ${dmSans.variable} min-h-screen`}
        style={{ backgroundColor: MA.bg, color: MA.navy, fontFamily: "var(--font-body-project)" }}
      >

        {/* ── Hero — centrado con grillas ── */}
        <section
          style={{
            minHeight: "100vh",
            background: MA.navy,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "120px 112px 80px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Background grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />

          {/* Eyebrow */}
          <motion.p
            style={{ fontFamily: "var(--font-body-project)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: MA.rose, marginBottom: "24px", position: "relative", zIndex: 2 }}
            initial="hidden" animate="visible" variants={fadeIn} custom={0.1}
          >
            UX/UI Design · Web Platform · 2021
          </motion.p>

          {/* Logo with construction grid */}
          <motion.div
            style={{ position: "relative", zIndex: 2, marginBottom: "48px", display: "inline-block" }}
            initial="hidden" animate="visible" variants={fadeIn} custom={0.3}
          >
            {/* Outer border */}
            <div style={{
              position: "absolute", inset: "-24px",
              border: `1px solid rgba(189,66,64,0.25)`,
              pointerEvents: "none", zIndex: 1,
            }} />
            {/* Construction grid */}
            <div style={{
              position: "absolute", inset: "-24px",
              backgroundImage: "linear-gradient(rgba(189,66,64,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(189,66,64,0.12) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              pointerEvents: "none",
            }} />
            {/* Top-left corner */}
            <div style={{ position: "absolute", top: "-24px", left: "-24px", width: "12px", height: "12px", borderTop: `2px solid ${MA.rose}`, borderLeft: `2px solid ${MA.rose}`, opacity: 0.6 }} />
            {/* Bottom-right corner */}
            <div style={{ position: "absolute", bottom: "-24px", right: "-24px", width: "12px", height: "12px", borderBottom: `2px solid ${MA.rose}`, borderRight: `2px solid ${MA.rose}`, opacity: 0.6 }} />
            {/* Top-right corner */}
            <div style={{ position: "absolute", top: "-24px", right: "-24px", width: "12px", height: "12px", borderTop: `2px solid ${MA.rose}`, borderRight: `2px solid ${MA.rose}`, opacity: 0.6 }} />
            {/* Bottom-left corner */}
            <div style={{ position: "absolute", bottom: "-24px", left: "-24px", width: "12px", height: "12px", borderBottom: `2px solid ${MA.rose}`, borderLeft: `2px solid ${MA.rose}`, opacity: 0.6 }} />

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(100px, 16vw, 200px)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "#fff",
              padding: "0 8px",
              position: "relative", zIndex: 2,
            }}>
              MALBA<em style={{ color: MA.rose }}>+</em>
            </h1>
          </motion.div>

          {/* Meta row */}
          <motion.div
            style={{ display: "flex", gap: "48px", justifyContent: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "40px", marginTop: "0", position: "relative", zIndex: 2, width: "100%" }}
            initial="hidden" animate="visible" variants={fadeIn} custom={0.7}
          >
            {[["Type","Web Platform"],["Role","UX/UI Design"],["Equipo","Proyecto grupal"],["Año","2021"]].map(([label,val]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "6px" }}>{label}</p>
                <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.85)" }}>{val}</p>
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            style={{ marginTop: "24px", maxWidth: "640px", position: "relative", zIndex: 2 }}
            initial="hidden" animate="visible" variants={fadeIn} custom={0.9}
          >
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
              This project was developed for the MALBA Art Museum, one of the most prestigious in Latin America.
              The main objective was to centralize their three web channels into a single platform and enhance
              the user experience, particularly for purchasing the museum&apos;s courses.
            </p>
          </motion.div>
        </section>

        {/* ── Overview ── */}
        <section style={{ padding: "100px 112px" }}>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: MA.rose, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>El problema</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: MA.navy, marginBottom: "28px" }}>
                  Un museo,<br />dos sitios.
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300, marginBottom: "16px" }}>El MALBA operaba con dos canales digitales separados: visitas y exposiciones por un lado, cursos y formación por el otro. Esto fragmentaba la experiencia y diluía la identidad digital del museo.</p>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300 }}>En equipo, diseñamos una plataforma unificada bajo un mismo sistema de navegación, con una nueva sección de cursos construida desde cero.</p>
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: MA.rose, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>La solución</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: MA.navy, marginBottom: "28px" }}>
                  Una sola<br /><em style={{ color: MA.rose }}>experiencia.</em>
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300, marginBottom: "16px" }}>El usuario se mueve fluidamente entre exposiciones, programación y cursos sin salir del sitio. Todo bajo un sistema visual coherente con la identidad del MALBA.</p>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300 }}>La página de cursos fue construida de cero: arquitectura de información, componentes, flujo de inscripción y filtros de búsqueda.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Home Page ── */}
        <section style={{ padding: "100px 112px", background: MA.bg2 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: MA.rose, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>Home Page</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: MA.navy, marginBottom: "48px" }}>
              Tres canales,<br /><em style={{ color: MA.rose }}>una plataforma.</em>
            </h2>
            <div style={{ borderRadius: "8px", overflow: "hidden", border: `1px solid ${MA.border}`, boxShadow: "0 4px 40px rgba(13,15,28,0.07)", marginBottom: "48px" }}>
              {/* Reemplazar con: /public/projects/malba-plus/s2-home.png */}
              <Image src="/projects/malba-plus/s2-home.png" alt="MALBA+ — Home Page" width={1400} height={1000} className="w-full h-auto" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300 }}>The three existing channels were seamlessly integrated into a single platform, organized into intuitive sections that guide users to each area, highlighting the most relevant events.</p>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300 }}>A dedicated section for instructors allows users to explore individual profiles with engaging descriptions, fostering connection and understanding of the educational offerings.</p>
            </div>
          </motion.div>
        </section>

        {/* ── Other Pages — Course Detail ── */}
        <section style={{ padding: "100px 112px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: MA.rose, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>Other Pages</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: MA.navy, marginBottom: "60px" }}>
              Detalle de <em style={{ color: MA.rose }}>curso</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
              <div style={{ borderRadius: "8px", overflow: "hidden", border: `1px solid ${MA.border}`, boxShadow: "0 4px 40px rgba(13,15,28,0.07)" }}>
                <Image src="/projects/malba-plus/s3-other1.png" alt="MALBA+ — Course detail" width={700} height={1000} className="w-full h-auto" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "40px" }}>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300 }}>Each interior page maintains consistent style and design, ensuring visual and functional coherence that enhances navigation and reinforces the project&apos;s identity.</p>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300 }}>The &ldquo;Related Content&rdquo; section was strategically placed at the bottom to keep users within the same container, allowing them to explore additional content without disrupting their browsing experience.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Other Pages — Arte List ── */}
        <section style={{ padding: "100px 112px", background: MA.bg2 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: MA.rose, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>Other Pages</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: MA.navy, marginBottom: "60px" }}>
              Catálogo <em style={{ color: MA.rose }}>Arte</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "60px", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "280px" }}>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300 }}>Access points to the various courses offered by MALBA+, organized in a unified view to enhance the user experience.</p>
                <p style={{ fontSize: "15px", lineHeight: "1.85", color: MA.muted, fontWeight: 300 }}>This design ensures seamless navigation, preventing redirects and enabling direct access to the desired content.</p>
              </div>
              <div style={{ borderRadius: "8px", overflow: "hidden", border: `1px solid ${MA.border}`, boxShadow: "0 4px 40px rgba(13,15,28,0.07)" }}>
                <Image src="/projects/malba-plus/s4-other2.png" alt="MALBA+ — Arte list" width={900} height={1200} className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Color Palette ── */}
        <section style={{ padding: "100px 112px", background: MA.navy }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: MA.rose, marginBottom: "16px" }}>Identidad visual</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", marginBottom: "48px" }}>
              Paleta de <em style={{ color: MA.rose }}>colores</em>
            </h2>
            <div style={{ display: "flex", borderRadius: "8px", overflow: "hidden" }}>
              {[
                { hex: "#0D0F1C", name: "Navy Dark",  bg: "#0D0F1C", color: "#fff" },
                { hex: "#FFFFFF", name: "White",      bg: "#FFFFFF", color: MA.navy },
                { hex: "#BD4240", name: "Dusty Rose", bg: "#BD4240", color: "#fff" },
              ].map((c) => (
                <div key={c.hex} style={{ flex: 1, minHeight: "140px", background: c.bg, color: c.color, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px 24px" }}>
                  <span style={{ fontFamily: "monospace", fontSize: "14px", fontWeight: 700, letterSpacing: "0.04em" }}>{c.hex}</span>
                  <span style={{ fontSize: "12px", marginTop: "4px", opacity: 0.55 }}>{c.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Typography ── */}
        <section style={{ padding: "100px 112px", background: MA.bg2 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: MA.rose, fontFamily: "var(--font-body-project)", marginBottom: "16px" }}>Sistema tipográfico</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5vw,68px)", lineHeight: 1.05, letterSpacing: "-0.02em", color: MA.navy, marginBottom: "48px" }}>
              Arial — <em style={{ color: MA.rose }}>Functional</em>
            </h2>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", padding: "32px", background: "#fff", border: `1px solid ${MA.border}`, borderRadius: "8px 8px 0 0" }}>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: MA.muted }}>Arial, sometimes referred to as Arial MT, is a contemporary sans-serif typeface.</p>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: MA.muted }}><strong>Functional and Simple Style:</strong> Arial features a functional and simple style, making it suitable for a wide range of applications.</p>
              </div>
              <div style={{ background: MA.navy, padding: "16px 28px", textAlign: "center" }}>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff", letterSpacing: "0.08em" }}>Arial</span>
              </div>
              <div style={{ background: "#f5f5f5", borderRadius: 0, overflow: "hidden" }}>
                {typeSizes.map((t, i) => (
                  <div
                    key={t.size}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "110px 1fr 160px",
                      alignItems: "baseline",
                      gap: "32px",
                      padding: "18px 28px",
                      borderTop: i === 0 ? "none" : "1px solid rgba(0,32,96,0.08)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-body-project)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: MA.navy, opacity: 0.55 }}>
                      {t.label}
                    </span>
                    <p
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: t.size,
                        fontWeight: t.weight,
                        color: MA.navy,
                        lineHeight: 1.15,
                        margin: 0,
                        padding: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Arte sin fronteras
                    </p>
                    <span style={{ fontFamily: "var(--font-body-project)", fontSize: "12px", color: MA.muted, textAlign: "right", letterSpacing: "0.04em" }}>
                      {t.specs}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ padding: "20px 28px", textAlign: "center", background: "#fff", border: `1px solid ${MA.border}`, borderTop: "none", borderRadius: "0 0 8px 8px" }}>
                <p style={{ fontSize: "14px", color: MA.muted }}><strong>Readability:</strong> Thanks to its clean and unadorned design, Arial is highly readable in both small and large sizes.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Closing ── */}
        <motion.section
          style={{ background: MA.navy, padding: "120px 112px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", position: "relative", overflow: "hidden" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} custom={0.1}
        >
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 60% at 50% 40%, rgba(189,66,64,0.1) 0%, transparent 70%)`, pointerEvents: "none" }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px,9vw,120px)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "#fff", position: "relative" }}>
            Arte sin<br /><em style={{ color: MA.rose }}>fronteras.</em>
          </h2>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", position: "relative" }}>
            MALBA+ · UX/UI Design · 2021
          </p>
        </motion.section>

        {/* ── Navigation ── */}
        <section style={{ padding: "40px 112px 80px", borderTop: `1px solid ${MA.border}`, background: MA.bg }}>
          <div className="flex justify-between items-center">
            <Link href="/" style={{ fontSize: "16px", color: MA.muted }}>← Back to Home</Link>
            <Link href="/projects/tresor" style={{ fontSize: "16px", color: MA.rose }}>Next Project →</Link>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}
