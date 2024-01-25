
import "./Signup.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup(){

    const [userdata,change_data]=useState({
        email:"",
        password:"",
        FirstName:""
    })
    const Navigate=useNavigate()

   const Submithandler=()=>{
      fetch("https://propftx-tykn.onrender.com/user/Signup",{
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
        if(data){
            alert(data.message)
            localStorage.setItem("token",JSON.stringify(data))
            Navigate("/Login")
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
           

      
            <input type="text" placeholder="Enter your name" required  onChange={(e)=>{
                let value=e.target.value
                change_data({...userdata,FirstName:value})

            }}/>
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