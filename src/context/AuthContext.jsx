import { createContext, useContext, useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {
    // Check for the user token in local storage or cookies
    const storedUser = cookies.get('bk_user');
    console.log(storedUser);
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  console.log(user);

  const logout = () => {
    // Perform logout logic, and clear user data
    setUser(null);
    cookies.removeItem('bk_user');
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
