import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [2, 0.9],
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="rounded-full border border-[#333333] lg:h-[150px] lg:w-[150px] h-[50px] w-[50px] absolute mt-52 animate-ping  " />

      <div className="absolute border  border-[#333333] rounded-full lg:h-[200px] lg:w-[200px] h-[100px] w-[100px]  mt-52 animate-ping  " />
      <div className="absolute border  border-[#333333] rounded-full lg:h-[250px] lg:w-[250px] h-[150px] w-[150px]  mt-52 animate-ping " />

      <div className="rounded-full border border-[#333333] lg:h-[290px] lg:w-[290px] h-[190px] w-[190px]  absolute mt-52  animate-ping" />

      <div className="rounded-full border border-[#17ff1f]  h-[380px] w-[380px] absolute mt-52 md:w-[600px] md:h-[600px] opacity-20 flex justify-center items-center animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircles;
