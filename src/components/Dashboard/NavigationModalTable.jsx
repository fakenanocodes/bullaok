import { useEffect, useState } from 'react';
import useSWR from 'swr';

const NavigationModalTable = ({ currentNavigationMenu }) => {
  const { data: completed } = useSWR(
    `${currentNavigationMenu[1].toLowerCase()}/user/${currentNavigationMenu[1].toLowerCase()}/completed`
  );
  const { data: pending } = useSWR(
    `${currentNavigationMenu[1].toLowerCase()}/user/${currentNavigationMenu[1].toLowerCase()}/pending`
  );
  const { data: allTrans } = useSWR(`/${currentNavigationMenu[1].toLowerCase()}/`);

  console.log(`all ${currentNavigationMenu[1]} ==>`,allTrans);
  console.log(`pending ${currentNavigationMenu[1]} ==>`,pending);
  console.log(`completed ${currentNavigationMenu[1]} ==>`,completed);
  const [rowItems, setRowItems] = useState(null);

  useEffect(() => {
    if (currentNavigationMenu[0] === 'Completed') {
      setRowItems(completed);
    } else if (currentNavigationMenu[0] === 'Pending') {
      setRowItems(pending);
    } else if (currentNavigationMenu[0] === 'All') {
      setRowItems(allTrans);
    }
  }, [currentNavigationMenu,rowItems]);

  // console.log(rowItems);

  function convertTimestampToTime(timestamp) {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function convertTimestampToDate(timestamp) {
    console.log('date ==>',new Date(timestamp).toLocaleDateString());
    var date = new Date(timestamp);

    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const strDate =String(month) + ' ' + day + ', ' + year;
    return strDate;
  }

  return (
    <>
      <table className="w-full overflow-y-auto">
        <tr className="text-[15px] font-medium">
          <th className="text-left   px-0 py-2 sm:p-1 hidden sm:block w-[calc(100%/4)] sm:w-[calc(100%/5)]">Description</th>
          <th className="text-left sm:text-center  px-0 py-2 sm:p-1 w-[calc(100%/4)] sm:w-[calc(100%/5)]">Date</th>
          <th className="text-left sm:text-center  px-0 py-2 sm:p-1 w-[calc(100%/4)] sm:w-[calc(100%/5)]">Amount</th>
          <th className="text-left sm:text-center  px-0 py-2 sm:p-1 w-[calc(100%/4)] sm:w-[calc(100%/5)]">Type</th>
          <th className="text-center  px-0 py-2 sm:p-1 w-[calc(100%/4)] sm:w-[calc(100%/5)]">Status</th>
        </tr>
      </table>
      <div className='w-full h-[73vh] overflow-y-auto'>
      {rowItems &&
        rowItems?.map((item, index) => (
          <tr key={index} className='w-full'>
            <td className='  px-0 py-2 sm:p-1 hidden sm:block w-[calc(100%/4)] sm:w-[calc(100%/5)]'>
              <div className="flex flex-col text-left  text-[14px] whitespace-nowrap">
                <span>From main account</span>
                <span className='text-[11px] lowercase'>At {convertTimestampToTime(item?.created)}</span>
              </div>
            </td>
            <td className=" text-[14px] text-left sm:text-center  px-0 py-2 sm:p-1 w-[calc(100%/4)] sm:w-[calc(100%/5)]">
              {convertTimestampToDate(item?.created)}
            </td>
            <td className=" text-[14px] text-left sm:text-center  px-0 py-2 sm:p-1 w-[calc(100%/4)] sm:w-[calc(100%/5)]">
              ${Number(item?.usdt_amount
)?.toFixed(2)}
            </td>
            <td className=" text-[14px] text-left sm:text-center  px-0 py-2 sm:p-1 w-[calc(100%/4)] sm:w-[calc(100%/5)]">{currentNavigationMenu[1]}</td>
            <td className=" text-[14px] text-center  px-0 py-2 sm:p-1 w-[calc(100%/4)] sm:w-[calc(100%/5)]">{currentNavigationMenu[0]}</td>
          </tr>
        ))}
      </div>
    </>
  );
};

export default NavigationModalTable;
