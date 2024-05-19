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
      const res = await listingService.getuserListingById(user.id);
      console.log('Listing Response:', res); // Log the response
      setListing(res);
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
      
        <div>
          <div>
          <h1 className='text-3xl font-semibold text-center mt-7'>Your Listings</h1>
          </div>
          <div className='mt-7 flex flex-wrap gap-4 justify-center'>
          {
            listings.map(listing=><ListingItem key={listing._id} listing={listing} getlistingsbyid={getlistingsbyid}></ListingItem>)
          }
          </div>
        </div>
      
    </>
  );
};


export default Userlisting;





