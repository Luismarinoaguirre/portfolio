"use client";

import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-8 md:px-16 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Photo */}
          <FadeIn direction="left" className="lg:col-span-4">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-card-bg">
              <Image
                src="/profile.png"
                alt="Luis Marino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </FadeIn>

          {/* Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <FadeIn>
              <span className="text-accent text-xs font-mono tracking-[0.2em] uppercase">
                About
              </span>
            </FadeIn>

            <AnimatedText
              text="Luis Bautista Marino Aguirre"
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 mb-8 tracking-[-0.02em]"
              delay={0.1}
              as="h2"
            />

            <FadeIn delay={0.3}>
              <div className="space-y-5 text-muted leading-[1.8] text-[15px] max-w-2xl">
                <p>
                  I am a UX/UI designer with a strong background in graphic
                  and industrial design. This multidisciplinary approach
                  allows me to rethink processes and create meaningful
                  digital experiences.
                </p>
                <p>
                  My work spans web and mobile platforms — from e-commerce
                  solutions to educational tools — always focusing on
                  user-centered design and pixel-perfect execution.
                </p>
              </div>
            </FadeIn>

            {/* Disciplines */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-3 mt-10">
                {["UX Design", "UI Design", "Graphic Design", "Industrial Design"].map((d) => (
                  <span
                    key={d}
                    className="text-xs text-foreground/80 border border-border rounded-full px-4 py-2 hover:border-accent/30 transition-colors duration-300"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.6}>
              <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-border">
                {[
                  { value: "6+", label: "Projects" },
                  { value: "3", label: "Disciplines" },
                  { value: "UX/UI", label: "Focus" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="text-2xl md:text-3xl font-semibold text-accent">
                      {stat.value}
                    </span>
                    <p className="text-xs text-muted mt-2 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
