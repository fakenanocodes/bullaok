import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import HistoryTableRow from '../../components/Dashboard/HistoryTableRow';
import DashboardEmptyContainer from '../../components/empty/DashboardEmptyContainer';
import useDateSeparator from '../../hooks/useDateSeparator';


const InvestmentHistory = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useSWR('plans/history');

  console.log(data);
  return (
    <div className="p-10 space-y-5">
      <div className="flex items-center space-x-5 cursor-pointer">
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => {
            navigate(-1);
          }}
        />
        <span className="font-semibold text-lg">HISTORY</span>
      </div>
      <div className="w-full">
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
                <table className="w-full border-separate border-spacing-y-2">
                  <thead>
                    <tr className=" flex justify-between bg-[#E5C8E4] text-black px-10">
                      <th>Name</th>
                      <th>Detail</th>
                      <th>Amount</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody className="flex space-y-2 flex-col">
                    {data?.map((item, itemIndex) => {
                      const messageDate = new Date(item?.created);
                      const dateSeparator = useDateSeparator(messageDate);

                      return (
                        <>
                          {/* {dateSeparator  && (
                          <div className="px-10 text-center font-semibold mt-4">
                            {dateSeparator}
                          </div>
                        )} */}
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
