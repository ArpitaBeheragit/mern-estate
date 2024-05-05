import User from "../models/user.model.js";
import { errorHandler } from "../utills/error.js";
import bcryptjs from 'bcryptjs'

export const test=(req,res)=>{
    res.json({
        message:"Hello World!"
    })
}

export const updateUser=async(res, req, next)=>{
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You are not authenticated")) 
    try {
       if(req.body.password){
        req.body.password=bcryptjs.hashSync(req.body.password, 10)
       }
    const updateUser=await User.findByIdAndUpdate(req.params.id,{
        $set:{
            username: req.body.username,
            email:req.body.email,
            password:req.body.password
        }
    },{new:true} )
    const {password, ...rest}=updateUser._doc

    res.status(200).json(rest)
    } catch (error) {
        next(error);
    }
}