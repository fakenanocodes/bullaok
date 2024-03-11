const MobileTransferTable = ({ transfers, showMobileTable }) => {
  return (
    <div>
      <table className="w-[100%] overflow-x-scroll ">
        <div
          className={` ${
            showMobileTable
              ? `block border shadow-md -mx-4 md:hidden`
              : `hidden`
          }`}
        >
          <div className="bg-[#8E0789] text-white p-3 md:text-2xl font-semibold w-full ">
            Transfer History
          </div>
          <tr className="text-sm ">
            <td className="  bg-[#F9F9FA]  py-2 text-center p-5 border-r-8 border-white">
              DATE
            </td>
            <td className="px-2 text-center bg-[#F9F9FA]  border-r-8 border-white ">
              AMOUNT
            </td>
            <td className="px-2  text-center bg-[#F9F9FA]  border-r-8 border-white">
              EMAIL&nbsp;ADDRESS
            </td>
            <td className="px-2  text-center bg-[#F9F9FA]  border-r-8 border-white">
              ASSET
            </td>
            <td className="px-2  text-center bg-[#F9F9FA]  border-r-8 border-white">
              STATUS
            </td>
          </tr>
          {transfers?.map((transfer, idx) => (
            <tr className="text-xs w-full">
              <td className="font-bold py-3 md:py-5 ">
                <div className="md:flex gap-2 text-center md:ml-10">
                  <span>{transfer?.created?.split('T')[0]}</span>
                  <p>{transfer?.created?.split('T')[1]?.split('.')[0]}</p>
                </div>
              </td>
              <td className="px-2 text-center">{transfer?.usdt_amount}</td>
              <td className="px-2 text-center">{transfer?.email}</td>
              <td className="px-2 text-center">{'USDT'}</td>
              <td className="px-2 text-center ">
                {transfer?.usdt_amount ? 'Success' : 'Failed'}
              </td>
            </tr>
          ))}
        </div>
      </table>
    </div>
  );
};
export default MobileTransferTable;
