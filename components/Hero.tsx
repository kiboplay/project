import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import Link from "next/link";
import Image from "next/future/image";

import profile from "img/slidza.jpg";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi-my-name-is-Bojan",
      "Guy-who-loves-Music.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-24 w-24 mx-auto object-cover md:w-32 md:h-32"
        src="/img.jpg"
        alt="slika"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-4  tracking-[5px]">
          Developer-JS
        </h2>
        <h1 className="text-1xl lg:text-2xl font-semibold px-10 pb-3">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#17ff1f" />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
