import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
// const token = cookies.get('access_token');
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5MjM3NDQ5LCJpYXQiOjE3MDkxMjk0NDksImp0aSI6ImFhY2NlZDVkYTgxYTQ2MTNhYTgyNWNlNGQzNWM1OWNhIiwidXNlcl9pZCI6MTE1LCJmaXJzdF9uYW1lIjoiIiwiZW1haWwiOiJiZWVmbGFzaGluZm9AZ21haWwuY29tIiwidXNlcl9uYW1lIjoiYnJpZ2h0IiwiaWQiOjExNX0.Y5tOV6FtQTFlaRdip07ZvgH2dSNSe40JrCDh9S6roh0';

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
