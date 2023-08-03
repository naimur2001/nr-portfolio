import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import express from '../assets/express.png'
import firebase from '../assets/firebase.png'
import mongo from '../assets/mongo.png'
import bootstrap from '../assets/bootstrap.png'
import vercel from '../assets/vercel.png'
const Skills = () => {
  return (
    <div name='skills' className='w-full  lg:h-screen    bg-slate-900  font-mono '>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[100px] w-full'>
        <div className='sm:text-center pb-8 '>
          <p className='text-4xl text-center font-bold inline border-b-2 border-red-500 text-slate-100'>
            Skills
          </p>

        </div>
       
        
        </div>
  <div>
    <p className='text-slate-500 text-xl px-4 my-4'>These are the technologies I've worked with</p>
  </div>
        <div className='max-w-[1000px]  w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center p-8'>
              <div className='shadow-md rounded-2xl  shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto ' src={html} alt="icon" />
                  <p className='my-4 text-slate-100'>HTML</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={css} alt="icon" />
                  <p className='my-4 text-slate-100'>CSS</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tailwind} alt="icon" />
                  <p className='my-4 text-slate-100'>TAILWIND</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={bootstrap} alt="icon" />
                  <p className='my-4 text-slate-100'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={javascript} alt="icon" />
                  <p className='my-4 text-slate-100'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={react} alt="icon" />
                  <p className='my-4 text-slate-100'>REACT</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={github} alt="icon" />
                  <p className='my-4 text-slate-100'>GITHUB</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={node} alt="icon" />
                  <p className='my-4 text-slate-100'>NODE JS</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={express} alt="icon" />
                  <p className='my-4 text-slate-100'>EXPRESS JS</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mongo} alt="icon" />
                  <p className='my-4 text-slate-100'>MONGO DB</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={vercel} alt="icon" />
                  <p className='my-4 text-slate-100'>VERCEL</p>
              </div>
              <div className='shadow-md rounded-2xl shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={firebase} alt="icon" />
                  <p className='my-4 text-slate-100'>FIREBASE</p>
              </div>
          </div>
    </div>
  </div>
  );
};

export default Skills;
