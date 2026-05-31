import React from 'react';
import {useEffect,useState} from 'react';
const Posts = () => {
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const[data,setData]=useState(null);
    useEffect(()=>{
        setLoading(true)
        fetch("https://jsonplaceholder.typvicode.com/users").then((res)=>res.json()).then((res)=>{
            setData(res);
            setLoading(false);
        })
        .catch(()=>{
            console.log("error was happend");
            setLoading(false);
            setError("error is happening");
        })
    },[])
    if(loading){
        return(
            <div>
                loading for finding users
                
            </div>
        )
    }
    if(error){
        return(
            <div>
                {error}
                
            </div>
        )
    }
    return (
        <div>
            {data.map((users)=>{
                users.name;
                users.age;
                users.email;
                users.rel;
            })}
            
        </div>
    );
};

export default Posts;