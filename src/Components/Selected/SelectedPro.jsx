import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const SelectedPro = ({selectedProducts,setSelectedProducts, badge, setBadge}) => {
    console.log(selectedProducts,'selected products')
    const handleDeleteCart = (cart) => {
console.log(selectedProducts,'delete cart')
const filteredProducts = selectedProducts.filter(selectedProducts=> selectedProducts.name !== cart.name);
console.log(filteredProducts,'filtered products')
setSelectedProducts(filteredProducts);
setBadge(prev => prev - 1);
    }
    return (
        <div>
           {
            selectedProducts.map( cart => {
                return(
               <div className='border border-gray-300 flex items-center gap-6 justify-between'>
                
                   <div className='flex gap-3 items-center p-10'>
                    <img src={cart.icon} alt="" />
                    <div className='flex items-center gap-3 '>
                        <h2 className='font-bold text-3xl'>{cart.name}</h2>
                        <p>${cart.price}</p>
                    </div>
                   </div>
               <button className='btn text-red-500' onClick={()=>handleDeleteCart(cart)}><MdDeleteOutline /></button>
               </div>
                )
            })
           }
        
        </div>
    );
};

export default SelectedPro;