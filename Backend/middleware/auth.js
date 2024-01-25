
var jwt = require('jsonwebtoken');
require('dotenv').config()
const authenticiation=(req,res,next)=>{
    let token=req.headers.authorization
    console.log(token)
    var decoded = jwt.verify(token, process.env.Secret);
    if(decoded){
        console.log(decoded)
        req.body.email=decoded.email
        next()
    }
    else{
        res.send({message:"Errro occur while varifying"})
    }
}

module.exports=authenticiation