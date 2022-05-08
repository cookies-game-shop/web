import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export default function Header(props) {
    const [isAdmin, setIsAdmin] = useState(false);
    const tkn = localStorage.getItem("token");
    console.log(tkn === null);

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
                            {
                                tkn === null ?
                                    <>
                                        <NavLink to="/login" className="btn btn-outline-dark">
                                            <i className="fa fa-sign-in me-1"></i>
                                            Login
                                        </NavLink>
                                    </> :
                                    <button className="btn btn-outline-dark"
                                             onClick={() => localStorage.clear()}>
                                        <i className="fa fa-sign-in me-1"></i>
                                        Sign Out
                                    </button>
                            }
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

