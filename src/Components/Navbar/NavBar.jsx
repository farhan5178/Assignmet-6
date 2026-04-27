import { CiShoppingCart } from "react-icons/ci";


const NavBar = () => {
    return (
       <>
        <nav className='flex justify-between mx-25 py-4 '>
            <div>
     <h2 className='text-4xl font-bold text-[#4F39F6] '> DgiTools</h2>
    
            </div>
             <div className='flex gap-8 items-center'>
        <p>Products</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Testimonials</p>
        <p>FAQ</p>
     </div>

            <div className='flex  items-center gap-4'>
                <p><CiShoppingCart /></p>
                <p>Login</p>
                <button className='btn bg-linear-to-r from-blue-500 to-purple-600 text-[#FFFFFF]'>Get Started</button>

                
            </div>
             
        </nav>
        <div className="divider"></div>
       </>
        
    );
};

export default NavBar;