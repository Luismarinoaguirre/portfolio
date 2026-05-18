"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { SparklesCore } from "./ui/sparkles";

const rotatingWords = ["connect.", "inspire.", "impact.", "matter.", "resonate."];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-px">
      {/* Sparkles — hidden in light mode via CSS (.hero-sparkles-wrap) */}
      <div className="hero-sparkles-wrap absolute inset-0 w-full h-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          speed={1.5}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 20%, var(--background) 80%)",
          }}
        />
      </div>
      {/* Ambient glow — navy in light mode, hidden in dark */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(var(--accent-rgb, 0,51,160), 0.12), transparent 60%)",
        }}
      />

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
            className="font-bold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{
              fontSize: "clamp(2rem, 6vw, 5.5rem)",
              marginBottom: "clamp(20px, 3vw, 32px)",
            }}
          >
            Designing digital
            <br />
            experiences that{" "}
            <span
              className="relative inline-flex justify-start"
              style={{ width: "clamp(110px, 20vw, 340px)", verticalAlign: "baseline" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  className="text-accent absolute left-0"
                  initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
              {/* Invisible text to hold height */}
              <span className="invisible">resonate.</span>
            </span>
          </h1>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.8} className="flex justify-center">
          <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed text-center">
            I am a UX/UI designer with experience in graphic and industrial
            design. Rethinking processes through design to create meaningful,
            user-centered products.
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
