import React from "react";
import {Route} from "react-router-dom";

const Signup =() =>{
    return(
        <>
            <div className="login-form">
                <form>
                    <h1>Register</h1>
                    <div className="content">
                        <div className="input-field">
                            <input type="name" placeholder="First Name" autoComplete="nope"/>
                        </div>
                        <div className="input-field">
                            <input type="surname" placeholder="Last Name" autoComplete="nope"/>
                        </div>
                        <div className="input-field">
                            <input type="email" placeholder="Email" autoComplete="nope"/>
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Password" autoComplete="new-password"/>
                        </div>
                    </div>
                    <div className="action">
                        <button>Sign up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup