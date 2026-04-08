"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luis-bautista-marino-aguirre-28aa96203/" },
  { label: "Email", href: "mailto:luismarinoaguiree@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 px-8 md:px-16 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          <FadeIn>
            <span className="text-accent text-xs font-mono tracking-[0.2em] uppercase">
              Contact
            </span>
          </FadeIn>

          <AnimatedText
            text="Let's work together"
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mt-4 mb-8 tracking-[-0.03em]"
            delay={0.1}
            as="h2"
          />

          <FadeIn delay={0.4}>
            <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed mb-12">
              Have a project in mind? I&apos;d love to hear about it.
              Let&apos;s create something meaningful together.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <a
              href="mailto:luismarinoaguiree@gmail.com"
              className="group inline-flex items-center gap-4 text-foreground"
            >
              <span className="text-lg md:text-xl font-medium group-hover:text-accent transition-colors duration-300">
                luismarinoaguiree@gmail.com
              </span>
              <motion.svg
                className="w-5 h-5 group-hover:text-accent transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ x: 4 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </a>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex gap-8 mt-16 pt-10 border-t border-border">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-300 relative group/link"
                >
                  {social.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/link:w-full" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
