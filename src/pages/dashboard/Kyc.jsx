import IdVerification from "../../components/kycPages/IdVerification";
import Personalinfo from "../../components/kycPages/Personalinfo";
import Selfie from "../../components/kycPages/Selfie";
import KycPreview from "../../components/kycPages/kycPreview";

const Kyc = () => {
  return (
    <div className="w-full h-full">
      <Personalinfo />
      <IdVerification />
      <Selfie />
      <KycPreview />
    </div>
   );
};

export default Kyc;
