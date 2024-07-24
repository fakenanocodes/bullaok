import services_banner_img from '../assets/eventBg.png';
import MainLayout from '../components/MainLayout';
import cannabis_1 from '../assets/cannabis_1.png'
import cannabis_2 from '../assets/cannabis_2.png'
import { useNavigate } from 'react-router-dom';

const Cannabis = () => {
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
          <p className="laviossa w-full text-center text-[18px] md:text-[30px] lg:text-[3rem] font-bold whitespace-nowrap">CANNABIS INVESTMENT</p>
          {/* <p className="laviossa text-xl md:w-[30rem]">All about forex</p> */}
        </div>
      </div>

      <div className="px-5 lg:px-12 xl:px-40 py-[1rem]">
        {/* investment background image */}
        <div className='flex justify-between'>
            <img src={cannabis_1} alt="" className='w-[40%]'/>
            <img src={cannabis_2} alt="" className='w-[40%]'/>
        </div>
        
        <div className='py-[3rem]'>
          <p className="laviossa text-xl md:text-3xl font-semibold capitalize">Cannabis</p>
          <p className="text-base lg:text-lg mt-[0.5rem]">
          Are you seeking new opportunities to diversify your investment portfolio? Look no further than the rapidly expanding cannabis industry. With the legalization trend sweeping across various regions and the growing acceptance of cannabis for medical and recreational use, investing in this burgeoning sector presents a unique chance to reap significant returns.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <p className="font-poppins text-[20px] text-[#8E0789]">Key Investment Areas</p>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-2'>
                <p className='font-bold'>1.</p>
                <p><span className='font-bold'>Cultivation and Production: </span> Investing in companies involved in cannabis cultivation and production can offer substantial returns as demand for high-quality cannabis products continues to rise.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>2.</p>
                <p><span className='font-bold'>Biotechnology and Pharmaceuticals: </span>The medicinal properties of cannabis have garnered attention from researchers and healthcare professionals alike. Investing in companies focused on cannabis-derived pharmaceuticals and biotechnology can be lucrative in this evolving landscape.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>3.</p>
                <p><span className='font-bold'>Ancillary Services: </span>Beyond the plant itself, there's a wealth of opportunities in ancillary services such as packaging, equipment, technology, and consulting. These sectors play a crucial role in supporting the growth and efficiency of the cannabis industry.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>4.</p>
                <p><span className='font-bold'>Retail and Distribution: </span>With the increasing acceptance of cannabis consumption, retail and distribution channels are vital components of the supply chain. Investing in companies that specialize in retail storefronts, e-commerce platforms, and distribution networks can yield significant returns.</p>
              </div>
            </div>
            
          </div>

          <p className='text-[#8E0789] hover:text-[#680865] cursor-pointer my-[3rem] text-base text-[10px] font-poppins font-semibold text-center'
          onClick={()=>navigate('/register')}
          >Get Started Today</p>
          
        </div>
      </div>
    </MainLayout>
  );
};

export default Cannabis;