import React from 'react';

const GetStart = () => {
    return (
        <div className='mb-20 '>
            <div className='mb-10 text-center'>
<h2 className='font-bold text-4xl'>Get Started in 3 Steps</h2>
<p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>

            </div>

            <div className=' grid grid-cols-1 md:grid-cols-3  gap-4 px-20'>
<div className="card bg-base-100 w-96 shadow-sm">
     <h4 className='bg-linear-65 from-purple-800 to-purple-400 rounded-full avatar w-6 h-6 mx-80 text-white'>01</h4>
  <div className="card-body items-center mb-10">
   
    <img src="/assets/user.png" alt="" className='w-30 h-30 bg-linear-66 from-purple-200 to-purple-300 rounded-full'/>
    <h2 className="card-title">Create Account</h2>
    <p>Sign up for free in seconds. No credit card <br />required to get started.</p>
    
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
     <h4 className='bg-linear-65 from-purple-800 to-purple-400 rounded-full avatar w-6 h-6 mx-80 text-white'>02</h4>
  <div className="card-body items-center mb-10">
   
    <img src="/assets/package.png" alt="" className='w-30 h-30 bg-linear-66 from-purple-200 to-purple-300 rounded-full'/>
    <h2 className="card-title">Choose Products</h2>
    <p>Browse our catalog and select the tools that fit your needs.</p>
    
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
     <h4 className='bg-linear-65 from-purple-800 to-purple-400 rounded-full avatar w-6 h-6 mx-80 text-white'>03</h4>
  <div className="card-body items-center mb-10">
   
    <img src="/assets/rocket.png" alt="" className='w-30 h-30 bg-linear-66 from-purple-200 to-purple-300 rounded-full'/>
    <h2 className="card-title">Start Creating</h2>
    <p>Download and start using your premium  tools immediately.</p>
    
  </div>
</div>

            </div>
        </div>
    );
};

export default GetStart;