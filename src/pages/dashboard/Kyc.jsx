import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import IdVerification from '../../components/kycPages/IdVerification';
import KycPreview from '../../components/kycPages/KycPreview';
import Personalinfo from '../../components/kycPages/Personalinfo';
import Selfie from '../../components/kycPages/Selfie';
import SuccessPage from '../../components/kycPages/SuccessPage';
import { toast } from 'react-toastify';

export const KycContext = createContext();

const Kyc = () => {
  const [dataFromChild, setDataFromChild] = useState('');
  const [kyc, setKyc] = useState('personalInfo');
  const [sup, setSup] = useState('');
  const { data } = useSWR('kyc/');
  const navigate = useNavigate();

  // console.log(data);

  // function handleDataFromChild(data) {
  //   setDataFromChild(data);
  // }

  useEffect(() => {
    if (data !== null) {
      navigate('/dashboard');
      toast.success('KYC already verified', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
  }, [data]);
  // console.log('kyc data ==>',data);

  return (
    <div className="w-full h-full px-[50px] pt-[50px] pb-[30px]">
      <KycContext.Provider
        value={{ kyc, setKyc, sup, setSup, dataFromChild, setDataFromChild }}
      >
        <Personalinfo />
        <IdVerification />
        <Selfie />
        <KycPreview />
        <SuccessPage />
      </KycContext.Provider>
    </div>
  );
};

export default Kyc;
