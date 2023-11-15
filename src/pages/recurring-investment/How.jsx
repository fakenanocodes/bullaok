export default function How() {
  const data = [
    {
      img: 'step1.png',
      title: 'Open an account',
      text: 'Sign up and fill out our application form',
    },
    {
      img: 'step2.png',
      title: 'Make a deposit',
      text: 'Fund your account with any amount',
    },
    {
      img: 'step3.png',
      title: 'Schedule now',
      text: 'Build your portfolio with recurring stock/ETF investments.',
    },
  ];
  return (
    <section className=" bg-[#fff] lg:py-9 py-3  ">
      <div className="mx-auto text-[#000] lg:mt-8 mt-0 w-full lg:w-2/3 flex flex-col justify-center items-center ">
        <h2 className="font-bold lg:text-4xl text-3xl text-center my-4">
          How it <span className="text-[#41073F] font-bold">works</span>
        </h2>
        <p className="text-gray-500 lg:w-5/6 w-full lg:text-lg text-sm px-2 lg:px-0 text-center mt-4 mb-8">
          For example, investors A and B decided to invest $800 each in Stock
          XYZ eight months ago. Investor A invested the total sum when the stock
          was trading at $10, holding 80 shares. In contrast, investor B set up
          a recurring investment of $100 monthly. Eight months later, he holds
          about 98 shares at an average cost per share of $8.16. Please note
          that this example is for illustrative purposes only. The value of
          securities may fluctuate.
        </p>

        <img src="works.png" className="lg:mt-8 w-full h-auto" alt="" />

        <p className="font-bold    text-xl my-6 lg:text-start text-center w-2/3 lg:w-full">
          You can access recurring investments in three Steps.
        </p>

        <div className="flex justify-between mt-8 lg:flex-row flex-col w-full px-5 lg:gap-0 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7FAFC] lg:w-1/4 w-full px-9 py-4 text-center gap-3 flex flex-col justify-center items-center"
            >
              <img src={item.img} className="h-auto w-24" alt="" />
              <h3 className="font-bold lg:text-2xl text-xl ">{item.title}</h3>
              <p className="text-[#546988]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
