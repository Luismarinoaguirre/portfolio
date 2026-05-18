"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

function Pill({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        borderRadius: "999px",
        border: "1px solid var(--border)",
        fontSize: "13px",
        color: "var(--foreground)",
        background: "var(--glass-soft)",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--accent)",
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Photo rises from below
  const photoY = useTransform(scrollYProgress, [0.15, 0.5], [300, 0]);
  const photoOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);

  return (
    <section id="about" ref={sectionRef}>
      {/* Part 1: Big "About" title — full width, centered */}
      <div
        className="section-px flex flex-col items-center justify-center"
        style={{ paddingTop: "clamp(60px, 10vw, 120px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}
      >
        <AnimatedText
          text="About Me"
          className="font-bold tracking-[-0.04em] text-foreground text-center"
          delay={0.1}
          as="h2"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        />
        <FadeIn delay={0.3}>
          <p
            className="text-muted text-center leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)", maxWidth: "520px", marginTop: "clamp(16px, 2vw, 24px)" }}
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
            {/* Photo — large, centered, rises on scroll */}
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
              {/* Bottom gradient fade to background */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "250px",
                  background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* Name — centered over the photo, at the bottom half */}
            <div
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{
                bottom: "clamp(20px, 4vw, 60px)",
                left: "0",
                right: "0",
              }}
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

      {/* Part 3: Manifesto card */}
      <div
        style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(64px, 8vw, 120px)" }}
      >
        <div
          style={{
            maxWidth: "820px",
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
                overflow: "hidden",
              }}
            >
              {/* CAPABILITIES row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    padding: "28px 24px",
                    borderRight: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    Capabilities
                  </span>
                </div>
                <div
                  style={{
                    padding: "24px 28px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    alignContent: "flex-start",
                  }}
                >
                  {["UX Design", "UI Design", "Product Design", "Graphic Design", "Industrial Design", "Prototyping"].map((label) => (
                    <Pill key={label} label={label} />
                  ))}
                </div>
              </div>

              {/* IDENTITY row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    padding: "28px 24px",
                    borderRight: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    Identity
                  </span>
                </div>
                <div style={{ padding: "28px 28px" }}>
                  <p
                    style={{
                      fontSize: "clamp(14px, 1.5vw, 16px)",
                      color: "var(--foreground)",
                      fontStyle: "italic",
                      lineHeight: "1.65",
                    }}
                  >
                    Designing with clarity, intention, and a user-first approach to create meaningful digital products.
                  </p>
                </div>
              </div>

              {/* STACK row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                }}
              >
                <div
                  style={{
                    padding: "28px 24px",
                    borderRight: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    Stack
                  </span>
                </div>
                <div
                  style={{
                    padding: "24px 28px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    alignContent: "flex-start",
                  }}
                >
                  {["Figma", "Adobe Suite", "Framer", "Next.js", "Tailwind CSS", "Framer Motion"].map((label) => (
                    <Pill key={label} label={label} />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Statement */}
          <FadeIn delay={0.3}>
            <p
              className="text-foreground font-semibold uppercase text-center"
              style={{
                fontSize: "clamp(13px, 1.4vw, 16px)",
                letterSpacing: "0.04em",
                lineHeight: "1.7",
                marginTop: "clamp(48px, 6vw, 80px)",
                opacity: 0.9,
              }}
            >
              I turn ideas into digital products with purpose, clarity, and edge.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
