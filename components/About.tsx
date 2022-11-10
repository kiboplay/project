import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dj from "img/slidza2.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 items-center mx-auto justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[12px] text-gray-500 text-2xl ">
        About
      </h3>
      <div></div>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/djkibo1.jpg"
        className="-mb-20  md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md-h-95 xl:w-[300px] xl:h-[300px] "
      />

      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-2xl font-semibold mt-6">
          Here is a little background
        </h4>
        <p className="text-xs lg:text-base md:text-base">
          As a creative individual passionate about learning new skills and
          constantly furthering my knowledge, I am particularly drawn to the IT
          sector because it is a fast-paced and dynamic environment with
          limitless opportunities for professional growth. Furthermore, the
          possibility to create something from virtually nothing that IT
          technologies offer has always intrigued me and I firmly believe that
          software development represents the perfect way for channeling
          creativity and materializing innovative ideas.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
