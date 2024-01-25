const express=require("express")
const userRouter=express.Router()
const user=require("../module/module.user")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()


userRouter.get("/",async(req,res)=>{
    try{
        let data=await user.find()
        res.status(200).json(data)

    }
    catch(err){
        console.log(err)
        res.json(err)
    }
})


userRouter.post("/signup",async(req,res)=>{

    let {FirstName,email,password}=req.body
    let data=await user.findOne({email})
    if(!data){

    
    try{
    
        bcrypt.hash(password, 10, function(err, hash) {
            if(hash){
                let data=new user({FirstName,email,password:hash})
                data.save()
                res.status(201).json({message:"Signup successfull"})

            }
            else{
             console.log(err)
             res.json({message:err})
            }
          
        });
      
    }
    catch(err){
        console.log(err)
        res.json(err)
    }
}
else{
    res.json({message:"Already registered"})
}
})


userRouter.post("/login",async(req,res)=>{
    let {email,password}=req.body
    try{
        let data=await user.findOne({email})
        console.log(data)
        if(data){
            bcrypt.compare(password, data.password, function(err, result) {
                if(result){
                    var token = jwt.sign({ email }, process.env.Secret);
                    res.json({token:token,name:data.FirstName})
                }
                else{
                    res.json({message:"Wrong password"})
                }
            });
          
         
        }
        else{
            res.json({message:"user Not found"})
        }
    }
    catch(err){
        res.json({message:err})
    }
})


userRouter.patch("/update/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await user.findByIdAndUpdate({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.json({message:err})
    }
})

userRouter.delete("/delete/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await user.findByIdAndDelete({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.json({message:err})
    
    }
})

module.exports=userRouter