import React, { useState } from 'react';
import { Link } from 'react-router';
import AddUser from './AddUser';
import { permisionHOC } from './permisionHOC';
const Users = ({Userha,addUserFunc}) => {
    const [AddButton,setAddButton]=useState(false);
    return (
    <div className='w-full h-screen flex justify-center'>

        <div className='flex flex-col'>

            <div className='flex flex-row items-start mt-10 gap-10'>

                <button onClick={() => setAddButton(true)} className='font-[Shabnam] bg-blue-400 p-5 rounded-xl cursor-pointer hover:bg-blue-500 transition-all duration-200 active:bg-blue-600'> اضافه کردن کاربر
                </button>

                <ul className='flex flex-col justify-center items-center bg-blue-500 w-75 pt-4 rounded-lg'>
                    {Userha.map((user) => (
                        <li key={user.id} className='p-5 mb-3 rounded bg-blue-400 w-full'>
                            <Link to={`/user-details/${user.id}`} className='flex flex-row cursor-pointer'>
                                <h1 className='ml-2'>{user.id}</h1>
                                <h3>{user.Name}</h3>
                                <h4>{user.Email}</h4>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

        {AddButton && (
            <AddUser addUserFunc={addUserFunc} setAddButton={setAddButton} />
        )}
        
    </div>
);

};
const UsersWithHOC=permisionHOC(Users)
export default UsersWithHOC ;