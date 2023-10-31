export default function Header() {
  return (
    <section className="flex items-center justify-center gap-16  ">
      <div className="flex flex-col gap-10 text-[#fff] w-1/4 items-start">
        <h1 className="font-bold text-[70px] text-[#fff]">
          In-depth
          <br /> ETF Trading <br />
          with Webull
        </h1>
        <p>
          Webull’s charting tools, granular data, and independent analysis aim
          to empower investors through various platforms and different operating
          systems.
        </p>
        <p>On Webull, do it all with zero commission.</p>
        <img src="/companies.png" alt="" />
        <button className="bg-[#000] rounded-lg p-4 w-64 font-bold text-2xl">
          Get Started
        </button>
      </div>
      <img src="/mobile.png" className="h-auto w-1/3" alt="" />
    </section>
  );
}
