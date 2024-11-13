import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Skills=()=> {
  return (
    <div id='skills' className='w-full md:h-screen p-3 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gaps-8'>
        <motion.div 
         initial={{ y:2, opacity: 0}}
         whileInView={{y:[-100,0],
         opacity : 1 }}
         transition={{duration:1}}

         className='col-span-2 text-5xl'>
   
           <p className='uppercase text-3xl tracking-[20px] py-3 text-[gold] text-center'>SKILLS</p>
           {/* <p className='uppercase text-lg tracking-wide py-3 text-white '>Fro</p> */}
           <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

             
             <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500  dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/html.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>HTML</h6>
                         </div>  
                  </div>
               </div>

               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500  dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/css.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>CSS</h6>
                         </div>  
                  </div>
               </div>


               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500  dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/javascript.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>JavaScript</h6>
                         </div>  
                  </div>
               </div>


               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500  dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/react.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>React</h6>
                         </div>  
                  </div>
               </div>
              

               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500 dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/tailwind.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>Tailwind</h6>
                         </div>  
                  </div>
               </div>
              
               
               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500 dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/python.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>Python</h6>
                          
                  </div>
               </div>
               </div>

               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500 dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/c.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>C</h6>
                         </div>  
                  </div>
               </div>

               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500 dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/flutter.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>Flutter</h6>
                         </div>  
                  </div>
               </div>
               
               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500 dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/mysql.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>MySQL</h6>
                         </div>  
                  
               </div>
               </div>

               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500 dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/firebase.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>Firebase</h6>
                         </div>  
                  
               </div>
               </div>

               <div className='p-6 shadow-xl hover:scale-105 ease-in duration-500 dark:bg-slate-800 rounded-lg'>
                 <div className='grid grid-cols gap-4 justify-center'>
                     <div className='m-auto'>
                        <Image src='/../public/powerbi.png' alt='/' width='75' height='75'/>
                      </div>
                         <div className='flex flex-col items-center justify-center text-xl'>
                           <h6>Power BI</h6>
                         </div>  
                  
               </div>
               </div>
            
              </div>
           </motion.div>
        </div>
    </div> 
  )

}

export default Skills
