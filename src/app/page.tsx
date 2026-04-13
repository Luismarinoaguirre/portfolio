"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <div className="section-spacer" />
      <About />
      <div className="section-spacer" />
      <Projects />
      <div className="section-spacer" />
      <Services />
      <div style={{ height: "calc(var(--spacer) * 0.9)" }} />
      <Marquee />
      <div style={{ height: "calc(var(--spacer) * 0.9)" }} />
      <Contact />
      <Footer />
    </SmoothScroll>
  );
}
