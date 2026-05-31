import React from 'react';
import jsImage from '../assets/image/javascript.png';
import mernImage from '../assets/image/mern.png';
import nodImage from '../assets/image/node-js.jpg';
import reactImage from '../assets/image/react-js.png';

const Courses = () => {
    return (
        <div className='w-full bg-[#252525]'>
            <h1 className='text-yellow-400 text-center font-bold text-3xl pt-[200px] pb-[100px]'>Online Courses</h1>
            <div className='flex justify-center'><table >
                <tr>
                    <td>
                        <div className='flex flex-col m-5 mb-0 '>

                        <img className='rounded-lg w-[400px]  cursor-pointer' src={jsImage} alt="" />
                        <div className='w-[400px] h-[200px]  shadow-2xl shadow-yellow'>
                            <h3 className='text-white text-2xl ml-5 mt-[40px]'>
                                Java Script Course
                            </h3>
                            <h3 className='text-white text-2xl ml-5 mt-[20px]'>
                                🕣17 hours
                            </h3>
                            <div className='flex flex-row'>
                                <h3 className='text-white text-2xl ml-5 mt-[20px]'>Price : 14$ </h3>
                                <button className='bg-yellow-400 ml-auto mr-5 my-2 rounded-lg hover:bg-yellow-500 text-lg px-4 cursor-pointer p-2 '>Add To Cart</button>
                            </div>
                        </div>
                        </div>
                    </td>
                    <td>
                        <div className='flex flex-col m-5 mb-0 '>

                        <img className='rounded-lg w-[400px]  cursor-pointer' src={mernImage} alt="" />
                        <div className='w-[400px] h-[200px]  shadow-2xl shadow-yellow'>
                            <h3 className='text-white text-2xl ml-5 mt-[40px]'>
                                Mern Course
                            </h3>
                            <h3 className='text-white text-2xl ml-5 mt-[20px]'>
                                🕣13 hours
                            </h3>
                            <div className='flex flex-row'>
                                <h3 className='text-white text-2xl ml-5 mt-[20px]'>Price : 17$ </h3>
                                <button className='bg-yellow-400 ml-auto mr-5 my-2 rounded-lg hover:bg-yellow-500 text-lg px-4 cursor-pointer p-2 '>Add To Cart</button>
                            </div>
                        </div>
                        </div>
                    </td>
                    <td>
                        <div className='flex flex-col m-5 mb-0 '>

                        <img className='rounded-lg w-[400px]  cursor-pointer' src={nodImage} alt="" />
                        <div className='w-[400px] h-[200px]  shadow-2xl shadow-yellow'>
                            <h3 className='text-white text-2xl ml-5 mt-[40px]'>
                                Node Js Course
                            </h3>
                            <h3 className='text-white text-2xl ml-5 mt-[20px]'>
                                🕣23 hours
                            </h3>
                            <div className='flex flex-row'>
                                <h3 className='text-white text-2xl ml-5 mt-[20px]'>Price : 19$ </h3>
                                <button className='bg-yellow-400 ml-auto mr-5 my-2 rounded-lg hover:bg-yellow-500 text-lg px-4 cursor-pointer p-2 '>Add To Cart</button>
                            </div>
                        </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='flex flex-col m-5 mb-0 '>

                        <img className='rounded-lg w-[400px]  cursor-pointer' src={reactImage} alt="" />
                        <div className='w-[400px] h-[200px]  shadow-2xl shadow-yellow'>
                            <h3 className='text-white text-2xl ml-5 mt-[40px]'>
                                React Js Course
                            </h3>
                            <h3 className='text-white text-2xl ml-5 mt-[20px]'>
                                🕣26 hours
                            </h3>
                            <div className='flex flex-row'>
                                <h3 className='text-white text-2xl ml-5 mt-[20px]'>Price : 32$ </h3>
                                <button className='bg-yellow-400 ml-auto mr-5 my-2 rounded-lg hover:bg-yellow-500 text-lg px-4 cursor-pointer p-2 '>Add To Cart</button>
                            </div>
                        </div>
                        </div>
                    </td>
                </tr>
            </table></div>

        </div>
    );
};

export default Courses;