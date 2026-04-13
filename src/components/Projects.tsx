"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";
import { projects } from "@/lib/projects";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(1600);

  // Calculate how far we need to translate based on track width vs viewport
  useEffect(() => {
    const calculate = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setMaxScroll(Math.max(0, trackWidth - viewportWidth + 100));
      }
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll → horizontal movement
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -maxScroll]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ height: `${Math.max(300, projects.length * 55)}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="section-px" style={{ marginBottom: "clamp(24px, 3vw, 48px)" }}>
          <div className="section-container">
            <AnimatedText
              text="Selected Work"
              className="font-semibold tracking-[-0.02em]"
              delay={0.1}
              as="h2"
              style={{ fontSize: "clamp(28px, 5vw, 60px)" }}
            />
            <FadeIn delay={0.2}>
              <span
                className="text-muted text-sm font-mono tracking-[0.1em] inline-block"
                style={{ marginTop: "12px" }}
              >
                [{String(projects.length).padStart(2, "0")}]
              </span>
            </FadeIn>
          </div>
        </div>

        {/* Horizontal track */}
        <motion.div
          ref={trackRef}
          className="flex items-start"
          style={{
            x,
            gap: "clamp(12px, 2vw, 20px)",
            paddingLeft: "max(var(--px-section), calc((100vw - 1600px) / 2 + var(--px-section)))",
            paddingRight: "40vw",
          }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.id}`}
              className="rounded-3xl overflow-hidden flex flex-col items-start justify-start relative group text-left card-carousel-item"
              style={{ flexShrink: 0 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
                delay: Math.min(index * 0.06, 0.3),
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-x-0 top-0 z-30 pointer-events-none"
                style={{
                  height: "50%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)",
                }}
              />

              {/* Text */}
              <div className="relative z-40" style={{ padding: "16px 20px" }}>
                <p
                  className="text-white/80 font-medium text-xs md:text-sm"
                  style={{ marginBottom: "4px" }}
                >
                  {project.category}
                </p>
                <h3 className="text-white font-semibold leading-snug text-base md:text-2xl">
                  {project.title}
                </h3>
              </div>

              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover absolute z-10 inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 260px, 384px"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
