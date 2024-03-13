import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import HistoryTableRow from '../../components/Dashboard/HistoryTableRow';
import DashboardEmptyContainer from '../../components/empty/DashboardEmptyContainer';

const InvestmentHistory = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useSWR('plans/history');

  console.log(data);
  return (
    <div className="xl:p-10 p-5 space-y-5">
      <div className="flex items-center space-x-5 cursor-pointer">
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => {
            navigate(-1);
          }}
        />
        <span className="font-semibold text-lg">HISTORY</span>
      </div>
      <div className="w-full ">
        {isLoading ? (
          <div className="w-full justify-center">
            <CircularProgress size={30} style={{ color: '#fff' }} />
          </div>
        ) : (
          <>
            {data?.length === 0 ? (
              <>
                <DashboardEmptyContainer
                  message={'Your investment history is empty'}
                />
              </>
            ) : (
              <>
                <table className="w-full border-separate overflow-auto border-spacing-y-2 sm:overflow-visible">
                  <thead>
                    <tr className=" grid grid-cols-4  bg-[#E5C8E4] text-black px-10 min-w-[900px]">
                      <th className="text-start">Name</th>
                      <th>Detail</th>
                      <th className="text-end">Amount</th>
                      <th className="text-end">Date</th>
                    </tr>
                  </thead>
                  <tbody className=" space-y-2 ">
                    {data?.map((item, itemIndex) => {
                      return (
                        <>
                          <HistoryTableRow
                            key={itemIndex}
                            idx={itemIndex}
                            item={item}
                            // color={colors}
                          />
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default InvestmentHistory;
