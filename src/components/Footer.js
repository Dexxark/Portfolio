"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImGithub, ImLinkedin2, ImMail4 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="mt-40 p-4 bg-black">
      <div className="flex justify-center gap-10 text-white ">
        <motion.div>
          <a href="https://www.linkedin.com/in/mathieu-etcheverry-88184312a/" target="_blank" title="LinkedIn">
            <ImLinkedin2 className="w-8 h-8 text-off-white" />
          </a>
        </motion.div>
        <motion.div>
          <a href="https://github.com/Dexxark" target="_blank" title="GitHub">
            <ImGithub className="w-8 h-8 text-off-white" />
          </a>
        </motion.div>
        <motion.div>
          <a href="mailto:etcheverry.mathieu@gmail.com" target="blank" title="E-mail">
            <ImMail4 className="w-8 h-8 text-off-white" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;