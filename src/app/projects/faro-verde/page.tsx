"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import { BrowserFrame, Phone, type CaseStudyTheme } from "@/components/case-study/CaseStudy";

const urbanist = Urbanist({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--cs-body" });

const C = {
  bg: "#2A2F2D",
  surface: "#313735",
  sand: "#F8F4ED",
  ink: "#1E2321",
  green: "#679E86",
  sage: "#879F95",
  muted: "#AEB6B1",
  line: "rgba(248, 244, 237, 0.12)",
  inkLine: "rgba(30, 35, 33, 0.14)",
};

const frameTheme: CaseStudyTheme = {
  bg: C.bg,
  fg: C.sand,
  muted: C.muted,
  accent: C.green,
  accentFg: C.ink,
  surface: C.surface,
  border: C.line,
};

const PX = "clamp(20px, 7.8vw, 112px)";
const ease = [0.25, 0.1, 0.25, 1] as const;
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, delay, ease },
});

const units = ["Agro.", "Hotels.", "Real Estate.", "Sport.", "Foundation."];

const figures = [
  { value: 20, suffix: "+", label: "Years building businesses" },
  { value: 1000, suffix: "+", label: "People across the group" },
  { value: 4, suffix: "", label: "Countries in the region" },
  { value: 6, suffix: "", label: "Business areas on one site" },
];

const index = [
  {
    title: "Navigation",
    img: "/projects/faro-verde/hero.jpg",
    text: "A dedicated “Hacemos” menu and anchor menus for each unit let visitors jump from the group straight to Agro, Real Estate, Tourism, Equestrian or the Foundation.",
  },
  {
    title: "Purpose",
    img: "/projects/faro-verde/statement.jpg",
    text: "Right after the hero, one sentence sets the tone — “Siempre hay una mejor forma de hacer las cosas”. Big type, lots of air, nothing else.",
  },
  {
    title: "Values",
    img: "/projects/faro-verde/modo-faro.jpg",
    text: "The “modo Faro”: the group’s way of working as a statement and three principles — a list pattern reused across the site.",
  },
  {
    title: "Business index",
    img: "/projects/faro-verde/business-areas.jpg",
    text: "Agro, Hotels, Real Estate, Sports and Foundation as a typographic index over full-bleed imagery, linking to each unit and its brands.",
  },
  {
    title: "Unit sliders",
    img: "/projects/faro-verde/hotels.jpg",
    text: "Slider families for every unit — productive units, offices, housing, equestrian, golf, health, training, agro — each with desktop and mobile variants.",
  },
  {
    title: "Key figures",
    img: "/projects/faro-verde/figures.jpg",
    text: "20+ years, 1,000+ people and 4 countries next to the group’s commitment to sustainable, socially responsible business.",
  },
  {
    title: "Origin",
    img: "/projects/faro-verde/origin.jpg",
    text: "Tandil as the starting point and the region as the horizon — the origin story closes the homepage.",
  },
];

const steps = [
  { title: "Discovery", text: "Mapping the group: business units, audiences — partners, talent, community — and what each one needed to say." },
  { title: "Architecture", text: "Group-level pages plus a navigation layer for units: the Hacemos menu and anchor menus per business." },
  { title: "Patterns", text: "Statements, value lists, key figures, testimonies, contact blocks and animated word separators." },
  { title: "Unit sliders", text: "A slider family per business unit, designed once and varied with content, on desktop and mobile." },
  { title: "Foundation", text: "A sub-site for Fundación Faro built from the same kit, with its own tone and separators." },
];

const colors = [
  { name: "Charcoal", hex: "#2A2F2D", role: "Backgrounds & depth", fg: C.sand },
  { name: "Sand", hex: "#F8F4ED", role: "Light sections & type", fg: C.ink },
  { name: "Faro Green", hex: "#679E86", role: "Actions & highlights", fg: C.ink },
  { name: "Sage", hex: "#879F95", role: "Secondary type & accents", fg: C.ink },
];

const deliverables = [
  "Information architecture",
  "Navigation & anchor menus",
  "Custom pattern library",
  "Business unit sliders",
  "Fundación Faro pages",
  "Desktop & mobile design",
];

const mobileScreens = [
  "/projects/faro-verde/mobile-00.jpg",
  "/projects/faro-verde/mobile-01.jpg",
  "/projects/faro-verde/mobile-02.jpg",
  "/projects/faro-verde/mobile-03.jpg",
];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % units.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ display: "inline-flex", overflow: "hidden", verticalAlign: "bottom", paddingBottom: "0.08em" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={units[i]}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          style={{ display: "inline-block", color: C.green }}
        >
          {units[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => Math.round(v).toLocaleString("en-US") + suffix);
  return (
    <motion.span
      onViewportEnter={() => animate(mv, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] })}
      viewport={{ once: true }}
    >
      {text}
    </motion.span>
  );
}

function Label({ children, color = C.muted, style }: { children: React.ReactNode; color?: string; style?: CSSProperties }) {
  return (
    <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color, ...style }}>
      {children}
    </p>
  );
}

export default function FaroVerdePage() {
  const [active, setActive] = useState(0);
  const statement =
    "Grupo Faro Verde was born in Tandil and grew into agribusiness, hotels, real estate, equestrian sport, golf and a foundation. The website had to make all of that feel like one group — and still give every business its own stage.";

  return (
    <SmoothScroll>
      <Navbar />
      <main className={urbanist.variable} style={{ backgroundColor: C.bg, color: C.sand, fontFamily: "var(--cs-body)", overflowX: "clip" }}>
        {/* ── Hero ── */}
        <section style={{ padding: `clamp(140px, 16vw, 200px) ${PX} 56px` }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", borderTop: `1px solid ${C.line}`, paddingTop: "18px", marginBottom: "clamp(40px, 6vw, 72px)" }}
          >
            <Label>Case study — Grupo Faro Verde</Label>
            <Label>Corporate website · UX/UI Design</Label>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            style={{ fontWeight: 800, fontSize: "clamp(56px, 11.5vw, 190px)", lineHeight: 0.9, letterSpacing: "-0.045em" }}
          >
            Faro Verde
            <br />
            <RotatingWord />
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginTop: "48px" }}
          >
            <p style={{ fontSize: "clamp(17px, 1.6vw, 21px)", lineHeight: 1.55, maxWidth: "560px", color: C.muted, fontWeight: 500 }}>
              One corporate website for a group from Tandil that grows agribusiness, hotels, real estate and sport — with sustainability at its core.
            </p>
            <a
              href="https://grupofaroverde.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 28px", background: C.green, color: C.ink, fontWeight: 700, fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}
            >
              Visit site <span aria-hidden>↗</span>
            </a>
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease }}
          style={{ position: "relative", aspectRatio: "1440 / 900", margin: "0 clamp(0px, 2vw, 24px)", borderRadius: "28px 28px 0 0", overflow: "hidden" }}
        >
          <Image src="/projects/faro-verde/hero.jpg" alt="Grupo Faro Verde homepage" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </motion.div>

        {/* ── Figures ── */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", borderBottom: `1px solid ${C.line}` }}>
          {figures.map((f, i) => (
            <motion.div
              key={f.label}
              {...reveal(i * 0.1)}
              style={{ padding: `48px ${i === 0 ? PX : "32px"}`, borderLeft: i ? `1px solid ${C.line}` : "none" }}
            >
              <div style={{ fontSize: "clamp(48px, 6vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: C.sand }}>
                <CountUp to={f.value} suffix={f.suffix} />
              </div>
              <p style={{ marginTop: "12px", fontSize: "14px", color: C.muted }}>{f.label}</p>
            </motion.div>
          ))}
        </section>

        {/* ── Brief ── */}
        <section style={{ background: C.sand, color: C.ink, padding: `clamp(96px, 12vw, 168px) ${PX}` }}>
          <Label color={C.green} style={{ marginBottom: "32px" }}>The brief</Label>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ staggerChildren: 0.025 }}
            style={{ fontSize: "clamp(28px, 3.8vw, 56px)", lineHeight: 1.12, fontWeight: 700, letterSpacing: "-0.025em", maxWidth: "1200px" }}
          >
            {statement.split(" ").map((w, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0.12 }, visible: { opacity: 1 } }}
                transition={{ duration: 0.4 }}
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {w}
              </motion.span>
            ))}
          </motion.p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px", marginTop: "clamp(64px, 8vw, 112px)", borderTop: `1px solid ${C.inkLine}`, paddingTop: "28px" }}>
            {[
              ["Role", "UX/UI Design"],
              ["Client", "Grupo Faro Verde"],
              ["Scope", "Group site, business units & foundation"],
              ["Platform", "Figma · WordPress"],
            ].map(([k, v], i) => (
              <motion.div key={k} {...reveal(i * 0.08)}>
                <Label color="rgba(30,35,33,0.5)" style={{ marginBottom: "10px" }}>{k}</Label>
                <p style={{ fontSize: "17px", fontWeight: 600 }}>{v}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Index ── */}
        <section style={{ padding: `clamp(96px, 12vw, 168px) ${PX}` }}>
          <motion.div {...reveal()} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "clamp(40px, 6vw, 96px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              What I<br />designed
            </h2>
            <p style={{ maxWidth: "380px", color: C.muted, fontSize: "16px", lineHeight: 1.7 }}>
              The site presents the group as an index of businesses — so the case study does too. Hover each piece to see it on the page.
            </p>
          </motion.div>
          <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", gap: "clamp(32px, 5vw, 80px)", alignItems: "flex-start" }}>
            <div className="cs-sticky" style={{ flex: "1 1 520px", minWidth: 0 }}>
              <div style={{ position: "relative", aspectRatio: "1440 / 900", borderRadius: "16px", overflow: "hidden", border: `1px solid ${C.line}`, background: C.surface }}>
                <AnimatePresence initial={false}>
                  <motion.div
                    key={index[active].img}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <Image src={index[active].img} alt={index[active].title} fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover" }} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <ol style={{ flex: "1 1 360px", listStyle: "none", borderTop: `1px solid ${C.line}` }}>
              {index.map((item, i) => (
                <li key={item.title} style={{ borderBottom: `1px solid ${C.line}` }}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    style={{ width: "100%", textAlign: "left", background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "22px 0", display: "flex", gap: "20px", alignItems: "baseline" }}
                  >
                    <span style={{ fontSize: "13px", fontWeight: 700, color: active === i ? C.green : C.muted, minWidth: "28px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ flex: 1 }}>
                      <span
                        style={{
                          display: "block",
                          fontSize: "clamp(26px, 3vw, 44px)",
                          fontWeight: 700,
                          letterSpacing: "-0.03em",
                          lineHeight: 1.05,
                          color: active === i ? C.sand : "rgba(248,244,237,0.35)",
                          transition: "color 0.3s",
                        }}
                      >
                        {item.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {active === i && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease }}
                            style={{ display: "block", overflow: "hidden" }}
                          >
                            <span style={{ display: "block", paddingTop: "12px", fontSize: "15px", lineHeight: 1.7, color: C.muted, maxWidth: "460px" }}>
                              {item.text}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Devices ── */}
        <section style={{ padding: `clamp(80px, 10vw, 140px) ${PX} clamp(120px, 14vw, 200px)`, background: C.surface, borderTop: `1px solid ${C.line}` }}>
          <motion.div {...reveal()} style={{ maxWidth: "640px", marginBottom: "64px" }}>
            <Label color={C.green} style={{ marginBottom: "20px" }}>The homepage</Label>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>Group first, then each business.</h2>
          </motion.div>
          <motion.div {...reveal(0.1)} style={{ position: "relative", maxWidth: "1100px", margin: "0 auto", paddingRight: "clamp(0px, 6vw, 80px)" }}>
            <BrowserFrame shot={{ src: "/projects/faro-verde/full-desktop.jpg", width: 1440, height: 8080, label: "Homepage — desktop" }} theme={frameTheme} url="https://grupofaroverde.com/" />
            <div style={{ position: "absolute", right: 0, bottom: "-12%", width: "clamp(110px, 21%, 230px)" }}>
              <Phone>
                <div className="cs-scroll-frame" style={{ position: "absolute", inset: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="cs-scroll-img"
                    src="/projects/faro-verde/full-mobile.jpg"
                    alt="Homepage — mobile"
                    loading="lazy"
                    style={{ "--cs-duration": "60s" } as CSSProperties}
                  />
                </div>
              </Phone>
            </div>
          </motion.div>
        </section>

        {/* ── Process ── */}
        <section style={{ background: C.green, color: C.ink, padding: `clamp(96px, 12vw, 168px) ${PX}` }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "flex-start" }}>
            <motion.div {...reveal()} className="cs-sticky" style={{ flex: "1 1 300px" }}>
              <Label color="rgba(30,35,33,0.6)" style={{ marginBottom: "20px" }}>Process</Label>
              <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "24px" }}>
                A system for a whole group.
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.7, maxWidth: "420px", color: "rgba(30,35,33,0.75)" }}>
                The Figma file is organised like the product: navigation and menus, custom patterns, slider families for every unit and a separate set of pages for Fundación Faro — all with mobile versions.
              </p>
            </motion.div>
            <ol style={{ flex: "1 1 420px", listStyle: "none" }}>
              {steps.map((s, i) => (
                <motion.li
                  key={s.title}
                  {...reveal(i * 0.06)}
                  style={{ display: "flex", gap: "28px", padding: "28px 0", borderTop: `1px solid ${C.inkLine}` }}
                >
                  <span style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 800, lineHeight: 0.85, color: "transparent", WebkitTextStroke: `1.5px ${C.ink}`, minWidth: "1.3em" }}>
                    {i + 1}
                  </span>
                  <span>
                    <span style={{ display: "block", fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>{s.title}</span>
                    <span style={{ display: "block", fontSize: "15px", lineHeight: 1.7, color: "rgba(30,35,33,0.75)" }}>{s.text}</span>
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>
          <motion.figure {...reveal()} style={{ marginTop: "clamp(64px, 8vw, 112px)" }}>
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 40px 100px -40px rgba(0,0,0,0.5)" }}>
              <Image src="/projects/faro-verde/figma-system.jpg" alt="Faro Verde Figma file" width={1600} height={1215} sizes="100vw" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <figcaption style={{ fontSize: "13px", marginTop: "14px", color: "rgba(30,35,33,0.7)" }}>
              Inside the Figma file — navigation, custom patterns, unit sliders and the Fundación Faro pages.
            </figcaption>
          </motion.figure>
        </section>

        {/* ── Mobile marquee ── */}
        <section style={{ background: C.sand, color: C.ink, padding: `clamp(96px, 12vw, 160px) 0`, overflow: "hidden" }}>
          <motion.div {...reveal()} style={{ padding: `0 ${PX}`, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>In your pocket.</h2>
            <p style={{ maxWidth: "420px", fontSize: "16px", lineHeight: 1.7, color: "rgba(30,35,33,0.7)" }}>
              On mobile the hero becomes a stack of entry points, business areas turn into a tappable list and long statements reflow for one-handed reading.
            </p>
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            style={{ display: "flex", gap: "28px", width: "max-content" }}
          >
            {[...mobileScreens, ...mobileScreens, ...mobileScreens, ...mobileScreens].map((src, i) => (
              <div
                key={i}
                style={{ position: "relative", width: "clamp(180px, 18vw, 250px)", aspectRatio: "390 / 844", borderRadius: "28px", overflow: "hidden", boxShadow: "0 30px 60px -25px rgba(30,35,33,0.45)", flexShrink: 0 }}
              >
                <Image src={src} alt="Faro Verde mobile screen" fill sizes="250px" style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Visual language ── */}
        <section style={{ padding: `clamp(96px, 12vw, 160px) 0 0` }}>
          <motion.div {...reveal()} style={{ padding: `0 ${PX}`, marginBottom: "48px" }}>
            <Label color={C.green} style={{ marginBottom: "20px" }}>Visual language</Label>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "clamp(24px, 5vw, 80px)" }}>
              <span style={{ fontSize: "clamp(120px, 18vw, 280px)", fontWeight: 800, letterSpacing: "-0.06em", lineHeight: 0.8 }}>Aa</span>
              <div style={{ paddingBottom: "12px" }}>
                {[
                  ["Indivisible", "Headlines & statements"],
                  ["Urbanist", "Figures & accents"],
                  ["Aptos", "Body copy"],
                ].map(([n, r]) => (
                  <p key={n} style={{ fontSize: "clamp(20px, 2.2vw, 30px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.4 }}>
                    {n} <span style={{ fontSize: "14px", fontWeight: 500, letterSpacing: 0, color: C.muted, marginLeft: "8px" }}>{r}</span>
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
          {colors.map((c, i) => (
            <motion.div
              key={c.hex}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              whileHover={{ paddingTop: 52, paddingBottom: 52 }}
              style={{ background: c.hex, color: c.fg, padding: `32px ${PX}`, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", borderTop: i === 0 ? `1px solid ${C.line}` : "none" }}
            >
              <span style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em" }}>{c.name}</span>
              <span style={{ fontSize: "14px", opacity: 0.75 }}>{c.role}</span>
              <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.14em" }}>{c.hex}</span>
            </motion.div>
          ))}
        </section>

        {/* ── Closing ── */}
        <section style={{ padding: `clamp(96px, 12vw, 160px) ${PX} clamp(64px, 8vw, 96px)` }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)" }}>
            <motion.div {...reveal()} style={{ flex: "1 1 280px" }}>
              <Label color={C.green} style={{ marginBottom: "24px" }}>Deliverables</Label>
              <ol style={{ listStyle: "none" }}>
                {deliverables.map((d, i) => (
                  <li key={d} style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: `1px solid ${C.line}`, fontSize: "17px", fontWeight: 600 }}>
                    <span style={{ color: C.muted, fontSize: "13px", minWidth: "24px", paddingTop: "3px" }}>{String(i + 1).padStart(2, "0")}</span>
                    {d}
                  </li>
                ))}
              </ol>
            </motion.div>
            <motion.h2
              {...reveal(0.15)}
              style={{ flex: "2 1 480px", fontSize: "clamp(36px, 5.2vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}
            >
              One voice for the group. <span style={{ color: C.green }}>A stage for every business.</span>
            </motion.h2>
          </div>
        </section>

        {/* ── Next ── */}
        <section style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ padding: `24px ${PX}` }}>
            <Link href="/#projects" style={{ fontSize: "14px", color: C.muted, textDecoration: "none" }}>
              ← All projects
            </Link>
          </div>
          <motion.div whileHover={{ backgroundColor: C.green, color: C.ink }} style={{ borderTop: `1px solid ${C.line}` }}>
            <Link
              href="/projects/atp-dmc"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", padding: `40px ${PX}`, color: "inherit", textDecoration: "none" }}
            >
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Next project</span>
              <span style={{ fontSize: "clamp(36px, 6vw, 96px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>ATP DMC →</span>
            </Link>
          </motion.div>
        </section>
      </main>
    </SmoothScroll>
  );
}
