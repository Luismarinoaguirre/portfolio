"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "Let\u2019s work together";
  const separator = "\u2009\u2727\u2009";
  const repeated = Array(8).fill(`${text} ${separator} `).join("");

  return (
    <div
      className="overflow-hidden"
      style={{
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
        paddingTop: "clamp(28px, 4vw, 48px)",
        paddingBottom: "clamp(28px, 4vw, 48px)",
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        <span
          className="text-foreground font-semibold tracking-[-0.02em]"
          style={{ fontSize: "clamp(24px, 4vw, 48px)", paddingRight: "0px" }}
        >
          {repeated}
        </span>
        <span
          className="text-foreground font-semibold tracking-[-0.02em]"
          style={{ fontSize: "clamp(24px, 4vw, 48px)", paddingRight: "0px" }}
        >
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}
