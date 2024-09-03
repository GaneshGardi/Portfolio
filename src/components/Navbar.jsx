import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  //function to handle hidden nav
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative z-20'>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-10%", opacity: 0 }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.2 }}
        className='fixed flex justify-center text-white w-full mt-12 md:text-2xl gap-10 md:gap-20 font-lato'
      >
        <h1 
          className='cursor-pointer hover:scale-110 duration-300'
          onClick={() => scrollToSection('home')}
        >
          Home
        </h1>
        <h1 
          className='cursor-pointer hover:scale-110 duration-300'
          onClick={() => scrollToSection('about')}
        >
          About
        </h1>
        <h1 
          className='cursor-pointer hover:scale-110 duration-300'
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </h1>
        <h1 
          className='cursor-pointer hover:scale-110 duration-300'
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </h1>
      </motion.nav>
    </div>
  );
}

export default Navbar;
