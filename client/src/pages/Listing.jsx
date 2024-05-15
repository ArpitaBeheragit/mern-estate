import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import { FaBed, FaBath, FaParking, FaChair, FaMapMarkerAlt } from 'react-icons/fa';
import sliderimg1 from "../assets/sliderimg1.png";
import sliderimg2 from "../assets/sliderimg2.png";
import sliderimg3 from "../assets/sliderimg3.png";

export default function Listing() {
  const imageUrls = [ sliderimg1, sliderimg2, sliderimg3];
  
  return (
    <div>
      <Swiper navigation>
        {imageUrls.map((url) => (
          <SwiperSlide key={url}>
            <div 
              className='h-[500px]' 
              style={{ background: `url(${url}) center/cover no-repeat`, backgroundSize: 'cover' }}>    
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
      <p className='text-2xl font-semibold'> name - ₹price </p>
      <p className='flex items-center mt-6 gap-2 text-slate-600  text-sm'>
        <FaMapMarkerAlt className='text-green-700' />address</p>
      <div className='flex gap-4'>
        <p className='bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>For Sale</p>
        <p className='bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>For Rent</p>
      </div>
      <p className='text-slate-800'>
        <span className='font-semibold text-black'>Description - </span>"Welcome to our stunning real estate property! Nestled in a vibrant community, our spacious homes boast modern amenities and breathtaking views. Experience unparalleled comfort with luxurious interiors, state-of-the-art facilities, and convenient access to nearby attractions. Whether you're seeking a cozy retreat or an urban oasis, our real estate offers the perfect blend of elegance and convenience for your lifestyle needs."</p>
        <ul className='text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
          <li className='flex items-center gap-1 whitespace-nowrap '>
            <FaBed className='text-lg' /> 1 bed </li>
          <li className='flex items-center gap-1 whitespace-nowrap '>
            <FaBath className='text-lg' />1 bath </li>
          <li className='flex items-center gap-1 whitespace-nowrap '>
            <FaParking className='text-lg' />Parking spot </li>
          <li className='flex items-center gap-1 whitespace-nowrap '>
            <FaChair className='text-lg' />Not furnished </li>
        </ul>
      </div>
    </div>
  );
}


