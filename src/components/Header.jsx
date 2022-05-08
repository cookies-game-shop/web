import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import BtnCart from "./buttons/BtnCart";
import AuthService from "../service/authService";
import userService from "../service/userService";
import {useNavigate} from "react-router";
import axios from "axios";

export default function Header(props) {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8080/user/get-admin-creds',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => {
            setIsAdmin(response.data);
        }).catch(e => {
            console.log(e);
        })
    },[])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">GAME STORE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>
                                Login
                            </NavLink>
                            <NavLink to="/signup" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>
                                Register
                            </NavLink>
                            {isAdmin ?
                                <NavLink to="/add-game" className="btn btn-outline-dark">
                                    <i className="fa fa-sign-in me-1"></i>
                                    Add Game
                                </NavLink> : null}

                            {/*<BtnCart/>*/}
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );


}

