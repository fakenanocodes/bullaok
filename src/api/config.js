import axios from 'axios';
import { Cookies } from 'react-cookie';


const cookies = new Cookies();
const token = cookies.get('bk_access');

export const API_URL = 'https://api.bulloakltd.com/';
console.log(token);

export default function init() {
  // Set base URL for Axios
  axios.defaults.baseURL = API_URL;

  axios.defaults.withCredentials = false;

  if (token) {
    // Set Authorization header with the token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Clear Authorization header if there's no token
    delete axios.defaults.headers.common['Authorization'];
  }

  // Intercept responses and handle 401 errors
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        // removeCookies(["bk_access", "bk_refresh"]);
        cookies.remove("bk_access")
        cookies.remove("bk_refresh")
        // Redirect to login page
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
}
