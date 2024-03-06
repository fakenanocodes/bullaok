import { useContext } from 'react';
import { KycContext } from '../../pages/dashboard/Kyc';

const SuccessPage = () => {
  const { kyc, setKyc, sup, setSup } = useContext(KycContext);
  return (
    <div
      className={
        sup === 'success'
          ? 'w-screen  flex justify-end items-start absolute -left-[120px] -top-[100px] h-screen bg-[rgba(0,0,0,0.5)] p-[50px]'
          : 'w-full h-full hidden'
      }
    >
      <button
        className={
          sup === 'success'
            ? 'text-[13px] font-[Poppins] font-[100] text-[green] bg-white rounded-[5px] px-[5px] outline-white outline-[1.5px] outline-offset-[3px] duration-1000 transition-all  translate-x-0'
            : 'text-[13px] font-[Poppins] font-[100] text-[green] bg-white rounded-[5px] px-[5px] outline-white outline-[1px] outline-offset-[3px] duration-1000 transition-all  translate-x-[300px]'
        }
        onClick={() => setSup('')}
      >
        Successfull
      </button>
    </div>
  );
};

export default SuccessPage;
