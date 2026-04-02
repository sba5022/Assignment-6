import React, { } from 'react';
import Card from '../Cards/Card';
import SelectedProducts from '../Selected/SelectedProducts';


const Product = ({cards}) => {
  
    console.log(cards,'cards')
    return (
        <div className='flex flex-wrap justify-center gap-6'>
        
{
    cards.map((card )=> {
       
        return  <div className="card w-96 bg-base-100 shadow-sm mb-30">
         
  <div className="card-body flex flex-col ">
   <div className='flex gap-50'> <img src={card.icon} alt="" className='rounded-full w-10 h-10 border border-gray-300'/>
    <span className=" badge badge-xs badge-warning">{card.tag}</span>
    </div>

    <div className="">
      <h2 className="text-3xl font-bold">{card.name}</h2>
      <p>{card.description}</p>
      <span className="text-xl">${card.price}/{card.period}</span>
    </div>
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">
  {
    card.features.map((feature, index) => (
      <li key={index} className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 me-2 inline-block text-success"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>{feature}</span>
      </li>
    ))
  }
</ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
    </div>
  </div>
</div>
    })
}

   {selectedType === 'products'? (<Card Product={Product}/>):(<SelectedProducts/>)}   
        <Card Product={Product} />     
        </div>
    );
};

export default Product;