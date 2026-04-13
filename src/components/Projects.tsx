"use client";

import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";
import { projects } from "@/lib/projects";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import type { CardData } from "./ui/apple-cards-carousel";

export default function Projects() {
  const cards = projects.map((project): CardData => ({
    src: project.image,
    title: project.title,
    category: project.category,
    href: `/projects/${project.id}`,
  }));

  const cardElements = cards.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="projects" style={{ paddingTop: "128px", paddingBottom: "128px" }}>
      {/* Header */}
      <div style={{ paddingLeft: "112px", paddingRight: "112px" }}>
        <div className="max-w-[1600px]" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <AnimatedText
              text="Selected Work"
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]"
              delay={0.1}
              as="h2"
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
      </div>

      {/* Carousel — full width, scrolls horizontally */}
      <Carousel items={cardElements} />
    </section>
  );
}
