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
  { name: "Light Green", hex: "#0E630A" },
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

export default function TwinsMusicHouse() {
  return (
    <SmoothScroll>
      <Navbar />
      <main
        className="min-h-screen"
        style={{ backgroundColor: "#1a1a1a", color: "#ebebeb" }}
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
              Twins Website
            </motion.h1>

            <motion.div
              className="flex justify-between items-start"
              style={{ marginTop: "48px" }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.2}
            >
              {/* Left — metadata */}
              <div>
                <p style={{ fontSize: "16px" }}>
                  <span className="font-semibold">Project type</span>
                  <span className="text-muted">: UX/UI Design.</span>
                </p>
                <p style={{ fontSize: "16px", marginTop: "4px" }}>
                  <span className="font-semibold">Date</span>
                  <span className="text-muted">: 2020.</span>
                </p>
              </div>

              {/* Right — logo */}
              <p
                className="italic"
                style={{
                  fontSize: "20px",
                  fontFamily: "serif",
                  letterSpacing: "0.02em",
                }}
              >
                <span className="font-bold not-italic" style={{ fontFamily: "serif" }}>
                  Twins
                </span>{" "}
                <span style={{ fontSize: "14px", fontWeight: 300 }}>
                  AudioBranding
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              style={{ marginTop: "48px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.3}
            >
              <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                <span className="font-semibold text-foreground">Project description</span>: In this project, Twins Music House, an international creative music agency offering sonic branding, music composition and music production for advertising, sought to set up its web channel to be able to show itself in the market. Different types of graphic designs were created for their different areas and were assembled based on the user&apos;s needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* iMac Mockup — video will go here later */}
        <motion.section
          style={{ padding: "0 112px 120px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
            <div className="relative">
              <Image
                src="/projects/twins/mockup.png"
                alt="Twins Music House — iMac Mockup"
                width={900}
                height={750}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.section>

        {/* Other Pages */}
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
              Other Pages
            </motion.h2>

            <motion.div
              className="flex items-start"
              style={{ gap: "60px" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={0.1}
            >
              {/* Screenshot */}
              <div className="flex-1 rounded-2xl overflow-hidden" style={{ backgroundColor: "#111111" }}>
                <Image
                  src="/projects/twins/other-pages.png"
                  alt="Twins — Website pages overview"
                  width={800}
                  height={2400}
                  className="w-full h-auto"
                />
              </div>
              {/* Annotations */}
              <div className="flex-1 flex flex-col justify-between" style={{ gap: "60px", paddingTop: "40px" }}>
                <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  Aquí podemos observar el interior de uno de los contenedores de la web. Dentro de una misma sección los contenidos tienen un mismo estilo y diseño, con una misma coherencia.
                </p>
                <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  Estos rectángulos que vemos debajo de la página es la sección de &quot;Contenido relacionado&quot;, diseñado para que el usuario no tenga que salir del contenedor y poder seguir navegando en la web.
                </p>
                <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  Aquí podemos observar como se unificaron los tres canales en uno solo, separado en secciones que nos conducen a cada area con sus eventos mas destacados.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Playlists Section */}
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
              Playlists
            </motion.h2>

            <motion.div
              className="flex items-start"
              style={{ gap: "60px" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={0.1}
            >
              <div className="flex-1 flex items-center" style={{ minHeight: "400px" }}>
                <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  A continuación tenemos la sección de los docentes donde nos conduce a cada uno de sus perfiles con sus respectivas descripciones.
                </p>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden" style={{ backgroundColor: "#111111" }}>
                <Image
                  src="/projects/twins/playlists-page.png"
                  alt="Twins — Playlists page"
                  width={800}
                  height={1600}
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
              style={{ gap: "40px" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={0.1}
            >
              {colors.map((color) => (
                <div key={color.name} className="flex flex-col items-center" style={{ gap: "16px" }}>
                  <div
                    className="rounded-2xl"
                    style={{
                      width: "160px",
                      height: "160px",
                      backgroundColor: color.hex,
                      border: color.hex === "#000000" || color.hex === "#0E630A"
                        ? "1px solid #222222"
                        : "none",
                    }}
                  />
                  <span className="font-medium" style={{ fontSize: "14px" }}>
                    {color.name}
                  </span>
                  <span className="text-muted font-mono" style={{ fontSize: "12px" }}>
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
              {/* Font info */}
              <div
                className="flex justify-between"
                style={{ marginBottom: "48px", gap: "40px" }}
              >
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

              {/* Type scale */}
              <div
                className="rounded-2xl"
                style={{
                  backgroundColor: "#e8e8e8",
                  padding: "48px 40px",
                }}
              >
                <p
                  className="text-center font-medium"
                  style={{
                    fontSize: "18px",
                    color: "#333333",
                    marginBottom: "32px",
                  }}
                >
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

              {/* Legibility note */}
              <div style={{ marginTop: "48px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
                <p className="text-muted text-center" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                  Legibilidad: Debido a su diseño limpio y sin adornos, Arial es muy legible tanto en tamaños pequeños como grandes.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next Project / Back */}
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
              href="/projects/tresor"
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
