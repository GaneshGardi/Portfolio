import React, { useEffect, useState } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 
import { motion } from "framer-motion";
import { withEmotionCache } from '@emotion/react';

function Projects() {

  const [isattop, setIsAtTop] = useState(false)
 
  const handleScroll = () => {
    if(window.scrollY > 1000){
      setIsAtTop(true)
    }else{
      setIsAtTop(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])


  useEffect(() => {
    tippy('#tip1', {
      content: 'Music School',
      placement: 'top',
      animation: 'scale',
      theme: 'dark',
      offset: [0, 40],
      interactive: false,
      theme: 'orange-theme',
      
    });
  }, []);

  useEffect(() => {
    tippy('#tip2', {
      content: 'Book Hub',
      placement: 'top',
      animation: 'scale',
      theme: 'dark',
      offset: [0, 40],
      interactive: false,
      theme: 'yellow-theme',
    });
  }, []);


  useEffect(() => {
    tippy('#tip3', {
      content: 'Easy Depot',
      placement: 'top',
      animation: 'scale',
      theme: 'dark',
      offset: [0, 40],
      interactive: false,
      theme: 'cyan-theme',
    });
  }, []);

  return (
    <section className='relative' id='projects'>
      <div className='w-full h-full bg-[#0f0f0f] text-white'>
        <div>
          <motion.h1
          initial={{y: 20, opacity: 0}}
          animate={{y: isattop ? 0 : 20, opacity: isattop ? 1 : 0}}
          transition={{
            duration: 0.3,
            delay: 0
          }}
          className='text-4xl flex justify-center p-4 pt-12 text-[#1788ae] underline underline-offset-8 font-exo'>Latest Works</motion.h1>
        </div>


      {/**-------------------------------------------------------1----------------------------------------------------- */}

        <div className='flex justify-between items-center pt-20 px-20 relative'> 
          {/*Horizontal Line  */}
          <div className='absolute left-[455px] -translate-y-1/2 w-[300px] h-[2px] bg-[#E06D4C] z-0 items-center' />
          {/*DOT */}
          <div className='h-3 w-3 border-[3px] border-[#E06D4C] rounded-full bg-black left-1/2 absolute z-10 -translate-x-1/2 -translate-y-[1px]'></div>
        
          <motion.a
           initial={{ x: 50, opacity: 0 }}
           animate={{ x: isattop ? 0 : 50, opacity: isattop ? 1 : 0 }}
           transition={{
             duration: 0.3,
             delay: 0.1
           }}
          href='https://github.com/GaneshGardi/Music_Nextjs' id='tip1' className='relative z-10 hover:scale-125 duration-300 transition-ease-in-out'>
            <img src='/src/assets/music.png' className='h-[250px] w-auto cursor-pointer m-0 p-0 ' />  
          </motion.a>
          
          <div className='w-1/2 pl-12'>
            <motion.h1
            initial={{x: -80, opacity: 0}}
            animate={{x: isattop ? 0 : -80, opacity: isattop ? 1 : 0}}
            transition={{
              duration: 0.3,
              delay: 0.1
            }}
            className='text-5xl mb-1 font-zain font-semibold text-[#E06D4C]'>Music School</motion.h1>
            <motion.p
            initial={{x: -80, opacity: 0}}
            animate={{x: isattop ? 0 : -80, opacity: isattop ? 1 : 0}}
            transition={{
              duration: 0.3,
              delay: 0.15
            }}
            >
              Music School is an engaging platform where users can browse a wide range of instrument learning courses tailored for all skill levels. Discover experienced instructors who guide you through your musical journey, and read testimonials from students who have benefited from their expertise.</motion.p>
            <motion.div
            initial={{x: -70, opacity: 0}}
            animate={{x: isattop ? 0 : -70, opacity: isattop ? 1 : 0}}
            transition={{
              duration: 0.4,
              delay: 0.4
            }}
            className='mt-6 space-x-6'>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>Next.JS</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>TailwindCSS</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>AceternityUI</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>Shadcn/ui</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>TypeScript</span>
            </motion.div>
          </div>
          </div>


         {/**-------------------------------------------------------2----------------------------------------------------- */} 

          <div className='flex justify-between items-center pt-36 px-20 relative'> 
          {/*Horizontal Line  */}
          <div className='absolute right-[455px] -translate-y-1/2 w-[300px] h-[2px] bg-[#E8AA42] z-0 items-center' />
          {/*DOT */}
          <div className='h-3 w-3 border-[3px] border-[#E8AA42] rounded-full bg-black left-1/2 absolute z-10 -translate-x-1/2 -translate-y-[1px]'></div>
          
           <div className='w-1/2 pl-12'>
            <motion.h1
            initial={{x: -80, opacity: 0}}
            animate={{x: isattop ? 0 : -80, opacity: isattop ? 1 : 0}}
            transition={{
              duration: 0.3,
              delay: 0.2
            }}
            className='text-5xl mb-1 font-zain font-semibold text-[#E8AA42]'>Book Hub</motion.h1>
            <motion.p
            initial={{x: -80, opacity: 0}}
            animate={{x: isattop ? 0 : -80, opacity: isattop ? 1 : 0}}
            transition={{
              duration: 0.3,
              delay: 0.2
            }}
            >The Book Hub is a MERN stack web application with robust user authentication and authorization, featuring an admin dashboard for managing students and book inventories. Administrators can securely add students and books, while students can log in to browse the available library resources. The application ensures a seamless and secure user experience with intuitive navigation.</motion.p>
            <motion.div
             initial={{x: 70, opacity: 0}}
             animate={{x: isattop ? 0 : 70, opacity: isattop ? 1 : 0}}
             transition={{
               duration: 0.4,
               delay: 0.4
             }}
            className='mt-6 space-x-6'>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>React</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>TailwindCSS</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>JavaScript</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>Express.JS</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>Node.JS</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>MongoDB</span>
            </motion.div>
          </div>
          <motion.a
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: isattop ? 0 : -50, opacity: isattop ? 1 : 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1
          }}
          href='https://github.com/GaneshGardi/BookHub' id='tip2' className='relative z-10 hover:scale-125 duration-300 transition-ease-in-out'>
            <img src='/src/assets/bookhub.png' className='h-[270px] w-auto cursor-pointer m-0 p-0 ' />  
          </motion.a>
          </div>


        {/**-------------------------------------------------------3----------------------------------------------------- */}

          <div className='flex justify-between items-center pt-36 pb-12 px-20 relative'> 
          {/*Horizontal Line  */}
          <div className='absolute left-[455px] -translate-y-1/2 w-[300px] h-[2px] bg-[#36BA98] z-0 items-center' />
          {/*DOT */}
          <div className='h-3 w-3 border-[3px] border-[#36BA98] rounded-full bg-black left-1/2 absolute z-10 -translate-x-1/2 -translate-y-[1px]'></div>
        
          <a href='https://github.com/GaneshGardi/Easy-Depot' id='tip3' className='relative z-10 hover:scale-125 duration-300 transition-ease-in-out'>
            <img src='/src/assets/easydepot.png' className='h-[250px] w-auto cursor-pointer m-0 p-0 ' />  
          </a>
          
          <div className='w-1/2 pl-12'>
            <h1 className='text-5xl mb-1 font-zain font-semibold text-[#36BA98]'>Easy Depot</h1>
            <p>Easy Depot is a web application designed to streamline collaboration between newspaper distributors and vendors. Distributors can add vendors and manage daily newspaper inventory, which is instantly reflected on the vendors' dashboards. Vendors can view available newspapers, place orders, and, upon distributor confirmation, proceed with secure payments, ensuring a smooth and efficient transaction process.</p>
            <div className='mt-6 space-x-6'>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>React</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>TailwindCSS</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>MongoDB</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>Express.JS</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>Node.JS</span>
              <span className='text-sm outline outline-1 rounded-full px-2 py-1'>JavaScript</span>
            </div>
          </div>
          </div>


      </div>

      {/* Vertical line positioning */}
      <div className='absolute top-[90px] bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#1788ae]' />
      <div className='absolute -translate-y-1/2 left-[616px] w-[300px] h-[3px] bg-[#1788ae] z-0 items-center' />
    </section>
  );
}

export default Projects;
