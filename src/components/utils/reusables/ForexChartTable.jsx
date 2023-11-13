const lists = [
  {
    USD: '1.9209',
    EURO: '2.029',
    AUD: '3.839',
    GBP: '0.393',
    NGN: '1.230',
    NZD: '0.9282',
    CAD: '1.893',
    JPY: '0.4553',
    CHF: '5.6334',
    SWI: '3.9404',
  },
  {
    USD: '1.0909',
    EURO: '0.059',
    AUD: '2.839',
    GBP: '1.393',
    NGN: '4.2303',
    NZD: '0.9292',
    CAD: '1.813',
    JPY: '0.4563',
    CHF: '5.6434',
    SWI: '3.9904',
  },
];

const ForexChartTable = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm py-2 lg:py-5 mx-2 lg:mx-12 xl:mx-40 my-[2rem] flex flex-col gap-5">
        <p className="laviossa font-bold text-base ml-2 lg:ml-5">
          Forex Market Chart
        </p>
        <div className="grid grid-cols-9 items-center text-[0.5rem] lg:text-xs bg-gray-50 p-2 lg:p-5 text-[#636872]">
          <p>USD</p>
          <p>EURO</p>
          <p>AUD</p>
          <p>GBP</p>
          <p>NGN</p>
          <p>NZD</p>
          <p>CAD</p>
          <p>JPY</p>
          <div className="flex justify-end">
            <p>CHF</p>
          </div>
        </div>

        <div className="px-2 lg:px-5">
          {lists?.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-9 items-center text-[0.5rem] lg:text-[0.65rem] mb-[1rem] cursor-pointer"
            >
              <div>
                <p>{item?.USD}</p>
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
                {item?.EURO}
              </p>
              <p>{item?.AUD}</p>
              <p>{item?.GBP}</p>
              <p>{item?.NGN}</p>
              <p>{item?.NZD}</p>
              <p className="text-green-400">{item?.CAD}</p>
              <p>{item?.JPY}</p>
              <div className="flex justify-end">
                <p>{item?.CHF}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ForexChartTable;
