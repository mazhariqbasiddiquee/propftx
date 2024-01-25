const express=require("express")
const watchlistRouter=express.Router()
const watchlist=require("../module/module.watchlist")


watchlistRouter.get("/",async(req,res)=>{
    try{
        let data=await watchlist.find()
        res.status(200).json(data)

    }
    catch(err){
        console.log(err)
        res.json(err)
    }
})


watchlistRouter.post("/add",async(req,res)=>{
    const {name,email,img,rating}=req.body
    console.log(name,email,img,rating)
    try{
   
        let data=new watchlist({name,email,img,rating})
        await data.save()
        res.status(201).json({message:"Added successfully"})
    }
    catch(err){
        res.json({err})
    }
})


watchlistRouter.patch("/update/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await watchlist.findByIdAndUpdate({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.json({err})
    }
})

watchlistRouter.delete("/delete/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await watchlist.findByIdAndDelete({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.json({err})
    
    }
})

module.exports=watchlistRouter