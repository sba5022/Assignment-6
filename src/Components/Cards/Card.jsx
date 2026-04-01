import React, { useState } from 'react';

const Card = () => {
    const [selectedType,setSelectedType] =useState('products')
    console.log(selectedType,'selected type')
    return (
        <div>
            <div className='mx-100 my-20'>
                <h2 className='font-bold text-4xl mx-25'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed 
                    <br /><span className='mx-35'>to boost your productivity and creativity.</span></p>
                    <div className='mx-50'>
                    <button onClick={() => setSelectedType('products')} className={` btn ${selectedType === 'products'? 'bg-linear-65 from-purple-800 to-purple-400':'bg-white'}  rounded-r-none rounded-l-xl`}>Products</button>
                    <button onClick={() => setSelectedType('card')} className={`btn rounded-l-none rounded-r-xl ${selectedType === 'card'? 'bg-linear-65 from-purple-800 to-purple-400':'bg-white'}`} >Cart (2)</button>
                    </div>
            </div>
            
        </div>
    );
};

export default Card;