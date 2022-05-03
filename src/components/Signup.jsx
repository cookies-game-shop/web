import React, {useState} from "react";
import {useNavigate} from "react-router";


const Signup =() =>{
    const navigate=useNavigate()
    const[details, setDetails] =useState({userName:"", password:""});
    const  submitHandler=e=>{
        e.preventDefault();
        let username=details.userName
        let password=details.password
        var obj=new Object()
        obj.userName=username
        obj.password=password
        var jsonSignUp= JSON.stringify(obj)
        console.log(jsonSignUp)
        fetch('http://localhost:8080/user/register',{
            method:'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials:'same-origin',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:jsonSignUp,
        }).then(response=>{return response.json()}
        ).then(user=>{
            console.log(user)
            if(user.message){
                alert(user.message)
            }
            navigate('/login')

        })
    }

    return(
        <>
            <div className="login-form">
                <form>
                    <h1>Register</h1>
                    <div className="content">
                        <div className="input-field">
                            <input type="username" placeholder="Username" autoComplete="nope" id="userName"
                            onChange={e=>setDetails({...details, userName: e.target.value})} value={details.userName}/>
                        </div>
                        {/*<div className="input-field">
                            <input type="email" placeholder="Email" autoComplete="nope"/>
                        </div>*/}
                        <div className="input-field">
                            <input type="password" placeholder="Password" autoComplete="new-password" id="password"
                            onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
                        </div>
                    </div>
                    <div className="action">
                        <button onSubmit={submitHandler}>Sign up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup