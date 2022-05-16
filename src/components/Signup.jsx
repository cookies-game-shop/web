import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
import AuthService from "../service/authService";


axios.defaults.withCredentials=true


export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        AuthService.register(username, password);
        navigate("/login");
    };
        return (
            <>
                <div className="login-form">
                    <form>
                        <h1>Register</h1>
                        <div className="content">
                            <div className="input-field">
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="username" placeholder="Username" autoComplete="nope" id="username"
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password" placeholder="Password" autoComplete="new-password" id="password"
                                />
                            </div>
                        </div>
                        <div className="action">
                            <button onClick={handleSignup} >Sign up</button>
                        </div>
                    </form>
                </div>
            </>

        )
}

