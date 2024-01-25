
import "./App.css"
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Watchlist() {
  const [data,changedata]=useState([])
  let token=JSON.parse(localStorage.getItem("token"))||null
  const Navigate=useNavigate()
 
 
  useEffect(() => {
    console.log("hello");
   
        if(token==null){
            alert("please login first")
            Navigate("/Login")
        }
        else{

        

    fetch("https://propftx-tykn.onrender.com/watch", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "authorization": token.token,
        },
       
      })
   .then((res)=>res.json())
   .then((response)=>{
   changedata(response)
   console.log(data)
  })
   .catch((err)=>{
    console.log(err)
   })
}
  }, [data]);




  return (
    <div>
      
      <div className="Movie-list">
          {data.map(({name,img,rating,_id})=>{

            return(
               <div>
                  <div>
                     <img src={img} alt="error" />
                  </div>
                  <div className="content">
                      <p>{name}</p>
                      <p>{rating}</p>
                       <button style={{border:"none",background:"white"}} onClick={()=>{
                       
                         if(token){
                          if (token) {
                            fetch(`https://propftx-tykn.onrender.com/watch/delete/${_id}`, {
                              method: "DeLETE",
                              headers: {
                                "Content-type": "application/json",
                                "authorization": token.token,
                              },
                            
                            })
                              .then((res) => res.json())
                              .then((data) => {
                                console.log(data);
                                alert("Successfully removed");
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          } else {
                            console.log("Token is not valid");
                          }

                         }

                       }} >Delete</button>
                  </div>
              </div>
            )

          })}
      </div>
    </div>
  );
}