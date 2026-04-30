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
        toast.success("Checkout successful 🎉");
    }

    if(carts.length==0){
        return <div className='space-y-6 mx-auto w-2/3 shadow-lg p-6 rounded-lg'>
  
  <h1 className='text-2xl font-bold text-left'>Your Cart</h1>

  <div className='flex flex-col items-center justify-center gap-4 text-center'>
     <CiShoppingCart className='text-5xl text-gray-500' />
    <p className='text-gray-500'>Your cart is empty</p>
  </div>

</div>
    }

    return (
        <div className='space-y-6 mx-auto w-2/3'>
            <p className='text-center text-xl pt-4'>Your Cart</p>

            {
                carts.map(cart => (
                    <div key={cart.id}>
                       <div className='flex justify-between mx-25 p-5 bg-base-200'>
                       <div className='flex'>
                       <span className='text-4xl'>{cart.icon}</span>
                           <div>
                            <p>{cart.name}</p>
                        <p className='font-bold text-xl'>{cart.price}</p>
                           </div>
                        </div>
                       
                       <div>
                       <button onClick={()=>removeCartItem(cart.id)} className='btn text-red-600'>Remove</button>
                       </div>
                        
                       </div>
                    </div>
                ))
            }

            <hr />

            <div className='flex justify-between'>
                <h1 className='text-gray-500'> Total</h1>
                <h1 className='text-xl font-bold'>${total.toFixed(2)}</h1>
            </div>

            <div className='text-center'>
              <button 
                onClick={handleCheckout}
                className='btn w-full bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full'
              >
                Proceed to Checkout
              </button>
            </div>

        </div>
    );
};

export default Carts;