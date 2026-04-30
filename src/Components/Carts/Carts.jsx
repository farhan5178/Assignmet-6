import React from 'react';
import toast from './../../../node_modules/react-hot-toast/src/index';
import { CiShoppingCart } from "react-icons/ci";

const Carts = ({setCarts,carts}) => {

    const total = carts.reduce((sum,cart)=>sum+cart.price,0)

    const removeCartItem=(id)=>{
        const remainingCarts=carts.filter(cart=>cart.id!==id)
        setCarts(remainingCarts)
        toast.success('Item removed from cart');
    }

    const handleCheckout = () => {
        if(carts.length === 0){
            toast.error("Cart is already empty");
            return;
        }

        setCarts([]);
        toast.success("Checkout successful! Thank you for your purchase.");
    }

    if(carts.length==0){
        return <div className='space-y-6 mx-auto w-[95%] md:w-2/3 shadow-lg p-6 rounded-lg my-10'>
  
  <h1 className='text-2xl font-bold text-left'>Your Cart</h1>

  <div className='flex flex-col items-center justify-center gap-4 text-center py-10'>
     <CiShoppingCart className='text-6xl text-gray-500' />
    <p className='text-gray-500'>Your cart is empty</p>
  </div>

</div>
    }

    return (
        <div className='space-y-6 mx-auto w-[95%] md:w-2/3 lg:w-1/2 px-2 md:px-0 mb-10'>
            <p className='text-center text-xl md:text-2xl pt-6 font-semibold'>Your Cart</p>

            <div className='space-y-4'>
                {
                    carts.map(cart => (
                        <div key={cart.id}>
                           <div className='flex justify-between items-center p-4 md:p-5 bg-base-200 rounded-lg'>
                           <div className='flex items-center gap-3 md:gap-4'>
                               <span className='text-3xl md:text-4xl'>{cart.icon}</span>
                                   <div>
                                    <p className='text-sm md:text-base'>{cart.name}</p>
                                <p className='font-bold text-lg md:text-xl'>${cart.price}</p>
                                   </div>
                            </div>
                           
                           <div>
                           <button onClick={()=>removeCartItem(cart.id)} className='btn btn-sm md:btn-md text-red-600 border-red-200 hover:bg-red-50'>Remove</button>
                           </div>
                           
                           </div>
                        </div>
                    ))
                }
            </div>

            <hr className='border-gray-300' />

            <div className='flex justify-between items-center px-2'>
                <h1 className='text-gray-500 text-lg'> Total</h1>
                <h1 className='text-xl md:text-2xl font-bold'>${total.toFixed(2)}</h1>
            </div>

            <div className='text-center pb-10'>
              <button 
                onClick={handleCheckout}
                className='btn w-full bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full border-none h-12 md:h-14 text-base md:text-lg'
              >
                Proceed to Checkout
              </button>
            </div>

        </div>
    );
};

export default Carts;