import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

export default function Navbar() {
  const Navigate = useNavigate();
  let token = JSON.parse(localStorage.getItem("token")) || {};
  const [token_value,change]=useState(token)

  useEffect(()=>{

  },[token_value])

  const Handler = (props) => {
    if(token==null){
      alert("please login first")
      Navigate("/Login")
    }
    else{
      Navigate(props);
    }
  
  };

  const Logout = () => {
    console.log("hello");
    localStorage.removeItem("token");
    change("")
  };

  return (
    <div className="top">
      <h1 className="heading">Movie</h1>
      <div className="Nav">
        <p onClick={() => Handler("/")}>Home</p>
        <p onClick={() => Handler("/watchlist")}>Watchlist</p>
        <p onClick={() => Handler("/Addmovies")}>Addmovies</p>
        {token.name ? (
          <>
            <p>{token.name}</p>
            <p onClick={Logout}>Logout</p>
          </>
        ) : (
          <>
            <p onClick={() => Handler("/signup")}>Signup</p>
            <p onClick={() => Handler("/Login")}>Login</p>
          </>
        )}
      </div>
    </div>
  );
}
