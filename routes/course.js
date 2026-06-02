const {Router} = require("express");

const courseRouter= Router();

courseRouter.post("/purchase", function(req,res){
    res.json({
        message:"You have singed up successfully!!"
    })
})

courseRouter.get("  /preview", function(req,res){
    res.json({
        message:"You have singed up successfully!!"
    })
})

module.exports={
    courseRouter: courseRouter
}