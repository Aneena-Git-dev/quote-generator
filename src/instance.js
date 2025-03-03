
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dummyjson.com/', // Base URL for the API
  timeout: 1000,  // Optional: Timeout setting
});

export default instance;
