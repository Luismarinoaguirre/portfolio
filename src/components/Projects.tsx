"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-40" style={{ paddingLeft: "112px", paddingRight: "112px" }}>
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <AnimatedText
            text="Selected Work"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]"
            delay={0.1}
            as="h2"
          />
          <FadeIn delay={0.2}>
            <span className="text-muted text-sm font-mono tracking-[0.1em] mt-3 inline-block">
              [{String(projects.length).padStart(2, "0")}]
            </span>
          </FadeIn>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
                delay: (i % 2) * 0.1,
              }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Image */}
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-2xl"
                style={{ backgroundColor: project.color }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

                {/* Category pill — top right, always visible */}
                <div
                  className="absolute top-5 right-5 rounded-full backdrop-blur-xl text-xs font-semibold tracking-[0.06em] uppercase z-10 border"
                  style={{
                    padding: "8px 18px",
                    backgroundColor:
                      project.category === "UX/UI" ? "rgba(255, 208, 0, 0.35)" :
                      project.category === "Web" ? "rgba(0, 180, 255, 0.35)" :
                      project.category === "Branding" ? "rgba(200, 100, 255, 0.35)" :
                      "rgba(255, 255, 255, 0.2)",
                    color:
                      project.category === "UX/UI" ? "#fff" :
                      project.category === "Web" ? "#fff" :
                      project.category === "Branding" ? "#fff" :
                      "#ffffff",
                    borderColor:
                      project.category === "UX/UI" ? "rgba(255, 208, 0, 0.5)" :
                      project.category === "Web" ? "rgba(0, 180, 255, 0.5)" :
                      project.category === "Branding" ? "rgba(200, 100, 255, 0.5)" :
                      "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {project.category}
                </div>

                {/* Bottom gradient — hover only */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Title — hover only */}
                <div
                  className="absolute bottom-0 left-0 right-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ padding: "28px" }}
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
