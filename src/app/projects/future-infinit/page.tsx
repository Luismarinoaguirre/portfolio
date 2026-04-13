"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const colors = [
  { name: "Mars Red", hex: "#C41E1E" },
  { name: "Mars Yellow", hex: "#F5A623" },
  { name: "Pure White", hex: "#FFFFFF" },
  { name: "Pure Black", hex: "#000000" },
];

const typeSizes = [
  { size: "50px", rem: "2.488rem", weight: 400 },
  { size: "41px", rem: "2.074rem", weight: 700 },
  { size: "35px", rem: "1.728rem", weight: 700 },
  { size: "29px", rem: "1.440rem", weight: 700 },
  { size: "24px", rem: "1.200rem", weight: 700 },
  { size: "20px", rem: "1rem", weight: 700 },
  { size: "17px", rem: "0.833rem", weight: 700 },
  { size: "14px", rem: "0.694rem", weight: 700 },
];

export default function FutureInfinit() {
  return (
    <SmoothScroll>
      <Navbar />
      <main
        className="min-h-screen"
        style={{ backgroundColor: "#050505", color: "#ebebeb" }}
      >
        {/* Hero */}
        <section style={{ padding: "160px 112px 80px" }}>
          <div style={{ maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
            <motion.h1
              className="font-bold text-center tracking-[-0.04em]"
              style={{ fontSize: "clamp(48px, 8vw, 100px)" }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              Future Infinit Website
            </motion.h1>

            <motion.div
              className="flex justify-between items-start"
              style={{ marginTop: "48px" }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.2}
            >
              <div>
                <p style={{ fontSize: "16px" }}>
                  <span className="font-semibold">Project type</span>
                  <span className="text-muted">: UX/UI Design.</span>
                </p>
                <p style={{ fontSize: "16px", marginTop: "4px" }}>
                  <span className="font-semibold">Date</span>
                  <span className="text-muted">: 2023.</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ marginTop: "48px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.3}
            >
              <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                <span className="font-semibold text-foreground">Project description</span>: Future Infinit is a sneaker e-commerce concept featuring urban self-lacing shoes. The project focuses on creating a disruptive shopping experience with a modern, minimalist interface that highlights product photography and seamless purchasing flow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Web Screenshot — video placeholder */}
        <motion.section
          style={{ padding: "0 112px 120px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #222222" }}>
              <Image
                src="/projects/future-infinit/web-screenshot.png"
                alt="Future Infinit — Web Design"
                width={1100}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.section>

        {/* Mockups Section */}
        <section style={{ padding: "0 112px 120px" }}>
          <div style={{ maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
            <motion.h2
              className="font-semibold text-center"
              style={{ fontSize: "32px", marginBottom: "60px" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
            >
              Mockups
            </motion.h2>

            <motion.div
              className="rounded-2xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={0.1}
            >
              <Image
                src="/projects/future-infinit/mockup-photo.png"
                alt="Future Infinit — Product mockup with phone on stones"
                width={1600}
                height={1200}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-muted text-center"
              style={{ fontSize: "16px", lineHeight: "1.8", marginTop: "48px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.2}
            >
              Cada producto fue cuidadosamente presentado en un ambiente natural, buscando transmitir la conexión entre la tecnología urbana y los elementos orgánicos que inspiran el diseño de la marca.
            </motion.p>
          </div>
        </section>

        {/* Mobile — video placeholder */}
        <section style={{ padding: "0 112px 120px" }}>
          <div style={{ maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={0.1}
            >
              <div style={{ maxWidth: "380px" }}>
                <Image
                  src="/projects/future-infinit/mobile-mockup.png"
                  alt="Future Infinit — Mobile app view"
                  width={380}
                  height={760}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Color Palette */}
        <section style={{ padding: "0 112px 120px" }}>
          <div style={{ maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
            <motion.h2
              className="font-semibold text-center"
              style={{ fontSize: "32px", marginBottom: "60px" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
            >
              Color Palette
            </motion.h2>

            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={0.1}
            >
              <div style={{ maxWidth: "700px" }}>
                <Image
                  src="/projects/future-infinit/color-palette.png"
                  alt="Future Infinit — Color Palette"
                  width={700}
                  height={550}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Color swatches */}
            <motion.div
              className="flex justify-center"
              style={{ gap: "40px", marginTop: "48px" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0.2}
            >
              {colors.map((color) => (
                <div key={color.name} className="flex flex-col items-center" style={{ gap: "12px" }}>
                  <div
                    className="rounded-xl"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: color.hex,
                      border: color.hex === "#000000" ? "1px solid #222222" : "none",
                    }}
                  />
                  <span className="font-medium" style={{ fontSize: "13px" }}>
                    {color.name}
                  </span>
                  <span className="text-muted font-mono" style={{ fontSize: "11px" }}>
                    {color.hex}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Typography */}
        <section style={{ padding: "0 112px 120px" }}>
          <div style={{ maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
            <motion.h2
              className="font-semibold text-center"
              style={{ fontSize: "32px", marginBottom: "60px" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
            >
              Typography
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={0.1}
            >
              <div className="flex justify-between" style={{ marginBottom: "48px", gap: "40px" }}>
                <div className="flex-1">
                  <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                    Arial, a veces también conocida como Arial MT, es una tipografía sans serif contemporánea.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                    Estilo Funcional y Simple: Arial tiene un estilo funcional y simple, lo que la hace adecuada para una variedad de aplicaciones.
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl"
                style={{ backgroundColor: "#e8e8e8", padding: "48px 40px" }}
              >
                <p className="text-center font-medium" style={{ fontSize: "18px", color: "#333333", marginBottom: "32px" }}>
                  Arial
                </p>
                <div className="flex flex-col" style={{ gap: "16px" }}>
                  {typeSizes.map((type) => (
                    <p
                      key={type.size}
                      style={{
                        fontSize: type.size,
                        fontWeight: type.weight,
                        fontFamily: "Arial, sans-serif",
                        color: "#111111",
                        lineHeight: "1.3",
                      }}
                    >
                      The quick brown fox jumps over the lazy dog ({type.rem}/{type.size})
                    </p>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "48px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
                <p className="text-muted text-center" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                  Legibilidad: Debido a su diseño limpio y sin adornos, Arial es muy legible tanto en tamaños pequeños como grandes.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation */}
        <section style={{ padding: "40px 112px 80px" }}>
          <div
            className="flex justify-between items-center"
            style={{
              maxWidth: "1600px",
              marginLeft: "auto",
              marginRight: "auto",
              borderTop: "1px solid #1a1a1a",
              paddingTop: "40px",
            }}
          >
            <Link
              href="/"
              className="text-muted hover:text-foreground transition-colors"
              style={{ fontSize: "16px" }}
            >
              &larr; Back to Home
            </Link>
            <Link
              href="/projects/daly-nosh"
              className="text-muted hover:text-accent transition-colors"
              style={{ fontSize: "16px" }}
            >
              Next Project &rarr;
            </Link>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
