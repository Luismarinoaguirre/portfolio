"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Figtree, Gloock } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import { BrowserFrame, type CaseStudyTheme } from "@/components/case-study/CaseStudy";

const serif = Gloock({ weight: "400", subsets: ["latin"], variable: "--atp-serif" });
const sans = Figtree({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--cs-body" });

const C = {
  cream: "#F6F9F0",
  paper: "#ECF0E3",
  teal: "#002A34",
  lagoon: "#00666E",
  muted: "#4E6A70",
  line: "rgba(0, 42, 52, 0.16)",
};

const frameTheme: CaseStudyTheme = {
  bg: C.cream,
  fg: C.teal,
  muted: C.muted,
  accent: C.lagoon,
  accentFg: C.cream,
  surface: "#FFFFFF",
  border: C.line,
};

const PX = "clamp(20px, 7.8vw, 112px)";
const ease = [0.25, 0.1, 0.25, 1] as const;
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, delay, ease },
});

const serifStyle: CSSProperties = { fontFamily: "var(--atp-serif)", fontWeight: 400, letterSpacing: "-0.01em" };

const regions = [
  { name: "Northwest", note: "Salta, Jujuy and the high Andes", img: "/projects/atp-dmc/region-northwest.jpg" },
  { name: "Iguazú & Northeast", note: "Waterfalls, rainforest, Jesuit missions", img: "/projects/atp-dmc/region-iguazu.jpg" },
  { name: "Buenos Aires & Pampas", note: "The capital and the open plains", img: "/projects/atp-dmc/region-buenos-aires.jpg" },
  { name: "Wine Country", note: "Mendoza and the Uco Valley", img: "/projects/atp-dmc/region-wine.jpg" },
  { name: "Patagonia", note: "Glaciers and the edge of the world", img: "/projects/atp-dmc/region-patagonia.jpg" },
];

const contents = ["Leisure", "MICE", "Destination — Argentina", "Region", "Why ATP", "Who we are", "Sustainability", "Contact"];

const postcards = [
  { src: "/projects/atp-dmc/hero-who-we-are.jpg", caption: "Who we are", rotate: -7, x: "-58%", y: 18 },
  { src: "/projects/atp-dmc/hero-destination.jpg", caption: "Destination", rotate: 0, x: "0%", y: 0 },
  { src: "/projects/atp-dmc/hero-why-atp.jpg", caption: "Why ATP", rotate: 6, x: "58%", y: 22 },
];

const itinerary = [
  { title: "UX audit", text: "Reviewed the old site’s structure, content and flows to find where agencies were getting lost." },
  { title: "Architecture", text: "A destination-first structure with Leisure and MICE as parallel paths, plus Why ATP, Who we are and Sustainability." },
  { title: "Components", text: "Heroes, anchor menus, product selectors, statement blocks, carousels, galleries, FAQs, forms and CTAs." },
  { title: "Galleries", text: "Curated image sets for every section and region — Northwest, Iguazú, Buenos Aires, Wine Country, Patagonia." },
  { title: "Templates", text: "Eight page templates, each designed for desktop and mobile, ready for development." },
];

const stamps = [
  { name: "Deep Teal", hex: "#002A34", fg: C.cream, rotate: -4 },
  { name: "Lagoon", hex: "#00666E", fg: C.cream, rotate: 3 },
  { name: "Mist", hex: "#F6F9F0", fg: C.teal, rotate: -2 },
  { name: "White", hex: "#FFFFFF", fg: C.teal, rotate: 5 },
];

function Caps({ children, color = C.muted, style }: { children: ReactNode; color?: string; style?: CSSProperties }) {
  return (
    <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color, ...style }}>
      {children}
    </p>
  );
}

function Fig({ n, children }: { n: number; children: ReactNode }) {
  return (
    <figcaption style={{ ...serifStyle, fontSize: "15px", color: C.muted, marginTop: "14px", fontStyle: "italic" }}>
      <span style={{ color: C.lagoon }}>Fig. {n} — </span>
      {children}
    </figcaption>
  );
}

export default function AtpDmcPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className={`${serif.variable} ${sans.variable}`} style={{ backgroundColor: C.cream, color: C.teal, fontFamily: "var(--cs-body)", overflowX: "clip" }}>
        {/* ── Cover ── */}
        <section style={{ padding: `clamp(130px, 14vw, 180px) ${PX} 0` }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px", borderTop: `2px solid ${C.teal}`, borderBottom: `1px solid ${C.line}`, padding: "14px 0" }}
          >
            <Caps color={C.teal}>ATP DMC</Caps>
            <Caps style={{ textAlign: "center" }}>Case study · Tourism</Caps>
            <Caps style={{ textAlign: "right" }}>Argentina Travel Partners</Caps>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease }}
            style={{ ...serifStyle, fontSize: "clamp(52px, 9vw, 150px)", lineHeight: 0.98, textAlign: "center", margin: "clamp(48px, 7vw, 96px) auto 32px", maxWidth: "1200px" }}
          >
            A gateway to a country of extremes
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>
            <Caps style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 80px)" }}>
              Destination management · Website redesign · UX/UI Design
            </Caps>
          </motion.div>
          <motion.figure initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 0.6, ease }}>
            <div style={{ position: "relative", aspectRatio: "1440 / 780", overflow: "hidden" }}>
              <Image src="/projects/atp-dmc/hero-destination.jpg" alt="ATP DMC Argentina destination page" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
            </div>
            <Fig n={1}>The Argentina destination page. The five regions double as the hero’s navigation.</Fig>
          </motion.figure>
        </section>

        {/* ── Credits ── */}
        <section style={{ padding: `clamp(56px, 7vw, 96px) ${PX} 0` }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
            {[
              ["Role", "UX/UI Design"],
              ["Client", "Argentina Travel Partners"],
              ["Scope", "UX audit, redesign & component library"],
              ["Audiences", "Leisure agencies · MICE planners"],
            ].map(([k, v], i) => (
              <motion.div key={k} {...reveal(i * 0.08)} style={{ padding: "24px 20px", textAlign: "center", borderLeft: i ? `1px solid ${C.line}` : "none" }}>
                <Caps style={{ marginBottom: "10px" }}>{k}</Caps>
                <p style={{ ...serifStyle, fontSize: "20px", lineHeight: 1.3 }}>{v}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Editorial intro ── */}
        <section style={{ padding: `clamp(80px, 10vw, 140px) ${PX}` }}>
          <motion.div {...reveal()} style={{ columns: "2 320px", columnGap: "clamp(32px, 5vw, 72px)", fontSize: "17px", lineHeight: 1.8, color: C.muted, maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ marginBottom: "20px" }}>
              <span style={{ ...serifStyle, float: "left", fontSize: "88px", lineHeight: 0.8, padding: "8px 12px 0 0", color: C.lagoon }}>A</span>
              TP is a destination management company. International agencies trust them to run private journeys and large incentive programs across Argentina — from the salt flats of the Northwest to the glaciers of Patagonia.
            </p>
            <p style={{ marginBottom: "20px" }}>
              The previous website didn’t reflect the quality of that work: it lacked visual impact, the experience was fragmented and the two very different audiences ATP serves — leisure agencies and MICE planners — had no clear path.
            </p>
            <p>
              After a UX audit, I redesigned the site around two audiences and one destination: immersive photography, editorial copy and a structure that gets agents to the right information fast — with a component library and eight page templates, all designed for desktop and mobile.
            </p>
          </motion.div>
          <motion.blockquote {...reveal(0.1)} style={{ ...serifStyle, fontSize: "clamp(30px, 4.4vw, 64px)", lineHeight: 1.1, textAlign: "center", maxWidth: "1000px", margin: "clamp(64px, 8vw, 112px) auto 0", color: C.lagoon }}>
            “Most destinations have a single identity. Argentina has five.”
            <Caps style={{ marginTop: "24px" }}>From the destination page copy</Caps>
          </motion.blockquote>
        </section>

        {/* ── Two audiences ── */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))" }}>
          {[
            {
              n: "01",
              title: "Leisure",
              who: "Travel agencies & tour operators",
              needs: ["Inspiration by region", "Experiences to build itineraries", "A local partner they can trust"],
              bg: C.lagoon,
            },
            {
              n: "02",
              title: "MICE",
              who: "Event & incentive planners",
              needs: ["Venues and logistics at scale", "Proof of operational capacity", "A direct line to the team"],
              bg: C.teal,
            },
          ].map((a, i) => (
            <motion.div key={a.title} {...reveal(i * 0.15)} style={{ background: a.bg, color: C.cream, padding: `clamp(64px, 8vw, 112px) clamp(28px, 6vw, 88px)` }}>
              <Caps color="rgba(246,249,240,0.6)" style={{ marginBottom: "20px" }}>Audience {a.n}</Caps>
              <h2 style={{ ...serifStyle, fontSize: "clamp(56px, 7vw, 112px)", lineHeight: 1 }}>{a.title}</h2>
              <p style={{ fontSize: "17px", margin: "12px 0 36px", color: "rgba(246,249,240,0.8)" }}>{a.who}</p>
              <ul style={{ listStyle: "none", borderTop: "1px solid rgba(246,249,240,0.2)" }}>
                {a.needs.map((n) => (
                  <li key={n} style={{ padding: "14px 0", borderBottom: "1px solid rgba(246,249,240,0.2)", fontSize: "16px" }}>
                    {n}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>
        <section style={{ padding: `clamp(56px, 7vw, 96px) ${PX}`, textAlign: "center" }}>
          <motion.div {...reveal()}>
            <Image src="/projects/atp-dmc/detail-nav.jpg" alt="Argentina, Leisure and MICE navigation" width={440} height={76} style={{ width: "min(440px, 100%)", height: "auto", display: "inline-block", borderRadius: "999px" }} />
            <p style={{ ...serifStyle, fontSize: "clamp(22px, 2.4vw, 32px)", maxWidth: "720px", margin: "28px auto 0", lineHeight: 1.3 }}>
              One persistent navigation serves both: Argentina, Leisure and MICE are always one tap away.
            </p>
          </motion.div>
        </section>

        {/* ── The route ── */}
        <section style={{ background: C.paper, padding: `clamp(80px, 10vw, 140px) 0` }}>
          <motion.div {...reveal()} style={{ padding: `0 ${PX}`, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "64px" }}>
            <div>
              <Caps color={C.lagoon} style={{ marginBottom: "16px" }}>The route</Caps>
              <h2 style={{ ...serifStyle, fontSize: "clamp(40px, 5.5vw, 84px)", lineHeight: 1 }}>Five regions,<br />one template.</h2>
            </div>
            <p style={{ maxWidth: "400px", fontSize: "16px", lineHeight: 1.7, color: C.muted }}>
              The country is the product. A map, a region index and a single region template let ATP present five very different territories with one consistent system.
            </p>
          </motion.div>
          <div style={{ overflowX: "auto", padding: `0 ${PX} 8px`, scrollbarWidth: "none" }}>
            <div style={{ position: "relative", minWidth: "880px" }}>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.8, ease }}
                style={{ position: "absolute", top: "7px", left: "7px", right: "7px", borderTop: `2px dashed ${C.lagoon}`, transformOrigin: "left" }}
              />
              <ol style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "24px", position: "relative" }}>
                {regions.map((r, i) => (
                  <motion.li key={r.name} {...reveal(0.3 + i * 0.18)}>
                    <span style={{ display: "block", width: "16px", height: "16px", borderRadius: "50%", background: i === 4 ? C.lagoon : C.cream, border: `2px solid ${C.lagoon}`, marginBottom: "24px" }} />
                    <Caps color={C.lagoon} style={{ marginBottom: "8px" }}>Stop {String(i + 1).padStart(2, "0")}</Caps>
                    <p style={{ ...serifStyle, fontSize: "24px", lineHeight: 1.15, marginBottom: "6px" }}>{r.name}</p>
                    <p style={{ fontSize: "14px", color: C.muted, lineHeight: 1.5 }}>{r.note}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
          <div style={{ padding: `clamp(64px, 8vw, 112px) ${PX} 0`, display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 64px)", alignItems: "flex-start" }}>
            <motion.figure {...reveal()} style={{ flex: "0 1 300px" }}>
              <Image src="/projects/atp-dmc/detail-map.jpg" alt="Map of Argentina with the five regions" width={300} height={280} style={{ width: "100%", height: "auto", mixBlendMode: "multiply" }} />
              <Fig n={2}>The map introduces the territory before the details.</Fig>
            </motion.figure>
            <div style={{ flex: "1 1 480px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px" }}>
              {regions.map((r, i) => (
                <motion.div key={r.img} {...reveal(i * 0.08)} style={{ position: "relative", aspectRatio: "591 / 170", overflow: "hidden", borderRadius: "6px" }}>
                  <Image src={r.img} alt={`${r.name} region card`} fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectFit: "cover", objectPosition: "top" }} />
                </motion.div>
              ))}
              <motion.p {...reveal(0.4)} style={{ ...serifStyle, fontStyle: "italic", fontSize: "15px", color: C.muted, alignSelf: "center" }}>
                <span style={{ color: C.lagoon }}>Fig. 3 — </span>Region cards: one component, five landscapes.
              </motion.p>
            </div>
          </div>
          <motion.figure {...reveal()} style={{ padding: `clamp(48px, 6vw, 80px) ${PX} 0` }}>
            <Image src="/projects/atp-dmc/detail-regions.jpg" alt="Region index inside the destination hero" width={1400} height={120} sizes="100vw" style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
            <Fig n={4}>The same route as a hero component — a visual index of the five regions.</Fig>
          </motion.figure>
        </section>

        {/* ── Contents ── */}
        <section style={{ padding: `clamp(80px, 10vw, 140px) ${PX}`, display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "flex-start" }}>
          <motion.div {...reveal()} style={{ flex: "1 1 360px" }}>
            <Caps color={C.lagoon} style={{ marginBottom: "16px" }}>Contents</Caps>
            <h2 style={{ ...serifStyle, fontSize: "clamp(40px, 5.5vw, 84px)", lineHeight: 1, marginBottom: "40px" }}>Eight templates</h2>
            <ol style={{ listStyle: "none" }}>
              {contents.map((c, i) => (
                <li key={c} style={{ display: "flex", alignItems: "baseline", gap: "12px", padding: "12px 0", fontSize: "19px" }}>
                  <span style={serifStyle}>{c}</span>
                  <span style={{ flex: 1, borderBottom: `1px dotted ${C.muted}`, transform: "translateY(-5px)" }} />
                  <span style={{ ...serifStyle, color: C.lagoon }}>{String(i + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ol>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: C.muted, marginTop: "32px", maxWidth: "440px" }}>
              Every template was designed for desktop and mobile from the same component library, so new regions or programs can be added without new design work.
            </p>
          </motion.div>
          <motion.div {...reveal(0.15)} style={{ flex: "1 1 420px", maxWidth: "620px" }}>
            <BrowserFrame shot={{ src: "/projects/atp-dmc/page-destination.jpg", width: 617, height: 4096, label: "Destination — Argentina" }} theme={frameTheme} />
            <Caps style={{ textAlign: "center", marginTop: "14px" }}>Destination page · hover to pause</Caps>
          </motion.div>
        </section>

        {/* ── Postcards ── */}
        <section style={{ background: C.teal, color: C.cream, padding: `clamp(80px, 10vw, 140px) ${PX} clamp(120px, 14vw, 180px)`, overflow: "hidden" }}>
          <motion.div {...reveal()} style={{ textAlign: "center", marginBottom: "clamp(56px, 7vw, 96px)" }}>
            <Caps color="rgba(246,249,240,0.6)" style={{ marginBottom: "16px" }}>Editorial heroes</Caps>
            <h2 style={{ ...serifStyle, fontSize: "clamp(40px, 5.5vw, 84px)", lineHeight: 1 }}>Every page opens<br />like a postcard.</h2>
          </motion.div>
          <div style={{ position: "relative", maxWidth: "1100px", margin: "0 auto", aspectRatio: "1100 / 420" }}>
            {postcards.map((p, i) => (
              <motion.figure
                key={p.src}
                initial={{ x: "0%", y: 0, rotate: 0 }}
                whileInView={{ x: p.x, y: p.y, rotate: p.rotate }}
                whileHover={{ y: p.y - 16, scale: 1.04, zIndex: 5 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1.1, delay: 0.15, ease }}
                style={{ position: "absolute", left: "28%", top: 0, width: "44%", zIndex: i === 1 ? 2 : 1, background: "#fff", padding: "clamp(6px, 0.9vw, 12px)", paddingBottom: "clamp(28px, 3.4vw, 48px)", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.55)" }}
              >
                <div style={{ position: "relative", aspectRatio: "1440 / 780" }}>
                  <Image src={p.src} alt={`${p.caption} page hero`} fill sizes="45vw" style={{ objectFit: "cover" }} />
                </div>
                <figcaption style={{ ...serifStyle, color: C.teal, fontStyle: "italic", fontSize: "clamp(12px, 1.4vw, 18px)", position: "absolute", left: "clamp(10px, 1.4vw, 18px)", bottom: "clamp(6px, 0.9vw, 12px)" }}>
                  {p.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
          <motion.p {...reveal()} style={{ textAlign: "center", maxWidth: "560px", margin: "clamp(56px, 7vw, 96px) auto 0", fontSize: "16px", lineHeight: 1.7, color: "rgba(246,249,240,0.75)" }}>
            Full-bleed photography and a serif title give each section a sense of place — the Floralis Genérica for Why ATP, the Patagonian lakes for Who we are.
          </motion.p>
        </section>

        {/* ── Trust ── */}
        <section style={{ padding: `clamp(80px, 10vw, 140px) ${PX}` }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}>
            <motion.div {...reveal()} style={{ flex: "1 1 320px" }}>
              <Caps color={C.lagoon} style={{ marginBottom: "16px" }}>Trust for B2B buyers</Caps>
              <h2 style={{ ...serifStyle, fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05, marginBottom: "24px" }}>The details agencies check before they commit.</h2>
              <p style={{ fontSize: "16px", lineHeight: 1.7, color: C.muted, marginBottom: "32px" }}>
                A contact page organised by department with direct lines, a short form, and certifications in plain sight — sustainability and quality seals that matter to international partners.
              </p>
              <Image src="/projects/atp-dmc/detail-members.jpg" alt="Certifications ATP is a member of" width={380} height={190} style={{ width: "min(380px, 100%)", height: "auto", mixBlendMode: "multiply" }} />
            </motion.div>
            <motion.figure {...reveal(0.15)} style={{ flex: "1.4 1 460px" }}>
              <div style={{ background: "#fff", border: `1px solid ${C.line}`, padding: "clamp(12px, 2vw, 24px)", boxShadow: "0 30px 70px -35px rgba(0,42,52,0.35)" }}>
                <Image src="/projects/atp-dmc/detail-form.jpg" alt="Contact form with departments" width={1060} height={420} sizes="(max-width: 900px) 100vw, 55vw" style={{ width: "100%", height: "auto" }} />
              </div>
              <Fig n={5}>Contact by department — Leisure, MICE, Product and Cruises.</Fig>
            </motion.figure>
          </div>
        </section>

        {/* ── Itinerary (process) ── */}
        <section style={{ background: C.paper, padding: `clamp(80px, 10vw, 140px) ${PX}` }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px, 6vw, 96px)" }}>
            <motion.div {...reveal()} style={{ flex: "1 1 300px" }}>
              <Caps color={C.lagoon} style={{ marginBottom: "16px" }}>Process</Caps>
              <h2 style={{ ...serifStyle, fontSize: "clamp(40px, 5.5vw, 84px)", lineHeight: 1 }}>The itinerary</h2>
            </motion.div>
            <ol style={{ flex: "2 1 460px", listStyle: "none", position: "relative", paddingLeft: "36px" }}>
              <span style={{ position: "absolute", left: "7px", top: "10px", bottom: "10px", borderLeft: `2px dotted ${C.lagoon}` }} />
              {itinerary.map((s, i) => (
                <motion.li key={s.title} {...reveal(i * 0.08)} style={{ position: "relative", paddingBottom: i === itinerary.length - 1 ? 0 : "36px" }}>
                  <span style={{ position: "absolute", left: "-36px", top: "6px", width: "16px", height: "16px", borderRadius: "50%", background: C.paper, border: `2px solid ${C.lagoon}` }} />
                  <Caps color={C.lagoon} style={{ marginBottom: "6px" }}>Day {String(i + 1).padStart(2, "0")}</Caps>
                  <p style={{ ...serifStyle, fontSize: "28px", marginBottom: "6px" }}>{s.title}</p>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: C.muted, maxWidth: "560px" }}>{s.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
          <motion.figure {...reveal()} style={{ marginTop: "clamp(64px, 8vw, 112px)" }}>
            <div style={{ overflow: "hidden", borderRadius: "8px" }}>
              <Image src="/projects/atp-dmc/figma-system.jpg" alt="ATP DMC Figma file" width={1600} height={1396} sizes="100vw" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <Fig n={6}>Inside the Figma file — component library, regional galleries and page templates.</Fig>
          </motion.figure>
        </section>

        {/* ── Stamps & type ── */}
        <section style={{ padding: `clamp(80px, 10vw, 140px) ${PX}` }}>
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <Caps color={C.lagoon} style={{ marginBottom: "16px" }}>Visual language</Caps>
            <h2 style={{ ...serifStyle, fontSize: "clamp(40px, 5.5vw, 84px)", lineHeight: 1 }}>Colour & type</h2>
          </motion.div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px, 3vw, 40px)", marginBottom: "clamp(64px, 8vw, 104px)" }}>
            {stamps.map((s, i) => (
              <motion.div
                key={s.hex}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
                style={{
                  width: "clamp(150px, 18vw, 210px)",
                  padding: "12px",
                  backgroundColor: "#fff",
                  backgroundImage: `radial-gradient(circle, ${C.cream} 4px, transparent 4.5px)`,
                  backgroundSize: "16px 16px",
                  backgroundPosition: "-8px -8px",
                  filter: "drop-shadow(0 10px 18px rgba(0,42,52,0.14))",
                }}
              >
                <div style={{ background: s.hex, color: s.fg, aspectRatio: "4 / 5", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between", border: s.hex === "#FFFFFF" || s.hex === "#F6F9F0" ? `1px solid ${C.line}` : "none" }}>
                  <Caps color={s.fg} style={{ fontSize: "9px", opacity: 0.7 }}>Argentina</Caps>
                  <div>
                    <p style={{ ...serifStyle, fontSize: "24px", lineHeight: 1.1 }}>{s.name}</p>
                    <p style={{ fontSize: "12px", letterSpacing: "0.12em", marginTop: "6px", opacity: 0.75 }}>{s.hex}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", borderTop: `1px solid ${C.line}` }}>
            {[
              { sample: "Aa", name: "Editorial serif", role: "Headlines & page titles", font: serifStyle },
              { sample: "Aa", name: "Humanist sans", role: "Navigation, labels & UI", font: { fontFamily: "var(--cs-body)", fontWeight: 500 } },
            ].map((f, i) => (
              <motion.div key={f.name} {...reveal(i * 0.1)} style={{ display: "flex", alignItems: "flex-end", gap: "24px", padding: "32px 0", borderBottom: `1px solid ${C.line}` }}>
                <span style={{ ...f.font, fontSize: "clamp(96px, 12vw, 168px)", lineHeight: 0.8 }}>{f.sample}</span>
                <span>
                  <span style={{ ...serifStyle, display: "block", fontSize: "26px" }}>{f.name}</span>
                  <Caps style={{ marginTop: "6px" }}>{f.role}</Caps>
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Closing ── */}
        <section style={{ padding: `clamp(64px, 8vw, 112px) ${PX} clamp(80px, 10vw, 140px)`, textAlign: "center", borderTop: `2px solid ${C.teal}` }}>
          <motion.p {...reveal()} style={{ ...serifStyle, fontSize: "clamp(34px, 5vw, 76px)", lineHeight: 1.08, maxWidth: "1100px", margin: "0 auto 40px" }}>
            A site as considered as the journeys ATP designs — built to make agencies say <span style={{ color: C.lagoon, fontStyle: "italic" }}>yes</span> to Argentina.
          </motion.p>
          <motion.div {...reveal(0.15)}>
            <Caps>UX audit · Information architecture · Component library · Regional galleries · 8 templates · Desktop & mobile</Caps>
          </motion.div>
        </section>

        {/* ── Next ── */}
        <section style={{ padding: `32px ${PX} 72px`, borderTop: `1px solid ${C.line}`, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
          <Link href="/#projects" style={{ fontSize: "14px", color: C.muted, textDecoration: "none" }}>
            ← All projects
          </Link>
          <Link href="/projects/daly-nosh" style={{ textDecoration: "none", color: C.teal, textAlign: "right" }}>
            <Caps style={{ marginBottom: "8px" }}>Next project</Caps>
            <span style={{ ...serifStyle, fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1 }}>
              Daly Nosh <span style={{ fontStyle: "italic", color: C.lagoon }}>→</span>
            </span>
          </Link>
        </section>
      </main>
    </SmoothScroll>
  );
}
