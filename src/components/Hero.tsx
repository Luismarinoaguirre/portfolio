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
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingLeft: "112px", paddingRight: "112px" }}
    >
      {/* Sparkles background */}
      <div className="absolute inset-0 w-full h-full">
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
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 20%, #050505 80%)",
          }}
        />
      </div>

      {/* Gradient accent line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ top: "58%", width: "600px" }}
      >
        <div
          className="absolute inset-x-20 top-0 h-[2px] w-3/4 blur-sm"
          style={{
            background:
              "linear-gradient(to right, transparent, #FFD000, transparent)",
          }}
        />
        <div
          className="absolute inset-x-20 top-0 h-px w-3/4"
          style={{
            background:
              "linear-gradient(to right, transparent, #FFD000, transparent)",
          }}
        />
        <div
          className="absolute inset-x-60 top-0 h-[5px] w-1/4 blur-sm"
          style={{
            background:
              "linear-gradient(to right, transparent, #FFD000, transparent)",
          }}
        />
        <div
          className="absolute inset-x-60 top-0 h-px w-1/4"
          style={{
            background:
              "linear-gradient(to right, transparent, #FFD000, transparent)",
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto w-full text-center relative z-20">
        {/* Role tag */}
        <FadeIn delay={0.3}>
          <span
            className="inline-block text-accent text-xs font-mono tracking-[0.25em] uppercase"
            style={{ marginBottom: "40px" }}
          >
            UX/UI Designer
          </span>
        </FadeIn>

        {/* Main heading — large, bold, centered */}
        <FadeIn delay={0.5}>
          <h1
            className="font-bold leading-[1.05] tracking-[-0.03em] text-foreground"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              marginBottom: "32px",
            }}
          >
            Designing digital
            <br />
            experiences that{" "}
            <span className="relative inline-block" style={{ minWidth: "clamp(120px, 20vw, 320px)" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  className="text-accent inline-block"
                  initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.8} className="flex justify-center">
          <p
            className="text-muted text-sm md:text-base max-w-lg leading-relaxed text-center"
          >
            I am a UX/UI designer with experience in graphic and industrial
            design. Rethinking processes through design to create meaningful,
            user-centered products.
          </p>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-3"
          style={{ marginTop: "80px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-transparent via-muted/40 to-muted/10"
            animate={{ scaleY: [1, 0.6, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
