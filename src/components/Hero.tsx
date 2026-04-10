"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingLeft: "112px", paddingRight: "112px" }}>
      <div className="max-w-[1600px] mx-auto w-full text-center">
        {/* Role tag */}
        <FadeIn delay={0.3}>
          <span className="inline-block text-accent text-xs font-mono tracking-[0.25em] uppercase mb-10">
            UX/UI Designer
          </span>
        </FadeIn>

        {/* Main heading — centered, large, like fluid.glass */}
        <div className="mb-10">
          <AnimatedText
            text="Designing digital"
            className="text-[clamp(2.2rem,7vw,5.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-foreground"
            delay={0.4}
          />
          <AnimatedText
            text="experiences that connect."
            className="text-[clamp(2.2rem,7vw,5.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-foreground"
            delay={0.55}
          />
        </div>

        {/* Description */}
        <FadeIn delay={0.9} className="flex justify-center">
          <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed text-center">
            I am a UX/UI designer with experience in graphic and industrial
            design. Rethinking processes through design to create meaningful,
            user-centered products.
          </p>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-3"
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
