import axios from "axios";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";

const cookies = new Cookies();
const token = cookies.get("bk_access");

export const API_URL = "https://api.bulloakinc.com/";

export default function init() {
  // Set base URL for Axios
  axios.defaults.baseURL = API_URL;
  axios.defaults.withCredentials = false;

  if (token) {
    // Set Authorization header with the token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // Clear Authorization header if there's no token
    delete axios.defaults.headers.common["Authorization"];
  }
}
