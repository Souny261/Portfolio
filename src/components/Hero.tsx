import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 sm:py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between space-x-8">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="flex-1 text-center md:text-left flex-1">
          {/* <h1 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-4">
            Hi, I'm Souny MALYVANH
          </h1> */}
          <TypeAnimation
            sequence={[
              "Hi, I'm Souny MALYVANH",
              1000,
              '', // Clears the text before restarting
              500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '3.5em', display: 'inline-block', fontWeight: 'bold' }}
          />
          <p className="text-xl sm:text-2xl text-[#2563EB] mb-6">
            Full-Stack Developer | Mobile Developer | DevOps Enthusiast
          </p>
          <p className="text-md text-gray-600 mb-8">
            Skilled and results-driven developer with over 5 years of
            experience in the tech industry.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="inline-flex items-center px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1E40AF] transition-colors duration-200">
              View My Work
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-[#2563EB] hover:text-white transition-colors duration-200">
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} className="flex-none flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img src="/K2208013.jpg" alt="Souny MALYVANH" className="rounded-full object-cover shadow-lg" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};
export default Hero;