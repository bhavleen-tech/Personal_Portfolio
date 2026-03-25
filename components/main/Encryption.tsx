"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-black via-[#0a0a1a] to-[#030014] text-white overflow-hidden px-5" id="experience">

      <motion.h2
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="text-[42px] font-extrabold text-center mb-4 mt-16"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Work Experience
        </span>
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-400 text-center mb-12"
      >
        What I have done so far in my professional journey 🚀
      </motion.p>

      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-4xl bg-[#11112a]/70 border border-[#6b21a8]/30 rounded-2xl p-8 shadow-[0_0_25px_#6b21a8] hover:shadow-[0_0_40px_#06b6d4] transition-all duration-500"
      >

        <div className="flex items-center justify-center bg-gradient-to-tr from-purple-500 to-cyan-400 w-14 h-14 rounded-full shadow-[0_0_20px_#06b6d4] text-white text-2xl font-bold">
          💼
        </div>


        <div className="flex flex-col md:ml-8 mt-5 md:mt-0 w-full">
          <h3 className="text-2xl font-bold text-white mb-1">
            Front-end Development Intern
          </h3>
          <p className="text-sm text-cyan-400 font-medium mb-3">THOMSON PRESS PVT LTD</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-[15px] leading-relaxed">
            <li>
              Contributed to the development and optimization of websites for various applications.
            </li>
            <li>
              Utilized HTML, CSS, JS and Bootstrap for Better User Interface.
            </li>
          </ul>


          <p className="text-sm text-gray-400 mt-4">
            <span className="text-cyan-400 font-semibold">
              June 2025 – July 2025
            </span>
          </p>
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="animate-pulse absolute w-2 h-2 bg-cyan-400 rounded-full top-[20%] left-[10%] blur-sm opacity-70" />
        <div className="animate-ping absolute w-1.5 h-1.5 bg-purple-500 rounded-full top-[70%] left-[80%] opacity-70" />
        <div className="animate-pulse absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-[40%] left-[50%] opacity-50" />
      </div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-4xl bg-[#11112a]/70 border border-[#6b21a8]/30 rounded-2xl p-8 shadow-[0_0_25px_#6b21a8] hover:shadow-[0_0_40px_#06b6d4] transition-all duration-500"
      >

        <div className="flex items-center justify-center bg-gradient-to-tr from-purple-500 to-cyan-400 w-14 h-14 rounded-full shadow-[0_0_20px_#06b6d4] text-white text-2xl font-bold">
          💼
        </div>


        <div className="flex flex-col md:ml-8 mt-5 md:mt-0 w-full">
          <h3 className="text-2xl font-bold text-white mb-1">
            Full-Stack Development Intern
          </h3>
          <p className="text-sm text-cyan-400 font-medium mb-3">Springer Capital</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-[15px] leading-relaxed">
            <li>
              It was a hybrid internship, where I contributed to various fields related to backend, frontend, websites and many more.
            </li>
            <li>
              Utilized HTML, CSS, JavaScript, Bootstrap, MongoDB, Express.js, React.js and Node.js for Better User Interface.
            </li>
          </ul>


          <p className="text-sm text-gray-400 mt-4">
            <span className="text-cyan-400 font-semibold">
              October 2025 - January 2026
            </span>
          </p>
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="animate-pulse absolute w-2 h-2 bg-cyan-400 rounded-full top-[20%] left-[10%] blur-sm opacity-70" />
        <div className="animate-ping absolute w-1.5 h-1.5 bg-purple-500 rounded-full top-[70%] left-[80%] opacity-70" />
        <div className="animate-pulse absolute w-1.5 h-1.5 bg-blue-500 rounded-full top-[40%] left-[50%] opacity-50" />
      </div>
    </section>

  );
};

export default Experience;
