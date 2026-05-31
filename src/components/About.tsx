"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

/* ── Pill ── */
function Pill({ label }: { label: string }) {
  return (
    <span
      className="manifest-pill"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "7px 14px",
        borderRadius: "999px",
        border: "1px solid var(--border)",
        background: "var(--glass-soft)",
        fontSize: "12px",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        letterSpacing: "0.02em",
        color: "var(--foreground)",
        whiteSpace: "nowrap" as const,
        transition: "border-color 0.3s, background 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <span
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "var(--accent)",
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  );
}

/* ── Manifest column (horizontal layout) ── */
interface ManifestColProps {
  num: string;
  label: string;
  isItalic?: boolean;
  hasBorder?: boolean;
  children: React.ReactNode;
}

function ManifestCol({ num, label, isItalic, hasBorder, children }: ManifestColProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(16px, 2vw, 24px)",
        paddingLeft: hasBorder ? "clamp(24px, 3vw, 48px)" : 0,
        borderLeft: hasBorder ? "1px solid var(--border)" : "none",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.22em",
            color: "var(--accent)",
            textTransform: "uppercase" as const,
          }}
        >
          {num}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            letterSpacing: "0.06em",
            color: "var(--foreground)",
            textTransform: "uppercase" as const,
            fontWeight: 500,
          }}
        >
          {label}
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          fontSize: "clamp(14px, 1.4vw, 16px)",
          lineHeight: "1.6",
          color: isItalic ? "var(--muted)" : "var(--foreground)",
          fontWeight: isItalic ? 300 : 400,
          fontStyle: isItalic ? "italic" : "normal",
          letterSpacing: "-0.005em",
          display: "flex",
          flexDirection: "column" as const,
          gap: "16px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0.15, 0.5], [300, 0]);
  const photoOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

  return (
    <section id="about" ref={sectionRef}>

      {/* Part 1: Big title */}
      <div
        className="section-px flex flex-col items-center"
        style={{
          paddingTop: "clamp(60px, 10vw, 120px)",
          paddingBottom: "clamp(40px, 6vw, 80px)",
          gap: "clamp(8px, 1vw, 14px)",
        }}
      >
        <AnimatedText
          text="About Me"
          className="font-bold tracking-[-0.04em] text-foreground text-center"
          delay={0.1}
          as="h2"
          style={{ fontSize: "clamp(56px, 12vw, 180px)", lineHeight: 1 }}
        />
        <FadeIn delay={0.3}>
          <p
            className="text-muted text-center leading-relaxed"
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              maxWidth: "520px",
            }}
          >
            Rethinking processes through design to create meaningful, user-centered digital experiences.
          </p>
        </FadeIn>
      </div>

      {/* Part 2: Photo with name overlay */}
      <div className="section-px">
        <div className="section-container">
          <div
            className="relative flex flex-col items-center"
            style={{ minHeight: "clamp(400px, 70vw, 950px)" }}
          >
            <motion.div
              className="relative mx-auto overflow-hidden"
              style={{
                y: photoY,
                opacity: photoOpacity,
                width: "100%",
                maxWidth: "900px",
                height: "clamp(380px, 65vw, 900px)",
                borderRadius: "32px 32px 0 0",
              }}
            >
              <Image
                src="/profile.png"
                alt="Luis Marino"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 900px"
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "250px",
                  background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* Name overlay */}
            <div
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{ bottom: "clamp(20px, 4vw, 60px)", left: "0", right: "0" }}
            >
              <AnimatedText
                text="Luis Bautista"
                className="font-bold text-foreground leading-[0.95] tracking-[-0.04em] text-center"
                delay={0.2}
                as="h3"
                style={{ fontSize: "clamp(32px, 8vw, 120px)" }}
              />
              <AnimatedText
                text="Marino Aguirre"
                className="font-bold text-foreground leading-[0.95] tracking-[-0.04em] text-center"
                delay={0.3}
                as="h3"
                style={{ fontSize: "clamp(32px, 8vw, 120px)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Manifest card */}
      <div
        style={{
          paddingTop: "clamp(48px, 6vw, 80px)",
          paddingBottom: "clamp(64px, 8vw, 120px)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(16px, 4vw, 24px)",
            paddingRight: "clamp(16px, 4vw, 24px)",
          }}
        >
          <FadeIn delay={0.1}>
            <div
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "clamp(28px, 4vw, 56px)",
                boxShadow: "var(--shadow-card)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "clamp(24px, 3vw, 48px)",
              }}
            >
              {/* 01 — Identity */}
              <ManifestCol num="01" label="Identity" isItalic>
                Designing with clarity, intention, and a user-first
                approach to create meaningful digital products.
              </ManifestCol>

              {/* 02 — Capabilities */}
              <ManifestCol num="02" label="Capabilities" hasBorder>
                Six disciplines that ladder up to a single craft —
                thinking in systems, building with intention.
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["UX Design", "UI Design", "Product Design", "Graphic Design", "Industrial Design", "Prototyping"].map((l) => (
                    <Pill key={l} label={l} />
                  ))}
                </div>
              </ManifestCol>

              {/* 03 — Stack */}
              <ManifestCol num="03" label="Stack" hasBorder>
                Tools sharpened over six years across editorial,
                product, and brand work.
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Figma", "Adobe Suite", "Framer", "Next.js", "Tailwind CSS", "Framer Motion"].map((l) => (
                    <Pill key={l} label={l} />
                  ))}
                </div>
              </ManifestCol>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
