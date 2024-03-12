import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const token = cookies.get('bk_access');
export const API_URL =
  'https://django-bulloak-finance-production.up.railway.app/';
console.log(token);
export default function init() {
  // Set base URL for Axios
  axios.defaults.baseURL = API_URL;

  // Set withCredentials to false (unless you need to include credentials in cross-origin requests)
  axios.defaults.withCredentials = false;

  // Check if the token is available and not expired
  if (token) {
    // Set Authorization header with the token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Clear Authorization header if there's no token
    delete axios.defaults.headers.common['Authorization'];
  }
}
