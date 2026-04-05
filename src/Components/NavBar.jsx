import React from 'react';

const NavBar = ({ badge }) => {
    return (
      <div className="navbar bg-base-100 shadow-sm mb-10">
  <div className="">
    <a className="btn btn-ghost text-4xl bg-linear-65 from-purple-800 to-purple-400 bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className='hidden lg:flex gap-6'>
    <a href="">Products</a>
    <a href="">Features</a>
    <a href="">Pricing</a>
    <a href="">Testimonials</a>
    <a href="">FAQ</a>
  </div>
  <div className="grid grid-cols-3 gap-6">
    
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
         <span className="badge badge-sm indicator-item">{badge}</span>
        </div>
      </div>
     <h4>Login</h4>
    
    <div className="">
      <div tabIndex={0} role="button" className="btn btn-ghost rounded-md bg-linear-65 from-purple-800 to-purple-400">
        <div className=" ">
          <h3 className=''>Get Started</h3>
        </div>
      </div>
     
    </div>
  </div>
</div>
    );
};

export default NavBar;