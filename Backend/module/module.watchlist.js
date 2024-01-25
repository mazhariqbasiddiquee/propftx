const mongoose=require("mongoose")
const schema=mongoose.Schema({
    name:{type:String},
    img:{type:String},
    rating:{type:String},
    email:{type:String}

})

const watchlist=mongoose.model("watchlist",schema)

module.exports=watchlist

