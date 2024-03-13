import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../actions/utils';

export default function WhyCorporate() {
  const data = [
    {
      title:
        'Retail investors are increasingly significant in the US equity market          ',
      content:
        'Due to the introduction of no commission trading, the retail investor is more important and engaged than ever!',
    },
    {
      title: 'Our self directed retail investors are highly engaged',
      content:
        'Recognizing their importance, it is crucial to prioritize communication and engagement with this growing segment of investors.',
    },
    {
      title: 'Efficiently interact with retail investors          ',
      content:
        'By understanding their needs, providing valuable resources, and fostering meaningful connections, you can effectively cater to the interests of retail investors.            ',
    },
  ]; // Add m

  const navigate = useNavigate();
  return (
    <section className="text-white flex py-7">
      <div className="flex flex-col lg:flex-row w-full lg:w-2/3 gap-5 px-7 mx-auto mt-[80px] ">
        <h2 className="lg:text-4xl text-2xl w-full lg:w-2/6 font-bold mt-8 text-center lg:text-start">
          Why use Bulloak's Corporate Connect?
        </h2>
        <div className="flex flex-col gap-9 items-start  w-full items-center  text-center lg:text-start lg:w-2/4">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold lg:text-3xl mb-4      text-xl">
                {item.title}
              </h3>
              <p>{item.content}</p>
            </div>
          ))}
          <button
            onClick={() => {
              navigate('/contact');
              scrollToTop();
            }}
            className="flex items-center text-[#fff] lg:p-4 py-2 lg:py-0 px-5 lg:px-0 rounded-xl lg:text-2xl text-xl gap-3 font-bold mt-6 "
          >
            {' '}
            <span> Get in touch today!</span>{' '}
            <BsArrowRight style={{ color: '#fff' }} />
          </button>{' '}
          <p className="w-2/3 lg:w-full">
            Contact CCS@Bulloak-us.com to learn more
          </p>
        </div>
      </div>
    </section>
  );
}
