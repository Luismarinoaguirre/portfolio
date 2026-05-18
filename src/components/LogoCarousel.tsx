"use client";

import { motion } from "framer-motion";

// ── Update this list when you add real logos to /public/logos/ ──
// Set `logo` to the filename (e.g., "future-infinit.svg") once available.
const brands = [
  { name: "Future Infinit" },
  { name: "Daly Nosh" },
  { name: "MALBA+" },
  { name: "Family" },
  { name: "Twins Music" },
  { name: "Tresor" },
  { name: "Atelier" },
  { name: "Northwood" },
];

function LogoItem({ name }: { name: string }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{
        height: "48px",
        marginLeft: "clamp(24px, 4vw, 48px)",
        marginRight: "clamp(24px, 4vw, 48px)",
      }}
    >
      <span
        className="font-semibold tracking-wider uppercase whitespace-nowrap"
        style={{
          fontSize: "clamp(13px, 1.5vw, 18px)",
          color: "var(--logo-color)",
          opacity: 0.85,
          transition: "opacity 0.3s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
      >
        {name}
      </span>
    </div>
  );
}

export default function LogoCarousel() {
  // Duplicate brands for seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "clamp(32px, 5vw, 60px)",
        paddingBottom: "clamp(32px, 5vw, 60px)",
      }}
    >
      {/* Label */}
      <p
        className="text-center text-muted text-xs font-mono tracking-[0.2em] uppercase"
        style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}
      >
        Trusted by
      </p>

      {/* Scrolling track */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "clamp(40px, 10vw, 120px)",
            background: "linear-gradient(to right, var(--background), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "clamp(40px, 10vw, 120px)",
            background: "linear-gradient(to left, var(--background), transparent)",
          }}
        />

        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {allBrands.map((brand, i) => (
            <LogoItem key={`${brand.name}-${i}`} name={brand.name} />
          ))}
        </motion.div>
      </div>

      {/* Divider line */}
      <div
        className="section-container section-px"
        style={{
          marginTop: "clamp(32px, 5vw, 60px)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(to right, transparent, var(--border), transparent)",
          }}
        />
      </div>
    </section>
  );
}
