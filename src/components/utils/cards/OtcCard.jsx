import BluetoothIcon from '../icons/BluetoothIcon';

const OtcCard = ({ item }) => {
  return (
    <div className="bg-white p-3 md:p-7 w-[20rem] lg:w-[22rem] xl:w-[25rem] min-h-[12rem] max-h-[12rem] lg:min-h-[14rem] lg:max-h-[14rem] xl:min-h-[15rem] xl:max-h-[15rem] rounded-3xl flex flex-col items-center justify-around gap-3">
      {item.image ? (
        <div className="p-3 rounded-[50%] bg-[#41073F] shadow-sm">
          <img src={item?.image} alt="" />
        </div>
      ) : (
        <BluetoothIcon />
      )}

      <p className="text-center text-[#636872] md:text-sm lg:text-lg">
        {item?.description}
      </p>
    </div>
  );
};

export default OtcCard;
