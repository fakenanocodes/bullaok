import DoneIcon from '@mui/icons-material/Done';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const benefits = [
  'Total Profit 8.0%',
  'Duration 7 days',
  'Min Deposit 10500',
  'Max Deposit 200000',
  'Referral bonus 20.0%',
];

const plans = ['BASIC', 'RECUPERATE', 'STARTING'];

const InvestmentPlan = () => {
  return (
    <div className="p-10">
      <div className="flex items-center space-x-5">
        <KeyboardBackspaceIcon fontSize="large" />
        <span className="font-semibold text-lg">CRYPTO CURRENCY</span>
      </div>
      <div className="p-8 space-x-5 flex justify-center items-center">
        {plans?.map((plan, index) => (
          <div
            className="relative bg-[#D9D9D9] text-black flex flex-col w-[300px] shadow-lg items-center p-5 px-10 space-y-10 py-10"
            key={index}
          >
            <div className="text-white bg-[#41073F] p-5 px-16 border border-opacity-20 w-[80%] rounded-full shadow-2xl shadow-[#41073F] flex justify-center items-center">
              <span>{plan}</span>
            </div>
            <div className="flex flex-col space-y-4">
              {benefits?.map((benefit, index) => (
                <span className="flex space-x-4 items-center" key={index}>
                  <DoneIcon fontSize="small" className="text-[#FFB803]" />
                  <span className="text-sm font-medium">{benefit}</span>
                </span>
              ))}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#676467] font-medium">
                Enter Amount
              </label>
              <input type="number" name="" id="" className="border-none" />
            </div>
            <button className="bg-[#41073F] p-3 px-5 -bottom-6 rounded-xl border border-white border-opacity-30 text-white absolute">
              Proceed with investment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentPlan;
