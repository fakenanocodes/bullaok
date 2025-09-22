import images from '../assets/presido.png';
import { image } from '../assets/team/teams';
import Layout from '../components/Layout';

export default function Regitrastion(){
    
    return (
        <Layout>
            <div>
                <header
                    className="flex flex-col lg:flex-row px-8 items-center bg-[#fff]  justify-center md:gap-16 gap-8 bg-transparent lg:h-96 lg:py:0 py-8  bg-cover bg-center bg-no-repeat  w-full relative"
                    style={{
                        backgroundImage: `url(${image.d})`,
                    }}
                    >
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-[#30022E] opacity-80"
                        style={{ mixBlendMode: 'multiply' }}
                    ></div>
                    <div className=" lg:px-[150px] px-2 text-center w-full relative z-20 text-[#fff] h-full gap-7 flex justify-center items-center">
                        <h2 className="lg:text-6xl text-3xl  font-bold font-[laviossa] ">
                            REGISTRATION
                        </h2>
                    </div>
                </header>
                <div className='bg-white p-5 space-y-3'>
                    <p>A Multilevel Wealth Management, Advisory & Trading Company </p>
                    <p>BULL OAK CAPITAL LLC</p> 
                    <p>CRD# 170325/SEC# : 801 - 124736 </p>
                    <p>FINRA- <span className='text-[#30022E] opacity-80'>Approved </span></p>  
                    <p>SEC - <span className='text-[#30022E] opacity-80'>Approved </span></p> 
                    <p>Bulloak is a FINRA-registered firm, regulated by the SEC, and fully compliant with the highest 
                    regulatory standards. We are dedicated to upholding transparency, fostering trust, and driving 
                    long-term success for our investors.</p>
                </div>
            </div>
        </Layout>
    )
}