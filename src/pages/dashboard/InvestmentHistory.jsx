import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import DashboardEmptyContainer from '../../components/empty/DashboardEmptyContainer';

const history = {
  today: [
    {
      label: 'Real Estate',
      detail: 'You invested $578,600 on real estate plan',
      Month: 'January 25th...',
      time: '15:03PM',
    },
    {
      label: 'Real Estate',
      detail: 'You invested $578,600 on real estate plan',
      Month: 'January 25th...',
      time: '15:03PM',
    },
    {
      label: 'Real Estate',
      detail: 'You invested $578,600 on real estate plan',
      Month: 'January 25th...',
      time: '15:03PM',
    },
    {
      label: 'Real Estate',
      detail: 'You invested $578,600 on real estate plan',
      Month: 'January 25th...',
      time: '15:03PM',
    },
  ],
  '2nd Jan': [
    {
      label: 'Real Estate',
      detail: 'You invested $578,600 on real estate plan',
      Month: 'January 25th...',
      time: '15:03PM',
    },
    {
      label: 'Real Estate',
      detail: 'You invested $578,600 on real estate plan',
      Month: 'January 25th...',
      time: '15:03PM',
    },

    {
      label: 'Real Estate',
      detail: 'You invested $578,600 on real estate plan',
      Month: 'January 25th...',
      time: '15:03PM',
    },

    {
      label: 'Real Estate',
      detail: 'You invested $578,600 on real estate plan',
      Month: 'January 25th...',
      time: '15:03PM',
    },
  ],
};

const historyTime = Object.keys(history);

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
                {/* {historyTime?.map((time, index) => (
                  <>
                  </>
                ))} */}
                {/* <tr key={index}>
                      <td>{time}</td>
                    </tr> */}
                {data?.map((item, itemIndex) => (
                  <tr
                    key={`${itemIndex}`}
                    className="flex justify-between px-10 bg-[#BB9FB3] bg-opacity-[38%]"
                  >
                    <td className="py-4 flex items-center space-x-3">
                      <span className="bg-white w-6 h-6 flex justify-center items-center rounded-full">
                        <FiberManualRecordIcon className="text-[#FFB803] rounded-full" />
                      </span>
                      <span>{item?.name}</span>
                    </td>
                    <td className="py-4">{item?.detail}</td>
                    <td className="py-4">{item?.amount}</td>
                    <td className="py-4">{item?.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default InvestmentHistory;
