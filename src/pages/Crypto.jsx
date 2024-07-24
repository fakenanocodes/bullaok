import services_banner_img from '../assets/eventBg.png';
import MainLayout from '../components/MainLayout';
import cryptoBg from '../assets/cryptoBg.png'
import { useNavigate } from 'react-router-dom';

const Crypto = () => {
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
          <p className="laviossa w-full text-center text-[18px] md:text-[30px] lg:text-[3rem] font-bold whitespace-nowrap">CRYPTO INVESTMENT</p>
          {/* <p className="laviossa text-xl md:w-[30rem]">All about forex</p> */}
        </div>
      </div>

      <div className="px-5 lg:px-12 xl:px-40 py-[1rem]">
        {/* investment background image */}
            <img src={cryptoBg} alt="" className=''/>
        
        <div className='py-[3rem]'>
          <p className="laviossa text-xl md:text-3xl font-semibold capitalize">About Crypto Currency</p>
          <p className="text-base lg:text-lg mt-[0.5rem]">
          What is cryptocurrency, you might ask? Cryptocurrency is a digital or virtual form of currency that utilizes cryptography for security and operates independently of a central authority, such as a government or bank. Bitcoin, Ethereum, and Litecoin are some of the most well-known cryptocurrencies, but the market boasts thousands of others, each with its unique features and purposes.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <p className="font-poppins text-[20px] text-[#8E0789]">Investing in cryptocurrency offers several advantages::</p>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-2'>
                <p className='font-bold'>1.</p>
                <p><span className='font-bold'>Diversification: </span> Adding cryptocurrency to your investment portfolio can help diversify your assets, reducing overall risk. Cryptocurrencies often have low correlation with traditional asset classes like stocks and bonds, making them an excellent addition for spreading risk.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>2.</p>
                <p><span className='font-bold'>Potential for High Returns: </span>The crypto market is known for its volatility, which can present both risks and rewards. While prices can fluctuate dramatically in the short term, many investors have seen substantial gains over time. However, it's essential to approach cryptocurrency investment with caution and do thorough research before making any decisions.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>3.</p>
                <p><span className='font-bold'>Accessibility: </span>Unlike traditional financial markets, which may have barriers to entry such as high minimum investments or geographical restrictions, cryptocurrency markets are generally more accessible. Anyone with an internet connection and a digital wallet can participate in buying, selling, and trading cryptocurrencies.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>4.</p>
                <p><span className='font-bold'>Innovation and Technological Advancement: </span>Cryptocurrencies are built on blockchain technology, which has the potential to revolutionize various industries beyond finance, including healthcare, supply chain management, and voting systems. By investing in cryptocurrencies, you're not only investing in digital assets but also supporting innovation and technological advancement.</p>
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

export default Crypto;