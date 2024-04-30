import useSWR from "swr";

const NavigationModalTable = ({ currentNavigationMenu }) => {
  // const completed = useSWR(`${}`)

  return (
    <table className="">
      <tr className="text-[15px] font-medium">
        <th className="text-center">Description</th>
        <th className="text-center">Date</th>
        <th className="text-center">Amount</th>
        <th className="text-center">Type</th>
        <th className="text-center">Status</th>
      </tr>

      <tr>
        <td>
          <div className="flex flex-col text-sm">
            <span>From main account</span>
            <span>At 09:30am</span>
          </div>
        </td>
        <td className="text-sm text-center">March 1, 2024</td>
        <td className="text-sm text-center">$100</td>
        <td className="text-sm text-center">{currentNavigationMenu[1]}</td>
        <td className="text-sm text-center">{currentNavigationMenu[0]}</td>
      </tr>
    </table>
  );
};

export default NavigationModalTable;
