const InvestCard = ({ datum }) => {
  return (
    <div>
      <div className="bg-gray-50 h-[15rem] md:h-[25rem] w-[90vw] md:w-[35rem] lg:w-[30rem] xl:w-[35rem] rounded-2xl p-3 md:p-10 transition-all flex flex-col justify-between items-center">
        <img
          src={datum?.image}
          alt=""
          className="h-[4rem] md:h-[7rem] lg:h-[10rem]"
        />

        <div>
          <p className="text-xl md:text-3xl font-semibold text-center mb-[1rem]">
            {datum?.title}
          </p>
          <p className="text-xl md:text-2xl font-medium text-center">
            {datum?.subtitle}
          </p>

          <p className="text-base md:text-xl leading-8 text-center">
            {datum?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestCard;
