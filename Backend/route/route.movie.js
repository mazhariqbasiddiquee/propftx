const express=require("express")
const app=express()
const MovieRouter=express.Router()
const Movie=require("../module/module.movie")


MovieRouter.get("/",async(req,res)=>{
    try{
        let data=await Movie.find()
        res.status(200).json(data)

    }
    catch(err){
        console.log(err)
        res.json(err)
    }
})


MovieRouter.post("/add",async(req,res)=>{
    try{
        console.log(req.body)
        let data=new Movie(req.body)
        await data.save()
        res.status(201).json(data)
    }
    catch(err){
        res.json({err})
    }
})


MovieRouter.patch("/update/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await Movie.findByIdAndUpdate({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.json({err})
    }
})

MovieRouter.delete("/delete/:_id",async(req,res)=>{
    let {_id}=req.params
    try{
        let data=await Movie.findByIdAndDelete({_id},req.body)
        res.status(200).json({data})
    }
    catch(err){
        res.json({err})
    
    }
})

module.exports=MovieRouter