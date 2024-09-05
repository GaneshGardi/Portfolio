import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion';

function About() {

  const [isAtTop, setIsAtTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about">
      <div className="w-full h-screen bg-[#0f0f0f] text-white z-10 relative">
        <div className="flex justify-center md:justify-between h-screen items-center md:mx-20">
          <div className="md:w-1/2 md:order-1 p-6">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isAtTop ? 0 : 50, opacity: isAtTop ? 1 : 0 }}
              transition={{
                duration: 0.3,
                delay: 0.1
              }}
              className="text-4xl md:text-7xl font-semibold mb-4 md:mb-6 font-lato"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: isAtTop ? 0 : -50, opacity: isAtTop ? 1 : 0 }}
              transition={{
                duration: 0.3,
                delay: 0.1
              }}
            >
              I am a passionate MERN Stack Developer with a strong foundation in
              building dynamic, responsive, and scalable web applications. I have
              a solid understanding of front-end development, including crafting
              intuitive user interfaces and ensuring seamless user experiences
              with React and Tailwind CSS. On the back-end, I excel in creating
              end-to-end solutions using MongoDB, Express.js, React, and Node.js.
            </motion.p>

            <div className="pt-16 flex gap-8">
              <Tooltip title="MongoDb" placement="top">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: isAtTop ? 0 : -50, opacity: isAtTop ? 1 : 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1
                  }}
                  className="flex flex-col justify-center items-center cursor-pointer"
                >
                  <img
                    className="w-20 h-24 cursor-pointer"
                    src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                    alt="MongoDB"
                  />
                  <p className="text-2xl text-[#6CAC48] font-semibold">M</p>
                </motion.div>
              </Tooltip>

              <Tooltip title="Express.JS" placement="top">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: isAtTop ? 0 : -50, opacity: isAtTop ? 1 : 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2
                  }}
                  className="flex flex-col justify-center items-center cursor-pointer"
                >
                  <svg
                    className="w-20 h-20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="50"
                    height="50"
                  >
                    <g fill="#ffff">
                      <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"></path>
                    </g>
                  </svg>
                  <p className="text-2xl font-semibold mt-4">E</p>
                </motion.div>
              </Tooltip>

              <Tooltip title="React.JS" placement="top">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: isAtTop ? 0 : -50, opacity: isAtTop ? 1 : 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3
                  }}
                  className="flex flex-col justify-center items-center cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faReact}
                    className="text-blue-500 h-20 w-20"
                  />
                  <p className="text-2xl pt-3 text-blue-500 font-semibold">R</p>
                </motion.div>
              </Tooltip>

              <Tooltip title="Node.JS" placement="top">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: isAtTop ? 0 : -50, opacity: isAtTop ? 1 : 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4
                  }}
                  className="flex flex-col justify-center items-center cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className="text-[#8CC84B] h-20 w-20"
                  />
                  <p className="text-2xl mt-3 text-[#8CC84B] font-semibold">N</p>
                </motion.div>
              </Tooltip>
            </div>
            <motion.div
            initial={{y: -70, opacity: 0}}
            animate={{y: isAtTop ? 0 : -70, opacity: isAtTop ? 1 : 0}}
            transition={{
              duration:0.4,
              delay: 0.2
            }}
            className="mt-12 cursor-pointer">

              <a  href="Resume 1.pdf" className="mt-12 p-2 ml-8 text-xl border border-[#CD1818] hover:bg-[#CD1818] rounded-lg duration-300">Download Resume</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: isAtTop ? 0 : 50, opacity: isAtTop ? 1 : 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1
            }}
            className="hidden md:block"
          >
            <img
              className="w-[500px] h-[500px]"
              src="/Designer.jpeg"
              alt="Designer"
            />
          </motion.div>

          
        </div>
     
      </div>
    </section>
  );
}

export default About;
