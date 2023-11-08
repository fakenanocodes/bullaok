import home_bg from '../assets/home/home_bg.png';

const HistioryMap = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${home_bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '45rem',
      }}
      className="mx-2 lg:mx-auto mt-3 xl:mb-7 pt-[5rem] flex flex-col lg:justify-center gap-2 items-center"
    >
      <div className="grid grid-cols-3 items-center">
        <p className="text-xs md:text-base xl:text-xl font-semibold tracking-wider">
          Lorem ipsum dolor sit amet
        </p>
        <div className="flex justify-center">
          <p className="p-2 bg-[#D2C2D2] font-semibold text-xl text-center w-20 text-[#41073F] rounded-sm">
            2011
          </p>
        </div>
        <div></div>
      </div>

      <div className="h-20 border-r-4 border-[#480546E5] opacity-70"></div>

      <div className="grid grid-cols-3 gap-5 items-center">
        <div></div>
        <div className="flex justify-center">
          <p className="p-2 bg-[#D2C2D2] font-semibold text-xl text-center w-20 text-[#41073F] rounded-sm">
            2015
          </p>
        </div>
        <p className="text-xs md:text-base xl:text-xl font-semibold tracking-wider">
          Lorem ipsum dolor sit amet{' '}
        </p>
      </div>
      <div className="h-20 border-r-4 border-[#480546E5] opacity-70"></div>
      <div className="grid grid-cols-3 items-center">
        <p className="text-xs md:text-base xl:text-xl font-semibold tracking-wider">
          Lorem ipsum dolor sit amet{' '}
        </p>
        <div className="flex justify-center">
          <p className="p-2 bg-[#D2C2D2] font-semibold text-xl text-center w-20 text-[#41073F] rounded-sm">
            2019
          </p>
        </div>
        <div></div>
      </div>

      <div className="h-20 border-r-4 border-[#480546E5] opacity-70"></div>

      <div className="grid grid-cols-3 gap-5 items-center">
        <div></div>
        <div className="flex justify-center">
          <p className="p-2 bg-[#D2C2D2] font-semibold text-xl text-center w-20 text-[#41073F] rounded-sm">
            2023
          </p>
        </div>
        <p className="text-xs md:text-base xl:text-xl font-semibold tracking-wider">
          Lorem ipsum dolor sit amet{' '}
        </p>
      </div>
    </div>
  );
};

export default HistioryMap;
