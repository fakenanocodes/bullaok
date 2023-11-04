import card_bg_img from '../../../assets/card_bg_img.png';

const StockStepsCard = ({ image, step, title, description }) => {
  return (
    <div
      className="w-[20rem] lg:w-[19rem] xl:w-[22rem] min-[1440px]:w-[26rem] shadow-md rounded-lg px-7 py-5 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${card_bg_img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '15rem',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="p-3 rounded-[50%] bg-[#8E0789] shadow-sm">
          <img src={image} alt="" />
        </div>
        <p className="font-extrabold text-7xl text-[#41073F] opacity-30">
          {step}
        </p>
      </div>

      <div className="mb-[1rem]">
        <p className="font-bold text-2xl mb-3 text-[#2B3240]">{title}</p>

        <p className="font-medium text-lg text-[#293241]">{description}</p>
      </div>
    </div>
  );
};

export default StockStepsCard;
