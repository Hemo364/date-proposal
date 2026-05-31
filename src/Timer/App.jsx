import React, { useState } from 'react';

const App = () => {
    const [Timer,setTimer]=useState([0,0,0]);
    const runTimer=()=>{
        setTimer();
    }
    const handleStart=()=>{

    }
    const handleStop=()=>{

    }
    const handleReset=()=>{
        setTimer([0,0,0])
    }
    return (
        <div>
            <h1>{Timer[0]}:{Timer[1]}:{Timer[2]}</h1>
            <button onClick={runTimer}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default App;