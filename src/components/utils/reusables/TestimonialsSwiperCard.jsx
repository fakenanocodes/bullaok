import {BsQuote} from "react-icons/bs"
const TestimonialSwiperCard = ({ items }) => {
    return (
      <div className="relative flex flex-col items-center">
     
  
        <div className="  w-full  rounded-3xl py-5 px-5 md:px-24 flex flex-col justify-center">
          <div className=" text-base md:text-xl tracking-wide text-[#546988] ">
              <p className="leading-loose font-[roboto] text-[#000]"> <BsQuote className="text-5xl" /> {items.text}</p>
              <span className="w-32 block  ms-auto font-bold text-[#8E0789] ">{items.name}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialSwiperCard;
  