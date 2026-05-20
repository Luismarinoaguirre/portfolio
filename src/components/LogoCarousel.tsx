"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Future Infinit", logo: "/logos/logo-01.svg" },
  { name: "Daly Nosh",      logo: "/logos/logo-02.svg" },
  { name: "MALBA+",         logo: "/logos/logo-03.svg" },
  { name: "Family",         logo: "/logos/logo-04.svg" },
  { name: "Twins Music",    logo: "/logos/logo-05.svg" },
  { name: "Tresor",         logo: "/logos/logo-06.svg" },
  { name: "Atelier",        logo: "/logos/logo-07.svg" },
  { name: "Northwood",      logo: "/logos/logo-08.svg" },
];

function LogoItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div
      className="logo-item flex items-center justify-center shrink-0"
      style={{
        height: "48px",
        marginLeft: "clamp(32px, 5vw, 64px)",
        marginRight: "clamp(32px, 5vw, 64px)",
      }}
    >
      <Image
        src={logo}
        alt={name}
        width={160}
        height={48}
        className="logo-img"
        style={{ height: "36px", width: "auto", objectFit: "contain" }}
      />
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
