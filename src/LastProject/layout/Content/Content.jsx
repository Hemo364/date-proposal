import React from 'react';
import {Routes, Route } from 'react-router';
import Gallery from '../../Pages/Gallery/Gallery.jsx';
import Users from '../../Pages/Users/Users.jsx';
import Posts from '../../Pages/Posts/Posts.jsx';
import Comments from '../../Pages/Comments/Comments.jsx';
import Tasks from '../../Pages/Tasks/Tasks.jsx';

const Content = () => {
    return (
        <div className='fixed text-black w-full h-screen pr-64 pt-16 bg-blue-50 dark:bg-gray-600 dark:text-gray-400 '>
            <div className='p-4'>
                <Routes>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/posts' element={<Posts/>}/>
                    <Route path='/comments' element={<Comments/>}/>
                    <Route path='/tasks' element={<Tasks/>}/>
                    <Route path='/gallery' element={<Gallery/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Content;