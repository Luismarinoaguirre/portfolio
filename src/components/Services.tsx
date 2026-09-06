"use client";

import React, { forwardRef, useRef } from "react";
import { Pencil2Icon, MixIcon, CubeIcon, FrameIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { Marquee } from "./ui/marquee";
import { AnimatedList } from "./ui/animated-list";
import { AnimatedBeam } from "./ui/animated-beam";

/* ── Marquee Background (UX Design) ── */

const uxDeliverables = [
  { name: "User Research", body: "Interviews, surveys, and behavioral analysis to uncover real user needs.", icon: "\u{1F50D}" },
  { name: "Wireframing", body: "Low-fidelity layouts that map structure before pixels.", icon: "\u{1F4DD}" },
  { name: "User Flows", body: "Step-by-step journeys from entry point to conversion.", icon: "\u{1F500}" },
  { name: "Usability Testing", body: "Real-user sessions to validate design decisions with data.", icon: "\u{1F9EA}" },
  { name: "Information Architecture", body: "Organizing content so users find what they need, fast.", icon: "\u{1F5C2}" },
  { name: "Prototyping", body: "Interactive models to test ideas before development.", icon: "\u{2699}\u{FE0F}" },
];

function MarqueeBackground() {
  return (
    <div className="absolute inset-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
      <Marquee pauseOnHover className="absolute top-10 [--duration:20s]">
        {uxDeliverables.map((item, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-xl",
              "transition-all duration-200 ease-out hover:scale-[103%]",
            )}
            style={{
              width: "16rem",
              padding: "16px",
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex flex-row items-center" style={{ gap: "8px" }}>
              <span className="text-lg">{item.icon}</span>
              <figcaption className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                {item.name}
              </figcaption>
            </div>
            <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>{item.body}</p>
          </figure>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="absolute top-44 [--duration:22s]">
        {uxDeliverables.map((item, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-xl",
              "transition-all duration-200 ease-out hover:scale-[103%]",
            )}
            style={{
              width: "16rem",
              padding: "16px",
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex flex-row items-center" style={{ gap: "8px" }}>
              <span className="text-lg">{item.icon}</span>
              <figcaption className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                {item.name}
              </figcaption>
            </div>
            <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>{item.body}</p>
          </figure>
        ))}
      </Marquee>
    </div>
  );
}

/* ── AnimatedList Background (UI Design) ── */

interface NotificationItem {
  name: string;
  description: string;
  time: string;
  icon: string;
  color: string;
}

const notifications: NotificationItem[] = [
  { name: "Design System Updated", description: "New button variants added", time: "just now", icon: "\u{1F3A8}", color: "#FFD000" },
  { name: "Component Library", description: "12 new components ready", time: "2m ago", icon: "\u{1F9E9}", color: "#FF6B6B" },
  { name: "Figma Handoff", description: "Dev specs exported", time: "5m ago", icon: "\u{1F4E6}", color: "#4ECDC4" },
  { name: "Style Guide", description: "Typography scale finalized", time: "8m ago", icon: "✨", color: "#A29BFE" },
  { name: "Responsive Layouts", description: "Mobile breakpoints tested", time: "12m ago", icon: "\u{1F4F1}", color: "#00B894" },
  { name: "Micro-interactions", description: "Hover states animated", time: "15m ago", icon: "⚡", color: "#E17055" },
  { name: "Accessibility Audit", description: "WCAG AA compliance checked", time: "18m ago", icon: "✅", color: "#0984E3" },
  { name: "Icon Set", description: "Custom icon library created", time: "22m ago", icon: "\u{1F5BC}\u{FE0F}", color: "#FD79A8" },
];

function Notification({ name, description, time, icon, color }: NotificationItem) {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
      )}
      style={{
        padding: "16px",
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="flex flex-row items-center" style={{ gap: "12px" }}>
        <div
          className="flex items-center justify-center rounded-2xl"
          style={{ width: "40px", height: "40px", fontSize: "20px", backgroundColor: color + "22" }}
        >
          <span>{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-sm font-medium" style={{ color: "var(--foreground)", gap: "8px" }}>
            <span className="truncate">{name}</span>
            <span className="text-xs" style={{ color: "var(--muted)" }}>{time}</span>
          </figcaption>
          <p className="text-xs truncate" style={{ color: "var(--muted)" }}>{description}</p>
        </div>
      </div>
    </figure>
  );
}

function AnimatedListBackground() {
  return (
    <div
      className="absolute inset-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
      style={{ padding: "24px" }}
    >
      <AnimatedList delay={2000}>
        {notifications.map((item, idx) => (
          <Notification key={idx} {...item} />
        ))}
      </AnimatedList>
    </div>
  );
}

/* ── AnimatedBeam Background (Product Design) ── */

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 p-3",
        className,
      )}
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border)",
        boxShadow: "0 0 20px -12px rgba(0,0,0,0.8)",
      }}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

function AnimatedBeamBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute inset-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
    >
      <div
        ref={containerRef}
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{ padding: "40px" }}
      >
        <div className="flex size-full max-w-lg flex-row items-stretch justify-between" style={{ gap: "40px" }}>
          <div className="flex flex-col justify-center">
            <Circle ref={div7Ref}>
              <Icons.user />
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div6Ref} className="size-16">
              <Icons.center />
            </Circle>
          </div>
          <div className="flex flex-col justify-center" style={{ gap: "8px" }}>
            <Circle ref={div1Ref}><Icons.figma /></Circle>
            <Circle ref={div2Ref}><Icons.code /></Circle>
            <Circle ref={div3Ref}><Icons.mobile /></Circle>
            <Circle ref={div4Ref}><Icons.analytics /></Circle>
            <Circle ref={div5Ref}><Icons.launch /></Circle>
          </div>
        </div>

        <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} />
        <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} />
        <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} />
        <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3} />
        <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} />
        <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />
      </div>
    </div>
  );
}

const Icons = {
  user: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  center: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  figma: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E"/>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262"/>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1ABCFE"/>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0ACF83"/>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#A259FF"/>
    </svg>
  ),
  code: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  mobile: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  analytics: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  launch: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  ),
};

/* ── Calendar Background (Branding) ── */

function CalendarBackground() {
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const today = 15;
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startOffset = 2;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
      style={{ padding: "24px" }}
    >
      <div
        className="w-full max-w-[280px] rounded-xl"
        style={{
          padding: "16px",
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="text-center font-medium text-sm" style={{ color: "var(--foreground)", marginBottom: "12px" }}>
          August 2026
        </div>
        <div
          className="grid grid-cols-7 text-center text-xs"
          style={{ gap: "4px", marginBottom: "8px" }}
        >
          {daysOfWeek.map((d) => (
            <div key={d} style={{ color: "var(--muted)", padding: "4px 0" }}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 text-center text-xs" style={{ gap: "4px" }}>
          {Array.from({ length: startOffset }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {days.map((day) => (
            <div
              key={day}
              className="rounded-md flex items-center justify-center"
              style={{
                padding: "6px 0",
                color: day === today ? "var(--background)" : "var(--foreground)",
                backgroundColor: day === today ? "var(--accent)" : "transparent",
                fontWeight: day === today ? 600 : 400,
                opacity: day === today ? 1 : 0.7,
              }}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Features ── */

const features = [
  {
    Icon: Pencil2Icon,
    name: "UX Design",
    description:
      "Crafting intuitive digital experiences through research, testing, and iteration. Every decision is driven by user needs and business goals.",
    className: "md:col-span-1",
    background: <MarqueeBackground />,
  },
  {
    Icon: FrameIcon,
    name: "UI Design",
    description:
      "Designing beautiful, functional interfaces that delight users. From design systems to micro-interactions, every detail matters.",
    className: "md:col-span-2",
    background: <AnimatedListBackground />,
  },
  {
    Icon: CubeIcon,
    name: "Product Design",
    description:
      "From industrial products to digital platforms — end-to-end product thinking for web, mobile, and everything in between.",
    className: "md:col-span-2",
    background: <AnimatedBeamBackground />,
  },
  {
    Icon: MixIcon,
    name: "Branding",
    description:
      "Creating memorable brand identities that communicate values and connect with audiences across every touchpoint.",
    className: "md:col-span-1",
    background: <CalendarBackground />,
  },
];

/* ── Section ── */

export default function Services() {
  return (
    <section
      id="services"
      className="section-px"
      style={{ paddingTop: "clamp(64px, 10vw, 160px)", paddingBottom: "clamp(64px, 10vw, 160px)" }}
    >
      <div className="section-container">
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

        <FadeIn delay={0.2}>
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </FadeIn>
      </div>
    </section>
  );
}
