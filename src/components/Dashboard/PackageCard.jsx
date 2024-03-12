import { useNavigate } from 'react-router-dom';

const PackageCard = ({ label, imgUrl, id }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/dashboard/investment/plan?id=' + id);
  }
  return (
    <div className="flex justify-center lg:w-[250px] w-full border shadow-md lg:h-64 lg:py-0 items-center flex-col rounded-md p-5 gap-3 bg-[#0C0000] border-white border-opacity-20">
      <span className="text-lg font-medium">{label}</span>
      <img src={imgUrl} alt="" className="w-full object-contain" />
      <button
        onClick={handleClick}
        className="w-full border lg:py-2 font-semibold hover:bg-[#F8DF9F] hover:shadow-lg   hover:shadow-[#F8DF9F]/50 hover:text-black transition duration-300 ease-in-out"
      >
        Invest
      </button>
    </div>
  );
};

export default PackageCard;
