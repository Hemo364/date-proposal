import React from 'react';
import { useNavigate, useParams } from 'react-router';

const UserDetail = ({Userha}) => {
    const navigate = useNavigate();
    const handleSomething = () =>
        navigate(-1);
    const { Id } = useParams();
    const user =Userha.find((u)=>u.id.toString()===Id);
    if(!user)
        return(<div>user not found!</div>)
    return (
        <div className='fixed flex inset-0 z-50 items-center justify-center bg-black/10 backdrop-blur-sm'>
            <div className='flex flex-col p-10 rounded-lg items-center justify-center bg-blue-500/50 w-[50%]'>

            <h1>hello from user details</h1>
            <h2>{user.id}</h2>
            <h2>{user.Name}</h2>
            <h2>{user.Email}</h2>
            <button className='ml-auto mr-auto mt-5 bg-green-400 p-2 mr-20 mb-5 rounded-xl cursor-pointer' onClick={handleSomething} >close</button>
            </div>
        </div>
    );
};

export default UserDetail;