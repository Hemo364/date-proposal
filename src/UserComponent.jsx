import React, { useEffect, useState } from 'react';
import './UserComponent.css'

const UserComponent = () => {
    const [age,setAge]=useState(20);
    useEffect(()=>{
        console.log("Send a req to the server...")
        return ()=>console.log("hoping to see you again...");
        
    },[])
    useEffect(()=>{
        if(age==30)
            console.log("you are too old for using our website...")
    },[age])
    return (
        <div>
            <ul>
                <li>name : hesam</li>
                <li>age : {age}</li>
                <li>email : mohammadianhesam@yahoo.com</li><br />
                <button onClick={()=>setAge(age+1)}>
                    Change Age
                </button>
            </ul>
        </div>
    );
};

export default UserComponent;