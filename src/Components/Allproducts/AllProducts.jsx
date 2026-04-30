
import ProductCard from './../ProductCard/ProductCard';
import Carts from './../Carts/Carts';
import { useState } from 'react';

const AllProducts = ({carts,setCarts}) => {


    // togoling part
        const [activeTab,setActiveTab]=useState('products')
    return (
        <div className="mt-20">
            {/* static content */}
            <div className="text-center space-y-4">
                <h1 className="text-6xl font-bold">Premium Digital Tools</h1>
                <p className="text-[#627382] text-[16px]">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
               <div  className="flex justify-center gap-4">
                <button
  onClick={() => setActiveTab('products')}
  className={`btn rounded-full transition-all duration-300
    ${activeTab === 'products'
      ? "bg-linear-to-r from-blue-500 to-purple-600 text-white"
      : "bg-white text-gray-600 border"}
  `}
>
  Products
</button>
               <button
  onClick={() => setActiveTab('cart')}
  className={`btn rounded-full transition-all duration-300
    ${activeTab === 'cart'
      ? "bg-linear-to-r from-blue-500 to-purple-600 text-white"
      : "bg-white text-gray-600 border"}
  `}
>
  Cart ({carts.length})
</button>
               </div>

            </div>
            {/* dynamic content */}

            <div>
                {/*
                */}
        {activeTab==='products'? <ProductCard carts={carts} setCarts={setCarts} ></ProductCard>:( <Carts setCarts={setCarts} carts={carts}></Carts>)}
            </div>
            
        </div>
    );
};

export default AllProducts;