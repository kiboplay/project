import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  element: string;
  date: string;
  pozicija: string;
  opis: string;
  name: string;
};

export default function ExperienceCard({
  element,
  date,
  pozicija,
  opis,
  name,
}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[400px] xl:h-[420px] snap-center bg-[#292929] hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden p-10">
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-full  h-24 w-24 xl:w-[60px] xl:h-[60px] object-cover object-center"
        src={element}
        alt="zez"
      />
      <div className="px-0 md:px-10">
        <p className="uppercase py-4 text-gray-300  text-center">{date}</p>
        <h4 className="font-bold text-2xl mt-1 text-center mb-4">{name}</h4>
        <p className="text-2xl font-light text-center mb-4">{pozicija}</p>

        <ul className="list-disc space-y-4 ml-5 text-sm">
          <li>{opis}</li>
        </ul>
      </div>
    </article>
  );
}
