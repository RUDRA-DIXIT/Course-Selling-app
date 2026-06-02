const express= require("express");
const Router= express.Router;

// instead of upper two lines 
// const {Router} = require("express");

const userRouter= Router();

userRouter.post("/user/signup", function(req,res){
    res.json({
        message:"You have singed up successfully!!"
    })
})

userRouter.post("/user/signin", function(req,res){
    res.json({
        message:"You have singed in successfully!!"
    })
})

userRouter.get("/user/purchases", function(req,res){
    res.json({
        message:"You have singed up successfully!!"
    })
})

module.exports={
    userRouter: userRouter
}