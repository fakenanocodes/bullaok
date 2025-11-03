import axios from 'axios';
import { Cookies } from 'react-cookie';
import { toast } from 'react-toastify';


const cookies = new Cookies();
const token = cookies.get('bk_access');

const cookie = new Cookies(); 
const allCookies = cookie.getAll();

const logoutOption = async () => {
  try {
    const response = await axios.post('/user/auth/logout/');
    toast.success('logged out successful', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
    });
    for (let k in allCookies) {
      cookie.remove(k);
    }
    navigate('/login');
  } catch (err) {
    toast.error('failed to logout', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
    });
  }
};

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
    logoutOption()
    delete axios.defaults.headers.common['Authorization'];
  }
}
