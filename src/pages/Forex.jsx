import services_banner_img from '../assets/eventBg.png';
import MainLayout from '../components/MainLayout';
import forexBg from '../assets/forexBg.png'
import { useNavigate } from 'react-router-dom';

const Forex = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[15vh] md:h-[20vh] lg:h-[25vh]">
        <img
          src={services_banner_img}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-16 xl:pl-48">
        <p className="laviossa w-full text-center text-[20px] md:text-[30px] lg:text-[3rem] font-bold whitespace-nowrap">Forex</p>
        </div>
      </div>

      <div className="px-5 lg:px-12 xl:px-40 py-[1rem]">
        {/* investment background image */}
        <img src={forexBg} alt="" />
        
        <div className='py-[3rem]'>
          <p className="laviossa  text-xl md:text-3xl font-semibold">What About Forex</p>
          <p className="text-base lg:text-lg mt-[0.5rem]">
            Forex, short for foreign exchange, is the decentralized market where currencies are bought, sold, and exchanged at determined prices. With a daily trading volume surpassing $6 trillion, Forex stands as the largest and most liquid financial market worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <p className="font-poppins text-[20px] md:text-[25px] text-[#8E0789]">Here's why Forex trading investment deserves your attention</p>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-2'>
                <p className='font-bold'>1.</p>
                <p><span className='font-bold'>Accessibility: </span> Unlike traditional financial markets, Forex operates 24 hours a day, five days a week, allowing traders to participate at their convenience. Furthermore, the advent of online trading platforms has made Forex accessible to anyone with an internet connection.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>2.</p>
                <p><span className='font-bold'>Liquidity: </span>With its massive trading volume, Forex ensures high liquidity, meaning traders can execute trades swiftly without worrying about price discrepancies or market manipulation.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>3.</p>
                <p><span className='font-bold'>Diversification:  </span>Forex trading enables investors to diversify their portfolios beyond stocks, bonds, and commodities, mitigating risks associated with economic fluctuations or geopolitical events.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>4.</p>
                <p><span className='font-bold'>Leverage: </span>Forex brokers offer leverage, allowing traders to control large positions with a relatively small amount of capital. While leverage magnifies potential profits, it also increases the risk of losses, making risk management essential.</p>
              </div>

              <div className='flex gap-2'>
                <p className='font-bold'>5.</p>
                <p><span className='font-bold'>Educational Resources: </span>Countless educational resources, including tutorials, webinars, and demo accounts, are available to assist traders in understanding the intricacies of Forex trading and refining their strategies.</p>
              </div>
            </div>
            
          </div>

          <p className='text-[#8E0789] cursor-pointer my-[3rem] text-base text-[10px] font-poppins font-semibold text-center'
          onClick={()=>navigate('/register')}
          >Get Started Today</p>
          
        </div>
      </div>

      {/* <section className="w-full">
        <div
          style={{
            height: '433px',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
            boxSizing: 'border-box',
            border: '1px solid #56667F',
            borderRadius: '4px',
            textAlign: 'right',
            lineHeight: '14px',
            fontSize: '12px',
            fontFeatureSettings: 'normal',
            textSizeAdjust: '100%',
            boxShadow: 'inset 0 -20px 0 0 #56667F',
            padding: '0px',
            margin: '0px',
            width: '100%',
          }}
        >
          <div
            style={{
              height: '413px',
              padding: '0px',
              margin: '0px',
              width: '100%',
            }}
          >
            <iframe
              src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes"
              width="100%"
              height="409px"
              scrolling="auto"
              marginWidth="0"
              marginHeight="0"
              frameBorder="0"
              border="0"
              style={{
                border: '0',
                margin: '0',
                padding: '0',
              }}
            ></iframe>
          </div>
          <div
            style={{
              color: '#FFFFFF',
              lineHeight: '14px',
              fontWeight: '400',
              fontSize: '11px',
              boxSizing: 'border-box',
              padding: '2px 6px',
              width: '100%',
              fontFamily: 'Verdana, Tahoma, Arial, sans-serif',
            }}
          ></div>
        </div>
      </section> */}
    </MainLayout>
  );
};

export default Forex;
