import axios from "axios";

export function Login(login,senha){
    axios.post("http://localhost:8080/Login", {
      login: login,
      senha:senha,
    }).then((e)=>{
        console.log(e)
    });
}