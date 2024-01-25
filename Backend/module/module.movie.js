const mongoose=require("mongoose")
const schema=mongoose.Schema({
    name:{type:String},
    img:{type:String},
    rating:{type:String}

})

const Movie=mongoose.model("movies",schema)

module.exports=Movie

