import { useEffect, useState } from 'react';
import useSWR from 'swr';

const NavigationModalTable = ({ currentNavigationMenu }) => {
  const { data: completed } = useSWR(
    `${currentNavigationMenu[1].toLowerCase()}/user/${currentNavigationMenu[1].toLowerCase()}/completed`
  );
  const { data: pending } = useSWR(
    `${currentNavigationMenu[1].toLowerCase()}/user/${currentNavigationMenu[1].toLowerCase()}/pending`
  );


  const [rowItems, setRowItems] = useState(null);

  useEffect(() => {
    if (currentNavigationMenu[0] === 'Completed') {
      setRowItems(completed);
    } else if (currentNavigationMenu[0] === 'Pending') {
      setRowItems(pending);
    } else if (currentNavigationMenu[0] === 'All') {
      const temp = completed.push(pending)
      console.log(temp)
      // setRowItems(completed)
      // setRowItems(pending)
    }
  }, [currentNavigationMenu]);

  console.log(rowItems);

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

     const strDate = month + ' ' + day + ', ' + year;
    return strDate;
  }

  return (
    <table className="">
      <tr className="text-[15px] font-medium">
        <th className="text-center">Description</th>
        <th className="text-center">Date</th>
        <th className="text-center">Amount</th>
        <th className="text-center">Type</th>
        <th className="text-center">Status</th>
      </tr>
      {rowItems &&
        rowItems[0]?.map((item, index) => (
          <tr key={index}>
            <td>
              <div className="flex flex-col text-sm">
                <span>From main account</span>
                <span>At {convertTimestampToTime(item?.created)}</span>
              </div>
            </td>
            <td className="text-sm text-center">{convertTimestampToDate(item?.created)}</td>
            <td className="text-sm text-center">
              ${Number(item?.amount)?.toFixed(1)}
            </td>
            <td className="text-sm text-center">{currentNavigationMenu[1]}</td>
            <td className="text-sm text-center">{currentNavigationMenu[0]}</td>
          </tr>
        ))}
    </table>
  );
};

export default NavigationModalTable;
