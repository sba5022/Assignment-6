import React, { useEffect, useState } from 'react';

const Cartts = ({cart,setBadge, selectedProducts, setSelectedProducts}) => {
   
    const [isChoosed,setIsChoosed]= useState(false);
 useEffect(() => {
    if (isChoosed) {
      const timer = setTimeout(() => {
        setIsChoosed(false);
      }, 2000);

      // cleanup (VERY IMPORTANT)
      return () => clearTimeout(timer);
    }
  }, [isChoosed]);
  const handleAddToCart = () => {
      setIsChoosed(true); setBadge(prev => prev + 1);
    }
     setSelectedProducts([...selectedProducts, cart]);
    
    return (
        
             <div className="card w-96 bg-base-100 shadow-sm mb-20">
                     <div className="card-body ">
   <div className='flex gap-50'> <img src={cart.icon} alt="" className='rounded-full w-10 h-10 border border-gray-300'/>
    <span className=" badge badge-xs badge-warning">{cart.tag}</span>
    </div>

    <div className="">
      <h2 className="text-3xl font-bold">{cart.name}</h2>
      <p>{cart.description}</p>
      <span className="text-xl">${cart.price}/{cart.period}</span>
    </div>
    
    <ul className="mt-6 flex flex-col gap-2 text-xs">
  {
    cart.features.map((feature, index) => (
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
      <button onClick={handleAddToCart} className={`btn  btn-block rounded-full ${
              isChoosed ? 'bg-green-500 text-white' : 'btn-primary'
            }`}>
            {isChoosed === true? (<span className="flex items-center justify-center gap-2">
                ✔ Add to Cart
              </span>) : ('Buy Now')}</button>
    </div>
  </div>
                   </div>
       
    );
};

export default Cartts;