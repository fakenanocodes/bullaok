import invest_save3 from '../../../assets/invest_save3.png';

const InvestManagement = () => {
  return (
    <section className="bg-gradient-to-r from-purple-300 to-yellow-100 bg-opacity-40 px-5 xl:px-20 pb-[5rem] rounded-3xl mx-[0.5rem] lg:mx-[1.5rem] flex flex-col items-center justify-between gap-10 my-[7rem]">
      <img src={invest_save3} alt="" className="-mt-10" />
      <p className="text-3xl md:text-4xl font-extrabold tracking-wide text-center text-[#181C2F]">
        What Is Cash Management?
      </p>
      <button className="text-white font-semibold text-lg py-4 px-6 bg-[#FFD700] rounded-lg w-[12rem]">
        Learn More
      </button>
    </section>
  );
};

export default InvestManagement;
