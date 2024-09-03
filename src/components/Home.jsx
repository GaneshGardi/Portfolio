import React, { useEffect, useState } from "react";
import { SparklesCore } from "../components/ui/Sparkles";
import { motion } from "framer-motion";
import Design from "./Design.jsx";
import { cn } from "../components/lib/utils.js";
import { Spotlight } from "../components/ui/Spotlight.jsx";


function Home() {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
  <section id="home">
    <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative z-10">
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: isAtTop ? 0 : -50, opacity: isAtTop ? 1 : 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1
        }}
        className="text-5xl md:text-7xl font-dancing text-left text-white relative mt-20"
      >
        Hello, <br />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: isAtTop ? 0 : 100, opacity: isAtTop ? 1 : 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1
          }}
          className="pb-4 font-lato"
        >
          I'm <span className="ml-4 font-lato">Ganesh Gardi</span>
        </motion.div>
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isAtTop ? 0 : 20, opacity: isAtTop ? 1 : 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1
        }}
        className="text-white mt-1 font-sans"
      >
        <span className="font-cascadia">MERN Stack Developer</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAtTop ? 1 : 0 }}
        transition={{ 
          duration: 0.7,
          delay: 0.1
        }}
        className="w-[40rem] h-40 relative mt-4"
      >
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAtTop ? 1 : 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1
          }}
          className="absolute inset-0 w-full h-full bg-[#0f0f0f] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"
        ></motion.div>
      </motion.div>
     
    </div>
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Design/>
    </div>
    </section>
    </>
  );
}

export default Home;
