"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ── Update this list when you add real logos to /public/logos/ ──
// Set `logo` to the filename (e.g., "future-infinit.svg") once available.
const brands = [
  { name: "Company 1", logo: "" },
  { name: "Company 2", logo: "" },
  { name: "Company 3", logo: "" },
  { name: "Company 4", logo: "" },
  { name: "Company 5", logo: "" },
  { name: "Company 6", logo: "" },
];

function LogoItem({ name, logo }: { name: string; logo: string }) {
  if (logo) {
    return (
      <div
        className="flex items-center justify-center shrink-0"
        style={{ width: "160px", height: "48px", marginLeft: "40px", marginRight: "40px" }}
      >
        <Image
          src={`/logos/${logo}`}
          alt={name}
          width={160}
          height={48}
          className="object-contain opacity-40 hover:opacity-70 transition-opacity duration-500"
          style={{ maxWidth: "160px", maxHeight: "48px" }}
        />
      </div>
    );
  }

  // Text placeholder
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: "160px", height: "48px", marginLeft: "40px", marginRight: "40px" }}
    >
      <span className="text-white/20 text-lg font-semibold tracking-wider uppercase whitespace-nowrap">
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
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Label */}
      <p
        className="text-center text-muted text-xs font-mono tracking-[0.2em] uppercase"
        style={{ marginBottom: "40px" }}
      >
        Trusted by
      </p>

      {/* Scrolling track */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: "120px", background: "linear-gradient(to right, #050505, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: "120px", background: "linear-gradient(to left, #050505, transparent)" }}
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
        className="mx-auto"
        style={{
          marginTop: "60px",
          width: "100%",
          maxWidth: "1600px",
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--border), transparent)",
        }}
      />
    </section>
  );
}
