import { useState } from 'react';
import PlusIcon from '../icons/PlusIcon';

const FaqCard = ({ faq }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-full bg-white shadow-lg my-[2rem] p-7 rounded-xl">
        <div className="flex justify-between items-center">
          <p className="font-medium text-lg lg:text-2xl">{faq?.title}</p>

          <div className="cursor-pointer" onClick={() => setShow(!show)}>
            <PlusIcon />
          </div>
        </div>
      </div>
      {show && (
        <p className="w-full lg:text-lg leading-7 mx-2 md:mx-3">
          {faq?.answer}
        </p>
      )}
    </>
  );
};

export default FaqCard;
