import React from "react";
import {NavLink} from "react-router-dom";


const Header =() =>{
    return(
       <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container-fluid">
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                           aria-label="Toggle navigation">
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav">
                           <li className="nav-item">
                               <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="#">Cart</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/about">About us</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/login">Login</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink className="nav-link" to="/signup">Register</NavLink>
                           </li>
                       </ul>

                   </div>
                   <NavLink className="navbar-brand mx-auto fw-bold" to="/">Game Store</NavLink>
               </div>
           </nav>
       </>
    )
}

export default Header