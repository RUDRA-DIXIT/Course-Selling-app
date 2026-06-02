const{ Router }= require("express");
const { userRouter } = require("./user");
const adminRouter= Router();

const {adminModel}= require("../db");

adminRouter.post("/signup", function(req,res){
    res.json({
        message:"You have singed up successfully!!"
    })
})

adminRouter.post("/signin", function(req,res){
    res.json({
        message:"You have singed in successfully!!"
    })
})

userRouter.post("/course", function(req,res){
    res.json({
        message:"You have singed up successfully!!"
    })
})

userRouter.put("/course", function(req,res){
    res.json({
        message:"You have singed in successfully!!"
    })
})

userRouter.get("/course/bulk", function(req,res){
    res.json({
        message:"You have singed in successfully!!"
    })
})

module.exports={
    adminRouter: adminRouter
}