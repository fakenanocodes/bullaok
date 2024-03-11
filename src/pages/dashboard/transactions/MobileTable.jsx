const MobileTable = ({ withdraws, showMobileTable, address }) => {
  return (
    <div>
      <table className="w-[100%] overflow-x-scroll">
        <div
          className={` ${
            showMobileTable
              ? `block border shadow-md -mx-4 md:hidden`
              : `hidden`
          }`}
        >
          <div className="bg-[#8E0789] text-white p-3 md:text-2xl font-semibold">
            Withdrawal History
          </div>
          <thead>
            <tr className="text-xs rounded-sm">
              <td className="bg-[#F9F9FA] border-r-8 border-solid border-white px-6 py-2 text-center">
                DATE
              </td>
              <td className="bg-[#F9F9FA] border-r-8 border-solid border-white px-6 py-2 text-center">
                AMOUNT
              </td>
              <td className="bg-[#F9F9FA] border-r-8 border-solid border-white  py-2 text-center ">
                {address}
              </td>
              <td className="bg-[#F9F9FA] border-r-8 border-solid border-white px-6 py-2 text-center">
                ASSET
              </td>
              <td className="bg-[#F9F9FA] border-r-8 border-solid border-white px-6 py-2 text-center">
                STATUS
              </td>
            </tr>
          </thead>
          <tbody>
            {withdraws?.[0].map((withdraw, idx) => (
              <tr id={idx} className="text-xs">
                <td className="pl-2 font-bold py-3">
                  <p>20-04-2024</p>
                  <p>10:26</p>
                </td>
                <td className="text-center">{withdraw?.amount}</td>
                <td className="text-center ">
                  <div className="w-[100px] text-ellipsis overflow-hidden whitespace-nowrap">
                    {withdraw?.wallet_address}
                  </div>
                </td>
                <td className="text-center">{withdraw?.wallet_type}</td>
                <td className="text-center">
                  {withdraw?.verified
                    ? 'Success'
                    : !withdraw?.verified
                    ? 'Pending...'
                    : 'Failed'}
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
};
export default MobileTable;
