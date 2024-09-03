import React from 'react'
import { useState, useEffect } from 'react'

function BackToTop() {

    const [backtoTop, setBackToTop] = useState(false)


    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <>
    {backtoTop && (
        <svg 
        onClick={scrollUp}
        className='bg-[#756AB6] cursor-pointer hover:scale-110 duration-200 transition-ease-in-out rounded-full text-white p-2 h-14 w-14 bottom-[50px] fixed right-[50px] z-50'
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>

    )}
    </>
  )
}

export default BackToTop
