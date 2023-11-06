const options = [
  'stocks',
  'options',
  'ETFs',
  'IPO',
  'Technical analysis',
  'Others',
];

const HubOptions = () => {
  return (
    <div className="flex items-center justify-between py-2 border-b overflow-x-auto">
      <p className="text-sm lg:text-base font-medium cursor-pointer text-[#FFD700]">
        ALL
      </p>
      {options?.map((option, idx) => (
        <p
          key={idx}
          className="text-[#2B3240] text-sm lg:text-base capitalize cursor-pointer"
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default HubOptions;
