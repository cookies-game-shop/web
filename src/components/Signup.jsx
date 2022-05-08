import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
axios.defaults.withCredentials=true


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:""
        };
        this.onChangeUserName=this.onChangeUserName.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChangeUserName(e){
        this.setState({
            username:e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    async onSubmit(e){
       // alert(this.state.username+" "+this.state.password);
        await axios.post("http://localhost:8080/user/register",{
            username:this.state.username,
            password:this.state.password
        })
            .then((res)=>{
                const navigate=useNavigate()
                navigate("/login")
                alert(res.status);
            })
            .catch((err)=>{
                alert(err);
            })
    }

    render() {
        return (
            <>
                <div className="login-form">
                    <form onSubmit={this.onSubmit}>
                        <h1>Register</h1>
                        <div className="content">
                            <div className="input-field">
                                <input value={this.state.username} onChange={this.onChangeUserName} type="username" placeholder="Username" autoComplete="nope" id="username"
                                />
                            </div>
                            <div className="input-field">
                                <input value={this.state.password} onChange={this.onChangePassword} type="password" placeholder="Password" autoComplete="new-password" id="password"
                                />
                            </div>
                        </div>
                        <div className="action">
                            <button >Sign up</button>
                        </div>
                    </form>
                </div>
            </>

        )
    }
}

