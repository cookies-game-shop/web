import axios from "axios";
import authHeader from "./authHeader";
class UserService{
    adminCheck(user){
        axios.get("http://localhost:8080/user/get-admin-creds")
            .then(response=>{
                console.log(response.data)
                return response.data;
            })
    }
    getUser(username){
        axios.get(`http://localhost:8080/user/get-user/${username}`)
            .then(response=>{
                console.log(response.data)
                return response.data;
            })
    }
    getLoggedIn(){
        const token = localStorage.getItem('token');
        if(token){
            return true;
        }
        return false;
    }
}
export default new UserService();
