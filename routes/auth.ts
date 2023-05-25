import express from "express"
import { deleteUser, login, registerUser, updateUser } from "../controllers/user"
import { checkMail } from "../middlewares/verifyMail"


const route=express.Router()

//Register the user
route.post('/register',checkMail,registerUser)

//Login Usr
route.post("/login",login)

//Delete user
route.delete('/delete/:id',deleteUser)

//Updated User
route.put('/edit/:id',updateUser)

export const userRoute=route