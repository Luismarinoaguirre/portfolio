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
              maxWidth: "600px",
            }}
          >
            I started in industrial design at UBA, learned to build brands and
            websites along the way, and landed in UX/UI — where all of it comes
            together. I design digital products with the rigor of a systems
            thinker and the eye of a visual designer.
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

    </section>
  );
}
