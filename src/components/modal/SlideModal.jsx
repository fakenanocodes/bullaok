import { ClickAwayListener } from '@mui/material';
import { IoMdClose } from "react-icons/io";

const SlideModal = ({ setIraFunds, isIraFunds, title = "title",width = `[80%]`, bgColor= "white", children }) => {
  
if (!isIraFunds) return null;

  return (
    <div
      className={`fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 transition-all duration-300 ease-in-out origin-bottom-right ${
        isIraFunds ? 'scale-100' : 'scale-0 pointer-events-none'
      }`}
    >
      <ClickAwayListener onClickAway={setIraFunds}>
        <div className={`h-[80%] w-[90%]  no-scrollbar bg-${bgColor} md:w-${width} p-4 text-gray-700 overflow-scroll relative rounded-xl ${isIraFunds ? 'block' : 'hidden'}`}>
          <div className="py-3  md:px-20 flex justify-between items-center">
            <span className="text-xl md:text-3xl tracking-wider font-semibold">{title}</span>
            <button 
              className='text-2 xl text-gray-600  transition-all duration-200 active:scale-90 hover:bg-gray-500/50 rounded-full p-1 hover:text-white'
              onClick={setIraFunds}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="absolute left-0 right-0 border-b-2 border-b-gray-300"></div>

          { children }
        </div>
      </ClickAwayListener>
    </div>
    
  );
};
export default SlideModal;