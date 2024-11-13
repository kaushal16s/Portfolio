import Image from 'next/image';
import React from 'react';
import alan from '../public/alan.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Ainewsapp = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={alan}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 font-semibold text-4xl'>AI News-App</h2>
          <h3 className='antialiased hover:subpixel-antialiased text-lg'>React JS /Alan AI</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-4xl '>Project</p>
          <h2 className='text-xl'>Overview</h2>
          <p className='text-lg tracking-widest
          
          
          
          
          
          
          
          
          
          '>
            I built this application in React JS and is hosted on netlify.It  is an Artificial Intelligence React News
Application using Alan AI. Alan AI is a
revolutionary speech recognition software that
allows you to add voice capabilities to your
applications. We get the Latest News using news API
            
          </p>
          <a
            href='https://github.com/kaushal16s/AI-News-App'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mr-8'>Code</button>
          </a>
          <a
            href='https://ai-newsreader-app.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-5 md:col-span-1  rounded-xl py-4 bg-black'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 p-6 text-xl'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-[gold] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-[gold] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-[gold] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-[gold] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Alan AI
              </p>
              <p className='text-[gold] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> News api
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Ainewsapp;