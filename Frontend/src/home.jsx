
import "./App.css"
import { useEffect,useState } from "react";

export default function Main() {
  const [data,changedata]=useState([])
  let token=JSON.parse(localStorage.getItem("token"))
 
 
  useEffect(() => {
   
   fetch("https://propftx-tykn.onrender.com/movie")
   .then((res)=>res.json())
   .then((response)=>{
   changedata(response)

  })
   .catch((err)=>{
    console.log(err)
   })
  }, [data]);


  const AddtoWatch=()=>{
   

  }

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

                    {/* Name of the movie and working */}
                      <p  onClick={()=>{
                
                        let userInput = prompt("Please enter the value");
                          

                        if(/^[A-Za-z]+$/.test(userInput)){

                        
                        if(token!=null){
                          fetch(`https://propftx-tykn.onrender.com/movie/update/${_id}`, {
                            method: "PATCH",
                            headers: {
                              "Content-type": "application/json",
                              "authorization": token.token,
                            },
                            body:JSON.stringify({
                              name:userInput
                            })
                          
                          })
                            .then((res) => res.json())
                            .then((data) => {
                              console.log(data);
                              alert("Successfully edited");
                            })
                            .catch((err) => {
                              console.log(err);
                            });
  
                         }
                         else{
                          alert("login to edit")
                         }
                        }
                        else{
                          alert("please enter in correct format")
                        }
                      }}>{name}</p>

                    {/* Name end */}



                    {/* Rating of the movie */}
                      <p   onClick={()=>{
                       let userInput = prompt("Please enter the value");
                          userInput=Number(userInput)

                        if(typeof userInput==="number" &&userInput<=5){
                        
                 
                        if(token!=null){
                          fetch(`https://propftx-tykn.onrender.com/movie/update/${_id}`, {
                            method: "PATCH",
                            headers: {
                              "Content-type": "application/json",
                              "authorization": token.token,
                            },
                            body:JSON.stringify({
                              rating:userInput
                            })
                          
                          })
                            .then((res) => res.json())
                            .then((data) => {
                              console.log(data);
                              alert("Successfully edited");
                            })
                            .catch((err) => {
                              console.log(err);
                            });
  
                         }
                         else{
                          alert("login to edit")
                         }
                        }
                        else{
                          alert("please enter valid number")
                        }
                      }}>{rating}</p>

                        {/* Rating of the movie  end */}



                       {/* code for adding movie to watch list */}

                       <button style={{border:"none",background:"white"}}  onClick={()=>{
                        let obj={
                          img,name,rating
                        }
                         if(token){
                          if (token) {
                            fetch("https://propftx-tykn.onrender.com/watch/add", {
                              method: "POST",
                              headers: {
                                "Content-type": "application/json",
                                "authorization": token.token,
                              },
                              body: JSON.stringify(obj),
                            })
                              .then((res) => res.json())
                              .then((data) => {
                                
                                alert(data.message);
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          } else {
                            console.log("Token is not valid");
                          }

                         }

                       }}>Add to Watchlist</button>


                       {/* code for adding movie to watch list  end*/}



                       {/* Code for deleting start */}
                       <button style={{border:"none",background:"white"}}  onClick={()=>{
                       
                       if(token!=null){
                        fetch(`https://propftx-tykn.onrender.com/movie/delete/${_id}`, {
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

                       }
                       else{
                        alert("login to remove")
                       }

                     }}>Delete</button>

                      {/* Code for deleting end */}
                  </div>
              </div>
            )

          })}
      </div>
    </div>
  );
}







