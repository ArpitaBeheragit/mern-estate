import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
    const[hamburger,setHamburger]=useState(false);
    if(hamburger){
        return(
            <div className='fixed flex flex-col top-0 left-0 bg-gray-300 rounded-xl p-3 mx-auto shadow-md z-20 w-full items-center'>
                 <RxCross2 className='custom-icon cursor-pointer' onClick={()=>setHamburger(false)}/>
                 <div className='flex flex-col text-center font-bold cursor-pointer'>
                 <div className='hover:underline cursor-pointer'>Home</div>
                    <div className='hover:underline cursor-pointer'>About</div>
                    <div className='hover:underline cursor-pointer'>Listing</div>
                    <div className='hover:underline cursor-pointer'>Sign in</div>
                </div>
            </div>
        )
    }
    return (
        <div className='fixed top-0 left-0 right-0 bg-gray-300 rounded-xl p-3 mx-auto shadow-md items-center z-20'>
            <div className='flex justify-between max-w-7xl mx-auto items-center'>
                <div className='flex flex-wrap cursor-pointer'>
                    <div className='font-bold text-sm sm:text-xl text-gray-500'>Find</div>
                    <div className='font-bold text-sm sm:text-xl'>YourEstate</div>
                </div>
                <div className='sm:hidden md:flex'>
                    <form action='' className='bg-slate-100 p-3 rounded-lg flex items-center'>
                        <input
                            type='text'
                            placeholder='Search...'
                            className='bg-transparent focus:outline-none w-24 sm:w-64'
                        />
                        <button>
                            <FaSearch className='text-slate-600' />
                        </button>
                    </form>
                </div>
                <div className='flex justify-between gap-5 sm:hidden md:flex'>
                    <div className='hover:underline cursor-pointer'>Home</div>
                    <div className='hover:underline cursor-pointer'>About</div>
                    <div className='hover:underline cursor-pointer'>Listing</div>
                    <div className='hover:underline cursor-pointer'>Sign in</div>
                </div>
                <div className='md:hidden sm:flex'>
                    <RxHamburgerMenu className='custom-icon' onClick={()=>setHamburger(true)}/>
                </div>
            </div>
        </div>
    );
};

export default Header;
