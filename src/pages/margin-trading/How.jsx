import { BsChevronDown, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../actions/utils';
export default function How() {
  const data = [
    {
      img: 'open.png',
      icon: 'one.png',
      text: 'Open a Bulloak brokerage account.',
    },
    {
      img: 'open.png',
      icon: 'two.png',
      text: 'When choosing an account type, select Margin.',
    },
    {
      icon: 'three.png',
      img: 'open.png',
      text: 'Fund your account with at least $2,000 in cash or transfer the equivalent value of marginable securities.',
    },
    {
      icon: 'four.png',
      img: 'open.png',
      text: 'Keep a minimum of 25% of your total account value as equity at all times.​',
    },
  ];
  const navigate = useNavigate();
  return (
    <section className=" bg-[#fff] py-9 mt-9  ">
      <div className="mx-auto text-[#000] mt-8 w-full lg:w-2/3 flex flex-col justify-center items-center ">
        <h2 className="font-bold lg:text-4xl text-2xl text-center my-4">
          How trading securities on margin works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between  mx-auto">
          <div className="grid gap-2 w-full lg:w-5/6 lgpx-2 px-8">
            {data.map((item) => (
              <>
                <div className="flex items-center lg:gap-5 gap-3 lg:p-9 p-4   relative lg:h-24 h-auto bg-gradient-to-r from-[#41073F] to-white-500 w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
                  <img
                    src={item.icon}
                    className="absolute -top-8  -left-5 w-12 h-auto"
                    alt=""
                  />
                  <img src={item.img} className="lg:w-12 w-8 h-auto" alt="" />
                  <p className="font-bold lg:text-md text-sm ">{item.text}</p>
                </div>

                <BsChevronDown
                  style={{
                    color: '#000',
                    width: 'fit',
                    margin: 'auto',
                    fontSize: '24px',
                  }}
                />
              </>
            ))}
          </div>
          <img
            src="title.png"
            className="lg:w-4/6 w-auto h-auto hidden lg:block"
            alt=""
          />
        </div>

        <button
          onClick={() => {
            navigate('/register');
            scrollToTop();
          }}
          className="bg-[#D4B716] rounded-lg text-[#000] px-9 py-4 flex items-center gap-2 mt-6 "
        >
          <span>Get Started</span> <BsFillArrowRightCircleFill />
        </button>
      </div>
    </section>
  );
}
