import axios from 'axios';
import { EXITED } from 'react-transition-group/Transition';

const SESSION_KEY = 'session_token';
const USERID = 'userid';

export function postCredentials(credentials) {
  return axios
    .post('http://127.0.0.1:8000/login_check', credentials, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then((response) => saveToken(response.data.token));
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

export function saveUserId(id) {
  localStorage.setItem(USERID, id);
}

export function useUserId() {
  return localStorage.getItem(USERID);
}

export function getUserId() {
  return axios
    .get(`http://127.0.0.1:8000/api/me`, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + getToken()
      }
    })
    .then((response) => response.data);
}
