import mongoose from "mongoose";
import { userInterface } from "../interfaces/userInterface";


const userSchema= new mongoose.Schema<userInterface>({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    
    },
    address:{
        type:String,
    
    },
    areaId:{
        type:Number,
       
    },
    countryCode:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    imgURL:{
        type:String,
       
    },
    countryNumber:{
        type:Number,
       
    },
    mobileNumber:{
        type:Number,
       
    },
    middleName:{
        type:String,
       
    },
    password:{
        type:String,
       
    }

})

export const userModel= mongoose.model("user",userSchema)