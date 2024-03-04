import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import assetImage from '../../assets/dashboard/investment/assets.png';
import cryptoImage from '../../assets/dashboard/investment/crypto.png';
import forexImage from '../../assets/dashboard/investment/forex.png';
import realEstateImage from '../../assets/dashboard/investment/realestate.png';
import RunningInvestmentIcon from '../../assets/dashboard/runningInvestment.png';
import PackageCard from '../../components/dashboard/PackageCard';

const packages = [
  {
    label: 'Assets',
    imgUrl: assetImage,
  },
  {
    label: 'Real Estate',
    imgUrl: realEstateImage,
  },
  {
    label: 'Crypto',
    imgUrl: cryptoImage,
  },
  {
    label: 'Forex',
    imgUrl: forexImage,
  },
  {
    label: 'Real Estate',
    imgUrl: realEstateImage,
  },
  {
    label: 'Crypto',
    imgUrl: cryptoImage,
  },
  {
    label: 'Forex',
    imgUrl: forexImage,
  },
];

const InvestmentPackages = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <KeyboardBackspaceIcon fontSize="large" />
        <img src={RunningInvestmentIcon} alt="" className="pr-15" />
      </div>
      <div className="p-10 space-y-5">
        <span className="font-bold text-lg">All Investments</span>
        <div className="flex gap-10 flex-wrap">
          {packages?.map((investmentPackage, index) => (
            <PackageCard
              label={investmentPackage?.label}
              imgUrl={investmentPackage?.imgUrl}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPackages;
