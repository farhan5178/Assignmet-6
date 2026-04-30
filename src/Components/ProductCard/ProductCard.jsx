import {use} from 'react';
// import IconImg from '../../assets/products/writing_2327400 1.png'
import { FaCheck } from "react-icons/fa";
import toast from './../../../node_modules/react-hot-toast/src/index';



// fetch data api call 
const productsPromise=fetch('./tools.json').then(res=>res.json());
const ProductCard = ({carts,setCarts}) => {
    const products=use(productsPromise)
    //  console.log(products)
    const addToCart=(product)=>{
           const isExist=carts.find(c=>c.id===product.id);
           if (isExist){
            toast.error('item is already added')
            return
           }
        setCarts([...carts,product]) // destructuring ager cart er info jeno delete na hoy
        console.log(carts);
        toast.success('item added to cart')
    }
    console.log(carts)

    return (
        <div className='grid grid-cols-3 justify-center mt-10 mx-25 gap-4'>
            {/* dynamic data showing in card  */}
            {
                products.map(product=>(
                  
                   <div 
                   key={product.id}
                   className=' card bg-base-100 w-96 shadow-sm p-4'>
                     <div className='flex justify-between mb-4'>
                        <span className='text-2xl'>{product.icon}</span>
                        <div className="badge badge-soft badge-warning">{product.tag}</div>
                     </div>
                     <div className='mb-4 '>
                        <h3 className='text-2xl font-bold'>{product.name}</h3>
                     <p className='text-[#627382] text-[16px]'>{product.description}</p>
                     <p><span className='font-semibold text-2xl'>{product.price}</span><span className='text-[#627382] text-[16px]'>/mo</span></p>
                    <ul className='text-[#627382] text-[16px] '>
  {product.features.map((feature, index) => (
    <li key={index} className="flex items-center gap-2">
      <FaCheck className="text-green-500" />
      {feature}
    </li>
  ))}
</ul>
                    
                     </div>
                     <div className='text-center'>
                        <button onClick={()=>addToCart(product)}  className='btn btn-wide bg-linear-to-r from-blue-500 to-purple-600 rounded-full'>Buy Now</button>
                     </div>
                   </div>
                ))
            }
        </div>
    );
};

export default ProductCard;