import axios from 'axios';
import { accessToken } from './..........';

axios.interceptors.request.use(
  (config) => {
    const token = isBrowser ? accessToken() : null;
    return {
      ...config,
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        ...config.headers,
      },
    };
  },
  (error) => Promise.reject(error)
);

axios.defaults.baseURL = 'http://localhost:3001/';
// axios.defaults.baseURL = "https://deal-up-api.onrender.com";

export default axios;
