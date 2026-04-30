import { CiShoppingCart } from "react-icons/ci";


const NavBar = ({carts}) => {
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
                <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">{carts.length}</span>
        </div>
                <p>Login</p>
                <button className='btn bg-linear-to-r from-blue-500 to-purple-600 text-[#FFFFFF]'>Get Started</button>

                
            </div>
             
        </nav>
        <div className="divider"></div>
       </>
        
    );
};

export default NavBar;