const express = require("express")
const bcrypt = require("bcrypt")
const {UserModel} = require("../models/user.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userRouter = express.Router()

userRouter.post("/signup",async(req,res)=>{
    const {name,email,pass}=req.body
    try{
        bcrypt.hash(pass, Number(process.env.SALT_ROUNDS), async(err, hash)=> {
            if(err){
                res.json({err})
            }else{
                const matchingUser = await UserModel.findOne({email})
                if(!matchingUser){
                    const newUser = await new UserModel({name, email, pass:hash})
                await newUser.save()
                res.json({msg:"signup sucessfull"})
                }
                else{
                    res.json({msg : "User exist"})
                }
            }
        });
    }catch(error){
        res.json(error.message)
    }
})

userRouter.post("/login", async(req,res)=>{
    const{email,pass}=req.body
    try{
        const matchingUser = await UserModel.findOne({email})
        if(matchingUser){
            const ispasswordMatch = await bcrypt.compare(pass,matchingUser.pass)
            if(ispasswordMatch){
                const token = jwt.sign({userId:matchingUser._id, user:matchingUser.name},process.env.SECRET_KEY)
                res.json({msg: "login success", token})
            }else{
                res.json({msg:"wrong password"})
            }
        }else{
            res.json({msg: "user is not found"})
        }
    }catch(error){
        res.json({error})
    }
})





module.exports = {userRouter}