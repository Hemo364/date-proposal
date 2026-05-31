import React, { useState } from 'react';
import LoginModal from './LoginModal';
const Base = () => {
    const [click,setClick] =useState(false);
    const handleclick=()=>{
        
        setClick(!click);

        
    }
    return (
        
        <div className='relative bg-gray-200 min-h-screen'>
        <div className='sm:w-full sm:h-[70px]  bg-indigo-500 mt-0 flex items-center '>
            <h1 className='text-3xl font-bold text-white flex p-6'>Hesam's Site</h1>
            <div className='flex items-center gap-6 mr-5 ml-auto'>
                <button className='bg-transparent text-white cursor-pointer hover:text-black transition-all'>Home</button>
                <button className='bg-transparent text-white cursor-pointer hover:text-black transition-all'>About</button>
                <button className='bg-transparent text-white cursor-pointer hover:text-black transition-all'>Contact</button>
                <button onClick={handleclick} className='bg-green-400  rounded-lg px-8 py-2 text-white cursor-pointer hover:bg-green-500 transition-all hover:m-5 active:bg-green-600'>Login</button>
            </div>
        </div>
        <LoginModal click={click} setClick={setClick}/>
        <footer className='fixed bottom-0 left-0 bg-indigo-500 w-full h-[50px] text-xl'>
            <div className='text-white pt-3 text-center'>this is a footer for this site </div>
        </footer>
        </div>
    );
};

export default Base;