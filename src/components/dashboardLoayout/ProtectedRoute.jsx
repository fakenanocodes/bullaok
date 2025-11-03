// import { Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

const ProtectedRoute = ({ children }) => {
  const token = cookies.get('bk_access');
  const navigate = useNavigate()

  if (!token) {
    navigate('/login')
    return;
  }

  // Intercept responses and handle 401 errors
  axios.interceptors.response.use(
    response => response,
    error => {
      if(error?.response?.data?.code === "token_not_valid"){
        cookies.remove("bk_access")
        cookies.remove("bk_refresh")
        cookies.remove("refresh")
        toast.error("Your session has expired. Please log in again.")
        navigate('/login');
        return  
      }
      else if (error.response && error.response.status === 401) {
        cookies.remove("bk_access")
        cookies.remove("bk_refresh")
        cookies.remove("refresh")
        navigate('/login');
      }
      else{
        return Promise.reject(error);
      }
    }
  );

  return children;
};

export default ProtectedRoute;
