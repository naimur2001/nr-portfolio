import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full  lg:h-screen   bg-slate-900  font-mono '>
    <div className='flex flex-col justify-center items-center w-full h-full '>
      <div className='max-w-[100px] w-full'>
        <div className='sm:text-center pb-8'>
          <p className='text-4xl text-center font-bold inline border-b-2 border-red-500 text-slate-100'>
            Contact
          </p>

        </div>
       
        
        </div>
 <div className='max-w-[1000px]  w-full grid sm:grid-cols-1 gap-8 px-4'>
 <div>
    <p className='text-slate-500 text-xl px-4 my-4'>Submit the form below or shoot me an email-{'>'} naimurrahman18thapril@gmail.com
    or WhatsApp me-{'>'} (+880) 01921201138</p>
  </div>
  <form method='POST' action='https://getform.io/f/ba661837-ed73-45b1-9ba0-2b9a85f02a79' className="card flex-shrink-0 w-full max-w-sm  bg-transparent ">
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
 
    </div>
    
  </div>
  );
};

export default Contact;
