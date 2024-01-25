const mongoose=require("mongoose")
const schema=mongoose.Schema({
   
    email:{type:String},
    password:{type:String},
    FirstName:{type:String}

})

const user=mongoose.model("user",schema)

module.exports=user

