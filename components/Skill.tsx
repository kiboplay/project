import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  element: string;
};

function Skill({ directionLeft, element }: Props) {
  return (
    <div className="group relative flex ">
      <motion.img
        initial={{
          x: -120,
          opacity: 0,
        }}
        whileHover={{ scale: 1.2, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={element}
        className="rounded-full border border-gray-500 object-cover w-24 h-24  "
      />
    </div>
  );
}

export default Skill;
