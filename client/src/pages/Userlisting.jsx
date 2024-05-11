import React, { useEffect, useState } from 'react';
import listingService from '../apiservice/ListingService';
import ListingItem from '../components/ListingItem';
import { useAuth } from '../context/userContext';

const Userlisting = () => {
  const authContext = useAuth();
  const { user } = authContext;
  const [listings, setListing] = useState([]);

  const getlistingsbyid = async () => {
    try {
      const res = await listingService.getAllListingById(user.id);
      console.log('Listing Response:', res); // Log the response
      setListing(res.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  useEffect(() => {
    getlistingsbyid();
  }, []);

  console.log('Listing State:', listings); // Log the listing state
if(!listings) return
  return (
    <>
      
        <div className='grid mt-2 lg:grid-cols-4 gap-3 sm:grid-cols-2 md:grid-cols-3'>
          <h1 className='text-3xl text-gray-500'>Your Listings</h1>
          
          {
            listings.map(listing=><ListingItem key={listing._id} listing={listing} ></ListingItem>)
          }
        </div>
      
    </>
  );
};


export default Userlisting;





