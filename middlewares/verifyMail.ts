import { NextFunction, Request, Response } from "express";
import { userModel } from "../models/user";


export const checkMail=async(req:Request,res:Response,next:NextFunction)=>{

    const user=await userModel.findOne({email:req.body.email})
    if(!user){
        next()
    }else{
        res.status(404).json("Email is all ready exist")
    }

}