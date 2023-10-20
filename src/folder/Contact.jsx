import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full  lg:h-screen   bg-slate-900  font-mono '>
      <div className='flex flex-col justify-center items-center  h-full '>
      <div  className='max-w-[100px] w-full'>
   <div className='sm:text-center pb-8'>
          <p className='text-4xl text-center font-bold inline border-b-2 border-red-500 text-slate-100'>
            Contact
          </p>

        </div>
   </div>
   <div className='max-w-[1000px]   grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-2  lg:px-4 px-1'>
 <div>
    <p className='text-slate-500 text-xl px-0 my-4'>Submit the form below or shoot me an email-{'>'} naimurrahman18thapril@gmail.com
    or WhatsApp me-{'>'} (+880) 01921201138</p>
  </div>
<div className="card flex-shrink w-full max-w-sm  bg-transparent ">
<form method='POST' action='https://getform.io/f/c270765f-7cbe-4079-a9ce-d212a4002726' >
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-300">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-300">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-300">Message</span>
          </label>
          <textarea  type="text" name='message' placeholder="message" className="input input-bordered h-24 " />
        </div>
      
        <div className="form-control mt-6">
          <button className="btn bg-red-500 border-0">Let's Collaborate</button>
        </div>
      </div>
    </form>
</div>
 </div></div> 

    </div>
  );
};

export default Contact;