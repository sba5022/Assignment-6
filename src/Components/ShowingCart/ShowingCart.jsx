import React from 'react';
import Cartts from './Cartts';

const ShowingCart = ({carts,setBadge, selectedProducts, setSelectedProducts}) => {
    console.log(carts,'showing')
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-10 mt-20'>

            {
                carts.map(cart => {
                    return (
                   <Cartts cart={cart} setBadge={setBadge} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
                    )
                })
            }
          
        </div>
    );
};

export default ShowingCart;