import { Request, Response } from "express";
import { userModel } from "../models/user";
import { userInterface } from "../interfaces/userInterface";
import bcrypt from "bcrypt"

export const registerUser = async(req:Request,res:Response)=>{
     console.log(req.body)
    const{firstName,lastName,middleName,address,countryCode,countryNumber,mobileNumber,email,areaId,imgURL,password}=req.body
    try {
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(password,salt)
        const newUser= new userModel<userInterface>({
            firstName,
            address,
            areaId,
            countryCode,
            countryNumber,
            email,
            imgURL,
            lastName,
            middleName,
            mobileNumber,
            password:hashPassword
        })
    if(!newUser) return res.status(404).json("User is not found")
     await newUser.save()
    res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json("User not authenticate")
    }

}


export const login=async(req:Request,res:Response)=>{
try {
    const user = await userModel.findOne({email:req.body.email})
    if(!user) return res.status(500).json("User is not signup")
    const realPassword= bcrypt.compare(user.password,req.body.password)
    if(!realPassword) return res.status(404).json("password is wrong")
    res.status(200).json(user)
} catch (error) {
    res.status(400).json("please signup")
}
}


export const deleteUser= async (req:Request,res:Response)=>{
    try {
         
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted the user")

    } catch (error) {
        res.status(400).json("User is not deleted")
    }
}

export const updateUser= async (req:Request,res:Response)=>{
    try {
        
        const updateUser=await userModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json("Updated the user")
    } catch (error) {
        
        res.status(404).json("Not updated the user")
    }
}