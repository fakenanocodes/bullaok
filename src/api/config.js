import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const token = cookies.get('bk_access');
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTMxMDQ3LCJpYXQiOjE3MDk4MjMwNDcsImp0aSI6IjliYWRhYjY2NTc3NjRlNThhZTZkZTg4ZDhlOTc0N2JlIiwidXNlcl9pZCI6MSwiZmlyc3RfbmFtZSI6IiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwidXNlcl9uYW1lIjoiYWRtaW4iLCJpZCI6MX0.sLaVUMD2jY7rbzsR7Vjrw_1BMQWTgvViB_LfgOnYJds';

export const API_URL =
  'https://django-bulloak-finance-production.up.railway.app/';

export default function init() {
  axios.defaults.baseURL = API_URL;
  axios.defaults.withCredentials = false;

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}
