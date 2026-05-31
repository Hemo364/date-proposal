import React, { useState } from 'react';

const AddUser = (props) => {
    const handleClose = () => {
        props.setAddButton(false);
    }
    const [id, setId] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const handleSubmit = (e) => {
        handleClose();
        e.preventDefault();
        const newUser = {
            id: Number(id),
            Name: Name,
            Email: Email
        }
        props.addUserFunc(newUser);
    }



    return (
        <div className='fixed  inset-0 z-50 flex flex-col items-center justify-center bg-black/10  backdrop-blur-sm '>
            <button className='cursor-pointer absolute right-10 top-[32%] left-[40%]' onClick={handleClose}>❌</button>
            <form onSubmit={handleSubmit} className='flex flex-col rounded-sm bg-blue-200 w-[40%] m-20 p-20 h-[40%]' action="">
                <div className='flex flex-row'>
                    <label htmlFor="">آیدی</label>
                    <input onChange={(e) => setId(e.target.value)} className='idInput bg-blue-100 backdrop-blur-sm' type="number" required />
                </div>
                <div className='flex flex-row'>

                    <label htmlFor="">نام و نام خانوادگی</label>
                    <input onChange={(e) => setName(e.target.value)} className='nameInput bg-blue-100 backdrop-blur-sm' type="text" required />
                </div>
                <div className='flex flex-row'>

                    <label htmlFor="">ایمیل</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='emailInput bg-blue-100 backdrop-blur-sm' type="text" required />
                </div>
                <button className='bg-green-500 text-white p-2 mt-5 rounded cursor-pointer hover:bg-green-600 transition-all duration-250 active:bg-green-700' type='submit'>افزودن</button>
            </form>

        </div>
    );
};

export default AddUser;