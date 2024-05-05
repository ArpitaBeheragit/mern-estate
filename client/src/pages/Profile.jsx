import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import profileimg from "../assets/profileimg.png";
import { Link } from 'react-router-dom';
export default function Profile() {
  const {user}=useContext(UserContext);
  console.log(user);

  return (
    <div className='p-3 mt-10 max-w-lg mx-auto gap-4'>
        <h1 className='text-3xl font-semibold text-center mt-16 my-7'>Profile</h1>
        <form className='flex mt-10 flex-col'>
            <img src={profileimg} alt="profile" 
            className='rounded-full h-28 w-28 object-cover cursor-pointer self-center mt-2'/>
            <input type="text" placeholder='username' id='username'
            className='border mt-8 p-3 rounded-lg' defaultValue={user.username}/>
            <input type="email" placeholder='email' id='email'
            className='border mt-2 p-3 rounded-lg' defaultValue={user.email}/>
            <input type="text" placeholder='password' id='password'
            className='border mt-2 p-3 rounded-lg' />
            <button className='bg-gray-400 text-white rounded-lg mt-5 p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
            <button className='bg-green-800 text-white rounded-lg mt-5 p-3 uppercase hover:opacity-95 disabled:opacity-80'><Link to="/createlisting">Create Listing</Link></button>
        </form>
        <div className='flex justify-between mt-5'>
          <span className='text-red-800 cursor-pointer'>Delete account</span>
          <span className='text-red-800 cursor-pointer'>Sign out</span>
        </div>
    </div>
  )
}
