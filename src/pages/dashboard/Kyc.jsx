import IdVerification from "../../components/kycPages/IdVerification";
import Personalinfo from "../../components/kycPages/Personalinfo";
import Selfie from "../../components/kycPages/Selfie";
import SuccessPage from "../../components/kycPages/SuccessPage";
import KycPreview from '../../components/kycPages/KycPreview'
import { useState,createContext } from "react";

export const KycContext = createContext()

const Kyc = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const [kyc,setKyc] = useState('personalInfo')
  const [sup,setSup] = useState('')

  // function handleDataFromChild(data) {
  //   setDataFromChild(data);
  // }
  console.log(dataFromChild);


  return (
    <div className="w-full h-full px-[50px] pt-[50px] pb-[30px]">
      <KycContext.Provider value={{ kyc, setKyc,sup,setSup, dataFromChild, setDataFromChild }}>
        <Personalinfo />
        <IdVerification />
        <Selfie />
        <KycPreview />
        <SuccessPage/>
      </KycContext.Provider>
    </div>
  );
};

export default Kyc;

