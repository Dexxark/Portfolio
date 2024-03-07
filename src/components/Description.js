import React from "react";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <header id="description" className=" m-auto -my-20 px-5 pb-12 pt-6 md:px-6 md:py-14 lg:-my-24 lg:max-w-[1160px] lg:px-12 lg:py-24">
      <div className="my-24 md:flex md:gap-8 lg:my-32 lg:gap-12">
        <motion.img
          src="/img/description.jpg"
          alt="image lambda"
          className="m-auto h-auto rounded-[3px] object-cover md:m-0"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          viewport={{ once: true }}
        />
        <div className="content-about">
          <motion.h1
            className="pb-3 pt-12 text-[2.3rem] md:pb-3 md:pt-3 md:text-[2rem] lg:text-[2.5rem]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          >
            Je suis Mathieu Etcheverry
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <p className="pt-3 text-sm leading-6 text-gray-dark lg:text-[1rem]">
              Développeur web, j&apos;ai réalisé plusieurs projet dans le cadre d&apos;une formation OpenClassroom.
              Je suis familiarisé avec certaines technologies front-end telles que Javascript, React ou encore Redux.
            </p>
            <p className="pt-3 text-sm leading-6 text-gray-dark lg:text-[1rem]">
              Mes projets sont présentés ici et leurs codes et disponibles si vous êtes curieux de savoir de quoi je suis capable.
            </p>
            <p className="pt-3 text-sm leading-6 text-gray-dark lg:text-[1rem]">
              Conception de site, création de maquette, choix technologique ou encore optimisation de performance : n&apos;hésitez pas à me contacter si vous avez un projet prévu ou en cours.
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Description;