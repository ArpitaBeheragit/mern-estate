import axios from 'axios'
import { getToken } from '../utils/HelperFunction';

class ListingService {
    constructor(){
        this.api = "http://localhost:3000/"
    }

    async allListing(){
        try {
            const res = await axios.get(this.api+"listing")
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }

    async getAllListingById(id){
        try {
            const res = await axios.get(this.api+"listing/"+id)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }

   
    async addListing(listing){
        try {
            const res = await axios.post("http://localhost:3000/listing", listing,{
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            })
            console.log("Response data:", res.data);
            return {status: true, data: res.data}
        } catch (error) { 
            console.log("Error:", error.response.data);
            return {status: false, error: error.response.data}
        } 
    }

    async getuserListingById(userId) {
        try {
            
          const response = await axios.get(`${this.api}listing/user/${userId}`,{
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });
          console.log("called");
          console.log(response);
          return response.data;
        } catch (error) {
          throw new Error('Error fetching listing by ID');
        }
      }
      
        
    async updateListing(formData) {
        try {
            console.log("I am here", formData, getToken())
            const response = await axios.put(`${this.api}listing/${formData._id}`,formData, {
                headers: {
                  'Authorization': `Bearer ${getToken()}`
                }
              });
    
            console.log(response)
            return {data: response.data, status: true};
        } catch (error) {
            throw new Error('Error updating listing');
        }
    }

    async deleteListing(id){
        try {
            const res = await axios.delete(this.api+"listing/"+id,{
                headers: {
                  'Authorization': `Bearer ${getToken()}`
                }
              })
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }
}
const listingService = new ListingService();
export default listingService;
