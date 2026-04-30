import React from 'react';

const Carts = ({carts}) => {
// mathmatical calculation with reduce function 
    const total= carts.reduce((sum,cart)=>sum+cart.price,0)

    if(carts.length==0){
        return <div> no carts</div>
    }
    return (
        <div className='space-y-6 mx-auto w-2/3'>
            <p className='text-center text-xl'>Your Cart</p>
            {
                carts.map(cart => (
                    <div key={cart.id}>
                       <div className='flex justify-between mx-25 p-5  bg-base-200'>
                       <div className='flex'>
                       <span className='text-4xl'>{cart.icon}</span>
                           <div>
                            <p>{cart.name}</p>
                        <p>{cart.price}</p>
                           </div>
                        </div>
                       
                       <div>
                       <button className='btn text-red-600'>Remove</button>
                       </div>
                        
                       </div>
                    </div>
                ))
                
            }
            {/* cart summary */}
            <hr />
            <div className='flex justify-between'>
                <h1 className=''> Total</h1>
                <h1>${total.toFixed(2)}</h1>
            </div>
        </div>
    );
};

export default Carts;