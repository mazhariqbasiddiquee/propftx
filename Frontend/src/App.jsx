

import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Main from "./home"
import Navbar from "./Navbar"
import Signup from "./Signup"
import Login from "./Login"
import Watchlist from "./Watchlist"
import Addmovies from "./Addmovies"


export default function Home() {
  return(
    <>
     <BrowserRouter>
     <Navbar/>
        <Routes>
            <Route  path="/" element={<Main/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Login"  element={<Login/>} />
            <Route path="/watchlist"  element={<Watchlist/>} />
            <Route path="/Addmovies"  element={<Addmovies/>} />
           
        </Routes>
     </BrowserRouter>
    </>
  )
  
}