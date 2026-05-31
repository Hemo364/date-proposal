import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className=' h-screen bg-indigo-300'>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='text-xl font-bold text-white'>Error 404</h1>
            <h2 className='text-xl font-bold text-white'>oops the page is not found</h2>
            <button className='bg-green-400 p-2 mt-2 mb-5 rounded-xl cursor-pointer' onClick={()=>navigate("/users")}>back to users</button>
            <button className='bg-green-400 p-2 mb-5 rounded-xl cursor-pointer' onClick={()=>navigate("/posts")}>back to Posts</button>
            </div>
        </div>
    );
};

export default NotFound;