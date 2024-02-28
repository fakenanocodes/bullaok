import DepositIcon from '../../../components/utils/icons/DepositIcon';

let trans = [
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'helenmaike@gmail.com',
    Asset: '$',
    Status: 'Succeed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'ndubes@gmail.com',
    Asset: '$',
    Status: 'Pending ...',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'bulloakfoxfinance@gmail.com',
    Asset: '$',
    Status: 'Failed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'helenmaike@gmail.com',
    Asset: '$',
    Status: 'Succeed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'ndubes@gmail.com',
    Asset: '$',
    Status: 'Pending ...',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'bulloakfoxfinance@gmail.com',
    Asset: '$',
    Status: 'Failed',
  },
];

const Deposit = () => {
  return (
    <div className=" h-[100%] bg-white rounded-xl p-4 text-gray-700 overflow-scroll">
      <div className=" text-2xl font-bold my-3 mb-5">Deposit</div>
      <form>
        <div className="flex flex-col gap-10 pb-24">
          <div className="flex gap-10  font-semibold">
            <div className="flex flex-col w-[50%]">
              <label>Source wallet</label>
              <select type="text" className="rounded-lg px-6 border-2 py-4">
                <option>main</option>
                <option>BTC</option>
              </select>
            </div>
            <div className="flex flex-col w-[50%]">
              <label>Asset destination</label>
              <select type="text" className="rounded-lg px-6 border-2 py-4">
                <option>$1,474.91</option>
                <option>BTC</option>
              </select>
            </div>
          </div>
          <div className=" w-[48%] items-center gap-5 relative grid grid-flow-col ">
            <div className="w-auto bg-black h-[1.3px] col-span-4 "></div>
            <div className="col-span-[1px] -ml-5">
              <DepositIcon />
            </div>
            <div className="w-auto bg-black h-[1.3px]  col-span-3 -ml-16 "></div>
          </div>
          <div className="flex gap-10 font-semibold">
            <div className="flex flex-col w-[50%]">
              <label>Deposit wallet addresst</label>
              <input
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="yourmail@gmail.com"
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label>Deposit amount</label>
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
      <div className="border shadow-md">
        <div className="bg-[#8E0789] text-white p-3 text-2xl font-semibold">
          Deposit History
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
            Status
          </div>
          <select className="m-2 p-2 bg-[rgb(249,249,250)] shadow drop-shadow-lg border-none px-7">
            <option className="">sort</option>
          </select>
        </div>
        <div>
          {trans.map((tran, idx) => (
            <div className="flex justify-between w-[90%] text-xs ">
              <div className="font-bold mx-12 py-3 ">{tran.Date}</div>
              <div className="py-3 w-5 -mx-5 ">{tran.Amount}</div>
              <div className="py-3  mx-24 w-24">{tran.Email}</div>
              <div className="py-3 w-16 -mx-10">{tran.Status}</div>
              <div className="w-36"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Deposit;
