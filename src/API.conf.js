import axios from 'axios';

// const createApi = token =>
const testunused = (token) =>
  axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

export default testunused;
