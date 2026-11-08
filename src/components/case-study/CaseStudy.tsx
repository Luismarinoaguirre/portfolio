"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

export type CaseStudyTheme = {
  bg: string;
  fg: string;
  muted: string;
  accent: string;
  accentFg: string;
  surface: string;
  border: string;
};

export type ScrollShot = { src: string; width: number; height: number; label: string };

export type CaseStudyData = {
  title: string;
  eyebrow: string;
  tagline: string;
  liveUrl?: string;
  theme: CaseStudyTheme;
  screenAspect: string;
  hero: { src: string; alt: string };
  meta: { label: string; value: string }[];
  intro: { eyebrow: string; heading: string; body: string[] };
  challenges: { title: string; text: string }[];
  showcase: { eyebrow: string; heading: string; text: string; pages: ScrollShot[] };
  process: {
    heading: string;
    intro: string;
    steps: { title: string; text: string }[];
    image: { src: string; width: number; height: number; caption: string };
  };
  highlights: { src: string; alt: string; title: string; text: string }[];
  mobile?: { heading: string; text: string; screens: string[]; scroll?: ScrollShot };
  system: {
    colors: { name: string; hex: string }[];
    fonts: { name: string; role: string; sampleVar?: string }[];
  };
  deliverables: string[];
  closing: string;
  next: { href: string; title: string };
};

const ease = [0.25, 0.1, 0.25, 1] as const;
const PX = "clamp(20px, 7.8vw, 112px)";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -80px 0px" },
  transition: { duration: 0.9, delay, ease },
});

function Eyebrow({ children, color }: { children: ReactNode; color: string }) {
  return (
    <p
      style={{
        fontFamily: "var(--cs-label)",
        fontSize: "11px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color,
        marginBottom: "20px",
      }}
    >
      {children}
    </p>
  );
}

export function BrowserFrame({ shot, theme, url }: { shot: ScrollShot; theme: CaseStudyTheme; url?: string }) {
  const ratio = shot.height / shot.width;
  const domain = url ? new URL(url).hostname.replace(/^www\./, "") : shot.label;
  return (
    <div
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        border: `1px solid ${theme.border}`,
        background: theme.surface,
        boxShadow: "0 40px 100px -30px rgba(0,0,0,0.45)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", borderBottom: `1px solid ${theme.border}` }}>
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
          <span key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.85 }} />
        ))}
        <span
          style={{
            flex: 1,
            margin: "0 auto",
            maxWidth: "320px",
            textAlign: "center",
            fontSize: "11px",
            color: theme.muted,
            background: theme.bg,
            borderRadius: "6px",
            padding: "4px 12px",
            fontFamily: "var(--cs-body)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {domain}
        </span>
        <span style={{ width: "46px" }} />
      </div>
      <div className="cs-scroll-frame" style={{ aspectRatio: "16 / 10", background: theme.bg }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="cs-scroll-img"
          src={shot.src}
          alt={shot.label}
          loading="lazy"
          style={{ "--cs-duration": `${Math.max(14, ratio * 5)}s` } as CSSProperties}
        />
      </div>
    </div>
  );
}

export function Phone({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "44px",
        padding: "2px",
        background: "linear-gradient(145deg, #58585a 0%, #2a2a2c 45%, #48484a 80%, #1c1c1e 100%)",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      <div style={{ borderRadius: "42px", padding: "8px", background: "#111" }}>
        <div style={{ borderRadius: "34px", overflow: "hidden", position: "relative", background: "#000", aspectRatio: "390 / 844" }}>
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "30%",
              height: "22px",
              background: "#000",
              borderRadius: "20px",
              zIndex: 3,
            }}
          />
          {children}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudy({ data, fontClassName }: { data: CaseStudyData; fontClassName: string }) {
  const t = data.theme;
  const body: CSSProperties = { fontFamily: "var(--cs-body)", fontSize: "16px", lineHeight: 1.8, color: t.muted };
  const h2: CSSProperties = {
    fontFamily: "var(--cs-display)",
    fontSize: "clamp(36px, 5vw, 68px)",
    lineHeight: 1.05,
    letterSpacing: "-0.01em",
    color: t.fg,
  };

  return (
    <SmoothScroll>
      <Navbar />
      <main className={fontClassName} style={{ backgroundColor: t.bg, color: t.fg, fontFamily: "var(--cs-body)", overflowX: "clip" }}>
        {/* ── Hero ── */}
        <section style={{ padding: `clamp(140px, 16vw, 200px) ${PX} clamp(64px, 8vw, 112px)` }}>
          <div style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              style={{ fontFamily: "var(--cs-label)", fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", color: t.accent, marginBottom: "20px" }}
            >
              {data.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease }}
              style={{ fontFamily: "var(--cs-display)", fontSize: "clamp(56px, 11vw, 176px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              {data.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginTop: "32px" }}
            >
              <p style={{ fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.6, maxWidth: "620px", color: t.muted }}>{data.tagline}</p>
              {data.liveUrl && (
                <a
                  href={data.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 26px",
                    borderRadius: "999px",
                    background: t.accent,
                    color: t.accentFg,
                    fontSize: "14px",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                >
                  Visit live site <span aria-hidden>↗</span>
                </a>
              )}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease }}
            style={{
              position: "relative",
              aspectRatio: data.screenAspect,
              borderRadius: "clamp(12px, 1.6vw, 24px)",
              overflow: "hidden",
              border: `1px solid ${t.border}`,
              boxShadow: "0 50px 120px -40px rgba(0,0,0,0.5)",
            }}
          >
            <Image src={data.hero.src} alt={data.hero.alt} fill priority sizes="(max-width: 1600px) 100vw, 1400px" style={{ objectFit: "cover", objectPosition: "top" }} />
          </motion.div>
        </section>

        {/* ── Meta ── */}
        <section style={{ padding: `56px ${PX}`, borderBottom: `1px solid ${t.border}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px" }}>
            {data.meta.map((m, i) => (
              <motion.div key={m.label} {...reveal(i * 0.08)}>
                <Eyebrow color={t.accent}>{m.label}</Eyebrow>
                <p style={{ fontSize: "16px", color: t.fg, lineHeight: 1.5 }}>{m.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Intro ── */}
        <section style={{ padding: `clamp(80px, 12vw, 160px) ${PX}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "clamp(32px, 6vw, 96px)" }}>
            <motion.div {...reveal()}>
              <Eyebrow color={t.accent}>{data.intro.eyebrow}</Eyebrow>
              <h2 style={h2}>{data.intro.heading}</h2>
            </motion.div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "flex-end" }}>
              {data.intro.body.map((p, i) => (
                <motion.p key={i} {...reveal(0.1 + i * 0.1)} style={body}>
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Challenges ── */}
        <section style={{ padding: `0 ${PX} clamp(80px, 12vw, 160px)` }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "20px" }}>
            {data.challenges.map((c, i) => (
              <motion.div
                key={c.title}
                {...reveal(i * 0.12)}
                style={{ padding: "36px", borderRadius: "20px", background: t.surface, border: `1px solid ${t.border}` }}
              >
                <span style={{ fontFamily: "var(--cs-display)", fontSize: "44px", color: t.accent, lineHeight: 1, display: "block", marginBottom: "28px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontFamily: "var(--cs-display)", fontSize: "24px", lineHeight: 1.2, marginBottom: "14px", color: t.fg }}>{c.title}</h3>
                <p style={{ ...body, fontSize: "15px" }}>{c.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Showcase ── */}
        <section style={{ padding: `clamp(80px, 10vw, 140px) ${PX}`, background: t.surface, borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}` }}>
          <motion.div {...reveal()} style={{ maxWidth: "720px", marginBottom: "64px" }}>
            <Eyebrow color={t.accent}>{data.showcase.eyebrow}</Eyebrow>
            <h2 style={{ ...h2, marginBottom: "24px" }}>{data.showcase.heading}</h2>
            <p style={body}>{data.showcase.text}</p>
          </motion.div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: data.showcase.pages.length > 1 ? "repeat(auto-fit, minmax(min(100%, 460px), 1fr))" : "1fr",
              gap: "32px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {data.showcase.pages.map((shot, i) => (
              <motion.div key={shot.src} {...reveal(i * 0.15)}>
                <BrowserFrame shot={shot} theme={t} url={data.liveUrl} />
                <p style={{ fontFamily: "var(--cs-label)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: t.muted, marginTop: "16px", textAlign: "center" }}>
                  {shot.label} · hover to pause
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section style={{ padding: `clamp(80px, 12vw, 160px) ${PX}` }}>
          <motion.div {...reveal()} style={{ maxWidth: "720px", marginBottom: "64px" }}>
            <Eyebrow color={t.accent}>Process</Eyebrow>
            <h2 style={{ ...h2, marginBottom: "24px" }}>{data.process.heading}</h2>
            <p style={body}>{data.process.intro}</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "0", borderTop: `1px solid ${t.border}`, marginBottom: "64px" }}>
            {data.process.steps.map((s, i) => (
              <motion.div key={s.title} {...reveal(i * 0.1)} style={{ padding: "28px 24px 28px 0", borderBottom: `1px solid ${t.border}` }}>
                <span style={{ fontFamily: "var(--cs-label)", fontSize: "11px", letterSpacing: "0.2em", color: t.accent }}>
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <h3 style={{ fontFamily: "var(--cs-display)", fontSize: "22px", margin: "14px 0 10px", color: t.fg }}>{s.title}</h3>
                <p style={{ ...body, fontSize: "14px", lineHeight: 1.7 }}>{s.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.figure {...reveal()}>
            <div style={{ borderRadius: "20px", overflow: "hidden", border: `1px solid ${t.border}`, background: "#2c2c2c" }}>
              <Image
                src={data.process.image.src}
                alt={data.process.image.caption}
                width={data.process.image.width}
                height={data.process.image.height}
                sizes="(max-width: 1600px) 100vw, 1400px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <figcaption style={{ fontSize: "13px", color: t.muted, marginTop: "16px" }}>{data.process.image.caption}</figcaption>
          </motion.figure>
        </section>

        {/* ── Highlights ── */}
        <section style={{ padding: `0 ${PX} clamp(80px, 10vw, 140px)`, display: "flex", flexDirection: "column", gap: "clamp(64px, 9vw, 128px)" }}>
          {data.highlights.map((h, i) => (
            <div
              key={h.src}
              style={{ display: "flex", flexWrap: "wrap", flexDirection: i % 2 ? "row-reverse" : "row", alignItems: "center", gap: "clamp(32px, 5vw, 72px)" }}
            >
              <motion.div
                style={{ flex: "1 1 560px", minWidth: 0 }}
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 1.1, ease }}
              >
                <div style={{ position: "relative", aspectRatio: data.screenAspect, borderRadius: "18px", overflow: "hidden", border: `1px solid ${t.border}`, boxShadow: "0 30px 80px -30px rgba(0,0,0,0.4)" }}>
                  <Image src={h.src} alt={h.alt} fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
              </motion.div>
              <motion.div {...reveal(0.15)} style={{ flex: "1 1 300px", maxWidth: "440px" }}>
                <span style={{ fontFamily: "var(--cs-display)", fontSize: "18px", color: t.accent }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 style={{ fontFamily: "var(--cs-display)", fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.1, margin: "12px 0 18px", color: t.fg }}>{h.title}</h3>
                <p style={body}>{h.text}</p>
              </motion.div>
            </div>
          ))}
        </section>

        {/* ── Mobile ── */}
        {data.mobile && (
          <section style={{ padding: `clamp(80px, 12vw, 160px) ${PX}`, background: t.surface, borderTop: `1px solid ${t.border}` }}>
            <motion.div {...reveal()} style={{ maxWidth: "720px", marginBottom: "72px" }}>
              <Eyebrow color={t.accent}>Mobile</Eyebrow>
              <h2 style={{ ...h2, marginBottom: "24px" }}>{data.mobile.heading}</h2>
              <p style={body}>{data.mobile.text}</p>
            </motion.div>
            <div style={{ overflowX: "auto", margin: `0 calc(-1 * ${PX})`, padding: `0 ${PX} 24px`, scrollbarWidth: "none" }}>
            <div style={{ display: "flex", gap: "clamp(16px, 2.5vw, 36px)", alignItems: "flex-start", width: "max-content", margin: "0 auto" }}>
              {data.mobile.scroll && (
                <motion.div {...reveal(0)} style={{ width: "clamp(170px, 17vw, 250px)" }}>
                  <Phone>
                    <div className="cs-scroll-frame" style={{ position: "absolute", inset: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="cs-scroll-img"
                        src={data.mobile.scroll.src}
                        alt={data.mobile.scroll.label}
                        loading="lazy"
                        style={{ "--cs-duration": `${Math.max(20, (data.mobile.scroll.height / data.mobile.scroll.width) * 2.6)}s` } as CSSProperties}
                      />
                    </div>
                  </Phone>
                </motion.div>
              )}
              {data.mobile.screens.map((src, i) => (
                <motion.div key={src} {...reveal(0.1 + i * 0.1)} style={{ width: "clamp(170px, 17vw, 250px)", marginTop: i % 2 === 0 ? "48px" : "0" }}>
                  <Phone>
                    <Image src={src} alt={`${data.title} mobile screen ${i + 1}`} fill sizes="260px" style={{ objectFit: "cover", objectPosition: "top" }} />
                  </Phone>
                </motion.div>
              ))}
            </div>
            </div>
          </section>
        )}

        {/* ── Design system ── */}
        <section style={{ padding: `clamp(80px, 12vw, 160px) ${PX}` }}>
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <Eyebrow color={t.accent}>Visual language</Eyebrow>
            <h2 style={h2}>Color & type</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px", marginBottom: "72px" }}>
            {data.system.colors.map((c, i) => (
              <motion.div
                key={c.hex}
                {...reveal(i * 0.08)}
                style={{
                  aspectRatio: "1 / 1.15",
                  borderRadius: "16px",
                  background: c.hex,
                  border: `1px solid ${t.border}`,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  color: isLight(c.hex) ? "#1a1a1a" : "#fff",
                }}
              >
                <span style={{ fontSize: "15px", fontWeight: 500 }}>{c.name}</span>
                <span style={{ fontFamily: "var(--cs-label)", fontSize: "11px", letterSpacing: "0.12em", opacity: 0.7, marginTop: "4px" }}>{c.hex.toUpperCase()}</span>
              </motion.div>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${t.border}` }}>
            {data.system.fonts.map((f, i) => (
              <motion.div
                key={f.name}
                {...reveal(i * 0.08)}
                style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "16px", padding: "28px 0", borderBottom: `1px solid ${t.border}` }}
              >
                <span style={{ fontFamily: f.sampleVar ? `var(${f.sampleVar})` : "var(--cs-display)", fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1, color: t.fg }}>
                  {f.name}
                </span>
                <span style={{ fontFamily: "var(--cs-label)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: t.muted }}>{f.role}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Closing ── */}
        <section style={{ padding: `clamp(80px, 12vw, 160px) ${PX}`, background: t.accent, color: t.accentFg }}>
          <motion.p {...reveal()} style={{ fontFamily: "var(--cs-label)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.75, marginBottom: "24px" }}>
            Deliverables
          </motion.p>
          <motion.div {...reveal(0.1)} style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "64px" }}>
            {data.deliverables.map((d) => (
              <span key={d} style={{ padding: "10px 18px", borderRadius: "999px", border: `1px solid ${t.accentFg}`, fontSize: "14px", opacity: 0.9 }}>
                {d}
              </span>
            ))}
          </motion.div>
          <motion.h2 {...reveal(0.2)} style={{ ...h2, color: t.accentFg, maxWidth: "1100px" }}>
            {data.closing}
          </motion.h2>
        </section>

        {/* ── Next ── */}
        <section style={{ padding: `48px ${PX} 64px`, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
          <Link href="/#projects" style={{ fontSize: "15px", color: t.muted, textDecoration: "none" }}>
            ← All projects
          </Link>
          <Link href={data.next.href} style={{ textDecoration: "none", color: t.fg, textAlign: "right" }}>
            <span style={{ display: "block", fontFamily: "var(--cs-label)", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: t.muted, marginBottom: "8px" }}>
              Next project
            </span>
            <span style={{ fontFamily: "var(--cs-display)", fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1 }}>{data.next.title} →</span>
          </Link>
        </section>
      </main>
    </SmoothScroll>
  );
}

function isLight(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 160;
}
