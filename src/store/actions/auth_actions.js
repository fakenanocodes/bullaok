import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const customUserLogout = (navigate) => {
  cookies.remove('access', { path: '/' });
  cookies.remove('refresh', { path: '/' });
  cookies.remove('user', { path: '/' });
  cookies.remove('date', { path: '/' });
  navigate('/');
};
