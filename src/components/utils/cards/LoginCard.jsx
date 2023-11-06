const LoginCard = () => {
  return (
    <div className="h-[15rem] w-full flex flex-col border-2 rounded-md">
      <div className="bg-gray-50 h-[25%] xl:h-[35%]"></div>
      <div className="flex-1 bg-white px-5 py-6 flex flex-col justify-between">
        <p className="font-medium text-center text-sm xl:text-base">
          Please log in to explore Bulloak Learn content and start your
          education journey
        </p>

        <button className="mx-auto py-2 px-3 w-[80%] bg-[#FFD700] text-white rounded-md font-semibold outline-none">
          Log in
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
