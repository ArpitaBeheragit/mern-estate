import express from 'express'

import { 
    getAllListing,
    addListing,
    getListingById,
    updateListing,
    deleteListing,
    
    
 } from "../controllers/listing.controller.js"

 const listingRouter = express.Router();

listingRouter.get("/", getAllListing)
listingRouter.post("/", addListing)
listingRouter.get("/:id", getListingById)
listingRouter.put("/:id", updateListing)
listingRouter.delete("/:id", deleteListing)

export default listingRouter
