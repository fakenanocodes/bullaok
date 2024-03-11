import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cookies = new Cookies();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const token = cookies.get('bk_access');

    if (token) {
      setIsLoggedIn(true);
      setIsLoading(false);

    } else {
      // Redirect to login if user information is not available in the cookie
      navigate('/login');
    }
  }, [cookies, navigate]);

  return { isLoggedIn, isLoading };
};

export default useAuthentication;
