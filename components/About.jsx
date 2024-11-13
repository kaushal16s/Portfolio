import React from 'react'
import photo1 from '../public/photo1.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
const About=() => {
  return (
    
   <div id='about' className='w-full md:h-screen p-3 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gaps-8'>
        <motion.div 
        initial={{ x:2, opacity: 0}}
        whileInView={{x:[-250,0],
        opacity : 1 }}
        transition={{duration:1}}
        
        className='col-span-2 text-5xl'>
           <p className='uppercase text-3xl tracking-[20px] py-3 text-[gold] text-center'>ABOUT</p>
           <h2 className='py-3'>Me!</h2>
           <p className='text-2xl'>A self taught individual who closely works with designs.
            You'll find me using modern frontend technologies that bring the creative process to life just as designers intended them to be.
            <br></br>I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
           </p><br></br>
           <p className='text-2xl'> I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React</p>
        </motion.div>
         <motion.div 
          initial={{ x:2, opacity: 0}}
          whileInView={{x:[250,0],
          opacity : 1 }}
          transition={{duration:1}}
         className=' h-auto m-auto p-5    '>
            <Image src={photo1} alt='/' width='900' height='900' className='cursor-pointer hover:scale-95 ease-out duration-500 shadow-lg'></Image>
         </motion.div>
      </div>
    </div>
  )
}

export default About
