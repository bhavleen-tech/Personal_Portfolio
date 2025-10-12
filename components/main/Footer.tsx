"use client";
import React from "react";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-gradient-to-b from-[#050014] via-[#08081c] to-black text-gray-300 py-12 overflow-hidden"
      id="contact"
    >

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm top-[20%] left-[10%] animate-pulse" />
        <div className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full blur-sm top-[60%] left-[70%] animate-ping" />
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full blur-[1px] top-[80%] left-[30%] animate-pulse" />
        <div className="absolute w-1 h-1 bg-pink-500 rounded-full blur-[1px] top-[40%] left-[90%] animate-ping" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-10 px-6 text-center">
        {/* Title */}
        <h2 className="text-[36px] md:text-[48px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_#06b6d4]">
          Let’s Connect 
        </h2>

        <div className="flex flex-col items-center space-y-5">
          <ul className="space-y-4">

            <li>
              <a
                href="mailto:bhavleen0102@gmail.com"
                className="flex items-center justify-center space-x-2 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              >
                <MdEmail className="text-xl" />
                <span>bhavleen0102@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>


        <blockquote className="italic text-gray-400 max-w-xl text-center mt-6">
          "The best error message is the one that never shows up."
        </blockquote>


        <div className="text-sm text-gray-500 border-t border-[#6b21a8]/30 pt-6 w-full text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Bhavleen Kaur</span> — All Rights Reserved 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
