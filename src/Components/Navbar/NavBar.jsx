import { CiShoppingCart } from "react-icons/ci";

const NavBar = ({carts}) => {
    return (
       <>
        <nav className='flex justify-between items-center px-4 md:px-8 lg:px-20 py-4 '>
            
            <div>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4F39F6] '> DgiTools</h2>
            </div>

            {/* menu */}
            <div className='hidden md:flex gap-6 lg:gap-8 items-center'>
                <p>Products</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Testimonials</p>
                <p>FAQ</p>
            </div>

            {/* right side */}
            <div className='flex items-center gap-3 md:gap-4'>

                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    <span className="badge badge-sm indicator-item bg-red-500 text-white border-none">
                        {carts.length}
                    </span>
                </div>

                <p className="hidden sm:block">Login</p>

                <button className='btn btn-sm sm:btn-md text-[10px] sm:text-sm md:text-base px-3 md:px-5 bg-linear-to-r from-blue-500 to-purple-600 text-[#FFFFFF] rounded-full border-none min-h-0 h-8 sm:h-10 md:h-12'>
                    Get Started
                </button>

            </div>

        </nav>

        <div className="divider my-0"></div>

        {/* mobile menu */}
        <div className="flex md:hidden flex-wrap justify-center gap-x-4 gap-y-2 py-3 px-4 text-xs sm:text-sm">
            <p>Products</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>FAQ</p>
        </div>
       </>
    );
};

export default NavBar;