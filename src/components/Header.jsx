import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import BtnCart from "./buttons/BtnCart";

export default function Header() {
  const { token, setToken, isAdmin, setIsAdmin } = useUserContext();

  function logout() {
    localStorage.clear();
    setToken(false);
    setIsAdmin(false);
  }
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setToken(true);
    }
    if (localStorage.getItem("admin") !== null) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            GAME STORE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {token === false ? (
                <>
                  <NavLink to="/login" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1"></i>
                    Login
                  </NavLink>
                  <NavLink to="/signup" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-sign-in me-1"></i>
                    Register
                  </NavLink>
                </>
              ) : (
                  <>
                  <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i>
                    Cart
                  </NavLink>
                <button className="btn btn-outline-dark ms-2" onClick={logout}>
                  <i className="fa fa-sign-in me-1"></i>
                  Sign Out
                </button>
                  </>

              )}
              {isAdmin ? (
                <NavLink to="/add-game" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-sign-in me-1"></i>
                  Add Game
                </NavLink>
              ) : null}

              {/*<BtnCart/>*/}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
