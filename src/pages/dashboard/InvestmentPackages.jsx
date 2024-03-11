import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { images } from '../../assets';
import RunningInvestmentIcon from '../../assets/dashboard/investment/runninginvestment.png';
import PackageCard from '../../components/Dashboard/PackageCard';
import DashboardEmptyContainer from '../../components/empty/DashboardEmptyContainer';

const imageUrls = {
  Assets: images.assets,
  'Real Estate': images.estate,
  Crypto: images.crypto,
  Forex: images.forex,
  Cannabis: images.cannabis,
};

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const InvestmentPackages = () => {
  const { data, isLoading } = useSWR('/plans/categories/');
  const navigate = useNavigate();

  console.log(data);
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
        <LightTooltip
          title="Running Investments"
          followCursor
          arrow
          placement="top"
        >
          <img
            src={RunningInvestmentIcon}
            alt=""
            onClick={() => {
              navigate('/dashboard/investment/running');
            }}
            className="pr-15 hover:bg-[#F8DF9F] hover:shadow-2xl   hover:shadow-[#fff]/50 hover:text-black transition duration-300 ease-in-out cursor-pointer"
          />
        </LightTooltip>
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
