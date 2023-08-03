import React, { useState } from 'react';
import logo from '../assets/port-logo.png';
import { FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [bool, setBool] = useState(false);
  const handleClickBar = () => {
    setBool(!bool);
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-around items-center px-4 bg-slate-900 text-gray-200 z-10'>
      <div className=''>
        <img src={logo} className='w-32' alt='logo' />
      </div>
      <div className='hidden lg:flex md:flex flex-grow justify-end'>
        {/* menu */}
        <ul className='flex font-mono font-medium'>
          <li className='px-4 cursor-pointer'>
          <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
          </li>
          <li className='px-4 cursor-pointer'>
          <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link>
          </li>
          <li className='px-4 cursor-pointer'>
          <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
          </li>
          
          <li className='px-4 cursor-pointer'>
          <Link  to="projects"  smooth={true}  duration={500} >
          Projects
        </Link>
          </li>
          <li className='px-4 cursor-pointer'>
          <Link  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
          </li>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClickBar} className='flex
      flex-grow justify-end
      md:hidden lg:hidden z-10'>
        {bool ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile menu */}
      <div>
        <ul
          className={
           ! bool
              ? 
              'hidden' : 'lg:hidden md:hidden absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center font-mono font-medium'
          }
        >
         <li className='py-6 cursor-pointer'>
          <Link onClick={handleClickBar} to="home"  smooth={true}  duration={500} >
          Home
        </Link>
          </li>
          <li className='py-6 cursor-pointer'>
          <Link onClick={handleClickBar}  to="about"  smooth={true}  duration={500} >
          About
        </Link>
          </li>
          <li className='py-6 cursor-pointer'>
          <Link onClick={handleClickBar} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
          </li>
    
          <li className='py-6 cursor-pointer'>
          <Link onClick={handleClickBar} to="projects"  smooth={true}  duration={500} >
          Projects
        </Link>
          </li>
          <li className='py-6 cursor-pointer'>
          <Link onClick={handleClickBar} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
          </li>
        </ul>
      </div>
      {/* social logo */}
      <div className='flex flex-col fixed top-[30%] left-0 font-mono  '>
        <ul>
          <li className=' my-2 rounded-lg  px-1 w-[130px] h-[40px] flex justify-between items-center ml-[-90px] 
          hover:ml-[9px] duration-300 bg-sky-600' >
            <a href='https://www.linkedin.com/in/nr2001' className='flex justify-between w-full pl-2 text-gray-300' >Linkedin <FaLinkedin size={30}></FaLinkedin> </a>
          </li>
          <li className=' my-2 rounded-lg  px-1 w-[130px] h-[40px] flex justify-between items-center ml-[-90px] 
          hover:ml-[9px]  duration-300 bg-slate-950' >
            <a href='https://github.com/naimur2001?tab=repositories' target='_blank' className='flex justify-between w-full pl-2 text-gray-300' >GitHub <FaGithub
            size={30}
            ></FaGithub>  </a>
          </li>
          <li className=' my-2 rounded-lg  px-1 w-[130px] h-[40px] flex justify-between items-center ml-[-90px] 
          hover:ml-[9px] duration-300 bg-blue-700' >
            <a href='https://www.facebook.com/naimur2001' target='_blank' className='  flex justify-between w-full pl-2 text-gray-300' >FaceBook <FaFacebook
            size={30}
            ></FaFacebook>   </a>
          </li>

          
        
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
