import axios from "axios";

const SESSION_KEY = "session_token";
const USERID = "userid";
const ROLES = "";
export const SERVER = "http://127.0.0.1:8000";
// export const SERVER = 'https://c-and-c-api.herokuapp.com';

export function postCredentials(credentials) {
   return axios
      .post(SERVER + "/login_check", credentials, {
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
         }
      })
      .then(response => {
         saveToken(response.data.token);
      })
      .then(() => saveRole());
}

export function saveRole() {
   return axios
      .get(SERVER + `/api/me`, {
         headers: {
            Accept: "application/json",
            Authorization: "Bearer " + getToken()
         }
      })
      .then(response => localStorage.setItem("ROLES", response.data.role));
}

export function saveToken(token) {
   localStorage.setItem(SESSION_KEY, token);
}

export function getToken() {
   return localStorage.getItem(SESSION_KEY);
}

export function removeToken() {
   localStorage.removeItem(SESSION_KEY);
}

export function removeRole() {
   localStorage.removeItem("ROLES");
}

export function saveUserId(id) {
   localStorage.setItem(USERID, id);
}

export function useUserId() {
   return localStorage.getItem(USERID);
}

export function getUserId() {
   return axios
      .get(SERVER + `/api/me`, {
         headers: {
            Accept: "application/json",
            Authorization: "Bearer " + getToken()
         }
      })
      .then(response => response.data);
}
