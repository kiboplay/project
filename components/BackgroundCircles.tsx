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
      <div className="rounded-full border border-[#333333]  h-[150px] w-[150px]  absolute mt-52  animate-ping " />

      <div className="absolute border  border-[#333333] rounded-full h-[200px] w-[200px]  mt-52 animate-ping  " />
      <div className="absolute border  border-[#333333] rounded-full h-[250px] w-[250px]  mt-52 animate-ping " />

      <div className="rounded-full border border-[#333333] h-[290px] w-[290px]  absolute mt-52  animate-ping" />
      <div className="rounded-full border border-[#17ff1f] opacity-20 h-[480px] w-[480px] absolute mt-52 animate-pulse md:w-[600px] md:h-[600px]" />
    </motion.div>
  );
}

export default BackgroundCircles;
