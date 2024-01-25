
import "./Signup.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){

    const [userdata,change_data]=useState({
        email:"",
        password:""
    })
    const Navigate=useNavigate()

   const Submithandler=()=>{
      fetch("http://localhost:4500/user/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(userdata)
      })
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        if(data.token){
            alert("login successfull")
            localStorage.setItem("token",JSON.stringify(data))
            Navigate("/")
        }
        else{
            alert(data.message)
        }
      })
      .catch((err)=>{
        console.log(err)
        alert(err)
      })
   }

    return(
        <div className="Signup">
           
            <input type="text" placeholder="Enter your email" required   onChange={(e)=>{
                let value=e.target.value
                change_data({...userdata,email:value})

            }}/>
            <input type="text" placeholder="Enter your password" required  onChange={(e)=>{
                  let value=e.target.value
                  change_data({...userdata,password:value})

            }}/>
            <button onClick={Submithandler}>Submit</button>
           
        </div>
    )
}