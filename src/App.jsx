import { RouterProvider, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import router from './router/index';
import { useEffect } from 'react';
function App() {


  // const location = useLocation();
  
  // useEffect(() => {
  //   if (window.Weglot) {

  //     window.Weglot.initialize({
  //       api_key: 'wg_dabedcebf2c2bdad2ca4be7d61f92b590',
  //     });
  //   }
  // }, []);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  );
}

export default App;
