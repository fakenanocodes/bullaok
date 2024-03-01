import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Image1 from '../../assets/dashboard/runningInvestment/image1.png';
import Image2 from '../../assets/dashboard/runningInvestment/image2.png';
import Image3 from '../../assets/dashboard/runningInvestment/image3.png';
import Image4 from '../../assets/dashboard/runningInvestment/image4.png';
import Image5 from '../../assets/dashboard/runningInvestment/image5.png';

const packages = [
  {
    imageUrl: Image1,
    label: 'Assets',
    date: '22nd',
    month: 'January',
    year: '2024',
    time: '6:00pm',
    amount: 426.67,
    maturity: '3rd July',
    profit: 7.14,
    profitpercent: 3.67,
  },
  {
    imageUrl: Image2,
    label: 'Real Estate',
    date: '22nd',
    month: 'January',
    year: '2024',
    time: '6:00pm',
    amount: 426.67,
    maturity: '3rd July',
    profit: 7.14,
    profitpercent: 3.67,
  },
  {
    imageUrl: Image3,
    label: 'Crypto',
    date: '22nd',
    month: 'January',
    year: '2024',
    time: '6:00pm',
    amount: 426.67,
    maturity: '3rd July',
    profit: 7.14,
    profitpercent: 3.67,
  },
  {
    imageUrl: Image4,
    label: 'Forex',
    date: '22nd',
    month: 'January',
    year: '2024',
    time: '6:00pm',
    amount: 426.67,
    maturity: '3rd July',
    profit: 7.14,
    profitpercent: 3.67,
  },
  {
    imageUrl: Image5,
    label: 'Ganja',
    date: '22nd',
    month: 'January',
    year: '2024',
    time: '6:00pm',
    amount: 426.67,
    maturity: '3rd July',
    profit: 7.14,
    profitpercent: 3.67,
  },
];

const RunningInvestment = () => {
  return (
    <div className="flex space-y-4 flex-col p-10 ">
      <div>
        <KeyboardBackspaceIcon fontSize="large" />
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
          {packages?.map(
            (
              {
                imageUrl,
                label,
                date,
                month,
                year,
                time,
                amount,
                maturity,
                profit,
                profitpercent,
              },
              index
            ) => (
              <tr className=" bg-[#2F2525] my-5 rounded-xl" key={index}>
                <td className=" gap-2 text-center">
                  <div className="flex items-center justify-center text-center ">
                    <div className="flex justify-start items-center gap-4 w-[180px] ">
                      <img
                        src={imageUrl}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <span>{label}</span>
                    </div>
                  </div>
                </td>
                <td className="gap-2 py-4 text-center">
                  <div className="flex flex-col">
                    <span>
                      {date} {month}
                    </span>
                    <span>
                      {year} {time}
                    </span>
                  </div>
                </td>
                <td className="text-center  py-4">
                  <span className="font-bold text-xl">$ {amount}</span>
                </td>
                <td className="text-center  py-4">
                  <span>{maturity}</span>
                </td>
                <td className="text-center py-4 ">
                  <div className="flex flex-col">
                    <span className="font-bold">+ ${profit}</span>
                    <span className="text-[#47A663] font-semibold">
                      {profitpercent}%
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
