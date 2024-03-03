import IdVerification from "../../components/kycPages/IdVerification";
import Personalinfo from "../../components/kycPages/Personalinfo";
import Selfie from "../../components/kycPages/Selfie";
import KycPreview from "../../components/kycPages/kycPreview";
import { useState,createContext } from "react";

export const KycContext = createContext()

const Kyc = () => {
  const [kyc,setKyc] = useState('personalInfo')
  return (
    <KycContext.Provider value={{kyc,setKyc}}>
      <div className="w-full h-full px-[50px] py-[20px]">
        <Personalinfo />
        <IdVerification />
        <Selfie />
        <KycPreview />
      </div>
    </KycContext.Provider>
  );
};

export default Kyc;
