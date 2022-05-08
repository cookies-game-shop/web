import axios from "axios";
import QueryString from 'query-string'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";


class AuthService {
    async login(username, password) {
       await axios.post('http://localhost:8080/login',
            QueryString.stringify({
                username: username,
                password: password
            }), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function (res) {
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('refresh_token', res.data.refresh_token)
        });
        await axios.get('http://localhost:8080/user/get-admin-creds',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => {
            localStorage.setItem('isAdmin', response.data)
        }).catch(e => {
            console.log(e);
        })
    }

    refresh_token() {
        axios.get('http://localhost:8080/user/token/refresh',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('refresh_token')}`
                }
            }).then((response) => {
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            return true;
        });
        return false;
    }

    logout() {
        localStorage.removeItem("user");
    }

    isAdmin() {
        axios.get('http://localhost:8080/user/get-admin-creds',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response => {
           return response.data;
        }).catch(e => {
            console.log(e);
            return false;
        })
    }

}

export default new AuthService();
