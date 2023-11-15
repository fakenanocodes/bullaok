import data from '../../data/benefit.json';
export default function Benefits() {
  return (
    <div className="text-[#fff]">
      <h2 className="text-center lg:text-4xl text-2xl  mt-9">
        The benefits of a margin trading account
      </h2>
      <img src="line.png" className="w-12 mx-auto mt-5" alt="" />
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-9 gap-y-7 lg:w-3/6 w-full mt-8  px-2 m-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="text-[#000] lg:w-64 w-full text-center lg:p-5 p-2 flex flex-col bg-[#fff] rounded-lg items-center"
          >
            <img src={item.icon} className="w-12 h-auto " alt="" />
            <h3 className="mt-3 lg:text-xl text-sm">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
