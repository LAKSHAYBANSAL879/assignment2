import React, { useState } from 'react';
import PricingSlider from '../Price/PricingSlider';
import './toggle.css'; // Import CSS for custom toggle styling

const PricingPage = () => {
  const [pageviews, setPageviews] = useState(100000);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const calculatePrice = () => {
    const basePrice = 16;
    const multiplier = pageviews / 100000;
    const monthlyPrice = basePrice * multiplier;
    if (billingCycle === 'yearly') {
      return (monthlyPrice * 0.75).toFixed(2);
    }
    return monthlyPrice.toFixed(2);
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-white ">
      <div className="w-full h-96 bg-blue-50  relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="449"
          className="absolute top-0 left-0 w-full h-full"
        >
          <path
            fill="#F1F5FE"
            fillRule="evenodd"
            d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="146"
          height="145"
          className="absolute top-16 right-1/2 z-20"
        >
          <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
            <circle cx="70" cy="88" r="69.5" />
            <circle cx="108" cy="42" r="45.5" />
          </g>
        </svg>
        <div className="relative z-10 flex flex-col items-center p-6">
          <h1 className="sm:text-3xl text-xl font-bold mb-2 mt-10 text-gray-900  md:mr-16">Simple, traffic-based pricing</h1>
          <p className="mb-6 text-gray-400  md:mr-16 font-semibold text-xs sm:text-md">Sign-up for our 30-day trial. No credit card required.</p>
        </div>
      </div>
      <div className="w-full z-20 flex items-center justify-center -mt-36">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full ml-3 mr-3 md:w-1/2  lg:w-1/3">
          <div className='flex flex-row justify-around'>
            <h2 className="text-md mb-4 text-gray-500 dark:text-gray-300 font-semibold ">{(pageviews)/1000}K PAGEVIEWS</h2>
            <h2 className="text-3xl mb-6 text-black dark:text-white font-bold">${calculatePrice()} <span className='text-gray-500 dark:text-gray-400 font-bold text-base '>/ month</span></h2>
          </div>
          <PricingSlider value={pageviews} onChange={setPageviews} />
          <div className="my-6 flex flex-row items-center justify-center">
          <h1 className='lg:text-base text-sm text-gray-500 font-semibold pr-5'>Monthly Billing</h1>
            <label className="toggle-switch">
             
              <input
                type="checkbox"
                checked={billingCycle === 'yearly'}
                onChange={() => setBillingCycle(prevCycle => (prevCycle === 'monthly' ? 'yearly' : 'monthly'))}
              />
             
              <span className="slider"></span>
              
            </label>
            <div className='flex flex-row  gap-2 '>
            <h1 className="pl-4 lg:text-base text-sm text-gray-500 font-semibold ">Yearly Billing </h1>
            <span className= ' font-thin text-xs bg-red-200 dark:bg-red-700 rounded-xl w-fit p-1 text-red-700 dark:text-red-300 pl-2 pr-2 lg:flex hidden'>25% discount</span>
            <span className= ' font-thin text-xs bg-red-200 dark:bg-red-700 rounded-xl w-fit  text-red-700 dark:text-red-300 pl-2 pr-2 lg:hidden h-fit  p-1'>-25%</span>

            </div>
            
          </div>
          <div className='border-t-2 border-gray-200 dark:border-gray-700 flex flex-col gap-3 md:gap-0 md:flex-row pb-2 align-middle'>
            <div className='flex flex-col mt-8'>
              <div className='flex flex-row align-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className='mt-2 mr-2'><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
                <h1 className='text-gray-400 dark:text-gray-300 font-semibold'>Unlimited websites</h1>
              </div>
              <div className='flex flex-row align-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className='mt-2 mr-2'><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
                <h1 className='text-gray-400 dark:text-gray-300 font-semibold'>100% data ownership</h1>
              </div>
              <div className='flex flex-row align-middle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className='mt-2 mr-2'><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
                <h1 className='text-gray-400 dark:text-gray-300 font-semibold'>Email reports</h1>
              </div>
            </div>
            <div className='flex w-fit h-fit justify-center align-middle m-auto'>
              <button className='text-white   bg-blue-950 dark:bg-cyan-700 p-2 px-4 rounded-2xl font-semibold cursor-pointer'>Start my trial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
