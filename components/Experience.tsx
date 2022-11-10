import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

interface Logo {
  name: string;
  img: string;
  date: string;
  pozicija: string;
  opis: string;
  id: number;
}

const Slike: Logo[] = [
  {
    name: "Elektroprivreda Srbije",
    img: "/eps6.jpg",
    date: "06/2021 - PRESENT",
    pozicija: "Automation electrician",
    opis: "Electric equipment maintenance",
    id: 1,
  },
  {
    name: "Princess Cruise",
    img: "/princess3.png",
    date: "10/2019 - 01/2021",
    pozicija: "Audio visual technician",
    opis: "Setting up the stages, audio and lighting",
    id: 2,
  },
  {
    name: "Republic geodetic authority",
    img: "/rgz2.png",
    date: "09/2017 - 2019",
    pozicija: "IT technician",
    opis: "Troubleshoot, diagnose, and resolve technical hardware and/or software issues",
    id: 3,
  },
];

function Experience() {
  const [logo, setLogo] = useState(Slike);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[12px] text-gray-500  text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 lg:justify-center overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin">
        {logo.map((znak) => {
          return (
            <ExperienceCard
              element={znak.img}
              key={znak.id}
              date={znak.date}
              pozicija={znak.pozicija}
              opis={znak.opis}
              name={znak.name}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Experience;
