export default function Stock() {
  const data = [
    {
      img: 'investment.png',
      title: 'Invest with as little as $5',
      text: 'Fractional shares on Bulloak can be as small as 1/100000 of a share, as little as $5',
    },
    {
      img: 'pay.png',
      title: 'Pay no commissions',
      text: 'Bulloak charges no commission fees, no account management fees or inactivity fees to buy and sell fractional shares',
    },
    {
      img: 'expand.png',
      title: 'Expand your stock portfolio      ',
      text: 'With fractional shares trading ability introduced, you have the opportunity to invest in even more companies',
    },
  ];
  return (
    <section className="bg-[#fef3fd] py-9">
      <div className="lg:w-2/3 w-full m-auto text-center px-5 lg:px-0">
        <h2 className="font-bold text-[#550952] lg:text-4xl text-2xl">
          Own part of a stock
        </h2>
        <p className=" text-gray-500 mt-4">
          Invest in your favorite stocks and ETFs, regardless of share price,
          for <span className="text-[#550952]">just $5. </span>
        </p>
      </div>
      <div className="flex justify-between mt-8 lg:flex-row flex-col w-full lg:w-2/3 mx-auto px-5 lg:gap-0 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className=" px-4 lg:w-2/6 w-full px-9 py-4 text-center gap-3 flex flex-col justify-center items-center mt-7"
          >
            <img src={item.img} className="h-auto w-36" alt="" />
            <h3 className="font-bold lg:text-2xl text-xl mt-5">{item.title}</h3>
            <p className="text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
