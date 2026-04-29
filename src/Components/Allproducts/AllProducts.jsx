
import ProductCard from './../ProductCard/ProductCard';

const AllProducts = () => {
    return (
        <div className="mt-20">
            {/* static content */}
            <div className="text-center space-y-4">
                <h1 className="text-6xl font-bold">Premium Digital Tools</h1>
                <p className="text-[#627382] text-[16px]">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
               <div  className="gap-2">
                 <button className="btn rounded-full  bg-linear-to-r from-blue-500 to-purple-600 ">Products</button>
                <button className="btn ">Cart (2)</button>
               </div>

            </div>
            {/* dynamic content */}

            <div>
                <ProductCard></ProductCard>
            </div>
            
        </div>
    );
};

export default AllProducts;