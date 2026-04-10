"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  style?: CSSProperties;
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  as: Tag = "h1",
  style,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className} style={style}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + i * 0.05,
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
