import React from 'react';
import { Play } from 'lucide-react';

const Ban = () => {
    return (
     <div className=''>
           <div className='grid grid-cols-1 md:grid-cols-2 mx-50 gap-20 mb-30'>
            <div className='my-15'>
          <p className=' text-purple-900 bg-[#E1E7FF] rounded-full'>New: AI-Powered Tools Available</p>
                <h2 className='text-5xl font-bold'>Supercharge Your 
                    <br />Digital Workflow</h2>
                <p className='text-[#627382] mb-10'>Access premium AI tools, design assets, templates, and productivitybr
                    <br /> software—all in one place. Start creating faster today.
                    <br />Explore Products
</p>
<div className='flex gap-3'>
<button className=' bg-linear-65 from-purple-800 to-purple-400 rounded-full w-50'>Explore Products</button>
<div className=''><button className='btn btn-outline btn-primary border  rounded-full w-50 text-center'><Play />Watch Demo</button></div>
</div>
            </div>
            <div className='w-98 h-22'>
                <img src="/src/assets/banner.png" alt="" className='shadow'/>
            </div>
        </div>  

        <div className='bg-linear-65 from-indigo-600 to-purple-500'>
<div className="flex flex flex-col md:flex-row w-full gap-10 px-4 sm:px-8 lg:px-20 py-15">
  <div><h2 className='font-bold text-5xl  text-white'>50K+</h2>
  <p className='text-white'>Active Users</p>
  </div> 
  <div className="divider divider-horizontal hidden md:block"></div>
  <div>
<h2 className='font-bold text-5xl  text-white'>200+</h2>
<p className='text-white'>Premium Tools</p>
  </div>
  <div className="divider divider-horizontal hidden md:block"></div>
  <div>
<h2 className='font-bold text-5xl  text-white'>4.9</h2>
<p className='text-white'>Rating</p>
  </div>
</div>
        </div>
        </div>
        
    );
};

export default Ban;