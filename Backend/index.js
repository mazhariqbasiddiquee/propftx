const express=require("express")
const app=express()
require('dotenv').config()
const MovieRouter=require("./route/route.movie")
const cors=require("cors")
const userRouter=require("./route/route.user")
const { default: mongoose } = require("mongoose")
const authenticiation=require("./middleware/auth")
const watchlistRouter=require("./route/route.watchlist")
app.use(cors())
app.use(express.json())
app.use("/movie",MovieRouter)
app.use("/user",userRouter)
app.use(authenticiation)
app.use("/watch",watchlistRouter)

app.get("/hi",(req,res)=>{
  res.send("hi")
})

app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.URL)
    console.log("data is conntecd")
})





