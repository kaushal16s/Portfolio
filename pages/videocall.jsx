import Image from 'next/image';
import React from 'react';
import vcall from '../public/vcall.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Nifty50 = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={vcall}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Quiz App</h2>
          <span className='py-1'></span>
          <h3>Flutter/Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          The app presents quizzes with images and multiple choice answers to foster cognitive development and learning engagement.
          The project aimed at enhancing educational tools for children, making learning both fun and interactive.
            </p>
          <a
            href='https://github.com/kaushal16s/quiz_app-'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='#'
            target='_blank'
            rel='noreferrer'
          >
            {/* <button className='px-8 py-2 mt-4'>Demo</button> */}
          </a>
        </div>
        <div className='col-span-5 md:col-span-1  rounded-xl py-4 bg-slate-500'>
          <div className='p-5 '>
            <p className='text-center font-bold pb-2 p-6'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-[gold] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Flutter
              </p>
              <p className='text-[gold] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              {/* <p className='text-[gold] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p> */}
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

export default Nifty50;