import React, { useState } from 'react';
import GuestComponent from './GuestComponent';
import UserComponent from './UserComponent';
import "./App2.css"
const App2 = () => {
    const [islogined, setLogined] = useState(false);
    const [firstuse, changeUse] = useState(true);
    return (
        <div>
            <div className='buttonDivApp2'>             
            <button className='buttonApp2' onClick={() => {
                setLogined(!islogined)
                changeUse(false)
            }}>
                {islogined ? "log out" : "log in"}
            </button>
            </div>
            <div className='mainDivApp2'>
                {firstuse ?
                    <h1 className='h1App2'>welcome</h1>
                    : !islogined ? <GuestComponent /> : <UserComponent />}

            </div>


        </div>

    );
};

export default App2;