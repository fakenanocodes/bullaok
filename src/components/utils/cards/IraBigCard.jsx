import ira_card_img2 from '../../../assets/ira_card_img2.png';

const IraBigCard = () => {
  return (
    <div className="w-full flex justify-between px-5 bg-gray-50 h-[14rem] relative rounded-3xl">
      <div className="w-[20rem] lg:w-[25rem] xl:w-[30rem] flex flex-col justify-center gap-4">
        <p className="font-semibold text-[#383838] text-xl">
          Take control of your retirement
        </p>
        <p className="text-[#383838] md:text-xs lg:text-base xl:text-lg">
          Whether you are exploring a Roth or Traditional IRA, or are
          considering what to do with a 401(k) from a former employer, you’ve
          got choices.
        </p>
      </div>

      <img
        src={ira_card_img2}
        alt=""
        className="hidden md:inline-block h-[16rem] lg:h-max absolute right-10 -top-4 lg:-top-20"
      />
    </div>
  );
};

export default IraBigCard;
