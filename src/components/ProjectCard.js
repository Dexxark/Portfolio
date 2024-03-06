/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const ProjectCard = ({ img, title, description, skill, github, id }) => {
  const animationProject = {
    initial: {
      opacity: 0,
      y: 70,
    },
    animate: (id) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2 * id,
      },
    }),
  };

  return (
    <motion.div
      variants={animationProject}
      initial="initial"
      whileInView="animate"
      custom={id}
      viewport={{ once: true }}
      className="group relative h-[400px] overflow-hidden bg-white shadow-sm will-change-transform"
    >
      <img
        src={img}
        alt=""
        className="h-full w-full object-cover transition-transform duration-[400ms] ease-out"
      />
      <div
        className="transition-all absolute -bottom-8 z-10 flex h-0 w-full flex-col items-center justify-center overflow-hidden bg-gray-global p-4 opacity-90 duration-500 ease-in-out group-hover:h-full group-hover:opacity-80 lg:cursor-default lg:justify-normal"
      >
        <h3 className="text-3xl font-semibold text-white opacity-100 lg:text-[1.7rem]">
          {title}
        </h3>
        <p className="text-l font-semibold text-white opacity-100 lg:text-[1.4rem]">
          {description}
          <br></br>
          <br></br>
          {skill}
        </p>

        <div className="m-3 flex items-center justify-center">
          <a
            href={github}
            title="Lien Github"
            target="_blank"
            className="mx-2 mb-1 text-lg text-white opacity-100 transition-transform duration-200 ease-in hover:scale-125 lg:mx-[5px] lg:mb-[2px] lg:text-base"
          >
            Lien Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
