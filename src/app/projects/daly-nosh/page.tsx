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
  { name: "Orange", hex: "#E8863A" },
  { name: "Green", hex: "#5B8C3E" },
  { name: "Maroon", hex: "#4A2040" },
  { name: "Light Blue", hex: "#B8D8E8" },
];

export default function DalyNosh() {
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
              Daly Nosh
            </motion.h1>

            <motion.p
              className="text-muted text-center"
              style={{ fontSize: "18px", marginTop: "8px" }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.1}
            >
              Open Bootcamp
            </motion.p>

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
                  <span className="text-muted">: UX/UI Design — Mobile App.</span>
                </p>
                <p style={{ fontSize: "16px", marginTop: "4px" }}>
                  <span className="font-semibold">Date</span>
                  <span className="text-muted">: 2024.</span>
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
                <span className="font-semibold text-foreground">Project description</span>: Daly Nosh es una aplicación de delivery de comida saludable diseñada durante el Open Bootcamp. El proyecto abarca desde la investigación de usuarios y creación de personas hasta el diseño de la interfaz completa, incluyendo funcionalidades de búsqueda, perfil, mapa y carrito de compras.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hero Mockup — Splash screen */}
        <motion.section
          style={{ padding: "0 112px 120px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ maxWidth: "380px", marginLeft: "auto", marginRight: "auto" }}>
            <Image
              src="/projects/daly-nosh/Untitled 2.png"
              alt="Daly Nosh — Splash Screen"
              width={380}
              height={760}
              className="w-full h-auto"
            />
          </div>
        </motion.section>

        {/* Personas */}
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
              Personas
            </motion.h2>

            <div className="flex flex-col" style={{ gap: "60px" }}>
              <motion.div
                className="rounded-2xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={0.1}
              >
                <Image
                  src="/projects/daly-nosh/foodie-persona2-ddd00a759d5af552ec8449c15fda2782 1.png"
                  alt="Persona — Gabrielle Sanchez"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>

              <motion.div
                className="rounded-2xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={0.1}
              >
                <Image
                  src="/projects/daly-nosh/foodie-persona-636974f86dba21c1068e41a158a40efe 1.png"
                  alt="Persona — April Campbell"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* App Screens — Multi device */}
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
              App Screens
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
                src="/projects/daly-nosh/195shots_so 1.png"
                alt="Daly Nosh — App screens showcase"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Investigación competitiva */}
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
              Investigación competitiva
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
                src="/projects/daly-nosh/behance-66333edbec769 1.png"
                alt="Daly Nosh — Competitive research"
                width={1600}
                height={1200}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Hand Mockup */}
        <motion.section
          style={{ padding: "0 112px 120px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            <Image
              src="/projects/daly-nosh/iPhone14 Pro in Hand Mockup 1.png"
              alt="Daly Nosh — Phone in hand mockup"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </motion.section>

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
              Paleta de colores
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
                      border: color.hex === "#4A2040" ? "1px solid #222222" : "none",
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
              Tipografía
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
                src="/projects/daly-nosh/Font_Montserrat-50f00562caa78c3862e45462fc113ca6 1.png"
                alt="Daly Nosh — Typography: Montserrat"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Logotype */}
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
              Logotipo
            </motion.h2>

            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={0.1}
            >
              <div style={{ maxWidth: "500px", backgroundColor: "#ffffff", borderRadius: "16px", padding: "48px" }}>
                <Image
                  src="/projects/daly-nosh/Group 1.png"
                  alt="Daly Nosh — Logo"
                  width={500}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Moodboard */}
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
              Moodboard
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
                src="/projects/daly-nosh/Frame 2416.png"
                alt="Daly Nosh — Moodboard"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Thanks */}
        <motion.section
          style={{ padding: "0 112px 120px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div className="flex flex-col items-center" style={{ gap: "24px" }}>
            <div style={{ width: "200px", height: "200px" }}>
              <Image
                src="/projects/daly-nosh/Group 33.png"
                alt="Thanks"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h2 className="font-bold" style={{ fontSize: "48px", color: "#E8863A" }}>
              Thanks
            </h2>
          </div>
        </motion.section>

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
              href="/projects/malba-plus"
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
