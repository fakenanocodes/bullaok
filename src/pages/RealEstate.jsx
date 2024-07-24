import services_banner_img from '../assets/eventBg.png';
import MainLayout from '../components/MainLayout';
import realEstateBg from '../assets/realEstateBg.png'
import { useNavigate } from 'react-router-dom';

const RealEstate = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[15vh] md:h-[20vh] lg:h-[25vh]">
        <img
          src={services_banner_img}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute flex items-center gap-12 lg:gap-20 top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-16 xl:pl-48">
          <p className="laviossa w-full text-center text-[20px] md:text-[30px] lg:text-[3rem] font-bold whitespace-nowrap">REAL ESTATE INVESTMENT</p>
          {/* <p className="laviossa text-xl md:w-[30rem]">All about forex</p> */}
        </div>
      </div>

      <div className="px-5 lg:px-12 xl:px-40 py-[1rem]">
        {/* investment background image */}
        <img src={realEstateBg} alt="" />
        
        <div className='py-[3rem]'>
          <p className="laviossa text-xl md:text-3xl font-semibold capitalize">About real-estate</p>
          <p className="text-base lg:text-lg mt-[0.5rem]">
          Investing in real estate offers a unique avenue to build financial stability, generate passive income, and secure your future.
          </p>
          <p className="text-base lg:text-lg mt-[2rem]">
          Real estate has long been hailed as one of the most reliable and lucrative investment vehicles. Unlike stocks or bonds, real estate provides tangible assets that often appreciate over time
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <p className="font-poppins text-[20px] text-[#8E0789]">Here's why Forex trading investment deserves your attention</p>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-2'>
                <p className='font-bold'>1.</p>
                <p><span className='font-bold'>Steady Income: </span> Rental properties offer a consistent stream of passive income, providing financial stability and security.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>2.</p>
                <p><span className='font-bold'>Appreciation: </span>Historically, real estate values tend to increase over time, allowing investors to build wealth through property appreciation.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>3.</p>
                <p><span className='font-bold'>Diversification: </span>Real estate investment offers diversification, reducing overall investment risk compared to traditional assets like stocks and bonds.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>4.</p>
                <p><span className='font-bold'>Tax Benefits: </span>Real estate investors enjoy various tax advantages, including deductions for mortgage interest, property taxes, depreciation, and more.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>5.</p>
                <p><span className='font-bold'>Control: </span>Unlike other investments, real estate allows investors to have direct control over their assets, from property management to renovations and improvements</p>
              </div>
            </div>
            
          </div>

          <p className='text-[#8E0789] cursor-pointer my-[3rem] text-base text-[10px] font-poppins font-semibold text-center'
          onClick={()=>navigate('/register')}
          >Get Started Today</p>
          
        </div>
      </div>
    </MainLayout>
  );
};


export default RealEstate;