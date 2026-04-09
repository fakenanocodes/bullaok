import axios from 'axios';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useLogout = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const logout = async () => {
    try {
      // Hit the logout endpoint to clear backend session/token
      await axios.post('/user/auth/logout/');
    } catch (err) {
      console.log('Failed to hit logout API, proceeding to clear local state', err);
    } finally {
      // Clear cookies
      const allCookies = cookies.getAll();
      for (const key in allCookies) {
        cookies.remove(key, { path: '/' });
      }

      // Clear local and session storage
      localStorage.clear();
      sessionStorage.clear();

      // Show success toast
      toast.success('Logged out successfully', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
      });

      // Navigate to login
      navigate('/login');
    }
  };

  return logout;
};

export default useLogout;
