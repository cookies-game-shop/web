import axios from "axios";
import QueryString from "query-string";
import {toast} from "react-toastify";

class AuthService {
  async login(username, password, setToken, setIsAdmin) {
    await axios
      .post(
        "http://localhost:8080/login",
        QueryString.stringify({
          username: username,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (res) {
        setToken(true);
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        toast.success("Login Successful!",{
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
      }).catch((e)=>{
            console.log(e);
            toast.error("Something went wrong",{
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        });
    await axios
      .get("http://localhost:8080/user/get-admin-creds", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.data === "ADMIN") {
          localStorage.setItem("admin", response.data);
          setIsAdmin(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refresh_token() {
    axios
      .get("http://localhost:8080/user/token/refresh", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
        },
      })
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        return true;
      });
    return false;
  }

  register(firstName, lastName, username, password) {
    axios.post('http://localhost:8080/user/register', {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
    })
        .then((response) => {
          const user = response.data;
          console.log(user);

        });
  }
}

export default new AuthService();
