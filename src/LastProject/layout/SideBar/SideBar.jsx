import React from 'react';
import { Link, NavLink } from 'react-router';
import DarkMode from '../../Components/DarkMode';

const SideBar = () => {
    return (
        <div className='fixed flex shadow-2xl flex-col items-center top-0 right-0 w-64 h-screen  bg-blue-300 dark:bg-gray-700 dark:text-gray-400'>
            <div className='flex justify-around w-full items-center h-16 bg-blue-400 dark:bg-gray-800 dark:text-gray-400'>
                <h1 className=''>پنل مدیریت</h1>
                <DarkMode/>
            </div>
            <div className='flex flex-col p-2 bg-blue-300 h-screen w-[85%] dark:bg-gray-700 dark:text-gray-400'>
                <NavLink to="/users" className={({ isActive })=>`sideBarItems ${isActive ? "bg-blue-400 m-2 dark:bg-gray-800 dark:text-gray-400" : ""}`}>کاربران</NavLink>
                <NavLink to="/posts" className={({isActive})=>`sideBarItems ${isActive ? "bg-blue-400 m-2 dark:bg-gray-800 dark:text-gray-400" : ""}`}>پست ها</NavLink>
                <NavLink to="/comments" className={({isActive})=>`sideBarItems ${isActive ? "bg-blue-400 m-2 dark:bg-gray-800 dark:text-gray-400" : ""}`}>کامنت ها</NavLink>
                <NavLink to="/tasks" className={({isActive})=>`sideBarItems ${isActive ? "bg-blue-400 m-2 dark:bg-gray-800 dark:text-gray-400" : ""}`}>تسک ها</NavLink>
                <NavLink to="/gallery" className={({isActive})=>`sideBarItems ${isActive ? "bg-blue-400 m-2 dark:bg-gray-800 dark:text-gray-400" : ""}`}>گالری</NavLink>
            </div>
        </div>
    );
};

export default SideBar;