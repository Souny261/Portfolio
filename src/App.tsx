import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";

import Footer from "./components/Footer";
import { motion } from "framer-motion";
import ContactSection from "./components/ContactSection";
export function App() {
  return <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
    <Header />
    <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
      <Hero />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Experience />
        <Education />
        <Projects />
        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  </div>;
}
