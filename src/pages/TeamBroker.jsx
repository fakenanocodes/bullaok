import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { scrollToMid } from '../actions/utils';
import cert from '../assets/cert.png';
import services_banner_img from '../assets/services_banner_img.png';
import MainLayout from '../components/MainLayout';
import { brokerMember } from '../data/teamMember';
import useSWR from 'swr';

const TeamBroker = () => {
  // const[brokerData,setBrokrData]=useState('');

  const { subpage } = useParams();
  const {data: broker} = useSWR(`/broker/brokers/${subpage}/`)

  console.log('broker =>', broker);

  useEffect(() => {
    // scrollToMid();
  }, []);

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
            <p className="laviossa  md:w-[30rem]">
              {broker?.name}
            </p>
          </div>
        </div>
        <div className="mt-[15px] p-1 md:p-16">
          <p className="laviossa md:text-[2rem] font-bold md:w-[30rem] mb-2 md:mb-10">
            {broker?.name}
          </p>
          <div>
            <div className="flex flex-col lg:flex-row md:gap-12 gap-3">
              <div className="w-[60%] xl:w-[70%]">
                <img src={broker?.image} alt="President" />
              </div>
              <div className="lg:w-[40%] mt-5 md:mt-14 xl:mt-28 md:text-[26px] text-xs md:leading-10">
                <div className=" bg-[#5d1e5b] h-1 md:h-2 -ml-12  md:-ml-44 mb-3 md:mb-10 "></div>
                <div className='text-lg flex flex-col gap-3'>
                  <div className='flex gap-10 justify-between '>
                    <b className='whitespace-nowrap'>Address: </b>
                    <p className="w-[240px] capitalize text-left ">{broker?.address || "no data"}</p>
                  </div>
                  
                  <div className='flex gap-10 justify-between'>
                    <b className='whitespace-nowrap'>Major Licence: </b>
                    <p className="w-[240px] text-left">{broker?.main_state_licenses || "no data"}</p>
                  </div>
                  <div className='flex gap-10 justify-between'>
                    <b className='whitespace-nowrap'>Major Exams passed: </b>
                    <p className="w-[240px] text-left">{broker?.main_exams_passed || "no data"}</p>
                  </div>
                  <div className='flex gap-10 justify-between'>
                    <b className='whitespace-nowrap'>Years of experience: </b>
                    <p className="w-[240px] text-left capitalize"> {broker?.years_of_experience || "no data"}</p>
                  </div>
                  <div className='flex gap-10 justify-between capitalize'>
                    <b  className='whitespace-nowrap'>instagram profile: </b>
                    <p className="w-[240px] text-left lowercase"> {broker?.instagram_profile || "No data"}</p>
                  </div>

                  <div className='flex gap-10 justify-between capitalize'>
                    <b className='whitespace-nowrap'>linkedin profile: </b>
                    <p className="w-[240px] text-left lowercase"> {broker?.linkedin_profile || "No data"}</p>
                  </div>
                  <div className='flex gap-10 justify-between capitalize'>
                    <b className='whitespace-nowrap'>interests input: </b>
                    <p className="w-[240px] text-left lowercase"> {broker?.interests_input || "No data"}</p>
                  </div>
                  <div className='flex gap-10 justify-between capitalize'>
                    <b className='whitespace-nowrap'>regulator: </b>
                    <p className="w-[240px] text-left capitalize"> {broker?.regulator || "No data"}</p>
                  </div>
                  <div className='capitalize flex flex-col justify-between'>
                    <b>expertise</b>
                    <p className="text-left capitalize"> {broker?.experience_and_expertise || "no data"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 md:mt-7 text-lg md:text-xl flex flex-col">
              <b>More About {broker?.name?.split(" ")[broker?.name?.split(" ").length - 1]}</b>
              <p >
                {broker?.bio}
              </p>
            </div>

            <div className="mt-2 md:mt-7 text-lg md:text-xl flex flex-col capitalize">
              <b>why choose me?</b>
              <p >
                {broker?.why_choose_me || "no data"}
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
export default TeamBroker;
