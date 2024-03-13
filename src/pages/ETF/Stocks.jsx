import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../actions/utils';

export default function Stocks() {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center bg-[#CDA1CB26] py-8">
      <div className="flex flex-col items-center text-[#fff] gap-3">
        <h2 className="md:text-3xl text-xl md:text-justify text-center">
          Get up to 12 free stocks today
        </h2>
        <div className="text-center">
          <h3 className="font-bold md:text-xl text-lg">Limited Time Offer</h3>
          <p className="md:w-96 w-full">
            Get up to 12 free stocks when you open and fund a new account. Each
            free stock is valued from $3 to $3000.
          </p>
          <button className="text-[#000] bg-transparent">
            Learn more {'>'}
          </button>
        </div>
        <button
          onClick={() => {
            navigate('/register');
            scrollToTop();
          }}
          className="mt-3 bg-[#D4B716] text-black rounded-lg p-3 px-9"
        >
          Open an account
        </button>
      </div>
    </section>
  );
}
