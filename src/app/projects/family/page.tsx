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

// Sections with image references — ordered by case study flow
const screenSections = [
  {
    title: "Planteo del proyecto",
    image: "4 1.png",
    description: "La app involucra a toda la familia en las tareas domésticas. Los padres organizan las tareas, los hijos reciben recompensas.",
  },
  {
    title: "Problema, Objetivo y Solución",
    image: "5 1.png",
    description: null,
  },
  {
    title: "User Persona",
    image: "6 1.jpg",
    description: null,
  },
  {
    title: "Proto-Persona — Pedro",
    image: "Proyecto final - Entrega 1 - Marino Aguirre _Página_04 1.png",
    description: null,
  },
  {
    title: "Proto-Persona — Julieta",
    image: "Proyecto final - Entrega 1 - Marino Aguirre _Página_05 1.png",
    description: null,
  },
];

const uiScreens = [
  { title: "Pantalla / Face ID", image: "21 3.png" },
  { title: "Pantalla / Crear tarea", image: "23 1.png" },
  { title: "Pantalla / Home", image: "24 1.png" },
  { title: "Pantalla / Detalle", image: "25 1.png" },
];

export default function FamilyProject() {
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
              Family App
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
                  <span className="text-muted">: UX/UI Design — Mobile App.</span>
                </p>
                <p style={{ fontSize: "16px", marginTop: "4px" }}>
                  <span className="font-semibold">Date</span>
                  <span className="text-muted">: 2023.</span>
                </p>
              </div>

              <p className="font-bold" style={{ fontSize: "24px", letterSpacing: "0.04em" }}>
                FAMIL<span style={{ color: "#3366FF" }}>Y</span>
              </p>
            </motion.div>

            <motion.div
              style={{ marginTop: "48px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0.3}
            >
              <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                <span className="font-semibold text-foreground">Project description</span>: Family es una aplicación móvil diseñada para involucrar a toda la familia en las tareas domésticas. Los padres organizan las tareas, los hijos reciben recompensas. Es accesible para niños desde los cuatro años, con controles parentales. Promueve la participación familiar, metas y motivación a través de recompensas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hero Mockup */}
        <motion.section
          style={{ padding: "0 112px 120px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            <Image
              src="/projects/family/iPhone 13 Mockup.png"
              alt="Family App — Hero Mockup"
              width={500}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </motion.section>

        {/* Process — 5 steps */}
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
              Proceso de diseño
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
                src="/projects/family/Group 18.png"
                alt="Family — Design process: 5 steps"
                width={1200}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Research & Strategy — slides */}
        {screenSections.map((section, i) => (
          <section key={i} style={{ padding: "0 112px 100px" }}>
            <div style={{ maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
              <motion.div
                className="rounded-2xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={0.1}
              >
                <Image
                  src={`/projects/family/${section.image}`}
                  alt={`Family — ${section.title}`}
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </section>
        ))}

        {/* UI Screens — wireframe to final */}
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
              UI Screens
            </motion.h2>

            <div className="flex flex-col" style={{ gap: "80px" }}>
              {uiScreens.map((screen, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  custom={0.1}
                >
                  <Image
                    src={`/projects/family/${screen.image}`}
                    alt={`Family — ${screen.title}`}
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Components & Design System */}
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
              Componentes
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
                src="/projects/family/Frame 2412.png"
                alt="Family — UI Components"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Usability Testing */}
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
              Testeos de usabilidad
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
                src="/projects/family/44 1.png"
                alt="Family — Usability testing"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Final Showcase */}
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
              Final Design
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
                src="/projects/family/51 1.png"
                alt="Family — Final design showcase"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
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
                src="/projects/family/Frame.png"
                alt="Family — Moodboard"
                width={1600}
                height={1200}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Thank you / Closing */}
        <motion.section
          style={{ padding: "0 112px 120px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0.1}
        >
          <div style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/projects/family/53 1.png"
                alt="Family — Thank you"
                width={1000}
                height={560}
                className="w-full h-auto"
              />
            </div>
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
              href="/projects/twins-music-house"
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
