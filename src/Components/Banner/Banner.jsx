import BannerImg from "../../assets/products/banner.png"
import { FaRegDotCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
    return (
      
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8 lg:px-20 py-6 md:py-8 gap-6 lg:gap-0'>
                    <div className='text-center lg:text-left'>
                      <div>
                         
                       <div className="badge badge-soft badge-primary mb-4" > <FaRegDotCircle />
 New: AI-Powered Tools Available</div>
                      </div>
                       <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 '>Supercharge Your <br />Digital Workflow</h1>
                       <p className='text-[#627382] text-sm sm:text-base md:text-[18px] mb-6 md:mb-8'>Access premium AI tools, design assets, templates, and productivity <br className="hidden md:block" />
software—all in one place. Start creating faster today. <br className="hidden md:block" />

Explore Products
</p>
                    <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'>
                        <button className='btn text-sm sm:text-base bg-linear-to-r from-blue-500 to-purple-600 text-[#FFFFFF]'>Explore Products</button>
                        <button className='btn text-sm sm:text-base text-[#4F39F6]'> <CiPlay1 />
 Watch Demo</button>
                    </div>
                    </div>
                    <div className='w-full lg:w-auto'>
                        <img className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] w-full object-contain" src= {BannerImg} alt="Banner" />
                    </div>
                </div>
     
    );
};

export default Banner;