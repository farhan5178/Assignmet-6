
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
               <div  className="gap-2">
                 <button onClick={() => setActiveTab('products')} className="btn rounded-full  bg-linear-to-r from-blue-500 to-purple-600 ">Products</button>
                <button onClick={() => setActiveTab('cart')} className="btn ">Cart (2)</button>
               </div>

            </div>
            {/* dynamic content */}

            <div>
                {/*
                */}
        {activeTab==='products'? <ProductCard carts={carts} setCarts={setCarts} ></ProductCard>:( <Carts carts={carts}></Carts>)}
            </div>
            
        </div>
    );
};

export default AllProducts;