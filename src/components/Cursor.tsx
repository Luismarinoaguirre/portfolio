"use client";

import { useEffect, useRef } from "react";

// 3 mm ≈ 11.34 px at 96 dpi — rounded to 11 px
const SIZE = 11;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const half = SIZE / 2;

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - half}px, ${e.clientY - half}px)`;
      }
    };

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${SIZE}px`,
        height: `${SIZE}px`,
        borderRadius: "50%",
        background: "var(--accent)",
        pointerEvents: "none",
        zIndex: 99999,
        willChange: "transform",
        transition: "background 0.45s ease, opacity 0.2s ease",
        opacity: 0,
      }}
    />
  );
}
