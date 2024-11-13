import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={`fixed w-full z-[100] ${
        shadow ? 'bg-[#181818]/90 shadow-lg' : 'bg-transparent'
      } transition duration-300`}
    >
      <div className="flex justify-between items-center w-full h-20 px-4 lg:px-16">
        {/* Logo replacement with text */}
        <Link href="/" className="navbar-text">
          Kaushal 
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white uppercase text-lg tracking-wide hover:text-gray-300 transition">Home</Link>
          <Link href="/#about" className="text-white uppercase text-lg tracking-wide hover:text-gray-300 transition">About</Link>
          <Link href="/#skills" className="text-white uppercase text-lg tracking-wide hover:text-gray-300 transition">Skills</Link>
          <Link href="/#projects" className="text-white uppercase text-lg tracking-wide hover:text-gray-300 transition">Projects</Link>
          <Link href="/#contact" className="text-white uppercase text-lg tracking-wide hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div onClick={handleNav} className="md:hidden cursor-pointer text-white">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${nav ? 'fixed' : 'hidden'} top-0 left-0 w-full h-screen bg-black/70`}>
        {/* Mobile Side Menu */}
        <div
          className={`${
            nav ? 'fixed left-0' : 'left-[-100%]'
          } top-0 w-3/4 sm:w-2/3 md:w-1/2 h-screen bg-[#181818] p-8 transition duration-500`}
        >
          <div className="flex justify-between items-center">
            <Link href="/" className="text-paper-effect">
              Kaushal's Portfolio
            </Link>
            <div onClick={handleNav} className="cursor-pointer text-white">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="border-b border-gray-500 my-4">
            <p className="text-white uppercase py-4 tracking-wide">Portfolio</p>
          </div>

          <div className="flex flex-col space-y-4 mt-8">
            <Link href="/" onClick={() => setNav(false)} className="text-white uppercase tracking-wider text-base">Home</Link>
            <Link href="/#about" onClick={() => setNav(false)} className="text-white uppercase tracking-wider text-base">About</Link>
            <Link href="/#skills" onClick={() => setNav(false)} className="text-white uppercase tracking-wider text-base">Skills</Link>
            <Link href="/#projects" onClick={() => setNav(false)} className="text-white uppercase tracking-wider text-base">Projects</Link>
            <Link href="/#contact" onClick={() => setNav(false)} className="text-white uppercase tracking-wider text-base">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="pt-20">
            <p className="uppercase tracking-widest text-white">Connect with me</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/kaushal-s/" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg p-3 text-white hover:bg-gray-800 transition">
                  <FaLinkedinIn size={20} />
                </div>
              </a>
              <a href="https://github.com/kaushal16s" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg p-3 text-white hover:bg-gray-800 transition">
                  <FaGithub size={20} />
                </div>
              </a>
              <a href="https://twitter.com/Kaushal_S19" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg p-3 text-white hover:bg-gray-800 transition">
                  <FaTwitter size={20} />
                </div>
              </a>
              <Link href="/resume" onClick={() => setNav(false)}>
                <div className="rounded-full shadow-lg p-3 text-white hover:bg-gray-800 transition cursor-pointer">
                  <BsFillPersonLinesFill size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
