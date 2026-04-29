
import BannerImg from "../../assets/products/banner.png"
import { FaRegDotCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";




const Banner = () => {
    return (
      
                <div className='flex justify-between mx-25 py-4'>
                    <div>
                      <div>
                         
                       <div className="badge badge-soft badge-primary mb-4" > <FaRegDotCircle />
 New: AI-Powered Tools Available</div>
                      </div>
                       <h1 className='text-7xl font-bold mb-4 '>Supercharge Your <br />Digital Workflow</h1>
                       <p className='text-[#627382] text-[18px]  mb-8'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />

Explore Products
</p>
                    <div className='flex gap-4'>
                        <button className='btn bg-linear-to-r from-blue-500 to-purple-600 text-[#FFFFFF]'>Explore Products</button>
                        <button className='btn text-[#4F39F6]'> <CiPlay1 />
 Watch Demo</button>
                    </div>
                    </div>
                    <div >
                        <img className="max-h-[600px] w-full" src= {BannerImg} alt="Banner" />
                    </div>
                </div>
     
    );
};

export default Banner;