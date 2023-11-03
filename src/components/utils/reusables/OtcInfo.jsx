const lists = [
  {
    name: 'Luckin Coffe Inc',
    symbol: 'LKNCY',
    change: '-5.15%',
    last_price: '31.15',
    high: '33.2800',
    low: '30.3500',
    volume: '1.21m',
    range: '+8.92%',
    pe: '+33.2870',
    market_cap: '8.10B',
  },
  {
    name: 'Netlist',
    symbol: 'NLST',
    change: '+7.73%',
    last_price: '1.15',
    high: '1.2200',
    low: '1.1200',
    volume: '459.7k',
    range: '+9.17%',
    pe: '--5.2561',
    market_cap: '295.33M',
  },
];

const OtcInfo = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm py-2 lg:py-5 xl:mx-[5rem] my-[2rem] flex flex-col gap-5">
        <p className="font-bold text-base ml-2 lg:ml-5">OTC</p>
        <div className="grid grid-cols-9 items-center text-[0.5rem] lg:text-xs bg-gray-50 p-2 lg:p-5 text-[#636872]">
          <p>Symbol/Name</p>
          <p>% Change</p>
          <p>Last Price</p>
          <p>High</p>
          <p>Low</p>
          <p>Volume</p>
          <p>% Range</p>
          <p>P/E</p>
          <div className="flex justify-end">
            <p>Market Cap</p>
          </div>
        </div>

        <div className="px-2 lg:px-5">
          {lists?.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-9 items-center text-[0.5rem] lg:text-[0.65rem] mb-[1rem] cursor-pointer"
            >
              <div>
                <p>{item?.name}</p>
                <p className="text-[#636872]">{item?.symbol}</p>
              </div>
              <p
                className={
                  item?.change?.startsWith('-')
                    ? 'text-red-400'
                    : item?.change?.startsWith('+')
                    ? 'text-green-400'
                    : 'text-[#636872]'
                }
              >
                {item?.change}
              </p>
              <p>{item?.last_price}</p>
              <p>{item?.high}</p>
              <p>{item?.low}</p>
              <p>{item?.volume}</p>
              <p className="text-green-400">{item?.range}</p>
              <p>{item?.range}</p>
              <div className="flex justify-end">
                <p>{item?.market_cap}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button className="font-bold py-4 px-7 bg-white rounded-lg text-[#41073F]">
          View Full List
        </button>
      </div>
    </>
  );
};

export default OtcInfo;
