import React, { useRef, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useAuth } from '../context/userContext';
import profileimg from "../assets/profileimg.png";
import userService from '../apiservice/UserService';

export default function Profile() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();
  const usernameRef = useRef();

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const authContext = useAuth();
  const { logout, user } = authContext;
// console.log(user);
  const logoutUser = () => {
    logout();
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value || user.password,
    };

    setLoading(true);
    try {
      // console.log(updatedUser);
      const res = await userService.updateUser(user.id, updatedUser);
      console.log(res.data);
      if (res.status) {
        setMessage("Updated Successfully");
        emailRef.current.value = "";
        usernameRef.current.value = "";
      } 
      else {
        setMessage(res.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      setMessage("Failed to update user");
    }
    setLoading(false);
  }

  return (
    <div className='p-3 mt-10 max-w-lg mx-auto gap-4'>
      <h1 className='text-3xl font-semibold text-center mt-16 my-7'>Profile</h1>
      <form className='flex mt-10 flex-col'>
        <img src={profileimg} alt="profile" className='rounded-full h-28 w-28 object-cover cursor-pointer self-center mt-2' />
        <input ref={usernameRef} type="text" placeholder='username' id='username' className='border mt-8 p-3 rounded-lg' defaultValue={user.name} />
        <input ref={emailRef} type="email" placeholder='email' id='email' className='border mt-2 p-3 rounded-lg' defaultValue={user.email} />
        <input ref={passRef} type="password" placeholder='password' id='password' className='border mt-2 p-3 rounded-lg' />
        <button disabled={loading} className='bg-gray-400 text-white rounded-lg mt-5 p-3 uppercase hover:opacity-95 disabled:opacity-80' onClick={handleSubmit}>{loading ? 'Loading...' : 'Update'}</button>
        <button className='bg-green-800 text-white rounded-lg mt-5 p-3 uppercase hover:opacity-95 disabled:opacity-80'><Link to="/createlisting">Create Listing</Link></button>
      </form>
      {message && <p className='text-red-500 mt-5'>{message}</p>}
      <div className='flex justify-between mt-5'>
        <span className='text-red-800 cursor-pointer'>Delete account</span>
        <span className='text-red-800 cursor-pointer' onClick={logoutUser}>Sign out</span>
      </div>
    </div>
  );
}
