import customer_bg from '../../../assets/home/customer_bg.png';

const ClientCard = ({ client }) => {
  return (
    <div className="flex flex-col gap-5 w-[16rem]">
      <div className="relative">
        <img
          src={client?.image}
          alt=""
          className="min-w-[16rem] max-w-[16rem] rounded-2xl"
        />

        <img
          src={customer_bg}
          alt=""
          className="absolute -bottom-2 -right-3 -z-10"
        />
      </div>

      <p className="mt-3 text-sm md:text-base">{`${client?.text?.slice(
        0,
        100
      )}...`}</p>
    </div>
  );
};

export default ClientCard;
