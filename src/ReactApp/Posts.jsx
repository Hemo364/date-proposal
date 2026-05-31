import React from 'react';
import { permisionHOC } from './permisionHOC';
const Posts = () => {
    return (
        <div className='w-full h-full'>
            <h1 className='items-center justify-center flex p-3 text-black text-2xl'>پست های اخیر</h1>
            <div className='flex justify-center w-full'>
                <div className='grid grid-cols-2 gap-4 p-3'>
                    <div className="bg-white p-4 w-[320px] h-[250px] border border-indigo-500">Post 1</div>
                    <div className="bg-white p-4 w-[320px] h-[250px] border border-indigo-500">Post 2</div>
                    <div className="bg-white p-4 w-[320px] h-[250px] border border-indigo-500">Post 3</div>
                    <div className="bg-white p-4 w-[320px] h-[250px] border border-indigo-500">Post 4</div>
                    <div className="bg-white p-4 w-[320px] h-[250px] border border-indigo-500">Post 4</div>
                </div>
            </div>


        </div>
    );
};
const PostsWithHOC =permisionHOC(Posts)
export default PostsWithHOC;