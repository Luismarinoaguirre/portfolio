"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    title: "UX Design",
    items: ["User Research & Testing", "Information Architecture", "User Flows & Journeys", "Wireframing", "Prototyping"],
  },
  {
    number: "02",
    title: "UI Design",
    items: ["Visual Design", "Design Systems", "Animated Interfaces", "Custom Iconography", "Responsive Design"],
  },
  {
    number: "03",
    title: "Product Design",
    items: ["Web & Mobile Apps", "E-Commerce Platforms", "Landing Pages", "Wearable Interfaces", "Interactive Prototypes"],
  },
  {
    number: "04",
    title: "Branding",
    items: ["Brand Identity", "Logo Design", "Social Media Assets", "Print Design", "Brand Guidelines"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 px-8 md:px-16 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <FadeIn>
            <span className="text-accent text-xs font-mono tracking-[0.2em] uppercase">
              What I Do
            </span>
          </FadeIn>
          <AnimatedText
            text="Services"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] mt-4"
            delay={0.1}
            as="h2"
          />
        </div>

        {/* Services list */}
        <div>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.33, 1, 0.68, 1],
                delay: i * 0.08,
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="group border-t border-border py-10 md:py-14"
            >
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-2 md:col-span-1">
                  <span className="text-accent text-xs font-mono">{service.number}</span>
                </div>
                <div className="col-span-10 md:col-span-3">
                  <h3 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-8 md:col-start-5 mt-4 md:mt-0">
                  <div className="flex flex-wrap gap-3">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm text-muted border border-border rounded-full px-4 py-1.5 hover:border-muted/50 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
