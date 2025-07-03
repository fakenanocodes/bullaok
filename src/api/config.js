import axios from 'axios';
import { Cookies } from 'react-cookie';
import { toast } from 'react-toastify';


const cookies = new Cookies();
const token = cookies.get('bk_access');

export const API_URL = 'https://api.bulloakltd.com/';

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
      if("error --> ",error?.response?.data?.code === "token_not_valid"){
        cookies.remove("bk_access")
        cookies.remove("bk_refresh")
        cookies.remove("refresh")
        toast.error("Your session has expired. Please log in again.")
        window.location.href = '/login';
        return  
      }
      else if (error.response && error.response.status === 401) {
        cookies.remove("bk_access")
        cookies.remove("bk_refresh")
        cookies.remove("refresh")
        window.location.href = '/login';
      }
      else{
        return Promise.reject(error);
      }
    }
  );
}
