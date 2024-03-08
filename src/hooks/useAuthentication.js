import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';

const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    // Check if the token exists in the cookie
    const token = cookies.get('bk_access');

    // Update the login status based on the presence of the token
    setIsLoggedIn(!!token);
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return isLoggedIn;
};

export default useAuthentication;
