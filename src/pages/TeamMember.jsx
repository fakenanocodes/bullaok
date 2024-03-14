import { images } from '../assets';
import cert from '../assets/cert.png';
import services_banner_img from '../assets/services_banner_img.png';
import MainLayout from '../components/MainLayout';

const TeamMember = () => {
  return (
    <div>
      <MainLayout>
        <div className="bg-[#30022ECC] bg-opacity-10 relative w-full md:h-[60vh]">
          <img
            src={services_banner_img}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-start gap-2 lg:gap-20 top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-16">
            <p className="laviossa text-2xl mt-7 md:mt-10 md:text-[3rem] font-bold md:w-[30rem]">
              Detailed Page
            </p>
            <p className="laviossa  md:w-[30rem]">Mr. Sum-Ting Wong</p>
          </div>
        </div>
        <div className="mt-[15px] p-1 md:p-16">
          <p className="laviossa md:text-[2rem] font-bold md:w-[30rem] mb-2 md:mb-10">
            Mr. Sum-Ting Wong
          </p>
          <div>
            <div className="flex md:gap-12 gap-3">
              <div className="w-[60%] xl:w-[70%]">
                <img src={images.presido} alt="President" />
              </div>
              <div className="w-[40%] mt-5 md:mt-14 xl:mt-28 md:text-[26px] text-xs md:leading-10">
                <div className=" bg-[#5d1e5b] h-1 md:h-2 -ml-12  md:-ml-44 mb-3 md:mb-10 "></div>
                <p className="md:mt-16">
                  orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo con Duis aute
                </p>
              </div>
            </div>
            <div>
              <p className="mt-2 md:mt-7 text-xs md:text-[26px] md:leading-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id es Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo con Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatu Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id
                es
              </p>
            </div>
            <div className="mt-5 md:mt-20 w-[60%]">
              <p className="laviossa md:text-[30px] mb-4">Certifications</p>
              <div className="flex gap-5 md:gap-16 text-[8px] md:text-[16px]">
                <div>
                  <img src={cert} />
                  <p>Nobel prize for innovation</p>
                </div>

                <div>
                  <img src={cert} />
                  <p>Starlet creators prize</p>
                </div>
                <div>
                  <img src={cert} />
                  <p>Colwill prize for tech geniuses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ddaadb] w-full glow flex flex-col items-center justify-around md:py-14 py-5 mt-[150px] md:mt-[20px]">
          <p className="text-[#8E0789] mb-5 md:text-xl text-xs font-bold">
            Trusted by some of the biggest companies
          </p>
          <div className="flex md:gap-7 gap-4">
            <div className="md:w-14 md:h-14 w-7 h-7 rounded-full bg-[#8E0789]"></div>
            <div className="md:w-14 md:h-14 w-7 h-7 rounded-full bg-[#8E0789]"></div>
            <div className="md:w-14 md:h-14 w-7 h-7 rounded-full bg-[#8E0789]"></div>
            <div className="md:w-14 md:h-14 w-7 h-7 rounded-full bg-[#8E0789]"></div>
            <div className="md:w-14 md:h-14 w-7 h-7 rounded-full bg-[#8E0789]"></div>
            <div className="md:w-14 md:h-14 w-7 h-7 rounded-full bg-[#8E0789]"></div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};
export default TeamMember;
