"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, DM_Mono, DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-display" });
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

const ATP = {
  bg: "#0A0F0D",
  fg: "#F0EDE6",
  teal: "#1B4D3B",
  gold: "#D4A853",
  muted: "#6B7B74",
  border: "#1E2A25",
  cardBg: "#111916",
};

const colors = [
  { name: "Forest Teal", hex: "#1B4D3B", text: "#F0EDE6" },
  { name: "Warm Gold", hex: "#D4A853", text: "#0A0F0D" },
  { name: "Parchment", hex: "#F0EDE6", text: "#0A0F0D" },
  { name: "Deep Night", hex: "#0A0F0D", text: "#F0EDE6" },
];

const overview = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Type", value: "UX Audit + Redesign" },
  { label: "Tools", value: "Figma, Illustrator, Photoshop, Slickplan, WordPress" },
  { label: "Industry", value: "Tourism / DMC" },
];

export default function DigitalBros() {
  return (
    <SmoothScroll>
      <Navbar />
      <main
        className={`${playfair.variable} ${dmMono.variable} ${dmSans.variable} min-h-screen`}
        style={{ backgroundColor: ATP.bg, color: ATP.fg }}
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
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(120px, 20vw, 280px)",
              color: ATP.teal,
              opacity: 0.08,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            ARGENTINA
          </span>

          <motion.p
            style={{
              fontFamily: "var(--font-mono-project)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: ATP.gold,
              marginBottom: "24px",
            }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.1}
          >
            UX Audit · Redesign · Tourism
          </motion.p>

          <motion.h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 12vw, 180px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: ATP.fg,
              fontWeight: 700,
            }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.3}
          >
            Digital<br />
            <span style={{ color: ATP.teal }}>Bros</span>
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
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: ATP.muted, maxWidth: "480px", fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
              A comprehensive UX audit and website redesign for Argentina Travel Partners, a destination
              management company. Transforming their digital presence to match the beauty of the
              destinations they represent.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
              {["UX Audit", "UI Redesign", "Web"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono-project)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: ATP.muted,
                    border: `1px solid ${ATP.border}`,
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
            style={{ height: "1px", background: `linear-gradient(to right, ${ATP.teal}, transparent)`, marginTop: "40px" }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.9}
          />
        </section>

        {/* ── Hero Image (full-bleed) ── */}
        <motion.section
          style={{ position: "relative", overflow: "hidden" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "1440/780", overflow: "hidden" }}>
            <Image
              src="/projects/digital-bros/hero-destination.png"
              alt="ATP Argentina Destination Page"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="100vw"
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 60%, ${ATP.bg} 100%)` }} />
            <span
              style={{
                position: "absolute",
                bottom: "40px",
                right: "112px",
                fontFamily: "var(--font-display)",
                fontSize: "80px",
                color: ATP.teal,
                lineHeight: 1,
                opacity: 0.9,
                fontWeight: 700,
              }}
            >
              01
            </span>
          </div>
        </motion.section>

        {/* ── Overview ── */}
        <section style={{ padding: "120px 112px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: ATP.gold, marginBottom: "20px" }}>
              Project Overview
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 1, marginBottom: "60px", fontWeight: 600 }}>
              Argentina Travel<br />Partners
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
            {overview.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "32px",
                  backgroundColor: ATP.cardBg,
                  borderRadius: "4px",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: ATP.gold, display: "block", marginBottom: "12px" }}>
                  {item.label}
                </span>
                <span style={{ fontFamily: "var(--font-body-project)", fontSize: "14px", color: ATP.fg, fontWeight: 400, lineHeight: 1.5 }}>
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── The Challenge ── */}
        <motion.section
          style={{ padding: "0 112px 120px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div>
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: ATP.gold, marginBottom: "20px" }}>
              The Challenge
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.1, marginBottom: "24px", fontWeight: 600 }}>
              Reimagining a digital gateway to Argentina
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: ATP.muted, fontFamily: "var(--font-body-project)", fontWeight: 300, marginBottom: "24px" }}>
              Argentina Travel Partners, a destination management company, needed their website to match
              the breathtaking experience they deliver to travelers. The existing site lacked visual
              impact, had a fragmented user experience, and failed to communicate the premium quality
              of their services.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: ATP.muted, fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
              We conducted a thorough UX audit to understand the brand, then redesigned and built
              a website with significantly greater visual impact, improved user experience, and
              enhanced functionality — turning the site into a true reflection of Argentina&apos;s beauty.
            </p>
          </div>
        </motion.section>

        {/* ── Hero Screens Showcase ── */}
        <section style={{ padding: "0 112px 120px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: ATP.gold, marginBottom: "20px" }}>
              Key Screens
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 5vw, 72px)", lineHeight: 1, marginBottom: "48px", fontWeight: 600 }}>
              Desktop
            </h2>
          </motion.div>

          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.2}
          >
            {[
              { src: "/projects/digital-bros/hero-destination.png", label: "Destinations — Argentina", alt: "ATP Argentina destination hero" },
              { src: "/projects/digital-bros/hero-why-atp.png", label: "Why ATP", alt: "ATP Why choose us hero" },
              { src: "/projects/digital-bros/hero-who-we-are.png", label: "Who We Are", alt: "ATP Who we are hero" },
            ].map((screen) => (
              <div key={screen.label} style={{ position: "relative", borderRadius: "8px", overflow: "hidden", border: `1px solid ${ATP.border}` }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "1440/780" }}>
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "16px 24px",
                  background: "linear-gradient(to top, rgba(10,15,13,0.9), transparent)",
                }}>
                  <span style={{ fontFamily: "var(--font-mono-project)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: ATP.fg }}>
                    {screen.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Full Pages ── */}
        <motion.div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "80vh" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ padding: "80px 112px", display: "flex", flexDirection: "column", justifyContent: "center", background: ATP.teal }}>
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,230,0.6)", marginBottom: "20px" }}>
              Full Page Designs
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1, color: "#fff", marginBottom: "24px", fontWeight: 600 }}>
              Page<br />Flow
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "rgba(240,237,230,0.7)", maxWidth: "380px", fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
              Every page was designed with a clear visual hierarchy, guiding users from captivating
              hero imagery through detailed content sections, creating an immersive browsing experience
              that mirrors the journey of exploring Argentina.
            </p>
          </div>
          <div style={{ position: "relative", overflow: "hidden", backgroundColor: ATP.cardBg }}>
            <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "600px" }}>
              <Image
                src="/projects/digital-bros/page-destination.png"
                alt="Full destination page"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="50vw"
              />
            </div>
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
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: ATP.gold, marginBottom: "20px" }}>
              Mobile Experience
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1, marginBottom: "24px", fontWeight: 600 }}>
              Responsive<br />Design
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: ATP.muted, maxWidth: "400px", fontFamily: "var(--font-body-project)", fontWeight: 300 }}>
              The mobile version delivers the same immersive experience — rich photography,
              clear navigation, and intuitive booking flows optimized for travelers on the go.
            </p>
          </motion.div>

          <motion.div
            style={{ display: "flex", gap: "24px", flexShrink: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.3}
          >
            {[
              { src: "/projects/digital-bros/mobile-destination.png", alt: "Mobile destination page" },
              { src: "/projects/digital-bros/mobile-who-we-are.png", alt: "Mobile who we are page" },
            ].map((phone) => (
              <div key={phone.alt} style={{ position: "relative" }}>
                <div style={{
                  borderRadius: "50px",
                  padding: "2px",
                  background: "linear-gradient(145deg, #4a4a4c 0%, #2a2a2c 40%, #3a3a3c 70%, #1c1c1e 100%)",
                  boxShadow: "0 50px 100px rgba(0,0,0,0.8), 0 20px 40px rgba(27,77,59,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}>
                  <div style={{
                    borderRadius: "48px",
                    padding: "10px",
                    background: "#1c1c1e",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 2px 4px rgba(0,0,0,0.8)",
                  }}>
                    <div style={{
                      borderRadius: "40px",
                      overflow: "hidden",
                      position: "relative",
                      background: "#000",
                      width: "220px",
                    }}>
                      <div style={{
                        position: "absolute", top: 0, left: "50%",
                        transform: "translateX(-50%)",
                        width: "88px", height: "30px",
                        background: "#000",
                        borderRadius: "0 0 20px 20px",
                        zIndex: 3,
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.04)",
                      }} />
                      <Image
                        src={phone.src}
                        alt={phone.alt}
                        width={220}
                        height={476}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
                        pointerEvents: "none",
                        zIndex: 2,
                        borderRadius: "40px",
                      }} />
                      <div style={{
                        position: "absolute", bottom: "8px", left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px", height: "4px",
                        background: "rgba(255,255,255,0.35)",
                        borderRadius: "2px",
                        zIndex: 3,
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Contact Page ── */}
        <motion.section
          style={{ padding: "0 112px 120px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: ATP.gold, marginBottom: "20px" }}>
            Contact Page
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 5vw, 72px)", lineHeight: 1, marginBottom: "48px", fontWeight: 600 }}>
            Get in Touch
          </h2>
          <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", border: `1px solid ${ATP.border}` }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "1440/3315" }}>
              <Image
                src="/projects/digital-bros/page-contact.png"
                alt="ATP Contact page"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </motion.section>

        {/* ── Color Palette ── */}
        <section style={{ padding: "0 0 0", background: "#0d1210" }}>
          <motion.div
            style={{ padding: "80px 112px 40px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            custom={0.1}
          >
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: ATP.gold, marginBottom: "20px" }}>
              Visual Identity
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 5vw, 72px)", lineHeight: 1, marginBottom: "48px", fontWeight: 600 }}>
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
                  border: c.hex === "#0A0F0D" ? `1px solid ${ATP.border}` : undefined,
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
            <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: ATP.gold, marginBottom: "20px" }}>
              Type System
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(60px, 10vw, 140px)", lineHeight: 1, marginBottom: "60px", fontWeight: 600 }}>
              Playfair Display
            </p>
            <div style={{ maxWidth: "900px" }}>
              {[
                { label: "Display", size: "50px", text: "Argentina Travel Partners" },
                { label: "Heading", size: "36px", text: "Discover Patagonia" },
                { label: "Subheading", size: "24px", text: "Premium Destinations" },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "20px 0", borderTop: `1px solid ${ATP.border}` }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: row.size, fontWeight: 600 }}>{row.text}</span>
                  <span style={{ fontFamily: "var(--font-mono-project)", fontSize: "11px", color: ATP.muted, letterSpacing: "0.1em" }}>
                    {row.size} · {row.label}
                  </span>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "20px 0", borderTop: `1px solid ${ATP.border}`, borderBottom: `1px solid ${ATP.border}` }}>
                <span style={{ fontFamily: "var(--font-body-project)", fontSize: "15px", color: ATP.muted, fontWeight: 300, maxWidth: "600px", lineHeight: 1.6 }}>
                  DM Sans — body text, descriptions, labels, and supporting copy throughout the interface.
                </span>
                <span style={{ fontFamily: "var(--font-mono-project)", fontSize: "11px", color: ATP.muted, letterSpacing: "0.1em", flexShrink: 0, marginLeft: "24px" }}>
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
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(27,77,59,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(80px, 18vw, 240px)", lineHeight: 1, position: "relative", fontWeight: 700 }}>
            EXPLORE<br />
            <span style={{ color: ATP.teal }}>MORE.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-mono-project)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: ATP.muted, marginTop: "24px", position: "relative" }}>
            Digital Bros · ATP · 2024
          </p>
        </motion.section>

        {/* ── Navigation ── */}
        <section style={{ padding: "40px 112px 80px", borderTop: `1px solid ${ATP.border}` }}>
          <div className="flex justify-between items-center">
            <Link href="/" className="text-muted hover:text-foreground transition-colors" style={{ fontSize: "16px" }}>
              &larr; Back to Home
            </Link>
            <Link href="/projects/future-infinit" style={{ fontSize: "16px", color: ATP.teal }}>
              Next Project &rarr;
            </Link>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}
