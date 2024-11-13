import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ai from '../public/ai.png'
import ml from '../public/ml.png'
import vcall from '../public/vcall.png'
import quiz from '../public/quiz.png'
import cricket from '../public/cric.png'
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';


const Projects = () => {
  return (
    <motion.div id='projects' 
    initial={{ y:2, opacity: 0}}
         whileInView={{y:[-250,0],
         opacity : 1 }}
         transition={{duration:1}}
    className='w-full py-7'>
      <div className='max-w-[1240px] mx-auto px-3 py-17'>
        <p className='text-4xl tracking-widest uppercase text-[gold] text-center py-12'>
          PROJECTS
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='AI-News App'
             backgroundImg={ai}
             projectUrl='/Ainewsapp'
            tech='React JS'
          />
          <ProjectItem
            title='Nifty-Fifty'
             backgroundImg={ml}
             projectUrl='/Nifty50'
            tech='Python,HTML,CSS'

          />
          <ProjectItem
            title='Quiz-App'
            backgroundImg={quiz}
            projectUrl='/videocall'
            tech='Flutter'

          />
          {/* <ProjectItem
            title='SocialBridge'
            backgroundImg={vcall}
            projectUrl='/videocall'
            tech='React JS'

          /> */}
            <ProjectItem
            title='T20-Cricket-WC-Data-Analysis'
            backgroundImg={cricket}
            projectUrl='/cricket'
            tech='Python'

          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
