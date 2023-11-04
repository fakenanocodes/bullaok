import ira_card_img from '../../../assets/ira_card_img.png';

const IraBigCardTwo = () => {
  return (
    <div className="w-full flex md:justify-end px-5 bg-gray-50 h-[14rem] relative rounded-3xl">
      <img
        src={ira_card_img}
        alt=""
        className="hidden md:inline-block h-[16rem] lg:h-max absolute left-10 -top-4 lg:-top-20"
      />

      <div className="w-[20rem] lg:w-[25rem] xl:w-[30rem] flex flex-col justify-center gap-4">
        <p className="font-semibold text-[#383838] text-xl">
          Various investment products and tools
        </p>
        <p className="text-[#383838] md:text-xs lg:text-base xl:text-lg">
          Trade commission-free on stocks, ETFs, and options in your IRA. Free,
          real-time data and analytics in one customizable application across
          mobile, desktop, laptop, and web platforms.
        </p>
      </div>
    </div>
  );
};

export default IraBigCardTwo;
