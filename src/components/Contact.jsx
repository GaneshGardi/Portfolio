
import React from 'react';
import { useState,useRef } from 'react';
import {motion} from 'framer-motion'
import Earth from './canvas/Earth';
import StarsCanvas from './canvas/Stars';




function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "219b4df0-5713-4b6c-9f09-b6f2bdd9ac2d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent Successfully");

      alert("message sent")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    
    }
  };



  return (

    <>

    <section id='contact'>
      <div className='w-full relative bg-[#0f0f0f] z-40 h-screen text-white flex justify-between px-32 pt-20'>
        <form onSubmit={onSubmit} className='w-[500px]'>
          <h1 className='text-4xl font-lato font-semibold flex justify-center items-center'>Let's Connect</h1>
          <div className='flex flex-col mt-12'>
            <label className='text-xl font-mono mb-2'>Email</label>
            <input placeholder='youremail@gmail.com' className='p-2 rounded-lg bg-slate-500 text-white outline-none' name='email'></input>
            <label className='text-xl font-mono mb-2 mt-10' >Message</label>
            <textarea name='text' placeholder='Enter you message'
            className='p-2 rounded-lg bg-slate-500 text-white h-[200px]'></textarea>
          </div>
          <button className='mt-8 bg-none w-full outline outline-[#00AD9A] rounded-lg p-3 text-2xl hover:bg-[#00AD9A] duration-300'>Send</button>
        </form>
       
       <div className='w-1/2'>

        <Earth/>
        <StarsCanvas/>
       </div>
      </div>
    </section>
    
    </>
  );
}

export default Contact;
