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

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <Hero />
      <div style={{ height: "200px" }} />
      <About />
      <div style={{ height: "200px" }} />
      <Projects />
      <div style={{ height: "200px" }} />
      <Services />
      <div style={{ height: "180px" }} />
      <Marquee />
      <div style={{ height: "180px" }} />
      <Contact />
      <Footer />
    </SmoothScroll>
  );
}
