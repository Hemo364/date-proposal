import Users from './Users.jsx';
import Posts from './Posts.jsx';
import { Route, Routes, Link, NavLink } from "react-router";
import UserDetail from './UserDetail.jsx';
import NotFound from './NotFound.jsx';
import { useState } from 'react';
const Userha =[
    {id:1,Name:"hesam mohammadian",Email:"hesam@uahoo.com"},
    {id:2,Name:"hasan mohammadian",Email:"hasan@uahoo.com"},
    {id:3,Name:"amin maryami",Email:"maryami@uahoo.com"},
    {id:4,Name:"neda hatami",Email:"nedaKhanoom@uahoo.com"},
    {id:5,Name:"nadia hatami",Email:"nadiaKhanoom@uahoo.com"}
]
const App = () => {
    const [users,setUsers]=useState(Userha);
    const addUserFunc=(user)=>{
        setUsers([...users,user]);
    }
    return (
        <div className='bg-blue-300 w-full min-h-screen'>
            <nav className='relative flex items-center p-2 bg-blue-400 w-full h-[60px] shadow-sm shadow-blue-500/50'>
                <div className='flex gap-2 z-10'>
                    <NavLink to='/users'  className={({ isActive }) => `p-2 rounded-sm h-[40px] text-white cursor-pointer hover:bg-indigo-900 transition-all duration-200 active:bg-indigo-800 ${isActive ? 'bg-indigo-600' : 'bg-blue-300'}`}>کاربران</NavLink>
                    <NavLink to='/posts' className={({ isActive }) => `p-2 rounded-sm h-[40px] text-white cursor-pointer hover:bg-indigo-900 transition-all duration-200 active:bg-indigo-800 ${isActive ? 'bg-indigo-600' : 'bg-blue-300'}`}>پست ها</NavLink>
                </div>
                <h3 className='absolute left-1/2 -translate-x-1/2 text-white text-xl m-0'>
                    React App
                </h3>
            </nav>

            <div className='w-full h-full bg-blue-300'>
                <Routes>
                    <Route path='/' element={null}/>
                    <Route path="/users" element={<Users addUserFunc={addUserFunc} Userha={users}/>}></Route>
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/user-details/:Id" element={<UserDetail Userha={users} />} />
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;