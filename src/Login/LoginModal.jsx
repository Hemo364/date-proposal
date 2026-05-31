import React from 'react';

const LoginModal = (props) => {
    const handleclick = (e) => {
        e.preventDefault();
    }
    const handleClose = () => {
        props.setClick(false);
    }

    if (props.click) {
        return (
            <div  className='fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm'>
                <div className='relative bg-blue-400 sm:w-[700px] sm:h-[400px] w-[90%] py-10  rounded-lg  flex flex-col items-center'>
                    <h3 onClick={handleClose} className='absolute right-4 top-4 cursor-pointer h-5 transition-all'>❌</h3>
                    <h1 className='mr-auto ml-auto mt-5 text-white font-bold text-2xl'>LOGIN</h1>

                    <form className='flex flex-col items-center' action="">
                        <label className='text-white text-xl mb-2 mr-auto ' htmlFor="">Email Address</label>
                        <input className='inputs' type="text" placeholder='example@gmail.com' />
                        <label className='text-white text-xl mb-2 mr-auto  ' htmlFor="">Password</label>
                        <input className='inputs' type="text" placeholder='*****' />
                    </form>
                    <div className='flex sm:w-[700px] mt-10'>
                        <button className='bg-green-400 hover:bg-green-500 transition-all active:bg-green-600 text-white h-10 m-5 ml-45 rounded-lg p-2 cursor-pointer'>Login to Website</button>
                        <a onClick={handleclick} className='my-auto mx-auto hover:underline hover:text-gray-500 transition-all' href="">forget the password</a>
                    </div>
                </div>
            </div>


        );
    }


};

export default LoginModal;