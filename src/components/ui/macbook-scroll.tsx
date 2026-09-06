"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface MacbookScrollProps {
  src: string;
  title?: React.ReactNode;
  showGradient?: boolean;
}

export function MacbookScroll({
  src,
  title,
  showGradient = true,
}: MacbookScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Lid opens from closed to fully open
  const lidRotate = useTransform(scrollYProgress, [0, 0.3], [90, 0]);
  // Scale up the macbook
  const scale = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.5]);
  // Move it up
  const translateY = useTransform(scrollYProgress, [0.3, 0.6], [0, -200]);
  // Opacity for title
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);
  // Screen takes over — zoom into the screen
  const screenScale = useTransform(scrollYProgress, [0.6, 0.85], [1, 3.5]);
  const screenOpacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 1]);
  // Hide the macbook frame
  const frameOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  // Show full page content
  const contentOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  return (
    <div
      ref={containerRef}
      style={{ height: "300vh", position: "relative" }}
    >
      <div
        className="sticky top-0 flex flex-col items-center justify-center overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Title */}
        {title && (
          <motion.div
            className="text-center"
            style={{
              opacity: titleOpacity,
              y: titleY,
              marginBottom: "40px",
            }}
          >
            {title}
          </motion.div>
        )}

        {/* Macbook Container */}
        <motion.div
          className="relative"
          style={{
            scale,
            y: translateY,
            width: "800px",
            transformOrigin: "center center",
          }}
        >
          {/* Lid + Screen */}
          <motion.div
            style={{
              rotateX: lidRotate,
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
              perspective: "1200px",
              opacity: frameOpacity,
            }}
          >
            {/* Screen bezel */}
            <div
              className="relative mx-auto rounded-t-2xl overflow-hidden"
              style={{
                backgroundColor: "#1a1a1a",
                padding: "12px 12px 0 12px",
                width: "100%",
              }}
            >
              {/* Camera dot */}
              <div
                className="mx-auto"
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#333333",
                  marginBottom: "8px",
                }}
              />
              {/* Screen content */}
              <motion.div
                className="relative overflow-hidden rounded-t-sm"
                style={{
                  aspectRatio: "16/10",
                  scale: screenScale,
                  transformOrigin: "center center",
                }}
              >
                <Image
                  src={src}
                  alt="Screen content"
                  fill
                  className="object-cover object-top"
                  sizes="800px"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom base */}
          <motion.div
            className="relative mx-auto"
            style={{ opacity: frameOpacity }}
          >
            {/* Hinge */}
            <div
              className="mx-auto"
              style={{
                width: "100%",
                height: "8px",
                backgroundColor: "#2a2a2a",
                borderRadius: "0 0 2px 2px",
              }}
            />
            {/* Base */}
            <div
              className="mx-auto"
              style={{
                width: "110%",
                marginLeft: "-5%",
                height: "12px",
                background: "linear-gradient(to bottom, #c0c0c0, #a0a0a0)",
                borderRadius: "0 0 8px 8px",
              }}
            />
            {/* Notch */}
            <div
              className="mx-auto"
              style={{
                width: "20%",
                height: "4px",
                backgroundColor: "#888888",
                borderRadius: "0 0 4px 4px",
                marginTop: "-2px",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Gradient overlay */}
        {showGradient && (
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: "40%",
              background:
                "linear-gradient(to top, #050505 0%, transparent 100%)",
            }}
          />
        )}
      </div>
    </div>
  );
}
