
import "./Signup.css"
import { useState } from "react"


export default function Addmovies(){
    let token=JSON.parse(localStorage.getItem("token"))
    const [moviedata,change_data]=useState({
        email:"",
        password:"",
        FirstName:""
    })
    

   const Submithandler=()=>{

     if(token!=null)
     {

     
      fetch("http://localhost:4500/movie/add",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            
        },
        body:JSON.stringify(moviedata)
      })
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
       alert("succesfully added")
      })
      .catch((err)=>{
        console.log(err)
        alert(err)
      })
    }
    else{
        alert("login to add movies")
    }
   }
    return(
        <div className="Signup">
           

      
            <input type="text" placeholder="Enter movie name" required  onChange={(e)=>{
                let value=e.target.value
                change_data({...moviedata,name:value})

            }}/>
            <input type="Number" placeholder="Enter rating" required   onChange={(e)=>{
                let value=e.target.value
                change_data({...moviedata,rating:value})

            }}/>
            <input type="text" placeholder="image link" required  onChange={(e)=>{
                  let value=e.target.value
                  change_data({...moviedata,img:value})

            }}/>
            <button onClick={Submithandler}>Submit</button>
           
        </div>
    )
}