import React from "react";
import Image from "next/image";
import skillsJSON from "../data/skills.json";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className=" m-auto -my-20 bg-gray-global px-5 py-14 text-black brightness-[1.5] md:py-20 lg:-my-24">
      <h2 className="mb-[30px] mt-4 text-center text-white text-[2.5rem] blur-[0.5px] lg:text-[2.8rem]">
        Mes compétences
      </h2>
      <div className="md:m- m-auto flex max-w-[850px] flex-col items-center gap-6 md:flex-row lg:gap-8">
        <div className="mb-5 mt-7 flex w-full flex-wrap justify-center gap-x-5 gap-y-5 pb-16 md:justify-between md:border-b-0 md:pr-6 md:pt-12 lg:gap-x-7">
          {skillsJSON.map((data, id) => (
            <motion.div
              key={id}
              className=" group h-[72px] w-[72px] bg-transparent [perspective:1000px]"
              initial="initial"
              custom={id}
              viewport={{ once: true }}
            >
              <div className="h-full w-full text-center">
                <div>
                  <Image src={data.img} alt={`Icone de ${data.title}`} width={75} height={75}/>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;