import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { images } from '../../assets';

const imageUrls = {
  Assets: images.assets,
  'Real Estate': images.estate,
  Crypto: images.crypto,
  Forex: images.forex,
  Cannabis: images.cannabis,
};
const RunningInvestment = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useSWR('/plans/all');

  return (
    <div className="flex space-y-4 flex-col p-10 ">
      <div>
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">Running Investments</span>
        <span className="text-[#6E7781] flex items-center space-x-1 bg-[#F6F8FA] py-3 rounded-lg shadow-sm px-3">
          <FilterListIcon fontSize="small" />
          <div className="group relative">
            <span className="text-sm">Filter notifications</span>
            <div className="group-hover:flex hidden absolute flex-col -right-3 top-10 bg-white z-10 px-5 py-3 shadow-lg space-y-3">
              <span>Name</span>
              <span>Date</span>
              <span>Type</span>
              <span>Size</span>
            </div>
          </div>
        </span>
      </div>
      <table className="w-full border-separate border-spacing-y-3">
        <thead className="">
          <tr className="bg-[#E5C8E4] shadow-[#E5C8E4] shadow-sm text-black py-4">
            <th>PLAN</th>
            <th>INVESTED DATE</th>
            <th>AMOUNT</th>
            <th>MATURITY DATE</th>
            <th>PROFIT</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map(
            (
              {
                category,
                created,
                investment_profit_percent,
                maximum_amount,
                minimum_amount,
                number_of_days,
                referral_profit_percent,
              },
              index
            ) => (
              <tr className=" bg-[#2F2525] my-5 rounded-xl" key={index}>
                <td className=" gap-2 text-center">
                  <div className="flex items-center justify-center text-center ">
                    <div className="flex justify-start items-center gap-4 w-[180px] ">
                      <img
                        src={imageUrls[category?.name]}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <span>{category?.name}</span>
                    </div>
                  </div>
                </td>
                <td className="gap-2 py-4 text-center">
                  <div className="flex flex-col">
                    <span>{created}</span>
                    <span>{/* {year} {time} */}</span>
                  </div>
                </td>
                <td className="text-center  py-4">
                  {/* <span className="font-bold text-xl">$ {amount}</span> */}
                </td>
                <td className="text-center  py-4">
                  <span>{number_of_days}</span>
                </td>
                <td className="text-center py-4 ">
                  <div className="flex flex-col">
                    <span className="font-bold">
                      + ${investment_profit_percent}
                    </span>
                    <span className="text-[#47A663] font-semibold">
                      {referral_profit_percent}%
                    </span>
                  </div>
                </td>
                <td>
                  <span>...</span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RunningInvestment;
