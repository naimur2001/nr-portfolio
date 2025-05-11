import React from 'react';
import { HiArrowDown, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import resume from '../assets/Naimur Rahman CV..pdf'
const Home = () => {
  return (
    <div name='home' className='font-mono w-full 
  bg-slate-900 
   h-screen
   
    '>
      <div className='max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full  ml-10'>
<p className='text-red-500'>Hi, This is</p>
<h1 className='text-4xl sm:text-5xl font-bold text-slate-100'>Naimur Rahman</h1>
<h2 className='text-2xl sm:text-3xl font-bold text-slate-300' >
<Typewriter
  options={{
    strings: ['A software engineer','A web developer' ,'A passionate coder' ,'A hard worker','A quick learner'],
   autoStart:true,
   delay:20,
   deleteSpeed:20,
    loop: true,
    
  }}
  
/>
</h2>
<p className='text-xl text-slate-500' > Enthusiastic Software Engineer with a solid foundation in
building scalable applications. Quick to learn, team-friendly,
and focused on delivering practical solutions. Passionate
about problem-solving and always eager to grow and
contribute to innovative projects</p>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-2/3 gap-7 my-4'>
            
              <a href={resume} download className='flex md:w-1/3 lg:w-2/3 justify-center items-center gap-2 border-2 p-2 text-white border-red-500 rounded-md hover:border-warning duration-300'>My CV <HiArrowDown></HiArrowDown></a>
            <button className='flex md:w-1/3 lg:w-2/3  justify-center items-center gap-2 border-2 p-2 text-white border-red-500 rounded-md hover:border-warning duration-300  ' >
            <Link  to="projects"  smooth={true}  duration={500} >
        View  Projects
        </Link>
               <HiArrowRight></HiArrowRight></button>
          </div>
      </div>
    </div>
  );
};

export default Home;