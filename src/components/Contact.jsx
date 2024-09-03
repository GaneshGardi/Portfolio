
import React from 'react';


function Contact() {
  return (

    <>
    <section id='contact'>
    <div className='relative z-20 bg-[#0f0f0f] h-screen text-white flex justify-center items-center'>
      <div className='w-[600px] h-[200px] flex justify-center items-center flex-col'>
        <h1 className='text-7xl font-lato font-semibold'>Let's Connect</h1>
        <div className='mt-12'>
        <label htmlFor='email' className='flex justify-start items-start mb-2 text-2xl font-mono'>Email:</label>
        <input type='email' placeholder='email@gmail.com' className='px-2 py-2 w-[500px] rounded-md bg-gray-600 outline-none'></input>
        </div>
        <div className='mt-12'>
        <label htmlFor='email' className='flex justify-start items-start mb-2 text-2xl font-mono'>Your Message:</label>
        <textarea type='text' placeholder='enter your message...' className='px-2 py-2 w-[500px] h-[200px] rounded-md bg-gray-600 outline-none'></textarea>
        </div>
        <div className='mt-12'>
          <button className='text-white border border-[#00AD9A] hover:bg-[#00AD9A] duration-200 hover:text-black text-3xl w-[500px] py-3 rounded-lg font-cascadia font-semibold'>
            Send
          </button>
        </div>
        
        
      </div>
    </div>
    </section>
    
    </>
  );
}

export default Contact;
