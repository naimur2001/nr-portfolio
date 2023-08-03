import React, { useCallback, useState } from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Skills from '../Components/Skills';

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Projects from '../Components/Projects';
import Contact from '../folder/Contact';
const Main = () => {
  
  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })

  return (
    <div className='bg-slate-900'>
     <Particles className='' options={{
        particles: {
          color: {
            value: "#FF0000"
          },
          collisions: {
            enable: true,
        },
          number: {
            value: 30,
            density: {
              enable: true,
              area: 800,
          },
          },
          opacity: {
            value: {min: 0.3, max: 1}
          },
          shape: {
            type: "circle"
          },
          size: {
            value: {min:3, max:6}
          },
          move: {
            direction: "bottom-right",
            enable: true,
            speed: {min: 3, max: 5},
            straight: false,
            
          }
        }
      }} init={init}/>
   <Navbar></Navbar>
   <Home></Home>
   <About></About>
   <Skills></Skills>
   <Projects></Projects>
   {/* <Contact></Contact> */}
<Contact></Contact>
    </div>
  );
};

export default Main;