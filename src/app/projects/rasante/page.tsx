"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import { BrowserFrame, Phone, type CaseStudyTheme } from "@/components/case-study/CaseStudy";

const outfit = Outfit({ weight: ["200", "300", "500"], subsets: ["latin"], variable: "--cs-body" });
const cormorant = Cormorant_Garamond({ weight: ["400", "500"], style: ["normal", "italic"], subsets: ["latin"], variable: "--rs-serif" });

const SAND = "#CCC5B9";
const BONE = "#ECE8E1";

const dusk = [
  { name: "Night", hex: "#151C24", chapter: "Intro" },
  { name: "Dusk rose", hex: "#9B6871", chapter: "Concept" },
  { name: "Clay", hex: "#967C6B", chapter: "Rooms" },
  { name: "Steppe olive", hex: "#848A5E", chapter: "Kitchen" },
  { name: "Moss", hex: "#6E6A51", chapter: "Expeditions" },
  { name: "Bark", hex: "#63594F", chapter: "Explore" },
  { name: "Mauve", hex: "#6E5C5A", chapter: "Get here" },
];

const frameTheme: CaseStudyTheme = {
  bg: "#151C24",
  fg: BONE,
  muted: SAND,
  accent: SAND,
  accentFg: "#151C24",
  surface: "rgba(21, 28, 36, 0.55)",
  border: "rgba(236, 232, 225, 0.16)",
};

const PX = "clamp(20px, 7.8vw, 112px)";
const ease = [0.25, 0.1, 0.25, 1] as const;
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.1, delay, ease },
});

const thin: CSSProperties = { fontWeight: 200, letterSpacing: "0.01em", textTransform: "lowercase" };
const serif: CSSProperties = { fontFamily: "var(--rs-serif)", fontWeight: 400 };

const mobileScreens = [0, 1, 2, 3, 4, 5].map((i) => `/projects/rasante/mobile-0${i}.jpg`);

function Label({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.26em", textTransform: "uppercase", color: SAND, ...style }}>
      {children}
    </p>
  );
}

function Chapter({ i, to: toIndex = i + 1, children, style }: { i: number; to?: number; children: ReactNode; style?: CSSProperties }) {
  const from = dusk[i].hex;
  const to = dusk[toIndex % dusk.length].hex;
  return (
    <section style={{ background: `linear-gradient(to bottom, ${from} 0%, ${from} 55%, ${to} 100%)`, padding: `clamp(96px, 12vw, 176px) ${PX}`, ...style }}>
      {children}
    </section>
  );
}

export default function RasantePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className={`${outfit.variable} ${cormorant.variable}`} style={{ color: BONE, fontFamily: "var(--cs-body)", backgroundColor: dusk[0].hex, overflowX: "clip" }}>
        {/* ── Night: prologue ── */}
        <section style={{ background: dusk[0].hex, padding: `clamp(150px, 18vw, 230px) ${PX} 0`, textAlign: "center" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }}>
            <Label>Case study · Boutique lodge · Chilean Patagonia</Label>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.08em" }}
            transition={{ duration: 2.2, delay: 0.3, ease }}
            style={{ ...thin, fontSize: "clamp(72px, 15vw, 240px)", lineHeight: 1, margin: "36px 0 28px" }}
          >
            rasante
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease }}
            style={{ ...serif, fontStyle: "italic", fontSize: "clamp(20px, 2.2vw, 30px)", lineHeight: 1.4, color: SAND, maxWidth: "640px", margin: "0 auto" }}
          >
            A website that barely touches the surface — designed to move like the evening light over the steppe.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.6 }} style={{ margin: "56px 0 72px" }}>
            <motion.span
              animate={{ scaleY: [0, 1, 1], opacity: [1, 1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "block", width: "1px", height: "56px", background: SAND, margin: "0 auto 14px", originY: 0 }}
            />
            <Label style={{ fontSize: "10px" }}>Skim</Label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.8, ease }}
            style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "clamp(12px, 1.6vw, 22px)", overflow: "hidden", margin: "0 auto", maxWidth: "1400px" }}
          >
            <video src="/projects/rasante/hero.mp4" poster="/projects/rasante/hero-poster.jpg" autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "28px", textAlign: "left", padding: "56px 0 clamp(80px, 10vw, 140px)", borderBottom: "1px solid rgba(236,232,225,0.12)" }}>
            {[
              ["Role", "UX/UI Design"],
              ["Client", "Rasante — Tercera Barranca, Chile"],
              ["Scope", "One-page site, pattern library, desktop & mobile"],
              ["Status", "In development · opens 2026/27 season"],
            ].map(([k, v], i) => (
              <motion.div key={k} {...reveal(i * 0.08)}>
                <Label style={{ marginBottom: "10px", fontSize: "10px" }}>{k}</Label>
                <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.5 }}>{v}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Night → Rose: the brief ── */}
        <Chapter i={0}>
          <motion.p {...reveal()} style={{ ...serif, fontSize: "clamp(28px, 3.6vw, 52px)", lineHeight: 1.25, maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
            A former estancia at Tercera Barranca, restored without replacing what time had already decided. The brief was a website
            <em style={{ color: SAND }}> as quiet as the place </em>— a slow descent from the landscape to the booking.
          </motion.p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", marginTop: "clamp(72px, 9vw, 128px)", borderTop: "1px solid rgba(236,232,225,0.18)" }}>
            {[
              ["14", "Rooms across two buildings"],
              ["4.000", "Hectares of private reserve"],
              ["45", "Minutes from Torres del Paine"],
              ["26/27", "First season, Oct to Apr"],
            ].map(([n, l], i) => (
              <motion.div key={l} {...reveal(i * 0.12)} style={{ padding: "32px 24px", textAlign: "center", borderLeft: i ? "1px solid rgba(236,232,225,0.18)" : "none" }}>
                <p style={{ ...thin, fontSize: "clamp(48px, 5.5vw, 84px)", lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: "14px", fontWeight: 300, color: SAND, marginTop: "12px" }}>{l}</p>
              </motion.div>
            ))}
          </div>
        </Chapter>

        {/* ── Rose → Clay: designing for dusk ── */}
        <Chapter i={1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "flex-end", marginBottom: "64px" }}>
            <motion.h2 {...reveal()} style={{ ...thin, flex: "1 1 360px", fontSize: "clamp(48px, 7vw, 112px)", lineHeight: 0.95 }}>
              designing<br />for dusk
            </motion.h2>
            <motion.p {...reveal(0.15)} style={{ ...serif, flex: "1 1 360px", fontSize: "21px", lineHeight: 1.55, color: BONE }}>
              Rasante is the way a bird skims the water at nightfall. So instead of one background colour, every chapter of the page takes a tone from the Patagonian sky as the sun goes down. Scrolling the site is watching the light change.
            </motion.p>
          </div>
          <div style={{ display: "flex", height: "clamp(120px, 16vw, 220px)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.5)" }}>
            {dusk.map((c, i) => (
              <motion.div
                key={c.hex}
                initial={{ flexGrow: 0.0001, opacity: 0 }}
                whileInView={{ flexGrow: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, delay: i * 0.14, ease }}
                whileHover={{ flexGrow: 2.2 }}
                style={{ background: c.hex, flexBasis: 0, padding: "16px", display: "flex", flexDirection: "column", justifyContent: "flex-end", minWidth: 0, borderLeft: i ? "1px solid rgba(255,255,255,0.08)" : "none" }}
              >
                <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: SAND, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.chapter}</span>
              </motion.div>
            ))}
          </div>
          <motion.p {...reveal(0.3)} style={{ fontSize: "13px", fontWeight: 300, color: SAND, marginTop: "16px" }}>
            Seven chapters, seven tones — from night to dusk rose, clay, steppe olive, moss, bark and back to night.
          </motion.p>
        </Chapter>

        {/* ── Clay → Olive: one evening ── */}
        <Chapter i={2}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "flex-start" }}>
            <motion.div {...reveal()} className="cs-sticky" style={{ flex: "1 1 320px" }}>
              <Label style={{ marginBottom: "20px" }}>The page</Label>
              <h2 style={{ ...thin, fontSize: "clamp(44px, 6vw, 96px)", lineHeight: 0.95, marginBottom: "28px" }}>one evening,<br />top to bottom</h2>
              <p style={{ ...serif, fontSize: "20px", lineHeight: 1.55 }}>
                A single page with anchors — Concept, Lodge, Rooms, Kitchen, Expeditions, Get here. A written prologue comes first; the landscape film follows. Copy stays short and serif, headlines thin and lowercase, so photography does the talking.
              </p>
            </motion.div>
            <motion.div {...reveal(0.15)} style={{ flex: "1.3 1 460px", minWidth: 0 }}>
              <BrowserFrame shot={{ src: "/projects/rasante/full-page.jpg", width: 1440, height: 9267, label: "Rasante — one-page site" }} theme={frameTheme} />
              <Label style={{ textAlign: "center", marginTop: "14px", fontSize: "10px" }}>Full page · hover to pause</Label>
            </motion.div>
          </div>
        </Chapter>

        {/* ── Olive → Bark: floating navigation ── */}
        <Chapter i={3} to={5} style={{ textAlign: "center" }}>
          <motion.h2 {...reveal()} style={{ ...thin, fontSize: "clamp(44px, 6vw, 96px)", lineHeight: 0.95, marginBottom: "28px" }}>
            a navigation<br />that floats
          </motion.h2>
          <motion.p {...reveal(0.1)} style={{ ...serif, fontSize: "21px", lineHeight: 1.55, maxWidth: "640px", margin: "0 auto clamp(48px, 6vw, 80px)" }}>
            A translucent pill glides over every chapter, picking up the colour beneath it. Book Now is always lit — the only solid element on the page.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease }}
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <Image src="/projects/rasante/detail-nav.jpg" alt="Rasante floating navigation" width={1440} height={80} sizes="100vw" style={{ width: "100%", height: "auto", borderRadius: "40px", boxShadow: "0 30px 70px -30px rgba(0,0,0,0.6)" }} />
            </motion.div>
          </motion.div>
        </Chapter>

        {/* ── Bark → Mauve: mobile ── */}
        <Chapter i={5}>
          <motion.div {...reveal()} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "64px" }}>
            <h2 style={{ ...thin, fontSize: "clamp(44px, 6vw, 96px)", lineHeight: 0.95 }}>in the hand</h2>
            <p style={{ ...serif, fontSize: "20px", lineHeight: 1.5, maxWidth: "460px" }}>
              On mobile the pill becomes a menu and Book Now turns into a sticky bar at the bottom of the screen. The colour still shifts with every chapter.
            </p>
          </motion.div>
          <div className="cs-phone-grid">
            {mobileScreens.map((src, i) => (
              <motion.div key={src} {...reveal(i * 0.08)}>
                <Phone>
                  <Image src={src} alt={`Rasante mobile screen ${i + 1}`} fill sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw" style={{ objectFit: "cover", objectPosition: "top" }} />
                </Phone>
              </motion.div>
            ))}
          </div>
        </Chapter>

        {/* ── Mauve → Night: visual language ── */}
        <Chapter i={6}>
          <motion.div {...reveal()} style={{ marginBottom: "48px" }}>
            <Label>Visual language</Label>
          </motion.div>
          <div style={{ borderTop: "1px solid rgba(236,232,225,0.18)" }}>
            {[
              { sample: "rasante", style: { ...thin, letterSpacing: "0.08em" }, name: "Tosh A", role: "Headlines — thin and lowercase" },
              { sample: "Inside and outside", style: { ...serif, fontStyle: "italic" as const }, name: "Adobe Caslon Pro", role: "Storytelling and body copy" },
              { sample: "BOOK NOW", style: { fontWeight: 500, letterSpacing: "0.22em" }, name: "Scandia", role: "Labels and navigation" },
            ].map((f, i) => (
              <motion.div key={f.name} {...reveal(i * 0.1)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "32px 0", borderBottom: "1px solid rgba(236,232,225,0.18)" }}>
                <span style={{ ...f.style, fontSize: "clamp(36px, 6vw, 88px)", lineHeight: 1 }}>{f.sample}</span>
                <span style={{ textAlign: "right" }}>
                  <span style={{ display: "block", fontSize: "18px", fontWeight: 300 }}>{f.name}</span>
                  <span style={{ display: "block", fontSize: "13px", fontWeight: 300, color: SAND, marginTop: "4px" }}>{f.role}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </Chapter>

        {/* ── Night: closing ── */}
        <section style={{ background: dusk[0].hex, padding: `clamp(96px, 12vw, 176px) ${PX} 48px`, textAlign: "center" }}>
          <motion.p {...reveal()} style={{ ...thin, fontSize: "clamp(40px, 6vw, 96px)", lineHeight: 1.05, maxWidth: "1100px", margin: "0 auto 36px" }}>
            the kind of presence that leaves no mark
          </motion.p>
          <motion.div {...reveal(0.15)}>
            <Label>Information architecture · Pattern library · Dusk colour system · Desktop & mobile · WordPress handoff</Label>
          </motion.div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginTop: "clamp(96px, 12vw, 160px)", paddingTop: "32px", borderTop: "1px solid rgba(236,232,225,0.12)", textAlign: "left" }}>
            <Link href="/#projects" style={{ fontSize: "14px", fontWeight: 300, color: SAND, textDecoration: "none" }}>
              ← All projects
            </Link>
            <Link href="/projects/mio" style={{ textDecoration: "none", color: BONE, textAlign: "right" }}>
              <Label style={{ marginBottom: "8px", fontSize: "10px" }}>Next project</Label>
              <span style={{ ...thin, fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1 }}>mio buenos aires →</span>
            </Link>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
