function FaqQA({ servicesData }) {
  console.log(servicesData);
  return (
    <div className=" mx-auto lg:p-8 p-2 ">
      {servicesData.map((service, index) => (
        <div className="lg:mb-[80px] mb-8 " key={index}>
          <h2 className="lg:text-3xl text-sm text-[#000] mb-2 font-[montserrat]">
            {service?.question?.split('').map((char, idx) => (
              <span
                key={idx}
                className={
                  idx === 0
                    ? 'lg:text-5xl  text-[27px] font-bold text-[#8E0789] font-[laviossa]'
                    : ''
                }
              >
                {char}
              </span>
            ))}
          </h2>
          <p className="border text-sm lg:text-3xl mt-4 border-[#8E0789] p-4 font-[montserrat] ">
            {service.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FaqQA;
