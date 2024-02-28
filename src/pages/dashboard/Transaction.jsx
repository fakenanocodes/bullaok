import DirectArrowIcon from '../../components/utils/icons/directArrowIcon';

let trans = [
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    'Email address': 'bulloakfinance@gmail.com',
    Asset: '$',
    Status: 'Succeed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    'Email address': 'bulloakfinance@gmail.com',
    Asset: '$',
    Status: 'Pending ...',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    'Email address': 'bulloakfinance@gmail.com',
    Asset: '$',
    Status: 'Failed',
  },
];

const Transaction = () => {
  return (
    <div className=" h-[100%] bg-white rounded-xl p-4 text-gray-700 overflow-scroll">
      <div className=" text-xl font-bold my-3 mb-5">Transfer</div>
      <form>
        <div className="flex flex-col gap-10 pb-24">
          <div className="flex gap-10  font-semibold">
            <div className="flex flex-col w-[50%]">
              <label>Source wallet</label>
              <select type="text" className="rounded-lg px-6 border-2 py-4">
                <option>main</option>
              </select>
            </div>
            <div className="flex flex-col w-[50%]">
              <label>Asset destination</label>
              <select type="text" className="rounded-lg px-6 border-2 py-4">
                <option>$1,474.91</option>
              </select>
            </div>
          </div>
          <div className=" w-[48%] items-center gap-5 relative grid grid-flow-col ">
            <div className="w-auto bg-black h-[1.3px] col-span-4 "></div>
            <div className="col-span-[1px] -ml-5">
              <DirectArrowIcon />
            </div>
            <div className="w-auto bg-black h-[1.3px]  col-span-3 -ml-16 "></div>
          </div>
          <div className="flex gap-10 font-semibold">
            <div className="flex flex-col w-[50%]">
              <label>Recipient email address</label>
              <input
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="yourmail@gmail.com"
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label>Transfer amount</label>
              <input
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="0.00 $"
              />
            </div>
          </div>
          <div className="flex justify-between w-[48%] text-xl items-center">
            <div className=" text-red-600 font-semibold">
              You are transferring $0.00
            </div>
            <button className="bg-[#352F84] py-2 text-white px-4 rounded-[5px]">
              Send payment
            </button>
          </div>
        </div>
      </form>
      <div>
        <div className="bg-[#8E0789] text-white p-3 text-2xl font-semibold">
          Transfer History
        </div>
        <div className="flex justify-between w-[90%] ml-10">
          <div className="m-2 p-2 px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Date
          </div>
          <div className="m-2 p-2 px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Amount
          </div>
          <div className="m-2 p-2 px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Email address
          </div>
          <div className="m-2 p-2 px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Asset
          </div>
          <div className="m-2 p-2 px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Status
          </div>
          <select className="m-2 p-2 bg-[#F9F9FA] shadow drop-shadow-lg border-none px-7">
            <option className="">sort</option>
          </select>
        </div>
        <div className="">
          {trans.map((tran, idx) => (
            <div>
              <div>{tran.Date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Transaction;
