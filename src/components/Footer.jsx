import React from 'react'

function Footer() {


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className='relative z-20 h-auto bg-[#20252d] text-white'>
       <div className='flex justify-center items-center gap-20 text-2xl pt-6 font-lato font-semibold'>
        <h1 onClick={() => scrollToSection('home')} className=' hover:underline duration-200 cursor-pointer'>Home</h1>
        <h1 onClick={() => scrollToSection('about')} className=' hover:underline duration-200 cursor-pointer'>About</h1>
        <h1 onClick={() => scrollToSection('projects')} className=' hover:underline duration-200 cursor-pointer'>Projects</h1>
        <h1 onClick={() => scrollToSection('contact')} className=' hover:underline duration-200 cursor-pointer'>Contact</h1>
       </div>

        <div className='flex justify-center items-center mt-16 gap-6'>
            <a href='https://github.com/GaneshGardi'><img className='w-14 h-14 cursor-pointer' src='../src/assets/github.png'></img></a>
            <a href='https://www.linkedin.com/in/ganesh-gardi-7b134b26b/'><img className='w-14 h-14 cursor-pointer' src='../src/assets/linkedin.png'></img></a>
            <a href='https://www.instagram.com/ganesh_gardi/'><img className='w-12 h-12 cursor-pointer' src='../src/assets/insta.png'></img></a>
        </div>
        <div className='flex justify-center items-center mt-10 pb-12'>
            <h1>Copyright © 2024 - All right reserved by Ganesh Gardi</h1>
        </div>
    </div>
  )
}

export default Footer
