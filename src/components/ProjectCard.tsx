"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={`/projects/${project.id}`}
      className="group block"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: index % 2 === 0 ? 0 : 0.15,
      }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Image */}
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl"
        style={{ backgroundColor: project.color }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

        {/* Arrow */}
        <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
          <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 flex items-start justify-between">
        <div>
          <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted mt-1">{project.subtitle}</p>
        </div>
        <span className="text-xs text-muted/60 font-mono mt-1">{project.year}</span>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] text-muted/50 border border-border rounded-full px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
