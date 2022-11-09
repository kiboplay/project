import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin">
      <Head>
        <title>Kibo Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center ">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/*Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/*Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <div className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter  hover:bg-[#525456]"
              src="/up.png"
              alt="s"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
