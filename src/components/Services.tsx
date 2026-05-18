"use client";

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

export default function Services() {
  return (
    <section
      id="services"
      className="section-px"
      style={{ paddingTop: "clamp(64px, 10vw, 160px)", paddingBottom: "clamp(64px, 10vw, 160px)" }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: "clamp(40px, 6vw, 80px)" }}>
          <FadeIn>
            <span className="text-accent text-xs font-mono tracking-[0.2em] uppercase">
              What I Do
            </span>
          </FadeIn>
          <AnimatedText
            text="Services"
            className="font-semibold tracking-[-0.02em]"
            style={{ fontSize: "clamp(32px, 6vw, 80px)" }}
            delay={0.1}
            as="h2"
          />
        </div>

        {/* Full-width stacked sticky cards */}
        <div>
          {services.map((service, i) => (
            <div
              key={service.title}
              className="sticky"
              style={{
                top: `clamp(${80 + i * 20}px, ${10 + i * 2.5}vw, ${120 + i * 40}px)`,
                marginBottom: "clamp(60px, 10vw, 120px)",
                zIndex: i + 1,
              }}
            >
              <div
                className="rounded-3xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                  padding: "clamp(20px, 3vw, 36px)",
                }}
              >
                {/* Tag */}
                <span
                  className="text-muted italic"
                  style={{
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    marginBottom: "clamp(12px, 2vw, 20px)",
                    display: "block",
                  }}
                >
                  {service.tag}
                </span>

                {/* Number + Title */}
                <h3
                  className="font-semibold text-foreground"
                  style={{
                    fontSize: "clamp(22px, 3.5vw, 36px)",
                    marginBottom: "clamp(12px, 2vw, 20px)",
                  }}
                >
                  <span className="text-accent">{service.number}.</span>{" "}
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-muted leading-relaxed"
                  style={{
                    fontSize: "clamp(13px, 1.5vw, 16px)",
                    maxWidth: "680px",
                    marginBottom: "clamp(20px, 3vw, 32px)",
                  }}
                >
                  {service.description}
                </p>

                {/* Skills list — always 2 columns */}
                <ul
                  className="text-muted"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "clamp(6px, 1.5vw, 10px) clamp(16px, 3vw, 40px)",
                    maxWidth: "600px",
                    fontSize: "clamp(11px, 1.3vw, 14px)",
                    opacity: 0.7,
                  }}
                >
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center"
                      style={{ gap: "8px" }}
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
      </div>
    </section>
  );
}
