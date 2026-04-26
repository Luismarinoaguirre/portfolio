"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ── Update this list when you add real logos to /public/logos/ ──
// Set `logo` to the filename (e.g., "future-infinit.svg") once available.
const brands = [
  { name: "Brand 1", logo: "logo-01.svg" },
  { name: "Brand 2", logo: "logo-02.svg" },
  { name: "Brand 3", logo: "logo-03.svg" },
  { name: "Brand 4", logo: "logo-04.svg" },
  { name: "Brand 5", logo: "logo-05.svg" },
  { name: "Brand 6", logo: "logo-06.svg" },
  { name: "Brand 7", logo: "logo-07.svg" },
  { name: "Brand 8", logo: "logo-08.svg" },
];

function LogoItem({ name, logo }: { name: string; logo: string }) {
  if (logo) {
    return (
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: "clamp(100px, 14vw, 160px)",
          height: "48px",
          marginLeft: "clamp(20px, 4vw, 40px)",
          marginRight: "clamp(20px, 4vw, 40px)",
        }}
      >
        <Image
          src={`/logos/${logo}`}
          alt={name}
          width={160}
          height={48}
          className="object-contain opacity-40 hover:opacity-70 transition-opacity duration-500"
          style={{ maxWidth: "100%", maxHeight: "48px" }}
        />
      </div>
    );
  }

  // Text placeholder
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{
        width: "clamp(100px, 14vw, 160px)",
        height: "48px",
        marginLeft: "clamp(20px, 4vw, 40px)",
        marginRight: "clamp(20px, 4vw, 40px)",
      }}
    >
      <span
        className="text-white/20 font-semibold tracking-wider uppercase whitespace-nowrap"
        style={{ fontSize: "clamp(13px, 1.5vw, 18px)" }}
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
            <LogoItem key={`${brand.name}-${i}`} name={brand.name} logo={brand.logo} />
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
