"use client";

import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40" style={{ paddingLeft: "112px", paddingRight: "112px" }}>
      <div className="max-w-[1600px] mx-auto">
        {/* Phrase */}
        <FadeIn>
          <p
            className="text-foreground font-light leading-[1.15] tracking-[-0.03em]"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", maxWidth: "700px", marginBottom: "80px" }}
          >
            Got a project in mind?{" "}
            <span className="text-muted">
              Let&apos;s bring your ideas to life.
            </span>
          </p>
        </FadeIn>

        {/* Email */}
        <div style={{ marginBottom: "64px" }}>
          <FadeIn delay={0.15}>
            <span
              className="text-accent font-mono uppercase block"
              style={{ fontSize: "13px", letterSpacing: "0.15em", marginBottom: "20px" }}
            >
              Email Me
            </span>
          </FadeIn>
          <FadeIn delay={0.25}>
            <a
              href="mailto:luismarinoaguiree@gmail.com"
              className="text-foreground hover:text-accent transition-colors duration-300 font-light leading-none block"
              style={{ fontSize: "clamp(32px, 5.5vw, 72px)", letterSpacing: "-0.03em" }}
            >
              luismarinoaguiree@gmail.com
            </a>
          </FadeIn>
        </div>

        {/* WhatsApp / Phone */}
        <div style={{ marginBottom: "80px" }}>
          <FadeIn delay={0.35}>
            <span
              className="text-accent font-mono uppercase block"
              style={{ fontSize: "13px", letterSpacing: "0.15em", marginBottom: "20px" }}
            >
              Message Me
            </span>
          </FadeIn>
          <FadeIn delay={0.45}>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors duration-300 font-light leading-none block"
              style={{ fontSize: "clamp(32px, 5.5vw, 72px)", letterSpacing: "-0.03em" }}
            >
              +54 9 11 1234-5678
            </a>
          </FadeIn>
        </div>

        {/* Divider + socials */}
        <FadeIn delay={0.55}>
          <div className="border-t border-white/[0.08]" style={{ paddingTop: "40px" }}>
            <div style={{ display: "flex", gap: "40px" }}>
              <a
                href="https://www.linkedin.com/in/luis-bautista-marino-aguirre-28aa96203/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300"
                style={{ fontSize: "14px" }}
              >
                LinkedIn
              </a>
              <a
                href="mailto:luismarinoaguiree@gmail.com"
                className="text-muted hover:text-foreground transition-colors duration-300"
                style={{ fontSize: "14px" }}
              >
                Email
              </a>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300"
                style={{ fontSize: "14px" }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
