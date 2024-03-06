import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const token = cookies.get('access_token');
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5MzkyMTE3LCJpYXQiOjE3MDkyODQxMTcsImp0aSI6IjJlZWE1YzVhMTQ2ZjRmZDM4NTBiZTlhMzNjZmNlMDVmIiwidXNlcl9pZCI6MTE1LCJmaXJzdF9uYW1lIjoiIiwiZW1haWwiOiJiZWVmbGFzaGluZm9AZ21haWwuY29tIiwidXNlcl9uYW1lIjoiYnJpZ2h0IiwiaWQiOjExNX0.3mVf1okQT98eWT4dvg-YQYXqMvXcv9xzdZQJp9tqHlA';

export const API_URL =
  'https://django-bulloak-finance-production.up.railway.app/';

// console.log(token)
export default function init() {
  axios.defaults.baseURL = API_URL;
  axios.defaults.withCredentials = false;

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}
