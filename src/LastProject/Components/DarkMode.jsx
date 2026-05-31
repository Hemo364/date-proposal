import React from 'react';
import {useDarkMode} from "../Hooks/useDarkMode";
import {FiSun,FiMoon} from "react-icons/fi";
const DarkMode = () => {
    const {setDark,setLight}=useDarkMode();
    return (
        <span className='cursor-pointer transform dark:rotate-90 transition-all'>
            <FiMoon className='dark:hidden size-app_24' onClick={setDark}/>
            <FiSun className='hidden dark:inline size-app_24' onClick={setLight} />
        </span>
    );
};

export default DarkMode;