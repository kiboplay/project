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
      <div className="flex justify-center w-max ">
        <img
          className="relative rounded-full h-10 w-10 mx-auto  object-cover md:w-32 md:h-32 display:block top-50 left-50 translate-y-[100%] lg:translate-y-[0%] md:translate-y-[0%]"
          src="/img.jpg"
          alt="slika"
        />
      </div>
      <div className="z-20">
        <h2 className="text-xs uppercase  text-gray-500 pb-4 pt-4 tracking-[5px]">
          Developer-JS
        </h2>
        <h1 className="text-1xl lg:text-1xl font-semibold px-10 pb-1">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#17ff1f" />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton text-[8px] lg:text-xs md:text-xs">
              About
            </button>
          </Link>

          <Link href="#experience">
            <button className="heroButton text-[8px] lg:text-xs md:text-xs">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton text-[8px] lg:text-xs md:text-xs">
              Skills
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
