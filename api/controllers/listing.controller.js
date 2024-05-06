import  mongoose  from 'mongoose'
import  ListingModel from '../models/listing.model.js'

export const getAllListing = async(req, res)=>{
    try {
        const listings = await ListingModel.find()
        res.status(200).json(listings)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const addListing = async (req, res)=>{
    // const data = req.body
    // console.log(data);
    try {
        let listing = await ListingModel.create(req.body)
        
        res.status(201).json(listing)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getListingById = async(req, res)=>{
    // const data = req.params
    try {
        const { id } = req.params
        console.log(id);
        const listing= await ListingModel.find({"_id": id})
        if(listing.length >0){
            res.status(200).json(listing)
        } else {
            res.status(404).json({"message": "Record not found. Check ID and try again."})
        }
    } catch (error) {
        if(error.name === "CastError"){
            res.status(400).json({"message": "Invalid Id"})
        } else {
            res.status(500).json(error)
        }
    }
}

export const updateListing = async(req, res)=>{
    try {
        const { id } = req.params
        const listing = await ListingModel.findOneAndUpdate({"_id": id}, req.body, {new: true})
        if(listing){
            res.status(200).json(listing)
        } else {
            res.status(404).json({"message": "Record not found"})
        }
    } catch (error) {
        if(error.name === "CastError"){
            res.status(400).json({"message": "Invalid Id"})
        } else {
            res.status(500).json(error)
        }
    }
}

export const deleteListing = async(req, res)=>{
    try {
        const { id} = req.params
        const listing = await ListingModel.findOneAndDelete({"_id": id})
        if(listing){
            res.status(200).json(listing)
        } else {
            res.status(404).json({"message": "Record not found"})
        }
    } catch (error) {
        if(error.name === "CastError"){
            res.status(400).json({"message": "Invalid Id"})
        } else {
            res.status(500).json(error)
        }
    }
}


      

