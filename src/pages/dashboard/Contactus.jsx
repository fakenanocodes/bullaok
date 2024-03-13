import axios from 'axios';
import { useState } from 'react';
import HeroImage from '../../assets/contact/hero.png';
import MobileHeroImage from '../../assets/contact/mobileHero.png';
import MainLayout from '../../components/MainLayout';

const Contactus = () => {
  const [value, setValue] = useState({
    name: '',
    subject: '',
    email: '',
    body: '',
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async () => {
    await axios
      .post('contact-us', {
        name: value?.name,
        subject: value?.subject,
        email: value?.email,
        body: value?.body,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  console.log(value);

  return (
    <MainLayout>
      <div className="relative">
        <img
          src={MobileHeroImage}
          alt=""
          className="h-52 object-cover w-full lg:hidden flex"
        />
        <img
          src={HeroImage}
          alt=""
          className="lg:h-[80vh] lg:w-full hidden lg:flex"
        />
        <div className="absolute  lg:flex hidden top-0 right-0 left-0 bg-[#30022E] bg-opacity-[80%] flex-col p-44 pt-28 space-y-40 text-white h-[80vh]">
          <span className="text-5xl font-medium">Contact us</span>
          <span className="text-lg font-medium tracking-widest">
            We would love to hear from you
          </span>
        </div>
        <div className="lg:p-16 flex lg:flex-row flex-col lg:gap-10 p-5 lg:space-x-10">
          <div className="w-[350px] h-full flex flex-col lg:space-y-2 space-y-10">
            <div className="flex items-center space-x-2">
              <div className="border-2 bg-[#8e078ab1] border-[#8e078ab1] lg:w-8 lg:h-2 w-7 h-1"></div>
              <span className="font-medium tracking-wide lg:text-lg text-xs">
                Send us a message
              </span>
            </div>
            <div className="h-full">
              <span className="lg:text-6xl text-lg font-semibold">
                Tell us how we may help you, leave us your contact info
              </span>
            </div>
          </div>
          <div className="lg:w-[55%] w-full space-y-8 lg:pt-1 pt-10 flex flex-col justify-center items-center">
            <div className="w-full space-x-5 flex">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full"
                value={value?.name}
                onChange={handleChange}
                name="name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="w-full space-x-5 flex">
              <input type="text" placeholder="Your Phone" className="w-full" />
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full"
                onChange={handleChange}
                name="subject"
                value={value?.subject}
              />
            </div>
            <div className="w-full">
              <textarea
                className="w-full"
                rows="5"
                placeholder="Have a say..."
                onChange={handleChange}
                value={value?.body}
                name="body"
              />
            </div>
            <button
              onClick={sendMessage}
              className="bg-[#8e078ab1] w-full p-3 text-white font-bold"
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="bg-[#8E0789] bg-opacity-[30%] h-[200px] flex items-center justify-center flex-col p-5 space-y-8 py-10">
          <span className="lg:text-lg text-sm font-bold tracking-wide text-[#8E0789]">
            Trusted by some of the biggest Companies
          </span>
          <div className="flex space-x-3 lg:space-x-6">
            <div className="bg-[#8E0789] lg:w-16 lg:h-16 w-8 h-8 rounded-full"></div>
            <div className="bg-[#8E0789] lg:w-16 lg:h-16 w-8 h-8 rounded-full"></div>
            <div className="bg-[#8E0789] lg:w-16 lg:h-16 w-8 h-8 rounded-full"></div>
            <div className="bg-[#8E0789] lg:w-16 lg:h-16 w-8 h-8 rounded-full"></div>
            <div className="bg-[#8E0789] lg:w-16 lg:h-16 w-8 h-8 rounded-full"></div>
            <div className="bg-[#8E0789] lg:w-16 lg:h-16 w-8 h-8 rounded-full"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contactus;
