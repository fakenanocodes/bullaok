const PackageCard = ({ label, imgUrl }) => {
  return (
    <div className="flex justify-center w-[250px]  border shadow-md h-64 items-center flex-col rounded-md p-5 gap-3 bg-[#0C0000] border-white border-opacity-20">
      <span className="text-lg font-medium">{label}</span>
      <img src={imgUrl} alt="" className="w-full object-contain" />
      <button className="w-full border py-2 font-semibold hover:bg-[#F8DF9F] hover:text-black">
        Invest
      </button>
    </div>
  );
};

export default PackageCard;
