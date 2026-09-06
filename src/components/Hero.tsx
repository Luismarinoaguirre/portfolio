"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { CanvasText } from "./ui/canvas-text";
import { TextRoll } from "./ui/text-roll";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden section-px">
      <div className="section-container w-full text-center relative z-20">
        {/* Role tag */}
        <FadeIn delay={0.3}>
          <span
            className="inline-block text-accent text-xs font-mono tracking-[0.25em] uppercase"
            style={{ marginBottom: "clamp(24px, 4vw, 40px)" }}
          >
            UX/UI Designer
          </span>
        </FadeIn>

        {/* Main heading */}
        <FadeIn delay={0.5}>
          <h1
            className="leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{ fontWeight: 800, fontSize: "clamp(2rem, 6vw, 5.5rem)", marginBottom: "clamp(20px, 3vw, 32px)" }}
          >
            <TextRoll
              duration={0.5}
              getEnterDelay={(i) => i * 0.04}
              getExitDelay={(i) => i * 0.04 + 0.15}
            >
              Designing digital experiences that make an
            </TextRoll>
            <br />
            <CanvasText
              text="impact."
              backgroundClassName="bg-[var(--background)]"
              colors={[
                "rgba(var(--accent-rgb), 1)",
                "rgba(var(--accent-rgb), 0.9)",
                "rgba(var(--accent-rgb), 0.8)",
                "rgba(var(--accent-rgb), 0.7)",
                "rgba(var(--accent-rgb), 0.6)",
                "rgba(var(--accent-rgb), 0.5)",
                "rgba(var(--accent-rgb), 0.4)",
                "rgba(var(--accent-rgb), 0.3)",
                "rgba(var(--accent-rgb), 0.2)",
                "rgba(var(--accent-rgb), 0.1)",
              ]}
              lineGap={4}
              animationDuration={20}
            />
          </h1>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.8} className="flex justify-center">
          <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed text-center">
            UX/UI designer with a foundation in industrial and graphic design.
            I turn complex processes into clear, user-centered digital
            products — thinking in systems, from concept to interface.
          </p>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-3"
          style={{ marginTop: "clamp(40px, 6vw, 80px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent via-muted/40 to-muted/10"
            animate={{ scaleY: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
