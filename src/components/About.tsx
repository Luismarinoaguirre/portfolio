"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

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
        className="flex flex-col items-center justify-center"
        style={{ paddingTop: "120px", paddingBottom: "80px", paddingLeft: "112px", paddingRight: "112px" }}
      >
        <AnimatedText
          text="About"
          className="font-bold tracking-[-0.04em] text-foreground text-center"
          delay={0.1}
          as="h2"
          style={{ fontSize: "clamp(80px, 12vw, 180px)" }}
        />
        <FadeIn delay={0.3}>
          <p
            className="text-muted text-center leading-relaxed"
            style={{ fontSize: "18px", maxWidth: "520px", marginTop: "24px" }}
          >
            Rethinking processes through design to create meaningful, user-centered digital experiences.
          </p>
        </FadeIn>
      </div>

      {/* Part 2: Photo with name overlay — like "Hello, I'm Simon" */}
      <div
        className="relative"
        style={{ paddingLeft: "112px", paddingRight: "112px" }}
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="relative flex flex-col items-center" style={{ minHeight: "950px" }}>

            {/* Photo — large, centered, rises on scroll */}
            <motion.div
              className="relative mx-auto overflow-hidden"
              style={{
                y: photoY,
                opacity: photoOpacity,
                width: "100%",
                maxWidth: "900px",
                height: "900px",
                borderRadius: "32px 32px 0 0",
              }}
            >
              <Image
                src="/profile.png"
                alt="Luis Marino"
                fill
                className="object-contain object-bottom"
                sizes="900px"
              />
              {/* Bottom gradient fade to black */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "250px",
                  background: "linear-gradient(to top, #050505 0%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* Name — centered over the photo, at the bottom half */}
            <div
              className="absolute z-10 flex flex-col items-center pointer-events-none"
              style={{
                bottom: "60px",
                left: "0",
                right: "0",
              }}
            >
              <AnimatedText
                text="Luis Bautista"
                className="font-bold text-foreground leading-[0.95] tracking-[-0.04em] text-center"
                delay={0.2}
                as="h3"
                style={{ fontSize: "clamp(50px, 8vw, 120px)" }}
              />
              <AnimatedText
                text="Marino Aguirre"
                className="font-bold text-foreground leading-[0.95] tracking-[-0.04em] text-center"
                delay={0.3}
                as="h3"
                style={{ fontSize: "clamp(50px, 8vw, 120px)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Info blocks below */}
      <div
        style={{ paddingLeft: "112px", paddingRight: "112px", paddingTop: "80px", paddingBottom: "120px" }}
      >
        <div className="max-w-[1600px] mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "60px",
            }}
          >
            {/* Capabilities */}
            <FadeIn delay={0.1}>
              <div>
                <span
                  className="text-foreground font-mono uppercase block"
                  style={{ fontSize: "12px", letterSpacing: "0.08em", marginBottom: "16px" }}
                >
                  (01_Core.Capabilities)
                </span>
                {["UX Design", "UI Design", "Product Design", "Graphic Design", "Industrial Design", "Prototyping"].map((item) => (
                  <span
                    key={item}
                    className="text-muted/60 font-mono uppercase block"
                    style={{ fontSize: "13px", lineHeight: "2.2" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Identity */}
            <FadeIn delay={0.2}>
              <div>
                <span
                  className="text-foreground font-mono uppercase block"
                  style={{ fontSize: "12px", letterSpacing: "0.08em", marginBottom: "16px" }}
                >
                  (02_Identity)
                </span>
                <p
                  className="text-muted/60 uppercase"
                  style={{ fontSize: "13px", lineHeight: "1.9", fontFamily: "var(--font-mono)" }}
                >
                  Designing with clarity, intention, and a user-first approach to create meaningful digital products.
                </p>
              </div>
            </FadeIn>

            {/* Skill Stack */}
            <FadeIn delay={0.3}>
              <div>
                <span
                  className="text-foreground font-mono uppercase block"
                  style={{ fontSize: "12px", letterSpacing: "0.08em", marginBottom: "16px" }}
                >
                  (03_Skill.Stack)
                </span>
                {["Figma", "Adobe Suite", "Framer", "Next.js", "Tailwind CSS", "Framer Motion"].map((item) => (
                  <span
                    key={item}
                    className="text-muted/60 font-mono uppercase block"
                    style={{ fontSize: "13px", lineHeight: "2.2" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Statement */}
          <FadeIn delay={0.4}>
            <p
              className="text-foreground/90 font-semibold uppercase text-center"
              style={{ fontSize: "16px", letterSpacing: "0.04em", lineHeight: "1.7", marginTop: "80px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
            >
              I turn ideas into digital products with purpose, clarity, and edge.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
