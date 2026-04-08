"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";
import { projects } from "@/lib/projects";

export default function Projects() {
  // Define masonry layout — alternating tall/short cards
  const getCardHeight = (index: number): string => {
    const heights = [
      "aspect-[3/4]",   // tall
      "aspect-[4/3]",   // wide
      "aspect-[3/4]",   // tall
      "aspect-[1/1]",   // square
      "aspect-[4/3]",   // wide
      "aspect-[3/4]",   // tall
    ];
    return heights[index % heights.length];
  };

  return (
    <section id="projects" className="py-32 md:py-40 px-8 md:px-16 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <FadeIn>
            <span className="text-accent text-xs font-mono tracking-[0.2em] uppercase">
              Selected Work
            </span>
          </FadeIn>
          <AnimatedText
            text="Projects"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] mt-4"
            delay={0.1}
            as="h2"
          />
        </div>

        {/* Masonry grid — Pinterest style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 space-y-5 md:space-y-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block break-inside-avoid"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
                delay: (i % 3) * 0.1,
              }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Image container with varying heights */}
              <div
                className={`relative ${getCardHeight(i)} overflow-hidden rounded-2xl`}
                style={{ backgroundColor: project.color }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                {/* Bottom gradient for text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Info overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-base font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Title below image */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-muted group-hover:text-foreground transition-colors duration-300">
                  {project.title}
                </span>
                <span className="text-[11px] text-muted/40 font-mono">
                  {project.year}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
