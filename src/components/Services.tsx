"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    tag: "User First",
    title: "UX Design",
    description:
      "Crafting intuitive digital experiences through research, testing, and iteration. Every decision is driven by user needs and business goals.",
    items: [
      "User Research & Testing",
      "Information Architecture",
      "User Flows & Journeys",
      "Wireframing & Prototyping",
      "Usability Testing",
      "Competitive Analysis",
    ],
  },
  {
    number: "02",
    tag: "Pixel Perfect",
    title: "UI Design",
    description:
      "Designing beautiful, functional interfaces that delight users. From design systems to micro-interactions, every detail matters.",
    items: [
      "Visual Design",
      "Design Systems",
      "Animated Interfaces",
      "Custom Iconography",
      "Responsive Design",
      "Component Libraries",
    ],
  },
  {
    number: "03",
    tag: "End to End",
    title: "Product Design",
    description:
      "Full product thinking from concept to launch. Building web and mobile experiences that solve real problems and scale.",
    items: [
      "Web & Mobile Apps",
      "E-Commerce Platforms",
      "Landing Pages",
      "Wearable Interfaces",
      "Interactive Prototypes",
      "Design Sprints",
    ],
  },
  {
    number: "04",
    tag: "Brand Defining",
    title: "Branding",
    description:
      "Creating memorable brand identities that communicate values and connect with audiences across every touchpoint.",
    items: [
      "Brand Identity",
      "Logo Design",
      "Social Media Assets",
      "Print Design",
      "Brand Guidelines",
      "Visual Strategy",
    ],
  },
];

const personalInfo = [
  { label: "Name", value: "Luis Bautista Marino Aguirre" },
  { label: "Location", value: "Buenos Aires, Argentina" },
  { label: "Focus", value: "UX/UI Design" },
  { label: "Experience", value: "6+ Projects" },
  { label: "Disciplines", value: "UX, UI, Product, Branding" },
  { label: "Tools", value: "Figma, Adobe Suite, Framer" },
];

function FlipCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Smooth 180° flip with eased motion
  const rawRotate = useTransform(scrollYProgress, [0.15, 0.6], [0, 180]);
  // Apply easing for smoother feel
  const rotateY = useTransform(rawRotate, (v) => {
    const t = v / 180;
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    return eased * 180;
  });

  return (
    <div ref={cardRef} className="sticky hidden lg:block" style={{ top: "140px", perspective: "1200px" }}>
      <motion.div
        style={{
          rotateY,
          transformStyle: "preserve-3d",
          width: "340px",
          height: "460px",
        }}
      >
        {/* Front — Photo */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src="/profile.png"
            alt="Luis Marino"
            fill
            className="object-cover"
            sizes="340px"
          />
        </div>

        {/* Back — Personal info */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-center border border-white/[0.08]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#111111",
            padding: "40px",
          }}
        >
          <h4
            className="text-accent font-semibold"
            style={{ fontSize: "14px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "28px" }}
          >
            About Me
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {personalInfo.map((info) => (
              <div key={info.label}>
                <span
                  className="text-muted"
                  style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "4px" }}
                >
                  {info.label}
                </span>
                <span className="text-foreground" style={{ fontSize: "15px" }}>
                  {info.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40" style={{ paddingLeft: "112px", paddingRight: "112px" }}>
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div style={{ marginBottom: "80px" }}>
          <FadeIn>
            <span className="text-accent text-xs font-mono tracking-[0.2em] uppercase">
              What I Do
            </span>
          </FadeIn>
          <AnimatedText
            text="Services"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]"
            delay={0.1}
            as="h2"
          />
        </div>

        {/* Two-column: cards left, flip card right */}
        <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
          {/* Left — Stacked sticky cards */}
          <div style={{ flex: 1 }}>
            {services.map((service, i) => (
              <div
                key={service.title}
                className="sticky"
                style={{
                  top: `${120 + i * 40}px`,
                  marginBottom: "120px",
                  zIndex: i + 1,
                }}
              >
                <div
                  className="rounded-3xl border border-white/[0.08] shadow-2xl"
                  style={{
                    backgroundColor: "#111111",
                    padding: "36px",
                  }}
                >
                  {/* Tag */}
                  <span
                    className="text-muted text-sm italic"
                    style={{ marginBottom: "20px", display: "block" }}
                  >
                    {service.tag}
                  </span>

                  {/* Number + Title */}
                  <h3
                    className="font-semibold text-foreground"
                    style={{ fontSize: "36px", marginBottom: "20px" }}
                  >
                    <span className="text-accent">{service.number}.</span>{" "}
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-muted leading-relaxed"
                    style={{
                      fontSize: "16px",
                      maxWidth: "600px",
                      marginBottom: "32px",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Skills list */}
                  <ul
                    className="text-muted/70"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px 40px",
                      maxWidth: "600px",
                      fontSize: "14px",
                    }}
                  >
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center"
                        style={{ gap: "10px" }}
                      >
                        <span
                          className="bg-accent rounded-full flex-shrink-0"
                          style={{ width: "5px", height: "5px" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Flip card */}
          <FlipCard />
        </div>
      </div>
    </section>
  );
}
