import React, { useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

interface Paket {
  name: string;
  img: string;
}

const Slike: Paket[] = [
  {
    name: "CSS",
    img: "/css.png",
  },
  {
    name: "HTML",
    img: "/html.png",
  },
  {
    name: "JAVASC",
    img: "/js3.png",
  },
  {
    name: "NEXT",
    img: "/nextjs5.jpeg",
  },
  {
    name: "REACT",
    img: "/react.png",
  },
  {
    name: "SANITY",
    img: "/sanity.png",
  },
  {
    name: "TAILWIND",
    img: "/tailwind.png",
  },
  {
    name: "TS",
    img: "/ts.png",
  },
  {
    name: "VISUal",
    img: "/visual.png",
  },
];

export default function Skills() {
  const [picture, setPicture] = useState(Slike);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto  items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[12px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-5">
        {picture.map((slidza) => {
          return <Skill element={slidza.img} key={slidza.name} />;
        })}
      </div>
    </motion.div>
  );
}
