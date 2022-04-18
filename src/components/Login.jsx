import React from "react";
import {Route} from "react-router-dom";

const Login =() =>{
    return(
        <>
            <div className="login-form">
                <form>
                    <h1>Login</h1>
                    <div className="content">
                        <div className="input-field">
                            <input type="email" placeholder="Email" autoComplete="nope"/>
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Password" autoComplete="new-password"/>
                        </div>
                    </div>
                    <p className="link">If you do not have an account <a href="/signup">Register</a></p>
                    <div className="action">
                        <button>Sign in</button>
                    </div>
                    <div id="create-account-wrap">
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login