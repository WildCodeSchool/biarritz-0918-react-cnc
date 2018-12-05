import axios from "axios";
import { EXITED } from "react-transition-group/Transition";

const SESSION_KEY = "session_token";

export function postCredentials(credentials){
    console.log(credentials);
    return axios
        .post("http://127.0.0.1/login", credentials, {
            headers: {
                Accept: "application/json"
            }
        })
        .then(response => saveToken(response.data.token))
        
}

export function saveToken(token){
    localStorage.setItem(SESSION_KEY, token);
}

export function getToken(){
    return localStorage.getItem(SESSION_KEY)
}

export function removeToken(){
    localStorage.removeItem(SESSION_KEY)
}