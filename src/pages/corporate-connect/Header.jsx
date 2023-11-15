import { BsArrowRight } from 'react-icons/bs';
export default function Header() {
  return (
    <section
      className="flex flex-col text-white  px-3 lg:px-8 items-center justify-center md:gap-16 gap-8 py-9  bg-cover bg-center bg-no-repeat  w-full relative"
      style={
        {
          // backgroundImage: `url('connect_bg.png')`,
        }
      }
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="uppercase font-bold text-center lg:text-start">
          Bulloak Corporate Connect:
        </h1>
        <p className="text-center lg:text-start px-8 lg:px-0">
          A direct line of communication between investors and companies.
        </p>
        <button className="flex items-center text-[#fff] lg:p-4 px-5 py-2 lg:px-0 lg:py-0 rounded-xl font-bold mt-6 ">
          {' '}
          <span> Get in touch today!</span>{' '}
          <BsArrowRight style={{ color: '#fff' }} />
        </button>
      </div>
      <div className="flex gap-6 justify-center items-center w-full lg:flex-row flex-col lg:w-3/4">
        <div className="flex items-center gap-4 bg-gray-300 p-3 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 ">
          <img
            src="investors.png"
            className="lg:w-24 w-18 h-16 lg:h-auto"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-bold lg:text-2xl text-md">FOR INVESTORS:</h2>
            <p className="lg:text-md text-xs">
              Get up to date news, reports and more directly from listed
              companies
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-300 p-3 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
          <img
            src="investors.png"
            className="lg:w-24 w-18 h-16  lg:h-auto"
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="font-bold lg:text-2xl text-md">
              FOR LISTED COMPANIES:
            </h2>
            <p className="lg:text-md text-xs">
              Get up to date news, reports and more directly from listed
              companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
