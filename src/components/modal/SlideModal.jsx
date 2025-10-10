import { ClickAwayListener } from '@mui/material';
import { IoMdClose } from "react-icons/io";

const SlideModal = ({ setIraFunds, isIraFunds, title = "title",width = "md:w-[60%]", bgClass = "bg-white", children }) => {
  
if (!isIraFunds) return null;

  return (
    <div
      className={`fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 transition-all duration-300 ease-in-out origin-bottom-right ${
        isIraFunds ? 'scale-100' : 'scale-0 pointer-events-none'
      }`}
    >
      <ClickAwayListener onClickAway={setIraFunds}>
        <div className={`flex flex-col h-[80%] w-[90%]  no-scrollbar ${bgClass} ${width} text-gray-700 overflow-scroll relative rounded-xl transition-all duration-300 ease-in-out origin-bottom-right ${isIraFunds ? 'scale-100' : 'scale-0 pointer-events-none' }`}>
          <div className="py-5 p-4 md:px-4 flex justify-between items-center">
            <span className="text-xl md:text-3xl tracking-wider font-semibold">{title}</span>
            <button 
              className='text-2 xl text-gray-600  transition-all duration-200 active:scale-90 hover:bg-gray-500/50 rounded-full p-1 hover:text-white'
              onClick={setIraFunds}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="border-b-2 border-b-gray-300"></div>
          <div className='h-full overflow-y-auto no-scrollbar flex flex-col '>
            { children }  
          </div>
        </div>
      </ClickAwayListener>
    </div>
    
  );
};
export default SlideModal;