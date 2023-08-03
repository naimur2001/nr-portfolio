import React from 'react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import  { EffectCoverflow, Pagination } from "swiper";
import "../assets/styles.css";
import { FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook, FaWeibo } from 'react-icons/fa';
import cs1 from '../assets/cs1.png';
import cs2 from '../assets/cs2.png';
import cs3 from '../assets/cs3.png';
import cs4 from '../assets/cs4.png';
import cs5 from '../assets/cs5.png';
import cs6 from '../assets/cs6.png';
import cs7 from '../assets/cs7.png';
import cs8 from '../assets/cs8.png';
import cs9 from '../assets/cs9.png';

import fb1 from '../assets/fb1.png'
import fb2 from '../assets/fb2.png'
import fb3 from '../assets/fb3.png'
import fb4 from '../assets/fb4.png'
import fb5 from '../assets/fb5.png'
import fb6 from '../assets/fb6.png'
import fb7 from '../assets/fb7.png'
import fb8 from '../assets/fb8.png'
import fb9 from '../assets/fb9.png'

import tg1 from '../assets/tg1.png'
import tg2 from '../assets/tg2.png'
import tg3 from '../assets/tg3.png'
import tg4 from '../assets/tg4.png'
import tg5 from '../assets/tg5.png'
import tg6 from '../assets/tg6.png'
import tg7 from '../assets/tg7.png'
import tg8 from '../assets/tg8.png'
import tg9 from '../assets/tg9.png'

const Projects = () => {
  return (
    <div name='projects'  className='w-full    
    lg:h-screen  
    h-[1400px] bg-slate-900  font-mono '>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[100px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-center pb-8 '>
          <p className='text-4xl text-center font-bold inline border-b-2 border-red-500 text-slate-100'>
          Projects
          </p>
        </div>
      
        </div>
        <div className= ' max-w-[1000px]  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-8'>
{/* 1         */}
<div className="card w-80 bg-slate-900 shadow-md rounded-2xl  shadow-[#040c16] hover:scale-110 duration-500 text-gray-300">
  <figure className="px-10 pt-10">
    <img src={cs1} alt="projects" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Champions Sport</h2>
    
    <div className="card-actions">
      <button className="px-10 my-2 py-2 rounded-xl hover:bg-slate-400 shadow-[#040c16] shadow-lg bg-red-500 border-0" onClick={()=>window.my_modal_5.showModal()}   >Click</button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box bg-slate-900 ">
  <Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={"auto"}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination]}
  className="mySwiper"
>
  {/* Slide 1 */}
  <SwiperSlide>
    <img src={cs1} className="h-52" />
  </SwiperSlide>
  {/* Slide 2 */}
  <SwiperSlide>
    <img src={cs2} className="h-52" />
  </SwiperSlide>
  {/* Slide 3 */}
  <SwiperSlide>
    <img src={cs3} className="h-52" />
  </SwiperSlide>
  {/* Slide 1 */}
  <SwiperSlide>
    <img src={cs4} className="h-52" />
  </SwiperSlide>
  {/* Slide 2 */}
  <SwiperSlide>
    <img src={cs5} className="h-52" />
  </SwiperSlide>
  {/* Slide 3 */}
  <SwiperSlide>
    <img src={cs6} className="h-52" />
  </SwiperSlide>
  {/* Slide 1 */}
  <SwiperSlide>
    <img src={cs7} className="h-52" />
  </SwiperSlide>
  {/* Slide 2 */}
  <SwiperSlide>
    <img src={cs8} className="h-52" />
  </SwiperSlide>
  {/* Slide 3 */}
  <SwiperSlide>
    <img src={cs9} className="h-52" />
  </SwiperSlide>
  {/* Add more slides as needed */}
</Swiper>

   <ul className='text-sm text-gray-300 px-3'>
   <li >1.In this website users can find various sport classes.</li>
    <li>2.There is dashboard for admin,user,insctructor to see and maintain their own activity. </li>
    <li>3.There is to option enroll classes and pay the class fees and many more.</li>
   </ul>
    <div className="my-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 lg:ml-8">
      {/* if there is a button in form, it will close the modal */}
      <a href='https://github.com/naimur2001/champions-sport-client' target='_blank' className="flex
      gap-1 items-center text-slate-300 font-bold badge
      bg-red-500 border-0 
      text-xs">FrontEnd <FaGithub></FaGithub> </a>
      <a href='https://github.com/naimur2001/champions-sport-server' target='_blank' className="flex
      gap-1 items-center text-slate-900 font-bold badge ">BackEnd <FaGithub></FaGithub> </a>
      <a href='https://champions-sport-firebase.web.app' target='_blank' className="flex
      gap-1 items-center text-slate-900 font-bold badge badge-success">Live <FaWeibo></FaWeibo></a>
      <button className="flex
      gap-1 items-center text-slate-900 font-bold badge ">Exit</button>
    </div>
  </form>
</dialog>
    </div>
  </div>
</div>
{/* 2 */}
<div className="card w-80  bg-slate-900 shadow-md rounded-2xl  shadow-[#040c16] hover:scale-110 duration-500 text-gray-300">
  <figure className="px-10 pt-10">
    <img src={fb1} alt="projects" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Food Bliss</h2>
    
    <div className="card-actions">
      <button className="px-10 my-2 py-2 rounded-xl hover:bg-slate-400 shadow-[#040c16] shadow-lg bg-red-500 border-0" onClick={()=>window.my_modal_6.showModal()}>Click</button>
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box bg-slate-900">
  <Swiper
   effect={"coverflow"}
   grabCursor={true}
   centeredSlides={true}
   slidesPerView={"auto"}
   coverflowEffect={{
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   }}
   pagination={true}
   modules={[EffectCoverflow, Pagination]}
   className="mySwiper"
      >
        <SwiperSlide>
          <img src={fb1} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb2} className='h-52' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb3} className='h-52'  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb4} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb5} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb6} className='h-52' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb7} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb8} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fb9} className='h-52'/>
        </SwiperSlide>
      </Swiper>
      <ul className='text-sm text-gray-300 px-3'>
   <li >1.In this website users can find various bengali cuisine by their choice.</li>
    <li>2.User can find recipe instruction and implented rating system by this worthy and popular recipe will be visible easily. </li>
    <li>3.There is implented crud opertaion.</li>
   </ul>
    <div className="my-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 lg:ml-8">
      {/* if there is a button in form, it will close the modal */}
      <a href='https://github.com/naimur2001/food-bliss-client' target='_blank' className="lex
      gap-1 items-center text-slate-300 font-bold badge 
      bg-red-500 border-0
      text-xs">FrontEnd <FaGithub></FaGithub> </a>
      <a href='https://github.com/naimur2001/food-bliss-server' target='_blank' className="lex
      gap-1 items-center text-slate-900 font-bold badge 
      text-xs">BackEnd <FaGithub></FaGithub> </a>
      <a href='https://food-on-fire-269f7.web.app' target='_blank' className="lex
      gap-1 items-center text-slate-900 font-bold badge badge-success
      text-xs">Live <FaWeibo></FaWeibo></a>
      <button className="lex
      gap-1 items-center text-slate-900 font-bold badge 
      text-xs">Exit</button>
    </div>
  </form>
</dialog>
    </div>
  </div>
</div>
{/* 3
 */}
<div className="card w-80  bg-slate-900 shadow-md rounded-2xl  shadow-[#040c16] hover:scale-110 duration-500 text-gray-300">
  <figure className="px-10 pt-10">
    <img src={tg1} alt="projects" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Toy Galaxy</h2>
    
    <div className="card-actions">
      <button className="px-10 my-2 py-2 rounded-xl hover:bg-slate-400 shadow-[#040c16] shadow-lg bg-red-500 border-0" onClick={()=>window.my_modal_7.showModal()}>Click</button>
      <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box bg-slate-900">
  <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
      >
        <SwiperSlide>
          <img src={tg1} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tg2} className='h-52' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tg3} className='h-52'  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tg4} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tg5} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tg6} className='h-52' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tg7} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tg8} className='h-52'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tg9} className='h-52'/>
        </SwiperSlide>
      </Swiper>
      <ul className='text-sm text-gray-300 px-3'>
   <li >1.The website has a variety of toy car blocks that users can buy.Easily add, update, and remove toys info by Seller.</li>
    <li>2.View toy details and checkout comfortably.This is a fun and creative way for users to express themselves. </li>
    <li>3.In general navigation for easy browsing.</li>
   </ul>
    <div className="my-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 lg:ml-8">
      {/* if there is a button in form, it will close the modal */}
      <a href='https://github.com/naimur2001/toy-galaxy-client' target='_blank' className="flex
      gap-1 items-center text-slate-300 font-bold badge 
      text-xs bg-red-500 border-0">FrontEnd <FaGithub></FaGithub> </a>
      <a href='https://github.com/naimur2001/toy-galaxy-server' target='_blank' className="flex
      gap-1 items-center text-slate-900 font-bold badge 
      text-xs">BackEnd <FaGithub></FaGithub> </a>
      <a href='https://toy-galaxy-firebase.web.app' target='_blank' className="flex
      gap-1 items-center text-slate-900 font-bold badge badge-success
      text-xs ">Live <FaWeibo></FaWeibo></a>
      <button className="flex
      gap-1 items-center text-slate-900 font-bold badge 
      text-xs">Exit</button>
    </div>
  </form>
</dialog>
    </div>
  </div>
</div>
        </div>
    </div>
  </div>
  );
};

export default Projects;