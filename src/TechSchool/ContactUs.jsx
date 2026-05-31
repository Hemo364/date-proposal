import React from 'react';

const ContactUs = () => {
    return (
        <div className=' relative w-full bg-[#252525] h-[800px] '>
            <h1 className='text-center text-4xl pt-[100px] text-yellow-400 font-bold'>Contact Us</h1>
            <div className='absolute left-[250px] top-[250px]'>
                <h1 className='text-center text-4xl  text-yellow-400'>NewsLetter</h1>
                <p className='text-center text-xl text-white pt-8'>Please Enter Email For Subscribe New Courses</p>
                <div className='bg-gray-400 p-2 mt-2 rounded-lg'>
                    <input
                        className="outline-0 w-[300px] transition-colors duration-[800ms] placeholder:text-transparent focus:placeholder:text-gray-500"
                        placeholder="example@gmail.com"
                        type="text"
                    />

                    <button className='cursor-pointer bg-[#252525] p-1 px-7 text-yellow-400 rounded-sm ml-5'>
                        Go
                    </button>
                </div>
            </div>
            <div>
                <form className='flex flex-col items-center ml-auto bg-yellow-400 w-[30%] m-2 rounded-lg mr-6 h-[450px]' action="">
                    <label className='pt-4 text-3xl text-[#252525]' htmlFor="">Contact Form</label>
                    <label className='mr-[200px] mt-4 text-xl p-2' htmlFor="">Email:</label>
                    <input className='bg-yellow-200 rounded-lg px-8 p-2 outline-0 focus:placeholder-transparent' placeholder='example@email.com' type="text" />
                    <label className='mr-[200px] text-xl p-2' htmlFor="">Title:</label>
                    <input className='bg-yellow-200 rounded-lg px-8 p-2 outline-0 focus:placeholder-transparent' placeholder='Title' type="text" />
                    <label className='mr-[160px] text-xl p-2' htmlFor="">Message:</label>
                    <input className='bg-yellow-200 rounded-lg px-8 pb-[70px] p-2 outline-0 focus:placeholder-transparent' placeholder='write your message' type="text" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;