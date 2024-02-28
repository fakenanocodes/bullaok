import axios from 'axios';
// import { Cookies } from 'react-cookie';

export const SERVER_URL =
  'https://django-bulloak-finance-production.up.railway.app/';

const cookies = 'new Cookies()';

export default function init() {
  try {
    axios.defaults.baseURL = SERVER_URL;
    axios.defaults.withCredentials = false;

    const authToken = cookies.get('access');
    console.log(authToken);
    if (authToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    } else {
      console.log('No Access Token found in cookies');
    }

    // Add a request interceptor to attach the Authorization header
    axios.interceptors.request.use((config) => {
      const accessToken = cookies.get('access');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    });

    // Add a response interceptor to handle 401 Unauthorized errors
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          // Handle session expiration, e.g., redirect to login page
          console.log('Session expired. Redirecting to login page...');
          window.location.href = '/login';
        }

        return Promise.reject(error);
      }
    );
  } catch (error) {
    console.error('Initialization error:', error);
  }
}
