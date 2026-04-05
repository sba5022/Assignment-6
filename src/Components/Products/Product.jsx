import React, { use, useState } from 'react';
import ShowingCart from '../ShowingCart/ShowingCart';
import SelectedPro from '../Selected/SelectedPro';

const Product = ({productPromise ,setBadge, badge}) => {
    console.log(productPromise);
    const carts= use(productPromise);
    console.log(carts);
   const [buttonType, setButtonType] = useState('products');
   console.log(buttonType,'buttonType');
   const [selectedProducts, setSelectedProducts] = useState([]);
    return (
        <div className='container mx-auto text-center mt-20 space-y-5'>
          <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
          <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
          <div>
            <button onClick={() => setButtonType('products')} className={`btn ${ buttonType === 'products'? 
                'bg-linear-65 from-purple-800 to-purple-400':
                'bg-white'} rounded-r-none rounded-l-xl`}>Products</button>
            <button onClick={() => setButtonType('carts')} className={`btn ${ buttonType === 'carts'? 
                'bg-linear-65 from-purple-800 to-purple-400':
                'bg-white'} rounded-l-none rounded-r-xl`}>Carts({badge})</button>
          </div>
      { buttonType === 'products'? (<ShowingCart carts={carts} setBadge={setBadge} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>) : 
      (<SelectedPro  setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts} badge={badge} setBadge={setBadge}/>) }     
        </div>
    );
};

export default Product;