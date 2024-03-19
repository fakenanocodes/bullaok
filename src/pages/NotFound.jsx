import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../actions/utils';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] bg-[#8E0789]/20 flex justify-center items-center overflow-hidden">
      <div className="m-auto flex flex-col items-center">
        <h1 className="text-[80px]">404</h1>
        <p className="text-3xl">Page not found</p>
        <button
          onClick={() => {
            navigate(-1);
            scrollToTop();
          }}
          className="mt-[3rem] px-4 py-3 bg-white shadow-md rounded-md w-[10rem] font-medium"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
