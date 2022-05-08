import React, {Component, useEffect} from "react";
import axios from "axios";
import {useState} from "react";
import AuthService from "../service/authService";
import {useNavigate} from "react-router";

const url = "http://localhost:8080";

export default function Login() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        AuthService.login(username, password);
        navigate("/");
    }
    return (
        <>
            <div className="login-form">
                <form>
                    <h1>Login</h1>
                    <div className="content">
                        <div className="input-field">
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username"
                                   placeholder="Username" autoComplete="nope" id="username"
                            />
                        </div>
                        <div className="input-field">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                                   placeholder="Password" autoComplete="new-password"/>
                        </div>
                    </div>
                    <p className="link">If you do not have an account <a href="/signup">Register</a></p>
                    <div className="action">
                        <button onClick={handleLogin}>Sign in</button>
                    </div>
                    <div id="create-account-wrap">
                    </div>
                </form>
            </div>
        </>
    )
}
