import React from 'react';

const Header = () => {
    return (
        <header className='fixed top-0 flex flex-row items-center justify-between w-full pr-64 text-xl bg-blue-300 h-15 dark:bg-gray-800 dark:text-gray-400'>
            <h2 className='p-2'>امروز 14 اردیبهشت</h2>
            <h2 className='p-2'>مدیر سیستم</h2>
        </header>
    );
};

export default Header;