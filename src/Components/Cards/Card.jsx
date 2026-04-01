import React from 'react';

const Card = () => {
    return (
        <div>
            <div className='mx-100 my-20'>
                <h2 className='font-bold text-4xl mx-25'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed 
                    <br /><span className='mx-35'>to boost your productivity and creativity.</span></p>
                    <div className='flex gap-3 mx-50'>
                    <button>Products</button>
                    <button>Cart (2)</button>
                    </div>
            </div>
            
        </div>
    );
};

export default Card;