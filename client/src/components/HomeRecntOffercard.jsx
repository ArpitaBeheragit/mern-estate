import React from 'react'
import cardimage from "../assets/cardimage.png"
const HomeRecntOffercard = ({offername,offers}) => {
  return (
    <div className='flex flex-col gap-2 mt-20 mx-5 '>
      <h1 className='text-3xl text-gray-500'>{offername}</h1>
      <h1>{offers}</h1>
      <div className='grid mt-2 lg:grid-cols-4 gap-3 sm:grid-cols-2 md:grid-cols-3'>
        <div className="max-w-xs  overflow-hidden shadow-lg pb-5 rounded-lg transition-transform duration-300 transform hover:scale-105">
          <img className="w-full transition-transform duration-300 transform hover:scale-105" src={cardimage} alt="not fit" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">title</div>
            <p className="text-gray-700 text-base">description</p>
            <p className="text-gray-900 font-semibold text-lg mt-2">₹price</p>
          </div>
          <div className='flex gap-5 mx-5 '>
            <p >beds</p>
            <p >baths</p>
          </div>
        </div>
        <div className="max-w-xs  overflow-hidden shadow-lg pb-5 rounded-lg transition-transform duration-300 transform hover:scale-105">
          <img className="w-full transition-transform duration-300 transform hover:scale-105" src={cardimage} alt="not fit" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">title</div>
            <p className="text-gray-700 text-base">description</p>
            <p className="text-gray-900 font-semibold text-lg mt-2">₹price</p>
          </div>
          <div className='flex gap-5 mx-5'>
            <p>beds</p>
            <p>baths</p>
          </div>
        </div>
        <div className="max-w-xs  overflow-hidden shadow-lg pb-5 rounded-lg transition-transform duration-300 transform hover:scale-105">
          <img className="w-full transition-transform duration-300 transform hover:scale-105" src={cardimage} alt="not fit" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">title</div>
            <p className="text-gray-700 text-base">description</p>
            <p className="text-gray-900 font-semibold text-lg mt-2">₹price</p>
          </div>
          <div className='flex gap-5  mx-5'>
            <p>beds</p>
            <p>baths</p>
          </div>
        </div>
        <div className="max-w-xs  overflow-hidden shadow-lg pb-5 rounded-lg transition-transform duration-300 transform hover:scale-105">
          <img className="w-full transition-transform duration-300 transform hover:scale-105" src={cardimage} alt="not fit" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">title</div>
            <p className="text-gray-700 text-base">description</p>
            <p className="text-gray-900 font-semibold text-lg mt-2">₹price</p>
          </div>
          <div className='flex gap-5 mx-5'>
            <p>beds</p>
            <p>baths</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRecntOffercard
