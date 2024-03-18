import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { images } from '../../assets';
import PackageCard from '../../components/Dashboard/PackageCard';
import DashboardEmptyContainer from '../../components/empty/DashboardEmptyContainer';

const imageUrls = {
  Assets: images.assets,
  'Real Estate': images.estate,
  Crypto: images.crypto,
  Forex: images.forex,
  Cannabis: images.cannabis,
};


const InvestmentPackages = () => {
  const { data, isLoading } = useSWR('/plans/categories/');
  const navigate = useNavigate();

  console.log(data)
  return (
    <div>
      <div className="flex justify-between items-center py-4 px-6">
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer"
        />
        
      </div>
      <div className="p-10 space-y-5">
        <span className="font-bold text-lg">All Investments</span>
        <div className="flex gap-10 flex-wrap">
          {data && data?.length === 0 ? (
            <>
              <DashboardEmptyContainer message="No investment packages found" />
            </>
          ) : (
            <>
              {data?.map((investmentPackage, index) => (
                <PackageCard
                  label={investmentPackage?.name}
                  imgUrl={imageUrls[investmentPackage?.name]}
                  key={index}
                  id={investmentPackage?.id}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPackages;
