import React from 'react';

const SelectedProducts = ({cart,handleDeleteCart}) => {
    
    return (
        <div>
             <div className='border border-gray-300 flex items-center gap-6 justify-between'>
                
                   <div className='flex gap-3 items-center p-10'>
                    <img src={cart.icon} alt="" />
                    <div className='flex items-center gap-3 '>
                        <h2 className='font-bold text-3xl'>{cart.name}</h2>
                        <p>${cart.price}</p>
                    </div>
                   </div>
               <button className='btn text-red-500' onClick={()=>handleDeleteCart(cart)}>Remove</button>
               
               </div>
                
        </div>
    );
};

export default SelectedProducts;