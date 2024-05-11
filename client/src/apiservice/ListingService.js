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
    

    async updateListing(id, listing){
        try {
            const res = await axios.put(this.api+"listing/"+id, listing)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }

    async deleteListing(id){
        try {
            const res = await axios.delete(this.api+"listing/"+id)
            console.log(res.data);
            return {status: true, data: res.data}
        } catch (error) {
            console.log(error);
            return {status: false, error}
        }
    }
}
const listingService = new ListingService();
export default listingService